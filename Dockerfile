# syntax=docker/dockerfile:1

# ── Stage 1: build ────────────────────────────────────────────────────────────
FROM node:24-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Dependency layer — cached unless lockfile changes
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# Pre-compress text assets at build time so nginx serves files directly
# without spending CPU on compression per request
RUN apk add --no-cache brotli && \
    find dist -type f \( \
      -name "*.html" -o -name "*.css" -o -name "*.js" \
      -o -name "*.json" -o -name "*.svg" -o -name "*.xml" \
    \) | while read f; do \
      gzip -9 -k "$f"; \
      brotli -q 11 -k "$f"; \
    done

# ── Stage 2: serve ────────────────────────────────────────────────────────────
# macbre/nginx-brotli has brotli compiled in — no apk install or load_module needed
FROM macbre/nginx-brotli:latest AS runner

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

RUN printf 'server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
\n\
    # Brotli — served from pre-built .br files, no runtime CPU cost\n\
    brotli_static on;\n\
\n\
    # Gzip — served from pre-built .gz files for older clients\n\
    gzip_static on;\n\
    gzip_vary on;\n\
\n\
    # Binary formats — already compressed, never gzip again\n\
    location ~* \\.(avif|webp|webm|woff2|woff|ttf|ico|png|jpg|jpeg)$ {\n\
        expires 1y;\n\
        add_header Cache-Control "public, immutable";\n\
    }\n\
\n\
    # Hashed assets — safe to cache forever\n\
    location ~* \\.(css|js)$ {\n\
        expires 1y;\n\
        add_header Cache-Control "public, immutable";\n\
    }\n\
\n\
    location / {\n\
        try_files $uri $uri/ $uri.html =404;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
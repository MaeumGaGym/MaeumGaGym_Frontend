FROM node:20.10.0-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY manifests ./

RUN yarn install --immutable

COPY packs ./

ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL ${NEXT_PUBLIC_BASE_URL}

ENV NODE_ENV production

RUN yarn workspace @service/webview build

FROM node:20.10.0-alpine AS runner
WORKDIR /app


RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/./ ./

USER nextjs

CMD yarn workspace @service/webview start
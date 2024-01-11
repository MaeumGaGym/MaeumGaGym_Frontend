FROM node:20.10.0-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY manifests ./

RUN yarn install --immutable

COPY packs ./

RUN yarn workspace @service/user build

FROM node:20.10.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/./ ./

USER nextjs

CMD yarn workspace @service/user start
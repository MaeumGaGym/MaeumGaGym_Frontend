FROM base AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY manifests ./

RUN yarn install --immutable

COPY packs ./

ENV NODE_ENV production

FROM node:20.10.0-alpine AS runner
WORKDIR /app

COPY --from=builder app/./ ./

CMD yarn workspace @service/docs start
EXPOSE 3000

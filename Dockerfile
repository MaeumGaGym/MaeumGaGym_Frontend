FROM node:20.10.0-alpine
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json .
COPY yarn.lock .

RUN yarn set version 3.6.4

RUN yarn install

COPY . .
FROM node:14-alpine AS deps 
LABEL maintainer="utvikling@online.ntnu.no"

ENV WORKDIR=/srv/app
ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat
WORKDIR $WORKDIR
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Building step
FROM node:14-alpine AS builder
ENV WORKDIR=/srv/app
WORKDIR $WORKDIR
COPY . .
COPY --from=deps $WORKDIR/node_modules ./node_modules
RUN yarn build

FROM node:14-alpine AS runner
ENV WORKDIR=/srv/app
WORKDIR $WORKDIR
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder $WORKDIR/public ./public
COPY --from=builder --chown=nextjs:nodejs $WORKDIR/.next ./.next
COPY --from=builder $WORKDIR/node_modules ./node_modules
COPY --from=builder $WORKDIR/package.json ./package.json
USER nextjs
EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start", "--hostname", "0.0.0.0"]

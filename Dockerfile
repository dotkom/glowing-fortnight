FROM node:14-alpine
LABEL maintainer="dotkom@online.ntnu.no"

ENV NODE_ENV=production
WORKDIR /app

# RUN apk add --no-cache libc6-compat
COPY . .
RUN yarn set version berry && \
    yarn install --immutable --immutable-cache --check-cache --inline-builds && \
    yarn build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start", "--hostname", "0.0.0.0"]

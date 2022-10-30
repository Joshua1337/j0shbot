FROM node:19-alpine AS base
COPY src /app/src
COPY package.json package-lock.json /app/

FROM base as build
RUN cd /app && \
    apk add git && \
    npm install

FROM base as run
COPY --from=build /app/node_modules /app/node_modules
COPY j0shbot.js /app

COPY img/ /app/img
COPY text/ /app/text
COPY video/ /app/video
COPY voice/ /app/voice

WORKDIR /app
CMD ["npm", "start"]
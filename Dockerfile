FROM --platform=linux/arm64 node:19-alpine

WORKDIR /client

COPY package*.json .

RUN npm install

COPY . .

RUN npm install @stomp/stompjs

RUN npm run build

CMD npm run preview

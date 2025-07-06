FROM node:19-alpine

WORKDIR .

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD npm run preview

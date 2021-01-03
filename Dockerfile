FROM node:12-alpine-3.12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /usr/src/toxicity

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "serve"]
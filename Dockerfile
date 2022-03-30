FROM node:16.14-alpine

RUN mkdir -p /usr/app && chown -R node:node /usr/app
WORKDIR /usr/app
COPY package*.json ./
USER node
RUN npm install --quiet
COPY . .

CMD ["npm", "run", "start-dev"]
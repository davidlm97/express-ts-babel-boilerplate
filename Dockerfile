FROM node:16.14-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm install --quiet
COPY . .
USER node

CMD ["npm", "run", "start-dev"]

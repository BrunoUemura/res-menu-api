FROM node:16-alpine
WORKDIR /usr/app
COPY package*.json ./
COPY .env .
RUN npm install
COPY . .
RUN npm run build
RUN npm run postinstall
EXPOSE 5000
CMD ["npm", "start"]
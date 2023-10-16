FROM node:16.3.0

WORKDIR /app

EXPOSE 5173

RUN npm i

CMD ["npm", "run", "dev"]

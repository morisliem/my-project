FROM node:15

# run project in docker image /app
WORKDIR /app

# dot means /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE $PORT
CMD ["npm", "run", "dev"]
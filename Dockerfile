FROM node:15

# run project in docker image /app
WORKDIR /app

# dot means /app
COPY package.json .
RUN npm install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

COPY . ./
CMD ["npm", "run", "dev"]
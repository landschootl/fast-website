FROM node:lts-alpine

# install simple git for serving static content
RUN apk update && apk upgrade && \
    apk add --no-cache git

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 5000
CMD [ "npm", "start" ]
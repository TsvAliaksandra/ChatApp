FROM node:10-alpine

#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}

# Go to client directory
WORKDIR /usr/src/app

# Install client dependencies
COPY /client/package*.json /usr/src/app/client/
RUN npm install

COPY client/. /usr/src/app/client/

WORKDIR /usr/src/app/client/

RUN npm run build

# Go to server directory
WORKDIR /usr/src/app/server

# Install server dependencies
COPY server/package*.json /usr/src/app/server/
RUN npm install

# Copy server files
COPY server/. /usr/src/app/server/

EXPOSE 8080

CMD ["npm", "run", "start"]
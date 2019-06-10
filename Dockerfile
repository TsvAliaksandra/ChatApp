FROM node:10

MAINTAINER Alex_Tsv

ENV NODE_ENV=${NODE_ENV}

# Go to client directory
WORKDIR /usr/src/app/client

# Install client dependencies
COPY /client/package*.json ./
RUN npm install

COPY client/. .

#Build client app
RUN npm run build

# Go to server directory
WORKDIR /usr/src/app/server

# Install server dependencies
COPY /server/package*.json ./
RUN npm install

# Copy server files
COPY server/. .

#COPY ./wait-for-it.sh /usr/src/app/
#RUN chmod +x /usr/src/app/wait-for-it.sh

EXPOSE 8080

CMD ["npm", "run", "start"]

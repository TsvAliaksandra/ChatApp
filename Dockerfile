FROM node:10-alpine

MAINTAINER Alex_Tsv

#ARG TEST
#ENV TEST $TEST

RUN echo $HELLO

# Go to client directory
WORKDIR /usr/src/app

# Install client dependencies
COPY /client/package*.json /usr/src/app/client/
RUN npm install

COPY client/. /usr/src/app/client/

#Build client app
WORKDIR /usr/src/app/client/

RUN npm run build

# Go to server directory
WORKDIR /usr/src/app/server

# Install server dependencies
COPY /server/package*.json /usr/src/app/server/
RUN npm install

# Copy server files
COPY server/. /usr/src/app/server/


COPY ./wait-for-it.sh /usr/src/app/
RUN chmod +x /usr/src/app/wait-for-it.sh


#EXPOSE 8080

CMD ["npm", "run", "start"]

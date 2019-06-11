FROM node:8

LABEL mainainer="tsvirko8@gmail.com"

ARG APP_DIR=/usr/src/app
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p $APP_DIR

# Go to client directory
WORKDIR ${APP_DIR}/client

# Install client dependencies
COPY /client/package*.json ./
RUN npm install

COPY client/. .

#Build client app in production mode
RUN if [ "$NODE_ENV" = "production" ]; then npm run build && rm -rf node_modules;fi

# Go to server directory
WORKDIR ${APP_DIR}/server

# Install server dependencies
COPY /server/package*.json ./
RUN npm install

# Copy server files
COPY server/. .

EXPOSE 8080

CMD ["npm", "run", "start"]

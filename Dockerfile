# Use an official Node.js runtime as the base image
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

# Define the command to run the application
CMD [ "node", "server.js" ]
#dockerfile

#base image
FROM node:alpine

#create and set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

#copy files
COPY . /usr/src

#install dependencies
RUN npm install

#start app
RUN npm run build
EXPOSE 3000
CMD npm run start
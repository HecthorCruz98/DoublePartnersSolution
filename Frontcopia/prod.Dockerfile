# base image
FROM node:14.17-alpine as builder

# set working directory
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

COPY .npmrc /app/.npmrc

COPY . /app

RUN npm install @angular/cli --no-progress --loglevel=error
RUN npm install --only=production --no-progress --loglevel=error

RUN npm run build

#usamos el multi-stage Builds 
# base image
FROM nginx:1.20.0-alpine

# copy artifact build from the 'build environment'
COPY --from=builder  /app/dist/initialProject  /usr/share/nginx/html
#COPY default.conf /etc/nginx/conf.d/default.conf

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]


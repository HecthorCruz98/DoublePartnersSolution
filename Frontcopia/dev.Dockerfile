FROM node:14.17-alpine

# set working directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# add .bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install package.json (o sea las dependencies)

COPY .npmrc /usr/src/app/.npmrc

COPY package.json /usr/src/app/package.json

EXPOSE 4200 49153

RUN npm install

#RUN rm -f /usr/src/app/.npmrc

RUN npm install -g @angular/cli

# add app
COPY . /usr/src/app

# start app
 
#CMD ["http-server", "-c-1", "-P", "http://localhost:55982/api", "-P", "http://localhost:60316/api" ,"."]

CMD ng serve --host 0.0.0.0 --poll



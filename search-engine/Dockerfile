#DEV environment build
# FROM node:16-alpine

# WORKDIR /web

# COPY ./package.json ./
# COPY ./yarn.lock ./

# RUN yarn

# COPY . .

# CMD ["yarn", "start-linux"]

#production build
FROM node:16-alpine as builder

WORKDIR /web

# ENV PATH /web/node_modules/.bin:$PATH

COPY ./package.json ./yarn.lock /web/

RUN yarn

COPY . /web

RUN yarn build

FROM nginx:1.20-alpine

WORKDIR /usr/share/nginx/html

#copy build from stage 1
COPY --from=builder /web/build /usr/share/nginx/html
#copy env file
COPY --from=builder /web/.env.format /usr/share/nginx/html/.env
#replace config file
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# install nodejs, npm, and runtime cra
RUN apk add --update nodejs
RUN apk add --update npm
RUN npm i -g runtime-env-cra@0.2.0

EXPOSE 3000

CMD ["/bin/sh", "-c", "runtime-env-cra && nginx -g \"daemon off;\""]
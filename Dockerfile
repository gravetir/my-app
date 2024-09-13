# FROM alpine:3.19
 
# WORKDIR /user/src/app

# COPY package.json .
# COPY package-lock.json .
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000

# RUN npm ci --omit=dev
 
# CMD [ "npm", "run", "dev" ]
FROM node:21.7.3-alpine as build

WORKDIR /usr/src/app
COPY . .

RUN npm ci --omit=dev


FROM nginx:stable-alpine

COPY --from=build /usr/src/app/ /usr/share/nginx/html

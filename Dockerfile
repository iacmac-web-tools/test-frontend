FROM node:18-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.24-alpine
COPY /docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/test-frontend /usr/share/nginx/html

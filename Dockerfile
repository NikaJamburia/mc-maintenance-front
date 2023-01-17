FROM node:14 as build

WORKDIR /app/

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/mc-maintenance-front/ /usr/share/nginx/html

EXPOSE 4200
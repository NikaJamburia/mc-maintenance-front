FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/mc-maintenance-front/ /usr/share/nginx/html

EXPOSE 4200
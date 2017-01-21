FROM nginx:latest

COPY dist /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY conf/mime.types /etc/nginx/mime.types

EXPOSE 4200
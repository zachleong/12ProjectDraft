FROM nginx:mainline
WORKDIR /app
RUN rm /etc/nginx/conf.d/*
COPY ./conf.d /etc/nginx/conf.d
EXPOSE 80
FROM nginx:alpine

WORKDIR /app
COPY build ./

RUN apk update
RUN apk add tzdata

RUN cp -r . /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]


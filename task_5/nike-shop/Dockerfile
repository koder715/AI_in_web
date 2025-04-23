FROM nginx:alpine

# Копируем кастомный конфиг
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Копируем статики
COPY public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM php:8-apache
COPY . /var/www/html/index.php
EXPOSE 80
CMD [ "/usr/sbin/apache2ctl","-D", "FOREGROUND" ]
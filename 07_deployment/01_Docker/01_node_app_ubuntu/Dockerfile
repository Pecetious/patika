FROM ubuntu
RUN apt-get update
RUN apt-get install curl -y
RUN curl fsSL https://deb.nodesource.com/setup_20.x | bash
RUN apt-get install nodejs -y
COPY . /opt/node-app
WORKDIR /opt/node-app
ENV CHANNEL=RadyoaktifPecete
CMD [ "node", "index.js" ]
FROM node:current-slim
WORKDIR /opt/node-todo-app
COPY app/ .
RUN npm install
CMD [ "node", "app.js" ]
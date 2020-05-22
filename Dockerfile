FROM node:10.16.0

WORKDIR /usr/src/tylers-list-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
FROM node:14

WORKDIR /usr

COPY package.json ./

COPY tsconfig.json ./

COPY src ./src

RUN ls -a

RUN npm install

EXPOSE 3333

CMD ["npm","run","dev"]

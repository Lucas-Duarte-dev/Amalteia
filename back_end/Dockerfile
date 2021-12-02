FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.* tsconfig.json ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3333
CMD ["yarn","dev"]
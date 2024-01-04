FROM node:18.13

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/ \
    && npm cache clean --force \
    && npm install --quiet --no-progress -g @angular/cli \
    && npm install --legacy-peer-deps

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
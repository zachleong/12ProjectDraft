FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install -g nodemon
COPY ./ ./
CMD ["nodemon", "dist/app.js"]
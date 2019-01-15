FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install -g typescript
COPY ./ ./
RUN chmod +x /app/rundocker.sh
ENTRYPOINT [ "/app/rundocker.sh" ]
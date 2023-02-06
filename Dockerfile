# 1. For build React app
FROM node:18-alpine

LABEL name="Docker React Demo"
LABEL author="Jon"

# Set working directory
WORKDIR /app

# 
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Same as npm install
RUN npm install --save --legacy-peer-deps

COPY . /app

ENV PORT=3000

CMD [ "npm", "start" ]

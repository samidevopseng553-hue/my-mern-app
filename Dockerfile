FROM node:alpine3.22 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .


FROM node:alpine3.22
WORKDIR /app

# Copy only necessary files from build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app . 

EXPOSE 5000

CMD ["node", "app.js"]

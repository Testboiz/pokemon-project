FROM node:25.9.0 AS builder
WORKDIR /src
COPY package*,json. ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "start"]


FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
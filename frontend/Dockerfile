# Use Node.js image to build the Angular app
FROM node:18 AS build

WORKDIR /app
COPY . .
RUN npm install

# Corrected Angular build command
RUN npm run build -- --configuration production

# Use Nginx to serve the Angular app
FROM nginx:alpine

# Make sure to replace 'frontend' below with your actual Angular project name if different
COPY --from=build /app/dist/frontend /usr/share/nginx/html/

# Optional: Copy custom Nginx config if you have it
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

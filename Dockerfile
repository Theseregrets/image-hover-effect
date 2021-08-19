FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY . . 
RUN npm install 
ENV API_URL=http://google.com/
EXPOSE 3000
CMD ["npm","start"]
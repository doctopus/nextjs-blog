#base image
FROM node:19-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

#copy from to
COPY ./ ./

RUN npm install
RUN npm run build
#RUN npm install -D tailwindcss postcss autoprefixer
#RUN npx tailwindcss init -p
#RUN npm install -D @tailwindcss/typography

EXPOSE 3000
CMD ["npm", "start"]
#CMD ["npx", "tailwindcss", "init", "-p"]
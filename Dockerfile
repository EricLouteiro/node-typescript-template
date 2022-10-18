FROM node:14.18-alpine3.12

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm install prisma@4.2.1
RUN npm install typescript --save-dev
RUN npm run build
# For alpine-based img
RUN apk add --no-cache tzdata


# For ubuntu img
# RUN apt-get install -yq tzdata && \
#     ln -fs /usr/share/zoneinfo/America/Asuncion /etc/localtime && \
#     dpkg-reconfigure -f noninteractive tzdata
ENV TZ="America/Asuncion"
RUN cp -r ./public ./dist

CMD npm start
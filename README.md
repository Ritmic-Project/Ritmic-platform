# Fluance App
Fluance is a CMMS and predictive solution for small and flexible industries.
Fluance give you the ability to configure your own maintenance plaform easily and collaborates with your team. 

## Requirements

- Node.js 10.x or later

## Architecture



[![](https://github.com/wdelenclos/Fluance-app/blob/master/preview.png?raw=true)](https://github.com/wdelenclos/Ritmic-platform/blob/master/preview.png?raw=true)

## Roadmap:

- [x] Application database: Mongodb 
- [ ] Frondend: Vuejs
- [ ] Backend: Flask Restful
- [ ] Datalake: Elasticsearch + Kafka + IoT

## Getting Started

The project Fluance App is using resources specified on the package.json. First install it with following command.

    yarn install or npm install

Ritmic platform provide a ready-to-use docker-compose file for MongoDB. if you want to use it, type `docker-compose up -d` in the root folder. 

Go to */app* and type ``yarn start`` to start a local instance for debug/dev, or type ``yarn build`` to build the production app.

Go to */server* and type ``yarn start`` to start a local instance for debug/dev of the Ritmic server, or type ``yarn build`` to build the production server.

For more information about the **app** or the **server** go to specifics readme inside of dedicated folders.

## On Docker

Running app - frontend:
```
cd app
docker build -t fluance:latest .
docker run -it -p 8080:8080 fluance:latest
```

Runnng api - backend: :warning: `comming soon`

Running mongodb: :warning: `comming soon`

## On Docker compose for 3 services: `frontend` + `backend` + `mongodb`
:warning: `comming soon`

## Credits & contributors
- Wladimir Delenclos - Digital Engineer
- Anh Nguyen - Software Engineer

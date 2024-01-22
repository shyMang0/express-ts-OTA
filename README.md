# REST API Simple Notes Application

This is a basic example of a Note Taking Application providing a
REST API.

The application uses `Typescript`, `Sequelize` and `Express`.

## Clone the repository

    git clone https://github.com/shyMang0/express-ts-OTA.git

## Install

    npm install

## Run the app

    npm run start

## Changing the Port

    update/create a .env 
    PORT=3001

# REST API

The REST API to the example app is described below.

## Get list of Notes

### Request

`GET /notes`

    curl -i -H 'Accept: application/json' http://localhost:3000/notes

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Connection: keep-alive
    Content-Length: 2

    [{"id":"fda1f","note":"Foo","created_at":"2024-01-22T13:28:38.002Z","updated_at":"2024-01-22T13:28:38.002Z"}]

## Create a new Note

### Request

`POST /notes`

    curl -i -H 'Accept: application/json' -d 'note=Foo' http://localhost:3000/notes

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {"message":"new row created","data":{"note":"Foo","id":"fda1f","created_at":"2024-01-22T13:28:38.002Z"}}

## Get a specific Note

### Request

`GET /notes/:id`

    curl -i -H 'Accept: application/json' http://localhost:3000/notes/fda1f

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Content-Type: application/json

    {"id":"fda1f","note":"Foo","created_at":"2024-01-22T13:28:38.002Z","updated_at":"2024-01-22T13:28:38.002Z"}

## Update a Note

### Request

`PUT /notes/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'name=Bar' http://localhost:3000/notes/fda1f

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed2"}

## Delete a Note

### Request

`DELETE /notes/:id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:3000/notes/fda1f

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close


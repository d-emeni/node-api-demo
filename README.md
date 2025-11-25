# Node API Demo

This is a simple Node.js API server used for demo purposes, especially when learning how to connect frontend and backend containers using Docker networking.

## API Endpoint

- `GET /api/users` – Returns a mock list of users (Ada Lovelace and Alan Turing)

---

## How to run locally

```bash
npm install
npm start
```

The server will start on: http://localhost:4000

## Run with Docker

To build and run the backend inside a container:

```bash
docker build -t backend-api .
docker run -d \
  --name backend \
  -p 4000:4000 \
  backend-api
```

> This exposes the app on localhost:4000 so you can test it from your browser or tools like Postman.


## Used in the Docker Networking Tutorial

This repo is used as the backend service in the Docker networking tutorial on [dev.to](https://dev.to/deborahemeni1/docker-networking-how-to-connect-containers-in-a-full-stack-project-3l98)

In that tutorial, you'll learn how to:

- Run this API and a React frontend in separate containers

- Connect them on a shared Docker network

- Communicate between services using container names (like http://backend:4000)

You can pair this backend with the React frontend here: https://github.com/d-emeni/react-demo


## License

MIT

# Node API Demo

This is a simple Node.js API server used for demo purposes - especially when learning how to connect frontend and backend containers with Docker networking.

## API Endpoint

- `GET /api/users` - Returns a mock list of users

## How to run locally

```bash
npm install
node server.js
```
Server will start on http://localhost:4000

## Used in this Docker networking tutorial

If you're following along with my tutorial on [Docker networking]() on dev.to, this repo is used as the backend service.
You can pair it with the React frontend here: https://github.com/d-emeni/react-demo

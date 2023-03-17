# node-typescript-socketio-mongodb-boilerplate

## Getting Started

A simple typescript template together with socket io for websocket, and mongodb for the database.

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/Arianejay/NodeJS-Boilerplate.git
npm install
```

## Available Scripts

-   `dev` - run app
-   `eslint:fix` - enables formatter for the whole file

## Dependencies

-   [bcrypt][bcrypt] - used for hashing user's password
-   [body-parser][body-parser] - parses incoming request bodies in our middlewares
-   [cookie-parser][cookie-parser] - cookie parser
-   [dotenv][dotenv] - loads environment variables
-   [express][express] - framework for our Node JS
-   [jsonwebtoken][jsonwebtoken] - jwt
-   [mongoose][mongoose] - our object modeling tool for MongoDB
-   [pino][pino] - used as a logger
-   [socket.io][socket.io] - our web socket used for real-time communication with the client, paired together with [socket.io-client][socket.io-client].
-   [validator][validator] - our validator for our strings

# env

```sh
DB_URL="mongodb://127.0.0.1:27017/XXXX"
JWT_SECRET_TOKEN="XXXXXXX"
```

[bcrypt]: https://www.npmjs.com/package/bcrypt
[body-parser]: https://www.npmjs.com/package/body-parser
[cookie-parser]: https://www.npmjs.com/package/cookie-parser
[dotenv]: https://www.npmjs.com/package/dotenv
[express]: https://www.npmjs.com/package/express
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[mongoose]: https://www.npmjs.com/package/mongoose
[pino]: https://www.npmjs.com/package/pino
[socket.io]: https://www.npmjs.com/package/socket.io
[socket.io-client]: https://www.npmjs.com/package/socket.io-client
[validator]: https://www.npmjs.com/package/validator

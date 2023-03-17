import App from "./app";
import logger from "./globals/logger";
import socketServer from "./socket.io/socket.io";

const server = new App();

server
    .start()
    .then((serverListener) => {
        socketServer(serverListener, server.app);
    })
    .catch((err) => {
        logger.error(err);
    });

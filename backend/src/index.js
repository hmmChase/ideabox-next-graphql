const createServer = require('./createServer');

const server = createServer();

server
  .listen({ port: 8888 })
  .then(({ url }) => console.log(`Server ready at ${url}`));

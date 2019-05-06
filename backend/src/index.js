import 'dotenv/config';
import express from 'express';
// import cors from 'cors';
import apolloServer from './apolloServer';

const app = express();
const server = apolloServer();

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8888 }, err => {
  console.log('\n'.repeat(99));

  if (err) throw err;
  console.log(
    `Apollo Server ready at http://localhost:8888${server.graphqlPath}`
  );
});

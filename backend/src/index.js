import 'dotenv/config';
import express from 'express';
// import cors from 'cors';
import apolloServer from './apolloServer';

const app = express();
const server = apolloServer();

// const corsOptions = {
//   credentials: true,
//   origin:
//     process.env.NODE_ENV === 'production'
//       ? process.env.PROD_FRONTEND_URL
//       : process.env.DEV_FRONTEND_URL
// };

// app.use(cors(corsOptions));

// cors: corsOptions

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: process.env.PORT || 4000 }, err => {
  console.log('\n'.repeat(99));

  if (err) throw err;
  console.log(
    `Apollo Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`
  );
});

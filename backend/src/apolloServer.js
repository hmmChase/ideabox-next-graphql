import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
const prisma = require('./prismaClient');
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
const typeDefs = importSchema(__dirname + '/schema/schema.graphql');

export default () =>
  new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation
    },
    context: async ({ req, res }) => {
      return { req, res, prisma };
    }
  });

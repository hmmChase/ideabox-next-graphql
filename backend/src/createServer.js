const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const path = require('path');
const { prisma } = require('../prisma/generated/prisma-client');
const typeDefs = importSchema(path.resolve('src/schema.graphql'));
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

// Create the GraphQL Yoga Server
function createServer() {
  return new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation
    },
    context: req => ({
      ...req,
      prisma
    }),
    introspection: true,
    playground: true
  });
}

module.exports = createServer;

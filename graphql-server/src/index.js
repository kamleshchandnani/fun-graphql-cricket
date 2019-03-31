import http from 'http';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import { ApolloServer, gql } from 'apollo-server-express';

const { PORT } = process.env;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
const app = express();
app.use(helmet({ dnsPrefetchControl: false }));
app.use(compression());
app.use('/health', (req, res) => res.send({ 'graphql-server': true }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: __STAGE__ !== 'production',
  introspection: __STAGE__ !== 'production',
  subscriptions: {
    path: '/subscriptions',
  },
});

server.applyMiddleware({
  app,
  path: '/',
  cors: {
    origin: '*',
    credentials: true,
  },
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
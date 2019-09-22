import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import { rootResolver } from './resolvers';
import { typeDefsSchema } from './typeDefs';

mongoose.connect('mongodb://localhost/live-chat', { useNewUrlParser: true });

mongoose.connection.on('error', err =>
  console.error('Connection error: ', err)
);

const server = new ApolloServer({
  resolvers: rootResolver,
  typeDefs: typeDefsSchema
});

mongoose.connection.once('open', async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
});

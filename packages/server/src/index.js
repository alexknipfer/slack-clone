import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

dotenv.config();

import { rootResolver } from './resolvers';
import { typeDefsSchema } from './typeDefs';

mongoose.connect('mongodb://localhost/live-chat', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', err => console.error('Connection error: ', err));

const server = new ApolloServer({
  resolvers: rootResolver,
  typeDefs: typeDefsSchema
});

db.once('open', async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
});

import { GraphQLServer } from 'graphql-yoga';
import { startDB, models } from './db';
import resolvers from './graphql/resolvers';
import mongoose from 'mongoose';

startDB();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})

const context = {
  models,
};

const Server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context,
});

// options
const opts = {
  port: 4000,
};


Server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`);
});


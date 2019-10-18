import 'reflect-metadata';
import { connect } from 'mongoose';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { mergeResolvers, mergeTypeDefs, mergeSchemas } from 'graphql-toolkit';
import { ProviderApi } from '../api/provider';
import { SeekerApi } from '../api/seeker';
import { StaffApi } from '../api/staff';
import { setUpAccounts } from './accounts';
import { TypegooseMiddleware } from './typegoose';
(async () => {
  require('dotenv').config();

  const mongooseConnection = await connect(
    `mongodb://${process.env.MONGO_HOST || 'localhost'}:27017/${process.env.DB_NAME}`,
    { useNewUrlParser: true },
  );
  const { accountsGraphQL, accountsServer } = setUpAccounts(mongooseConnection.connection);

  const typeGraphqlSchema = await buildSchema({
    resolvers: [ProviderApi, SeekerApi, StaffApi],
    globalMiddlewares: [TypegooseMiddleware],
    validate: false,
    emitSchemaFile: true,
  });

  const accountSschema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([accountsGraphQL.typeDefs]),
    resolvers: mergeResolvers([accountsGraphQL.resolvers]),
    schemaDirectives: {
      ...accountsGraphQL.schemaDirectives,
    },
  });

  const server = new ApolloServer({
    schema: mergeSchemas({
      schemas: [accountSschema, typeGraphqlSchema],
    }),
    context: accountsGraphQL.context,
    formatError: error => {
      console.error(error);
      return error;
    },
    playground: true,
  });

  await server.listen({ port: process.env.PORT });
  console.log(`🚀 Server ready at localhost:${process.env.PORT}`);
})();

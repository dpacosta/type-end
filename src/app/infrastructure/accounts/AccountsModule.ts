import MongoDBInterface from '@accounts/mongo';
import { AccountsModule } from '@accounts/graphql-api';
import { DatabaseManager } from '@accounts/database-manager';
import { AccountsServer } from '@accounts/server';
import { AccountsPassword } from '@accounts/password';

export const accountsPassword = new AccountsPassword({
  // This option is called when a new user create an account
  // Inside we can apply our logic to validate the user fields
  validateNewUser: user => {
    console.log('validateNewUser', user);

    return user;
  },
});

export const setUpAccounts = (connection: any) => {
  const userStorage = new MongoDBInterface(connection);

  const accountsDb = new DatabaseManager({
    sessionStorage: userStorage,
    userStorage,
  });

  // Create accounts server that holds a lower level of all accounts operations
  const accountsServer = new AccountsServer(
    { db: accountsDb, tokenSecret: process.env.ACCOUNTS_SECRET! },
    {
      password: accountsPassword,
    },
  );

  // Creates resolvers, type definitions, and schema directives used by accounts-js
  const accountsGraphQL = AccountsModule.forRoot({
    accountsServer,
  });

  return { accountsGraphQL, accountsServer };
};

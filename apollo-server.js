const { ApolloServer } = require('apollo-server-express')

const rootSchema = require('./graphql')

const graphQL = {
  schema: rootSchema,
}

module.exports = new ApolloServer(graphQL)

const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const categorySchema = require('./category')

const rootSchema = makeExecutableSchema({
  typeDefs: [categorySchema.typeDefs],
  resolvers: merge(categorySchema.resolvers),
})

module.exports = rootSchema

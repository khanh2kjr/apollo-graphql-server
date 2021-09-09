const { gql } = require('apollo-server-express')

module.exports = gql`
  type Category {
    id: ID
    name: String
  }

  type Query {
    categories: [Category]
    category(id: ID!): Category
  }
`

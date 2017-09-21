var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String,
    user(id: ID): User
  }

  type User {
    id: ID,
    name: String,
    age: Int,
    sex: Int # 1 - male, 0 - female
  }
`);

module.exports = schema
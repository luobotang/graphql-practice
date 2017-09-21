var express = require('express');
var graphqlHTTP = require('express-graphql');
var schema = require('./schema');

var users = [{
  id: '100001',
  name: 'Luobo',
  age: 18,
  sex: 1
}, {
  id: '100002',
  name: 'Q',
  age: 17,
  sex: 0
}];

var root = {
  hello: () => 'Hello world!',
  user(args) {
    if (args.id) {
      console.log('query user, id: ' + args.id)
      return users.filter(user => user.id === args.id)[0]
    }
    return users[0];
  }
};

var app = express();

app.use(express.static(__dirname))
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('localhost:4000'));
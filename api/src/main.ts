import express from 'express';
import {buildSchema} from 'graphql';
import {graphqlHTTP} from 'express-graphql';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};
 
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();


//fake schema
const typeDefs = gql`
    type Book {
        title: String
    }

    type Query {
        books: Book
    }
`;

// Fake resolver
const resolvers = {
    Query: {
        books: () => "Hello world"
    }
}


const PORT = process.env.PORT || 5000;

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
// Can now access graphql through /graphql

app.listen(PORT, () => { console.log("Server running --- full speed at ", PORT) })
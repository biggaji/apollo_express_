const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('/index', (req, res) => {
    res.send('index');
})


//404 page middleware Shoulkd be put below

app.use((req, res, next) => {
    res.render('404', { pagename: "Page not found" });
});



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
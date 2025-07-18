const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')
const { root } = require('./graphql/resolver')
const { schema } = require('./graphql/schema')

async function startServer() {
    const app = express()

    app.use(cors())

    await mongoose.connect('mongodb+srv://raicharan100:PZO9juzSeC2DEoEa@cluster0.fpltcby.mongodb.net/usermanagement?retryWrites=true&w=majority&appName=Cluster0')
    console.log('connected to server');

    app.use('/graphql',graphqlHTTP({
        graphiql:true,
        schema:schema,
        rootValue:root
    }))
    
    const PORT = 4000
    app.listen(PORT,()=>{
        app.listen(PORT,()=>{
            console.log(`Server running on http://localhost:${PORT}/graphql`);
            console.log(`GraphiQL available at http://localhost:${PORT}/graphql`);
        })
    })

}
startServer().catch(error => {
  console.error('Error starting server:', error);
});
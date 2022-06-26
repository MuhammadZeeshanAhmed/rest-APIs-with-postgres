require('dotenv').config()
const express = require('express')
const morgan = require("morgan");
const cors = require("cors");
const accountsRouter = require('./routes/index');
const bodyParser = require('body-parser')
const app = express()
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const postgreSQL = require('./config/db')


const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true, }))


app.use(morgan("dev"));
app.use(cors());
app.use('/accounts',accountsRouter);
app.use('/api',swaggerUI.serve,swaggerUI.setup(docs));


postgreSQL.connect().then(() => {
    console.log('DB connected')
}).catch((e) => {
    console.log('DB connection error', e)
})



app.use('/apis', require('./routes'))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})
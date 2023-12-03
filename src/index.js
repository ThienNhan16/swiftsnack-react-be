const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors');
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser())
app.get('/', (req, res) => {
    res.send('Hello world everyone')
})

routes(app);



mongoose.connect(`${process.env.MONGO_DB}`)
.then(() => {
    //("Connected to MongoDB")
})
.catch((err) => {
    console.error(err)
})


app.listen(port, () => {
    //(`Server is running on ${port}`)
})
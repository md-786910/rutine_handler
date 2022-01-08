const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const helmet = require('helmet')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });
app.use(cors())

const port = process.env.PORT || 8000

// add static file 
app.use(express.static(path.join(__dirname, "/public")))

// DATABASE_URI="mongodb://localhost:27017/rutine_handler"
// DATABASE_URI="mongodb+srv://db:6O3rHBpJYYLnGjbV@database.l2fnk.mongodb.net/rutine_handler?retryWrites=true&w=majority"


require('./db/conn')

// parser the body
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(helmet())
// app.use(bodyParser.urlencoded({ extended: false }))


// add routes path
app.use(require('./route'))


app.listen(port, () => {
    console.log('listening on port at ' + port)
})
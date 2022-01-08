const mongoose = require('mongoose')

const database = process.env.DATABASE_URI

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false, //

    // autoIndex: false, // Don't build indexes
    // serverSelectionTimeoutMS: 500, // Keep trying to send operations for 5 seconds
    // socketTimeoutMS: 45, // Close sockets after 45 seconds of inactivity
    // family: 4
    // useCreateIndex: true,

}).then(() => {
    console.log("connect success")
}).catch((error) => {
    console.log("connect error " + error)
})
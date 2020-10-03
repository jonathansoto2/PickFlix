const mongoose = require('mongoose');



mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => console.log("connected to db")
    )





module.exports = mongoose;
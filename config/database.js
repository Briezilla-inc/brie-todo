const mongoose = require('mongoose');

// Connects to the database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold)
    } catch (error) {
        console.log(`${error.message}`)
        process.exit(1);
    }
}

    module.exports = connectDB
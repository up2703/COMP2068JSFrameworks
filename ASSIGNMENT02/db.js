const mongoose = require('mongoose');
const connectToDatabase = async () => {
    try {
        mongoose.set("strictQuery", true)
        mongoose.connect('mongodb+srv://200520302:qmStbDgNmo2URYqy@cluster.14kxwti.mongodb.net/?retryWrites=true&w=majority/sample_mflix', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // const db = mongoose.connection;
        // db.on("error", console.error.bind(console, "connection error: "));
        // db.once("open", function () {
        // console.log("Connected successfully");
        // });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectToDatabase;

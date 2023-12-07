const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://200520302:qmStbDgNmo2URYqy@cluster.14kxwti.mongodb.net/?retryWrites=true&w=majority/sample_mflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
});
const User = mongoose.model('User', userSchema);
module.exports = { User };

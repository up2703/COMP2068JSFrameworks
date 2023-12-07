const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://200520302:qmStbDgNmo2URYqy@cluster.14kxwti.mongodb.net/?retryWrites=true&w=majority/sample_mflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const blogSchema = new mongoose.Schema({
  blogname: String,
  blogcontent: String,
});
const Blog = mongoose.model('Blog', blogSchema);
module.exports = { Blog };

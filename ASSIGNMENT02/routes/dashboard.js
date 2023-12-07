var express = require('express');
var router = express.Router();
const { Blog } = require("../model/blogmodel");


router.get('/', async function(req, res, next) {
    try {
        const blogs = await Blog.find();
        res.render('dashboard', { blogs });
      } catch (error) {
        res.status(500).json({ error: 'Error fetching blogs' });
      }
//   res.render('dashboard', { title: 'Express' });
});

router.post('/', async (req, res) => {
    const { blogname, blogcontent } = req.body;
    try {
        const newBlog = new Blog({ blogname, blogcontent });
        const blogSuccess = await newBlog.save();
        console.log(blogSuccess,"blogSuccess")
        if (blogSuccess) {
            if(res.status(200)){
                res.redirect('/');    
            }
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } catch (err) {
        res.status(500).json(err);
          }
});
module.exports = router;

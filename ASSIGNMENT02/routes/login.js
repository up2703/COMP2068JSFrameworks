var express = require('express');
var router = express.Router();
const { User } = require("../model/usermodel");
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            if(res.status(200)){
                res.redirect('/dashboard');    
            }
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;

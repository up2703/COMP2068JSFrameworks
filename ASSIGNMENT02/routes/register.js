var express = require('express');
var router = express.Router();
const { User } = require("../model/usermodel");

// const User = mongoose.model('User', userSchema);
router.get('/', (req, res) => {
    res.render('register',{ title: 'Express' });
});

router.post('/', async (req, res) => {
    const { username, password,email } = req.body;
    try {
        const newUser = new User({ username, password,email });
        const ad = await newUser.save();
        console.log(res,"res")
        res.status(200).json({ message: 'User registered successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
      }

});
module.exports = router;
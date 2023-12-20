const express = require('express');
const router = express.Router();
const UserModel = require('../schema/user');
const path = require('path');
// const bcrypt = require('bcrypt');
const Swal = require('sweetalert');

// const open = require('open');

router.use('/static', express.static('static'));
router.use(express.urlencoded({ extended: true }));

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

router.get('/', (req, res) => {
    res.render('form.pug');
});

router.post('/', async (req, res) => {
    console.log('body console -->', req.body);
    try {
        //        const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(req.body.password, salt)
        // const obj = {...req.body};
        // obj.password = hash
        const user = await UserModel.create({ ...req.body });
        if (user) {
            console.log('User created successfully!');
            Swal("Here's the title!");
            // Redirect to a different route or render a different view as needed
            
            res.redirect('/user/login');
        } else {
            console.log("Please enter valid information.");
            // Render the form again with an error message if needed
        }
    } catch (err) {
        console.log('Internal server error');
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

var userd;
router.get('/home', (req, res) => {
    res.render('home.pug')
})

router.post('/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (user) {
            console.log('logined user -->', user);
            console.log('User Logined successfully');
            var name = req.body.email;
            var splname = name.slice(0,name.lastIndexOf("@"))
            // Pass the user's email to the home.pug template
            return res.render('home.pug', { email:splname });
        } else {
            console.log('Please Enter a valid email and password');
            return res.render('login.pug', { error: 'Invalid email or password' });
        }
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).send("Internal Server Error");
    }
});


router.get('/login', (req, res) => {
    res.render('login.pug', userd);
});

router.put('/:id', async (req, res) => {
    console.log('body params -->', req.params.id);
    try {
        const user = await UserModel.findOne({ _id: req.params.id });
        if (user) {
            const updated = await UserModel.findByIdAndUpdate(req.params.id, req.body);
            console.log("User updated successfully.");
        } else {
            console.log("User not found.");
        }
    } catch (err) {
        console.log("User not updated.");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await UserModel.findByIdAndDelete(req.params.id);
        console.log("User deleted successfully.");
    } catch (err) {
        console.log("User not deleted.");
    }
});



module.exports = router;

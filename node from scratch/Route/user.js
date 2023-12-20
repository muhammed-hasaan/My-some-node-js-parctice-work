const express = require('express');
const router = express.Router();
const app = express()
const UserModel = require('../schema/user');
const sendResponse = require('../helpers/sendResponce');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



// Use body-parser middleware to parse POST data

router.post('/sign', async(req, res) => {
    console.log('body console -->', req.body);
    try {
        const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password, salt)
const obj = {...req.body};
obj.password = hash
        const user = await UserModel.create(obj); // Change res.body to req.body
        sendResponse(res, 200, user, 'internal server ok', false);
    } catch (err) {
        sendResponse(res, 500, null, 'internal server error', true);
        console.log(err)
    }
});

router.post('/login', async (req, res) => {
    console.log('body console-->', req.body)
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (user) {
            const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
            if (isPasswordValid) {
                // const token = awabit jwt.sign({ data: user },process.env.JWT_SECRET)
                sendResponse(res, 200, user, 'User login Successfully', false)
                console.log("login seccess")
            } else {
                console.log("login not")
                sendResponse(res, 403, null, 'Password is not valid.', true)
            }
        } else {
            console.log("login not else")
            sendResponse(res, 403, null, 'User Doesnt Exist', true)
        }
    }
    catch (err) {
        sendResponse(res, 500, null, 'Internal Server Error', true)
        console.log(err);
    }
})

router.put('/:id', async(req, res) => {
    console.log('body params -->', req.params.id);
    try{
const user  =await UserModel.findOne({_id:req.params.id})
if(user){
    const updated  = await UserModel.findByIdAndUpdate(req.params.id , req.body)
    sendResponse(res, 200, user, 'User Updated Successfully', false);
}
}catch(err){
    sendResponse(res, 403, err, 'User Not Updated', true);
}
});

router.delete('/:id', async(req, res) => {
    console.log('body params -->', req.params.id);
    try{
        
        const deletee = await UserModel.findByIdAndDelete(req.params.id)
        sendResponse(res, 200, user, 'User deleted Successfully', false);
    }catch(err){
        
        sendResponse(res, 403, err, 'User Not deleted', true); 
    }
});

module.exports = router;

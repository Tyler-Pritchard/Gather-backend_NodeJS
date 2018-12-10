//CREATE LINK TO SEPARATE PORTAL FOR ADMIN



// const express = require('express')
// const router = express.Router()
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs')

// router.use(bodyParser.urlencoded({
//     extended: false
// }));
// router.use(bodyParser.json())

// router.post('/something', (req, res) => {
//     //email, password, name
//     const login = {
//         name,
//         email,
//         password
//     } = req.body;
//     // res.status(200).send({ name, email, password })
//     let hashPassword = bcrypt.hashSync(password, 8);
//     res.status(200).send(hashPassword);

//     knex('user').insert({
//             name,
//             email,
//             password: hashPassword
//         }).then(user => {
//             //JWT
//             let token = jwt.sign({
//                 id: user._id
//             }, config.secret, {
//                 expieresIn: 90000
//             });
//             res.status(200).send({
//                 auth: true,
//                 token
//             });
//         })
//         .catch(err => console.log(err))
// });


// router.get('/gather-frontend', (req, res) => {
//     //this grabs tokens from the headers
//     let token = req.headers['x-access-token'];
//     //checks if token exists
//     if(!token) {
//         res.status(500).sendStatus("No token provided");
//     }
//     //decodes the token and checks if it is not expired
//     jwt.verify(
//         token, config.secret, 
//             //callback
//         (err, decoded) => {
//         if (err) return res.status(500).sendStatus("Token not valid");
//         User.find
//     })
// });

// router.post('/login', (req, res) => {
//     const {email, password} = req.body;
//     //find user by email
// User.findOne({ email }).then(user => {
//     //check if user exists
//     if(!user) return res.status(404).send("No user");
//     //check if passwords match
//     let isValidPassword = bcrypt.compareSync(password, user.password);
//     //create a token
//     if (isValidPassword) {

//     }
// })
// })
// module.exports = router;
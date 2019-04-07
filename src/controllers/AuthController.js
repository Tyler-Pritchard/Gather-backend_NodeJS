const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json())

router.post('/something', (req, res) => {
    const login = {
        name,
        email,
        password
    } = req.body;
    let hashPassword = bcrypt.hashSync(password, 8);
    res.status(200).send(hashPassword);

    knex('user').insert({
            name,
            email,
            password: hashPassword
        }).then(user => {
            let token = jwt.sign({
                id: user._id
            }, config.secret, {
                expieresIn: 90000
            });
            res.status(200).send({
                auth: true,
                token
            });
        })
        .catch(err => console.log(err))
});


router.get('/gather-frontend', (req, res) => {
    let token = req.headers['x-access-token'];
    if (!token) {
        res.status(500).sendStatus("No token provided");
    }
    jwt.verify(
        token, config.secret,
        //calback
        (err, decoded) => {
            if (err) return res.status(500).sendStatus("Token not valid");
            User.find
        })
});

router.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;
    User.findOne({
        email
    }).then(user => {
        if (!user) return res.status(404).send("No user");
        let isValidPassword = bcrypt.compareSync(password, user.password);
        if (isValidPassword) {

        }
    })
})
module.exports = router;
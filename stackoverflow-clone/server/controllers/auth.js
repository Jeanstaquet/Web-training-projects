const User = require("../models/user");

exports.postSignIn = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
        .then(user => {
            if(user) {
                return res.send("Existing User")
            } else {
                const user = new User({
                    email: email,
                    password: password,
                    post: [],
                    answer: [],
                    points: 0,
                    upVotedPost: [],
                    downVotedPost: [],
                    comment: []
                });
                user.save();
                return res.send("User created!")
            }
        })
}

exports.postSignUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
        .then(user => {
            if(!user) {
                return res.send("User not found")
            }

            if(user.password === password) {
                req.session.isLoggedIn = true
                req.session.user = user
                req.session.save();
                res.send("Connected")
            } else {
                return res.send("Wrong email or password")
            }
            
        })
}
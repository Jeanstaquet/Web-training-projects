const User = require("../models/user");

//Sign up a user
exports.postSignUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const pseudo = req.body.pseudo
    User.findOne({email: email})
        .then(user => {
            if(user) {
                return res.send("Existing User")
            } else {
                const user = new User({
                    email: email,
                    password: password,
                    pseudo: pseudo,
                    post: [],
                    answer: [],
                    points: 0,
                    upVotedPost: [],
                    downVotedPost: [],
                    comment: []
                });
                req.session.isLoggedIn = true
                req.session.user = user
                req.session.save();
                user.save();
                return res.send(user)
            }
        })
}

//Sign in a user
exports.postSignIn = (req, res, next) => {
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
                return res.send(user)
            } else {
                return res.send("Wrong email or password")
            }
            
        })
}

//Logout handler
exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.send("Logout")
      });
}
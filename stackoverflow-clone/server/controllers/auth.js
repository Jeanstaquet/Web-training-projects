const User = require("../models/user");

exports.postSignup = (req, res, next) => {
    console.log(req.body)
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
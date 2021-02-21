exports.getLogin = (req, res, next) => {
  const isLogged = req.get("Cookie").split("=")[1]
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login'
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true")
  res.redirect("/")
}
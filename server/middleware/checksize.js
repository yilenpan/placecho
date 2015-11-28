module.exports = function (req, res, next) {
  if (req.params.x > 2000 || req.params.y > 2000 || req.params.x < 20 || req.params.y < 20) {
    res.redirect('/');
  }
  req.params.x = parseInt(req.params.x);
  req.params.y = parseInt(req.params.y);
  next();
};

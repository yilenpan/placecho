module.exports = function (req, res, next) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  if (x > 2000 || y > 2000 || x < 0 || y < 0 || x === NaN || y === NaN) {
    res.redirect('/');
  }
  next();
};

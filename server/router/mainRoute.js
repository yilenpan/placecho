var checkSize = require('../middleware/checksize');
var serveFile = require("../controllers/serveFile");
var proTip = require('../controllers/proTip');

module.exports = function (app) {
  app.get('/:x/:y', checkSize, serveFile);
  app.get('/protip', proTip)
};

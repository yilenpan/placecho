var checkSize = require('../middleware/checksize');
var serveFile = require("../controllers/serveFile");
var fact = require('../controllers/fact');

module.exports = function (app) {
  app.get('/:x/:y', checkSize, serveFile);
  app.get('/fact', fact)
};

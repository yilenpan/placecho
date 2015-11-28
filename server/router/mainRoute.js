var checkSize = require('../middleware/checksize');
var serveFile = require("../controllers/serveFile");

module.exports = function (app) {
  app.get('/:x/:y', checkSize, serveFile);
};

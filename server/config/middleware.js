var bodyParser = require('body-parser');

module.exports = function (app, express) {
  var mainRoute = express.Router();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(express.static(__dirname + '/../../client'));

  app.use('/', mainRoute);
  require('../router/mainRoute')(mainRoute);
};

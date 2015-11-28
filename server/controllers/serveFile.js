var gm = require('gm');
var imageMagick = gm.subClass({
  imageMagick: true
});
var fs = require('fs');

module.exports = function (req, res) {
  var x = req.params.x;
  var y = req.params.y;
  var max = Math.max(x, y);
  var mid = Math.floor(max / 2);
  // create read stream
  var readStream = fs.createReadStream(__dirname + '/../tmp/kylecho.jpg');
  // pass it into imageMagick
  imageMagick(readStream)
    .resize(max, max)
    .autoOrient()
    // centers image at all times
    .crop(x, y, (max / 2) - (x / 2), (max / 2) - (y / 2))
    .stream('jpeg', function (err, stdout, stderr) {
      stdout.pipe(res);
    });

}

var protips = [
  'Kyle Cho\’s build tools are his 10 fingers',
  "kyle cho's phone can make recursive calls",
  "Kyle Cho once logged into Facebook and poked Mark Zuckerberg. Thus react was born.",
  "When Kyle Cho walks into lecture after the gong, Allen raises his hand and explains why he started too early.",
  "Kyle Cho doesn’t get syntax errors, JS gets a “DoesNotConformToKyleCho” error"
];
module.exports = function (req, res) {
  res.send(protips[Math.floor(Math.random() * protips.length)]);
};

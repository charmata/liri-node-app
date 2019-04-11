var fs = require("fs").promises;

var preset = function() {
  fs.readFile("./random.txt", "utf8")
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = preset;

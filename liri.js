var fs = require("fs").promises;
var concertThis = require("./concertThis");
var spotifyThis = require("./spotifyThis");
var movieThis = require("./movieThis");

var liri = function(args) {
  switch (args[2]) {
    case "concert-this":
      concertThis(args);
      break;
    case "spotify-this-song":
      spotifyThis(args);
      break;
    case "movie-this":
      movieThis(args);
      break;
    case "do-what-it-says":
      fs.readFile("./random.txt", "utf8")
        .then(data => {
          var file = data.split(",");
          file = ["", "", file[0], file[1]];
          liri(file);
        })
        .catch(err => {
          console.log(err);
        });
      break;
    default:
      console.log(`${args[2]} is not a command!`);
      break;
  }
};
liri(process.argv);

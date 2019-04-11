var concertThis = require("./concertThis");
var spotifyThis = require("./spotifyThis");
var movieThis = require("./movieThis");
var preset = require("./preset");

switch (process.argv[2]) {
  case "concert-this":
    concertThis();
    break;
  case "spotify-this-song":
    spotifyThis();
    break;
  case "movie-this":
    movieThis();
    break;
  case "do-what-it-says":
    preset();
    break;
  default:
    console.log(`${process.argv[2]} is not a command!`);
    break;
}

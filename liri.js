var concertThis = require("./concertThis");
var spotifyThis = require("./spotifyThis");
var movieThis = require("./movieThis");
var preset = require("./preset");

if (process.argv[2] === "concert-this") {
  concertThis();
} else if (process.argv[2] === "spotify-this-song") {
  spotifyThis();
} else if (process.argv[2] === "movie-this") {
  movieThis();
} else if (process.argv[2] === "do-what-it-says") {
  preset();
}

require("dotenv").config();
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

if (process.argv[2] === "concert-this") {
} else if (process.argv[2] === "spotify-this-song") {
} else if (process.argv[2] === "movie-this") {
} else if (process.argv[2] === "do-what-it-says") {
}

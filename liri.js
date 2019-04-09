require("dotenv").config();
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");

var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

if (process.argv[2] === "concert-this") {
  var artist = process.argv[3];
  axios
    .get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
    .then(res => {
      res.data.forEach(event => {
        console.log(
          `Name: ${event.venue.name}\nLocation: ${event.venue.city}, ${event.venue.country}\nDate: ${moment(
            event.datetime
          ).format("MM/DD/YYYY")}\n------`
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
} else if (process.argv[2] === "spotify-this-song") {
} else if (process.argv[2] === "movie-this") {
} else if (process.argv[2] === "do-what-it-says") {
}

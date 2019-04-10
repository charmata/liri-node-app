require("dotenv").config();
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var table = require("table").table;

var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

if (process.argv[2] === "concert-this") {
  var artist = process.argv[3];
  axios
    .get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
    .then(res => {
      if (res.data.length) {
        var results = [];
        results.push(["Name", "Location", "Date"]);
        res.data.forEach(event => {
          results.push([
            event.venue.name,
            `${event.venue.city}, ${event.venue.country}`,
            moment(event.datetime).format("MM/DD/YYYY")
          ]);
        });
        console.log(table(results));
      } else {
        console.log("No concerts found!");
      }
    })
    .catch(err => {
      console.log(err);
    });
} else if (process.argv[2] === "spotify-this-song") {
} else if (process.argv[2] === "movie-this") {
} else if (process.argv[2] === "do-what-it-says") {
}

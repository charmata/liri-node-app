require("dotenv").config();
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var table = require("table").table;

var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

if (process.argv[2] === "concert-this") {
  var artist = process.argv.slice(3).join("+");
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
  var song = process.argv.slice(3).join(" ");
  if (!song) {
    song = "the sign ace of base";
  }
  spotify
    .search({ type: "track", query: song, limit: 1 })
    .then(res => {
      if (res.tracks.items) {
        res.tracks.items.forEach(song => {
          var results = [];

          var artists = "";
          song.artists.forEach((artist, i) => {
            if (i === 0) {
              artists += artist.name;
            } else {
              artists += ", " + artist.name;
            }
          });

          results.push(`Artists: ${artists}`);
          results.push(`Song: ${song.name}`);
          results.push(`Album: ${song.album.name}`);
          if (song.preview_url) {
            results.push(`Preview: ${song.preview_url}`);
          }
          console.log(results.join("\n"));
        });
      } else {
        console.log("No songs found!");
      }
    })
    .catch(err => {
      console.log(err);
    });
} else if (process.argv[2] === "movie-this") {
} else if (process.argv[2] === "do-what-it-says") {
}

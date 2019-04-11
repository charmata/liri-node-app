require("dotenv").config();
var Spotify = require("node-spotify-api");

var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

var spotifyThis = function(args) {
  var song = args.slice(3).join(" ");
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
};

module.exports = spotifyThis;

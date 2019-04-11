var axios = require("axios");

var movieThis = function() {
  var movie = process.argv.slice(3).join("+");
  if (!movie) {
    movie = "Mr. Nobody";
  }
  axios
    .get(`https://www.omdbapi.com/?apikey=trilogy&type=movie&t=${movie}`)
    .then(res => {
      if (res.data) {
        var results = [];

        results.push(`Title: ${res.data.Title}`);
        results.push(`Year: ${res.data.Year}`);
        results.push(`IMDB Rating: ${res.data.imdbRating}`);
        var rt = res.data.Ratings.findIndex(rating => {
          return rating.Source == "Rotten Tomatoes";
        });
        results.push(`Rotten Tomatoes Rating: ${res.data.Ratings[rt].Value}`);
        results.push(`Country: ${res.data.Country}`);
        results.push(`Language: ${res.data.Language}`);
        results.push(`Plot: ${res.data.Plot}`);
        results.push(`Actors: ${res.data.Actors}`);

        console.log(results.join("\n"));
      } else {
        console.log("Movie not found!");
      }
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = movieThis;

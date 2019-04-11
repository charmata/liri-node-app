var axios = require("axios");
var moment = require("moment");
var table = require("table").table;

var concertThis = function(args) {
  var artist = args.slice(3).join("+");
  if (!artist) {
    artist = "kiss";
  }
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
};

module.exports = concertThis;

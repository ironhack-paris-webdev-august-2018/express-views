// Setup
// -----------------------------------------------------------------------------
const express = require("express");

const app = express();

// make files in "public/" available through localhost:3000
app.use(express.static(__dirname + "/public"));

// use the "hbs" npm package for our templating engine
// (automatically requires the "hbs" package)
app.set("view engine", "hbs");

// uncomment the next line if you want to change the name of the "views/" folder
// app.set("views", __dirname + "/my-templates");



// Routes
// -----------------------------------------------------------------------------
app.get("/", (request, response, next) => {
  const randomIndex = Math.floor(Math.random() * songs.length);

  // information to send to the template file
  const data = {
    featuredSong: songs[randomIndex]
  };
  // "render()" sends a template file as a response
  // (it already knows to look inside the "views/" folder)
  response.render("home-page.hbs", data);
});

app.get("/playlist", (request, response, next) => {
  // information to send to the template file (use "songList" in .hbs files)
  response.locals.songList = songs;
  // "render()" sends a template file as a response
  // (it already knows to look inside the "views/" folder)
  response.render("playlist-page.hbs");
});

app.listen(3000, () => {
  console.log("Now we're in business! 💸");
});



// Fake Database
// -----------------------------------------------------------------------------
const songs = [
  {
    title: "Weird Fishes/Arpeggi",
    artist: "Radiohead",
    year: 2007,
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/In_Rainbows_Official_Cover.jpg/220px-In_Rainbows_Official_Cover.jpg",
    comment: "Cool transition between the two parts."
  },
  {
    title: "Blood On the Leaves",
    artist: "Kanye West",
    year: 2013,
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Yeezus_album_cover.png/220px-Yeezus_album_cover.png"
  },
  {
    title: "Save Yourself",
    artist: "Kaleo",
    year: 2016,
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/KaleoAB2016.jpg/220px-KaleoAB2016.jpg",
    comment: "It's amazing!"
  },
  {
    title: "Kickin’ Back",
    artist: "Mila J",
    year: 2016,
    photoUrl: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F12ea20d5a54abdfdf11fcef2082f0e55.600x600x1.jpg"
  },
  {
    title: "My Face",
    artist: "Biga Ranx",
    year: 2017,
    photoUrl: "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/e3/3a/a6/e33aa64e-dbfc-f904-7f08-bb76c9c8cec3/3596973488527_cover.jpg/268x0w.jpg",
    comment: "Great artist."
  },
];

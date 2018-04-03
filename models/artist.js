const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  bio: { type: String },
  url: { type: String }
});

const Artists = mongoose.model("Artists", ArtistSchema);

module.exports = Artists;
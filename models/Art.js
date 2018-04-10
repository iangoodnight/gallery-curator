const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ArtSchema = new Schema ({
	_userId: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	src: { type: String },
	title: { type: String }
});

const Art = mongoose.model("Art", ArtSchema);

module.exports = Art;
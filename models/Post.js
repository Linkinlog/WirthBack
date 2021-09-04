const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true
	},
    post: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},

		userId: {
			type: String,
			required: true,
		},
		videoUrl: {
			type: String,
			required: true,
		},
		videoId: {
			type: String,
			required: true,
		},
		thumbnailUrl: {
			type: String,
			required: true,
		},
		thumbnailId: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		tags: [
			{
				type: String,
			},
		],
		likes: {
			type: Number,
			default: 0,
		},
		dislikes: {
			type: Number,
			default: 0,
		},
		views: {
			type: Number,
			default: 0,
		},
	},
	{timestamps: true}
)

export default mongoose.model("video", videoSchema)

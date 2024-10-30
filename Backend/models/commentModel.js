import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
	{
		videoId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "video",
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
		},
		text: {
			type: String,
			required: true,
		},
		edited: {
			type: Boolean,
			default: false,
		},
	},
	{timestamps: true}
)

export default mongoose.model("comment", commentSchema)

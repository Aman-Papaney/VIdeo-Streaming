import express from "express"
import "dotenv/config"

import checkAuth from "../middleware/checkAuth.js"
import videoModel from "../models/videoModel.js"

const Router = express.Router()

Router.get("/t/:title", checkAuth, async (req, res) => {
	try {
		const searchQuery = req.params.title

		let data = await videoModel
        .find({title: {$regex: searchQuery, $options: "i"}},"title description videoUrl thumbnailUrl category  likes dislikes views userId")
        .populate("userId", "_id channelName logoUrl")
        .limit(15)

		res.json(data)
	} catch (error) {
		console.log(`video search t error : ${error.message}`)
		res.status(500).json({error: error.message})
	}
})

Router.get("/c/:category", checkAuth, async (req, res) => {
	try {
		const searchQuery = req.params.category

		let data = await videoModel
			.find({category: searchQuery}, "title description videoUrl thumbnailUrl category  likes dislikes views userId")
			.populate("userId", "_id channelName logoUrl")
			.limit(15)

		res.json(data)
	} catch (error) {
		console.log(`video search c error : ${error.message}`)
		res.status(500).json({error: error.message})
	}
})

export default Router

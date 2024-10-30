import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import userModel from "../models/userModel.js"
import commentModel from "../models/commentModel.js"
import checkAuth from "../middleware/checkAuth.js"
import videoModel from "../models/videoModel.js"

const Router = express.Router()

Router.post("/new/:videoId", checkAuth, async (req, res) => {
	try {
		if (!(await videoModel.findById(req.params.videoId))) return res.status(500).json({message: "No video for provided Id"})

		const verifiedUser = await jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET)

		const newComment = new commentModel({
			videoId: req.params.videoId,
			userId: verifiedUser._id,
			text: req.body.text,
		})

		await newComment.save()

		res.json({message: "Comment Added"})
	} catch (error) {
		console.log(`new comment error : ${error.message}`)
		res.status(500).json({error: error.message})
	}
})

Router.get("/:videoId", checkAuth, async (req, res) => {
	try {
		const comments = await commentModel.find({videoId: req.params.videoId}).populate("userId", "channelName logoUrl")

		res.json(comments)
	} catch (error) {
		console.log(`get all comments error : ${error.message}`)
		res.status(500).json({error: error.message})
	}
})

Router.delete("/:commentId", checkAuth, async (req, res) => {
	try {
		const commentDetails = await commentModel.findById(req.params.commentId)
		const verifiedUser = await jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET)

		if (commentDetails.userId.toString() !== verifiedUser._id) return res.json({message: "Unauthorised Access"})

		const deletedComment = await commentModel.findByIdAndDelete(req.params.commentId)

		res.json(deletedComment)
	} catch (error) {
		console.log(`delete comments error : ${error.message}`)
		res.status(500).json({error: error.message})
	}
})

Router.put("/:commentId", checkAuth, async (req, res) => {
	try {
		const commentDetails = await commentModel.findById(req.params.commentId)
		const verifiedUser = await jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET)

		if (commentDetails.userId.toString() !== verifiedUser._id) return res.json({message: "Unauthorised Access"})

		const newData = {
			text: req.body.text,
			edited: true,
		}
		const updatedCommentDetail = await commentModel.findByIdAndUpdate(req.params.commentId, newData, {new: true})

		res.json(updatedCommentDetail)
	} catch (error) {
		console.log(`update comment error : ${error.message}`)
		res.status(500).json({error: error.message})
	}
})

export default Router

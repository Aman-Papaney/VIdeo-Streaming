import express from "express"
import "dotenv/config"
import jwt from "jsonwebtoken"
import {v2 as cloudinary} from "cloudinary"
import mongoose from "mongoose"

import configCloud from "../misc/configCloud.js"
import checkAuth from "../middleware/checkAuth.js"
import videoModel from "../models/videoModel.js"

const Router = express.Router()

configCloud()

Router.post("/upload", checkAuth, async (req, res) => {
	try {
		const token = req.headers.authorization.split(" ")[1]
		const user = await jwt.verify(token, process.env.JWT_SECRET)

		const uploadedVideo = await cloudinary.uploader.upload(req.files.video.tempFilePath, {
			resource_type: "video",
		})
		const uploadedThumbnail = await cloudinary.uploader.upload(req.files.thumbnail.tempFilePath)
		

		const newVideo = new videoModel({

			_id: new mongoose.Types.ObjectId(),
			title: "req.body.title",
			description: "req.body.description",
			userId: user._id,
			videoUrl: uploadedVideo.secure_url,
			videoId: uploadedVideo.public_id,
			thumbnailUrl: uploadedThumbnail.secure_url,
			thumbnailId: uploadedThumbnail.public_id,
			category: req.body.category,
			tags: req.body.tags.split(","),
		})

        const newUploadedVideo = await newVideo.save()
        res.json(newUploadedVideo)
	} catch (error) {
		console.log(`video upload  error : ${error.message}`)

		res.status(500).json({error: error.message})
	}
})

export default Router

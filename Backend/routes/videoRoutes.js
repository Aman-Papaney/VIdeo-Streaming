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
			title: req.body.title,
			description: req.body.description,
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

Router.put("/:videoId", checkAuth, async (req, res) => {
	try {
		const verifiedUser = await jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET)

		const videoDetails = await videoModel.findById(req.params.videoId)
		console.log(videoDetails);
		

		if (videoDetails == null || verifiedUser._id != videoDetails.userId) return res.status(401).json({error: "Unauthorized Access"})

		if (req.files) {
			await cloudinary.uploader.destroy(videoDetails.thumbnailId)
			console.log("file deleted");
			

			const updatedThumbnail = await cloudinary.uploader.upload(req.files.thumbnail.tempFilePath)
			console.log("file uploaded");

			const newData = {
				title: req.body.title,
				description: req.body.description,
				category: req.body.category,
				tags: req.body.tags.split(", "),
				thumbnailUrl: updatedThumbnail.secure_url,
				thumbnailId: updatedThumbnail.public_id,
			}

			const updatedVideoDetail = await videoModel.findByIdAndUpdate(req.params.videoId,newData,{new:true})
			console.log("db updated + thumbnail");
			res.status(200).json(updatedVideoDetail)
			
		}
		else{
			const newData = {
				title: req.body.title,
				description: req.body.description,
				category: req.body.category,
				tags: req.body.tags.split(", "),
			}

			const updatedVideoDetail = await videoModel.findByIdAndUpdate(req.params.videoId, newData, {new:true})
			console.log("db updated")
			res.status(200).json(updatedVideoDetail)
			
		}


	} catch (error) {
		console.log(`video update  error : ${error.message}`)
		res.status(500).json({error: error.message})
	}
})
export default Router

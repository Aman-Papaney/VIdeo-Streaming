import express from "express"
const Router = express.Router()
import bcrypt from "bcrypt"
import "dotenv/config"
import {v2 as cloudinary} from "cloudinary"

import userModel from "../models/userModel.js"
import mongoose from "mongoose"

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

Router.post("/signin", async (req, res) => {
	try {
		const dupUser = await userModel.find({email: req.body.email})

		if (dupUser.length > 0) {
			return res.status(500).json({error: "Email already exists"})
		}

		const hashedPassword = await bcrypt.hash(req.body.password, 10)

		const uploadResult = await cloudinary.uploader.upload(req.files.logo.tempFilePath, {
			public_id: "Logo",
		})

		const newUser = new userModel({
			_id: new mongoose.Types.ObjectId(),
			channelName: req.body.channelName,
			email: req.body.email,
			phone: req.body.phone,
			password: hashedPassword,
			logoUrl: uploadResult.secure_url,
			logoId: uploadResult.public_id,
		})

		const user = await newUser.save()
		res.json({new_user: user})
	} catch (error) {
		console.log(`user sign in error ${error.message}`)
	}
})

export default Router

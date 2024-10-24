import express from "express"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"

import userModel from "../models/userModel.js"
import configCloud from "../misc/configCloud.js"

const Router = express.Router()

configCloud()

Router.post("/signin", async (req, res) => {
	try {
		const dupUser = await userModel.find({email: req.body.email})

		if (dupUser.length > 0) {
			return res.status(500).json({error: "Email already exists"})
		}

		const hashedPassword = await bcrypt.hash(req.body.password, 10)

		const uploadResult = await cloudinary.uploader.upload(req.files.logo.tempFilePath)

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
		
		res.status(500).json({error: error.message})
	}
})

Router.post("/login", async (req, res) => {
	try {
		const dupUser = await userModel.find({email: req.body.email})
		if (dupUser.length == 0) {
			return res.status(500).json({error: "Email doesn't exixts"})
		}
		console.log(dupUser)

		const isPasswordValid = await bcrypt.compare(req.body.password, dupUser[0].password)
		if (!isPasswordValid) {
			return res.status(500).json({error: "Incorrect Password"})
		}

		const token = jwt.sign(
			{
				channelName: dupUser[0].channelName,
				_id: dupUser[0]._id,
				email: dupUser[0].email,
				phone: dupUser[0].phone,
				logoId: dupUser[0].logoId,
			},
			process.env.JWT_SECRET
		)

		res.json({
			channelName: dupUser[0].channelName,
			_id: dupUser[0]._id,
			email: dupUser[0].email,
			phone: dupUser[0].phone,
			logoId: dupUser[0].logoId,
			logoUrl:dupUser[0].logoUrl,
			subscribers:dupUser[0].subscribers,
			subscribedChannels:dupUser[0].subscribedChannels,
			json_token: token,
		})

	} catch (error) {
		console.log(`login error ${error.message}`)
		res.status(500).json({error: error.message})
	}
})

export default Router

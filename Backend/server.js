import express from "express";
import "dotenv/config"
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

import connectDB from "./misc/connectDb.js";
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";

const app = express()

connectDB()

app.use(bodyParser.json())

app.use(
	fileUpload({
		useTempFiles: true,
		// tempFileDir: "/tmp/",
	})
)

app.use("/user", userRoutes)
app.use("/video", videoRoutes)

app.listen(3000, () => {
    console.log(`Server Running at http://localhost:${process.env.SERVER_PORT}/`);
    
})
import mongoose from "mongoose"

const connectDB = async () => {
	try {
        const res = await mongoose.connect("mongodb://127.0.0.1:27017/video-streaming")
        console.log("Database Connection Successfull")
        
	} 
    catch (error) {
		console.log(`Database connection error : `,error.message)
	}
}
// const connectDB = () => {
// 	mongoose
// 		.connect("mongodb://127.0.0.1:27017/video-streaming")
// 		.then(() => {
// 			console.log("Database Connection Successfull")
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		})
// }

export default connectDB

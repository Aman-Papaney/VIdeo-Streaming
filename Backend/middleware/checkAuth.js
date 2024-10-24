import jwt from "jsonwebtoken"
import "dotenv/config"

const checkAuth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1]
		await jwt.verify(token, process.env.JWT_SECRET)
        next()
        

	} catch (error) {
		console.log(`jwt token error : ${error.message}`)

		res.status(500).json({error: "Invalid Token"})
	}
}

export default checkAuth

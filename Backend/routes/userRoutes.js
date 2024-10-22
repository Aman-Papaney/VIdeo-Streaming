import express from "express"
const Router = express.Router()
import bcrypt from "bcrypt"

Router.post('/signin', async (req, res) => {
    
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword)
        
    } 
    catch (error) {
        console.log(`user sign in error ${error.message}`)
            
    }
    
    res.json({name:"hh"})
})

export default Router

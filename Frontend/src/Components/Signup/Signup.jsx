import {useEffect, useState} from "react"

import "./signup.css"
import yt_logo from "../../assets/yt_logo.png"

const Signup = () => {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [password, setPassword] = useState("")
	const [logo, setLogo] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)


	useEffect(() => {
		console.log(logo)
	}, [logo])

  const fileHandler = (e) => {
    console.log(logo);
    
    setLogo(e.target.files[0])
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }

	return (
		<div className='signup-container'>
			<div className='form-container'>
				<div className='logo'>
					<img src={yt_logo} alt='YouTube' />
				</div>
				<div className='form'>
					<input
						onChange={(e) => {
							setEmail(e.target.value)
						}}
						type='email'
						placeholder='Email'
					/>
					<input
						onChange={(e) => {
							setUsername(e.target.value)
						}}
						type='text'
						placeholder='Username'
					/>
					<input
						onChange={(e) => {
							setPhone(e.target.value)
						}}
						type='phone'
						placeholder='Phone Number'
					/>
					<input
						onChange={(e) => {
							setPassword(e.target.value)
						}}
						type='password'
						placeholder='Password'
					/>
					<input onChange={fileHandler} type='file' />
					<img src={imageUrl} alt=' ' />
					<button type='submit'>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default Signup

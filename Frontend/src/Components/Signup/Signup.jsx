import {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import "./signup.css"
import yt_logo from "../../assets/yt_logo.png"

const Signup = () => {
	const navigate = useNavigate()

	// demo details
	const [username, setUsername] = useState("bb")
	const [email, setEmail] = useState("bb@bb")
	const [phone, setPhone] = useState("12341234")
	const [password, setPassword] = useState("bbbbbbbb")
	const [logo, setLogo] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)
	const [isLoading, setLoading] = useState(false)

	const fileHandler = (e) => {
		setLogo(e.target.files[0])
		setImageUrl(URL.createObjectURL(e.target.files[0]))
	}

	const submitHandler = (e) => {
		setLoading(true)
		e.preventDefault()
		const formData = new FormData()
		formData.append("email", email)
		formData.append("phone", phone)
		formData.append("password", password)
		formData.append("logo", logo)
		formData.append("channelName", username)

		axios
			.post("http://localhost:3000/user/signin", formData)
			.then((res) => {
				setLoading(false)
				console.log(res.data.new_user)
				navigate("/login")
			})
			.catch((err) => {
				setLoading(false)
				console.log(err.response)
			})
	}

	return (
		<div className='signup-container'>
			<div className='form-container'>
				<div className='logo'>
					<img src={yt_logo} alt='YouTube' />
				</div>
				<div>
					<form className='form' onSubmit={submitHandler}>
						<input
							onChange={(e) => {
								setEmail(e.target.value)
							}}
							value={email}
							type='email'
							placeholder='Email'
							required
						/>
						<input
							onChange={(e) => {
								setUsername(e.target.value)
							}}
							value={username}
							type='text'
							placeholder='Username'
							required
						/>
						<input
							onChange={(e) => {
								setPhone(e.target.value)
							}}
							value={phone}
							type='phone'
							placeholder='Phone Number'
							required
						/>
						<input
							onChange={(e) => {
								setPassword(e.target.value)
							}}
							value={password}
							type='password'
							placeholder='Password'
							required
						/>
						<input onChange={fileHandler} type='file' required />
						{imageUrl != null ? <img src={imageUrl} alt=' ' /> : null}
						<button type='submit'>{isLoading ? <i className='fa-solid fa-spinner fa-spin-pulse' aria-hidden='true'></i> : "Submit"}</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup

import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"

import "./login.css"
import yt_logo from "../../assets/yt_logo.svg"

const Login = () => {
	const navigate = useNavigate()
	const notify = (msg) => toast.error(msg)

	// demo details
	const [email, setEmail] = useState("bb@bb")
	const [password, setPassword] = useState("bbbbbbbb")
	const [isLoading, setLoading] = useState(false)

	const submitHandler = (e) => {
		setLoading(true)
		e.preventDefault()
		const formData = new FormData()
		formData.append("email", email)
		formData.append("password", password)

		axios
			.post("http://localhost:3000/user/login", formData)
			.then((res) => {
				setLoading(false)
				localStorage.setItem("token", res.data.json_token)
				navigate("/")
			})
			.catch((err) => {
				setLoading(false)
				notify(err.response.data.error)
			})
	}

	return (
		<div className='login-container'>
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
								setPassword(e.target.value)
							}}
							value={password}
							type='password'
							placeholder='Password'
							required
						/>
						<button type='submit'>{isLoading ? <i className='fa-solid fa-spinner fa-spin-pulse' aria-hidden='true'></i> : "Submit"}</button>
						<div>
							Don&apos;t have Account ? <Link to='/signin'>Register Here</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login

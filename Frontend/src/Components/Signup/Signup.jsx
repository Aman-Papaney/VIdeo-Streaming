import "./signup.css"
import logo from "../../assets/yt_logo.png"

const Signup = () => {
	return (
		<div className='signup-container'>
			<div className='form-container'>
				<div className='logo'>
					<img src={logo} alt='YouTube' />
				</div>
				<div className='form'>
					<input type='email' placeholder='Email' />
					<input type='text' placeholder='Username' />
					<input type='password' placeholder='Password' />
				</div>
			</div>
		</div>
	)
}

export default Signup

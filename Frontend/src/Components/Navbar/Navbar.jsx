import "./navbar.css"
import menuIcon from "../../assets/menu.svg"
import yt_icon from "../../assets/yt_logo.svg"
import search_icon from "../../assets/search.svg"
import person_icon from "../../assets/person.png"

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar-left'>
				<img src={menuIcon} alt='MENU' />
				<div className='logo'>
					<img src={yt_icon} alt='YT' />
					<p>YouTube</p>
				</div>
			</div>
			<div className='navbar-center'>
				<input type='text' name='query' id='query' placeholder='SEARCH' />
				<img src={search_icon} alt='YT' />
			</div>
			<div className='navbar-right'>
				<img src={person_icon} alt='' />
				<p>Sign In</p>
			</div>
		</div>
	)
}

export default Navbar

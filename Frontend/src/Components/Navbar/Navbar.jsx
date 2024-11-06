import "./navbar.css"
import MenuIcon from "@mui/icons-material/Menu"
import VideoCallIcon from "@mui/icons-material/VideoCall"
import SearchIcon from "@mui/icons-material/Search"
import yt_logo from "../../assets/yt_logo.png"


const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar-left'>
				<div className='menu-icon'>
					<MenuIcon />
				</div>
				<div className='logo'>
					<img src={yt_logo} alt='YouTube' />
				</div>
			</div>
			<div className='navbar-center'>
				<input type='text' name='searchQuery' id='searchQuery' />
				<div className="search-icon">
					<SearchIcon/>
				</div>
			</div>
			<div className='navbar-right'>
				<div className="upload-video">
					<VideoCallIcon/>
				</div>
			</div>
		</div>
	)
}

export default Navbar

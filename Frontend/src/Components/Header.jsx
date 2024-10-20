const Header = () => {
	return (
		<div className='header-container'>

			<div className='header-left'>
				<div className='header-logo'>Logo</div>
				<div className='header-search-bar'>
					<input type='text' placeholder='Search Video'></input>
				</div>
			</div>

			<div className='header-right'>
				<div className='header-signin'>Sign In</div>
			</div>

		</div>
	)
}

export default Header

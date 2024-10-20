const Navbar = () => {
	return (
		<div className='navbar-container'>
			<div className='navbar bg-base-100'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h7' />
							</svg>
						</div>
						<ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
							<li>
								<a>Dashboard</a>
							</li>
							<li>
								<a>Portfolio</a>
							</li>
							<li>
								<a>About</a>
							</li>
						</ul>
					</div>
					<a className='btn btn-ghost text-xl'>Logo</a>
					<div className='form-control'>
						<input type='text' placeholder='Search' className='input input-bordered w-24 md:w-auto' />
					</div>
				</div>
				
				<div className='navbar-end'>
					<a className='btn btn-ghost text-xl'>Sign in</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar

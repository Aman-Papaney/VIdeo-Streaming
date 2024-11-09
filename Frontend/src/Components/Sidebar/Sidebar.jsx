import "./sidebar.css"
import home_icon from "../../assets/home_icon.svg"
import subscription_icon from "../../assets/subscription_icon.png"
import history_icon from "../../assets/history_icon.png"
import gaming_icon from "../../assets/gaming_icon.png"
import movie_icon from "../../assets/movie_icon.png"
import news_icon from "../../assets/news_icon.svg"
import music_icon from "../../assets/music_icon.png"
import podcast_icon from "../../assets/podcast_icon.png"
import shopping_icon from "../../assets/shopping_icon.png"
import trending_icon from "../../assets/trending_icon.png"

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-top'>
				<div className='home-div ele'>
					<img src={home_icon} alt='' />
					<p>Home</p>
				</div>
				<div className='sub-div ele'>
					<img src={subscription_icon} alt='' />
					<p>Subscriptions</p>
				</div>
			</div>

			<div className='sidebar-middle'>
				<div className='history-div ele'>
					<img src={history_icon} alt='' />
					<p>History</p>
				</div>
			</div>
			<div className='sidebar-bottom'>
				<p className="ele explore">Explore</p>
				<div className='trending-div ele'>
					<img src={trending_icon} alt='' />
					<p>Trending</p>
				</div>

				<div className='gaming-div ele'>
					<img src={gaming_icon} alt='' />
					<p>Gaming</p>
				</div>

				<div className='movie-div ele'>
					<img src={movie_icon} alt='' />
					<p>Movie</p>
				</div>
				<div className='news-div ele'>
					<img src={news_icon} alt='' />
					<p>News</p>
				</div>
				<div className='music-div ele'>
					<img src={music_icon} alt='' />
					<p>Music</p>
				</div>
				<div className='podcast-div ele'>
					<img src={podcast_icon} alt='' />
					<p>Podcast</p>
				</div>
				<div className='shopping-div ele'>
					<img src={shopping_icon} alt='' />
					<p>Shopping</p>
				</div>
			</div>
		</div>
	)
}

export default Sidebar

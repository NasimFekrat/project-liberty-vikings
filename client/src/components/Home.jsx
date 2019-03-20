import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoggedOutHomeMain from '../components/LoggedOutHomeMain';
import LoggedInHomeMain from '../components/LoggedInHomeMain';

// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
			// outer most div
			<div>

				<Navbar />
{/* 
				<section className="grid">
					<p>Are you ready to share the house!</p>
					<h2 className="">Available Rooms</h2>

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/hotel.png")} alt="thumbnail"></img> room
								<p>Picture</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/hotel.png")} alt="thumbnail"></img> room
								<p>Picture</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/hotel.png")} alt="thumbnail"></img> room
								<p>Picture</p>
							</div>
						</div>
					</div>
				</section> */}
				<LoggedInHomeMain />
				<Footer />



			</div>
			// end of outer most div


		)
	} else {
		return (
			<div>
				<Navbar />
				<LoggedOutHomeMain />
				<Footer />
			</div>
			// <div className="Home">
			// 	<p>Current User:</p>
			// 	<code>
			// 		{JSON.stringify(props)}
			// 	</code>
			// </div>

		)
	}
}

export default Home;

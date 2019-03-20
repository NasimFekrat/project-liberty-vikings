import React from 'react';

// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
			// outer most div
			<div>

				<div className="Home">
					<h1> Roomer </h1>
					{/* <h1> Roomer </h1>
					<p>Current User:</p>
					<code>
						{JSON.stringify(props)}

					</code> */}
				</div>

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
				</section>


				<footer className="logoutFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© Copyright:
       				 	<a> Liberty Vikings </a>
					</div>
				</footer>



			</div>
			// end of outer most div


		)
	} else {
		return (
			<div>
				<div className="Home">
					<h1> Roomer </h1>
				</div>
				<div className="loggedOut">
					<h1> WELCOME to ROOMER App! </h1>
					<br />
					{/* <h1> you are logged out </h1> */}
					{/* box links  */}
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<div id="my-slider" class="carousel slide" data-ride="carousel">
									{/* indicators (dot nav) */}

									{/* wrapper for slides */}

									{/* controls AKA next and prev buttons */}


								</div>
							</div>
						</div>
					</div>

					{/* <section className="boxes">

						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div className="learnBox">
									<a><p>Learn About Your Peers</p></a>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="teachBox">
									<a ><p>Teach Your Peers About You</p></a>

								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="feelingsBox">
									<a ><p>Get Your Feelings Hurt</p></a>

								</div>
							</div>
						</div>
					</section> */}
				</div>
				<footer className="absoluteFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© Copyright:
       				 <a> Liberty Vikings </a>
					</div>
				</footer>
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

export default Home

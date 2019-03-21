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
		)
	}
}

export default Home;

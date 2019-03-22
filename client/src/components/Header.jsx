import React from 'react';
import Emoji from 'react-emoji-render';
// TODO - add proptypes

const headerStyle = {
	color: "whitesmoke",
	padding: "10px",
	fontFamily: "Raleway"
};

const Header = props => {

	let Greeting
	if (props.user === null) {
		Greeting = <p style={headerStyle}>Hey, roomy! <Emoji text=":)"/></p>
	} else if (props.user.firstName) {
		Greeting = (
			<p style={headerStyle}>
				Welcome back, <strong>{props.user.firstName}</strong> <Emoji text="❤️"/>
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p style={headerStyle}>
				Welcome back, <strong>{props.user.local.username} </strong> <Emoji text="❤️"/>
			</p>
		)
	}
	return (
		
		<div className="Header" >
			{Greeting}
		</div>
	)
}

export default Header;

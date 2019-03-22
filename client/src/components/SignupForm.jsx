import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import Modal from "./Modal.js";


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignupFormStyle = {
	width: "100%"
}

const formColOne = {
	margin: "20px auto 20px auto",
	width: "50%",
}

const formColTwo = {
	margin: "20px auto 20px auto",
	width: "50%"
}

const imageBrowse = {
	margin: "20px auto 20px auto",
}



class SignupForm extends Component {

	json =
		{
			questions: [
				{
					type: "rating",
					name: "question1",
					title: "Are you an Early Bird or Night Owl?",
					rateValues: [{ value: 1, text: "Early Bird" }, { value: 2, text: "Both" }, { value: 3, text: "Night Owl" }]
				},

				{
					type: "rating",
					name: "question2",
					title: "Would you rather socialize or stay in your room to watch the latest netflix series?",
					rateValues: [{ value: 1, text: "Latest Netflix Series" }, { value: 2, text: "A little bit of both" }, { value: 3, text: "Socialize" }]
				},

				{
					type: "rating",
					name: "question3",
					title: "Are you a coffee drinker or would you prefer a cup of tea?",
					rateValues: [{ value: 1, text: "Tea" }, { value: 2, text: "Don't make me choose" }, { value: 3, text: "Coffee" }]
				},

				{
					type: "rating",
					name: "question4",
					title: "Do you prefer Wine or Beer",
					rateValues: [{ value: 1, text: "Wine" }, { value: 2, text: "I'll stick to tea" }, { value: 3, text: "Beer" }]
				},

				{
					type: "rating",
					name: "question5",
					title: "Would you prefer to stay in and watch the latest star wars movie or go on a hike in nature?",
					rateValues: [{ value: 1, text: "Starwars Movie" }, { value: 2, text: "Drive in movie" }, { value: 3, text: "Go on a hike" }]
				},

				{
					type: "rating",
					name: "question6",
					title: "are you a neatfreak?",
					rateValues: [{ value: 1, text: "Yes" }, { value: 2, text: "Somewhat tidy" }, { value: 3, text: "No" }]
				},

				{
					type: "rating",
					name: "question7",
					title: "If something is bothering you are you more likely to communicate or keep to yourself?",
					rateValues: [{ value: 1, text: "communicate" }, { value: 2, text: "I don't get bothered" }, { value: 3, text: "keep to myself" }]
				}

			]
		};




	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			photos: '',
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null,
			personaName: '',
			personaPhoto: '',
			personaDescription: '',
			isShow: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.onComplete = this.onComplete.bind(this);
	}


	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onComplete(survey, options) {
		//Write survey results into database
		console.log("Survey results: " + JSON.stringify(survey.data));

		var answerBucket = []
		Object.keys(survey.data).forEach((question) => {
			answerBucket.push(parseInt(survey.data[question]));
		});

		console.log(answerBucket);

		var personas = [
			{
				name: "Witty Walrus",
				description: "You're a Witty Walrus: Underneath that thick skin is a surprisingly sensitive spirit. But still, it's difficult to embarrass a walrus. Nothing in life is taken so seriously that it cannot be laughed at. Its infectious love for life contaminates everyone who has unprotected encounters with this hearty beast.",
				photo: "https://animalinyou.com/animals/walrus/Walrus_files/640px-Noaa-walrus22.jpg",
				scores: [
					"1",
					"1",
					"1",
					"1",
					"1",
					"1",
					"1"
				]
			},

			{
				name: "Wonderous Wolf",
				photo: "https://animalinyou.com/animals/wolf/Wolf_files/591px-Wolf_je1-3.jpg",
				description: "You're a Wonderous Wolf: With an innate understanding of the value of teamwork, it's always ready to take its place in the chain of command either as leader or as simply a member of the pack. When a wolf decides to innovate, it makes sure that it has the backing of a capable team. The wolf is clear-headed and strong-minded, always willing to compromise in the interests of getting a job done.",
				scores: [
					"3",
					"3",
					"3",
					"3",
					"3",
					"3",
					"3",
				]
			},

			{
				name: "Magnificent Mountain Goat",
				photo: "https://animalinyou.com/animals/mountain-goat/Mountain%20Goat_files/640px-Mountain_Goat_USFWS.jpg",
				description: "Youre a Magnificent Mountain Goat: Balance is a critical component of a mountain goat's life, and they are moderate in every facet of their behavior. With conservative family values, their politics are middle of the road, and their even-keeled life has similar characteristics to that of their cousin the sheep. However, there's an air of eccentricity about a mountain goat, and this is reflected in their unusually decorated homes.",
				scores: [
					"2",
					"2",
					"2",
					"2",
					"2",
					"2",
					"2"
				]
			},

			{
				name: "Zealous Zebra",
				photo: "https://animalinyou.com/animals/zebra/Zebra_files/640px-Equus_quagga.jpg",
				description: "You're a Zealous Zebra:Once the zebra's mind is made up, it is difficult to shift its position, which explains its reputation for stubbornness. These are deliberate creatures who are always trying to anticipate life's obstacles, and are capable of bounding over most challenges.Those that come into contact with the zebra find it to be a powerfully loyal and intelligent friend.",
				scores: [
					"1",
					"2",
					"1",
					"1",
					"2",
					"1",
					"2"
				]
			},

			{
				name: "Passionate Penguin",
				photo: "https://animalinyou.com/animals/penguin/Penguin_files/646px-Penguins_walking_-Moltke_Harbour,_South_Georgia,_British_overseas_territory,_UK-8.jpg",
				description: "Passionate Penguin: Aggressive yet gentle, outgoing but shy, stable yet flighty - everyone sees the penguin in a different way. It's that black and white thing: the penguin only reveals the side that it wants to you to see. So whether you like this darling-devil or not, you have to concede that it's a fascinating and enigmatic individual.",
				scores: [
					"2",
					"3",
					"2",
					"3",
					"2",
					"3",
					"2"
				]
			}
		]

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: Infinity,
			description: ""
		};


		var totalDifference;


		for (var i = 0; i < personas.length; i++) {
			var currentFriend = personas[i];
			totalDifference = 0;

			console.log(currentFriend.name);

			for (var j = 0; j < currentFriend.scores.length; j++) {
				var currentFriendScore = currentFriend.scores[j];
				var currentUserScore = answerBucket[j];

				totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
			}
			if (totalDifference <= bestMatch.friendDifference) {
				// Reset the bestMatch to be the new friend.
				bestMatch.name = currentFriend.name;
				bestMatch.photo = currentFriend.photo;
				bestMatch.friendDifference = totalDifference;
				bestMatch.description = currentFriend.description;
			}
		}

		this.setState({
			personaName: bestMatch.name,
			personaPhoto: bestMatch.photo,
			personaDescription: bestMatch.description,
			isShow: true
		});

		console.log(bestMatch);


		// alert(bestMatch.description);


	}

	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				photos: this.state.photos
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		var model = new Survey.Model(this.json);

		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div>

				<Navbar />

				<Survey.Survey model={model} onComplete={this.onComplete} />
				{this.state.isShow &&
					<div>
						<img src={this.state.personaPhoto} />
						<p className="descriptionPersona">{this.state.personaDescription} </p>
					</div>
				}

				<div className="SignupForm" style={SignupFormStyle}>
					<h2>Signup Form</h2>
					<div>
						<form className="forms d-flex">
							<div className="form d-flex flex-column justify-content-between flex-wrap col-md-6" style={formColOne}>
								<div className="form-group col-md-2">
									<label htmlFor="firstName">First Name</label>
									<input
										type="text"
										className="form-control"
										id="inputFirstName"
										placeholder="First Name"
										name="firstName"
										value={this.state.firstName}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-2">
									<label htmlFor="lastName">Last Name</label>
									<input
										type="text"
										className="form-control"
										id="inputLastName"
										placeholder="Last Name"
										name="lastName"
										value={this.state.lastName}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-2">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										className="form-control"
										id="inputEmail"
										placeholder="Email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
							</div>

							{/* column two */}

							<div className="form flex-column d-flex flex-wrap justify-content-between col-md-6" style={formColTwo}>
								<div className="form-group col-md-2">
									<label htmlFor="username">Username </label>
									<input
										type="text"
										className="form-control"
										id="inputUsername"
										placeholder="Username"
										name="username"
										value={this.state.username}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-2">
									<label htmlFor="password">Password </label>
									<input
										type="password"
										className="form-control"
										id="inputPassword"
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-2">
									<label htmlFor="password">Confirm Password </label>
									<input
										type="password"
										className="form-control"
										id="inputPasswordConfirm"
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group col-md-2">
									<label htmlFor="photos" className="profile-picture-select">Profile Picture</label>
									<label className="custom-file-label">Choose file</label>
									<input
										type="file"
										className="custom-file-input"
										id="customFile"
										name="photos"
										value={this.state.photos}
										onChange={this.handleChange}
									/>
								</div>
							</div>
						</form>
					</div>
					<button className="btn btn-warning" type="submit" onClick={this.handleSubmit}>Sign up</button>
				</div>
				
				<Footer />
			</div>
		)
	}
}

export default SignupForm

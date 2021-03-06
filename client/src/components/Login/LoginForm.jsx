import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer';

const loginFormTitle = {
	color: "whitesmoke",
	fontFamily: "Raleway",
	fontSize: "40px"
}

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm">
					<Navbar />

					<div className="marginLoginForm">
						<h2 style={loginFormTitle}>Login form</h2>
						<form>
							<label htmlFor="username">Username: </label>
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<label htmlFor="password">Password: </label>
							<input
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<button onClick={this.handleSubmit} type="submit" className="btn btn-sm btn-warning login-button">Login</button>
						</form>
						<a href="/auth/google">
							{/* <GoogleButton /> */}
							{/* <img src={googleButton} alt="sign into Google Button" /> */}
						</a>
					</div>
					<Footer />
				</div>
			)
		}
	}
}

export default LoginForm

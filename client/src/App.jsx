import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Home from './components/Home';
import PostDetail from "./components/Posts/PostDetail";
import PostStats from './components/Posts/PostStats';
import PostMainMenu from './components/Posts/PostMainMenu';
import CurrentPost from './components/Posts/CurrentPost/CurrentPost';
import Chat from "./components/Chat/Chat";
import { slide as Menu } from 'react-burger-menu';
import NoMatch from "./components/NoMatch";


const DisplayLinks = props => {
	if (props.loggedIn) {
		return (

			<Menu>
				<a className="menu-item" href="/">Home</a>
				<a className="menu-item" href="/posts">Post</a>
				<a className="menu-item" href="/post-stats">Post Stats</a>
				<a className="menu-item" onClick={props._logout}>Logout</a>
			</Menu>

		)
	} else {
		return (

			<div>
				<Menu>
					<a className="menu-item" href="/">Home</a>
					<a className="menu-item" href="/login">Login</a>
					<a className="menu-item" href="/signup">Sign Up</a>
				</Menu>
			</div>
		)
	}
}

const DisplayChat = props => {
	if (props.loggedIn) {
		return (
			<div className="globalChat">
				<Chat></Chat>
			</div>
		)
	} else {
		return (
			<div className="globalChat">
			</div>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="App">
				<Header user={this.state.user} />

				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				<Switch>
				<Route exact path="/" 
					render={() => 
						<Home 
							user={this.state.user} />} 
						/>
				<Route 
					exact path="/posts" 
					render={() => 
						<PostMainMenu 
							user={this.state.user} />} 
						/>
				<Route 
					exact path="/post-stats" 
					render={() => 
						<PostStats 
							user={this.state.user} />} 
						/>
				<Route 
					exact path="/post-details" 
					component={PostDetail} 
					/>
				<Route
					path="/current"
					render={() =>
						<CurrentPost
							user={this.state.user} />}
				/>
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} />
				<Route component={NoMatch} />
				</Switch>

				<DisplayChat _logout={this._logout} loggedIn={this.state.loggedIn} user={this.state.user} />
				
			</div>
		)
	}
}

export default App

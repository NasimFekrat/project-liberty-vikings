import React from 'react';
import axios from "axios";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoggedOut from '../LoggedOut';

const modals = {
  margin: "50px auto auto auto",
  width: "1000px",
  padding: "auto"
}

const message = {
  color: "whitesmoke",
  fontFamily: "Raleway",
  fontSize: "30px",
  padding: "10px"
}

const modalTitle = {
  color: "black",
  fontFamily: "Raleway",
  fontSize: "20px"
}

class PostMainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      createdBy: "",
      eventDate: "",
      location: "",
      searchedPostId: "",
      searchedCreatedBy: "",
      searchedEventDate: "",
      searchedLocation: "",
      returnedResults: false
    };
  }
  componentDidMount() {
    axios.get('/auth/user').then(response => {
      if (!!response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user,
          createdBy: response.data.user._id
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.eventDate && this.state.location) {
      this.setState({
        isValid: true
      });
      console.log(this.state.user)
      axios.post("/api/posts", this.state)
        .then(res => {
          console.log(this.state);
          this.setState({ postID: res.data._id });
        })
        .catch(err => console.log(err));
    }
    else {
      this.setState({
        isValid: false
      });
    }
    this.setState({
      isValid: true,
      createdBy: "",
      eventDate: "",
      location: ""
    });
  }

  onSearch = (e) => {
    e.preventDefault();
    if (this.state.searchedPostId) {
      this.setState({
        isValid: true
      });
      axios.get("/api/posts/" + this.state.searchedPostId)
        // .then(res => console.log(res))5ae9008a629a2e4b622030e2
        .then(res => this.setState({
          returnedResults: true,
          searchedPostId: res.data._id,
          searchedCreatedBy: res.data._id,
          searchedEventDate: res.data.eventDate,
          searchedLocation: res.data.location
        }))
        .catch(err => this.setState({
          returnedResults: false
        }));
    }
    else {
      this.setState({
        isValid: false
      });
    }
    console.log(this.state.searchResults);
  }

  render() {
    if (this.state.user) {
      return (
        <div>
          <Navbar />
          <div className="PostMainMenu" style={modals}>
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={modalTitle}>Create a Post</h5>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="searchedPostId"
                        id="searchedPostId"
                        value={this.state.searchedPostId}
                        onChange={this.onChange}
                        placeholder="ABC123@"
                      />
                      <button type="submit" className="btn btn-primary" onClick={this.onSearch} id="postSearch">Search</button>
                    </div>
                  </div>
                </div>
                {this.state.returnedResults ? (
                  <div className="col-sm-8">

                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.state.searchedLocation}</h5>
                        <small className="text-muted">{this.state.searchedEventDate}</small>
                      </div>
                      <a href={"/current/?id=" + this.state.searchedPostId}><strong>Read the other's Posts</strong></a>
                      <p className="text-muted">Created by: {this.state.searchedCreatedBy}</p>
                    </div>
                  </div>) : (
                  <h3 style={message}>No Results to Display</h3>
                  )}
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={modalTitle}>Create a Post</h5>
                    <form id="createPostForm">
                      <div className="form-group">
                        <label htmlFor="createdBy">Created By</label>
                        <input
                          type="text"
                          className="form-control"
                          name="createdBy"
                          id="createdBy"
                          value={this.state.user.firstName || this.state.user.local.username}
                          placeholder={this.state.user.local.username}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="eventDate">Event Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="eventDate"
                          id="eventDate"
                          value={this.state.eventDate}
                          onChange={this.onChange}
                          placeholder="MM-DD-YYYY"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          name="location"
                          id="location"
                          value={this.state.location}
                          onChange={this.onChange}
                          placeholder="Location"
                        />
                      </div>
                      {this.state.postID ? <div><p>Click or share this link: <a href={"/current/?id=" + this.state.postID}>{`${window.location.origin}${window.location.pathname}`}/current/?id={this.state.postID}</a></p></div> : <p>No post is currently available</p>}

                      <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
    } else {
      return (
        <div>
        <Navbar />
        <LoggedOut />
        <Footer />
        </div>
      )
    }
  }
}
export default PostMainMenu;
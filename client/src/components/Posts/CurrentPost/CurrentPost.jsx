import React from 'react'
import Tableheader from "./Subcomponents/Tableheader"
import Tablerow from "./Subcomponents/Tablerow"
import Modal from "./Subcomponents/Modal/Modal"
import axios from "axios";
import './currentPost.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const paragraphStyle = {
  margin: "40px",
  fontFamily: "Raleway"
}

const headingStyle = {
  margin: "600px",
  fontFamily: "Raleway"
}

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      postId: "",
      ended: true,
      commentBy: "?",
      commentAbout: "?",
      rating: "",
      comment: "",
      tagArray: [],
      availableUsers: [
        {
          userId: 1,
          name: "David"
        },
        {
          userId: 2,
          name: "Parker"
        },
        {
          userId: 3,
          name: "Jessa"
        },
        {
          userId: 4,
          name: "Nasim"
        },
        {
          userId: 5,
          name: "Parham"
        },
        {
          userId: 6,
          name: "Ryan"
        }]
    }

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  //eventually make this state

  componentWillMount() {

    let url = new URL(window.location.href);
    let qryVal = url.searchParams.get("id");
    if (qryVal) {
      axios.get("/api/posts/" + qryVal)
        .then(res => this.setState({
          ended: res.data.ended,
          postId: qryVal
        }))
        // .then(res => this.props.history.push("/posts")) // redirect to home page
        .catch(err => console.log(err));
      // this.setState({ mode });
    }
    else {
      console.log("Not active post");
    };
  }

  componentDidMount() {
    axios.get('/auth/user').then(response => {
      if (!!response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user,
          commentBy: response.data.user._id
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  handleChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  logThis = event => {
    this.setState({
      commentAbout: event.target.getAttribute('data')
    });
  }

  recordRating = event => {
    this.setState({ rating: event.target.value });
    let currentlyActive = document.getElementsByClassName("list-group-item active");
    let oldChoice = currentlyActive[0];
    if (oldChoice) {
      oldChoice.classList.remove("active");
    }
    event.target.classList.add("active");
  }

  addTag = event => {
    this.setState({ tagArray: [...this.state.tagArray, event.target.value] })
  }

  submitRating = event => {
    axios.post("/api/comments/", {
      postId: this.state.postId,
      commentBy: this.state.commentBy,
      commentAbout: this.state.commentAbout,
      rating: this.state.rating,
      comment: this.state.comment
    })
      .then(res => {
        console.log(res.data._id);
        this.addComment(res.data._id);
      })
      .catch(err => console.log(err));
  }

  // updateTd = () => {
  //   let selected = document.getElementById("selected");
  //   switch (this.state.rating) {
  //     case '1':
  //       selected.className.add("bg-danger");
  //       break;
  //     case '2':
  //       selected.classList.add("bg-danger");
  //       break;
  //     case '3':
  //       selected.classList.add("bg-warning");
  //       break;
  //     case '4':
  //       selected.classList.add("bg-warning");
  //       break;
  //     case '5':
  //       selected.classList.add("bg-light");
  //       break;
  //     case '6':
  //       selected.classList.add("bg-info");
  //       break;
  //     case '7':
  //       selected.classList.add("bg-info");
  //       break;
  //     case '8':
  //       selected.classList.add("bg-info");
  //       break;
  //     case '9':
  //       selected.classList.add("bg-danger");
  //       break;
  //     case '10':
  //       selected.classList.add("bg-primary");
  //       break;
  //     default:
  //       selected.classList.add("bg-primary");
  //   }
  // }

  addComment = id => {
    console.log("postid: " + this.state.postId);
    let update = { $push: { comments: id } }
    axios.put("/api/posts/" + this.state.postId, update)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  endPost = id => {
    let update = { ended: true }
    axios.put("/api/posts/" + this.state.postId, update)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.props.user && !this.state.ended) {
      return (
        <div>
         <Navbar />
          <div className="centerTable">
            <div className="table-responsive col-12">
              <table className="tableBG table table-bordered">
                <thead>
                  <tr>
                    <th><a className="btn btn-primary" href={"/post-details/?id=" + this.state.postId} onClick={this.endPost}>End Post</a></th>
                    {this.state.availableUsers.map(user => (
                      <Tableheader name={user.name} photo={user.photo} key={user.name + "header"} />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <Tablerow key={this.props.user.local.userName + "row"} name={this.props.user.firstName} photo={this.props.user.photos[0]} availableUsers={this.state.availableUsers} logThis={this.logThis} />
                </tbody>
              </table>
              <Modal commentAbout={this.state.commentAbout} recordRating={this.recordRating} submitRating={this.submitRating} handleChange={this.handleChange} />
            </div>
          </div>

        <Footer />
        </div>
      )
    }
    else if (this.state.ended) {
      return (
        <div>
          <Navbar />
          <div className="Review">
            <p style={paragraphStyle}>This post is currently unavailable or has ended. Please contact your post coordinator if you feel this is an error</p>
          </div>
         <Footer />
         </div>
      )
    }
    else {
      return (
        <div>
          <Navbar />
          <div className="Review">
            <br />
            <h1 style={headingStyle}> Current Post </h1>
            <br />
            <p className="sorry" style={paragraphStyle}>Sorry, you really need to be logged in for this page.</p>
          </div>
          <Footer />
        </div>
      )
    }
  }
}
export default Review;

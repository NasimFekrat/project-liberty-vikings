import React from "react";
import axios from "axios";
import { Bar, Bubble } from 'react-chartjs-2';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: "",
      ended: "",
      resLabel: [],
      resTimestamp: [],
      resCommentAbout: [],
      resCommentBy: [],
      resData: [],
      charData: {}
    };
  }
  // When this component mounts, grab the post with the _id of this.props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc
  componentWillMount() {
    let url = new URL(window.location.href);
    let qryVal = url.searchParams.get("id");
    if (qryVal) {
      axios.get("/api/posts/" + qryVal)
        .then(res => {
          const comments = res.data.comments;
          comments.map(comment => {
            this.setState({
              resData: [...this.state.resData, comment.rating],
              resCommentAbout: [...this.state.resLabel, comment.commentAbout],
              resCommentBy: [...this.state.resLabel, comment.commentBy],
              resTimestamp: [...this.state.resLabel, comment.timestamp],
              resLabel: [...this.state.resLabel, comment.commentAbout],
              charData: {
                labels: [...this.state.resLabel, comment.commentAbout],
                datasets: [{
                  label: "Dataset #1",
                  backgroundColor: "rgba(255,99,132,0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  borderWidth: 2,
                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                  hoverBorderColor: "rgba(255,99,132,1)",
                  data: [...this.state.resData, comment.rating],
                }]
              }
            })
          })
        })
        .catch(err => console.log(err));
      // this.setState({ mode });
    }
    else {
      console.log("Not active post");
    };
    console.log(this.state.resData);
  }

  render() {
    return (
      <div>
        <div className="Home">
          <h1> Roomer </h1>
        </div>

        < div className="postResults">
          <div className="chart">
            {/* <div className="row">
              <div className="col-sm-6"> */}
                <div className="card">

                  <div className="card-body">
                    <h5 className=" postResultsTitle card-title">Post Results</h5>
                    <Bar
                      data={this.state.charData}
                      //dynamically rendered graph will not start at zero unless specified
                      options={{
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }}
                    />
                    {/* <Bubble
                      data={this.state.charData}
                      //dynamically rendered graph will not start at zero unless specified
                      options={{
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }}
                    /> */}
                  </div>

                </div>
              {/* </div>
            </div> */}
          </div>
        </div>
        <footer className="absoluteFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© Copyright:
       				 <a> Liberty Viking </a>
					</div>
				</footer>
      </div>
    );
  }
}
export default PostDetail;
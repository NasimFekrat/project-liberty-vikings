import React from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import LoggedOut from '../../LoggedOut';
// TODO - add proptypes

const modalTitle = {
  color: "whitesmoke",
  fontFamily: "Raleway",
  fontSize: "40px"
}

const modalP = {
  color: "whitesmoke",
  fontFamily: "Raleway"
}

const bodyP = {
  color: "whitesmoke",
  fontFamily: "Raleway",
  fontSize: "20px",
  // fontWeight: "bold"
}
const bodyTitle = {
  color: "whitesmoke",
  fontFamily: "Raleway",
  fontWeight: "bold"
}

const title = {
  marginTop: "50px"
}

const button = {
  color: "black",
  fontFamily: "Raleway",
}

const PostStats = props => {
  if (props.user) {
    return (
      <div>
        <Navbar />
        <div className="PostStats">
          <div className="title" style={title}>
            <h2 style={modalTitle}>Post Stats</h2>
            <p style={modalP}>{props.user.local.username} here is a list of your posts.</p>
          </div>
          <br />
          <br />
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <h3 style={bodyTitle}>Posts where you were a room owner</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" style={bodyP}>Date</th>
                      <th style={bodyP}>Viewed</th>
                      <th style={bodyP}>Comments</th>
                      <th style={bodyP}>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><button type="button" className="btn btn-warning" style={button}>01/18/2019</button></th>
                      <td style={bodyP}>10</td>
                      <td style={bodyP}>1</td>
                      <td style={bodyP}>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <br />
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <h3 style={bodyTitle}>Posts you wanted to rent a room</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" style={bodyP}>Date</th>
                      <th style={bodyP}>Viewed</th>
                      <th style={bodyP}>Comments</th>
                      <th style={bodyP}>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><button type="button" className="btn btn-warning" style={button}>04/01/2018</button></th>
                      <td style={bodyP}>15</td>
                      <td style={bodyP}>4</td>
                      <td style={bodyP}>8</td>
                    </tr>
                    <tr>
                      <th scope="row"><button type="button" className="btn btn-warning" style={button}>03/24/2018</button></th>
                      <td style={bodyP}>37</td>
                      <td style={bodyP}>6</td>
                      <td style={bodyP}>2</td>
                    </tr>
                    <tr>
                      <th scope="row"><button type="button" className="btn btn-warning" style={button}>01/18/2018</button></th>
                      <td style={bodyP}>10</td>
                      <td style={bodyP}>1</td>
                      <td style={bodyP}>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <br />
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

export default PostStats;
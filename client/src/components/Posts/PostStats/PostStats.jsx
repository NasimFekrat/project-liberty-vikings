import React from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import LoggedOut from '../../LoggedOut';
// TODO - add proptypes

const PostStats = props => {
  if (props.user) {
    return (
      <div>
        <Navbar />
        <div className="PostStats">
          <div className="title">
            <h2>Post Stats</h2>
            <p>{props.user.local.username} here is a list of your posts.</p>
          </div>
          <br />
          <br />
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <h3>Posts where you were a room owner</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th>Viewed</th>
                      <th>Comments</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><button type="button" className="btn btn-primary">01/18/2019</button></th>
                      <td>10</td>
                      <td>1</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <br />
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <h3>Posts you wanted to rent a room</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th>Viewed</th>
                      <th>Comments</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><button type="button" className="btn btn-primary">04/01/2018</button></th>
                      <td>15</td>
                      <td>4</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <th scope="row"><button type="button" className="btn btn-primary">03/24/2018</button></th>
                      <td>37</td>
                      <td>6</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row"><button type="button" className="btn btn-primary">01/18/2018</button></th>
                      <td>10</td>
                      <td>1</td>
                      <td>10</td>
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
import React from 'react'
// TODO - add proptypes

const PostStats = props => {
  if (props.user) {
    return (
      <div>
        <div className="Home">
					<h1> Roomer </h1>
				</div>
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

      <footer class="page-footer font-small blue">
					<div class="footer-copyright text-center">
						© Copyright:
       				 <a href="/"> Liberty Vikings </a>
					</div>
				</footer>

      </div>
    )
  } else {
    return (
      <div>
				<div className="Home">
					<h1> Roomer </h1>
				</div>
				<div className="loggedOut">
					<h1> WELCOME to ROOMER </h1>
					<br />
					<div className="PostStats">
        <p className="sorry">Sorry, you really need to be logged in for this page.</p>
      </div>
				</div>
				<footer className="absoluteFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© Copyright:
       				 <a> Liberty Vikings </a>
					</div>
				</footer>
			</div>
      
    )
  }
}

export default PostStats
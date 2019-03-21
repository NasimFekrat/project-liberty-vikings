import React from "react";
// import "./style.css";

function LoggedOut() {
    return (
        <div className="loggedOut">
            <h1> WELCOME to ROOMER </h1>
            <br />
            <div className="PostStats">
                <p className="sorry">Sorry, you really need to be logged in for this page.</p>
            </div>

            {/* <div className="PostMainMenu">
                <br />
                <h1> Join or Create a Post </h1>
                <br />
                <p className="sorry">Sorry, you really need to be <a href="/">logged in</a> for this page.</p>
            </div> */}
        </div>
    );
}

export default LoggedOut;

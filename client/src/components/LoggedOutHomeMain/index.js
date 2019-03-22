import React from "react";
import "./style.css";


function LoggedOutHomeMain() {
    return (
    <div className="loggedOut">
    <h2> WELCOME to ROOMER App! </h2>
    <br />
    {/* <h1> you are logged out </h1> */}
    {/* box links  */}
    <section className="boxes">

        <div className="row">
            <div className="col-md-6 col-lg-4">
                <div className="learnBox">
                    <a><p>Learn About Your Peers</p></a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="teachBox">
                    <a ><p>Teach Your Peers About You</p></a>

                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="feelingsBox">
                    <a ><p>Get Your Feelings Hurt</p></a>

                </div>
            </div>
        </div>
    </section>
</div>
    );
}

export default LoggedOutHomeMain;
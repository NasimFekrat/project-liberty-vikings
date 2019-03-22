import React from "react";
import "./style.css";


function LoggedInHomeMain() {
    return (
        <section className="grid">
            <div className="content">
            <h2>Are you ready to share the house!</h2>
            <h4>Available Rooms</h4>

            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="teamMate">
                        <img className="teamMatePic" src={require("../../images/hotel.png")} alt="thumbnail"></img> 
								<p>Picture</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="teamMate">
                    <img className="teamMatePic" src={require("../../images/hotel.png")} alt="thumbnail"></img> 
								<p>Picture</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="teamMate">
                        <img className="teamMatePic" src={require("../../images/hotel.png")} alt="thumbnail"></img> 
								<p>Picture</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default LoggedInHomeMain;
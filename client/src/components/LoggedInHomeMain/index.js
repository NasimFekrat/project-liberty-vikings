import React from "react";
import "./style.css";


function LoggedInHomeMain() {
    return (
        <section className="grid">
            <p>Are you ready to share the house!</p>
            <h2 className="">Available Rooms</h2>

            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="teamMate">
                        <img className="teamMatePic" src={"../images/hotel.png"} alt="thumbnail"></img> room
								<p>Picture</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="teamMate">
                    <img className="teamMatePic" src={"../images/hotel.png"} alt="thumbnail"></img> room
								<p>Picture</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="teamMate">
                        <img className="teamMatePic" src={"../images/hotel.png"} alt="thumbnail"></img> room
								<p>Picture</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoggedInHomeMain;
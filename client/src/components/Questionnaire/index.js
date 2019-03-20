import React from "react";
import "./Survey.css";

const Survey = () => {
    return (

        <div className="App">

        <p>Are you an Early Bird or a Night Owl?</p>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label className="form-check-label" for="exampleRadios1">
                    Early Bird
          </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                   
          </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                    Versatile
          </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                   
          </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                    Night Owl
          </label>
            </div>
            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="colFormLabel" placeholder="col-form-label" />
                </div>
            </div>
        </div>
    );

}

export default Survey;
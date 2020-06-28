import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import appLogo from "../../icons/rote-lippen.png";
export default function LipServiceQuiz() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <h2>Quiz</h2>
         <div className="mb-5"></div>
         <div className="row">
            <div className="col">
               <h3 className="mb-4 offset-1">
                  Give your Lips the personality they deserve!
               </h3>
            </div>
         </div>
         <br></br>
         <div className="card bg-secondary">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <div className="card-body bg-dark">
               Which of the following most describes yourself ?
               <div className="form-check  ">
                  <input
                     className="form-check-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio1"
                     value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                     Daring
                  </label>
               </div>
               <div className="form-check ">
                  <input
                     className="form-check-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                     Reserved
                  </label>
               </div>
               <div className="form-check form-check-inline">
                  <input
                     className="form-check-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio3"
                     value="option3"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                     Compassionate
                  </label>
               </div>
               <div>
                  <button className="btn btn-primary">save</button>
               </div>
            </div>
         </div>
         <div className="mb-5"></div>
         <Link
            to="/lip-results"
            className="btn btn-outline-secondary btn-lg float-right "
            id="nextButton"
         >
            Submit
         </Link>
      </AppTemplate>
   );
}

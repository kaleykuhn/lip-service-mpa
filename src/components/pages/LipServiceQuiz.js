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
         <hr className="my-4"></hr>
         <div className="mb-5"></div>
         <div className="row">
            <div className="col">
               <h3 className="mb-4 ml-8">
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
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio1"
                     value="option1"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio1"
                  >
                     Daring
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio2"
                  >
                     Reserved
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio3"
                     value="option3"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio3"
                  >
                     Compassionate
                  </label>
               </div>
               <div className="mb-4"></div>
               <div>
                  <button className="btn btn-primary btn-outline-secondary text-white float-right">
                     next
                  </button>
               </div>
            </div>
         </div>
         <div className="mb-5"></div>
         <div className="card bg-secondary">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <div className="card-body bg-dark">
               Which of the following most describes yourself ?
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio1"
                     value="option1"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio1"
                  >
                     Daring
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio2"
                  >
                     Reserved
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio3"
                     value="option3"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio3"
                  >
                     Compassionate
                  </label>
               </div>
               <div className="mb-4"></div>
               <div>
                  <button className="btn btn-primary">back</button>
                  <button className="btn btn-primary btn-outline-secondary text-white float-right">
                     next
                  </button>
               </div>
            </div>
         </div>
         <div className="mb-5"></div>
         <div className="card bg-secondary">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <div className="card-body bg-dark">
               Which of the following most describes yourself ?
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio1"
                     value="option1"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio1"
                  >
                     Daring
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio2"
                  >
                     Reserved
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio3"
                     value="option3"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio3"
                  >
                     Compassionate
                  </label>
               </div>
               <div className="mb-4"></div>
               <div>
                  <button className="btn btn-primary">back</button>
                  <button className="btn btn-primary btn-outline-secondary text-white float-right">
                     next
                  </button>
               </div>
            </div>
         </div>
         <div className="mb-5"></div>
         <div className="card bg-secondary">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <div className="card-body bg-dark">
               Which of the following most describes yourself ?
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio1"
                     value="option1"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio1"
                  >
                     Daring
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio2"
                  >
                     Reserved
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio3"
                     value="option3"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio3"
                  >
                     Compassionate
                  </label>
               </div>
               <div className="mb-4"></div>
               <div>
                  <button className="btn btn-primary">back</button>
                  <button className="btn btn-primary btn-outline-secondary text-white float-right">
                     next
                  </button>
               </div>
            </div>
         </div>
         <div className="mb-5"></div>
         <div className="card bg-secondary">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <div className="card-body bg-dark">
               Which of the following most describes yourself ?
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio1"
                     value="option1"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio1"
                  >
                     Daring
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio2"
                  >
                     Reserved
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio3"
                     value="option3"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio3"
                  >
                     Compassionate
                  </label>
               </div>
               <div className="mb-4"></div>
               <div>
                  <button className="btn btn-primary">back</button>
                  <button className="btn btn-primary btn-outline-secondary text-white float-right">
                     next
                  </button>
               </div>
            </div>
         </div>
         <div className="mb-5"></div>
         <div className="card bg-secondary">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <div className="card-body bg-dark">
               Which of the following most describes yourself ?
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio1"
                     value="option1"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio1"
                  >
                     Daring
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio2"
                  >
                     Reserved
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio3"
                     value="option3"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio3"
                  >
                     Compassionate
                  </label>
               </div>
               <div className="mb-4"></div>
               <div>
                  <button className="btn btn-primary">back</button>
               </div>
            </div>
         </div>

         <div className="py-8">
            <Link
               to="/lip-results"
               className="btn btn-outline-secondary btn-lg float-right "
               id="nextButton"
            >
               Submit
            </Link>
         </div>
      </AppTemplate>
   );
}

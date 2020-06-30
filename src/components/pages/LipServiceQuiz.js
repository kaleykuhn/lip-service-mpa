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
                     name="quizquestion1radio"
                     id="942d4afe-5370-400d-b71f-d9f61c644f3e"
                     value="942d4afe-5370-400d-b71f-d9f61c644f3e"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="942d4afe-5370-400d-b71f-d9f61c644f3e"
                  >
                     Daring
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="quizquestion1radio"
                     id="d996f5fe-342a-42ba-bee8-329e78b13307"
                     value="d996f5fe-342a-42ba-bee8-329e78b13307"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="d996f5fe-342a-42ba-bee8-329e78b13307"
                  >
                     Reserved
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="quizquestion1radio"
                     id="bc137dc8-74e1-402c-b2e3-f83a5aa75c32"
                     value="bc137dc8-74e1-402c-b2e3-f83a5aa75c32"
                  />

                  <label
                     className="custom-control-label"
                     htmlFor="bc137dc8-74e1-402c-b2e3-f83a5aa75c32"
                  >
                     Compassionate
                  </label>
               </div>
               <div className="mb-4"></div>
               <div></div>
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
               Which of these options best describes you?
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="quizquestion2radio"
                     id="89887a54-ce4c-40b3-968a-4a0e10c4f4ab"
                     value="89887a54-ce4c-40b3-968a-4a0e10c4f4ab"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="89887a54-ce4c-40b3-968a-4a0e10c4f4ab"
                  >
                     Communicative
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input  "
                     type="radio"
                     name="quizquestion2radio"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="inlineRadio2"
                  >
                     Discreet
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="quizquestion2radio"
                     id="9a7444b0-8b2f-40c6-91fd-0b57107f1d97"
                     value="option3"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="9a7444b0-8b2f-40c6-91fd-0b57107f1d97"
                  >
                     Candid
                  </label>
               </div>
               <div className="mb-4"></div>
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
               I value which one of these qualities the most?
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="quizquestion3radio"
                     id="57a75a90-1d93-427a-9913-9254843d373b"
                     value="57a75a90-1d93-427a-9913-9254843d373b"
                  />

                  <label
                     className="custom-control-label"
                     htmlFor="57a75a90-1d93-427a-9913-9254843d373b"
                  >
                     Creativity
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="quizquestion3radio"
                     id="a74c46e3-54d4-4694-a725-5b15e5e06689"
                     value="a74c46e3-54d4-4694-a725-5b15e5e06689"
                  />

                  <label
                     className="custom-control-label"
                     htmlFor="a74c46e3-54d4-4694-a725-5b15e5e06689"
                  >
                     {" "}
                     Decisiveness
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="quizquestion3radio"
                     id="8bbe9a09-0d6d-45be-852d-b3346332bedc"
                     value="8bbe9a09-0d6d-45be-852d-b3346332bedc"
                  />

                  <label
                     className="custom-control-label"
                     htmlFor="8bbe9a09-0d6d-45be-852d-b3346332bedc"
                  >
                     Sincerity
                  </label>
               </div>
               <div className="mb-4"></div>
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
               Which of these qualities do I exhibit most?
               <div className="mb-3"></div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="quizquestion4radio"
                     id="ac1ab5d3-1c67-4afc-94c1-c2765efcaa9f"
                     value="ac1ab5d3-1c67-4afc-94c1-c2765efcaa9f"
                  />

                  <label
                     className="custom-control-label"
                     htmlFor="ac1ab5d3-1c67-4afc-94c1-c2765efcaa9f"
                  >
                     {" "}
                     Dominance
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input "
                     type="radio"
                     name="quizquestion4radio"
                     id="5ae236f3-c9e4-4fc3-9f55-5322896c6c60"
                     value="5ae236f3-c9e4-4fc3-9f55-5322896c6c60"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="5ae236f3-c9e4-4fc3-9f55-5322896c6c60"
                  >
                     Loyalty
                  </label>
               </div>
               <div className="custom-control custom-radio">
                  <input
                     className="custom-control-input"
                     type="radio"
                     name="quizquestion4radio"
                     id="08cc0730-3cd1-490c-a7f3-d3f44e14dede"
                     value="08cc0730-3cd1-490c-a7f3-d3f44e14dede"
                  />

                  <label
                     className="custom-control-label"
                     htmlFor="08cc0730-3cd1-490c-a7f3-d3f44e14dede"
                  >
                     Open Mindedness
                  </label>
               </div>
               <div className="mb-4"></div>
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

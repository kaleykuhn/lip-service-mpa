import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import users from "../../mock-data/users";

import appLogo from "../../icons/rote-lippen.png";
const user = users[0];
export default class LipServiceQuiz extends React.Component {
   constructor() {
      super();
      this.state = {
         user: user,
         describe: user.quiz.describe.id,
         friend: user.quiz.friend.id,
         value: user.quiz.value.id,
         exhibit: user.quiz.exhibit.id,
      };
   }

   getUserInputs() {
      console.log("getUserInputs Pressed");
      // console.log(
      //    document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e").value
      //const radio = getElementByType("")
      //var radio = document.getElementsByTagName('type');
      //document.querySelectorAll('input[type=radio]')
      // );
      console.log(
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("d996f5fe-342a-42ba-bee8-329e78b13307")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e")
            .checked,
         document.getElementById("942d4afe-5370-400d-b71f-d9f61c644f3e").checked

         //document.getElementsByTagName("quizquestion1radio").checked
      );
      this.props.history.push("/lip-results");
   }

   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />

            <h2>Quiz</h2>
            <hr className="my-4"></hr>
            <div className="mb-5"></div>

            <h3 className="text-center">
               Give your Lips the personality they deserve!
            </h3>

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
                        checked={
                           this.state.describe ===
                           "942d4afe-5370-400d-b71f-d9f61c644f3e"
                        }
                        className="custom-control-input"
                        type="radio"
                        name="describe"
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
                        checked={
                           this.state.describe ===
                           "d996f5fe-342a-42ba-bee8-329e78b13307"
                        }
                        className="custom-control-input "
                        type="radio"
                        name="describe"
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
                        checked={
                           this.state.describe ===
                           "bc137dc8-74e1-402c-b2e3-f83a5aa75c32"
                        }
                        className="custom-control-input"
                        type="radio"
                        name="describe"
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
                  Which of these would your best friend describe you as?
                  <div className="mb-3"></div>
                  <div className="custom-control custom-radio">
                     <input
                        checked={
                           this.state.friend ===
                           "89887a54-ce4c-40b3-968a-4a0e10c4f4ab"
                        }
                        className="custom-control-input"
                        type="radio"
                        name="friend"
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
                        checked={
                           this.state.friend ===
                           "194b8bb1-c609-4686-8772-8d84a850dc57"
                        }
                        className="custom-control-input  "
                        type="radio"
                        name="friend"
                        id="194b8bb1-c609-4686-8772-8d84a850dc57"
                        value="option2"
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="194b8bb1-c609-4686-8772-8d84a850dc57"
                     >
                        Discreet
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        checked={
                           this.state.friend ===
                           "9a7444b0-8b2f-40c6-91fd-0b57107f1d97"
                        }
                        className="custom-control-input"
                        type="radio"
                        name="friend"
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
                        checked={
                           this.state.value ===
                           "57a75a90-1d93-427a-9913-9254843d373b"
                        }
                        className="custom-control-input"
                        type="radio"
                        name="value"
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
                        checked={
                           this.state.value ===
                           "a74c46e3-54d4-4694-a725-5b15e5e06689"
                        }
                        className="custom-control-input "
                        type="radio"
                        name="value"
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
                        checked={
                           this.state.value ===
                           "8bbe9a09-0d6d-45be-852d-b3346332bedc"
                        }
                        className="custom-control-input"
                        type="radio"
                        name="value"
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
                        checked={
                           this.state.value ===
                           "ac1ab5d3-1c67-4afc-94c1-c2765efcaa9f"
                        }
                        className="custom-control-input"
                        type="radio"
                        name="exhibit"
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
                        checked={
                           this.state.exhibit ===
                           "5ae236f3-c9e4-4fc3-9f55-5322896c6c60"
                        }
                        className="custom-control-input "
                        type="radio"
                        name="exhibit"
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
                        checked={
                           this.state.exhibit ===
                           "08cc0730-3cd1-490c-a7f3-d3f44e14dede"
                        }
                        className="custom-control-input"
                        type="radio"
                        name="exhibit"
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
               <button
                  to="/lip-results"
                  className="btn btn-outline-secondary btn-lg float-right "
                  id="nextButton"
                  onClick={() => this.getUserInputs()}
               >
                  Submit
               </button>
            </div>
         </AppTemplate>
      );
   }
}

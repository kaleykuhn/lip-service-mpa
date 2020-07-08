import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import LipResult from "../ui/LipResult";
import lipsticks from "../../mock-data/lipsticks";
import users from "../../mock-data/users";

//const user = users[2];

export default class LipResults extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         user: user,
      };
   }
   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <div className="row">
               <div className="col mb-0">
                  <h2 className="mb-0">Results</h2>
               </div>
            </div>
            <hr className="my-4"></hr>
            <div className="mb-5"></div>
            <div className="row">
               <div className="col">
                  <h3 className="text-center">
                     Give your Lips the personality they deserve!
                  </h3>
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <p className=" my-5  d-flex justify-content-left ">
                     These are your personalized lip matches.The buy now buttons
                     will instantly take you to purchase your personalized lip
                     color.You can save each look by clicking save below.
                  </p>
               </div>
            </div>
            <div className="row">
               <LipResult lipstick={lipsticks[0]} />
               <LipResult lipstick={lipsticks[4]} />
               <LipResult lipstick={lipsticks[5]} />
               <LipResult lipstick={lipsticks[11]} />
            </div>

            {/* {users.map((lipresult) => {
               return <UsersList /> ; */}
            {/* {users.map((user) => {
               return <UsersList /> ;
               <LipResult  tags={lipResult.tags}} 
               />
               );
            })} 
               
   
   
   
   
            {
                  props.location.state.selectedLipsticks.map( selection => {
                   return ( <LipResult lipstick={lipsticks[selection] /> )
                  }
            
                  {memoryCards.map((memoryCard) => {
               return (
                  <MemoryCard
                     answer={memoryCard.answer}
                     imagery={memoryCard.imagery}
                     key={memoryCard.id}
                  />
               );
            
            */}

            <div className="mb-8"></div>
            <div className="mb-8"></div>
            <Link
               to="/your-looks"
               className="btn btn-outline-secondary btn-lg float-right"
               id="nextButton"
            >
               Save
            </Link>
            <Link
               to="/lip-service-quiz"
               className="btn btn-outline-secondary btn-lg"
               id="nextButton"
            >
               Back
            </Link>
            <div className="mb-8"></div>
         </AppTemplate>
      );
   }
}

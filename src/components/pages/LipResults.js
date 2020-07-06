import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import LipResult from "../ui/LipResult";
import lipsticks from "../../mock-data/lipsticks";
import users from "../../mock-data/users";
export default function LipResults() {
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
            <div className="col-12 col-xl-10 offse-xl-3  col-lg-12 offset-lg-0 col-md-12 offset-md-0">
               <LipResult lipstick={lipsticks[1]} />
               <LipResult lipstick={lipsticks[4]} />
               <LipResult lipstick={lipsticks[5]} />
               <LipResult lipstick={lipsticks[11]} />
            </div>
         </div>
         {/* {users.map((lipResult) => {
            return (
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

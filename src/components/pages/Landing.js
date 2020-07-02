import React from "react";

import mainLogo from "../../icons/lipservicelogo.png";
import SignUp from "../ui/SignUp";
import LogIn from "../ui/LogIn";

export default function Landing() {
   return (
      <div className="landing-background">
         <div className="container landing">
            <div className="row py-2">
               <div className="col-lg-1 offset-lg-0 ">
                  <img
                     className="bear logo "
                     src={mainLogo}
                     height="300px"
                     alt="Lip service Landing Logo"
                  />
               </div>
            </div>

            <div className="row">
               <SignUp />
               <LogIn />
            </div>
         </div>
      </div>
   );
}

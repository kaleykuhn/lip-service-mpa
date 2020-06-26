import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

import appLogo from "../../img/comfortmattetemperud.jpg";
export default function LipResults() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h2>Results</h2>
         <p>Give your Lips the personality they deserve!</p>
         <div className="mt-8">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 "
            />
         </div>
         <div className="mt-8">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 "
            />
         </div>
         <div className="mt-8">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 "
            />
         </div>
         <div className="mb-8"></div>
         <Link
            to="/your-looks"
            className="btn btn-outline-primary btn-lg float-right"
            id="nextButton"
         >
            Save
         </Link>
      </AppTemplate>
   );
}

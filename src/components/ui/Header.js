import React from "react";
import appLogo from "../../icons/rote-lippen.png";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div>
         <img
            src={appLogo}
            width="46px;"
            alt="Lip Service Lips"
            className="mb-1"
         />

         <h3 className="d-inline text-brand text-dark ml-3 " id="lipservefont">
            Lip Service
         </h3>

         <Link to="/" type="button" className="btn btn-link float-right">
            Log out
         </Link>
      </div>
   );
}

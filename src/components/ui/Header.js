import React from "react";
import appLogo from "../../icons/rote-lippen.png";

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

         <a
            href="index.html"
            type="button"
            className="btn btn-link float-right"
         >
            Log out
         </a>
      </div>
   );
}

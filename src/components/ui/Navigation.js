import React from "react";

export default function Navigation() {
   return (
      <div
         className="btn-group d-flex"
         role="navigation"
         aria-label="navigation"
      >
         <button type="button" className="btn btn-secondary ">
            Quiz
         </button>

         <button type="button" className="btn btn-secondary tab-separator">
            Matches
         </button>

         <button type="button" className="btn btn-secondary tab-separator">
            Reviews
         </button>
      </div>
   );
}

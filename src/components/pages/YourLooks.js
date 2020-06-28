import React from "react";
import Header from "../ui/Header";
import appLogo from "../../img/comfortmattetemperud.jpg";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
export default function YourLooks() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h2>Your Looks</h2>
         <div className="mb-5"></div>
         <p className="mb-4">Give your Lips the personality they deserve!</p>
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
         <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }} />
         <div className="card-header">Match</div>
         <div className="card-body">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <h4 id="cardfontcolor"> Name:Hitch Hike</h4>
            <h4 id="cardfontcolor"> Finish: Comfort Matte</h4>
            <h4 id="cardfontcolor"> Brand: Urban Decay</h4>
            <a
               href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
               className="btn btn-primary float-right btn-sm"
            >
               Buy Now
            </a>
            <h5 className="card-title">Light card title</h5>
            <p className="card-text" id="cardfontcolor">
               {" "}
               These are your personalized lip matches.The buy now buttons that
               are provided above will instantly take you to purchase your
               personalized lip color.
            </p>
            <div>
               <button className="btn btn-danger">delete</button>
            </div>
         </div>
         <div className="mb-8"></div>
         <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }} />
         <div className="card-header">Match</div>
         <div className="card-body">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <h4 id="cardfontcolor"> Name:Hitch Hike</h4>
            <h4 id="cardfontcolor"> Finish: Comfort Matte</h4>
            <h4 id="cardfontcolor"> Brand: Urban Decay</h4>
            <a
               href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
               className="btn btn-primary float-right btn-sm"
            >
               Buy Now
            </a>
            <h5 className="card-title">Light card title</h5>
            <p className="card-text" id="cardfontcolor">
               {" "}
               These are your personalized lip matches.The buy now buttons that
               are provided above will instantly take you to purchase your
               personalized lip color.
            </p>
            <div>
               <button className="btn btn-danger">delete</button>
            </div>
         </div>
         <div className="mb-8"></div>
         <div className="mb-8"></div>
         <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }} />
         <div className="card-header">Match</div>
         <div className="card-body">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1 ml-2"
            />
            <h4 id="cardfontcolor"> Name:Hitch Hike</h4>
            <h4 id="cardfontcolor"> Finish: Comfort Matte</h4>
            <h4 id="cardfontcolor"> Brand: Urban Decay</h4>
            <a
               href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
               className="btn btn-primary float-right btn-sm"
            >
               Buy Now
            </a>
            <h5 className="card-title">Light card title</h5>
            <p className="card-text" id="cardfontcolor">
               {" "}
               These are your personalized lip matches.The buy now buttons that
               are provided above will instantly take you to purchase your
               personalized lip color.
            </p>
            <div>
               <button className="btn btn-danger">delete</button>
            </div>
         </div>
         <div className="mb-8"></div>
      </AppTemplate>
   );
}

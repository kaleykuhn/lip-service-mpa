import React from "react";
import Header from "../ui/Header";
import appLogo from "../../img/comfortmattetemperud.jpg";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import exHitchHike from "../../img/hitchhikeexample.jpg";
export default function YourLooks() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h2>Looks</h2>
         <hr className="my-4"></hr>
         <div className="mb-5"></div>
         <div className="row">
            <div className="col">
               <h3 className="mb-4 ml-8">
                  Give your Lips the personality they deserve!
               </h3>
            </div>
         </div>

         <div className="card bg-light mb-0" style={{ maxWidth: "18rem" }} />
         <div className="card-header">Match</div>
         <div className="card-body">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-2"
            />
            <img
               src={exHitchHike}
               width="182px;"
               alt="Lip Service Lips"
               className=" float-right"
            />
            <div className="mb-0"></div>
            <h4 id="cardfontcolor"> Name: Hitch Hike</h4>
            <h4 id="cardfontcolor"> Color: Brick Rose</h4>
            <h4 id="cardfontcolor"> Finish: Comfort Matte</h4>
            <h4 id="cardfontcolor"> Brand: Urban Decay</h4>
            <a
               href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
               className="btn btn-primary float-right btn-sm  "
            >
               Buy Now
            </a>
            <h5 className="card-title">Light card title</h5>
            <p className="card-text" id="cardfontcolor">
               {" "}
               <br></br>
               Brick rose with a Comfort Matte finish. It's a medium-dark rosy
               plum with warm undertones and a creamy finish. It has a rich
               color payoff with a very smooth, creamy consistency that glides
               onto lips and just makes lips look plumper. This creamy formula
               is loaded with nourishing ingredients.
            </p>
            <div>
               <button className="btn btn-danger mt-2">delete</button>
            </div>
         </div>
         <div className="card bg-light mb-0" style={{ maxWidth: "18rem" }} />
         <div className="card-header">Match</div>
         <div className="card-body">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-2"
            />
            <img
               src={exHitchHike}
               width="182px;"
               alt="Lip Service Lips"
               className=" float-right"
            />
            <div className="mb-0"></div>
            <h4 id="cardfontcolor"> Name: Hitch Hike</h4>
            <h4 id="cardfontcolor"> Color: Brick Rose</h4>
            <h4 id="cardfontcolor"> Finish: Comfort Matte</h4>
            <h4 id="cardfontcolor"> Brand: Urban Decay</h4>
            <a
               href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
               className="btn btn-primary float-right btn-sm  "
            >
               Buy Now
            </a>
            <h5 className="card-title">Light card title</h5>
            <p className="card-text" id="cardfontcolor">
               {" "}
               <br></br>
               Brick rose with a Comfort Matte finish. It's a medium-dark rosy
               plum with warm undertones and a creamy finish. It has a rich
               color payoff with a very smooth, creamy consistency that glides
               onto lips and just makes lips look plumper. This creamy formula
               is loaded with nourishing ingredients.
            </p>
            <div>
               <button className="btn btn-danger mt-2">delete</button>
            </div>
         </div>
         <div className="mb-0"></div>
         <div className="card bg-light mb-0" style={{ maxWidth: "18rem" }} />
         <div className="card-header">Match</div>
         <div className="card-body">
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-2"
            />
            <img
               src={exHitchHike}
               width="182px;"
               alt="Lip Service Lips"
               className=" float-right"
            />
            <div className="mb-0"></div>
            <h4 id="cardfontcolor"> Name: Hitch Hike</h4>
            <h4 id="cardfontcolor"> Color: Brick Rose</h4>
            <h4 id="cardfontcolor"> Finish: Comfort Matte</h4>
            <h4 id="cardfontcolor"> Brand: Urban Decay</h4>
            <a
               href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
               className="btn btn-primary float-right btn-sm  "
            >
               Buy Now
            </a>
            <h5 className="card-title">Light card title</h5>
            <p className="card-text" id="cardfontcolor">
               {" "}
               <br></br>
               Brick rose with a Comfort Matte finish. It's a medium-dark rosy
               plum with warm undertones and a creamy finish. It has a rich
               color payoff with a very smooth, creamy consistency that glides
               onto lips and just makes lips look plumper. This creamy formula
               is loaded with nourishing ingredients.
            </p>
            <div>
               <button className="btn btn-danger mt-2">delete</button>
            </div>
         </div>

         <hr className="my-4"></hr>

         <div className="my-8">
            <Link
               to="/lip-results"
               className="btn btn-outline-secondary btn-lg "
               id="nextButton"
            >
               Back
            </Link>
            <Link
               to="/lip-results"
               className="btn btn-outline-danger btn-lg float-right "
               id="nextButton"
            >
               Clear
            </Link>
         </div>
      </AppTemplate>
   );
}

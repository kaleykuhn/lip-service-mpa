import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import exHitchHike from "../../img/hitchhikeexample.jpg";
import exBigBang from "../../img/exbigbang.jpg";
import Lovelight from "../../img/Lovelight.jpg";
import appLogo from "../../img/comfortmattetemperud.jpg";
export default function LipResults() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h2>Results</h2>
         <hr className="my-4"></hr>
         <div className="mb-5"></div>
         <div className="col">
            <h3 className="mb-4 ml-7">
               Give your Lips the personality they deserve!
            </h3>
         </div>
         <div>
            <p className="mb-5">
               These are your personalized lip matches.The buy now buttons will
               instantly take you to purchase your personalized lip color.You
               can save each look by clicking save below.
            </p>
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
               src={exBigBang}
               width="182px;"
               alt="Lip Service Lips"
               className=" float-right"
            />
            <div className="mb-0"></div>
            <h4 id="cardfontcolor"> Name: Big Bang</h4>
            <h4 id="cardfontcolor"> Color: Dark Fuschia </h4>
            <h4 id="cardfontcolor"> Finish: Metalized</h4>
            <h4 id="cardfontcolor"> Brand: Urban Decay</h4>
            <a
               href="https://www.urbandecay.com/on/demandware.store/Sites-urbandecay-us-Site/default/Product-Variation?pid=ud771&dwvar_ud771_color=BIG%20BANG%20%28METALLIZED%29"
               className="btn btn-primary float-right btn-sm  "
            >
               Buy Now
            </a>
            <h5 className="card-title">Light card title</h5>
            <p className="card-text" id="cardfontcolor">
               {" "}
               <br></br>
               Big Bang is a medium pink with subtle, cool undertones and light
               and medium pink sparkle. It had medium coverage, which applies
               evenly across the lips so it looks almost like a stain with a
               glossy finish. The texture is smooth, lightweight, and thin but
               not clingy.
            </p>
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
               src={Lovelight}
               width="182px;"
               alt="Lip Service Lips"
               className=" float-right"
            />
            <div className="mb-0"></div>
            <h4 id="cardfontcolor"> Name: Lovelight</h4>
            <h4 id="cardfontcolor"> Color: Dark Coral</h4>
            <h4 id="cardfontcolor"> Finish: Sheer Shimmer</h4>
            <h4 id="cardfontcolor"> Brand: Urban Decay</h4>

            <a
               href="https://www.urbandecay.com/on/demandware.store/Sites-urbandecay-us-Site/default/Cart-Show/C1425793862"
               className="btn btn-primary float-right btn-sm  "
            >
               Buy Now
            </a>
            <h5 className="card-title">Light card title</h5>
            <p className="card-text" id="cardfontcolor">
               {" "}
               <br></br>
               Lovelight is a moderately warm-toned, medium-dark coral with a
               pearl finish.
            </p>
         </div>

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

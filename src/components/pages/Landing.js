import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../icons/lipservicelogo.png";

export default function Landing() {
   return (
      <>
         <div className="landing-background">
            <div className="container landing">
               <div className="row py-8">
                  <div className="col-lg-1 offset-lg-0">
                     <img
                        className="bear logo"
                        src={mainLogo}
                        height="400px"
                        alt="Lip service Landing Logo"
                     />
                  </div>
               </div>

               <div className="row">
                  <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-2 col-lg-4 offset-xl-2 col-xl-4 mb-6 mt-8">
                     <div className="card">
                        <div className="card-body text-dark bg-white rounded">
                           <h2 className="card-title">Nice to Meet You</h2>
                           <p className="card-title">
                              Sign up. Let your Lips Shine
                           </p>
                           <a
                              href="#formbutton"
                              className="btn btn-block btn-success"
                              id="formbutton"
                           >
                              Sign Up
                           </a>

                           <div className="" id="form1">
                              <p className="text-success mb-4">
                                 let's get you signed up
                              </p>
                              <label
                                 htmlFor="inputEmail1"
                                 className="text-muted"
                              >
                                 Email address
                              </label>
                              <input
                                 type="email"
                                 className="form-control"
                                 id="inputEmail1"
                                 aria-describedby="emailHelp"
                                 placeholder=""
                              />
                              <div>
                                 <small id="uniqueMess" className="text-danger">
                                    {" "}
                                 </small>
                              </div>

                              <label
                                 htmlFor="inputPassword1"
                                 className="text-muted"
                              >
                                 Password
                              </label>
                              <input
                                 type="password"
                                 className="form-control"
                                 id="inputPassword1"
                                 placeholder=""
                              />
                              <div>
                                 <small id="uniquePass" className="text-danger">
                                    {" "}
                                 </small>
                              </div>
                              <Link
                                 to="lip-service-quiz"
                                 className="btn btn-success btn-block mt-6"
                                 id="letsgo-button-landing"
                              >
                                 Let's go
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-1 col-lg-4 offset-xl-1 col-xl-4 mb-6 mt-8">
                     <div className="card">
                        <div className="card-body text-dark bg-white rounded">
                           <h2 className="card-title">Welcome back</h2>
                           <p className="card-title">
                              Log in with your email address and password.
                           </p>

                           <p className="text-success"></p>
                           <label
                              htmlFor="exampleInputEmail2"
                              className="text-muted"
                           >
                              Email address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail2"
                              aria-describedby="emailHelp"
                              placeholder=""
                           />
                           <small
                              id="emailHelp"
                              className="form-text text-muted"
                           ></small>

                           <label
                              htmlFor="exampleInputPassword2"
                              className="text-muted"
                           >
                              Password
                           </label>
                           <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword2"
                              placeholder=""
                           />

                           <Link
                              to="lip-service-quiz"
                              type="button"
                              className="btn btn-success float-right mt-6"
                           >
                              Log in
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

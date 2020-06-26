import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
export default function YourLooks() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="mb-5"></div>
         <p className="mb-4">Give your Lips the personality they deserve!</p>
      </AppTemplate>
   );
}

import React from "react";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import SectionOne from "../Sections-one/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import Footer from "../Footer/Footer";
import { DarkModeProvider } from "../../Context/DarkModeContext";

export default function Home() {
    
  return (
    <div>
       <DarkModeProvider>
        <Navbar />
        </DarkModeProvider>
        <Header />
        <SectionOne />
        <SectionTwo />
        <Footer />
       
       
    </div>
 )
}
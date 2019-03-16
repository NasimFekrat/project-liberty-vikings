import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Questionairre from "../components/Questionairre";



function Survey() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Questionairre />
            <Footer />

        </div>
    );
}

export default Survey;
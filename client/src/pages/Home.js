import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <p>This is the home page</p>
            <Footer />

        </div>
    );
}

export default Home;
import React from "react";
import  About from "./About";
import  Contact from "./Contact";
import  Footer from "./Footer";
import  Hero from "./Hero";
import  Header from "./Header";
import  Services from "./Services";
import  Testimonials from "./Testimonials";
import  Approach from "./Approach";

function HomePage() {
    return <div>
        <Header />
        <Hero />
        <About />
        <Services />
        {/*<Approach /> */}
        <Testimonials />
        {/*<Contact /> */}
        <Footer />
    </div>;
}

export default HomePage;
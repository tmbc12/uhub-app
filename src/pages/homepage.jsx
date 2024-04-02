import React from 'react';
import Hero from '../components/homepage/hero';
import Banner2 from '../components/homepage/banner2';
import Latesttrend from "../components/homepage/latesttrend";
import Banner from "../components/homepage/banner";
import Testimonials from "../components/homepage/testimonials";
import Hero2  from '../components/homepage/hero2';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const homepage = () => {
  return (
    <div className=' '>
      <Navbar />
      <Hero />
      <Hero2 />
      <Banner2 />
      <Latesttrend />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  )
}

export default homepage
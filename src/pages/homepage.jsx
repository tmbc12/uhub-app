import React from 'react';
import Hero from '../components/homepage/hero';
import Banner2 from '../components/homepage/banner2';
import Latesttrend from "../components/homepage/latesttrend";
import Banner from "../components/homepage/banner";
import Testimonials from "../components/homepage/testimonials";
import Hero2  from '../components/homepage/hero2';
const homepage = () => {
  return (
    <div className=' '>
      <Hero />
      <Hero2 />
      <Banner2 />
      <Latesttrend />
      <Testimonials />
      <Banner />
    </div>
  )
}

export default homepage
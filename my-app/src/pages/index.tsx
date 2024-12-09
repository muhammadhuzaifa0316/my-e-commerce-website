import React from 'react'
import Navbar from './components/navbar'
import Hero from "./components/hero";
import Product from "./components/product";
import Slide from "./components/slide";
import Setup from "./components/setup";
import Footer from "./components/footer";

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
      <Slide/>
      <Setup/>
      <Footer/>

    </div>
  )
}
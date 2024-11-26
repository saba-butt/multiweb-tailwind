"use client"
import React from 'react'
import aos from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";

const HomeContent = () => {
    useEffect(() => {
        aos.init({
        duration:1000,
        once:true,
    });
    },[]);
  return (
    <section className="hero h-screen flex items-center bg-cover bg-center" style={{backgroundImage:"url(/title.jpg)"}}>
<div className="absolute top-20 left-1/2 transform -translate-x-1/2 pl-0 md:pl-16 text-black text-center">
    <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">Welcome to Books World    </h1>
<p className="text-2xl mt-4">Best publisher in Pakistan!
    </p>
    <button className=" rounded -md font-bold mt-6 px-6 py-3 bg-blue-500 hover:bg-red-600">
        <a href="/Products" className="text-white">Explore Books</a>
    </button>
</div>
    </section>
  )
}

export default HomeContent

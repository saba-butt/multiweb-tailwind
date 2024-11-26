import React from 'react'

const About = () => {
  return (
    <section className="about h-screen flex justify-start items-center bg-cover bg-center text-white px-10" style={{backgroundImage:"url(/about.jpg)"}}>
    <div className="bg-black bg-opacity-60 p-8 rounded:md max-w-lg">
        <h2 className="text-4xl font-bold mb:4" data-aos="fade-up">About Us</h2>
        <p>
        <span className="text-yellow-600">Emirates</span><span className="text-blue-800">Books</span><span className="text-red-700">Publisher </span>is a Pakistan-based publishing house dedicated to creating high-quality educational resources for young learners. Specializing in pre-primary and primary textbook series, Emirates Books Publisher focuses on developing engaging, curriculum-aligned materials that inspire learning and creativity among children.

Our books are crafted with a blend of innovative teaching strategies, interactive content, and vibrant illustrations to ensure that both teachers and students have a seamless and enjoyable educational experience. Committed to empowering educators and fostering a love for learning, Emirates Books Publisher is a trusted name in shaping the educational journey of the next generation.
        </p>
      
    </div>
    </section>
  )
}

export default About

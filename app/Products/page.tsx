import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Books = () => {
  const booksData = [
    { id: "1", name: "Nursury", description: "Pre-primary series Mehekta Urdu silsila", image: "/nursryurdu.jpg" },
    { id: "2", name: "Nursury", description: "Pre-primary Spark Series English", image: "/eng1.jpg" },
    { id: "3", name: "Nursury", description: "Pre-primary Spark Series Mathematics", image: "/pre.math1.jpg" },
    { id: "4", name: "Kg1", description: "Pre-primary series Mehekta Urdu silsila", image: "/kg1urdu.jpg" },
    { id: "5", name: "Kg1", description: "Pre-primary Spark Series English", image: "/eng2.jpg" },
    { id: "6", name: "Kg2", description: "Pre-primary Spark Series Mathematics", image: "/pre.math2.jpg" },
    { id: "7", name: "Kg3", description: "Pre-primary series Mehekta Urdu silsila", image: "/kg2urdu.jpg" },
    { id: "8", name: "Kg3", description: "Pre-primary Spark Series English", image: "/eng3.jpg" },
    { id: "9", name: "Kg3", description: "Pre-primary Spark Series Mathematics", image: "/pre.math3.jpg" },
  ];

  return (
    <div className="books grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {booksData.map((book) => (
        <div key={book.id} className="book-card bg-yellow-500 p-5 rounded-md shadow-md text-center">
          <Image 
            src={book.image} 
            alt={book.name} 
            width={300} // Adjust width
            height={200} // Adjust height
            className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" 
          />
          <h3 className="mt-4 text-2xl font-bold">{book.name}</h3>
          <p className="text-lg">{book.description}</p>
          <Link href="/contact">
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">More Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Books;

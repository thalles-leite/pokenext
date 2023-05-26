import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={`
    
    bg-gray-800 text-gray-100
    font-semibold shadow-md
    
    `}
    >
      <div className={`
      flex
      justify-between 
      items-center py-4 
      w-10/12
      mx-auto  
      sm:px-6 
      
      
    `}
      >

        <div className=" flex justify-between items-center px-5 gap-4 text-2xl ">
          <Image
            src="/images/pokeball.png"
            alt="PokeNext"
            width="30"
            height="30"
          />
          <h1>Pokenext</h1>
        </div>
        <ul className={`
      flex justify-between items-center gap-4 mr-8
      `}
        >
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

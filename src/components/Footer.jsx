import React from 'react';

export default function Footer() {
  return (
    <footer className={`
    flex justify-center items-center
    w-full h-16
    bg-gray-800 text-gray-100
    font-semibold shadow-md
    `}
    >
      <p>
        <span>PokeNext</span>
        &copy; 2023
      </p>
    </footer>
  );
}

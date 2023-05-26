import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PokemonCard({ pokemon }) {
  return (

    <div className={`
    flex flex-col items-center justify-center
    bg-white rounded-3xl shadow-md p-5
    border border-gray-200 w-50
    hover:shadow-2xl transition duration-400
    hover:scale-110
    hover:border-3
    cursor-pointer
    `}
    >
      <div>
        <span className={`
        text-gray-600 text-sm font-bold
        bg-red-200 rounded-md px-3 py-1
        `}
        >
          #
          {pokemon.id}
        </span>
      </div>

      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width={150}
        height={150}
        alt={pokemon.name}
      />

      <p
        className={`
        text-gray-700 text-lg font-semibold
        capitalize
        `}
        key={pokemon.id}
      >
        {pokemon.name}

      </p>
      <Link href={`/pokemon/${pokemon.id}`}>
        <div className={` 
          text-white font-bold rounded-md
          bg-red-600 px-4 py-2 mt-2
          hover:bg-red-900
          transition duration-400
          

        `}
        >
          Detalhes
        </div>

      </Link>
    </div>

  );
}

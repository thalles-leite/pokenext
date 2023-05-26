import Image from 'next/image';
import React from 'react';

export const getStaticPaths = async () => {
  const maxPokemons = 151;
  const api = 'https://pokeapi.co/api/v2/pokemon?limit=';
  const response = await fetch(`${api}${maxPokemons}`);
  const data = await response.json();

  // Params

  const paths = data.results.map((pokemon, index) => ({
    params: { pokemonId: (index + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(api);
  const data = await response.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default function PokemonID({ pokemon }) {
  return (
    <div
      className={`
    'flex flex-col items-center justify-center
    bg-white rounded-3xl shadow-md p-5
    border border-gray-200 w-50
    hover:shadow-2xl transition duration-400
    
    hover:border-3
    cursor-pointer
    `}

    >
      <h1
        className={`
      text-center text-2xl
      bg-neutral-400 rounded-md px-3 py-2
      text-white font-bold      
      `}
      >
        Detalhes do Pokemon

      </h1>
      <h2
        className={`
      text-center text-4xl
      font-bold text-gray-700
      hover:text-gray-900
      px-3 py-2
      `}

      >
        {pokemon.name}

      </h2>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width={350}
        height={350}
        alt={pokemon.name}
      />
      <div
        className={`
      bg-gray-200 rounded-md px-8 py-2
      
      `}

      >
        <div className={`  
        flex justify-between
        `}
        >

          <p>
            <span className="font-bold">
              Altura:

            </span>
          </p>
          <p>

            {pokemon.height}

            cm
          </p>
        </div>
        <div className={`  
        flex justify-between
        `}
        >

          <p>
            <span className="font-bold">Peso:</span>
          </p>
          <p>

            {pokemon.weight}
            kg
          </p>
        </div>

        <div className={`  
        flex justify-between items-center
        `}
        >

          <p>
            <span className="font-bold">Tipos:</span>
          </p>
          <p
            className="flex px-4 py-2 mt-2 gap-2"
          >
            {pokemon.types.map((type) => (
              <div
                key={type.type.name}
                className={` 
              
              text-white font-bold rounded-md
              bg-red-600 px-2 py-1 
              hover:bg-red-900
              transition duration-400
              `}

              >

                {type.type.name}

              </div>
            ))}
          </p>
        </div>
      </div>
    </div>

  );
}

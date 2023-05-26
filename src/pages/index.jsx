import Image from 'next/image';
import PokemonCard from '@/components/PokemonCard';

export async function getStaticProps() {
  const maxPokemons = 100;
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=';
  const response = await fetch(`${API}${maxPokemons}`);
  const data = await response.json();

  data.results.forEach((item, index) => {
    const newItem = { ...item };
    newItem.id = index + 1;
    data.results[index] = newItem;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}
export default function Home({ pokemons }) {
  return (
    <div
      className="my-4"
    >
      <div className="flex justify-center items-center mb-8 text-red-600 font-black">
        <h1 className={`
        flex justify-center items-center text-6xl 

        `}
        >
          Poke
          <span className="text-black mr-4">Next</span>
          <Image src="/images/pokeball.png" alt="PokeNext" width="50" height="50" />
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>

    </div>
  );
}

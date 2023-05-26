/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';

export default function about() {
  return (
    <div className={`
    
    flex flex-col justify-center items-center
    gap-8
    `}
    >
      <h1 className={`
      text-4xl text-center my-8 font-semibold
      `}
      >
        Sobre o projeto

      </h1>
      <p className="{`
      text-center text-lg
      max-w-6xl
      `}"
      >
        Este site foi desenvolvido em Next.js e estilizado com Tailwind CSS.

        Utilizou-se a API da PokeAPI para fornecer informações precisas e atualizadas sobre o universo Pokémon.

        Essa plataforma oferece uma experiência rápida, responsiva e personalizada, permitindo que você explore a Pokédex completa e descubra fatos interessantes sobre cada Pokémon.

      </p>
      <Image src="/images/charizard.png" alt="Carizard" width="300" height="300" />
    </div>
  );
}

"use client";

import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Character() {
    const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const query = `*[_type == "character"]`;
            const data = await client.fetch(query);
            setAllCharacters(data);
        };
        fetchCharacters();
    })
  return (
    <div className='lg:mt-8 mt-6 px-4'>
      <h1 className='lg:text-2xl text-xl ml-2 font-bold'>All Character</h1>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {allCharacters.map((character) => (
          <Link
            href={`/dashboard/chat/${character.slug.current}`}
            key={character._id}
            className="relative group"
          >
            {/* Gambar */}
            <div className="relative overflow-hidden rounded-lg w-full aspect-square">
              <Image
                src={urlFor(character.image).url()}
                alt={character.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg font-bold">{character.name}</h2>
              <p className="text-white text-sm">{character.profession}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

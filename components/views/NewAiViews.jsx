"use client";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NewAiViews() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const NewCharacter = async () => {
      const query = `*[_type == "character"][0..4]`;
      const data = await client.fetch(query);
      setCharacters(data);
    };
    NewCharacter();
  }, []);

  return (
    <div className="lg:mt-8 mt-4">
      <h1 className="lg:text-2xl text-xl font-bold">New Character</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {characters.map((character) => (
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
  );
}

"use client";

import { chatCharacter } from "@/app/config/AiModel";
import { saveResponse } from "@/app/config/responseConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { client, urlFor } from "@/lib/sanity";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ChatCharacter() {
  const { user } = useUser();
  const { slug } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const query = `
          *[_type == "character" && slug.current == $slug][0]{
            ...,
            topics[]->{
              name
            }
          }
        `;
        const data = await client.fetch(query, { slug });
        setCharacter(data);
      } catch (error) {
        console.error("Failed to fetch character:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchCharacter();
    }
  }, [slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!character) {
    return <p>Character not found!</p>;
  }

  const GenerateAIChat = async () => {
    setIsGenerating(true);
    if (!character.topics || character.topics.length === 0) {
      console.error("No topics available for this character.");
      setIsGenerating(false); // Pastikan flag reset saat error
      return;
    }
  
    const topicList = character.topics
      .map((topic, index) => `${index + 1}. ${topic.name}`)
      .join("\n");
  
    const BASIC_PROMPT = `
      Kamu adalah ${character.name}, seorang ${character.profession} yang ${character.description}.
      Tugasmu adalah memberikan penjelasan, solusi, dan panduan kepada pengguna terkait topik berikut:
  
      ${topicList}
  
      Saat menjawab pertanyaan, gunakan bahasa yang profesional tetapi mudah dipahami. Jika diperlukan, sertakan contoh studi kasus atau langkah konkret untuk membantu memahami lebih dalam.
      Jika pertanyaan tidak jelas, tanyakan lebih lanjut kepada pengguna untuk memperjelas kebutuhan mereka.
  
      Selalu responsif, informatif, dan berperan sebagai seorang ahli yang terpercaya. Ingat untuk tetap menggunakan nama ${character.name} saat menyapa pengguna.
    `;
  
    const USER_PROMPT = `
      Karakter:
      Nama: ${character.name}
      Profesi: ${character.profession}
      Deskripsi: ${character.description}
  
      Pesan Pengguna:
      "${userInput}"
    `;
  
    const prompt = `${BASIC_PROMPT}\n\n${USER_PROMPT}`;
  
    try {
      const result = await chatCharacter.sendMessage(prompt);
      const aiResponse = await result.response.text();
      setChatResponse(aiResponse);
  
      // Simpan ke Sanity
      const responsePayload = {
        id: `${character._id}-${Date.now()}`, // ID unik
        character: { _ref: character._id, _type: "reference" }, // Referensi karakter
        user: { _ref: user.id, _type: "reference" }, // Referensi pengguna
        response: aiResponse, // Respons AI
      };
  
      // Simpan ke database melalui fungsi saveResponse
      await saveResponse(responsePayload);
  
      // Kosongkan input setelah sukses
      setUserInput('');
    } catch (error) {
      console.error("Error generating or saving AI response:", error);
    } finally {
      setIsGenerating(false);
    }
  };


  return (
    <div className="px-4 mt-8 lg:mt-12 mb-10 lg:mb-8">
      <div className="flex flex-col md:flex-row items-center border p-2 rounded-lg">
        <Image
          src={urlFor(character.image).url()}
          alt={character.name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="flex flex-col ml-2 space-y-1 mt-2 lg:mt-0">
          <h2 className="text-xl text-center lg:text-left font-bold">
            {character.name}
          </h2>
          <p className="lg:text-sm text-xs text-gray-400 text-center lg:text-left text-foreground max-w-4xl mx-auto">
            {character.description}
          </p>
        </div>
      </div>

      {/* Chat View */}
      <div className="mt-4 border-2 rounded-lg p-4 h-96 overflow-y-auto">
        {chatResponse ? (
          chatResponse
            .replaceAll("*", "")
            .split("\n")
            .map((line, index) => (
              <p key={index} className="mb-2">
                {line}
              </p>
            ))
        ) : (
          <p>{character.opening}</p>
        )}
      </div>

      {/* Chat Input */}
      <div className="mt-4 flex flex-col md:flex-row">
        <Input
          type="text"
          placeholder="Ketik pesan Anda..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <Button
          onClick={GenerateAIChat}
          disabled={isGenerating}
          className="lg:ml-2 mt-2 lg:mt-0 text-white rounded-lg bg-blue-600"
        >
          {isGenerating ? "Generating..." : "Kirim"}
        </Button>
      </div>
    </div>
  );
}

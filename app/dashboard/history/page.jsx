"use client";

import { client } from "@/lib/sanity";
import React, { useEffect, useState } from "react";

export default function History() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const query = `
        *[_type == "aiResponse"] {
          ...,
          "usersName": user->firstName,
          "characterName": character->name,
          "responseText": response,
          "responseDate": date
        }
      `;
      
      const data = await client.fetch(query);
      setHistoryData(data);

    };

    fetchHistory();
  }, []); 

  return (
    <div className="lg:mt-8 mt-6 px-4">
      <h1 className="lg:text-2xl text-xl ml-2 font-bold">History Respon</h1>
      <div className="flex flex-col h-auto p-2">
        {historyData.map((data) => (
          <div
            key={data._id}
            className="flex flex-col p-4 my-2 bg-slate-800 rounded-lg"
          >
            {/* Menampilkan userName yang sudah digabungkan di query */}
            <p className="font-bold text-lg">{data?.userName}</p>
            <p>{data.characterName}</p>
            <p className="text-sm line-clamp-1">{data.responseText}</p>
            <p>{new Date(data.responseDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use server";

import { client } from "@/lib/sanity";

export async function saveUser(user) {
  try {
    const doc = {
      _id: user.id,
      _type: "user",
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImage: user.image, // Pastikan field sesuai schema
    };

    await client.createOrReplace(doc);
  } catch (error) {
    console.error("Error creating user document:", error);
    throw new Error("Gagal menyimpan data pengguna di Sanity");
  }
}

export async function saveAiResponse(chatResponse) {
  try {
    console.log("Preparing document for Sanity:", {
      id: chatResponse.id,
      character: chatResponse.character,
      user: chatResponse.user,
      response: chatResponse.response,
    });

    const doc = {
      _id: chatResponse.id,
      _type: "aiResponse",
      character: { _ref: chatResponse.character._ref, _type: "reference" },
      user: { _ref: chatResponse.user._ref, _type: "reference" },
      response: chatResponse.response,
      date: new Date().toISOString(),
    };

    console.log("Sending document to Sanity:", doc);

    await client.createOrReplace(doc);
    console.log("AI response saved successfully:");
  } catch (error) {
    console.error("Error creating aiResponse document:", error.message);
    throw new Error("Gagal menyimpan data respon AI di Sanity");
  }
}


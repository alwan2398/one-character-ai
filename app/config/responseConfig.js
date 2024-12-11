import { saveAiResponse } from "../services/actions";

export async function saveResponse(chatResponse) {
  if (!chatResponse || typeof chatResponse !== "object") {
    console.error("Invalid chatResponse payload:", chatResponse);
    throw new Error("Data respons AI tidak valid.");
  }

  try {
    console.log("Saving AI response:", chatResponse); // Debug log
    await saveAiResponse(chatResponse);
    console.log("AI response saved successfully.");
  } catch (error) {
    console.error("Error saving response:", error.message);
    throw new Error("Gagal menyimpan data respon AI di Sanity");
  }
}

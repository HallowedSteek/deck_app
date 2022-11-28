import { API_URL } from "./config";

async function deleteDeck(dekcId: string) {
  await fetch(`${API_URL}/decks/${dekcId}`, { method: "DELETE" });
}

export default deleteDeck;

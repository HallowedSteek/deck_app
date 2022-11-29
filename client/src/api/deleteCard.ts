import { API_URL } from "./config";

async function deleteDeck(dekcId: string, index: string) {
  const res = await await fetch(`${API_URL}/decks/${dekcId}/cards/${index}`, {
    method: "DELETE",
  });
  return res.json();
}

export default deleteDeck;

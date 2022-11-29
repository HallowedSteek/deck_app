import { API_URL, Values} from "./config";

async function createCard(values:Values, deckId:string) {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
    method: "POST",
    //🔽 specificam tipul valorilor trimise
    headers: {
      "Content-Type": "application/json",
    },
    //🔽 valorile trimise
    body: JSON.stringify(values),
  });
  return response.json();
}

export default createCard;

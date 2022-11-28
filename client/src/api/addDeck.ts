import { API_URL, Values } from "./config";

async function addDeck(values: Values) {
  const response = await fetch(`${API_URL}/decks`, {
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

export default addDeck;

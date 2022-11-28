import { Values } from "./customTypes";

async function addDeck(values: Values) {
  const response = await fetch("http://localhost:5000/decks", {
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

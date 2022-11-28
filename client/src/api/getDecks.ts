import { Values } from "./customTypes";


async function getDecks():Promise<Values[]> {
  const response = await fetch("http://localhost:5000/decks");
  return response.json();
}

export default getDecks;

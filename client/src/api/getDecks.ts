import { API_URL, Values } from "./config";


async function getDecks():Promise<Values[]> {
  const response = await fetch(`${API_URL}`);
  return response.json();
}

export default getDecks;

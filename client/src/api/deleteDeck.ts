async function deleteDeck(dekcId: string) {
  await fetch(`http://localhost:5000/decks/${dekcId}`, { method: "DELETE" });
}

export default deleteDeck;

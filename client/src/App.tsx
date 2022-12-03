import React from 'react';
import DeckForm from './components/DeckForm';

import './style.css';

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Decks from './components/Decks';



function App() {

  const router = createBrowserRouter([
    {
      path: "/deck_app",
      element: <DeckForm />,
    },
    {
      path: "/deck_app/decks/:deckId",
      element: <Decks/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

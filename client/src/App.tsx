import React from 'react';
import DeckForm from './components/DeckForm';

import './style.css';

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Decks from './components/Decks';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DeckForm />,
    },
    {
      path: "/decks/:deckId",
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

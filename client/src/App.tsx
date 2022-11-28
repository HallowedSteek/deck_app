import React, { useEffect } from 'react';
import DeckForm from './components/DeckForm';

import './style.css';

import { createBrowserRouter, RouterProvider} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DeckForm />,
    },
    {
      path: "/decks/:deckId",
      element: <div>JDSAKLJLKASJDLASJL</div>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

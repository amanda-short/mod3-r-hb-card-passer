import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState('');
  return <GameContext.Provider value={{ deck, setDeck }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };

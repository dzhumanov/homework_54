import {useState} from 'react'
import PlayBoard from './components/PlayBoard/PlayBoard';

import {Item} from './types';
import './App.css'


function App() {
  const createItems = (): Item[] => {
    const items:Item[] = [];
    for (let i = 0; i < 36; i++) {
      items.push({
      hasItem: false,
      clicked: false
    });
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    items[randomIndex].hasItem = true;
    return items;
  };

  const [items, setItems] = useState<Item[]>(createItems());
  const [attempts, setAttempts] = useState<number>(0);

  const handleCellClick = (index: number): void => {
    if (!items[index].clicked) {
      const newItems: Item[] = [...items];
      newItems[index].clicked = true;
      setAttempts(attempts + 1);
      setItems(newItems);
    }
  };

  const handleReset = (): void => {
    setItems(createItems());
    setAttempts(0);
  };

  return (
    <div className="app">
      <h1>Game</h1>
      <PlayBoard items={items} onCellClick={handleCellClick} />
      <div className="attempts">Попыток: {attempts}</div>
      <button className="reset-button" onClick={handleReset}>
        Сбросить игру
      </button>
    </div>
  )
}

export default App

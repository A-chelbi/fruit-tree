import React from 'react';
import './App.css';

interface ItemType {
  name: string;
  category: 'fruit' | 'legume';
}

export const ITEM_LIST: ItemType[] = [
  {
    name: 'tomate',
    category: 'fruit',
  },
  {
    name: 'pomme de terre',
    category: 'legume',
  },
  {
    name: 'poireau',
    category: 'legume',
  },
  {
    name: 'courgette',
    category: 'legume',
  },
  {
    name: 'cerise',
    category: 'fruit',
  },
  {
    name: 'fraise',
    category: 'fruit',
  },
];

const filterAlphabetcally = (obj: any) => {
  return obj.sort((a: any, b: any) => a.name.localeCompare(b.name));
};

const filtercategory = (obj: any) => {
  return obj.sort((a: any, b: any) =>
    a.category.localeCompare(b.category)
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {filtercategory(filterAlphabetcally(ITEM_LIST)).map(
          (item: any) => {
            return (
              <div
                className={
                  item.category === 'fruit' ? 'fruit' : 'legume'
                }
              >
                {item.name}
              </div>
            );
          }
        )}
      </header>
    </div>
  );
}

export default App;

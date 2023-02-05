import {createContext, useState} from 'react';

export const SelectContext = createContext();

export const SelectContextProvider = ({children}) => {
  const [selectedCocktail, setSelectedCocktail] = useState([]);

  const remove = cocktail => {
    const filtering = selectedCocktail.filter(i => {
      console.log(cocktail);
      console.log('remove');
      return i.id !== cocktail.id;
    });
    setSelectedCocktail(filtering);
  };
  const add = cocktail => {
    console.log(cocktail);
    console.log('add');
    setSelectedCocktail([...selectedCocktail, cocktail]);
  };

  return (
    <SelectContext.Provider
      value={{
        addToSelected: add,
        removeFromSelected: remove,
        selectedCocktail,
      }}>
      {children}
    </SelectContext.Provider>
  );
};

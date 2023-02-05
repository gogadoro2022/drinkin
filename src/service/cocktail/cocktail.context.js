import {createContext, useState, useEffect} from 'react';
import {cocktailRequest, cocktailTransform} from './cocktail.service';

export const CocktailContext = createContext();

export const CocktailContextPorvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(null);

  // const filteringCocktail = res => {
  //   // if (category !== '전체') {
  //   //   const filtered = cocktails;
  //   // }
  //   const result = res.reduce((acc, cur, index) => {
  //     console.log('acc :', acc);
  //     console.log('cur :', cur);
  //     console.log('index :', index);
  //     acc.push(cur[index].cocktails);
  //   }, []);
  //   console.log('result :', result);
  //   return result;
  // };

  const retrieveCocktails = () => {
    setIsLoading(true);
    setTimeout(() => {
      cocktailRequest()
        .then(res => cocktailTransform(res))
        .then(res => {
          setIsLoading(false);
          setCocktails(res);
          console.log('리퀘스트 성공 :', res);
          return res;
        })
        .catch(err => {
          console.log('리퀘스트 실패');
          setIsLoading(false);
          setError(err.response);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveCocktails();
  }, []);

  return (
    <CocktailContext.Provider
      value={{cocktails, isLoading, error, setCocktails}}>
      {children}
    </CocktailContext.Provider>
  );
};

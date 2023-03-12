import {createContext, useState, useEffect} from 'react';
import {recomandedCocktailRequest} from './cocktail.service';

export const CocktailContext = createContext();

export const CocktailContextPorvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [recomandedCocktail, setRecomandedCocktail] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(null);

  console.log('cocktail ctx');

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

  // ** 처음 앱이 실행했을때 돌아가야하는것
  // useEffect(() => {
  //   retrieveCocktails();
  // }, []);

  const retrieveCocktails = () => {
    setIsLoading(true);
    setTimeout(() => {
      cocktailRequest()
        .then(res => cocktailTransform(res))
        .then(res => {
          setIsLoading(false);
          setCocktails(res);
          return res;
        })
        .catch(err => {
          console.log('리퀘스트 실패');
          setIsLoading(false);
          setError(err.response);
        });
    }, 2000);
  };

  const getRecomandedCocktail = () => {
    setIsLoading(true);
    setTimeout(() => {
      recomandedCocktailRequest()
        .then(recomandedTransform)
        .then(res => {
          setIsLoading(false);
          setRecomanded(res);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  const sendSelectedCocktails = async () => {
    //
  };

  return (
    <CocktailContext.Provider
      value={{
        cocktails,
        isLoading,
        error,
        setCocktails,
        sendSelectedCocktails,
      }}>
      {children}
    </CocktailContext.Provider>
  );
};

import {createContext, useEffect, useState} from 'react';
import {recomandedRequest, recomandedTransform} from './recomanded.service';

export const RecomandedContext = createContext();

export const RecomandedContextProvider = ({children}) => {
  const [recomanded, setRecomanded] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRecomanded = () => {
    setIsLoading(true);
    setTimeout(() => {
      recomandedRequest()
        .then(recomandedTransform)
        .then(res => {
          setIsLoading(false);
          setRecomanded(res);
          console.log('recomanded request succeed');
        })
        .catch(err => {
          console.log('recomanded request fail');
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    getRecomanded();
  }, []);

  return (
    <RecomandedContext.Provider
      value={{
        recomanded,
        isLoading,
        error,
      }}>
      {children}
    </RecomandedContext.Provider>
  );
};

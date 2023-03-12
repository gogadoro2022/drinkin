// import {createContext, useEffect, useState} from 'react';
// import {recomandedRequest, recomandedTransform} from './recomanded.service';

// export const RecomandedContext = createContext();

// export const RecomandedContextProvider = ({children}) => {
//   const [recomanded, setRecomanded] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getRecomanded();
//   }, []);

//   const getRecomanded = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       recomandedRequest()
//         .then(recomandedTransform)
//         .then(res => {
//           setIsLoading(false);
//           setRecomanded(res);
//         })
//         .catch(err => {
//           setIsLoading(false);
//           setError(err);
//         });
//     }, 2000);
//   };

//   return (
//     <RecomandedContext.Provider
//       value={{
//         recomanded,
//         isLoading,
//         error,
//       }}>
//       {children}
//     </RecomandedContext.Provider>
//   );
// };

import {BASE_URL} from '../url';

export const cocktailsRequest = async () => {
  return fetch(`${BASE_URL}/cocktail`)
    .then(res => res.json())
    .then(res => {
      return res;
    });
};

export const recomandedCocktailRequest = async () => {
  return fetch(`${BASE_URL}/cocktail`).then(res => {
    return res.json();
  });
};

// export const recomandedTransform = res => {
//   const data = res.results.reduce((acc, cur) => {
//     return [...acc, ...cur.cocktails];
//   }, []);
//   return data;
// };

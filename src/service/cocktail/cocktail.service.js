import {BASE_URL} from '../url';

export const cocktailRequest = () => {
  return fetch(`${BASE_URL}/cocktail`)
    .then(res => res.json())
    .then(res => {
      return res;
    });
};

export const cocktailTransform = res => {
  return res.results;
};

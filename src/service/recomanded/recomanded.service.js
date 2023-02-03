import {BASE_URL} from '../url';

export const recomandedRequest = () => {
  return fetch(`${BASE_URL}/cocktail`).then(res => {
    return res.json();
  });
};

export const recomandedTransform = res => {
  return res.results;
};

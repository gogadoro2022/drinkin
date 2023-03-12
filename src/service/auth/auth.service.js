import {config} from '../../infra/util/config';

// 선택 칵테일[]을 받아와
export const sendSelectedCocktailRequest = async cocktails => {
  return fetch(`${config.baseURL.host}/api/v1/cocktails`, {
    method: 'POST',
    body: JSON.stringify({
      cocktails,
    }),
  });
};

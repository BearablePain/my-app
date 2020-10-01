import { Dispatch } from 'redux';

// @ts-ignore

import { DataBeginInterface } from '../interfaces.ts';

// @ts-ignore

import GET_DATA from './actionTypes.ts';
/**
 * Загружает дополнительную информацию в объект
 * @param {number} obj - изначальный объект по первому запросу.
 * @return {obj} Новый объект с дополнительным контентом.
 */

const getMoreDeralis = async (obj: DataBeginInterface) => {
  const path = 'https://api.guildwars2.com/v2/items/';
  const responce = await fetch(`${path}${obj.id}`);
  const result = await responce.json();
  return {
    ...obj,
    ...result
  };
};

const thunkLoadData = () => async (dispatch: Dispatch) => {
  const responce = await fetch(
    'https://api.guildwars2.com/v2/account/bank?access_token=5BEB65D2-A037-804C-BFD6-E8318E466C4141F5FFC8-2127-4B29-957C-62A4E09727AF'
  );
  let result = await responce.json();

  result = result.filter((el: DataBeginInterface) => el !== null);

  const allData = await Promise.all(
    result.map((el: DataBeginInterface) => getMoreDeralis(el))
  );

  return dispatch({
    type: GET_DATA,
    payload: allData,
  });
};

export default thunkLoadData;

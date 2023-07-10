import {
  LISTMOVIE,
  GETFILM,
  ADDFAVORIE,
  LISTFAVORIE,
  REMOVEFAVORIE,
} from './types';
import axios from 'react-native-axios';

//get list movie
export const getMovie = () => async dispatch => {
  try {
    const cleapi = 'ca7772cab3600a541ec81c6af24f6645';

    // Make API request or fetch data from your desired source
    let apiUrl =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=' + cleapi;
    const res = await axios(apiUrl);
    const {data} = res;
    dispatch({
      type: LISTMOVIE,
      payload: data.results,
    });
    // console.log('resultat of list movie ', res);
  } catch (err) {
    dispatch({
      //   type: ERR_POST,
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//get list movie
export const getFilm = idFilm => async dispatch => {
  try {
    const cleapi = 'ca7772cab3600a541ec81c6af24f6645';

    // Make API request or fetch data from your desired source
    let apiUrl =
      'https://api.themoviedb.org/3/movie/' +
      idFilm +
      '?api_key=' +
      cleapi +
      '&language=fr';
    const res = await axios(apiUrl);
    const {data} = res;
    dispatch({
      type: GETFILM,
      payload: data,
    });
    // console.log('resultat film ', res);
  } catch (err) {
    dispatch({
      //   type: ERR_POST,
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//add favorie
export const addfavorie = film => async dispatch => {
  console.log('add favorie');
  console.log('from action', film);
  try {
    dispatch({
      type: ADDFAVORIE,
      payload: film,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//get list favorie
export const listfavorie = () => async dispatch => {
  console.log('list favorie');
  try {
    dispatch({
      type: LISTFAVORIE,
    });
  } catch (error) {
    console.log(error.message);
  }
};

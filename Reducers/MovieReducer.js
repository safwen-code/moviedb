//movie reducer
import {LISTMOVIE, GETFILM, ADDFAVORIE, LISTFAVORIE} from '../Actions/types';

//initial state

const initialState = {
  movies: [],
  film: null,
  Listfav: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LISTMOVIE:
      return {
        ...state,
        movies: action.payload,
        // loading: false,
      };
    case GETFILM:
      return {
        ...state,
        film: action.payload,
      };
    case ADDFAVORIE:
      return {
        ...state,
        Listfav: [...state.Listfav, action.payload],
      };
    case LISTFAVORIE:
      return {
        ...state,
        Listfav: action.payload,
        // loading: false,
      };
    default:
      return state;
  }
}

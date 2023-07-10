import {createStore, applyMiddleware} from 'redux';
import MovieReducer from './Reducers/MovieReducer';
import thunk from 'redux-thunk';

export default createStore(MovieReducer, applyMiddleware(thunk));

import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;

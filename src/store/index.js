import {combineReducers, createStore} from "redux";
import {gameInfoReducer} from './gameInfoReducer'
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    game: gameInfoReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
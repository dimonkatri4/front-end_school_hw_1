import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import usersReducer from './users-reducer';
import trendingReducer from './trending-reducer';

const rootReducers = combineReducers({
    users: usersReducer,
    trending: trendingReducer,
});

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducers, compose(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store;

export default store;

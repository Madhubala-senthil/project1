import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';
import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./Saga";


const sagaMiddleware = createSagaMiddleware();

 export const store = configureStore({
    devTools: true,
    reducer: Reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    
});

sagaMiddleware.run(watchFetchData);


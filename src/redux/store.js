import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './reducer'

const store = configureStore({ 
    reducer: reducer,
    middleware: [thunk, logger],
})

export default store;

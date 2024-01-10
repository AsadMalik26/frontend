import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import amountSlice from './amountSlice';
import counterSlice from './counterSlice';
import userSlice from './userSlice';
// import counterReducer from "./counterSlice"
//REDUX PERSIST START
// configureStore.js

const userPersistConfig = {
  key: 'user',
  storage,
}
const persistedUser = persistReducer(userPersistConfig, userSlice)


//REDUX PERSIST END

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    amount: amountSlice,
    user: persistedUser, //persisted User instead of userSlice
  },
})
export const persistor = persistStore(store);


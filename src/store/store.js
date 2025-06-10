import { configureStore } from '@reduxjs/toolkit';


const dummyReducer = (state = {}, action) => state;

const store = configureStore({
      reducer: dummyReducer
})


export default store
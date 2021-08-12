import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../components/Posts/postsSlice';
import searchReducer from '../components/Header/searchSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    search: searchReducer
  },
});

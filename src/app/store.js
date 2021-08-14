import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../components/Posts/postsSlice';
import searchReducer from '../components/Header/searchSlice';
import savedPostsReducer from '../features/savedPosts/savedPostsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    search: searchReducer,
    savedPosts: savedPostsReducer
  },
});

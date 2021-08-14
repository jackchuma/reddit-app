import { createSlice } from '@reduxjs/toolkit';

export const savedPostsSlice = createSlice({
    name: 'savedPosts',
    initialState: [],
    reducers: {
        addSavedPost: (state, action) => {
            state.push(action.payload);
        },
        removeSavedPost: (state, action) => {
            return state.filter((post) => post.id !== action.payload.id);
        }
    }
});

export const { addSavedPost, removeSavedPost } = savedPostsSlice.actions;
export const selectSavedPosts = state => state.savedPosts;
export default savedPostsSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../../app/api';
import { selectSearchTerm } from '../Header/searchSlice';

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async () => {
        const data = await fetchPosts();
        return data.data.children;
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {},
        isLoading: true,
        hasError: false
    },
    reducers: {
        addPost: (state, action) => {
            const { id } = action.payload;
            state.posts[id] = action.payload;
        }
    },
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectPosts = state => state.posts.posts;
export const { addPost } = postsSlice.actions;

export const selectFilteredPosts = state => {
    const allPosts = selectPosts(state);
    const searchTerm = selectSearchTerm(state);

    return Object.values(allPosts).filter(post => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default postsSlice.reducer;
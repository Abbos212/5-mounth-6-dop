import { createSlice, isAction } from "@reduxjs/toolkit";
import { fetchAllPosts } from "../creators/postCreator";

const initialState = {
    posts: [],
    isLoading: false,
    isError: "",
    path: "",
};

const postSlice = createSlice({
    initialState,
    name: 'posts',
    reducers: {

        setPath: (state, action) => {
            state.path = action.payload;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.isError = "";
            state.isLoading = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchAllPosts.pending, (state, action) => {
            state.isError = "";
            state.isLoading = true;
            state.posts = [];
        });
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.isError = "error";
            state.isLoading = false;
            state.posts = [];
        })
    },
});

const postsReducers = postSlice.reducer;

export const { setPosts, setLoading, setError, setPath } = postSlice.actions;

export default postsReducers;
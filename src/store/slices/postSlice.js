import { createSlice, isAction } from "@reduxjs/toolkit";
import { fetchAllPosts } from "../creators/postCreator";

const initialState = {
    posts: [],
    isLoading: false,
    isError: "",
    path: "",
    postStatus: 'pending',
};

const postSlice = createSlice({
    initialState,
    name: 'posts',
    reducers: {
        setPath: (state, action) => {
            state.path = action.payload;
        },
        setPost: (state, action) => {
            state.cart = action.payload;
        }

    },
    extraReducers: (builder) => {

        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.isError = "";
            state.isLoading = false;
            state.posts = action.payload;
            console.log(state.postStatus);
            state.postStatus = 'fulfilled'; 

        });
        builder.addCase(fetchAllPosts.pending, (state, action) => {
            state.isError = "";
            state.isLoading = true;
            state.postStatus = 'pending';
            state.posts = [];
        });
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.isError = "error";
            state.isLoading = false;
            state.postStatus = 'rejected';
            state.posts = [];
        })
    },
});

const postsReducers = postSlice.reducer;

export const { setPath, setPost } = postSlice.actions;

export default postsReducers;
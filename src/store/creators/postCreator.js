import { createAsyncThunk } from "@reduxjs/toolkit";



const fetchAllPosts = createAsyncThunk(
    'posts/getPosts',
    async (payload, thunkAPI) => {
        try {
           const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
           const data = response.json()
           return data
        } catch(err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export { fetchAllPosts }

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";


const fetchAllPosts = createAsyncThunk(
    'posts/getPosts',
    async (payload, thunkAPI) => {
        try {
           const response = await api.getPosts()
           return response.data
        } catch(err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export { fetchAllPosts }

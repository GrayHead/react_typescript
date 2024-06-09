import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPost[];
}

const postsInitState: PostSliceType = {
    posts: []
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAll();
            return posts
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);

        }

    }
)
export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postsInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                //.....
            })

});
export const postActions = {
    ...postSlice.actions,
    loadPosts
}


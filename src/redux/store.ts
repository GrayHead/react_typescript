import {IUser} from "../models/IUser";
import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService, userService} from "../services/api.service";
import {AxiosError} from "axios";
import {IPost} from "../models/IPost";
import {useDispatch, useSelector} from "react-redux";

type UserSliceType = {
    users: IUser[]
}


const userInitState: UserSliceType = {
    users: []
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            console.log(users);
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);


const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //.....
            })

});

export const userActions = {
    ...userSlice.actions,
    loadUsers
}

/*======================================*/
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
const postSlice = createSlice({
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

/*============================*/

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});

import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[];
    isLoaded: boolean;
}


const userInitState: UserSliceType = {
    users: [],
    isLoaded: false,
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);


export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //.....
            })
            .addMatcher(isFulfilled(loadUsers), (state, action) => {
                // state.isLoaded = true;
            })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers
}

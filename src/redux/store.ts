import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type CounterStateType = {
    value: number;
}

const initialState: CounterStateType = {
    value: 0,
};

const initialState2: CounterStateType = {
    value: 0,
};

export const counter1Slice
    = createSlice({
    name: "counter1SliceName",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        }
    }
});


export const {
    increment,
    decrement,
    incrementByAmount
} = counter1Slice.actions;

const counter2Slice
    = createSlice({
    name: "counter2SliceName",
    initialState: initialState2,
    reducers: {
        increment2: (state) => {
            state.value = state.value + 1;
        },
        decrement2: (state) => {
            state.value = state.value - 1;


        },
        incrementByAmount2: (
            state,
            action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        }


    }
});

const store = configureStore({
    reducer: {
        counter1SliceState: counter1Slice.reducer,
        counter2SliceState: counter2Slice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes <RootState>();

export default store;




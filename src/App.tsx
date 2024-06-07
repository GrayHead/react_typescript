import React, {FC} from 'react';
import './App.css';
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";

const App: FC = () => {

    const dispatch = useAppDispatch();

    const counter1ValueState = useAppSelector(state => state.counter1SliceState.value);
    return (
        <>
            <h2>{counter1ValueState}</h2>
            <button onClick={() => {
                dispatch(increment());
            }}>inc
            </button>

            <button onClick={() => {
                dispatch(decrement());
            }}>dec
            </button>

            <button onClick={() => {
                dispatch(incrementByAmount(10));
            }}>inc by ammount of 10
            </button>
        </>

    );
}

export default App;

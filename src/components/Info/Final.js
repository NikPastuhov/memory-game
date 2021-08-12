import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_RECORD, CHANGE_CURRENT_PAGE, CHANGE_TIMER_FIRST_START, RECORDS, START} from "../../store/constants/gameInfo";

const Final = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.game.user);

    const changeTimerFirstStart = (isFirst) => {
        dispatch({type: CHANGE_TIMER_FIRST_START, payload: isFirst})
    }

    const toStartHandler = () => {
        changeTimerFirstStart(true);
        dispatch({type: CHANGE_CURRENT_PAGE, payload: START})
    }

    const toRecordsHandler = () => {
        dispatch({type: CHANGE_CURRENT_PAGE, payload: RECORDS})
    }

    const addRecord = () => {
        dispatch({type: ADD_RECORD, payload: user})
    }

    useEffect(() => {
        addRecord();
    }, [])

    return (
        <div className="game-container flex-center">
            <div className="menu-page">
                <h1>You won!</h1>
                <h3>Your time: {user.time}</h3>
                <button onClick={toStartHandler}>New game!</button>
                <button onClick={toRecordsHandler}>Records</button>
            </div>
        </div>
    );
};

export default Final;
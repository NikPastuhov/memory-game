import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RECORDS, START, VICTORY} from "../../store/constants/gameInfo";
import {changeCurrentPage, timeFirstStart, addNewRecord} from "../../store/actions/game";
import playAudio from "../../helpers/playAudio";

const Final = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.game.user);

    const changeTimerFirstStart = isFirst => dispatch(timeFirstStart(isFirst));

    const toStartHandler = () => {
        changeTimerFirstStart(true);
        dispatch(changeCurrentPage(START));
    }

    const toRecordsHandler = () => dispatch(changeCurrentPage(RECORDS));

    const addRecord = () => dispatch(addNewRecord(user));

    useEffect(() => {
        addRecord();
        playAudio(VICTORY);
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
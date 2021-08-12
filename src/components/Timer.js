import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTime, timeFirstStart} from "../store/actions/game";
import playAudio from "../helpers/playAudio";
import {START_GAME} from "../store/constants/gameInfo";

const padWithZero = num => {
    const numStr = num.toString();
    return numStr.length === 1 ? "0" + numStr : numStr;
};

const INIT_SECONDS = 0;
const INIT_MINUTES = 0;

const Clock = ({cardsCounter}) => {
    const dispatch = useDispatch();
    const [minutes, setMinutes] = useState(INIT_MINUTES);
    const [seconds, setSeconds] = useState(INIT_SECONDS);
    const [storedTimer, setStoredTimer] = useState(null);
    const firstStart = useSelector(state => state.game.timerFirstStart);

    const changeTimerFirstStart = isFirst => dispatch(timeFirstStart(isFirst));

    const start = () => {
        playAudio(START_GAME);
        if (storedTimer) {
            clearInterval(storedTimer);
            setMinutes(INIT_MINUTES);
            setSeconds(INIT_SECONDS);
        }
        const newTimer = setInterval(() => {
            setSeconds(prevSecs => {
                if (prevSecs === 59) {
                    setMinutes(prevMins => prevMins + 1);
                    return 0;
                } else return prevSecs + 1;
            });
        }, 1000);

        setStoredTimer(newTimer);
    };

    const setTime = (seconds, minutes) => {
        dispatch(addTime(`${padWithZero(minutes)}:${padWithZero(seconds)}`))
    };

    useEffect(() => {

        if (firstStart) {
            start();
            changeTimerFirstStart(false);
        }

        if(cardsCounter === 0) {
            setTime(seconds, minutes);
            clearInterval(storedTimer);
        }

    }, [cardsCounter])

    return (
        <div>
            <h1>{`${padWithZero(minutes)}:${padWithZero(seconds)}`}</h1>
        </div>
    );
};
export default Clock;
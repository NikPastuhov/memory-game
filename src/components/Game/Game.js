import React from 'react';
import {CHANGE_CURRENT_PAGE, FINAL, GAME, RECORDS, START} from "../../store/constants/gameInfo";
import Start from "../Info/Start";
import Board from "./Board";
import Final from "../Info/Final";
import Records from "../Info/Records";
import {useDispatch, useSelector} from "react-redux";

import './game.scss';

const Game = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.game.currentPage);

    const renderCurrentPage = () => {
        switch (page) {
            case START:
                return <Start />
            case GAME:
                return <Board />
            case FINAL:
                return <Final />
            case RECORDS:
                return <Records />
        }
    }

    const back = () => {
        dispatch({type: CHANGE_CURRENT_PAGE, payload: START})
    }

    return (
        <div>
            <img src="../../logo.svg" alt=""/>
            { renderCurrentPage() }
        </div>
    );
};

export default Game;
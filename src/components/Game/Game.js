import React from 'react';
import {FINAL, GAME, RECORDS, START} from "../../store/constants/gameInfo";
import Start from "../Info/Start";
import Board from "./Board";
import Final from "../Info/Final";
import Records from "../Info/Records";
import {useSelector} from "react-redux";

import './game.scss';

const Game = () => {
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

    return (
        <div>
            { renderCurrentPage() }
        </div>
    );
};

export default Game;
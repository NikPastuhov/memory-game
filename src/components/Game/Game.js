import React from 'react';
import {FINAL, GAME, GAME_RECORDS, RECORDS, START, START_GAME, VICTORY} from "../../store/constants/gameInfo";
import Start from "../Info/Start";
import Board from "./Board";
import Final from "../Info/Final";
import Records from "../Info/Records";
import {useSelector} from "react-redux";
import victory_sound from '../../media/sound/flawless_victory.mp3'
import start_sound from '../../media/sound/round_one.mp3'
import records_sound from '../../media/sound/laughter.mp3'

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

            <audio
                src={victory_sound}
                preload="auto"
                id={VICTORY}
            >
            </audio>
            <audio
                src={start_sound}
                preload="auto"
                id={START_GAME}
            >
            </audio>
            <audio
                src={records_sound}
                preload="auto"
                id={GAME_RECORDS}
            >
            </audio>
        </div>
    );
};

export default Game;
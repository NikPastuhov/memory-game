import React, {useEffect, useMemo, useState} from 'react';
import Cell from "./Cell";
import getCurrentCards from "../../helpers/currentCards";
import {useDispatch, useSelector} from "react-redux";
import {FINAL, START} from "../../store/constants/gameInfo";
import Clock from "../Timer";
import {changeCurrentPage, timeFirstStart} from "../../store/actions/game";

const Board = () => {
    const dispatch = useDispatch();
    const boardSize = useSelector(state => state.game.user.boardSize);
    const options = useSelector(state => state.game.options);
    const cards = useMemo(() => getCurrentCards(options, boardSize), []);
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);
    const [cardsCounter, setCardsCounter] = useState(boardSize * boardSize);

    const flipCardHandler = index => {
        setOpenedCard((opened) => [...opened, index]);
    }

    const initMatchOptions = () => {
        const pair = 2;

        if (openedCard < pair) return;

        const firstMatched = cards[openedCard[0]];
        const secondMatched = cards[openedCard[1]];

        if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched([...matched, firstMatched.id]);
            setCardsCounter(cardsCounter - pair);
        }

        if (openedCard.length === pair) {
            setTimeout(() => setOpenedCard([]), 500);
        }
    }

    const backHandler = () => {
        dispatch(changeCurrentPage(START));
        dispatch(timeFirstStart(true));
    }

    const toFinal = () => dispatch(changeCurrentPage(FINAL));

    useEffect(() => {
        initMatchOptions();

        if (cardsCounter === 0) {
            toFinal();
        }
    }, [openedCard]);

    const isVisible = (card, index) => {
        let isFlipped = false;

        if (openedCard.includes(index)) isFlipped = true;
        if (matched.includes(card.id)) isFlipped = true;

        return isFlipped
    }

    const gridStyle = (size) => {
        return {
            gridTemplate: `repeat(${size}, 1fr) / repeat(${size}, 1fr)`
        }
    }

    return (
        <div className='container'>
            <button onClick={backHandler}>Back</button>
            <Clock cardsCounter={cardsCounter} />

            <div
                className="board"
                style={ gridStyle(boardSize) }
            >
                {
                    cards && (
                        cards.map((card, index) => {
                            const isFlipped = isVisible(card, index)

                            return (
                                <Cell
                                    isFlipped={isFlipped}
                                    onClick={() => flipCardHandler(index)}
                                    card={card}
                                    key={index}
                                />
                            );
                        })
                    )
                }
            </div>
        </div>
    );
};

export default Board;
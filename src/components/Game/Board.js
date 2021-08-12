import React, {useEffect, useMemo, useRef, useState} from 'react';
import Cell from "./Cell";
import getCurrentCards from "../../helpers/currentCards";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_CURRENT_PAGE, CHANGE_TIMER_FIRST_START, FINAL, START} from "../../store/constants/gameInfo";
import Clock from "../Timer";

const OPTIONS = [
    {
        id: 1,
        src: 'cyrax.png',
    },
    {
        id: 2,
        src: 'jade.png',
    },
    {
        id: 3,
        src: 'jax.png',
    },
    {
        id: 4,
        src: 'johnny.png',
    },
    {
        id: 5,
        src: 'kabal.png',
    },
    {
        id: 6,
        src: 'kano.png',
    },
    {
        id: 7,
        src: 'kitana.png',
    },
    {
        id: 8,
        src: 'kung_laos.png',
    },
    {
        id: 9,
        src: 'liu_kang.png',
    },
    {
        id: 10,
        src: 'nightwolf.png',
    },
    {
        id: 11,
        src: 'ra.png',
    },
    {
        id: 12,
        src: 'scorpion.png',
    },
    {
        id: 13,
        src: 'smoke.png',
    },
    {
        id: 14,
        src: 'sonya.png',
    },
    {
        id: 15,
        src: 'stryker.png',
    },
    {
        id: 16,
        src: 'sub-zero.png',
    },
    {
        id: 17,
        src: 'quan_chi.png',
    },
    {
        id: 18,
        src: 'sheeva.png',
    },
    {
        id: 19,
        src: 'sindel.png',
    },
    {
        id: 20,
        src: 'young_shang_tsung.png',
    }
];

const Board = () => {
    const dispatch = useDispatch();
    const boardSize = useSelector(state => state.game.user.boardSize);
    const cards = useMemo(() => getCurrentCards(OPTIONS, boardSize), []);
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
        dispatch({type: CHANGE_CURRENT_PAGE, payload: START})
        dispatch({type: CHANGE_TIMER_FIRST_START, payload: true})
    }

    const toFinal = () => {
        dispatch({type: CHANGE_CURRENT_PAGE, payload: FINAL})
    }

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
import React, {useState} from 'react';
import {FOUR, GAME, SIX, TWO} from "../../store/constants/gameInfo";
import TabButton from "../Tab/TabButton";
import {useDispatch} from "react-redux";
import {changeCurrentPage, createUser} from "../../store/actions/game";
import './info.scss';

const Start = () => {
    const [userName, setUserName] = useState('')
    const [activeTab, setActiveTab] = useState('2')
    const dispatch = useDispatch();

    const toGame = () => {
        dispatch(changeCurrentPage(GAME));
    }

    const saveUserInfo = () => {
        dispatch(createUser({name: userName || 'anonymous', boardSize: +activeTab}));
    }

    const startGameHandler = () => {
        saveUserInfo();
        toGame();
    }

    const changeNameHandler = (event) => {
        setUserName(event.target.value)
    }

    const onChangeValue = (event) => {
        setActiveTab(event.target.value);
    }

    return (
        <div className="game-container flex-center">
            <div className="menu-page">
                <h1>Memory Game</h1>
                <input
                    type="text"
                    placeholder="Your name"
                    value={userName}
                    onChange={changeNameHandler}
                />
                <div className="tab-buttons-box" onChange={onChangeValue}>
                    <TabButton text="2x2" value={TWO} name="boardSize" defaultChecked={activeTab == TWO} />
                    <TabButton text="4x4" value={FOUR} name="boardSize" />
                    <TabButton text="6x6" value={SIX} name="boardSize" />
                </div>
                <button className="pink-orange big-button" onClick={startGameHandler}>Start!</button>
            </div>

        </div>
    );
};

export default Start;
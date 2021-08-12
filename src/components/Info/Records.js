import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Tab from "../Tab/Tab";
import {CHANGE_CURRENT_PAGE, CHANGE_TIMER_FIRST_START, FOUR, SIX, START, TWO} from "../../store/constants/gameInfo";
import TabButton from "../Tab/TabButton";

const Records = () => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(TWO);
    const records = useSelector(state => state.game.records);

    const changeTimerFirstStart = (isFirst) => {
        dispatch({type: CHANGE_TIMER_FIRST_START, payload: isFirst})
    }

    const onChangeValue = (event) => {
        setActiveTab(event.target.value);
    }

    const sizeFilter = (size) => {
        return records.filter(record => record.boardSize === size);
    }

    const toStartHandler = () => {
        changeTimerFirstStart(true);
        dispatch({type: CHANGE_CURRENT_PAGE, payload: START})
    }

    const records2x2 = sizeFilter(TWO);
    const records4x4 = sizeFilter(FOUR);
    const records6x6 = sizeFilter(SIX);

    return (
        <div className="game-container direction-column jc-space-between">
            <div className="tab-buttons-box" onChange={onChangeValue}>
                <TabButton text="2x2" value={TWO} name="boardSize" defaultChecked={TWO} />
                <TabButton text="4x4" value={FOUR} name="boardSize" />
                <TabButton text="6x6" value={SIX} name="boardSize" />
            </div>

            <div className="records-box">
                <Tab isVisible={activeTab == TWO} records={records2x2} />
                <Tab isVisible={activeTab == FOUR} records={records4x4} />
                <Tab isVisible={activeTab == SIX} records={records6x6} />
            </div>

            <button onClick={toStartHandler}>New game!</button>
        </div>
    );
};

export default Records;
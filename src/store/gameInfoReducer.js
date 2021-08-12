import {
    ADD_RECORD,
    ADD_TIME,
    CHANGE_CURRENT_PAGE,
    CHANGE_TIMER_FIRST_START,
    CREATE_USER,
    START
} from "./constants/gameInfo";

const defaultState = {
    user: {
        name: '', //anonymous
        boardSize: 2,
        time: null
    },

    records: [
        {
            name: 'Name1',
            boardSize: 2,
            time: '00:07'
        },
        {
            name: 'Name2',
            boardSize: 2,
            time: '00:07'
        },
        {
            name: 'Name3',
            boardSize: 4,
            time: '00:07'
        },
        {
            name: 'Name4',
            boardSize: 4,
            time: '00:07'
        },
    ],
    currentPage: START,
    timerFirstStart: true
}

export const gameInfoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {...state, user: state.user = action.payload}
        case ADD_TIME:
            return {...state, user: {...state.user, time: action.payload} }
        case ADD_RECORD:
            return {...state, records: state.records = [...state.records, action.payload]}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case CHANGE_TIMER_FIRST_START:
            return {...state, timerFirstStart: action.payload}
        default:
            return state
    }
}
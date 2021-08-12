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
        name: '',
        boardSize: 2,
        time: null
    },
    records: [],
    currentPage: START,
    timerFirstStart: true,
    options: [
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
    ]
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
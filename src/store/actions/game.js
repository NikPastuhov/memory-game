import {ADD_RECORD, ADD_TIME, CHANGE_CURRENT_PAGE, CHANGE_TIMER_FIRST_START, CREATE_USER} from "../constants/gameInfo";

export const changeCurrentPage = payload => ({ type: CHANGE_CURRENT_PAGE, payload });
export const createUser = payload => ({ type: CREATE_USER, payload });
export const timeFirstStart = payload => ({ type: CHANGE_TIMER_FIRST_START, payload });
export const addNewRecord = payload => ({ type: ADD_RECORD, payload });
export const addTime = payload => ({ type: ADD_TIME, payload });
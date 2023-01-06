// Ultilizes index.js calls from API folder client side, the one ultilizing Axios

import * as api from "../api";

// Action Creators => Functions that return redux actions

// use redux-thunk for some wacky async stuff
export const getParticipants = () => async(dispatch) => {
    
    try {
        const { data } = await api.fetchParticipants();
        dispatch({ type: "FETCH_ALL", payload: data }) // instead of returning, we "dispatch" the action
    } catch (error) {
        console.log(error)
    }
}

export const createParticipant = (participant) => async(dispatch) => {

    try {
        const { data } = await api.createParticipant(participant)
        dispatch({ type: "CREATE", payload: data })
    } catch (error) {
        console.log(error)
    }
}

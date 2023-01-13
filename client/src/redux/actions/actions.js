// Ultilizes index.js calls from API folder client side, the one ultilizing Axios

import * as api from "../api";

// Action Creators => Functions that return redux actions

// Participanrt actions
export const getParticipants = () => async(dispatch) => {
    
    try {
        const { data } = await api.fetchParticipants();
        console.log("FETCH_ALL")
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

export const removeParticipant = (id) => async(dispatch) => {

    try {
        await api.removeParticipant(id);
        dispatch( {type: "DELETE", payload: id})
    } catch (error) {
        console.log(error)
    }
}

// Winners actions
export const getWinners = () => async(dispatch) => {
    
    try {
        const { data } = await api.fetchWinners();
        console.log("WINNER_ALL")
        dispatch({ type: "WINNER_ALL", payload: data }) 
    } catch (error) {
        console.log(error)
    }
}

export const pickWinner = () => async(dispatch) => {

    try {
        const { data } = await api.pickWinner()
        //console.log(typeof data)
        dispatch({ type: "CREATE_WINNER", payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const removeWinner = (id) => async(dispatch) => {

    try {
        await api.removeWinner(id);
        dispatch( {type: "DELETE_WINNER", payload: id})
    } catch (error) {
        console.log(error)
    }
}
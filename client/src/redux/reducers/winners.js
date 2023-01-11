export default (winners = [], action) => {

    switch (action.type) {
        case "WINNER_ALL":
            return action.payload; // get payload from actions
        case "CREATE_WINNER":
            return [...winners, action.payload]
        default:
            return winners;
    }

}
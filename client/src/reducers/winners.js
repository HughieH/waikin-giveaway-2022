export default (winners = [], action) => {

    switch (action.type) {
        case "FETCH_ALL":
            return action.payload; // get payload from actions
        default:
            return winners;
    }

}
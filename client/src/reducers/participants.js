export default (participants = [], action) => {

    switch (action.type) {
        case "FETCH_ALL":
            return action.payload; // get payload from actions
        case "CREATE":
            return [...participants, action.payload]
        default:
            return participants;
    }

}
export default (participants = [], action) => {

    switch (action.type) {
        case "FETCH_ALL":
            return action.payload; // get payload from actions
        case "CREATE":
            return [...participants, action.payload]
        case "DELETE":
            return participants.filter((participant) => participant._id != action.payload)
        default:
            return participants;
    }

}
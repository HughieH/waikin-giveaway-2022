export default (participants = [], action) => {

    switch (action.type) {
        case "FETCH_ALL":
            return participants;
        case "CREATE":
            return participants;
        default:
            return participants;
    }

}
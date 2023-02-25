const initialState = {
    name: ''
}
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return { name: action.name }
        default:
            return state
    }

}

export default mainReducer
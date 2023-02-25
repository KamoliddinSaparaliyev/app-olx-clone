const initialState = {
    likedProducts: []
}

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                likedProducts: [...state.likedProducts, action.product]
            }
        case "REMOVE_WISHLIST":
            let removeProductIndex = state.likedProducts.findIndex(p => p.id === action.id)
            console.log(removeProductIndex)
            return {

            }
        default:
            return state
    }
}
export default wishlistReducer 
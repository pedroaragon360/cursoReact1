const initialState = {
    postsE: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_POSTS':
            return {...state, postsE: action.posts}
        default:
            return state
    }
}
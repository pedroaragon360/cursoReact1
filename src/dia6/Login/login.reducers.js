const initialState = {
    user: {user: null, password: 'none'}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, user: action.user}
        default:
            return state
    }
}
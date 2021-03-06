const initialState = {
    items: [],
    isLoaded: false
};

const items = (state = initialState, action)  => {
    switch(action.type) {
        case 'SET_ITEMS': {
            return {
            ...state,
            items: action.payload,
            isLoaded: true
            }

        }
        default: {
            return state
        }
    }
}

export default items;
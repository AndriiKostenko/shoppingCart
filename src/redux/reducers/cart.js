const initialState = {
    items: [],
    isLoaded: false
};

const cart = (state = initialState, action)  => {
    switch(action.type) {
        case 'ADD_ITEM': {
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

export default cart
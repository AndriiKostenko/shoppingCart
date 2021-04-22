const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => parseInt(parseInt(obj.price)) + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');

  return keys.reduce((val, key) => {
      return val[key];
    },
    obj[firstKey]);
};

const getTotalSum = (obj, path) => {

  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};


const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const currentItems = !state.items[action.payload.id] ?
        [action.payload] :
        [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentItems,
          totalPrice: getTotalPrice(currentItems),
        }
      }

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    default: {
      return state
    }
  }
}

export default cart
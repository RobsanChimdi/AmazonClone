import { Type } from "./actiontype";

export const initialState = {
  basket: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(item => item.id === action.item.id);

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }]
        };
      } else {
        const updatedBasket = state.basket.map(item =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );

        return {
          ...state,
          basket: updatedBasket
        };
      }
case Type.REMOVE_FROM_BASKET:
  const index=state.basket.findIndex(item=>item.id===action.id)
  let nextBasket={...state.basket}
  if(index>0){
    
  }
    default:
      return state;
  }
};

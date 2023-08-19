import { DATA_SEND } from "./actions";

const initialState = {
  flights: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_SEND:
      const fetchedData = action.payload;
      return {
        ...state,
        flights: fetchedData,
      };
    default:
      return state;
  }
};

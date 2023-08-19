import { DATA_SEND, UPDATE_FILTER } from "./actions";

const initialState = {
  flights: null,
  filter: {
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    returnDate: "",
    oneWay: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_SEND:
      const fetchedData = action.payload;
      return {
        ...state,
        flights: fetchedData,
      };
    case "UPDATE_FILTER":
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

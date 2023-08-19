import axios from "axios";

export const DATA_SEND = "DATA_SEND";

export const sendData = (mockData) => (dispatch) => {
  axios
    .post("https://reqres.in/api/users", mockData)
    .then((response) => {
      dispatch({
        type: DATA_SEND,
        payload: response,
      });
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
};

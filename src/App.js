import React, { useEffect } from "react";
import "./App.css";
import SearchBoxes from "./components/SearchBoxes";
import FlightList from "./components/FlightList";

import { useDispatch, useSelector } from "react-redux";

import { sendData } from "./actions";
import data from "./data";

function App() {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.flights);

  useEffect(() => {
    if (!fetchedData) {
      dispatch(sendData(data));
    }
  }, [dispatch, fetchedData]);

  if (!fetchedData) {
    return <div className="loader">Loading...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <SearchBoxes />
      </header>
      <FlightList />
    </div>
  );
}

export default App;

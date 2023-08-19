import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBoxes from "./components/SearchBoxes";
import FlightList from "./components/FlightList";

import { useDispatch, useSelector } from "react-redux";

import { sendData } from "./actions";
import data from "./data";

function App() {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.flights);

  const airports = Object.values(data.flights).reduce(
    (uniqueAirports, flight) => {
      if (!uniqueAirports.includes(flight.departureAirport)) {
        uniqueAirports.push(flight.departureAirport);
      }
      if (!uniqueAirports.includes(flight.arrivalAirport)) {
        uniqueAirports.push(flight.arrivalAirport);
      }
      return uniqueAirports;
    },
    []
  );
  console.log("airports: ", airports);

  const [filters, setFilters] = useState({
    departureAirport: null,
    arrivalAirport: null,
    departureDate: null,
    arrivalDate: null,
  });
  const [searchClicked, setSearchClicked] = useState(false); // Add searchClicked state

  const handleSearch = () => {
    setSearchClicked(true); // Set searchClicked to true when the search button is clicked
    // Additional logic to handle other actions
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

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
        <SearchBoxes
          handleFilterChange={handleFilterChange}
          handleSearch={handleSearch}
          airports={airports}
        />
      </header>
      {searchClicked && <FlightList filters={filters} />}
    </div>
  );
}

export default App;

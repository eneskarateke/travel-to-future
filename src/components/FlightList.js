import React from "react";
import Flight from "./Flight"; // Flight bileşenini import edin
import { useSelector } from "react-redux";

const FlightList = () => {
  const flightData = useSelector((state) => state.flights.data.flights);

  return (
    <div className="flight-list">
      <h2>Tüm Uçuşlar</h2>
      {Object.entries(flightData).map(([key, flightDetails]) => (
        <Flight key={key} flightDetails={flightDetails} />
      ))}
    </div>
  );
};

export default FlightList;

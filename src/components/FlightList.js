import React from "react";
import Flight from "./Flight"; // Flight bileşenini import edin
import { useSelector } from "react-redux";

import "./flightlist.css";

const FlightList = ({ filters }) => {
  const flightData = useSelector((state) => state.flights.data.flights);

  const filteredOutboundFlights = Object.values(flightData).filter((flight) => {
    return (
      (!filters.departureAirport ||
        flight.departureAirport === filters.departureAirport) &&
      (!filters.outboundDate || flight.departureDate === filters.outboundDate)
    );
  });

  const filteredReturnFlights = Object.values(flightData).filter((flight) => {
    if (filters.returnDate) {
      return (
        flight.departureAirport === filters.arrivalAirport &&
        flight.arrivalAirport === filters.departureAirport &&
        flight.departureDate === filters.returnDate
      );
    }
    return false;
  });

  return (
    <div className="flight-list">
      <h2>Gidiş Uçuşları</h2>
      {filteredOutboundFlights.map((flight) => (
        <Flight key={flight.flightNumber} flightDetails={flight} />
      ))}

      {filters.returnDate && (
        <>
          <h2>Dönüş Uçuşları</h2>
          {filteredReturnFlights.map((flight) => (
            <Flight key={flight.flightNumber} flightDetails={flight} />
          ))}
        </>
      )}
    </div>
  );
};

export default FlightList;

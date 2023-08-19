import React from "react";
import Flight from "./Flight";
import { useSelector } from "react-redux";

import "./flightlist.css";

const FlightList = () => {
  const flightData = useSelector((state) => state.flights.data.flights);
  const filters = useSelector((state) => state.filter);
  const oneWay = useSelector((state) => state.filter.oneWay);

  const outboundFlights = Object.values(flightData).filter((flight) => {
    const meetsDepartureCriteria =
      !filters.departureAirport ||
      flight.departureAirport === filters.departureAirport;
    const meetsArrivalCriteria =
      !filters.arrivalAirport ||
      flight.arrivalAirport === filters.arrivalAirport;
    const meetsDepartureDateCriteria =
      !filters.departureDate || flight.departureDate === filters.departureDate;

    return (
      meetsDepartureCriteria &&
      meetsArrivalCriteria &&
      meetsDepartureDateCriteria
    );
  });

  const returnFlights = Object.values(flightData).filter((flight) => {
    const meetsDepartureCriteria =
      !filters.arrivalAirport ||
      flight.departureAirport === filters.arrivalAirport;
    const meetsArrivalCriteria =
      !filters.departureAirport ||
      flight.arrivalAirport === filters.departureAirport;
    const meetsReturnDateCriteria =
      !filters.returnDate || flight.departureDate === filters.returnDate;

    return (
      !oneWay && // Only consider return flights if not one-way
      meetsDepartureCriteria &&
      meetsArrivalCriteria &&
      meetsReturnDateCriteria
    );
  });

  return (
    <div className="flight-list">
      <h2>Gidiş Uçuşları</h2>
      {outboundFlights.map((flight) => (
        <Flight key={flight.flightNumber} flightDetails={flight} />
      ))}

      {!oneWay && returnFlights.length > 0 && (
        <div>
          <h2>Dönüş Uçuşları</h2>
          {returnFlights.map((flight) => (
            <Flight key={flight.flightNumber} flightDetails={flight} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightList;

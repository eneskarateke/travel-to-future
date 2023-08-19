import React, { useState } from "react";
import Flight from "./Flight";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./flightlist.css";

const FlightList = () => {
  const [selectedSort, setSelectedSort] = useState("departureTime"); // Default sorting by departure time
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const flightData = useSelector((state) => state.flights.data.flights);
  const filters = useSelector((state) => state.filter);
  const oneWay = useSelector((state) => state.filter.oneWay);

  const sortFlights = (flights, sortBy) => {
    return flights.slice().sort((a, b) => {
      if (sortBy === "departureTime") {
        const getHours = (time) => parseInt(time.split(":")[0]);
        const aIsAM = getHours(a.departureTime) < 12;
        const bIsAM = getHours(b.departureTime) < 12;

        if (aIsAM !== bIsAM) {
          return aIsAM ? -1 : 1;
        }
      }

      return a[sortBy] - b[sortBy];
    });
  };

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

  const sortedOutboundFlights = sortFlights(outboundFlights, selectedSort);
  const sortedReturnFlights = sortFlights(returnFlights, selectedSort);

  return (
    <>
      <div className="sorting-dropdown">{/* Dropdown code here */}</div>
      <div className="flight-list">
        {oneWay && sortedOutboundFlights.length > 0 && (
          <div>
            <h2>Uçuşlar</h2>
            {sortedOutboundFlights.map((flight) => (
              <Flight key={flight.flightNumber} flightDetails={flight} />
            ))}
          </div>
        )}

        {oneWay && sortedOutboundFlights.length === 0 && (
          <div className="departureFlights">
            <p>Uçuş bulunamadı.</p>
          </div>
        )}

        {!oneWay && (
          <div className="flights">
            {sortedOutboundFlights.length > 0 ? (
              <div className="departureFlights">
                <h2>Gidiş Uçuşları</h2>
                {sortedOutboundFlights.map((flight) => (
                  <Flight key={flight.flightNumber} flightDetails={flight} />
                ))}
              </div>
            ) : (
              <div className="arrivalFlights">
                <p>Uçuş bulunamadı.</p>
              </div>
            )}

            {sortedReturnFlights.length > 0 && (
              <div className="arrivalFlights">
                <h2>Dönüş Uçuşları</h2>
                {sortedReturnFlights.map((flight) => (
                  <Flight key={flight.flightNumber} flightDetails={flight} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Show "Uçuş bulunamadı" message if no flights are found */}
        {oneWay &&
          sortedOutboundFlights.length === 0 &&
          sortedReturnFlights.length === 0 && <p>Uçuş bulunamadı.</p>}
      </div>
    </>
  );
};

export default FlightList;

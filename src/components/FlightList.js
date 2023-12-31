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
  const [selectedSort, setSelectedSort] = useState("departureTime");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const flightData = useSelector((state) => state.flights.data.flights);
  const filters = useSelector((state) => state.filter);
  const oneWay = useSelector((state) => state.filter.oneWay);
  const sortFlights = (flights, sortBy) => {
    return flights.slice().sort((a, b) => {
      if (sortBy === "departureTime" || sortBy === "arrivalTime") {
        const getTimeInMinutes = (time) => {
          const [hoursA, minutesA] = time.split(":").map(Number);
          return hoursA * 60 + minutesA;
        };

        const aTime = getTimeInMinutes(
          sortBy === "departureTime" ? a.departureTime : a.arrivalTime
        );
        const bTime = getTimeInMinutes(
          sortBy === "departureTime" ? b.departureTime : b.arrivalTime
        );

        return aTime - bTime;
      } else if (sortBy === "price") {
        return a.price - b.price;
      } else if (sortBy === "flightDuration") {
        return a.flightDuration - b.flightDuration;
      }

      return 0;
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
      !oneWay &&
      meetsDepartureCriteria &&
      meetsArrivalCriteria &&
      meetsReturnDateCriteria
    );
  });

  const sortedOutboundFlights = sortFlights(outboundFlights, selectedSort);
  const sortedReturnFlights = sortFlights(returnFlights, selectedSort);

  return (
    <>
      <div className="sorting-dropdown">
        <label htmlFor="sort">Sort By:</label>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret>
            {selectedSort === "departureTime"
              ? "Departure Time"
              : selectedSort === "arrivalTime"
              ? "Arrival Time"
              : selectedSort === "price"
              ? "Price"
              : "Flight Duration"}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setSelectedSort("departureTime")}>
              Departure Time
            </DropdownItem>
            <DropdownItem onClick={() => setSelectedSort("arrivalTime")}>
              Arrival Time
            </DropdownItem>
            <DropdownItem onClick={() => setSelectedSort("price")}>
              Price
            </DropdownItem>
            <DropdownItem onClick={() => setSelectedSort("flightDuration")}>
              Flight Duration
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
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

            {sortedReturnFlights.length > 0 ? (
              <div className="arrivalFlights">
                <h2>Dönüş Uçuşları</h2>
                {sortedReturnFlights.map((flight) => (
                  <Flight key={flight.flightNumber} flightDetails={flight} />
                ))}
              </div>
            ) : (
              <div className="arrivalFlights">
                <p>Uçuş bulunamadı.</p>
              </div>
            )}
          </div>
        )}

        {oneWay &&
          sortedOutboundFlights.length === 0 &&
          sortedReturnFlights.length === 0 && <p>Uçuş bulunamadı.</p>}
        {oneWay}
      </div>
    </>
  );
};

export default FlightList;

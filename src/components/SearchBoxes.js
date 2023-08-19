import React, { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../actions";

import "./searchbox.css";

const FlightSearchForm = ({
  handleSearch,
  airports,
  handleInputFieldChange,
}) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);

  const airportOptions = airports.map((airport) => ({
    value: airport,
    label: airport,
  }));
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      fontWeight: state.isFocused ? "bold" : "normal", // Üzerine gelindiğinde kalın hale getirme
    }),
  };

  const handleDepartureAirportChange = (selectedOption) => {
    dispatch(
      updateFilter({
        departureAirport: selectedOption.value,
      })
    );
    handleInputFieldChange(); // Call the prop function here
  };

  const handleArrivalAirportChange = (selectedOption) => {
    dispatch(
      updateFilter({
        arrivalAirport: selectedOption.value,
      })
    );
    handleInputFieldChange(); // Call the prop function here
  };

  const handleDepartureDateChange = (e) => {
    const newDate = e.target.value;
    dispatch(updateFilter({ departureDate: newDate }));
    handleInputFieldChange(); // Call the prop function here
  };

  const handleReturnDateChange = (e) => {
    const newDate = e.target.value;
    dispatch(updateFilter({ returnDate: newDate }));
    handleInputFieldChange(); // Call the prop function here
  };

  const handleOneWayChange = (e) => {
    dispatch(
      updateFilter({
        oneWay: e.target.checked,
      })
    );
    handleInputFieldChange(); // Call the prop function here
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="flex-column">
        <Select
          options={airportOptions}
          required
          styles={customStyles}
          value={airportOptions.find(
            (airport) => airport.value === filters.departureAirport
          )}
          onChange={handleDepartureAirportChange}
          placeholder="Kalkış Havaalanı Seçiniz"
        />
      </div>

      <div className="flex-column">
        <Select
          options={airportOptions}
          required
          styles={customStyles}
          value={airportOptions.find(
            (airport) => airport.value === filters.arrivalAirport
          )}
          onChange={handleArrivalAirportChange}
          placeholder="Varış Havaalanı Seçiniz"
        />
      </div>

      <div className="flex-column">
        <p>Gidiş tarihi:</p>
        <input
          type="date"
          placeholder="Gidiş Tarihi"
          value={filters.departureDate}
          onChange={handleDepartureDateChange}
          required
        />
      </div>

      {!filters.oneWay && (
        <div className="flex-column">
          <p>Dönüş tarihi:</p>
          <input
            type="date"
            placeholder="Dönüş Tarihi"
            value={filters.returnDate}
            onChange={handleReturnDateChange}
            required={!filters.oneWay}
          />
        </div>
      )}

      <label>
        <input
          type="checkbox"
          checked={filters.oneWay}
          onChange={handleOneWayChange}
        />
        Tek Yönlü Uçuş
      </label>

      <button type="submit">Ara</button>
    </form>
  );
};

export default FlightSearchForm;

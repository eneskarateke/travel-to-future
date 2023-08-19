import React, { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../actions";

import "./searchbox.css";

const FlightSearchForm = ({ airports }) => {
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
      width: "100px",
      fontWeight: state.isFocused ? "bold" : "normal",
    }),
  };

  const handleDepartureAirportChange = (selectedOption) => {
    dispatch(
      updateFilter({
        departureAirport: selectedOption.value,
      })
    );
  };

  const handleArrivalAirportChange = (selectedOption) => {
    dispatch(
      updateFilter({
        arrivalAirport: selectedOption.value,
      })
    );
  };

  const handleDepartureDateChange = (e) => {
    const newDate = e.target.value;
    dispatch(updateFilter({ departureDate: newDate }));
  };

  const handleReturnDateChange = (e) => {
    const newDate = e.target.value;
    dispatch(updateFilter({ returnDate: newDate }));
  };

  const handleOneWayChange = (e) => {
    dispatch(
      updateFilter({
        oneWay: e.target.checked,
      })
    );
  };

  return (
    <form className="form">
      <div className="flex-column">
        <label htmlFor="departure">Kalkış havalimanı</label>

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
        <label htmlFor="arrival">Varış havalimanı</label>

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
        Gidiş tarihi
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
          Dönüş tarihi
          <input
            type="date"
            placeholder="Dönüş Tarihi"
            value={filters.returnDate}
            onChange={handleReturnDateChange}
            required={!filters.oneWay}
          />
        </div>
      )}

      <label className="label">
        Tek Yönlü Uçuş
        <input
          type="checkbox"
          checked={filters.oneWay}
          onChange={handleOneWayChange}
        />
      </label>
    </form>
  );
};

export default FlightSearchForm;

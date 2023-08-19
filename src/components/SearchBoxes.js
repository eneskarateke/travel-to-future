import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

import "./searchbox.css";

const FlightSearchForm = ({ handleSearch, airports }) => {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [oneWay, setOneWay] = useState(false);

  const airportOptions = airports.map((airport) => ({
    value: airport,
    label: airport,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleSearch();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-column">
        <Select
          options={airportOptions}
          value={airportOptions.find(
            (airport) => airport.value === departureAirport
          )}
          onChange={(selectedOption) =>
            setDepartureAirport(selectedOption.value)
          }
          placeholder="Kalkış Havaalanı Seçiniz"
        />
        {errors.departureAirport && (
          <p className="error">Kalkış Havaalanı gereklidir.</p>
        )}
      </div>

      <div className="flex-column">
        <Select
          options={airportOptions}
          value={airportOptions.find(
            (airport) => airport.value === arrivalAirport
          )}
          onChange={(selectedOption) => setArrivalAirport(selectedOption.value)}
          placeholder="Varış Havaalanı Seçiniz"
        />
        {errors.arrivalAirport && (
          <p className="error">Varış Havaalanı gereklidir.</p>
        )}
      </div>

      <div className="flex-column">
        <p>Gidiş tarihi:</p>
        <input
          type="date"
          placeholder="Gidiş Tarihi"
          onChange={(e) => setDepartureDate(e.target.value)} // Update the state
          {...register("departureDate", { required: true })}
        />
        {errors.departureDate && (
          <p className="error">Gidiş Tarihi gereklidir.</p>
        )}
      </div>

      {!oneWay && (
        <div className="flex-column">
          <p>Dönüş tarihi:</p>
          <input
            type="date"
            placeholder="Dönüş Tarihi"
            onChange={(e) => setReturnDate(e.target.value)} // Update the state
            {...register("returnDate", { required: !oneWay })}
          />
          {!oneWay && errors.returnDate && (
            <p className="error">Dönüş Tarihi gereklidir.</p>
          )}
        </div>
      )}

      <label>
        <input
          type="checkbox"
          {...register("oneWay")}
          onChange={(e) => setOneWay(e.target.checked)}
        />
        Tek Yönlü Uçuş
      </label>

      <button type="submit">Ara</button>
    </form>
  );
};

export default FlightSearchForm;

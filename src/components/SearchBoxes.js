import React, { useState } from "react";

const FlightSearchForm = () => {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [oneWay, setOneWay] = useState(true);

  const handleSearch = () => {
    // Arama işlemleri burada yapılabilir
    console.log({
      departureAirport,
      arrivalAirport,
      departureDate,
      returnDate,
      oneWay,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Kalkış Havaalanı"
        value={departureAirport}
        onChange={(e) => setDepartureAirport(e.target.value)}
      />
      <input
        type="text"
        placeholder="Varış Havaalanı"
        value={arrivalAirport}
        onChange={(e) => setArrivalAirport(e.target.value)}
      />
      <input
        type="date"
        placeholder="Kalkış Tarihi"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      {!oneWay && (
        <input
          type="date"
          placeholder="Varış Tarihi"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      )}
      <label>
        <input
          type="checkbox"
          checked={oneWay}
          onChange={() => setOneWay(!oneWay)}
        />
        Tek Yönlü Uçuş
      </label>
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};

export default FlightSearchForm;

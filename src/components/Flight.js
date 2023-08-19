import React from "react";
import "./flight.css";

const Flight = ({ flightDetails }) => {
  return (
    <div className="flight">
      <h2>Uçuş Detayları</h2>
      <p>Uçuş Numarası: {flightDetails.flightNumber}</p>
      <p>Kalkış Havaalanı: {flightDetails.departureAirport}</p>
      <p>Varış Havaalanı: {flightDetails.arrivalAirport}</p>
      <p>Kalkış Tarihi: {flightDetails.departureDate}</p>
      <p>Varış Tarihi: {flightDetails.arrivalDate}</p>
      <p>Kalkış Saati: {flightDetails.departureTime}</p>
      <p>Varış Saati: {flightDetails.arrivalTime}</p>
      <p>Uçuş Süresi: {flightDetails.flightDuration}</p>
      <p>Fiyat: ${flightDetails.price.toFixed(2)}</p>
    </div>
  );
};

export default Flight;

import React from "react";
import "./flight.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const Flight = ({ flightDetails }) => {
  const plane = <FontAwesomeIcon icon={faPlane} />;
  const hours = Math.floor(flightDetails.flightDuration / 60);
  const minutes = flightDetails.flightDuration % 60;

  return (
    <div className="flight-card">
      <div className="flight-card-test">
        <div className="flight-info">
          <div className="outbound-flight">
            <div className="flight-airport flight-info flight-airport-outbound">
              <p className="flight-info-upper">
                <span className="bold">{flightDetails.departureAirport} </span>
                {flightDetails.departureTime}
              </p>
              <p>{flightDetails.departureCity}</p>
            </div>

            <div className="flight-travel flight-info">
              <p className="flight-info-upper">
                {hours}h {minutes}m
              </p>

              <svg className="icon-way" viewBox="0 0 341 32">
                <path
                  fill="#ff8c00"
                  style={{ fill: "var(--color1, #ff8c00)" }}
                  d="M325.333 0c-7.872 0-14.384 5.696-15.717 13.189h-277.899c-1.333-7.493-7.845-13.189-15.717-13.189-8.837 0-16 7.163-16 16s7.163 16 16 16c7.872 0 14.384-5.696 15.717-13.189h277.899c1.333 7.493 7.845 13.189 15.717 13.189 8.837 0 16-7.163 16-16s-7.163-16-16-16z"
                ></path>
              </svg>

              <p>1 Stop</p>
            </div>

            <div className="flight-airport flight-info flight-airport-inbound">
              <p className="flight-airport-upper">
                {flightDetails.arrivalTime}
                <span className="bold"> {flightDetails.arrivalAirport}</span>
              </p>
              <p>{flightDetails.arrivalCity}</p>
            </div>

            <div className="flight-airline flight-info">
              <p className="flight-airline-upper">
                <span className="airline-logo">{plane}</span>{" "}
                <span className="">{flightDetails.airline}</span>
              </p>
              <p>
                <svg className="check-icon-bags" viewBox="0 0 38 32">
                  <path
                    fill="none"
                    stroke="#1ca381"
                    strokeWidth="6.4"
                    strokeMiterlimit="4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    style={{ stroke: "var(--color1, #1ca381)" }}
                    d="M6.4 17.681l7.476 7.919 18.124-19.2"
                  ></path>
                </svg>
                <span className="">Cabin bag included</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flight-price flight-info">
          <p className="price-label">
            {" "}
            Flight
            <br />
            <span className="price-label-grey">Per person</span>
          </p>
          <span className="flight-price-total">${flightDetails.price}</span>
          <button className="select-flight-button">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Flight;

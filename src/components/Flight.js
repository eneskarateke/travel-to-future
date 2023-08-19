import React from "react";
import "./flight.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const Flight = ({ flightDetails }) => {
  const plane = <FontAwesomeIcon icon={faPlane} />;

  return (
    <div className="flight-card">
      <div class="flight-card-test">
        <div class="flight-info">
          <div class="outbound-flight">
            <div class="flight-airport flight-info flight-airport-outbound">
              <p class="flight-info-upper">
                <span class="bold">{flightDetails.departureAirport} </span>
                {flightDetails.departureTime}
              </p>
              <p>{flightDetails.departureCity}</p>
            </div>

            <div class="flight-travel flight-info">
              <p class="flight-info-upper">{flightDetails.flightDuration}</p>

              <svg class="icon-way" viewBox="0 0 341 32">
                <path
                  fill="#ff8c00"
                  style={{ fill: "var(--color1, #ff8c00)" }}
                  d="M325.333 0c-7.872 0-14.384 5.696-15.717 13.189h-277.899c-1.333-7.493-7.845-13.189-15.717-13.189-8.837 0-16 7.163-16 16s7.163 16 16 16c7.872 0 14.384-5.696 15.717-13.189h277.899c1.333 7.493 7.845 13.189 15.717 13.189 8.837 0 16-7.163 16-16s-7.163-16-16-16z"
                ></path>
              </svg>

              <p>1 Stop</p>
            </div>

            <div class="flight-airport flight-info flight-airport-inbound">
              <p class="flight-airport-upper">
                {flightDetails.arrivalTime}
                <span class="bold"> {flightDetails.arrivalAirport}</span>
              </p>
              <p>{flightDetails.arrivalCity}</p>
            </div>

            <div class="flight-airline flight-info">
              <p class="flight-airline-upper">
                <span class="airline-logo">{plane}</span>{" "}
                <span class="">{flightDetails.airline}</span>
              </p>
              <p>
                <svg class="check-icon-bags" viewBox="0 0 38 32">
                  <path
                    fill="none"
                    stroke="#1ca381"
                    stroke-width="6.4"
                    stroke-miterlimit="4"
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    style={{ stroke: "var(--color1, #1ca381)" }}
                    d="M6.4 17.681l7.476 7.919 18.124-19.2"
                  ></path>
                </svg>
                <span class="">Cabin bag included</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flight-price flight-info">
          <p class="price-label">
            {" "}
            Flight
            <br />
            <span class="price-label-grey">Per person</span>
          </p>
          <span class="flight-price-total">${flightDetails.price}</span>
          <button class="select-flight-button">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Flight;

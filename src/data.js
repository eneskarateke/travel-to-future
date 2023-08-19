const flightsData = {
  flights: {
    AB123: {
      flightNumber: "AB123",
      departureAirport: "JFK",
      arrivalAirport: "LAX",
      departureDate: "2023-09-01",
      arrivalDate: "2023-09-01",
      departureTime: "09:00 AM",
      arrivalTime: "12:00 PM",
      flightDuration: "5h",
      price: 250.0,
    },
    AB1223: {
      flightNumber: "AB1223",
      departureAirport: "LAX",
      arrivalAirport: "JFK",
      departureDate: "2023-09-02",
      arrivalDate: "2023-09-02",
      departureTime: "09:00 AM",
      arrivalTime: "12:00 PM",
      flightDuration: "5h",
      price: 250.0,
    },
    CD456: {
      flightNumber: "CD456",
      departureAirport: "LAX",
      arrivalAirport: "SFO",
      departureDate: "2023-09-02",
      arrivalDate: "2023-09-02",
      departureTime: "02:30 PM",
      arrivalTime: "03:45 PM",
      flightDuration: "1h 15m",
      price: 150.5,
    },
    EF789: {
      flightNumber: "EF789",
      departureAirport: "MIA",
      arrivalAirport: "LAS",
      departureDate: "2023-09-03",
      arrivalDate: "2023-09-03",
      departureTime: "11:00 AM",
      arrivalTime: "02:30 PM",
      flightDuration: "4h 30m",
      price: 300.0,
    },
    GH012: {
      flightNumber: "GH012",
      departureAirport: "LAS",
      arrivalAirport: "JFK",
      departureDate: "2023-09-04",
      arrivalDate: "2023-09-04",
      departureTime: "03:45 PM",
      arrivalTime: "11:00 PM",
      flightDuration: "4h 15m",
      price: 350.75,
    },
    IJ345: {
      flightNumber: "IJ345",
      departureAirport: "JFK",
      arrivalAirport: "SFO",
      departureDate: "2023-09-05",
      arrivalDate: "2023-09-05",
      departureTime: "08:00 AM",
      arrivalTime: "11:15 AM",
      flightDuration: "5h 15m",
      price: 280.8,
    },
    KL678: {
      flightNumber: "KL678",
      departureAirport: "SFO",
      arrivalAirport: "ORD",
      departureDate: "2023-09-06",
      arrivalDate: "2023-09-06",
      departureTime: "01:45 PM",
      arrivalTime: "04:30 PM",
      flightDuration: "3h 45m",
      price: 220.6,
    },
    MN901: {
      flightNumber: "MN901",
      departureAirport: "ORD",
      arrivalAirport: "DFW",
      departureDate: "2023-09-07",
      arrivalDate: "2023-09-07",
      departureTime: "09:30 AM",
      arrivalTime: "11:45 AM",
      flightDuration: "2h 15m",
      price: 180.9,
    },
    OP234: {
      flightNumber: "OP234",
      departureAirport: "DFW",
      arrivalAirport: "MCO",
      departureDate: "2023-09-08",
      arrivalDate: "2023-09-08",
      departureTime: "12:15 PM",
      arrivalTime: "03:00 PM",
      flightDuration: "2h 45m",
      price: 210.5,
    },
    QR567: {
      flightNumber: "QR567",
      departureAirport: "MCO",
      arrivalAirport: "LAS",
      departureDate: "2023-09-09",
      arrivalDate: "2023-09-09",
      departureTime: "02:00 PM",
      arrivalTime: "05:15 PM",
      flightDuration: "4h 15m",
      price: 290.75,
    },
    ST890: {
      flightNumber: "ST890",
      departureAirport: "LAS",
      arrivalAirport: "DEN",
      departureDate: "2023-09-10",
      arrivalDate: "2023-09-10",
      departureTime: "08:45 AM",
      arrivalTime: "10:30 AM",
      flightDuration: "1h 45m",
      price: 160.2,
    },
    UV123: {
      flightNumber: "UV123",
      departureAirport: "DEN",
      arrivalAirport: "SEA",
      departureDate: "2023-09-11",
      arrivalDate: "2023-09-11",
      departureTime: "11:30 AM",
      arrivalTime: "01:45 PM",
      flightDuration: "2h 15m",
      price: 190.3,
    },
    WX456: {
      flightNumber: "WX456",
      departureAirport: "SEA",
      arrivalAirport: "ORD",
      departureDate: "2023-09-12",
      arrivalDate: "2023-09-12",
      departureTime: "03:30 PM",
      arrivalTime: "08:00 PM",
      flightDuration: "4h 30m",
      price: 320.0,
    },
    YZ789: {
      flightNumber: "YZ789",
      departureAirport: "ORD",
      arrivalAirport: "ATL",
      departureDate: "2023-09-13",
      arrivalDate: "2023-09-13",
      departureTime: "09:15 AM",
      arrivalTime: "12:00 PM",
      flightDuration: "2h 45m",
      price: 220.6,
    },
    AA012: {
      flightNumber: "AA012",
      departureAirport: "ATL",
      arrivalAirport: "LAX",
      departureDate: "2023-09-14",
      arrivalDate: "2023-09-14",
      departureTime: "01:30 PM",
      arrivalTime: "03:45 PM",
      flightDuration: "5h 15m",
      price: 290.8,
    },
    BB345: {
      flightNumber: "BB345",
      departureAirport: "LAX",
      arrivalAirport: "DFW",
      departureDate: "2023-09-15",
      arrivalDate: "2023-09-15",
      departureTime: "06:00 PM",
      arrivalTime: "08:30 PM",
      flightDuration: "3h 30m",
      price: 250.9,
    },
    CC678: {
      flightNumber: "CC678",
      departureAirport: "DFW",
      arrivalAirport: "MCO",
      departureDate: "2023-09-16",
      arrivalDate: "2023-09-16",
      departureTime: "10:45 AM",
      arrivalTime: "02:00 PM",
      flightDuration: "2h 15m",
      price: 210.5,
    },
    DD901: {
      flightNumber: "DD901",
      departureAirport: "MCO",
      arrivalAirport: "SEA",
      departureDate: "2023-09-17",
      arrivalDate: "2023-09-17",
      departureTime: "03:15 PM",
      arrivalTime: "06:30 PM",
      flightDuration: "4h 15m",
      price: 290.75,
    },
    EE234: {
      flightNumber: "EE234",
      departureAirport: "SEA",
      arrivalAirport: "JFK",
      departureDate: "2023-09-18",
      arrivalDate: "2023-09-18",
      departureTime: "09:30 AM",
      arrivalTime: "06:00 PM",
      flightDuration: "6h 30m",
      price: 360.2,
    },
  },
};

export default flightsData;

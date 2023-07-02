# Unix Timestamp Converter API

This is a Unix Timestamp Converter API built with Node.js. It provides endpoints to convert between Unix timestamps and date strings.

## Getting Started

To use the Unix Timestamp Converter API, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/unix-timestamp-converter-api.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

The API server will start running on `http://localhost:3000`.

## API Endpoints

- GET /unix-to-date/{timestamp}: Convert a Unix timestamp to a date string.
- GET /date-to-unix/{date}: Convert a date string to a Unix timestamp.

## Example Requests and Responses

### Convert Unix timestamp to date string

GET /unix-to-date/1625202000

Response:
{
  "date": "2021-07-02T10:00:00.000Z"
}

### Convert date string to Unix timestamp

GET /date-to-unix/2021-07-02T10:00:00.000Z

Response:
{
  "timestamp": 1625202000
}

## License



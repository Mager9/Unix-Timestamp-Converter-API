# Unix Timestamp Converter API

This is a Unix Timestamp Converter API built with Node.js. It provides endpoints to convert between Unix timestamps and date strings.

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

This project is licensed under the [GNU General Public License (GPL)](LICENSE).

The GNU General Public License is a copyleft open-source license that requires derivative works to be distributed under the same license. It allows others to use, copy, modify, and distribute your code, but any modifications or additions must also be licensed under the GPL.

For more information, please see the [LICENSE](LICENSE) file.

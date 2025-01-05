# ping-csv.js

A Node.js utility script to periodically ping a host and log measured time to a CSV file.

## Installation

You need Node.js and npm.
Clone this repository and run `npm install` to install dependencies.

## Running

Run `node ping-csv.js <hostname>`.
The output CSV file is named `<hostname>.csv`.
If the output file already exists, then the output is appended to the end of file.

## License

MIT

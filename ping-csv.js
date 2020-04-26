const fs = require("fs");
const ping = require("ping");
const dateFormat = require("dateformat");

const HOST = process.argv.slice(-1);
const PING_TIMEOUT_SEC = 3;
const INTERVAL_SEC = 2;
const FILE = HOST + ".csv";
const DELIMITER = "\t";

const measurePing = async (host) => {
  const timeString = dateFormat(new Date(), "dd.mm.yyyy HH.MM.ss");
  const res = await ping.promise.probe(host, { timeout: PING_TIMEOUT_SEC });
  const pingMs = res.time;
  const alive = res.alive ? 1 : 0;

  return [host, timeString, pingMs, alive];
};

const write = async (data, filename) => {
  const stream = fs.createWriteStream(filename, { flags: "a" });
  stream.write(data.join(DELIMITER) + "\n");
  stream.end();
};

(async () => {
  setInterval(async () => {
    const data = await measurePing(HOST);
    await write(data, FILE);
  }, INTERVAL_SEC * 1000);
})();

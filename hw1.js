import fs from "fs";

console.log("App started");
fs.appendFileSync("logs.txt", `Log entry at ${new Date().toISOString()}\n`);

setTimeout(() => {
  console.log("First tiemeout event");
}, 2000);

let interval = setInterval(() => {
  console.log("Interval tick");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 3000);

try {
  function readLogs() {
    let logs = fs.readFileSync("logs.txt", "utf8");
    console.log(logs.trim());
  }
  setTimeout(readLogs, 5000);
} catch (error) {
  console.error("Error reading logs:", error);
}

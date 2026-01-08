import fs from "fs";


fs.appendFileSync(
  "logs.txt",
  ` ${new Date().toLocaleString()}\n`
);

setTimeout(() => {
  console.log("Bir martalik timeout ishga tushdi");
}, 2000);

const timer = setInterval(() => {
  console.log("🔁 Interval ishlayapti...");
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log("⛔ Interval to‘xtatildi");
}, 3000);

function showLogs() {
  try {
    const data = fs.readFileSync("logs.txt", "utf-8");
    console.log("Log fayl mazmuni:");
    console.log(data.trim());
  } catch (err) {
    console.error(err.message);
  }
}

setTimeout(showLogs, 5000);

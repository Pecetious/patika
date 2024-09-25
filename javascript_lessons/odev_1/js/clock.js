document.addEventListener("DOMContentLoaded", () => {
  var userName = prompt("Adınızı girin");
  if (userName) document.getElementById("myName").innerText = userName;

  setInterval(showTime, 1000);
  showTime();
});
function showTime() {
  let now = new Date();
  let hours = now.getHours(); // Returns the current hour (0-23)
  let minutes = now.getMinutes(); // Returns the current minutes (0-59)
  let seconds = now.getSeconds(); // Returns the current seconds (0-59)
  let daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let day = daysOfWeek[now.getDay()];
  let currentTime = `${hours}:${minutes}:${seconds} ${day}`;
  document.getElementById("myClock").innerText = currentTime;
}

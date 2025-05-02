//jQuery run once document has loaded
$(document).ready(function () {
  // async function
  async function getISS() {
    // Fetch the information from ISS
    let response = await fetch("http://api.open-notify.org/iss-now.json");
    // Parse the data to JSON
    let data = await response.json();

    // Declare variables based on information received
    let longitude = data.iss_position.longitude;
    let latitude = data.iss_position.latitude;
    let unixTimestamp = data.timestamp;
    // Convert the time
    let milliseconds = unixTimestamp * 1000;
    let dateObject = new Date(milliseconds);
    let dateFormat = dateObject.toLocaleString();

    // Display the information on the web page
    document.getElementById("long").textContent = longitude;
    document.getElementById("lat").textContent = latitude;
    document.getElementById("timeUpdate").textContent = dateFormat;
  }
  //   getISS();
  setInterval(getISS(), 2000);
});

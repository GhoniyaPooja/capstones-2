function init() {
  //get the select list element in a variable
  const statesList = document.querySelector("#statesList");
  const parkDetailesTb = document.querySelector("#parkDetailesTb");

  //loop through states array one at a time
  for (const locations of locationsArray) {
    //create option element
    const option = document.createElement("option");
    option.value = locations;
    option.id = locations;
    option.innerText = locations;
    statesList.appendChild(option);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the dropdown element
  const dropdown = document.getElementById("statesList");
  // Event listener for the change event
  dropdown.addEventListener("change", function () {
    const selectedValue = dropdown.value;
    parkDetailesTb.innerHTML = "";

    const stateParkResults = nationalParksArray.filter(
      (State) => State.State === selectedValue
    );
    if (stateParkResults.length > 0) {
      stateParkResults.forEach((stateParkResult) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${stateParkResult.LocationID}</td>
        <td>${stateParkResult.LocationName}</td>
        <td>${stateParkResult.Address}</td>
        <td>${stateParkResult.City}</td>
        <td>${stateParkResult.State}</td>
        <td>${stateParkResult.ZipCode}</td>
        <td>${stateParkResult.Phone}</td>
        <td>${stateParkResult.Fax}</td>
        <td>${stateParkResult.Latitude}</td>
        <td>${stateParkResult.Longitude}</td>
        <td>${stateParkResult.Location}</td>
      `;
        parkDetailesTb.appendChild(row);
      });
    } else {
      alert("No data found");
    }
  });




  //park type dropdown
  const parkList = document.querySelector("#parkList")

  for (const nationalParkArray of nationalParksArray) {
    //create option element
    const option = document.createElement("option");
    option.value = nationalParkArray.LocationID;
    option.innerText = nationalParkArray.LocationName;
    parkList.appendChild(option);
  }


  
  

});

//wait for html to load and then call init function
window.onload = init;

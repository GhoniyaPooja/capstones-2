function init() {
  //get the select list element in a variable
  const statesList = document.querySelector("#statesList");
  const parkDetailesTb = document.querySelector("#parkDetailesTb");
  const locationOption = document.querySelector("#locationOption");
  const byTypeOption = document.querySelector("#byTypeOption");

  //loop through states array one at a time
  for (const locations of locationsArray) {
    //create option element
    const option = document.createElement("option");
    option.value = locations;
    option.id = locations;
    option.innerText = locations;
    statesList.appendChild(option);
  }

  //park type dropdown
  const parkList = document.querySelector("#parkList");
  const parkTb = document.querySelector("#parkTb");

  for (const nationalParkArray of nationalParksArray) {
    //create option element
    const parkOption = document.createElement("option");
    parkOption.value = nationalParkArray.LocationName;
    parkOption.innerText = nationalParkArray.LocationName;
    parkList.appendChild(parkOption);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  
  const dropdown = document.getElementById("statesList");
  
  dropdown.addEventListener("change", function () {
    const selectedValue = dropdown.value;
    parkDetailesTb.innerHTML = "";

    const stateParkResults = nationalParksArray.filter(
      (State) => State.State === selectedValue
    );






    if (stateParkResults.length > 0) {
      stateParkResults.forEach((stateParkResult) => {
        const row = parkDetailesTb.insertRow();

        let celllocationId = row.insertCell(0);
        celllocationId.innerText = stateParkResult.LocationID;

        let celllocationName = row.insertCell(1);
        celllocationName.innerText = stateParkResult.LocationName;

        let cellAddress = row.insertCell(2);
        cellAddress.innerText = stateParkResult.Address;

        let cellCity = row.insertCell(3);
        cellCity.innerText = stateParkResult.City;

        let cellState = row.insertCell(4);
        cellState.innerText = stateParkResult.State;

        let cellZip = row.insertCell(5);
        cellZip.innerText = stateParkResult.ZipCode;

        let cellPhone = row.insertCell(6);
        cellPhone.innerText = stateParkResult.Phone;

        let cellFax = row.insertCell(7);
        cellFax.innerText = stateParkResult.Fax;

        let cellLatitude = row.insertCell(8);
        cellLatitude.innerText = stateParkResult.Latitude;

        let cellLongituse = row.insertCell(9);
        cellLongituse.innerText = stateParkResult.Longitude;

        let cellLocation = row.insertCell(10);
        cellLocation.innerText = stateParkResult.Location;

        parkDetailesTb.appendChild(row);
      });
    } else {
      parkDetailesTb.append("No data found");
    }
  });


  //////////////////// Park Table

  
  const parkListDropdown = document.getElementById("parkList");
 
  parkListDropdown.addEventListener("change", function () {
    const parkSelectedValue = parkListDropdown.value;
    parkTb.innerHTML = "";

    const parkNameResults = nationalParksArray.filter(
      (LocationName) => LocationName.LocationName == parkSelectedValue
    );
    if (parkNameResults.length > 0) {
      parkNameResults.forEach((parkNameResult) => {
        const row = parkTb.insertRow();


        let cellParkName = row.insertCell(0);
        cellParkName.innerText = parkNameResult.LocationName;

        let cellParkAddress = row.insertCell(1);
        cellParkAddress.innerText = parkNameResult.Address;

        let cellParkCity = row.insertCell(2);
        cellParkCity.innerText = parkNameResult.City;

        let cellParkState = row.insertCell(3);
        cellParkState.innerText = parkNameResult.State;

        let cellParkZip = row.insertCell(4);
        cellParkZip.innerText = parkNameResult.ZipCode;

        let cellParkPhone = row.insertCell(5);
        cellParkPhone.innerText = parkNameResult.Phone;

        let cellParkWebsite = row.insertCell(6);
        cellParkWebsite.innerText = parkNameResult.Visit;


        parkTb.appendChild(parkRow);
      });
    } else {
      parkTb.append("No data found");
    }
  });


  ///redio button
  locationOption.addEventListener("chande", function() {
    if (this.checked) {
      option.style.display = 'block';
      table.style.display = 'block';
    }
  })
  byTypeOption.addEventListener("change", function () {
    if (this.checked) {
      byTypeOption.display = 'block';
      table.style.display = 'table';
    }
  })


});

//wait for html to load and then call init function
window.onload = init;

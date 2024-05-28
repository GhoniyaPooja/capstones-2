function init() {
  //get the select list element in a variable
  const statesList = document.querySelector("#statesList");
  const parkDetailesTb = document.querySelector("#parkDetailesTb");
  const parkList = document.querySelector("#parkList");
  const parkTb = document.querySelector("#parkTb");
  const radiobtnForm = document.getElementById("radiobtnForm");
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

  for (const parkTypesArrayList of parkTypesArray) {
    //create option element
    const parkOption = document.createElement("option");
    parkOption.value = parkTypesArrayList;
    parkOption.innerText = parkTypesArrayList;
    parkList.appendChild(parkOption);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("statesList");

  dropdown.addEventListener("change", function () {
    const selectedValue = dropdown.value;
    parkDetailesTb.innerHTML = "";

    const stateParkResults = nationalParksArray.filter(
      (State) => State.State == selectedValue
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
        cellLocation.innerText = stateParkResult.Location.coordinates;

        if (stateParkResult.Phone) {
          cellPhone.innerText = stateParkResult.Phone;
        } else {
          cellPhone.innerText = "N/A";
        }

        if (stateParkResult.Fax) {
          cellFax.innerText = stateParkResult.Fax;
        } else {
          cellFax.innerText = "N/A";
        }

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

    nationalParksArray.forEach((nationalParkData) => {
      const nationalParkDataMatch =
        nationalParkData.LocationName.match(parkSelectedValue);
      if (nationalParkDataMatch) {
        const row = parkTb.insertRow();

        let cellParkName = row.insertCell(0);
        cellParkName.innerText = nationalParkData.LocationName;

        let cellParkAddress = row.insertCell(1);
        cellParkAddress.innerText = nationalParkData.Address;

        let cellParkCity = row.insertCell(2);
        cellParkCity.innerText = nationalParkData.City;

        let cellParkState = row.insertCell(3);
        cellParkState.innerText = nationalParkData.State;

        let cellParkZip = row.insertCell(4);
        cellParkZip.innerText = nationalParkData.ZipCode;

        let cellParkPhone = row.insertCell(5);
        cellParkPhone.innerText = nationalParkData.Phone;

        let cellParkWebsite = row.insertCell(6);
        // cellParkWebsite.innerText = nationalParkData.Visit;

        if (nationalParkData.Phone) {
          cellParkPhone.innerText = nationalParkData.Phone;
        } else {
          cellParkPhone.innerText = "N/A";
        }

        if (nationalParkData.Visit) {
          const visitLink = document.createElement("a");
          visitLink.href = nationalParkData.Visit;
          visitLink.innerText = "Visit";
          visitLink.target = "_blank";
          cellParkWebsite.appendChild(visitLink);
        } else {
          cellParkWebsite.innerText = "N/A";
        }

        parkTb.appendChild(row);
      }
    });
  });

  ///redio button

  radiobtnForm.addEventListener("change", function (event) {
    parkDetailesTb.innerHTML = "";
    parkTb.innerHTML = "";
    statesList.selectedIndex = 0;
    parkList.selectedIndex = 0;
    if (event.target.name == "toggle") {
      if (event.target.value == "selectStateDiv") {
        selectStateDiv.classList.remove("hidden");
        parkTypeDiv.classList.add("hidden");
      } else if (event.target.value == "parkTypeDiv") {
        selectStateDiv.classList.add("hidden");
        parkTypeDiv.classList.remove("hidden");
      } else if (event.target.value == "none") {
        selectStateDiv.classList.add("hidden");
        parkTypeDiv.classList.add("hidden");
      }
    }
  });
});

//wait for html to load and then call init function
window.onload = init;

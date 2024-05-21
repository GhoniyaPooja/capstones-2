"use strict";

function init() {
  const mountainList = document.querySelector("#mountainList");
  const mountainDetails = document.querySelector("#mountainDetails");
  for (const mountainArray of mountainsArray) {
    //create option element
    const option = document.createElement("option");
    option.value = mountainArray.name;
    option.innerText = mountainArray.name;
    mountainList.appendChild(option);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("mountainList");

  dropdown.addEventListener("change", function () {
    const selectedValue = dropdown.value;
    mountainDetails.innerHTML = "";

    const mountainsDetail = mountainsArray.find(
      (name) => name.name === selectedValue
    );
    //
    if (mountainsDetail) {
      let mountainDiv = document.createElement("div");
      mountainDiv.classList.add("card");

      let mountName = document.createElement("h1");
      mountName.classList.add("card-body");
      mountName.innerText = mountainsDetail.name;
      mountainDiv.appendChild(mountName);

      let mountainImage = document.createElement("img");
      mountainImage.src = "./images/" + mountainsDetail.img;
      mountainImage.alt = mountainsDetail.img;
      mountainImage.alt = mountainsDetail.elevation;
      mountainDiv.appendChild(mountainImage);

      let mountElevation = document.createElement("p");
      mountElevation.classList.add("card-body");
      mountElevation.innerText =
        "Elevation : " +
        mountainsDetail.elevation;
      mountainDiv.appendChild(mountElevation);

      // let mountEffort = document.createElement("p");
      // mountEffort.classList.add("card-body");
      // mountEffort.innerText = "Effort : " + mountainsDetail.effort;
      // mountainDiv.appendChild(mountEffort);

      mountainDetails.append(mountainDiv);
    } else {
    }
  });
});

window.onload = init;

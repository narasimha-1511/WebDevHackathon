const apiKey = "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";

function StartFetch() {
  if (document.getElementById("myInput").value != "") {
    var data = document.getElementById("myInput").value;
    if (data == "india") CALLDATA("India");
    else CALLDATA(data);
  } else {
    document.getElementById("add").innerHTML = "Please Enter the Country Name";
  }
}

function CALLDATA(aaaa) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3.1/name/" + aaaa, true);
  // xhr.setRequestHeader('Authorization', ACCESS_TOKEN);

  xhr.onload = function () {
    var data = this.responseText;

    const obj = JSON.parse(data);

    var datamini = "";
    let a = 0;
    if (aaaa == "india") a = 1;

    datamini += "Name: " + obj[a].name.common + "<br>";
    datamini += "Flag : " + obj[a].flag + "<br>";
    datamini += "Population:  " + obj[a].population + "<br>";
    datamini += "Area:  " + obj[a].area + "<br>";
    datamini += "Capital :" + obj[a].capital + "<br>";

    if (a === 1) {
      datamini += "Currencies : " + obj[a].currencies.INR.name + "<br>";
    }

    datamini += "Time Zone :" + obj[a].timezones + "<br>";
    datamini += "Region :" + obj[a].region + "<br>";
    datamini += "Sub Region: " + obj[a].subregion + "<br>";

    document.getElementsByTagName("a")[0].href = obj[a].maps.googleMaps;
    document.getElementsByTagName("a")[1].href = obj[a].maps.openStreetMaps;

    document.getElementById("add").innerHTML = datamini;

    //Barcode

    document.getElementById("imggoogle").src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      obj[a].maps.googleMaps;
    document.getElementById("imgstreets").src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      obj[a].maps.openStreetMaps;
  };
  xhr.send();
}

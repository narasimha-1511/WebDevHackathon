// document.getElementById("ad").innerHTML="dgfgfgfgfgf";

console.log("Hello");


const apiKey = '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';
// var aa = (String)();
// api key of chat gpt
function newElement(){
    if(document.getElementById("myInput").value!=""){
        CALLDATA(document.getElementById("myInput").value);
    }else{
        document.getElementById('ad').innerHTML = "Please Enter the Country Name";
    }
}
var ndata = ["population","capital","area","currencies","maps","timezones","languages","subregion","name","flag","region"];

function CALLDATA(aaaa){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/name/'+aaaa, true);
    // xhr.setRequestHeader('Authorization', ACCESS_TOKEN);
    xhr.onload = function () {
        // if(this.responseText.length){
        //     document.getElementById('ad').innerHTML = "Please Enter the Country Name Corerectly";
        // }
        var data = this.responseText;

        const obj = JSON.parse(data);

        // console.log(obj)
        
        
        var datamini = "";
        //  for(var i=0;i<ndata.length;i++){
            if(aaaa=="india"){
                datamini += "Name: " +obj[1].name.common+"<br>";
            datamini += "Flag : " +obj[1].flag+"<br>";
            datamini += "Population:  " +obj[1].population+"<br>";
            datamini += "Area:  " +obj[1].area+"<br>";
            datamini += "Capital :" +obj[1].capital+"<br>";
            datamini += "Currencies : " +obj[1].currencies.INR.name+"<br>";
            // datamini += "Google Maps link : " +obj[1].maps.googleMaps+"<br>";
            // datamini += "Open Street Maps link : " +obj[1].maps.openStreetMaps+"<br>";
            datamini += "Time Zone :" +obj[1].timezones+"<br>";
            // datamini += "" +obj[1].languages+"<br>";
            datamini += "Region :" +obj[1].region+"<br>";
            datamini += "Sub Region: " +obj[1].subregion+"<br>";
           
            document.getElementsByTagName("a")[0].href=obj[1].maps.googleMaps;
            document.getElementsByTagName('a')[1].href=obj[1].maps.openStreetMaps;

            }else{
                datamini += "Name : " +obj[0].name.common+"<br>";
                datamini += "Flag : " +obj[0].flag+"<br>";
            datamini += "Population:  " +obj[0].population+"<br>";
            datamini += "Area:  " +obj[0].area+"<br>";
            datamini += "Capital :" +obj[0].capital+"<br>";
            // datamini += "" +obj[0].currencies.forEach(element => {
                // datamini+= 
            // });+"<br>";
            // datamini += "Google Maps link : " +obj[0].maps.googleMaps+"<br>";
            // datamini += "Open Street Maps link : " +obj[0].maps.openStreetMaps+"<br>";
            datamini += "Timezone : " +obj[0].timezones+"<br>";
            // datamini += "" +obj[0].languages+"<br>";
            datamini += "Region :" +obj[0].region+"<br>";
            datamini += "Sub Region: " +obj[0].subregion+"<br>";
         
            document.getElementsByTagName("a")[0].href=obj[0].maps.googleMaps;
            document.getElementsByTagName('a')[1].href=obj[0].maps.openStreetMaps;
            }
            
            

        //  }
         
        

        
        document.getElementById('add').innerHTML= datamini;
        document.getElementById("imggoogle").src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+obj[1].maps.googleMaps;
            document.getElementById('imgstreets').src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+obj[1].maps.openStreetMaps;
        
    }
    xhr.send();}

    

  


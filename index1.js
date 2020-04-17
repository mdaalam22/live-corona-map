

var nepData = document.getElementById('nepData');
var worldData = document.getElementById('worldData');


//world data
var wtotalCases =0;
var totalRecovered =0;
var totalActive =0;
var totalDeaths=0;

function updateMap(){
    var wtotalCases =0;
    var totalRecovered =0;
    var totalActive =0;
    var totalDeaths=0;

    fetch("https://corona.lmao.ninja/v2/countries")
    .then(response => response.json())
    .then(data => {
        console.log("data loaded");
        // console.log(data);
        data.forEach(element => {
            latitude = element.countryInfo.lat;
            longitude = element.countryInfo.long;
            // console.log(longitude);

            // mark on th map
            // var marker = new mapboxgl.Marker({
            //     draggable: false,
            //     color:"red"
            //     })
            //     .setLngLat([longitude, latitude])
            //     .addTo(map);
              let country= "USA";
              if(latitude==28 && longitude==84){
               
                  let NepCase = element.cases;
                  let recovered = element.recovered;
                  let activeCase = element.active;
                  let death = element.deaths;

                  let html = `<h3 style="color:red; padding:8px; font-weight:600; letter-spacing:4px;">Nepal Report </h3>
                             <hr>
                              <p style="color:green; padding:8px; font-weight:600;">Total Cases : ${NepCase}</p>
                              <p style="color:green; padding:8px; font-weight:600;">Recovered : ${recovered}</p>
                              <p style="color:green; padding:8px; font-weight:600;">Active Cases : ${activeCase}</p>
                              <p style="color:green; padding:8px; font-weight:600;">Deaths : ${death}</p>
                            `;
                      nepData.innerHTML = html;      
              }
            var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<p >Country :${element.country} </p>
                <p>Total Cases :${element.cases} </p>
                <p>Recovered :${element.recovered}</p>
                <p>Active Cases :${element.active}</p>
                <p>Deaths :${element.deaths}</p>
                 `
                );
                 
                // create DOM element for the marker
                //var el = marker;
                 
                // create the marker
                new mapboxgl.Marker({
                    color:"red"
                })
                .setLngLat([longitude, latitude])
                .setPopup(popup) // sets a popup on this marker
                .addTo(map);


                
              //countion;
              wtotalCases += element.cases;
              totalRecovered+=element.recovered;
              totalActive+=element.active;
              totalDeaths+=element.deaths;

              let whtml = `<h3 style="color:red; padding:8px; font-weight:600; letter-spacing:4px;">World Report </h3>
              <hr>
               <p style="color:green; padding:8px; font-weight:600;">Total Cases : ${wtotalCases}</p>
               <p style="color:green; padding:8px; font-weight:600;">Recovered : ${totalRecovered}</p>
               <p style="color:green; padding:8px; font-weight:600;">Active Cases : ${totalActive}</p>
               <p style="color:green; padding:8px; font-weight:600;">Deaths : ${totalDeaths}</p>
             `;
          worldData.innerHTML = whtml;        
          
        });
        


    })
    
}
updateMap();

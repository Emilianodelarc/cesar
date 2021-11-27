// alert(
//   "In order to properly view this page you need a CORS plug-in as it uses a third party API with limited access"
// );

let Perks = []

$('#perksChild').append($('<img>').attr({src:'../imgHeader/loading.gif', id:"loading"}))

// Perks.length == 0 && alert('Debera instalar Plugins CORS') 

setTimeout(() => {
    $.ajax({
    type: "GET",
    url: "https://dbd-api.herokuapp.com/perks?lang=en",
    dataType: "json",
    success: function (data) {
      data.forEach((perks) => {
        Perks.push(perks)
        localStorage.setItem('perks', JSON.stringify(Perks))
        $("#perksChild").append(`<div class="card mb-3" style="max-width: 540px;">
                                  <div class="row g-0">
                                    <div class="col-md-4">
                                      <img src=${perks.icon} class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h3 class="card-title">${perks.perk_name}</h3>
                                        <p class="card-text">${perks.description}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                  `);
      });
      $('#loading').css('display', 'none')
    },
  });
  
}, 4000);


/*var settings = {
          'cache': false,
          'dataType': "jsonp",
          "async": true,
          "crossDomain": true,
          "url": "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=place_id:"+me.originPlaceId+"&destinations=place_id:"+me.destinationPlaceId+"&region=ng&units=metric&key=mykey",
          "method": "GET",
          "headers": {
              "accept": "application/json",
              "Access-Control-Allow-Origin":"*"
          }
      }

      $.ajax(settings).done(function (response) {
          console.log(response);

      });
*/

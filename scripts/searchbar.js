let resPerks = JSON.parse(localStorage.getItem('perks'))

$("#search").keyup(function (e) {
  let variable = $(e.target).val().toLowerCase();
  console.log(variable);
  let dato = resPerks.filter(el => el.perk_name.toLowerCase().includes(variable))
  console.log(dato);
  $("#perksChild").empty();
  dato.forEach(perks => {
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
});

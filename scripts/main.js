let baseCharsSelected = 0; // Variable bandera utilizada en el if para determinar los 2 casos del click en la imagen.
let totalPrice = 0; // Variable utilizada para contabilizar la cantidad de dinero que acumula el usuario en su selección.
let totalHours = 0; // Variable utilizada para contabilizar las horas de juego que acumula el usuario en su selección.
let baseGamePrice = 690; //Si el juego base cambia de precio en algún momento, actualizar esta variable a su precio correcto.
//Impresión de las cards correspondientes al paquete base del juego.

localStorage.clear();

for (const character of baseGameCharacters) {
  
  $("#cards")
    .append(`<div><div class="cardsBase ${character.color} m-3" id=1${character.id}>
  <img src= ${character.img} class="clickBase" id=${character.id} />
  <p class = "nombrePersonajes">  ${character.name} </p>
  <p class = "price${character.id}">Bundle price: $${baseGamePrice} </p></div></div>`);
  $(`.price${character.id}`).css('margin-bottom','-100px')
  $(`#1${character.id}`).mouseover(function () {
    $(`#${character.id}`).css('opacity','0.3')
    // $('.nombrePersonajes').css('display', 'block')
    $(`.price${character.id}`).css({ 'color': 'white',
      'text-align': 'center',
      'position': 'relative',
      'top':'-112px',
      'margin-bottom':'-100px',
      'display':'block'})
  })
  $(`#1${character.id}`).mouseout(function () {
    $(`#${character.id}`).css('opacity','1')
    // $('.nombrePersonajes').css('display', 'none')
    $(`.price${character.id}`).css('margin-bottom','-100px')
    $(`.price${character.id}`).css('display','none')
  })

}

$(".clickBase").on("click", clickOnBase); //Llamado a la función para agregar/quitar los personajes base del cálculo.
/*$(".cardsBase").on("mouseover", description);*/ //Llamado a la función que muestra la historia del personaje al hacer mouse over

function clickOnBase(e) {
  let personajeClickeado = baseGameCharacters.find((personaje) => personaje.id == e.target.id);

  console.log(personajeClickeado);

  if (personajeClickeado.color == "colorPago") {
    $(".colorPago");
  }
  if (baseCharsSelected == 0) {
    console.log(e.target);
    totalPrice = totalPrice + baseGamePrice;
    console.log(totalPrice);
    baseCharsSelected = 1;
    $(".color").css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else {
    console.log(e.target);
    $(".color").css("box-shadow", "none");
    totalPrice = totalPrice - baseGamePrice;
    console.log(totalPrice);
    baseCharsSelected = 0;
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  }
}

for (const character of paidOnlyCharacters) {
  $("#paidOnly").append(`<div><div class="cardsPaid m-3" id=2${character.id}>
  <img src= ${character.img} class="clickPaid" id=${character.id} />
  <p class = "nombrePersonajes">  ${character.name} </p>
  <p class = "price${character.id}">Price: $${character.price} </p></div></div>`);

  $(`#2${character.id}`).mouseover(function () {
    $(`#${character.id}`).css('opacity','0.3')
    // $('.nombrePersonajes').css('display', 'block')
    $(`.price${character.id}`).css({ 'color': 'white',
      'text-align': 'center',
      'position': 'relative',
      'top':'-112px',
      'margin-bottom':'-100px',
      'display':'block'})
  })
  $(`#2${character.id}`).mouseout(function () {
    $(`#${character.id}`).css('opacity','1')
    // $('.nombrePersonajes').css('display', 'none')
    $(`.price${character.id}`).css('display','none')
  })
}

$(".clickPaid").on("click", clickOnPaid);

function clickOnPaid(e) {
  let personajePagoClickeado = paidOnlyCharacters.find(
    (personaje) => personaje.id == e.target.id
  );
  if (personajePagoClickeado.selected == "0") {
    console.log(e.target);
    totalPrice = totalPrice + personajePagoClickeado.price;
    console.log(totalPrice);
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    personajePagoClickeado.selected = "1";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else {
    console.log(e.target);
    $(e.target).css("box-shadow", "none");
    totalPrice = totalPrice - personajePagoClickeado.price;
    console.log(totalPrice);
    personajePagoClickeado.selected = "0";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  }
}

for (const character of grindCharacters) {
  $("#grindeable").append(`<div><div class="cardsPaid m-3" id=3${character.id}>
  <img src= ${character.img} class="clickGrind" id=${character.id} />
  <p class = "nombrePersonajes">  ${character.name} </p>
  <p class = "price${character.id}">or Hours: ${character.hours}</p>
  <p class = "price${character.id}">Price: $${character.price}</p></div></div>`);

  $(`#3${character.id}`).mouseover(function () {
    $(`#${character.id}`).css('opacity','0.3')
    // $('.nombrePersonajes').css('display', 'block')
    $(`.price${character.id}`).css({ 'color': 'white',
      'text-align': 'center',
      'position': 'relative',
      'top':'-112px',
      'margin-bottom':'-100px',
      'display':'block'})
  })
  $(`#3${character.id}`).mouseout(function () {
    $(`#${character.id}`).css('opacity','1')
    // $('.nombrePersonajes').css('display', 'none')
    $(`.price${character.id}`).css('display','none')
  })
}

$(".clickGrind").on("click", clickOnGrind);

function clickOnGrind(e) {
  let personajeGrindClickeado = grindCharacters.find(
    (personaje) => personaje.id == e.target.id
  );
  if (personajeGrindClickeado.selected == "0") {
    console.log(e.target);
    totalPrice = totalPrice + personajeGrindClickeado.price;
    console.log(totalPrice);
    console.log(totalHours);
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    personajeGrindClickeado.selected = "1";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else if (personajeGrindClickeado.selected == "1") {
    console.log(e.target);
    totalPrice = totalPrice - personajeGrindClickeado.price;
    totalHours = totalHours + personajeGrindClickeado.hours;
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(160, 44, 227,0.75)");
    console.log(totalPrice);
    console.log(totalHours);
    personajeGrindClickeado.selected = "2";
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("totalHours", totalHours);
    localStorageRefresh();
  } else {
    console.log(e.target);
    $(e.target).css("box-shadow", "none");
    totalHours = totalHours - personajeGrindClickeado.hours;
    console.log(totalPrice);
    console.log(totalHours);
    personajeGrindClickeado.selected = "0";
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("totalHours", totalHours);
    localStorageRefresh();
  }
}

$("#botonModal").append(
  `<div>
        <button type='button' class="btn btn-warning btn-dark resultsButton" data-bs-toggle="modal" data-bs-target="#modalResults">Sacrifice Souls to the Entity (Calculate Results)</button>
      </div>  

      <div class="modal fade" id="modalResults" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title">You will need the following to feed the entity...</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <p>"You will have to spend <span id="finalPrice">${totalPrice}</span> pesos"</p>
          <p>"You will have to run from the killers or kill for about <span id="finalHours">${totalHours}</span>"</p>
          <p>Dare to get into the fog?</p>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="reset">Close</button>                                                            
    </div>`
);

function localStorageRefresh() {
  let priceTotal = localStorage.getItem("totalPrice");
  console.log(priceTotal);
  let finalHours = localStorage.getItem("totalHours");
  //console.log(finalHours);
  $("#finalPrice").html(priceTotal);
  $("#finalHours").html(finalHours);
}

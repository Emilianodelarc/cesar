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
  <p class = "price${character.id}" id='priceS'>Bundle price: $${baseGamePrice} </p></div></div>`);

  $(`.price${character.id}`).hide()

  $(`#1${character.id}`).mouseover(function () {
    $(`#${character.id}`).css('opacity','0.3')
    $(`.price${character.id}`).show()
  })
  $(`#1${character.id}`).mouseout(function () {
    $(`#${character.id}`).css('opacity','1')
    $(`.price${character.id}`).hide()
  })

}

$(".clickBase").on("click", clickOnBase); //Llamado a la función para agregar/quitar los personajes base del cálculo.
/*$(".cardsBase").on("mouseover", description);*/ //Llamado a la función que muestra la historia del personaje al hacer mouse over

function clickOnBase(e) {
  let personajeClickeado = baseGameCharacters.find((personaje) => personaje.id == e.target.id);

  if (personajeClickeado.color == "colorPago") {
    $(".colorPago");
  }
  if (baseCharsSelected == 0) {
    totalPrice = totalPrice + baseGamePrice;
    baseCharsSelected = 1;
    $(".color").css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else {
    $(".color").css("box-shadow", "none");
    totalPrice = totalPrice - baseGamePrice;
    baseCharsSelected = 0;
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  }
}

for (const character of paidOnlyCharacters) {
  $("#paidOnly").append(`<div><div class="cardsPaid m-3" id=2${character.id}>
  <img src= ${character.img} class="clickPaid" id=${character.id} />
  <p class = "nombrePersonajes">  ${character.name} </p>
  <p class = "price${character.id}" id='priceS'>Price: $${character.price} </p></div></div>`);

  $(`.price${character.id}`).hide()

  $(`#2${character.id}`).mouseover(function () {
    $(`#${character.id}`).css('opacity','0.3')
    $(`.price${character.id}`).show()
  })
  $(`#2${character.id}`).mouseout(function () {
    $(`#${character.id}`).css('opacity','1')
    $(`.price${character.id}`).hide()
  })
}

$(".clickPaid").on("click", clickOnPaid);

function clickOnPaid(e) {
  let personajePagoClickeado = paidOnlyCharacters.find(
    (personaje) => personaje.id == e.target.id
  );
  if (personajePagoClickeado.selected == "0") {
    totalPrice = totalPrice + personajePagoClickeado.price;
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    personajePagoClickeado.selected = "1";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else {
    $(e.target).css("box-shadow", "none");
    totalPrice = totalPrice - personajePagoClickeado.price;
    personajePagoClickeado.selected = "0";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  }
}

for (const character of grindCharacters) {
  $("#grindeable").append(`<div><div class="cardsPaid m-3" id=3${character.id}>
  <img src= ${character.img} class="clickGrind" id=${character.id} />
  <p class = "nombrePersonajes">  ${character.name} </p>
  <p class = "price${character.id}" id='priceS'>or Hours: ${character.hours}</p>
  <p class = "price${character.id}" id='priceS'>Price: $${character.price}</p></div></div>`);

  $(`.price${character.id}`).hide()

  $(`#3${character.id}`).mouseover(function () {
    $(`#${character.id}`).css('opacity','0.3')
    $(`.price${character.id}`).show()
  })
  $(`#3${character.id}`).mouseout(function () {
    $(`#${character.id}`).css('opacity','1')
    $(`.price${character.id}`).hide()
  })
}

$(".clickGrind").on("click", clickOnGrind);

function clickOnGrind(e) {
  let personajeGrindClickeado = grindCharacters.find(
    (personaje) => personaje.id == e.target.id
  );
  if (personajeGrindClickeado.selected == "0") {
    totalPrice = totalPrice + personajeGrindClickeado.price;
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    personajeGrindClickeado.selected = "1";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else if (personajeGrindClickeado.selected == "1") {
    totalPrice = totalPrice - personajeGrindClickeado.price;
    totalHours = totalHours + personajeGrindClickeado.hours;
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(160, 44, 227,0.75)");
    personajeGrindClickeado.selected = "2";
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("totalHours", totalHours);
    localStorageRefresh();
  } else {
    $(e.target).css("box-shadow", "none");
    totalHours = totalHours - personajeGrindClickeado.hours;
    personajeGrindClickeado.selected = "0";
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("totalHours", totalHours);
    localStorageRefresh();
  }
}

$("#botonModal").append(
  `<div>
      <button type='button' class="btn btn-warning btn-dark resultsButton" data-bs-toggle="modal" data-bs-target="#modalResults">
        <img src="../imgHeader/iconPerks.png" class="iconModal">
        Sacrifice Souls to the Entity (Calculate Results)</button>
      </div>  

      <div class="modal fade" id="modalResults" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content result">
          <div class="modal-header">
          <img src="../imgHeader/LogoResults.png" class="imgModal2">
          <h5 class="modal-title modal2">You will need the following to feed the entity...</h5>
          <button type="button" class="btn-close close2" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body modal2B">
          <p>"You will have to spend <span id="finalPrice">${totalPrice}</span> pesos"</p>
          <p>"You will have to run from the killers or kill for about <span id="finalHours">${totalHours}</span>"</p>
          <p>Dare to get into the fog?</p>
      </div>                                                        
    </div>`
);

function localStorageRefresh() {
  let priceTotal = localStorage.getItem("totalPrice");
  let finalHours = localStorage.getItem("totalHours");
  $("#finalPrice").html(priceTotal);
  $("#finalHours").html(finalHours);
}

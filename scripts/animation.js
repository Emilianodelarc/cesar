$('#header, #main').hide()
setTimeout(() => {
    $('#imgLoading').fadeOut()
    $('#header, #main').fadeIn(3000)
}, 3000);


// $(document).ready(function () {
//     setTimeout(() => {
//         $('#imgHeader').empty()
//         $('#imgHeader').append($('<img>').attr({src:'../imgHeader/prueba1.png'}));
//         // $('#imgHeader').append($('<img>').attr({src:'../imgHeader/smoke.png'}));
//         // $('#imgHeader').append($('<img>').attr({src:'../imgHeader/logo1.png'}));
//         $('#imgHeader').css('background-image','url(../imgHeader/fondo1.jpg)')
//     }, 2000);
// //     setTimeout(() => {
// //         $('#imgHeader').empty()
// //     }, 2000);
// })
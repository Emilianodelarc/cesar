$('#header, #main').hide()
setTimeout(() => {
    $('#imgLoading').fadeOut()
    $('#header, #main').fadeIn(3000)
}, 3000);
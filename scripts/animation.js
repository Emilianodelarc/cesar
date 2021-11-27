
if(sessionStorage.img){
    $('#imgLoading').hide()
}else{
   $('#header, #main').hide()
    setTimeout(() => {
        $('#imgLoading').fadeOut()
        $('#header, #main').fadeIn(3000)
        sessionStorage.setItem('img', true)
    }, 3000); 
}





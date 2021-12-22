const boton = document.querySelector('#boton')

boton.addEventListener('click', function(){
    Notification.requestPermission()
    .then(resultado => console.log('El resultado es: ', resultado))
})





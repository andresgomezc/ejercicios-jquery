$('#img1').hover(function() {
    $('#img1').attr('src', 'img/rio.jpg');  //Cuando el ratón pasa por encima
},
function() {
    $('#img1').attr('src', 'img/arbol.jpg');//Cuando el ratón sale de la imagen
});
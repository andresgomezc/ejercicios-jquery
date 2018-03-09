$('#elem1').hover(function() {
    $('img').attr('src', 'img/arbol.jpg');
    $('#elem1').addClass("destacar");
},
function() {
    $('img').attr('src', 'img/blanco.jpg');
    $('#elem1').removeClass("destacar");
});

$('#elem2').hover(function() {
    $('img').attr('src', 'img/lago.jpg');
    $('#elem2').addClass("destacar");
},
function() {
    $('img').attr('src', 'img/blanco.jpg');
    $('#elem2').removeClass("destacar");
});

$('#elem3').hover(function() {
    $('img').attr('src', 'img/rio.jpg');
    $('#elem3').addClass("destacar");
},
function() {
    $('img').attr('src', 'img/blanco.jpg');
    $('#elem3').removeClass("destacar");
});

$('#elem4').hover(function() {
    $('img').attr('src', 'img/sol.jpg');
    $('#elem4').addClass("destacar");
},
function() {
    $('img').attr('src', 'img/blanco.jpg');
    $('#elem4').removeClass("destacar");
});
/**Filtro de calendario */
//Calendario
$(function () {
    $.datepicker.setDefaults($.datepicker.regional["es"]);
    $("#datepicker").datepicker({
        firstDay: 1
    });
});

$("#datepicker").datepicker().show();


var a;
var b;

/**Filtro de precio */
/* Valor del rango desde*/

var sliderDesde = document.getElementById("desde");

var outputDesde = document.getElementById("desdeValor");
outputDesde.innerHTML = sliderDesde.value;

sliderDesde.oninput = function () {
    a = this.value;
    outputDesde.innerHTML = a;
}


/* Valor del rango hasta*/
var sliderHasta = document.getElementById("hasta");
var outputHasta = document.getElementById("hastaValor");
outputHasta.innerHTML = sliderHasta.value;

sliderHasta.oninput = function () { 
a = this.value;
    outputHasta.innerHTML = a;
}

var boton = document.querySelector(".filtroRango");
console.log(boton);
boton.addEventListener("click", function(e){
    e.preventDefault;
    location.href ="/transporte/Alquiler_Vehiculos/?min="+sliderDesde.value + "&max=" + sliderHasta.value;
    console.log("Hola");
});

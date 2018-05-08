/* Valor del rango desde*/

var sliderDesde = document.getElementById("desde");
var outputDesde = document.getElementById("desdeValor");
outputDesde.innerHTML = sliderDesde.value;

sliderDesde.oninput = function () {
    outputDesde.innerHTML = this.value;
}


/* Valor del rango hasta*/
var sliderHasta = document.getElementById("hasta");
var outputHasta = document.getElementById("hastaValor");
outputHasta.innerHTML = sliderHasta.value;

sliderHasta.oninput = function () { 
    outputHasta.innerHTML = this.value;
}

var boton = document.querySelector(".filtroRango");
console.log(boton);
boton.addEventListener("click", function(e){
    e.preventDefault;
    location.href ="/transporte/Alquiler_Vehiculos/?min="+sliderDesde.value + "&max=" + sliderHasta.value;
    console.log("Hola");
});

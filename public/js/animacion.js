//Zoom in del logo  
var timeline = anime.timeline();
timeline.add({
    targets: '#LogoLapiz',
    scale: '1',
    translateY: "20vh",
    opacity: 0,
    duration: 500
  })
  .add({
    targets: '#LogoLapiz',
    scale: "1",
    opacity: 1,
    translateY: "20vh",
    duration: 3000,
    complete: function (anim) {
      desplyLogo();
    }
  });


//Movimiento del logo hacia arriba
function desplyLogo() {
  var timelinea = anime.timeline();

  timelinea.add({
      targets: '#LogoLapiz',
      scale: '1',
    })
    .add({
      targets: '#LogoLapiz',
      scale: '0.8',
      duration: 2000,
      complete: function (anim) {
        somosIn();
        delay: 300;
        hacemosIn();
        delay: 500;

        productos();
        tproductos();

      }
    });
}

//Aparicion del quienes somos hacia arriba
function somosIn() {

  var somos = anime.timeline();
  somos.add({
      targets: '#QuienesSomos',
      translateY: "0",
      opacity: "0",
    })
    .add({
      targets: '#QuienesSomos',
      translateY: "-10vh",
      opacity: "1",
      duration: 5000,
      complete: function (anim) {}
    });

}

//Desaparicion del quienes somos

function somosOut() {
  var somos = anime.timeline();
  somos.add({
      targets: '#QuienesSomos',
      translateY: "-10vh",
      opacity: "1",
    })
    .add({
      targets: '#QuienesSomos',
      translateY: "-30vh",
      opacity: "0",
      duration: 2000,
      complete: function (anim) {

      }
    })
}

//Aparicion del que hacemos hacia arriba
function hacemosIn() {

  var somos = anime.timeline();
  somos.add({
      targets: '#QueHacemos',
      translateY: "0",
      opacity: "0",
    })
    .add({
      targets: '#QueHacemos',
      translateY: "-10vh",
      opacity: "1",
      duration: 5000,
      complete: function (anim) {}
    });

}

//Desaparicion del que hacemos

function hacemosOut() {
  var somos = anime.timeline();
  somos.add({
      targets: '#QueHacemos',
      translateY: "-10vh",
      opacity: "1",
    })
    .add({
      targets: '#QueHacemos',
      translateY: "-30vh",
      opacity: "0",
      duration: 2000,
      complete: function (anim) {}
    })
}

//Productos
function productos() {

  var prod = anime.timeline();
  prod.add({
      targets: '#productos article div',
      translateY: "2vh",
      direction: "alternate",
      opacity: 0,
      duration: function (el, i, l) {
        return 500 + (i * 200);
      }
    })
    .add({
      targets: '#productos article div',
      translateY: "0",
      direction: "alternate",
      opacity: 1,
      duration: function (el, i, l) {
        return 500 + (i * 200);
      },
    });
}

//Productos salir
function productosOut() {

  var prod = anime.timeline();
  prod.add({
      targets: '#productos article div',
      translateY: "0",
      direction: "alternate",
      opacity: 1,
      duration: function (el, i, l) {
        return 500 + (i * 200);
      }
    })
    .add({
      targets: '#productos article div',
      translateY: "-6vh",
      direction: "alternate",
      opacity: 0,
      duration: function (el, i, l) {
        return 500 + (i * 200);
      },
    });
}

//Productos
function tproductos() {

  var prod = anime.timeline();
  prod.add({
      targets: '#tituloProductos',
      translateY: "2vh",
      direction: "alternate",
      opacity: 0,
      duration: function (el, i, l) {
        return 1000 + (i * 200);
      }
    })
    .add({
      targets: '#tituloProductos',
      translateY: "0",
      direction: "alternate",
      opacity: 1,
      duration: function (el, i, l) {
        return 1000 + (i * 200);
      }
    });
}

function tproductosOut() {
  var prod = anime.timeline();
  prod.add({
      targets: '#tituloProductos',
      translateY: "1",
      direction: "alternate",
      opacity: 0,
      duration: function (el, i, l) {
        return 1000 + (i * 200);
      }
    })
    .add({
      targets: '#tituloProductos',
      translateY: "2vh",
      direction: "alternate",
      opacity: 0,
      duration: function (el, i, l) {
        return 1000 + (i * 200);
      }
    });
}


var transporte = document.getElementById("transporte");
var scouting = document.getElementById("#scouting");
var casting = document.getElementById("#casting");
var decoracion = document.getElementById("#decoracion");
var otros = document.getElementById("#otros");

transporte.addEventListener('click', function (e) {
  e.preventDefault();
  salir();
  infoTransporte();

});

function salir() {
  productosOut();
  tproductosOut();
  somosOut();
  hacemosOut();
}


function infoTransporte(e){
e.preventDefault();
}

var carro = anime.timeline();
carro.add({
  targets: '#transporte',
  translateX: 250,
  translateY: -500,
  easing: [.91,-0.54,.29,1.56],
  opacity: 0
})
.add({
  targets: '#transporte',
  translateX: 250,
  translateY: -500,
  easing: [.91,-0.54,.29,1.56],
  opacity: 1
});
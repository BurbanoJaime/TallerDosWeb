//Zoom in del logo
var timeline = anime.timeline();
timeline.add({
    targets: '#LogoLapiz',
    scale: '0',
    opacity: 0,
    duration: 500
  })
  .add({
    targets: '#LogoLapiz',
    scale: ".8",
    opacity: 1,
    duration: 5500,
    complete: function (anim) {
      desplyLogo();
    }
  });

//Movimiento del logo hacia arriba
function desplyLogo() {
  var timelinea = anime.timeline();

  timelinea.add({
      targets: '#LogoLapiz',
      scale: '.8',
      translateY: "0",
    })
    .add({
      targets: '#LogoLapiz',
      scale: '0.5',
      translateY: "-30vh",
      duration: 2000,
      complete: function (anim) {
        somosIn();
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
      complete: function (anim) {
        somosOut();
      }
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
      complete: function(anim){
        hacemosIn();
      }
    })
}

//Aparicion del que hacemos hacia arriba
function hacemosIn() {

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
      complete: function (anim) {
        hacemosOut();
      }
    });

}

//Desaparicion del que hacemos

function hacemosOut() {
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
      duration: 2000
    })
}
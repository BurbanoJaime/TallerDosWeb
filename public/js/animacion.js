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
        hacemosIn();
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
      complete: function (anim) {
      }
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
      duration: 2000
    })
}
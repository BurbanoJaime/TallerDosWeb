  
 //Zoom in del logo
 var timeline = anime.timeline();
  timeline.add({
	targets: '.animacionLogo #logoAnimado',
	scale: '0',
	opacity: 0,
	duration: 500
})
.add({
	targets: '.animacionLogo #logoAnimado',
	scale: 1,
	opacity: 1,
	duration: 5500
});

//Movimiento del lado al lado izquierdo
var timelinea = anime.timeline();
timelinea.add({
  targets: '.animacionLogo #logoAnimado',
  translateX: '0',
  duration: 500
})
.add({
  targets: '.animacionLogo #logoAnimado',
  translateX: '-20vw',
  duration: 5500,
  delay: 4000
});
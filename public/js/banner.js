var movimientoBanner = setInterval(cambiarBanner, 5000);
var banner = ["/img/banner/banner1.jpg", "/img/banner/banner2.jpg", "/img/banner/banner3.jpg"];
banner.iterador = 1;
function cambiarBanner() {
    var ima = document.querySelector(".banner");

    switch (banner.iterador) {
        case 0:
            ima.style.backgroundImage = "url(" + banner[0] + ")";
            banner.iterador++;
            break;

        case 1:
            ima.style.backgroundImage = "url(" + banner[1] + ")";
            ima.style.backgroundPosition = "0px, -180px";
            banner.iterador++;
            break;

        case 2:
            ima.style.backgroundImage = "url(" + banner[2] + ")";
            banner.iterador++;
            break;
    }

    if (banner.iterador > 2) {
        banner.iterador = 0;
    }
}

console.log(banner.iterador);
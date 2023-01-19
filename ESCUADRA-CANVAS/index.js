
let $pantalla = document.querySelector("canvas")

let $pencil = $pantalla.getContext("2d")


$pencil.beginPath();
$pencil.moveTo(50,50)
$pencil.lineTo(50,400)
$pencil.lineTo(400,400)
$pencil.fill();


$pencil.fillStyle="white"
$pencil.beginPath();
$pencil.moveTo(100,175)
$pencil.lineTo(100,350)
$pencil.lineTo(275,350)
$pencil.fill();
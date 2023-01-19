
let $pantalla = document.querySelector("canvas");

let $pencil = $pantalla.getContext("2d")

$pencil.fillStyle="lightblue"

$pencil.fillRect(0,0,600,400)

function dibujarCirculo(x,y,color){


    $pencil.fillStyle=color
    $pencil.beginPath()
    $pencil.arc(x,y,30,0,2*3.14)
    $pencil.fill()

}


dibujarCirculo(300,200,"red")


dibujarCirculo(360,200,"black")
dibujarCirculo(240,200,"orange")
dibujarCirculo(300,260,"yellow")
dibujarCirculo(300,140,"blue")

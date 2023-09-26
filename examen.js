
var nom=prompt("ingrese su nombre")
alert(" Buenos días ", nom)
var preg1=prompt("¿Cuánta agua hay en la Tierra?\nA:Alrededor de un 41% de la superficie terrestre es agua.\nB:Alrededor de un 51% de la superficie terrestre es agua\nC:Alrededor de un 71% de la superficie terrestre es agua ")
if(preg1=="C"){
    preg1=1
}
else{
    preg1=0
    }

   var preg2=prompt("¿Qué océano es el más grande?\nA:El Pacífico\nB:El Atlántico\nC:El Índico")
   if(preg2=="A"){
   preg2=1
   }
   else{
    preg2=0
    }

    var preg3=prompt("¿Cuánto mide la parte más profunda de los Océanos?\nA:11 Km\nB:23 Km\nC:31 Km")
   if(preg2=="A"){
   preg3=1
   }
   else{
    preg3=0
    }
    var total=preg1+preg2+preg3
    if (total>1){
        document.write(nom,"Lo has hecho bien", nom) }
        else{
            document.write(nom," vuelve a intentarlo")
        }
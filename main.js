var x;
var y;
var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var mapita = [];
for (var i = 0; i < mapa.length; i++){
  mapita[i]=[];
  for (var j = 0; j < mapa[0].length; j++) {
    mapita[i][j]=mapa[i][j];
  }
}
var mapa2=[
"****************",
"*______________*",
"*______________*",
"*______________*",
"*______________*",
"*______________*",
"*______________*",
"*______________*",
"*______________*",
"****************"];

var mapit = [];
for (var i = 0; i < mapa2.length; i++){
  mapit[i]=[];
  for (var j = 0; j < mapa2[0].length; j++) {
    mapit[i][j]=mapa2[i][j];
  }
}

function generarMapa(mapita, imagen) {
  laberinto.innerHTML='';
  var tabla = document.createElement('table');
  tabla.setAttribute("class","celdita");
  for (var i = 0; i < mapita.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < mapita[i].length; j++) {
        var celda = document.createElement('td');
        if(mapita[i][j]=='*'){
          celda.setAttribute("class","pared");
        } else if(mapita[i][j]=='o'){
          x=j;
          y=i;
          celda.setAttribute("class", imagen);
        } else if (mapita[i][j]=='W') {
          xfinal=j;
          yfinal=i;
          celda.setAttribute("class","final");
        }
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  laberinto.appendChild(tabla);

  if(x==xfinal && y==yfinal){
    var tabla2 = document.createElement('table');
    tabla2.setAttribute("class","fondo");
    for (var i = 0; i < mapit.length; i++) {
      var fila = document.createElement('tr');
      for (var j = 0; j < mapit[i].length; j++) {
          var celda = document.createElement('td');
          if(mapit[i][j]=='*'){
            celda.setAttribute("class","muros");
          }
          fila.appendChild(celda);
      }
      tabla2.appendChild(fila);
    }
    laberinto.appendChild(tabla2);

    laberinto.replaceChild(tabla2, laberinto.firstChild);
    var mensaje=document.createElement('h3');
    var texto= document.createTextNode('Lo Lograste!!!');
    mensaje.appendChild(texto);
    laberinto.appendChild(mensaje);
  }
}
generarMapa(mapita,'empezar');

arriba.onclick=function() {
  if(mapita[y-1][x]!='*'){
    mapita[y][x]='_';
    y-=1;
    mapita[y][x]='o';
    generarMapa(mapita, 'arribita');
  }
}

derecha.onclick=function() {

  if(mapita[y][x+1]!='*'){
    mapita[y][x]='_';
    x+=1;
    mapita[y][x]='o';
    generarMapa(mapita, 'derechita');
  }
}

izquierda.onclick=function() {
if(mapita[y][x-1]!='*'){
  mapita[y][x]='_';
  x-=1;
  mapita[y][x]='o';
  generarMapa(mapita, 'izquierdita');
  }
}

abajo.onclick=function() {
  if(mapita[y+1][x]!='*'){
    mapita[y][x]='_';
    y+=1;
    mapita[y][x]='o';
    generarMapa(mapita,'arribita');
  }
}

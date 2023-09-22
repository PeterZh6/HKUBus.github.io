var lineas = new Array()
lineas [1] = ["选择一条路线","Route 1", "Route 1a","Route 2",
                "Route 3","Route 4",
                ]

var imagenes = new Array()
    imagenes[1] = new Array()
    imagenes[1][0] = []
    imagenes[1][1] = ["./imgs/2023S1-Route1.jpg"]
    imagenes[1][2] = ["./imgs/2023S1-Route1a.jpg"]
    imagenes[1][3] = ["./imgs/2023S1-Route2.jpg"]
    imagenes[1][4] = ["./imgs/2023S1-Route3.jpg"] 
    imagenes[1][5] = ["./imgs/2023S1-Route4.jpg"]
    //imagenes[1][6] = ["./imgs/"]


function eligeLinea(lista){
    var lineSelection = lista.bus_lines.selectedIndex;
    lista.lista_lineas.length = lineas[lineSelection].length;
    for (i=0; i < lista.lista_lineas.length; i++){
        lista.lista_lineas.options[i].text=lineas[lineSelection][i]
    }
}
function mostrarImagen(lista){
    var lineSelection= lista.bus_lines.selectedIndex;
    var image = lista.lista_lineas.selectedIndex;
    document.imagen.src = imagenes[lineSelection][image];
    document.imagen.style.display = "block";
}




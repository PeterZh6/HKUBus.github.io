var lineas = new Array()
lineas [1] = ["选择一条路线",
"Route 1 Main <-> Sassoon Road",
 "Route 1a Main <-> Sassoon Road",
 "Route 2 Sassoon Road Circular",
                "Route 3 Sha Wan Drive Morning Service",
                "Route 4 Main <-> Stanley Ho Night Service",
                ]
lineas [2] = ["选择一条路线", 
"Interesting Shenzhen Campus", 
"Looking forward to the new campus",
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
    imagenes[2] = new Array()
    imagenes[2][0] = []
    imagenes[2][1] = ["./asset/illustrations/under_construction.png"]
    imagenes[2][2] = ["./asset/illustrations/under_construction.png"]


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
    if (image == 0) {
        alert("请选择一条路线")
    }
    document.imagen.src = imagenes[lineSelection][image];
    document.imagen.style.display = "block";
}

function showImage(element) {
    var imageUrl = element.src;
    var fullImageWindow = window.open("", "_blank");
    fullImageWindow.document.write('<html><head><title>Full Image</title></head><body style="background-color: black; margin: 0;"><img src="' + imageUrl + '" style="max-width: 100%; max-height: 100%; display: block; margin: auto;"></body></html>');
  }
  
  function showTooltip(element) {
    element.title = "点击图片显示大图";
  }
  
  function hideTooltip(element) {
    element.title = "";
  }




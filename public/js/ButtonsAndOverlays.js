// Overlay Creation
var i = 1;
var maindiv = document.getElementById("allOverlays");

for (i = 1; i <= 6; i++) {
    var div = document.createElement("div");
    div.innerHTML = 
    
        '<div id="Button ' + i + ' Linko" class="overlay">' +
            '<a href="javascript:void(0)" class="closebtn" onclick="closeOver(' + i + ')">x</a>' +
            '<div id="Button ' + i + ' Link" class="overlay-content">' +
            '<p style="color: white;">Loading...</p>' +
            '</div>' +
        '</div>';

    maindiv.appendChild(div);
}

// Button Creation
var i = 1;
var maindiv = document.getElementById("allButtons");

for (i = 1; i <= 6; i++) {
    var div = document.createElement("div");
    div.innerHTML = 
    
        '<div class="box1holder">' +
            '<h1 id="Button ' + i + '" style="cursor:pointer" onclick="openOver(' + i + ')" class="box1">' +
                'Loading...' +
            '</h1>' +
        '</div>';

    maindiv.appendChild(div);
}

// Open and Close Functions
function openOver(index) {
    document.getElementById("Button " + index + " Linko").style.width = "100%"; 
}

function closeOver(index) {
    document.getElementById("Button " + index + " Linko").style.width = "0%";
}
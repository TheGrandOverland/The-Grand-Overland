// Overlay Creation
var i = 1;
var maindiv = document.getElementById("allOverlays");

for (i = 1; i <= 6; i++) {
    var div = document.createElement("div");
    div.innerHTML = 
    
        '<div id="Button ' + i + ' Linko" class="overlay">' +
            '<a href="javascript:void(0)" class="closebtn" onclick="closeOver' + i + '()">x</a>' +
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
            '<h1 id="Button ' + i + '" style="cursor:pointer" onclick="openOver' + i + '()" class="box1">' +
                'Loading...' +
            '</h1>' +
        '</div>';

    maindiv.appendChild(div);
}

// Open and Close Functions
function openOver1() {
    document.getElementById("Button 1 Linko").style.width = "100%"; 
}

function closeOver1() {
    document.getElementById("Button 1 Linko").style.width = "0%";
}

function openOver2() {
    document.getElementById("Button 2 Linko").style.width = "100%"
}

function closeOver2() {
    document.getElementById("Button 2 Linko").style.width = "0%"
}

function openOver3() {
    document.getElementById("Button 3 Linko").style.width = "100%"
}

function closeOver3() {
    document.getElementById("Button 3 Linko").style.width = "0%"
}

function openOver4() {
    document.getElementById("Button 4 Linko").style.width = "100%"
}

function closeOver4() {
    document.getElementById("Button 4 Linko").style.width = "0%"
}

function openOver5() {
    document.getElementById("Button 5 Linko").style.width = "100%"
}

function closeOver5() {
    document.getElementById("Button 5 Linko").style.width = "0%"
}

function openOver6() {
    document.getElementById("Button 6 Linko").style.width = "100%"
}

function closeOver6() {
    document.getElementById("Button 6 Linko").style.width = "0%"
}
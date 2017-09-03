const BUTTON_NUM = 6

// Open and Close Functions
function openOver (index) {
  document.getElementById(index).style.width = '100%'
}

function closeOver (index) {
  document.getElementById(index).style.width = '0%'
}

// General Overlay Maker
const makeOverlay = (id, parentID) => {
  var mainDiv = document.getElementById(parentID)
  var div = document.createElement('div')
  div.innerHTML =
    `<div id="${id} Overlay" class="overlay">
      <a href="javascript:void(0)" class="closebtn" onclick="closeOver('${id} Overlay')">x</a>
      <div id="${id} Link" class="overlay-content">
        <iframe src='' id='iframe1'>Loading...</iframe>"
      </div>
    </div>`
  mainDiv.appendChild(div)
}

// Button & Overlay Creation
for (i = 1; i <= BUTTON_NUM; i++) {
  // Overlay
  makeOverlay("Button " + i, "allOverlays")
  // Button
  var mainDiv = document.getElementById("allButtons")
  var div = document.createElement('div')
  div.innerHTML =
        `<div class="box1holder"> 
            <h1 id="Button ${i}" style="cursor:pointer" onclick="openOver('Button ${i} Overlay')" class="box1">
                Loading... 
            </h1> 
        </div> `
  mainDiv.appendChild(div)
}

// Callendar
makeOverlay("ResReq", "allOverlays")

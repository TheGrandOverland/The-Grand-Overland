document.addEventListener("DOMContentLoaded", function() {
    dothis()
}, !1);

function dothis() {
    // Background Scrolling Image
    firebase.database().ref("/Images/Main Page/BackgroundScroll").on("value", function(a) {
        var b = a.val();
        document.getElementById("Services").style = b
    }), 
    // Jeeps in Field Image
    firebase.database().ref("/Images/Main Page/FirstImage").on("value", function(a) {
        var b = a.val();
        document.getElementById("FirstImage").style = b
    })
}

function update(a, b) {
    document.getElementById(a);
    firebase.database().ref("/Text Block/" + a).on("value", function(c) {
        var d = c.val();
        document.getElementById(a).innerHTML = d,
		console.log("FB " + a + " Updated-[" + b + "]"),
		document.body.style.display = "initial"
	
		// Loop to handle disabling buttons
		var i = 1;
		var cur = "";
		
		for (i = 1; i <= 6; i++) {
			cur = "Button " + i;
			if ((a == cur) && (d == "none")) {
				document.getElementById(a).style.display = "none";		
			}
		}
    })
}

// Unique ID for Firebase variable integration
var UnID = [
	"About Main",
	"Main Quote",
	"Button 1",
	"Button 1 Link",
	"Button 2",
	"Button 2 Link",
	"Button 3",
	"Button 3 Link",
	"Button 4",
	"Button 4 Link",
	"Button 5",
	"Button 5 Link",
	"Button 6",
	"Button 6 Link"
	];
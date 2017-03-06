// Footer Creation
var anchor = document.getElementById("footer");
var footer = document.createElement("footer");
footer.innerHTML = 

    '<footer>' +
        '<div class="container text-center">' +
            '<div class="row">' +
                '<div class="col-lg-12">' +
                    'Copyright &copy; The Grand Overland District LLC 2016 <br>' +
                    'Website Developed by <a href="mailto:SethParrish@outlook.com"' +
                    'target="_blank">Seth Parrish</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</footer>';
    
anchor.appendChild(footer);
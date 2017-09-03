// Footer Creation
const anchor = document.getElementById('footer')
const footer = document.createElement('div')
footer.innerHTML =
  `<footer> 
        <div class="container text-center"> 
            <div class="row"> 
                <div class="col-lg-12"> 
                     The Grand Overland District, LLC - Copyright &copy;2017 <br> 
                    Website Developed by <a href="https://setherizor.github.io" 
                    rel="noopener">Seth Parrish</a> 
                </div> 
            </div> 
        </div> 
    </footer>`
anchor.appendChild(footer)

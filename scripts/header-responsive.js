let headerButton = document.getElementById("button__menuResponsive"); 
let headerResponsive = document.getElementById("header__responsive"); 

headerButton.addEventListener("click", function(){
    console.log("activamos menú")
    headerResponsive.classList.toggle("active"); 
})
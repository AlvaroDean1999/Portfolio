document.addEventListener("DOMContentLoaded", function () {
    const text = "Web developer"; 
    const element = document.querySelector(".paragraph__tittle");
    let i = 0;
  
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i); 
        i++;
        setTimeout(type, 150); 
      }
    }
  
    type(); 
  });
  
/* Tabs Menu */

function openTab(evt, contenidoCV) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(contenidoCV).style.display = "block";
    evt.currentTarget.className += " active";
  } 

  document.getElementById("defaultOpen").click();


  /* Acordeon Experiencia Laboral */

  var acc = document.getElementsByClassName("desplegable");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    
      this.classList.toggle("active");
      
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  } 





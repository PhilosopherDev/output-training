var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      console.log("hi");
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "https://philosopherprogrammer.github.io/OutputTraining", true);
    xhttp.send();
  }

  loadDoc();
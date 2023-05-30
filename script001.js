function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var links = document.getElementsByTagName("a");
  
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var linkText = link.textContent.toLowerCase();
  
      if (linkText.includes(input)) {
        window.location.href = link.href;
        break;
      }
    }
  }
 
document.addEventListener("DOMContentLoaded", function() {
    // DARK MODE
    var darkModeBtn = document.getElementById('dark-mode');
    
    darkModeBtn.onclick = function() {
      document.body.classList.toggle('dark-theme');
      if (document.body.classList.contains('dark-theme')) {
        darkModeBtn.style.backgroundImage = "url('/assets/media/sun.svg')";
      } else {
        darkModeBtn.style.backgroundImage = "url('/assets/media/moon.svg')";
      }
    }
  });
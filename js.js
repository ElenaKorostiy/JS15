document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('click', function(event) {
     
    const dot = document.createElement('div');
     dot.classList.add('dot');
        
      dot.style.left = (event.clientX ) + 'px';  
      dot.style.top = (event.clientY ) + 'px';    
      
      document.body.appendChild(dot);
    });
  });
function myMove() {
    let id = null;
    const elem = document.getElementById("image");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}


//for scripts
//get postion where cursor is when there is a specific key click
//make image travel to that spot 

//for content
//somehow change the img src directory location so that it points to a specific 
//img on button click
$(document).ready(function() {
  var init = true;
  var which="";
  $(document).on('click', function(event) {
      $(this)[init?'on':'off']('mousemove', follow);
      init = !init;
      which = event.target.id;
  });

  function follow(e) {
  console.log(which);
      var xPos = e.pageX;
      var yPos = e.pageY;
     $("#imgLocation").html("The img is at: " + xPos + ", " + yPos);
      $("#"+which).offset({
          left: e.pageX,
          top: e.pageY
      });
  }
});
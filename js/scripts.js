$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var goal = $("select#goal").val();
    var favorite = $("select#favorite").val();
    var cost = $("select#cost").val();
    var food = $("select#food").val();
    var passport = $("select#passport").val();

    var destination = "";


    $("#destination").text(destination);
      $("#output").show();
    event.preventDefault();
  });
});

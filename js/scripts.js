$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var goal = $("select#goal").val();
    var favorite = $("select#favorite").val();
    var cost = $("select#cost").val();
    var food = $("select#food").val();
    var passport = $("select#passport").val();

    var destination = "";

    if (goal === "relaxation" && favorite === "beach" && passport === "yes") {
      destination = "Cancun, Mexico";
    } else if (goal === "nightlife" && favorite === "city" && passport === "no") {
      destination = "New Orleans, LA";
    } else if (goal === "culture" && favorite === "foreign" && food === "indian") {
      destination = "London, UK";
    } else if (goal === "shopping" && favorite === "city" && passport === "no") {
      destination = "Las Vegas, NV";
    } else if (cost === "very" && food === "mexican" && passport === "yes") {
      destination = "Puerto Vallarta, MX";
    } else if (cost === "not at all" && favorite === "city" && passport === "yes") {
      destination = "London, UK";
    } else if (cost === "not very" && favorite === "beach" && passport === "yes") {
      destination = "Cancun, MX";
    } else if (food === "irish" && favorite === "foreign" && passport === "yes") {
      destination = "Dublin, IR";
    } else if (food === "cajon/creole" && favorite === "city") {
      destination = "New Orleans, LA";
    } else if (cost === "extremely" && favorite === "domestic" && passport === "no") {
      destination = "Stay home.";
    } else {
      destination = "Where ever your finger lands on a map.";
    }
    $("#destination").text(destination);
      $("#output").show();
    event.preventDefault();
  });
});

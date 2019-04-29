$(function() {
  //var that outputs title and will keep up with what data was clicked
  var theTitle = { title: "JSON output" };
  var JsonOutput = { title: "NULL" };
  document.getElementById("console-box").innerHTML = theTitle.title;

  //Clicking a li will output data using json
  $("li").click(function() {
    JsonOutput.title = "<br>class:" + $(this).attr("class") + "|value:" + $(this).text() + ".";
    document.getElementById("console-box").innerHTML = JsonOutput.title;
    //Changes the color of current box clicked
    $(this)
      .toggleClass("selected")
      .siblings()
      .removeClass("selected");
  });

  //This would take you to the next page after this UI
  $("#continue").on("click", function(e) {
    event.preventDefault();
    alert("This would take you to the next page");
  });
});
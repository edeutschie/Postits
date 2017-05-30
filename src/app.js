import _ from 'underscore';
import $ from 'jquery';
import 'jquery-colpick';

import Postit from './models/postit';

var postitTemplate;

var postitData = [
  {
    text: "Backbone is a library not a Framework.",
    color: "#AC1200"
},
{
    text: "That means it doesn't dictate to you how the code is structured",
    color: "#752310"
}];

// var myPostit = new Postit(postitData[0]);

var readPostitForm = function() {
  var textData = $("#text").val();
  $("#text").val("");

  var colorData = $("#color").val();
  $("#color").val("#FFFF88");

  var formData = {};
  if (textData && textData != "") {
    formData["text"] = textData
  }
  if (colorData && colorData != "") {
    formData["color"] = colorData
  }
  return formData;
};

var render = function(postit) {
  var jsonPostit = postit.toJSON();
  var generatedHTML = postitTemplate(jsonPostit);
  console.log(generatedHTML);

  $("#postits").append(generatedHTML);
};

$(document).ready(function() {
  console.log("Lets go!");

  postitTemplate  = _.template($("#postit-template").html());

  $(".success").click(function(event) {
    var formData = readPostitForm();
    console.log(formData);

    var postit = new Postit(formData);
    render(postit);
  });

  // render(myPostit);
});

// end

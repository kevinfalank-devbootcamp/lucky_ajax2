$(document).ready(function () {


  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  do_stuff = function(e){
    e.preventDefault();
    // console.log('yolo');
    var diceroll = Math.floor(Math.random()*6)+1;

    var form_data = {"value": diceroll};

     $.post("/rolls", form_data, function(response){
         // console.log("this is a response" + response);
         var img_src = "/" + diceroll + ".png";
         console.log(img_src)

       });


  };

  $('#bob').submit(do_stuff);


});

$("#questions").hide();
$("#show-number").hide();
$("#answer-total").hide();
$("#start-button").on("click", run);
$("#answer-total").hide();
$("#submit-button").hide();
$("#submit-button").on("click", submit);

var number = 60;

    var intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);
      $("#start-button").hide();
      $("#questions").show();
      $("#show-number").show();
      $("#submit-button").show();
    }


    function decrement() {
     number--;
      $("#show-number").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
      }
    }


    function stop() {
      clearInterval(intervalId);
      $("#answer-total").show();
      $("#questions").hide();
      $("#show-number").hide();
      $("#submit-button").hide();
      $("#caption").html("GAME OVER");
    }


    $('input').change(function(){
        var yes = $('.yes:checked').length
        var no = $('.no:checked').length 
        $('.yes_results').text(yes)
        $('.no_results').text(no)
    })


function submit(){
    $("#answer-total").show();
    $("#questions").hide();
    $("#show-number").hide();
    $("#submit-button").hide();
    $("#caption").html("GAME OVER");
}

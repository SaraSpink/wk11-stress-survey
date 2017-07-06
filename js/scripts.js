$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    var userResponses = [];
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
        userResponses.push(workTransportationMode);
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
      userResponses.push(funTransportationMode);
    });
    // var userResponses = [];
    // $("input:checkbox[name=work-transportation]:checked").each(function(){
    //   var workTransportationMode = $(this).val();
    //   userResponses.push(workTransportationMode);
    // // });
    // $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   userResponses.push(funTransportationMode);
    // });
    console.log(userResponses);
    $('#transportation_survey').hide();
  });
});

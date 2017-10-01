$(document).ready(function(){
  $("button").click(function(){
      $.getJSON('http://74.40.210.81/assets/GFHreVUg1MPoyooPu1ZaDv3AevKZ2sbmFuAK69AE37dZ/distribution', function(distData){
          console.log(distData);
      //      $.each(result, function(address, balance)
      //     {
      //            $("div").append("<br> " + address + " : " + balance + " <br> ");
      //      });
          });
     });
});

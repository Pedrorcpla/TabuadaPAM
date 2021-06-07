$(document).on('click', '#calcular', function(){
  $('#texto').html("<p id='n1'></p>");
  var num = $('#numero').val();
  var x = 1, y = 0;

  $('#titulo').html('Tabuada do '+num);

  for(x == 1; x <= num; x++){
    y = num * x;
    if(x == 1){
      $('#n1').html(num+' x '+x+' = '+y);
    }
    else{
      $('#n1').append('<br>'+num+' x '+x+' = '+y);
    }
  }
});


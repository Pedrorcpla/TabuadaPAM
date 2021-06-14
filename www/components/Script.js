$(document).on('click', '#calcular', function(){
 var x = 1,
     num = $('#numero').val();
     r = 0;

  $('#titulo').html("Tabuada do "+num);
  $('#n1').html("");

  if(num == null || num == 0){
    $('#titulo').html("Valor inválido");
  } 
  for(x == 1; x <= num; x++){
    r = num * x;
    if(x==1){
      $('#n1').html(num+" x "+x+" = "+r);
    }
    else{
      $('#n1').append("<br>"+num+" x "+x+" = "+r);
    }
  }
});


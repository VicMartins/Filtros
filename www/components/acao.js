// This is a JavaScript file
$(document).ready(function(){
  $('#imagem').hide();
  $('.filtros').hide();

$(document).on('click',"#camera",function(){
   $('#camera').hide();
   $('.filtros').show();
    
    $('#imagem').show();
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});
$(document).on("change", "#opacidade", function(){
    var elemento = document.getElementById('imagem');
    elemento.style = 'filter: opacity(' + $('#opacidade').val() + '%)  saturate(' + $('#saturacao').val() + '%) grayscale(' + $('#cinza').val() + '%) blur(' + $('#desfoque').val() + 'px)';
    
  });

  $(document).on("change", "#saturacao", function(){
    var elemento = document.getElementById('imagem');
    elemento.style = 'filter: opacity(' + $('#opacidade').val() + '%)  saturate(' + $('#saturacao').val() + '%) grayscale(' + $('#cinza').val() + '%) blur(' + $('#desfoque').val() + 'px)';
  });

  $(document).on("change", "#cinza", function(){
   var elemento = document.getElementById('imagem');
    elemento.style = 'filter: opacity(' + $('#opacidade').val() + '%)  saturate(' + $('#saturacao').val() + '%) grayscale(' + $('#cinza').val() + '%) blur(' + $('#desfoque').val() + 'px)';
  });

  $(document).on("change", "#desfoque", function(){
  var elemento = document.getElementById('imagem');
    elemento.style = 'filter: opacity(' + $('#opacidade').val() + '%)  saturate(' + $('#saturacao').val() + '%) grayscale(' + $('#cinza').val() + '%) blur(' + $('#desfoque').val() + 'px)';
  });

});

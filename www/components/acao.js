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
$(document).on('change','#opacidade',function(){
  $('#imagem' ).css( "filter", "opacity(" + $("#opacidade").val() + "%)");
});

$(document).on('change','#saturacao',function(){
  $('#imagem' ).css( "filter", "saturate(" + $("#saturacao").val() + "%)");
});

$(document).on('change','#cinza',function(){
  $('#imagem' ).css( "filter", "grayscale(" + $("#cinza").val() + "%)");
});

$(document).on('change','#desfoque',function(){
  $('#imagem' ).css( "filter", "blur(" + $("#desfoque").val() + "px)");
});
});

$(document).ready(function (){
    $('.carousel-control-prev').click(function() {
      $('#carouselExampleIndicators').carousel('prev'); // Retroceder a la diapositiva anterior
    });
    
    $('.carousel-control-next').click(function() {
      $('#carouselExampleIndicators').carousel('next'); // Avanzar a la siguiente diapositiva
    });
  });

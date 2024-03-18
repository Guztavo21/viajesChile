$(document).ready(function (){
    $('.carousel-control-prev').click(function() {
      $('#carouselExampleIndicators').carousel('prev'); // Retroceder a la diapositiva anterior
    });
    
    $('.carousel-control-next').click(function() {
      $('#carouselExampleIndicators').carousel('next'); // Avanzar a la siguiente diapositiva
    });

    // Script para smooth scroll -->
    document.addEventListener("DOMContentLoaded", function() {
        // Función para scroll suave
      function smoothScroll(target) {
        var targetSection = document.querySelector(target);
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth' 
        });
      }
  
      // Agregar evento de clic a los enlaces de navegación
      document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault(); 
          var target = this.getAttribute('href'); 
          smoothScroll(target); 
        });
      });
    });
    
    
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
    
      $(function () {
        $('[data-toggle="popover"]').popover();
      });
    
      $(function () {
        $(window).scroll(function () {
          var navegador = $(".navbar");
          if ($(this).scrollTop() > 100) {
            navegador.css("background", "#328998");
          } else {
            navegador.css("background", "none");
          }
        });
      });
    
      $(".card").hover(
        function () {
          var cardChange = $(this); // caching $(this)
          cardChange.css("color", "black");
        },
        function () {
          var cardChange = $(this); // caching $(this)
          cardChange.css("color", "black");
        }
      );
    
      $(".card1")
      .mouseover(function () {
        $(".card1txt").css("color", "#000000");
      })
      .mouseleave(function () {
        $(".card1txt").css("color", "#ffffff");
      });
    
      $(".card2")
      .mouseover(function () {
        $(".card2txt").css("color", "#000000");
      })
      .mouseleave(function () {
        $(".card2txt").css("color", "#ffffff");
      });
    
      $(".card3")
      .mouseover(function () {
        $(".card3txt").css("color", "#000000");
      })
      .mouseleave(function () {
        $(".card3txt").css("color", "#ffffff");
      });
    
      $(".card4")
      .mouseover(function () {
        $(".card4txt").css("color", "#000000");
      })
      .mouseleave(function () {
        $(".card4txt").css("color", "#ffffff");
      });
    
    
    


  });

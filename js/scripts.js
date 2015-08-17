$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true 
  });
  
  $('.tooltip').tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
   });
   $( "#tabs" ).tabs();
    
   $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 16000,
    values: [ 1200, 9500 ],
    slide: function( event, ui ) {
      $('#left-value').text(ui.values[0] + "P").css('left', $("#slider-range .ui-slider-handle").first().css('left'));
      $('#right-value').text(ui.values[1] + "P").css('left', $("#slider-range .ui-slider-handle").first().next().css('left'));
    }
   });
   $('#left-value').text($("#slider-range").slider("values", 0) + "P").css('left', $("#slider-range .ui-slider-handle").first().css('left'));
   $('#right-value').text($("#slider-range").slider("values", 1) + "P").css('left', $("#slider-range .ui-slider-handle").first().next().css('left'));


   $('.form-control-select').chosen({disable_search_threshold: 10, inherit_select_classes: true});

   $('.switcher-variant').click(function(){
    $('.switcher-variant').removeClass('selected');
    $(this).addClass('selected');
   })
    var $star_rating = $('.star-rating .star');
    var SetRatingStar = function() {
      return $star_rating.each(function() {
      if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
        return $(this).addClass('star-active');
      } else {
        return $(this).removeClass('star-active');
      }
      });
    };

    $star_rating.on('click', function() {
      $star_rating.siblings('input.rating-value').val($(this).data('rating'));
      return SetRatingStar();
    });

    SetRatingStar();

});
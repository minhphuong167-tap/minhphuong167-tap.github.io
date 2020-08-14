$(document).ready(function(){
    $('.slide').slick({
        slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots:true,


    });

    $(window).scroll(function () { 

        var VTw = window.scrollY;
            VT2 = $('.khoi-2').offset().top;
            VT3 = $('.khoi-3').offset().top;
            VT4 = $('.khoi-4').offset().top;
            VT5 = $('.khoi-5').offset().top;
            VT6 = $('.khoi-6').offset().top;
            

        if (VTw <= VT2) {
            $('.menu-item').removeClass('active');
            $('.item-1').removeClass('active');
        }

        if ((VTw >= VT2) && (VTw < VT3)) {
            $('.menu-item').removeClass('active');
            $('.item-1').addClass('active');
        }

        if ((VTw >= VT3) && (VTw < VT4)) {
            $('.menu-item').removeClass('active');
            $('.item-2').addClass('active');
        }

        if ((VTw >= VT4) && (VTw < VT5)) {
            $('.menu-item').removeClass('active');
            $('.item-3').addClass('active');
        }

        if ((VTw >= VT5) && (VTw < VT6)) {
            $('.menu-item').removeClass('active');
            $('.item-4').addClass('active');
        }
        if ((VTw >= VT6)) {
            $('.menu-item').removeClass('active');
            $('.item-5').addClass('active');
        }

       
    });
    $('.item-1').click(function (e) { 
        e.preventDefault();
    
        $('html').animate({
            scrollTop:$('.khoi-2').offset().top + 50
        }, 300);
    });
    $('.item-2').click(function (e) { 
        e.preventDefault();
    
        $('html').animate({
            scrollTop:$('.khoi-3').offset().top + 50
        }, 300);
    });
    $('.item-3').click(function (e) { 
        e.preventDefault();
    
        $('html').animate({
            scrollTop:$('.khoi-4').offset().top + 50
        }, 300);
    });
    $('.item-4').click(function (e) { 
        e.preventDefault();
    
        $('html').animate({
            scrollTop:$('.khoi-5').offset().top + 50
        }, 300);
    });
    $('.item-5').click(function (e) { 
        e.preventDefault();
    
        $('html').animate({
            scrollTop:$('.khoi-6').offset().top + 50
        }, 300);
    });

    $('.layer-3').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop:$('.khoi-2').offset().top + 50
        }, 400);
});


$('#click').click(function () {
    $('div.khoi').show();
});

$('span.close').click(function () {
    $('div.khoi').hide();
});



$(window).click(function(event) {
    var target = $(event.target);
    console.log(event);
    if(target.is('div.khoi')){	
        $('div.khoi').hide();
    };
});

     
    
});




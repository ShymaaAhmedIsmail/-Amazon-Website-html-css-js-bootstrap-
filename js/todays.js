$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
            items : 13, //10 items above 1000px browser width
            //2 items between 600 and 0;
            margin:10,
            dotsEach:true,
            nav: true,
            dots:false,
            navText:['<i class="fa-solid fa-chevron-left" style="color: #000205;"></i>' ,'<i class="fa-solid fa-chevron-right" style="color: #000205;"></i>']
        
            ,loop:true,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 7
            },
            1000: {
                items: 13
            }
        }
        });
        

      

    });











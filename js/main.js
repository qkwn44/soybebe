    $(".review .inner ul").bxSlider({
          auto: true,
          autoControls: false,
          autoControlsCombine:false,
          stopAutoOnClick: false,
          pager: false,
        slideWidth:280,
            minsSlides:3,
            maxSlides:4,
             slideMargin:20,
            infiniteLoop:false
        });

 $(".quickMenu").on("click",function(e){
            e.preventDefault();
            $(".quickMenu").toggleClass("open");
        })
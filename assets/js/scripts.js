jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        var nav = $('.navbar');
        var scrolled = false;

        $(window).scroll(function () {

            if (110 < $(window).scrollTop() && !scrolled) {
                nav.addClass('sticky animated fadeInDown').animate({ 'margin-top': '0px' });

                scrolled = true;
            }

            if (110 > $(window).scrollTop() && scrolled) {
                nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

                scrolled = false;
            }
        });

    }());




    // -------------------------------------------------------------
    // dropdown hover
    // -------------------------------------------------------------
    (function () {
         $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');            
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');              
            }
        );
    }());



    // -------------------------------------------------------------
    // OffCanvas
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').HippoOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper : '.content-wrapper',
        position       : 'hippo-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-in-on-top',             // class name
        closeButton    : '#off-canvas-close-btn',
        menuWrapper    : '.offcanvas-menu',                 // class name below-pusher
        documentPusher : '.offcanvas-pusher'
        });
    }());





    // -------------------------------------------------------------
    // Revoulation Slider   {main-slider}
    // -------------------------------------------------------------
        (function () {
           

            $('.tp-banner').revolution({
                delay:7000,
                startwidth:1170,
                startheight:1000,
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on",
                onHoverStop:"off",
                navigationType:"none",
                navigationStyle:"preview1",
                spinner:"spinner5",
                hideTimerBar:"on"
            });
        }());




    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.progress-item').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });



    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------
    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());




    // -------------------------------------------------------------
    // testimonialSlider
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation 
        $('.testimonialSlider-nav .prev').on('click', function(){
            $('.testimonialSlider').flexslider('prev')
            return false;
        })

        $('.testimonialSlider-nav .next').on('click', function(){
            $('.testimonialSlider').flexslider('next')
            return false;
        })
    }());



  //-------------------------------------------------------
    // counter-area-ab
    //-------------------------------------------------------
    $('.counter-area-ab').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });







    // -------------------------------------------------------------
    //  client-areaSlider
    // -------------------------------------------------------------
    (function () {

        $('.client-areaSlider').owlCarousel({
            loop:true,
            nav:false,
            margin: 20,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })
    }());


// -------------------------------------------------------------
    //  client-areaSlider
    // -------------------------------------------------------------
    (function () {

        $('.contactSlider').owlCarousel({
            loop:true,
            nav:false,
            margin: 85,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })
    }());






    // -------------------------------------------------------------
    //  relatedPostSlider
    // -------------------------------------------------------------
    (function () {

        $('.relatedPostSlider').owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        })


        // Navigation 
        var owl = $('.relatedPostSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.relatedPostSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.relatedPostSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

    }());



    // -------------------------------------------------------------
    // Twitter Feed on Blog Page Widget
    // -------------------------------------------------------------
    (function () {


        if ($('#twitterWidget').length > 0) { 
            var twitterConfig = {
                id: "567185781790228482", //put your Widget ID here
                domId: "twitterWidget",
                maxTweets: 2,
                enableLinks: true,
                showUser: true,
                showTime: true,
                showInteraction: false
            };

            twitterFetcher.fetch(twitterConfig);
        }

    }());


    // -------------------------------------------------------------
    // FlickrStream
    // -------------------------------------------------------------
    (function () {
    
        if ($('#flickr').length > 0) {

            $('#flickr').jflickrfeed({
                limit: 8,
                qstrings: {
                    id: '37304598@N02'
                },
                itemTemplate:
                '<li>' +
                    '<a rel="prettyPhoto[pp_gal]" href="{{image}}" title="{{title}}">' +
                        '<img src="{{image_s}}" alt="{{title}}" />' +
                    '</a>' +
                '</li>'
            }, function(data) {
                $('#flickr a').prettyPhoto();
            });
        }
    
    }());



    
    


    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function(){

          $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            }); 

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());






// -------------------------------------------------------------
    // Map
    // -------------------------------------------------------------

    (function () {

        if ($('#googleMap').length > 0) { 

            //set your google maps parameters
            var $latitude = 48.869319, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $longitude = 2.354261,
                $map_zoom = 16; /* ZOOM SETTING */

            //google map custom marker icon 
            var $marker_url = 'assets/img/map.png';

            //we define here the style of the map
            var style = [{
                "stylers": [{
                    "hue": "#000"
                }, {
                    "saturation": -100
                }, {
                    "gamma": 2.15
                }, {
                    "lightness": 12
                }]
            }];

            //set google map options
            var map_options = {
                center: new google.maps.LatLng($latitude, $longitude),
                zoom: $map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style,
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map                
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latitude, $longitude),
                map: map,
                visible: true,
                icon: $marker_url
            });
        }

    }());
    
    
    // -----------------------------------------------------------------
    //STELLAR FOR BACKGROUND SCROLLING
    // ------------------------------------------------------------------

    
    (function () {

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         
        }else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    }());



}); // JQuery end




// -------------------------------------------------------------
// Shuffle
// -------------------------------------------------------------

$(window).load(function() {
    /** this is come when complete page is fully loaded, including all frames, objects and images **/

    if ($('#gridWrapper').length > 0) {
     
        /* initialize shuffle plugin */
        var $grid = $('#gridWrapper');

        $grid.shuffle({
            itemSelector: '.portfolio-wrapper' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').on('click', function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    }
});

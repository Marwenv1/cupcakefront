/**
 * createIT main javascript file.
 */

var $devicewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var $deviceheight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var $bodyel = jQuery("body");
var $navbarel = jQuery(".navbar");
var $topbarel = jQuery(".ct-topBar");

/* ========================== */
/* ==== HELPER FUNCTIONS ==== */

function validatedata($attr, $defaultValue) {
    "use strict";
    if ($attr !== undefined) {
        return $attr
    }
    return $defaultValue;
}

function parseBoolean(str, $defaultValue) {
    "use strict";
    if (str == 'true') {
        return true;
    } else if (str == "false") {
        return false;
    }
    return $defaultValue;
}

(function ($) {
    "use strict";
    if(document.getElementById('ct-js-wrapper')){
        var snapper = new Snap({
            element: document.getElementById('ct-js-wrapper')
        });

        snapper.settings({
            addBodyClasses: true
        });
    }

    $(document).ready(function () {

        // Add Color // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        $(".ct-js-color").each(function(){
            $(this).css("color", '#' + $(this).attr("data-color"))
        })

        // Add Space // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        $(".ct-js-spacer").each(function(){
            $(this).css("height", $(this).attr("data-value"))
        })


        // Snap Navigation in Mobile // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



        if ($devicewidth > 767 && document.getElementById('ct-js-wrapper')) {
            snapper.disable();
        }

        $(".navbar-toggle").click(function () {
            if($bodyel.hasClass('snapjs-left')){
                snapper.close();
            } else{
                snapper.open('left');
            }
        });
        $(".navbarShop-toggle").click(function () {
            if($bodyel.hasClass('snapjs-right')){
                snapper.close();
            } else{
                snapper.open('right');
            }
        });

        $('.ct-menuMobile .ct-menuMobile-navbar .dropdown > a, .ct-menuMobile .ct-menuMobile-navbar .dropdown-submenu > a').click(function(e){
            var $this = $(this);
            if($this.parent().hasClass('open')){
                $(this).parent().removeClass('open');
            } else{
                $(this).parent().addClass('open');
            }
            return false; // iOS SUCKS
        })

        $('.ct-menuMobile .ct-menuMobile-navbar .onepage > a').click(function(e) {
            snapper.close();
        })

        // Animations Init // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if ($().appear) {
            if (device.mobile() || device.tablet()) {
                $("body").removeClass("cssAnimate");
            } else {

                $('.cssAnimate .animated').appear(function () {
                    var $this = $(this);

                    $this.each(function () {
                        if ($this.data('time') != undefined) {
                            setTimeout(function () {
                                $this.addClass('activate');
                                $this.addClass($this.data('fx'));
                            }, $this.data('time'));
                        } else {
                            $this.addClass('activate');
                            $this.addClass($this.data('fx'));
                        }
                    });
                }, {accX: 50, accY: -350});
            }
        }

        // Tooltips and Popovers // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        $("[data-toggle='tooltip']").tooltip();

        $("[data-toggle='popover']").popover({trigger: "hover", html: true});


        // Link Scroll to Section // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        $('.ct-js-btnScroll[href^="#"]').click(function (e) {
            e.preventDefault();

            var target = this.hash, $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 70
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
        $('.ct-js-btnScrollUp').click(function (e) {
            e.preventDefault();
            $("body,html").animate({scrollTop: 0}, 1200);
            return false;
        });

        // Navbar Search // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        var $searchform = $(".ct-navbar-search");
        $('#ct-js-navSearch').click(function(e){
            e.preventDefault();

            $(this).toggleClass('is-active');
            $searchform.fadeToggle(250, function () {
                if (($searchform).is(":visible")) {
                    $searchform.find("[type=text]").focus();
                }
            });
            return false;
        })

        // Placeholder Fallback // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if ($().placeholder) {
            $("input[placeholder],textarea[placeholder]").placeholder();
        }
    })

    $(window).on('resize', function() {
        if ($(window).width() < 768) {
            snapper.enable();
        } else{
            snapper.close();
            snapper.disable();
        }
    })

    $(document).mouseup(function (e) {
        var $searchform = $(".ct-navbar-search");

        if(!$('#ct-js-navSearch').is(e.target)){
            if (!$searchform.is(e.target) // if the target of the click isn't the container...
                && $searchform.has(e.target).length === 0) // ... nor a descendant of the container
            {
                $searchform.hide();
                $('#ct-js-navSearch').removeClass('is-active');
            }
        }
    });

    $(window).load(function(){
        // Masonry For Sidebar // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if (jQuery().masonry  && (jQuery(window).width()<992) && (jQuery(window).width()>767)) {

            jQuery('.ct-js-sidebar .row').masonry({
                itemSelector: '.col-sm-6.col-md-12',
                layoutMode: 'sloppyMasonry',
                resizable: false, // disable normal resizing
                // set columnWidth to a percentage of container width
                masonry: { }
            });
        }
    })

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll > 400) {
            jQuery('.ct-js-btnScrollUp').addClass('is-active');
        } else {
            jQuery('.ct-js-btnScrollUp').removeClass('is-active');
        }

        // Navbar Height // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if (($bodyel.hasClass("ct--navbarFixed"))) {
            if (scroll >= 100) {
                if($bodyel.hasClass("ct-js-makeNavbarSmaller")){
                    $navbarel.addClass("is-small");
                }
            } else {
                if($bodyel.hasClass("ct-js-makeNavbarSmaller")){
                    $navbarel.removeClass("is-small");
                }
                if($bodyel.hasClass("ct-js-hideTopBar")){
                    $topbarel.removeClass("is-hidden");
                    $navbarel.removeClass("is-top");
                }
            }
            if (scroll >= 300) {
                if($bodyel.hasClass("ct-js-hideTopBar")){
                    $topbarel.addClass("is-hidden");
                    $navbarel.addClass("is-top");
                }
            } else {
                if($bodyel.hasClass("ct-js-hideTopBar")){
                    $topbarel.removeClass("is-hidden");
                    $navbarel.removeClass("is-top");
                }
            }
        }
    })

})(jQuery);
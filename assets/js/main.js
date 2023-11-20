$(document).ready(function () {

    /* ===== Affix Sidebar ===== */
    /* Ref: http://getbootstrap.com/javascript/#affix-examples */


    $('#doc-menu').affix({
        offset: {
            top: ($('#header').outerHeight(true) + $('#doc-header').outerHeight(true)) + 45,
            bottom: ($('#footer').outerHeight(true) + $('#promo-block').outerHeight(true)) + 75
        }
    });

    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function () {
        $(window).trigger('scroll');
    });

    /* Activate scrollspy menu */
    $('body').scrollspy({
        target: '#doc-nav',
        offset: 100
    });

    /* Smooth scrolling */
    $('a.scrollto').on('click', function (e) {
        e.preventDefault();
        //store hash
        var target = $(this).attr("href");
        $('body').scrollTo(target, 800, {
            offset: 0,
            'axis': 'y'
        });
        // display anchor
        document.location = target;
    });


    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */

    $('#cards-wrapper .item-inner').matchHeight();
    $('#showcase .card').matchHeight();

    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $("[data-magnify=gallery]").magnify({
        initMaximized: true,
        footToolbar: ['zoomIn', 'zoomOut', 'actualSize', 'rotateRight'],
    });

    /* ===== Sweet Alert ===== */

    function openAlert() {
        Swal.fire({
            heightAuto: false,
            showCancelButton: true,
            confirmButtonText: "No volver a mostrar",
            html: '<iframe width="100%" height="700" src="https://www.youtube.com/embed/AV0f65V7Wy0?si=gzj6lBpsXUhLtqi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            width: '1000',
            imageAlt: 'Video Seneca UNIANDES',
            backdrop: `
                rgba(0,0,0,0.4)
                url("assets/videos/background.png")
                left top
                no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                setCookie('sweetCookies', '1', 99)
            }
        });
    }
    
    //Open alert
    if ($("[sweet-alert]").length) {
        $("[ver-video]").on('click', openAlert);
        if (!getCookie('sweetCookies')) {
            openAlert()
        }
    }
    /* ===== Cookies ===== */
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function cookieConsent() {
        if (getCookie('allowCookies')) {
            $("[cookie-alert]").remove();
        } else {
            $("[cookie-alert]").show();
        }
    }

    $('[cookies]').click(() => {
        setCookie('allowCookies', '1', 99)
        $("[cookie-alert]").remove();
    })

    // load
    cookieConsent()

});

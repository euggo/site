    const currentScript = document.currentScript; // Or use document.getElementsByTagName('script')[0]
    const file = currentScript.dataset.file;

    function generateCatalog(selector) {

        // interop with multilangual
        //if ('page.multilingual' == 'true') {
        //    _containerSelector = 'div.post-container.active'
        //} else {
            _containerSelector = 'div.post-container'
        //}

        // init
        var P = $(_containerSelector), a, n, t, l, i, c;
        a = P.find('h1,h2,h3,h4,h5,h6');

        // clean
        $(selector).html('')

        // appending
        a.each(function () {
            n = $(this).prop('tagName').toLowerCase();
            i = "#" + $(this).prop('id');
            t = $(this).text();
            c = $('<a href="' + i + '" rel="nofollow" title="' + t + '">' + t + '</a>');
            l = $('<li class="' + n + '_nav"></li>').append(c);
            $(selector).append(l);
        });
        return true;
    }

    generateCatalog(".catalog-body");

    // toggle side catalog
    $(".catalog-toggle").click((function (e) {
        e.preventDefault();
        $('.side-catalog').toggleClass("fold")
    }))

    /*
     * Doc: https://github.com/davist11/jQuery-One-Page-Nav
     * Fork by Hux to support padding
     */

    loadAsync(file, function () {
        $('.catalog-body').onePageNav({
            currentClass: "active",
            changeHash: !1,
            easing: "swing",
            filter: "",
            scrollSpeed: 700,
            scrollOffset: 0,
            scrollThreshold: .2,
            begin: null,
            end: null,
            scrollChange: null,
            padding: 80
        });
    });

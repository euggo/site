    loadAsync("https://cdn.jsdelivr.net/npm/fastclick@1.0.6/lib/fastclick.min.js", function(){
        var $nav = document.querySelector("nav");
        if($nav) FastClick.attach($nav);
    })

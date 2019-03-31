//<!-- async load function -->
function async(u, c) {
  var d = document, t = 'script',
      o = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
  o.src = u;
  if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
  s.parentNode.insertBefore(o, s);
}

//<!-- jquery.tagcloud.js -->
// only load tagcloud.js in tag.html
if($('#tag_cloud').length !== 0){
    async("/js/jquery.tagcloud.js",function(){
        $.fn.tagcloud.defaults = {
            //size: {start: 1, end: 1, unit: 'em'},
            color: {start: '#bbbbee', end: '#0085a1'},
        };
        $('#tag_cloud a').tagcloud();
    })
}

//<!--fastClick.js -->
async("/js/fastclick/1.0.6/fastclick.js", function(){
    var $nav = document.querySelector("nav");
    if($nav) FastClick.attach($nav);
})

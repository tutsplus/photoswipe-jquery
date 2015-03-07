(function($) {
    var $lightboxEl = $('.pswp')[0];
    
    $('.gallery').each( function() {
        var $this = $(this);
        var $url  = $('.gallery-url');

        var getItems = function() {
            var items = [];

            $this.find($url).each(function() {
                var $href   = $(this).attr('href'),
                    $size   = $(this).attr('data-size').split('x'),
                    $width  = $size[0],
                    $height = $size[1];

                var item = {
                    src : $href,
                    w   : $width,
                    h   : $height
                }

                items.push(item);
            });

            return items;
        }

        var items = getItems();
        
        $this.on('click', $url, function(event) {
            event.preventDefault();

            var options = {
                index: 0,
                bgOpacity: 0.7,
                showHideOpacity:true
            }

            var lightBox = new PhotoSwipe($lightboxEl, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
})(jQuery);
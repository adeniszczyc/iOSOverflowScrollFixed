 /* 
 * jQuery Fixed Overflow
 * http://www.andrewdeniszczyc.com/
 * Copyright 2012, Andrew Deniszczyc
 * Released under the MIT License.
 */
(function($){
    $.fn.fixedOverflow = function(options) {
    return this.each(function(){                
        $this = $(this);                                      
        $this.bind("touchstart", function() {
            // Check that the element has actually overflowed, and check if at the top
            if ($this.prop("scrollHeight") > $this.innerHeight() && $this.scrollTop() == 0) {
                    // Scroll element down 1 causing scroll bounce
                    $this.scrollTop(1);
            }
            // Check that the element has actually overflowed, and check if at the bottom
            else if ($this.prop("scrollHeight") > $this.innerHeight() && ($this.prop("scrollHeight") - $this.scrollTop()) <= $this.outerHeight()) {
                    // Scroll element up 1 causing scroll bounce
                    $this.scrollTop($this.scrollTop()-1);
            }
        });
    });
};
})(jQuery);

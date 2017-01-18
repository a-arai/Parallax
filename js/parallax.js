var A_ARAI = A_ARAI || {};
A_ARAI.SAMPLE = {};


A_ARAI.SAMPLE.PARALLAX = {

    init: function() {
        this.setParameters();
        this.bgController();
    },
    setParameters : function(){
        this.$targetSection = $('section');
    },
    bgController : function(){
        var _self = this;
        this.$targetSection.each(function(){
                var $this =  $(this),
                sectionTopPosition = $this.offset().top,
                sectionBottomPosition = sectionTopPosition + $this.height();

            $(window).on('scroll', function(){
                 _self.moveBgImage(sectionBottomPosition, sectionTopPosition, $this);
             });
        });
    },
    moveBgImage: function(targetBottomPosition, targetTopPosition, $target) {
        var viewTop = $(window).scrollTop(),
        viewBottom = viewTop + $(window).height();

        if(viewTop <= targetBottomPosition && viewBottom >= targetTopPosition) {
            $target.find('.container').css('background-position-y', viewTop / 10);
        }
    }
};
$(function(){
    A_ARAI.SAMPLE.PARALLAX.init();
});

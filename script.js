$( document ).ready(function () {
	jQuery('.item-masonry').hover(
		function () {
			$(this).find(".cover-item-gallery").fadeIn();
		},
		function(){
            $(this).find(".cover-item-gallery").fadeOut();
		}
	);
 
        var sizer = '.sizer4';

        var container = $('#gallery');

        container.imagesLoaded(function(){
        	container.masonry({
        		itemSelector: '.item-masonry',
        		columnWidth: sizer,
        		percentPosition: true
        	});
        });

$(document).ready(function () {

    $('.item-masonry a').click(function () {

        var o=$(this).parent();
        var url=o.find('img').attr('src');
        var html='<a href="#" class="clone"><img src="'+url+'" /></a>'

        o.append(html);
        o=o.find('.clone');
        o.animate({width:'200%',height:'200%'});
        o.click(function () {
            $(this).remove();

});



});
    });
  });


jQuery(document).ready(function($) {
  var g_top = 0;
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    
    if ( top > g_top ) {
      $('nav').fadeOut(400);
    } else {
      $('nav').fadeIn(400);
    }
    
    g_top = top;    
  });
});




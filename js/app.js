$(document).ready(function(){

	$('.carousel').slick({
		arrows: false,
		dots: true,
		autoplay: true
	})

	$('.list-tabs > li > a').on('click', function(evt){

		//marcação do menu
		$('.list-tabs > li').removeClass('actv')
		$(this).parent().addClass('actv')

		//exibição das tabs
		var index = $(this).data('tab')
		$('.tab-content').hide()
		$('.tab-content.tab-'+index).fadeIn()
	})

	$('.fancy').fancybox({
		helpers : {
			title : {
				type : 'inside'
			},
			overlay : {
				locked : false
			}
		}
	})
});
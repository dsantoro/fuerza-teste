$(document).ready(function(){

	function axysY() {
		return $(window).scrollTop()
	}

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

	$(window).on('load', function(){
		var html = $('.navigation').clone()
		$('.offset-menu').append(html)
	})

	$('.menu-btn').on('click', function(){
		$(this).parent().toggleClass('menu-open')
	})

	$('.lazy').each(function(i){
		setTimeout(function(){
			$('.lazy').eq(i).addClass('loaded')
		}, i * 200)
	})

	$(window).on('scroll', function(){
		if(axysY() > 0){
			$('.card-header').addClass('scrolled')
		} else {
			$('.card-header').removeClass('scrolled')
		}
	}) 
});
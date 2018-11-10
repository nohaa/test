$(document).ready(()=>{
	var upDown ="up";
	var currentUpDown='up';
	
	//set header height
	$(window).height() > 610 ? $('header').height($(window).height()) : $('header').height('760px'); 
	if(($(window).width() < 991) &&  ($(window).height() > 610))   $('header').height('760px')   ; 
	
	if($(window).width() < 992 ){ 
		$('.container').each(function(){
			$(this).addClass('container-fluid').removeClass('container');
			$('footer div').css('fontSize','12px');
			$('footer .stayInTouch  i,footer .stayInTouch  .letter *').css({fontSize:'12px',padding:'5px'});
			$('footer .stayInTouch  .letter i').css('padding','10px 5px');
		});
	}
	else{
		$('.container-fluid').each(function(){
			$(this).addClass('container').removeClass('container-fluid');
			$('footer div').css('fontSize','16px');
			$('footer .stayInTouch i,footer .stayInTouch  .letter *').css({fontSize:'16px',padding:'10px'});
			$('footer .stayInTouch  .letter i').css('padding','15px 2%');
		});
	}
	
	/* window resize */
	
	$(window).resize(()=>{	
		if($(window).width() < 767.98){
			
			if(currentUpDown == 'up'){
			 
				$('header').height('760px'); 
			
			}
			else{
			 
				$('header').height('1040px'); 
			
			}
		} 	
		else if($(window).width() < 992 ){ 
			
			$(window).height() > 610 ? $('header').height($(window).height()) : $('header').height('760px'); 
			$('.container').each(function(){
				$(this).addClass('container-fluid').removeClass('container');
				$('footer div').css('fontSize','12px');
				$('footer .stayInTouch i,footer .stayInTouch  .letter *').css({fontSize:'12px',padding:'5px'});
				$('footer .stayInTouch  .letter i').css('padding','10px 5px');
			});
		}
		else{
			$(window).height() > 610 ? $('header').height($(window).height()) : $('header').height('760px');  
			
			$('.container-fluid').each(function(){
				$(this).addClass('container').removeClass('container-fluid');
				$('footer div').css('fontSize','16px');
				$('footer .stayInTouch i,footer .stayInTouch  .letter *').css({fontSize:'16px',padding:'10px'});
				$('footer .stayInTouch  .letter i').css('padding','15px 2%');
			});
		}
	});
	 
	/* navbar links */ 
	
	$('.navbar-nav .nav-link').on('click',function(e){
		e.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('html,body').animate({
			scrollTop :$('.'+ $('.navbar-nav .active>.nav-link').data('value')).offset().top
		},1000);
		
	});
	
	/*navbar toggler*/
	
	$('.navbar-toggler').on('click',function(){ 
		if(upDown == 'up'){ 
			currentUpDown="down";
			upDown="down";
			$('header').height('1040px'); 
		}else{
			currentUpDown="up";
			upDown="up";
			$(window).height() > 610 ? $('header').height($(window).height()) : $('header').height('670px');
			if(($(window).width() < 991))  $('header').height('760px')   ; 			
		}
		 
	});
	
	/* About section */
	
	$('.watch .overlay i').on('click',()=>{
		$('.watch .overlay').fadeOut(500,()=>{
			let vid=document.getElementById('myVideo');
			vid.play();
		});
		
	});
	$('.watch #myVideo').on('click',()=>{
		$('.watch .overlay').fadeIn(500,()=>{
			let vid=document.getElementById('myVideo'); 
		    vid.pause();
		});
		
	});
	
	$('.ourWorks button').on('click',()=>{ 
		$('.ourWorks .hidden').removeClass('hidden');
		$('.ourWorks button').css({disabled:'true',cursor:'not-allowed'});
	});
	
	 
	
	/*scroll*/
	
	$(window).on('scroll',function(){
		if($(window).scrollTop() >= $('.ourStory').offset().top){
			$('.pageUp').css('display','block');
		}else{
			$('.pageUp').css('display','none');
		}
	});
	
	$('.pageUp').on('click',()=>{
		console.log('ssssss');
		$('html,body').animate({
			scrollTop : $(window).scrollTop()-1000
		},500);
	});
	
});
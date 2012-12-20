$(document).ready(function(){
	
	$('dd').hide();
	$('dt').click(function(){
		$('dd:visible').hide('slow');
		$(this).siblings().show('slow');
		return false;			
	});
	
	$('#hide_all').click(function(){
		$('dd:visible').hide('slow');
		return false;
	});	
	
	
	$('#show_all').click(function(){
		$('dd:hidden').show('slow');
		return false;
	});	
		
		
	$('#navbar').each(function(){
		var $links, $active;
		
		$links = $(this).find('a');
		$tabs = $('#content').children();
		$active = $tabs.filter(".active");
		
		$tabs.not(".active").each(function () {
			$(this).hide();
		});
		
		$links.click(function(e){	
			$active.removeClass('active');
			$active.hide();
			$active = $($(this).attr("href"));
			$active.addClass('active');
			$active.show();	
			$('dd').hide();
			e.preventDefault();
		});
		
	});
	
	$('#print').click(function(){
		
		$tabs.show();
		$('dd:hidden').show();
		window.print();
		
		$tabs.not(".active").each(function () {
			$(this).hide();
		});
		$('dd').hide();
	});
    
});
 

			
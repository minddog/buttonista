/*
 * Buttonista - jQuery plugin for making button based menus
 * Author: Adam Ballai
 *
 * <div class="buttonista">
 *  <a href="" class="my-button">Click me</a>
 *  <ul class="my-button-list hide">
 *     <li>hello</li>
 *     <li>world</li>
 *  </ul>
 * </div>
 *
 * <script type="text/javascript">
 *   $('.my-button').buttonista();
 * </script>
 */

jQuery.fn.buttonista = function(options) {
	var settings = jQuery.extend({
		menu : 'ul',
		toggler : '.toggler'
	}, options);
	
	var toggleMenu = function() {
		$(this).parent()
			.children(settings.menu).toggleClass('open');
		return false;
	};
	
	return this.each(function() {
		var link = $(this);
		link.click( toggleMenu );

		var toggler = $(settings.toggler, link.parent());
		toggler.click(function() {
			link.click();
			return false;
		});
		
	});
};

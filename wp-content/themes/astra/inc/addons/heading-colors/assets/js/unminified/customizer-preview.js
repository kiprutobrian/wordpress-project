/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra
 * @since x.x.x
 */

( function( $ ) {

	/**
	 * Content <h1> to <h6> headings
	 */
	astra_css( 'astra-settings[heading-base-color]', 'color', 'h1, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6' );

	astra_generate_outside_font_family_css( 'astra-settings[font-family-h1]', 'h1, .entry-content h1' );
	astra_css('astra-settings[font-weight-h1]', 'font-weight', 'h1, .entry-content h1');	
	astra_css('astra-settings[line-height-h1]', 'line-height', 'h1, .entry-content h1, .elementor-widget-heading h1.elementor-heading-title');
	astra_css('astra-settings[text-transform-h1]', 'text-transform', 'h1, .entry-content h1');

	astra_generate_outside_font_family_css( 'astra-settings[font-family-h2]', 'h2, .entry-content h2' );
	astra_css('astra-settings[font-weight-h2]', 'font-weight', 'h2, .entry-content h2');	
	astra_css('astra-settings[line-height-h2]', 'line-height', 'h2, .entry-content h2, .elementor-widget-heading h2.elementor-heading-title');
	astra_css('astra-settings[text-transform-h2]', 'text-transform', 'h2, .entry-content h2');

	astra_generate_outside_font_family_css( 'astra-settings[font-family-h3]', 'h3, .entry-content h3' );
	astra_css('astra-settings[font-weight-h3]', 'font-weight', 'h3, .entry-content h3');	
	astra_css('astra-settings[line-height-h3]', 'line-height', 'h3, .entry-content h3, .elementor-widget-heading h3.elementor-heading-title');
	astra_css('astra-settings[text-transform-h3]', 'text-transform', 'h3, .entry-content h3');
	

	if ( astraCustomizer.page_builder_button_style_css ) {
		// Button Typo
		astra_generate_outside_font_family_css( 'astra-settings[font-family-button]', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"], .elementor-button-wrapper .elementor-button, .elementor-button-wrapper .elementor-button:visited, .wp-block-button .wp-block-button__link' );
		astra_generate_font_weight_css( 'astra-settings[font-family-button]', 'astra-settings[font-weight-button]', 'font-weight', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"], .elementor-button-wrapper .elementor-button, .elementor-button-wrapper .elementor-button:visited, .wp-block-button .wp-block-button__link' );
		astra_css( 'astra-settings[text-transform-button]', 'text-transform', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"], .elementor-button-wrapper .elementor-button, .elementor-button-wrapper .elementor-button:visited, .wp-block-button .wp-block-button__link' );
		astra_responsive_font_size( 'astra-settings[font-size-button]', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"], .elementor-button-wrapper .elementor-button.elementor-size-sm, .elementor-button-wrapper .elementor-button.elementor-size-xs, .elementor-button-wrapper .elementor-button.elementor-size-md, .elementor-button-wrapper .elementor-button.elementor-size-lg, .elementor-button-wrapper .elementor-button.elementor-size-xl, .elementor-button-wrapper .elementor-button, .wp-block-button .wp-block-button__link' );
		astra_css( 'astra-settings[theme-btn-line-height]', 'line-height', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"], .elementor-button-wrapper .elementor-button, .elementor-button-wrapper .elementor-button:visited, .wp-block-button .wp-block-button__link' );
		astra_css( 'astra-settings[theme-btn-letter-spacing]', 'letter-spacing', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"], .elementor-button-wrapper .elementor-button, .elementor-button-wrapper .elementor-button:visited, .wp-block-button .wp-block-button__link', 'px' );
	} else {
		// Button Typo
		astra_generate_outside_font_family_css( 'astra-settings[font-family-button]', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"]' );
		astra_generate_font_weight_css( 'astra-settings[font-family-button]', 'astra-settings[font-weight-button]', 'font-weight', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"]' );
		astra_css( 'astra-settings[text-transform-button]', 'text-transform', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"]' );
		astra_responsive_font_size( 'astra-settings[font-size-button]', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"]' );
		astra_css( 'astra-settings[theme-btn-line-height]', 'line-height', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"]' );
		astra_css( 'astra-settings[theme-btn-letter-spacing]', 'letter-spacing', 'button, .ast-button, input#submit, input[type="button"], input[type="submit"], input[type="reset"]', 'px' );
	}

} )( jQuery );
		
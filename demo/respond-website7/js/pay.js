/**
 * JS for the pay-what-you-want page
 * @author: Matthew Smith

 <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="matt@matthewsmith.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Respond Recurring Contribution">
  <input type="hidden" name="amount" value="25.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>


  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_xclick-subscriptions">
    <input type="hidden" name="business" value="matt@matthewsmith.com">
    <input type="hidden" name="lc" value="US">
    <input type="hidden" name="item_name" value="Respond Recurring Contribution">
    <input type="hidden" name="no_note" value="1">
    <input type="hidden" name="src" value="1">
    <input type="hidden" name="a3" value="5.00">
    <input type="hidden" name="p3" value="1">
    <input type="hidden" name="t3" value="M">
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="bn" value="PP-SubscriptionsBF:btn_subscribeCC_LG.gif:NonHostedGuest">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>

 */
var payWhatever = (function() {

  'use strict';

  var x, els, data, logo, email, currency, returnUrl, cancelUrl, useSandbox, amount, url, form, frequency;

  // setup toggle drawer
  els = document.querySelectorAll('[pay-now]');

  for(x=0; x<els.length; x++) {
    els[x].addEventListener('click', function() {

      // setup
      logo = 'https://respondcms.com/resources/respond-paypal-logo.png';
			email = 'matt@matthewsmith.com';
			currency = 'USD';
			returnUrl = 'https://respondcms.com/download';
			cancelUrl = 'https://respondcms.com/download';
			useSandbox = false;
			amount = parseFloat(document.querySelector('#amount').value);

			// one time v. subscription
			if(document.querySelector('#one-time').checked === true) {

        // data setup
  			data = {
  				'email': email,
  				'cmd': '_xclick',
  				'lc': 'US',
  				'currency_code': 'USD',
  				'business': email,
  				'charset': 'utf-8',
  				'return': returnUrl,
  				'cancel_return': cancelUrl,
  				'image_url': logo,
  				'item_name': 'Respond Contribution',
  				'quantity': 1,
  				'amount': parseFloat(amount),
  				'item_number': 'RESPOND_LICENSE'
  			};

      }
      else { // subscription

        data = {
  				'email': email,
  				'cmd': '_xclick-subscriptions',
  				'lc': 'US',
  				'currency_code': 'USD',
  				'business': email,
  				'charset': 'utf-8',
  				'return': returnUrl,
  				'cancel_return': cancelUrl,
  				'image_url': logo,
  				'item_name': 'Respond Recurring Contribution',
  				'src': 1,
  				'a3': parseFloat(amount),
  				'p3': 1,
  				't3': 'M',
  				'item_number': 'RESPOND_LICENSE'
  			};

      }

			// live url
			url = 'https://www.paypal.com/cgi-bin/webscr';

			// set to sandbox if specified
			if(useSandbox){
				url = 'https://www.sandbox.paypal.com/cgi-bin/webscr'
			}

			// create form with data values
			form = '<form id="paypal-form" action="' + url + '" method="POST">';

			for(x in data){
				form += '<input type="hidden" name="'+x+'" value="'+data[x]+'" />';
			}

			form += '</form>';

			// append form to body
			var body = document.querySelector('body');
			body.insertAdjacentHTML('beforeend', form);

			// submit form
			document.getElementById('paypal-form').submit();


    });
  }

}());
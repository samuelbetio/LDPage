/**
 * JS for the Respond site
 * @author: Matthew Smith
 */
var site = (function() {

  'use strict';

  var x, els, drawer, el, plan, starter, core, pro, target, close;

  // setup toggle drawer
  els = document.querySelectorAll('[toggle-drawer]');

  for(x=0; x<els.length; x++) {
    els[x].addEventListener('click', function() {

      drawer = document.querySelector('.drawer');

      // toggle [active]
      if(drawer.hasAttribute('active')) {
        drawer.removeAttribute('active');
      }
      else {
        drawer.setAttribute('active', '');
      }

    });
  }
  
  // setup show-subscribe data-plan="respond-core"
  els = document.querySelectorAll('[show-subscribe]');

  for(x=0; x<els.length; x++) {
    els[x].addEventListener('click', function(e) {
    
      target = e.target;    
      el = document.querySelector('#subscribe-box');

      // toggle [active]
      if(el.hasAttribute('active')) {
        el.removeAttribute('active');
      }
      else {
        el.setAttribute('active', '');
      }
     
      // get plan
      plan = target.getAttribute('data-plan');
     
    });
  }
  
  // close subscribe box
  close = document.querySelector('#close-subscribe-box');
  
  if(close != null) {
      close.addEventListener('click', function(e) { 
        el = document.querySelector('#subscribe-box');
        el.removeAttribute('active');
      });
  }

}());

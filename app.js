
(function(){
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  function showAll(){ els.forEach(function(el){ el.classList.add('in'); }); }
  if(!('IntersectionObserver' in window)){ showAll(); return; }
  var io=new IntersectionObserver(function(es){
    es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
  },{rootMargin:'0px 0px -6% 0px',threshold:0.01});
  els.forEach(function(el,i){ el.style.transitionDelay=Math.min(i%6,5)*40+'ms'; io.observe(el); });
  setTimeout(showAll, 2500);
})();

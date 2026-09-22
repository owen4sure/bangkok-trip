
(function(){
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  function showAll(){ els.forEach(function(el){ el.classList.add('in'); }); }
  if(!('IntersectionObserver' in window)){ showAll(); return; }
  var io=new IntersectionObserver(function(es){
    es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
  },{rootMargin:'0px 0px -6% 0px',threshold:0.01});
  var vh=window.innerHeight||800;
  els.forEach(function(el,i){ var r=el.getBoundingClientRect(); if(r.top<vh*1.15){ el.classList.add('in'); return; } el.style.transitionDelay=Math.min(i%6,5)*40+'ms'; io.observe(el); });
  setTimeout(showAll, 1200);
})();

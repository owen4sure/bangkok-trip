
(function(){
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function(es){
    es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
  },{rootMargin:'0px 0px -8% 0px',threshold:0.05}) : null;
  document.querySelectorAll('.reveal').forEach(function(el,i){
    if(!io){ el.classList.add('in'); return; }
    el.style.transitionDelay = Math.min(i%6,5)*40+'ms';
    io.observe(el);
  });
})();

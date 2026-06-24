(function () {
  var y = document.getElementById('yr'); if (y) y.textContent = new Date().getFullYear();
  var reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  var els = [].slice.call(document.querySelectorAll('[data-reveal]'));
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (ent) {
      ent.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }
  var qas = [].slice.call(document.querySelectorAll('.qa'));
  qas.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) qas.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
})();

(function () {
  const { C, $ } = U, G = C.gallery, grid = $('#grid'), lb = $('#lb'), li = $('#li'); let cur = 0;
  const art = i => 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 ${i.h}'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${i.c1}'/><stop offset='1' stop-color='${i.c2}'/></linearGradient></defs><rect width='300' height='${i.h}' fill='url(#g)'/><text x='150' y='${i.h / 2 + 30}' font-size='70' text-anchor='middle'>${i.e}</text><text x='50' y='50' font-size='24'>✨</text><text x='235' y='${i.h - 30}' font-size='24'>⭐</text></svg>`);
  const set = (img, i) => { img.alt = i.t + ' (anime-style illustration)'; img.onerror = () => { img.onerror = null; img.src = art(i); }; img.src = i.src || art(i); };
  G.forEach((x, n) => { const b = document.createElement('button'); b.setAttribute('aria-label', 'Open ' + x.t); const im = document.createElement('img'); im.loading = 'lazy'; set(im, x); b.appendChild(im); b.onclick = () => open(n); grid.appendChild(b); });
  function open(n) { cur = (n + G.length) % G.length; set(li, G[cur]); $('#lc').textContent = G[cur].t + ' (' + (cur + 1) + '/' + G.length + ')'; lb.hidden = false; $('#lx').focus(); }
  const close = () => { lb.hidden = true; };
  $('#lx').onclick = close; $('#lp').onclick = () => open(cur - 1); $('#ln').onclick = () => open(cur + 1); lb.onclick = e => { if (e.target === lb) close(); };
  document.addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') open(cur - 1); if (e.key === 'ArrowRight') open(cur + 1); });
})();

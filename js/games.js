(function () {
  const { C, $, $$, store, sfx } = U, tb = $('#tabs'), g = $('#game'), names = ['💗 Catch the Hearts', '🧠 Birthday Quiz', '🎁 Mystery Gift', '🌸 Personality'];
  let stop = null;
  function show(i) { if (stop) stop(); stop = null; $$('button', tb).forEach((b, j) => { b.className = 'btn' + (i === j ? '' : ' ghost'); b.setAttribute('aria-selected', i === j); }); g.innerHTML = ''; [catchGame, birthdayQuiz, mystery, personality][i](g); }
  names.forEach((t, i) => { const b = document.createElement('button'); b.textContent = t; b.setAttribute('role', 'tab'); b.onclick = () => show(i); tb.appendChild(b); });

  function catchGame(el) {
    el.innerHTML = '<p><b id="t">⏱ 30</b> &nbsp; <b id="s">💗 0</b> &nbsp; <span id="b"></span></p><div class="field" id="f"><div id="basket">🧺</div><div class="ov" id="ov"></div></div><p><small>Move your finger or mouse, or use ← →</small></p>';
    const f = $('#f'), bk = $('#basket'), ov = $('#ov'); let x = 50, hs = [], score = 0, t = 30, run = false, tick, sec;
    const best = () => store.get('catchBest', 0), mv = v => { x = Math.max(6, Math.min(94, v)); bk.style.left = x + '%'; };
    $('#b').textContent = 'Best ' + best(); mv(50);
    f.addEventListener('pointermove', e => { const r = f.getBoundingClientRect(); mv((e.clientX - r.left) / r.width * 100); });
    const key = e => { if (!run) return; if (e.key === 'ArrowLeft') mv(x - 7); if (e.key === 'ArrowRight') mv(x + 7); }; document.addEventListener('keydown', key);
    const clear = () => { run = false; clearInterval(tick); clearInterval(sec); hs.forEach(h => h.el.remove()); hs = []; };
    stop = () => { clear(); document.removeEventListener('keydown', key); };
    function menu(title, text) { ov.hidden = false; ov.innerHTML = `<div><h2>${title}</h2><p>${text}</p><button class="btn" id="go">${score || t < 30 ? 'Play again' : 'Start'}</button></div>`; $('#go').onclick = start; }
    function end() { clear(); if (score > best()) store.set('catchBest', score); $('#b').textContent = 'Best ' + best(); menu('Time is up!', 'You caught ' + score + ' hearts 💗'); }
    function start() {
      clear(); score = 0; t = 30; run = true; ov.hidden = true; $('#t').textContent = '⏱ 30'; $('#s').textContent = '💗 0';
      tick = setInterval(() => { const el = 30 - t, v = 1.3 + el * .06;
        hs = hs.filter(h => { h.y += v; h.el.style.top = h.y + '%'; if (h.y >= 82 && h.y <= 96 && Math.abs(h.x - x) < 11) { score++; $('#s').textContent = '💗 ' + score; sfx(900, .06); h.el.remove(); return false; } if (h.y > 104) { h.el.remove(); return false; } return true; });
        if (Math.random() < .07 + el * .005) { const e = document.createElement('span'); e.className = 'h'; e.textContent = '💗'; const h = { el: e, x: 8 + Math.random() * 84, y: -6 }; e.style.left = h.x + '%'; f.appendChild(e); hs.push(h); } }, 40);
      sec = setInterval(() => { t--; $('#t').textContent = '⏱ ' + t; if (t <= 0) end(); }, 1000);
    }
    menu('Catch the Hearts!', 'You have 30 seconds. It gets faster!');
  }

  function quiz(el, qs, fin) {
    let i = 0, ans = [];
    (function draw() {
      if (i >= qs.length) { el.innerHTML = fin(ans) + '<p><button class="btn" id="re">Play again ↻</button></p>'; $('#re', el).onclick = () => { i = 0; ans = []; draw(); }; return; }
      const q = qs[i]; el.innerHTML = `<div class="qz"><small>Question ${i + 1} of ${qs.length}</small><h3>${q.q}</h3><div class="opts"></div><p id="fb" aria-live="polite"></p></div>`;
      const o = $('.opts', el);
      q.o.forEach((txt, j) => { const b = document.createElement('button'); b.className = 'glass opt'; b.textContent = txt;
        b.onclick = () => { sfx(500 + j * 80); ans.push(j); $$('.opt', o).forEach((x, k) => { x.disabled = true; if (q.a === undefined) { if (k === j) x.classList.add('ok'); } else if (k === q.a) x.classList.add('ok'); else if (k === j) x.classList.add('no'); });
          if (q.a !== undefined) $('#fb', el).textContent = j === q.a ? '✅ Correct!' : '💫 Not quite!';
          const n = document.createElement('button'); n.className = 'btn'; n.textContent = i + 1 === qs.length ? 'See result' : 'Next'; n.onclick = () => { i++; draw(); }; $('.qz', el).appendChild(n); n.focus(); };
        o.appendChild(b); });
    })();
  }
  function birthdayQuiz(el) {
    quiz(el, C.quiz, a => { const s = a.filter((p, i) => p === C.quiz[i].a).length, n = C.quiz.length;
      return `<div class="glass result"><div class="big">${s >= n - 1 ? '🏆' : s >= n / 2 ? '🎉' : '🌱'}</div><h2>${s} / ${n}</h2><p>${s >= n - 1 ? 'Birthday genius!' : s >= n / 2 ? 'Great job, party pro!' : 'Cake knowledge in progress. Try again!'}</p></div>`; });
  }
  function personality(el) {
    quiz(el, C.personality.questions, a => { const c = [0, 0, 0, 0]; a.forEach(p => c[p]++); const r = C.personality.results[c.indexOf(Math.max.apply(null, c))];
      return `<div class="result" style="background:${r.bg}"><div class="big">${r.emoji}</div><h2>${r.name}</h2><p>${r.desc}</p></div>`; });
  }
  function mystery(el) {
    const gifts = C.mystery.slice().sort(() => Math.random() - .5); let picks = 0, score = 0;
    el.innerHTML = '<p><b>Pick 3 mystery gifts!</b> Score: <b id="ms">0</b></p><div class="cards"></div><div id="mr"></div>';
    gifts.forEach((x, i) => { const b = document.createElement('button'); b.className = 'glass card'; b.innerHTML = '<span>🎁</span>Mystery'; b.setAttribute('aria-label', 'Mystery gift ' + (i + 1));
      b.onclick = () => { if (picks >= 3) return; picks++; score += x.p; b.disabled = true; b.innerHTML = `<span>${x.e}</span>${x.m} (+${x.p})`; b.classList.add('pop'); sfx(500 + i * 90); $('#ms', el).textContent = score;
        if (picks === 3) { $$('.card', el).forEach(c => c.disabled = true); $('#mr', el).innerHTML = `<h3>${score >= 7 ? 'Jackpot! 🎉' : score >= 5 ? 'Lovely haul! 💗' : 'Cosy gifts! Try again?'}</h3><button class="btn" id="re">Play again ↻</button>`; $('#re', el).onclick = () => mystery(el); } };
      $('.cards', el).appendChild(b); });
  }
  show(0);
})();

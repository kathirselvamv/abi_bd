(function () {
  const C = window.CONFIG, $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => [].slice.call((r || document).querySelectorAll(s));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = { get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v === null ? d : v; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  let actx, music;
  const U = window.U = {
    C, $, $$, store,
    sfx(f = 660, d = .12) { if (!store.get('sound', false)) return; try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); const o = actx.createOscillator(), g = actx.createGain(); o.frequency.value = f; g.gain.value = .05; o.connect(g); g.connect(actx.destination); o.start(); o.stop(actx.currentTime + d); } catch (e) {} },
    confetti(n = 70, em) {
      if (reduce) return; const box = document.createElement('div'); box.className = 'cf'; box.setAttribute('aria-hidden', 'true'); const cols = ['#FFC7DD', '#CDBBFF', '#BFE8FF', '#FF6FAE', '#FFF7E8', '#ffd36e'];
      for (let i = 0; i < n; i++) { const s = document.createElement('span'); if (em) s.textContent = em[~~(Math.random() * em.length)]; else s.style.background = cols[i % 6]; s.style.left = Math.random() * 100 + '%'; s.style.animationDuration = 3 + Math.random() * 3 + 's'; s.style.animationDelay = Math.random() * 1.5 + 's'; box.appendChild(s); }
      document.body.appendChild(box); setTimeout(() => box.remove(), 8000);
    },
    type(el, text, speed = 35, cb) { el.textContent = ''; if (reduce) { el.textContent = text; cb && cb(); return; } let i = 0; (function n() { el.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(n, speed); else cb && cb(); })(); }
  };
  // Sky
  const sky = document.createElement('div'); sky.className = 'sky'; sky.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < 45; i++) { const s = document.createElement('i'); s.className = 'star'; const z = 2 + Math.random() * 2; s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${z}px;height:${z}px;animation-delay:${Math.random() * 4}s`; sky.appendChild(s); }
  ['💗', '⭐', '🌸', '✨', '☁️', '🦋', '🌸', '💗', '✨', '⭐'].forEach((e, i) => { const s = document.createElement('span'); s.className = 'fl'; s.textContent = e; s.style.cssText = `left:${Math.random() * 100}%;font-size:${14 + Math.random() * 16}px;animation-duration:${14 + Math.random() * 14}s;animation-delay:-${Math.random() * 14}s`; sky.appendChild(s); });
  document.body.prepend(sky);
  // Chibi characters
  $$('.chibi').forEach(c => { c.setAttribute('role', 'img'); c.setAttribute('aria-label', 'A cute chibi girl'); if (c.dataset.size) c.style.setProperty('--s', c.dataset.size + 'px'); c.innerHTML = '<i class="a"></i><i class="f"></i><i class="b"></i><i class="e" style="left:28%"></i><i class="e" style="left:60%"></i><i class="k" style="left:18%"></i><i class="k" style="left:70%"></i><i class="m"></i><i class="r">🎀</i>'; });
  // Navigation
  const page = document.body.dataset.page, L = [['index', 'Welcome'], ['birthday', 'Birthday'], ['gifts', 'Gifts'], ['games', 'Games'], ['gallery', 'Gallery'], ['memories', 'Garden'], ['kavithai', 'Kavithai'], ['letter', 'Letter'], ['surprise', 'Finale']];
  const seen = store.get('visited', []); if (seen.indexOf(page) < 0) { seen.push(page); store.set('visited', seen); }
  const hd = document.createElement('header'); hd.className = 'top';
  hd.innerHTML = `<b>✨ ${C.name}</b><nav class="links" id="nav" aria-label="Main">${L.map(l => `<a href="${l[0]}.html" class="${l[0] === page ? 'on' : ''}" ${l[0] === page ? 'aria-current="page"' : ''}>${l[1]}</a>`).join('')}</nav><div class="tools"><span title="Pages explored">${seen.filter(p => L.some(l => l[0] === p)).length}/${L.length} 🌟</span><button id="snd" aria-pressed="false"></button><button class="burger" id="bg" aria-label="Menu" aria-expanded="false">☰</button></div>`;
  document.body.prepend(hd);
  $('#bg').onclick = e => { const o = $('#nav').classList.toggle('open'); e.target.setAttribute('aria-expanded', o); };
  const snd = $('#snd'), paint = () => { const on = store.get('sound', false); snd.textContent = on ? '🔊' : '🔇'; snd.setAttribute('aria-pressed', on); snd.setAttribute('aria-label', on ? 'Mute sound' : 'Turn sound on'); };
  snd.onclick = () => { const on = !store.get('sound', false); store.set('sound', on); paint(); try { if (C.music) { music = music || Object.assign(new Audio(C.music), { loop: true, volume: .3 }); on ? music.play().catch(() => {}) : music.pause(); } } catch (e) {} U.sfx(880); }; paint();
  if (page !== 'index') { const h = document.createElement('a'); h.href = 'index.html'; h.className = 'btn home'; h.textContent = '🏠'; h.setAttribute('aria-label', 'Home'); document.body.appendChild(h); }
  const ft = document.createElement('footer'); ft.innerHTML = '<button>Reset progress</button>'; ft.firstChild.onclick = () => { if (confirm('Reset all progress?')) { try { localStorage.clear(); } catch (e) {} location.href = 'index.html'; } }; document.body.appendChild(ft);
  // Page transitions
  document.addEventListener('click', e => { const a = e.target.closest('a[href$=".html"]'); if (!a || e.metaKey || e.ctrlKey) return; e.preventDefault(); document.body.classList.add('leave'); setTimeout(() => location.href = a.href, 330); });
  // Wave text
  $$('.wave').forEach(w => { w.setAttribute('aria-label', w.textContent); w.innerHTML = [...w.textContent].map((c, i) => `<span aria-hidden="true" style="animation-delay:${i * .08}s">${c === ' ' ? '&nbsp;' : c}</span>`).join(''); });

  const pages = {
    index() {
      $('#enter').onclick = () => { U.sfx(880); U.confetti(80, ['🌸', '✨', '💗']); $('#enter').disabled = true; setTimeout(() => { document.body.classList.add('leave'); setTimeout(() => location.href = 'birthday.html', 330); }, 1200); };
    },
    birthday() {
      const [y, m, d] = C.date.split('-').map(Number), target = new Date(y, m - 1, d, 0, 0, 0), box = $('#count');
      const tick = () => { const ms = target - new Date(); if (ms <= 0) { box.innerHTML = `<div class="glass"><h2>🎉 Today is ${C.name}'s birthday! 🎉</h2><p>${C.celebration}</p></div>`; return false; }
        const s = ~~(ms / 1000); box.innerHTML = '<div class="tiles">' + [['days', ~~(s / 86400)], ['hours', ~~(s % 86400 / 3600)], ['minutes', ~~(s % 3600 / 60)], ['seconds', s % 60]].map(x => `<div class="glass tile"><b>${x[1]}</b><small>${x[0]}</small></div>`).join('') + '</div><p>until the big day!</p>'; return true; };
      if (tick()) { const t = setInterval(() => { if (!tick()) clearInterval(t); }, 1000); }
      $('#wishBtn').onclick = () => { const w = $('#wish'); w.hidden = false; U.type(w, C.wish, 30); U.confetti(60, ['✨', '💗', '🎈']); U.sfx(800); };
    },
    gifts() {
      const g = $('#gifts'), done = store.get('gifts', []); let busy = false;
      const reveal = (el, i, anim) => { const x = C.gifts[i]; el.innerHTML = `<div class="${anim ? 'pop' : ''}"><div class="big">${x.emoji}</div><h3>${x.title}</h3><p>${x.text}</p></div>`; };
      C.gifts.forEach((x, i) => { const c = document.createElement('div'); c.className = 'glass gift';
        if (done.indexOf(i) >= 0) reveal(c, i); else { const b = document.createElement('button'); b.className = 'gbox'; b.textContent = '🎁'; b.setAttribute('aria-label', 'Open gift ' + (i + 1));
          b.onclick = () => { if (busy) return; busy = true; b.classList.add('shake'); U.sfx(520); setTimeout(() => { reveal(c, i, true); done.push(i); store.set('gifts', done); U.sfx(880, .3); U.confetti(30, ['✨']); busy = false; }, 550); }; c.appendChild(b); }
        g.appendChild(c); });
    },
    memories() {
      const pos = [[8, 18], [40, 4], [72, 20], [18, 58], [52, 50], [78, 66]], icons = ['🌸', '🌷', '🌻', '🌼', '🪻', '🌹'], seen = store.get('flowers', []), msg = $('#msg'), sec = $('#secret');
      const check = () => { $('#found').textContent = seen.length; if (seen.length >= 4) { sec.hidden = false; sec.textContent = C.hidden; } };
      icons.forEach((ic, i) => { const b = document.createElement('button'); b.className = 'fw'; b.textContent = ic; b.style.cssText = `left:${pos[i][0]}%;top:${pos[i][1]}%;animation-delay:${i * .3}s`; b.setAttribute('aria-label', 'Flower ' + (i + 1));
        b.onclick = () => { U.sfx(600 + i * 60); U.type(msg, C.memories[i], 25); if (seen.indexOf(i) < 0) { seen.push(i); store.set('flowers', seen); check(); } }; $('#garden').appendChild(b); });
      check();
    },
    letter() {
      const paper = $('#paper'); let run = 0;
      const write = () => { const id = ++run; paper.innerHTML = ''; paper.hidden = false; const lines = C.letter.concat(['— ' + C.from]);
        (function n(i) { if (i >= lines.length || id !== run) return; const p = document.createElement('p'); paper.appendChild(p); U.type(p, lines[i], 22, () => setTimeout(() => n(i + 1), 350)); })(0); };
      $('#env').onclick = () => { U.sfx(700); $('#env').hidden = true; $('#tools').hidden = false; write(); };
      $('#replay').onclick = write;
      $('#copy').onclick = async () => { const t = C.letter.join('\n\n') + '\n\n— ' + C.from; try { await navigator.clipboard.writeText(t); $('#cm').textContent = 'Copied! 💗'; } catch (e) { const ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); $('#cm').textContent = 'Copied! 💗'; } catch (e2) { $('#cm').textContent = 'Copy failed. Please select the text manually.'; } ta.remove(); } setTimeout(() => $('#cm').textContent = '', 2500); };
    },
    surprise() {
      const open = () => { U.sfx(440, .4); U.sfx(990, .5); $('#chestBox').hidden = true; $('#reveal').hidden = false; $('#fm').textContent = C.finalMessage; $('#fw').textContent = C.finalWish; $('#ban').textContent = '🎉 Happy Birthday ' + C.name + '! 🎉'; U.confetti(130, ['⭐', '🌸', '✨', '💗', '🎊']); };
      $('#chest').onclick = open; $('#again').onclick = () => { $('#reveal').hidden = true; $('#chestBox').hidden = false; };
    }
  };
  if (pages[page]) pages[page]();
})();

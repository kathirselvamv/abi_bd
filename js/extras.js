/* Extras: name rain, Tamil kavithai, konjal rhymes, 23-candle cake. Edit the lists below freely. */
(function () {
  const U = window.U, $ = U.$, $$ = U.$$, sfx = U.sfx, page = document.body.dataset.page, RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pick = a => a[~~(Math.random() * a.length)], BLOW_LEVEL = 0.2; // lower BLOW_LEVEL = more sensitive microphone

  const WORDS = ['Abiiiiii 💗', 'Abiiiiii ✨', 'Abiii chellammm 🧸', 'Abii kuttyyy 🌸', 'Azhaguuu 🎀', 'Chellakuttyyy 💕', 'Thangoooo 🦋', 'Ammu kuttyyy 🐰', 'Birthday ponnuuu 🎂', 'Sirippu raniii 👑', 'Happy birthday Abiiiiii 🎉', 'Enga Abiiiiii 🌙', 'அபி 💗', 'செல்லம் 🌸', 'தங்கம் ✨'];
  const POEMS = [
    { t: 'அபிக்கு ஒரு கவிதை 💗', x: 'அழகான நாளில் பிறந்தவளே,\nஅன்பான நினைவில் நிறைந்தவளே,\nசின்னச் சின்ன சிரிப்பாலே,\nசுற்றிய உலகை அழகாக்குபவளே!\n\nநிலவுக்கு ஒளி கடன் கொடுத்தாயோ?\nநட்சத்திரம் உன்னிடம் நட்பு கொண்டதோ?\nஉன் சிரிப்பைக் கண்ட இந்த வானமே,\nஇன்னும் கொஞ்சம் அழகாக மாறியதோ!\n\nபிறந்தநாள் என்பது ஒரு நாள் மட்டும்,\nஉன் மகிழ்ச்சி தொடரட்டும் தினமும்,\nகனவுகள் எல்லாம் சிறகடிக்கட்டும்,\nகவலைகள் எல்லாம் தூரம் பறக்கட்டும்!\n\nஅபியே, உன் பாதை பூக்களாகட்டும்,\nஉன் ஒவ்வொரு நாளும் இனிமையாகட்டும்,\nஇன்று மட்டும் அல்ல, எல்லா நாளும்,\nஉன் முகத்தில் புன்னகை பூக்கட்டும்! 🌸' },
    { t: 'பூக்களின் வாழ்த்து 🌺', x: 'பூக்கள் எல்லாம் உன்னைப் பார்த்து,\nபுன்னகை செய்யக் கற்றுக்கொண்டன,\nகாற்றும் இன்று உன் பெயர் சொல்லி,\nபிறந்தநாள் பாடல் பாடுகிறது! 🌺' },
    { t: 'வானவில் வாழ்த்து 🌈', x: 'மழைத்துளியும் மகிழ்ச்சி கொள்ளும்,\nநீ சிரிக்கும் அந்த நொடியில்,\nவாழ்த்துகள் அபி, இனிய நாளில்,\nவானவில் வண்ணம் உன் வாழ்வில்! 🌈' }
  ];
  const KONJAL = [
    'Abiiii abiiii, birthday babyyy, un sirippu semma cutieee! 🎀', 'Chellam chellam, chocolate ullam, un birthday mattum full-ah jolly ullam! 🍫',
    'Abii kutty, strawberry cutie, un smile-u dhaan romba beauty! 🍓', 'Azhagu rani, sweet-u honey, innikku un birthday — semma funny! 👑',
    'Abii ma, cupcake ma, happy-ah iru chellakutty ma! 🧁', 'Chinna chinna smile-u, super cute style-u, Abii vandha happy every mile-u! 🌸',
    'Abiiiiii, konjam siriii, un birthday-la worries ellam veliya parrii! 🦋', 'Pink-u ribbon, cute-u vision, Abii birthday — happiness explosion! 🎉',
    'Kutty kutty star-u, nee oru super-u, unakku birthday wishes thousand-u! ⭐', "Abii baby, don't be lazy, birthday full-ah be happy and crazy! 🎂",
    'Chella ponnu, chocolate kannu, happy birthday — sirichitte iru! 💗', 'Abii oda birthday scene-u, happiness full screen-u! 🎀',
    'Abii kutty, sweet-u butterfly, un birthday-la sirippu sky-high! 🦋', 'Thangam thangam, Abii thangam, un birthday-ku ellame mangalam! ✨',
    'Cake-u cut-u, smile-u set-u, Abii birthday-la no regret-u! 🍰', 'Pattu paavadai, pink-u dress-u, Abii birthday-ku best-u best-u! 🎀',
    'Nila nila vaa vaa, Abii birthday-ku vaa vaa, cake-u saapida ellarum vaa vaa! 🌙', 'Chellam chellam, selfie edu, birthday girl-u pose-u kodu! 📸',
    'Gift-u kudu, hug-u kudu, Abii birthday-ku party vechchu kodu! 🎁', 'Kutty ponnu, sugar cube-u, Abii birthday semma super-u! 🧊',
    'Abii vaa vaa, dance-u aadu, birthday-ku nee thaan queen-u paaru! 💃', 'Rainbow colour, Abii glow-u, birthday-la nee thaan show-u! 🌈',
    'Ice cream scoop-u, Abii smile-u, innikku un day-u super hit-u! 🍨', 'Balloon parakkum, Abii sirikkum, birthday vibes ellam thorakkum! 🎈',
    'Moon-u light-u, Abii bright-u, un birthday semma right-u! 🌙', 'Teddy bear-u, Abii dear-u, birthday kondaadu cheer-u! 🧸',
    'Happy happy, Abii bubbly, un birthday-la everything lovely! 🫧', 'Aasai chellam, Abii nallam, un birthday-ku wishes ellam! 💌'
  ];
  const TAMIL_WISH = 'அபி, உன் ஆசைகள் எல்லாம் நிறைவேறட்டும்! இனிய பிறந்தநாள் வாழ்த்துகள்! 🎂💗';

  function copyText(t, msg) {
    const ok = () => { msg.textContent = 'Copied! 💗'; setTimeout(() => msg.textContent = '', 2200); };
    const old = () => { const ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) { msg.textContent = 'Please select and copy manually.'; } ta.remove(); };
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(ok, old); else old();
  }

  // 1. Name rain
  function rain() {
    if (RM) return; const box = document.createElement('div'); box.className = 'rain'; box.setAttribute('aria-hidden', 'true'); document.body.appendChild(box);
    const COL = ['#FFC7DD', '#CDBBFF', '#BFE8FF', '#FFF7E8', '#ff9cc8', '#ffe08a'], MAX = innerWidth < 600 ? 16 : 30; let n = 0;
    function drop() {
      if (document.hidden || n >= MAX) return; const r = Math.random(), s = document.createElement('span'), i = document.createElement('i');
      s.className = 'rw'; i.textContent = pick(WORDS); if (r < .36) i.parentNode, s.classList.add(r < .12 ? 'bn' : r < .24 ? 'sw' : 'gl'); s.appendChild(i);
      s.style.cssText = `left:${Math.random() * 85}%;font-size:${14 + Math.random() * 22}px;color:${pick(COL)};--rot:${~~(Math.random() * 40 - 20)}deg;animation-duration:${6 + Math.random() * 7}s`;
      n++; s.addEventListener('animationend', e => { if (e.target === s) { s.remove(); n--; } }); box.appendChild(s);
    }
    for (let k = 0; k < 8; k++) setTimeout(drop, k * 150); setInterval(drop, innerWidth < 600 ? 650 : 420);
    function big() { if (document.hidden) return; const b = document.createElement('div'); b.className = 'rbig'; b.setAttribute('aria-hidden', 'true'); b.textContent = pick(['ABIIIIIIII 💗', 'ABIIIIIIII ✨', 'ABIIIIIIII 🎂']); b.addEventListener('animationend', () => b.remove()); document.body.appendChild(b); }
    setTimeout(big, 3500); setInterval(big, 13000);
  }
  function floatWords(n) {
    if (RM) return; for (let k = 0; k < n; k++) { const w = document.createElement('div'); w.className = 'hbw'; w.setAttribute('aria-hidden', 'true'); w.textContent = 'Happy Birthday Abii! ' + pick(['💗', '🎉', '🌸', '✨']); w.style.left = Math.random() * 75 + '%'; w.style.animationDelay = Math.random() * 2 + 's'; document.body.appendChild(w); setTimeout(() => w.remove(), 10000); }
  }

  // 2. Kavithai
  function poems() {
    const t = $('#ptext'); if (!t) return; let i = 0, tok = 0;
    const split = x => (window.Intl && Intl.Segmenter) ? [...new Intl.Segmenter('ta', { granularity: 'grapheme' }).segment(x)].map(s => s.segment) : Array.from(x);
    function show() { const p = POEMS[i % POEMS.length], my = ++tok, g = split(p.x); $('#ptitle').textContent = p.t; if (RM) { t.textContent = p.x; return; } t.textContent = ''; let k = 0; (function n() { if (my !== tok) return; t.textContent = g.slice(0, ++k).join(''); if (k < g.length) setTimeout(n, 45); })(); }
    $('#pnext').onclick = () => { i++; show(); sfx(600); U.confetti(12, ['🌸', '🌺']); };
    show(); if (!RM) setInterval(() => U.confetti(6, ['🌸', '🌺', '🪷']), 4500);
  }

  // 3. Konjal
  function konjal() {
    if (!$('#bubble')) return; let last = -1; const w = $('#kwrap');
    $('#knext').onclick = () => {
      let i; do { i = ~~(Math.random() * KONJAL.length); } while (i === last); last = i;
      const b = $('#bubble'); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
      $('#btxt').textContent = KONJAL[i] + ' ' + pick(['😚', '🥰', '😆', '🤭', '😻', '🍭', '🌈', '🎈']); $('#kch').textContent = pick(['😚', '🥰', '😆', '🤭', '😻']); $('#kcopy').hidden = false; sfx(600 + ~~(Math.random() * 400), .1);
      if (!RM) for (let k = 0; k < 6; k++) { const h = document.createElement('span'); h.className = 'hrt'; h.textContent = pick(['💗', '💕', '💖']); h.style.left = 20 + Math.random() * 60 + '%'; h.style.setProperty('--dx', ~~(Math.random() * 80 - 40) + 'px'); w.appendChild(h); setTimeout(() => h.remove(), 1500); }
    };
    $('#kcopy').onclick = () => copyText($('#btxt').textContent, $('#kcm'));
  }

  // 4. Cake
  function cake() {
    const app = $('#cakeApp'); if (!app) return; let mic = null, raf = 0, out = false, stage;
    const stopMic = () => { cancelAnimationFrame(raf); if (mic) { try { mic.st.getTracks().forEach(t => t.stop()); mic.ac.close(); } catch (e) {} mic = null; } };
    function build() {
      stopMic(); out = false;
      app.innerHTML = '<div class="cakewrap"><div class="cakebody" id="cb" role="img" aria-label="A pink and lavender birthday cake with 23 candles"><div class="cdl">' + '<span class="c"><i class="fm"></i><i class="sm"></i></span>'.repeat(23) + '</div><div class="tier tt"><b>🍓</b><b>🍓</b><b>🍓</b></div><div class="tier tm"><em>⭐</em><em>✨</em><em>⭐</em></div><div class="tier tb"><span>23</span></div><div class="plate"></div></div></div><div id="stage" aria-live="polite"></div>';
      stage = $('#stage'); s1();
    }
    function s1() { stage.innerHTML = '<h2>Abiiiiii, make a wish! ✨</h2><button class="btn" id="rdy">Ready-aa, Abii? 💗</button>'; $('#rdy').onclick = () => { sfx(700); s2(); }; }
    function s2() {
      stage.innerHTML = '<h2>Blow out the candles! 🕯️</h2><p>Blow into your microphone, or just tap the button.</p><button class="btn ghost" id="mic">Use my microphone 🎤</button><button class="btn" id="blw">Blow the Candles! 💨</button><p id="mm"></p>';
      $('#blw').onclick = blow; $('#mic').onclick = startMic;
    }
    async function startMic() {
      const mm = $('#mm'), AC = window.AudioContext || window.webkitAudioContext;
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !AC) { mm.textContent = 'Microphone is not available here. Please tap the button 💨'; return; }
      try {
        const st = await navigator.mediaDevices.getUserMedia({ audio: true }), ac = new AC(), an = ac.createAnalyser(); an.fftSize = 1024; ac.createMediaStreamSource(st).connect(an); mic = { st, ac };
        const buf = new Uint8Array(an.fftSize); let hits = 0; mm.textContent = 'Listening… blow gently at your mic! 🌬️ (or tap the button)';
        (function loop() { if (!mic) return; an.getByteTimeDomainData(buf); let s = 0; for (let i = 0; i < buf.length; i++) { const v = (buf[i] - 128) / 128; s += v * v; } hits = Math.sqrt(s / buf.length) > BLOW_LEVEL ? hits + 1 : 0; if (hits >= 5) { blow(); return; } raf = requestAnimationFrame(loop); })();
      } catch (e) { mm.textContent = 'No microphone access. No problem, tap "Blow the Candles! 💨" 💗'; }
    }
    function blow() { if (out) return; out = true; stopMic(); sfx(300, .3); $$('.c', app).forEach((c, i) => setTimeout(() => c.classList.add('out'), i * 45)); setTimeout(s3, 23 * 45 + 900); }
    function s3() {
      stage.innerHTML = '<h2 class="pop">Wish made, Abiiiiii! 💗</h2><p class="glass ta pop" lang="ta">' + TAMIL_WISH + '</p><button class="btn" id="cut">Cut the Cake, Abii! 🍰</button>';
      U.confetti(170); U.confetti(50, ['🌸', '🌺', '🌷']); U.confetti(40, ['💗', '💖', '💕']); floatWords(10); sfx(880, .4); $('#cut').onclick = cut;
    }
    function cut() {
      $('#cut').disabled = true; const cb = $('#cb'), wrap = $('.cakewrap', app), kn = document.createElement('div'); kn.className = 'knife'; kn.textContent = '🔪'; kn.setAttribute('aria-hidden', 'true'); wrap.appendChild(kn); sfx(300, .2);
      setTimeout(() => { kn.remove(); const r = cb.cloneNode(true); r.removeAttribute('id'); r.setAttribute('aria-hidden', 'true'); cb.classList.add('half', 'l'); r.classList.add('half', 'r'); wrap.appendChild(r); sfx(660, .2); }, 850);
      setTimeout(() => { stage.innerHTML = '<div class="sliceb" aria-hidden="true">🍰</div><h2>Birthday cake readyyy! First piece unakku dhaan! 🎂💗</h2><button class="btn" id="rep">Replay the celebration 🔁</button>'; U.confetti(150); U.confetti(40, ['🍓', '⭐', '💗']); sfx(990, .4); $('#rep').onclick = build; }, 1900);
    }
    build();
  }

  if (['index', 'birthday', 'surprise'].indexOf(page) >= 0) rain();
  if (page === 'kavithai') { poems(); konjal(); }
  if (page === 'birthday') cake();
})();

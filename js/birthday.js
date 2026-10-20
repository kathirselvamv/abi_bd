/* ✏️ EDIT THIS FILE to personalise the website. */
window.CONFIG = {
  name: 'Abirami',            // nickname shown on the site
  fullName: 'Abirami MS',
  from: 'Kathirselvam V',     // signature on the letter
  date: '2026-11-02',         // YYYY-MM-DD (local date)
  age: 23,
  music: '',                  // e.g. 'assets/audio/music.mp3' (optional)
  celebration: 'Today is the day! Wishing you a magical birthday full of smiles. 🎂',
  wish: 'May this year bring you peaceful days, big laughs, wonderful surprises and every little thing that makes you happy. Happy Birthday! 💗',
  gifts: [
    { title: 'A Birthday Wish', emoji: '🎂', text: 'May your year be full of soft mornings, big laughs and tiny miracles.' },
    { title: 'A Funny Message', emoji: '🤪', text: 'You are 23 now. Legally you can pretend to be an adult, but nobody will believe it.' },
    { title: 'Mini Illustration', emoji: '🧚‍♀️', text: 'A tiny star fairy appears to wish you a sparkling year!' },
    { title: 'A Secret Note', emoji: '💌', text: 'Secret: you deserve every good thing that is coming your way.' }
  ],
  // q = question, o = options, a = index of the right answer (0 = first option). Edit freely!
  quiz: [
    { q: 'What belongs on every birthday?', o: ['Cake', 'Homework', 'Alarm clocks'], a: 0 },
    { q: 'Best birthday wish?', o: ['Be happy', 'Be late', 'Be quiet'], a: 0 },
    { q: 'How many candles for 23?', o: ['23', '32', '2'], a: 0 },
    { q: 'Ideal birthday weather?', o: ['Sunny and warm', 'Whatever, cake wins', 'Both are great'], a: 2 },
    { q: 'A good friend gives…', o: ['Kindness', 'Chaos only', 'Spoilers'], a: 0 },
    { q: 'Birthday sound?', o: ['"Happy Birthday!"', 'Silence', 'Dial-up modem'], a: 0 },
    { q: 'Best gift?', o: ['Time and care', 'Socks (again)', 'A stern letter'], a: 0 },
    { q: 'What comes after 23?', o: ['More adventures', 'Nothing', 'A pop quiz'], a: 0 }
  ],
  mystery: [
    { e: '🧸', m: 'A cuddly bear!', p: 3 }, { e: '🍰', m: 'A slice of cake!', p: 2 }, { e: '📚', m: 'A cosy book', p: 1 },
    { e: '🌸', m: 'A flower bouquet', p: 2 }, { e: '🧦', m: 'Fluffy socks', p: 1 }, { e: '💎', m: 'A shiny jewel!', p: 3 }
  ],
  // Options are in the same order for every question: star, moon, blossom, cloud
  personality: {
    questions: [
      { q: 'Your perfect evening?', o: ['Dancing under stars', 'Quiet moonlight', 'A walk among petals', 'Napping on a cloud'] },
      { q: 'Pick a snack', o: ['Star cookies', 'Milk tea', 'Sakura mochi', 'Cotton candy'] },
      { q: 'Your superpower?', o: ['Shining bright', 'Calm wisdom', 'Making things bloom', 'Floating through worry'] },
      { q: 'Pick a season', o: ['Summer night', 'Winter', 'Spring', 'Autumn drizzle'] },
      { q: 'Your friend vibe?', o: ['Life of the party', 'Deep talker', 'Gentle comforter', 'Dreamy daydreamer'] },
      { q: 'Favourite colour mood?', o: ['Gold & pink', 'Silver & violet', 'Blush & green', 'Sky blue & white'] },
      { q: 'A wish for the year?', o: ['Big adventures', 'Inner peace', 'New beginnings', 'Slow, cosy days'] }
    ],
    results: [
      { name: 'Star Princess', emoji: '🌟', bg: '#FF6FAE', desc: 'Bright, brave and a little dramatic. You make rooms sparkle.' },
      { name: 'Moon Fairy', emoji: '🌙', bg: '#8f78e8', desc: 'Calm, wise and mysterious. People feel safe around you.' },
      { name: 'Cherry Blossom Girl', emoji: '🌸', bg: '#e78fb3', desc: 'Gentle and kind. Good things grow wherever you go.' },
      { name: 'Cloud Dreamer', emoji: '☁️', bg: '#4f9fd1', desc: 'Soft, imaginative and relaxed. You make life feel lighter.' }
    ]
  },
  // Add src:'assets/images/yourfile.png' to use your own picture. Without src, a cute built-in picture is drawn.
  gallery: [
    { t: 'Abii smiling under the tree', src: 'assets/images/abii-1.jpg', e: '💗', c1: '#FFC7DD', c2: '#CDBBFF', h: 380 },
    { t: 'Abii at the station', src: 'assets/images/abii-2.jpg', e: '💗', c1: '#CDBBFF', c2: '#BFE8FF', h: 380 },
    { t: 'Birthday chibi', e: '👧🎂', c1: '#FFC7DD', c2: '#CDBBFF', h: 300 }, { t: 'Magical girl and stars', e: '🪄⭐', c1: '#211936', c2: '#FF6FAE', h: 380 },
    { t: 'Sleepy kitty', e: '🐱', c1: '#BFE8FF', c2: '#FFF7E8', h: 260 }, { t: 'Bunny and clouds', e: '🐰☁️', c1: '#CDBBFF', c2: '#BFE8FF', h: 340 },
    { t: 'Crescent moon', e: '🌙', c1: '#211936', c2: '#6a52b3', h: 300 }, { t: 'Flower field', e: '🌷🌼', c1: '#FFF7E8', c2: '#FFC7DD', h: 280 },
    { t: 'Gift pile', e: '🎁🎀', c1: '#FF6FAE', c2: '#FFF7E8', h: 360 }, { t: 'Dreamy night sky', e: '🌌', c1: '#211936', c2: '#3d6bb3', h: 320 },
    { t: 'Cherry blossoms', e: '🌸🌸', c1: '#FFC7DD', c2: '#FFF7E8', h: 300 }
  ],
  memories: [
    'Some people leave a lasting mark. Thank you for the good moments. 🌸',
    'Being important once is still being important, in a quieter way. 🌷',
    'I hope your days are full of sunshine and snacks. 🌻',
    'You are allowed to grow, change and bloom at your own pace. 🌼',
    'I am rooting for you, with no strings attached. 🪻',
    'Be proud of who you are becoming. 🌹'
  ],
  hidden: '🌟 Secret unlocked: wishing you peace, joy and a whole sky of stars.',
  letter: [
    'Happy 23rd Birthday! 🎂✨',
    'I hope this new chapter brings you happiness, peaceful days, exciting adventures, and plenty of reasons to smile.',
    "Some people leave a special mark on our lives, and I'm grateful for the good moments and memories we've shared.",
    'Keep being yourself, keep chasing the things that make you happy, and never forget that you deserve beautiful things in life.',
    'Wishing you a wonderful birthday and an amazing year ahead! 🌸💗'
  ],
  finalMessage: 'Your next chapter starts with a little more magic ✨',
  finalWish: 'Happy Birthday, Abirami! May every wish you make find its way to you. 💗'
};

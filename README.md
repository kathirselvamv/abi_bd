# A Little Universe for You ✨ (plain HTML + CSS + JavaScript)
No frameworks, no build step. For Abirami, from Kathirselvam V.

## 1. Run locally
Double-click `index.html` (or right-click → Open with → your browser). Optional local server: `python -m http.server` then open http://localhost:8000

## 2. Upload to GitHub
1. Create a free account at github.com, click **New repository**, name it `birthday-website`.
2. Click **uploading an existing file**, drag in **everything inside** the `birthday-website` folder (all `.html` files, `css`, `js`, `assets`), then **Commit changes**.
   (Or use git: `git init && git add . && git commit -m "birthday" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`)

## 3–4. Deploy with Vercel (static site)
1. Sign in at vercel.com with GitHub → **Add New → Project** → import your repo.
2. **Framework Preset: Other**. Leave Build Command and Output Directory **empty**. Root Directory: the folder containing `index.html`.
3. Click **Deploy**. You get a link like `https://birthday-website.vercel.app`. Pages live at `/birthday.html`, `/gifts.html`, etc.

## 5. Edit messages and images
Open `js/birthday.js`: name, date, age, wish, gift texts, quiz questions (`a` = index of the correct answer, starting at 0), gallery, garden messages, letter and final message.
Images: put files in `assets/images/` and add `src: 'assets/images/myphoto.png'` to a gallery item. Music: put an mp3 in `assets/audio/` and set `music: 'assets/audio/song.mp3'` (it only plays after she turns sound on).

## 6. Fixing problems
- Images missing: check the path is relative (`assets/images/x.png`, no leading `/` or `C:\`) and the file name's capital letters match exactly (Vercel is case-sensitive).
- 404 on Vercel: `index.html` must be in the Root Directory; Framework Preset must be "Other".
- Old version showing: redeploy, then hard refresh (Ctrl+Shift+R).
- Nothing works: open the browser console (F12) and check for red errors; make sure the `js` folder was uploaded.
Google Apps Script is not needed.

## New in this update
- `js/extras.js` (new): name rain (welcome, birthday, final pages), Tamil kavithai, Konjal rhymes, 23-candle cake with microphone or button blowing, cake cutting. Edit the lists at the top of this file (`WORDS`, `POEMS`, `KONJAL`, `TAMIL_WISH`). Microphone sensitivity: `BLOW_LEVEL` (lower = more sensitive). The mic needs https (Vercel is fine) or localhost.
- `kavithai.html` (new page): poems + "Abii-ku Konjam Konjal".
- `birthday.html` (cake replaced by the new cake), `surprise.html` (photos), `index.html`, `css/style.css`, `js/main.js` (nav), `js/birthday.js` (gallery photos).
- Photos: `assets/images/abii-1.jpg`, `abii-2.jpg`.
- Please have a Tamil speaker proofread the two extra poems.

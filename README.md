# Prayas JEE 2027 — Study Tracker

A personal study tracker for the Prayas JEE 2027 batch. Track lectures, DPP, PYQs, and modules for all subjects, plus test scores.

## Features
- ✅ Lecture-by-lecture checkboxes with dates for Physics, Math, Physical/Inorganic/Organic Chemistry
- 📋 DPP, PYQ, and Module completion per chapter
- 📝 Test log with score tracking
- 🕐 Live clock, countdown to JEE Main, today's schedule
- 🌙 Dark mode
- 🖨️ Print/PDF export
- 📱 Mobile-responsive

## How to Deploy on GitHub Pages

### Step 1: Create a GitHub account
Go to [github.com](https://github.com) and sign up.

### Step 2: Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `prayas-tracker` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3: Upload files
1. Click **Add file** → **Upload files**
2. Upload the following structure:
   ```
   index.html
   css/style.css
   js/app.js
   data/curriculum.js
   README.md
   ```
3. Click **Commit changes**

### Step 4: Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** section (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**

### Step 5: Access your site
After 1-2 minutes, your tracker will be live at:
```
https://YOUR-USERNAME.github.io/prayas-tracker/
```

### Updating from your phone
1. Open the repo on GitHub in your phone's browser
2. Click on the file you want to edit (e.g., `data/curriculum.js`)
3. Tap the **pencil icon** ✏️ to edit
4. Make changes → Scroll down → **Commit changes**
5. Site auto-updates within 1 minute!

## Data Storage
All your progress is saved in your browser's **localStorage** — it persists between visits on the same device/browser. It does NOT sync across devices (that would need a backend).

## Folder Structure
```
prayas-tracker/
├── index.html          # Main HTML
├── css/
│   └── style.css       # All styles
├── js/
│   └── app.js          # App logic & storage
├── data/
│   └── curriculum.js   # All chapter/lecture data
└── README.md
```

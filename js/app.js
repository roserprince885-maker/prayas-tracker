/* ========================================
   PRAYAS JEE 2027 — STUDY TRACKER APP
   ======================================== */

/* ---- STORAGE HELPERS ---- */
function saveState(key, val) {
  try { localStorage.setItem('prayas_' + key, JSON.stringify(val)); } catch(e) {}
}
function loadState(key, def) {
  try {
    const v = localStorage.getItem('prayas_' + key);
    return v !== null ? JSON.parse(v) : def;
  } catch(e) { return def; }
}

/* ---- SUBJECT COLOR MAP ---- */
const SUBJ_COLORS = {
  'Physics': '#3b82f6',
  'Physical Chemistry': '#10b981',
  'Inorganic Chemistry': '#f59e0b',
  'Organic Chemistry': '#8b5cf6',
  'Mathematics': '#ef4444'
};

const SUBJ_KEYS = Object.keys(SUBJ_COLORS);

/* ---- CLOCK ---- */
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('clock-time').textContent = `${h}:${m}:${s}`;
  document.getElementById('clock-date').textContent =
    `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ---- COUNTDOWN to Jan 1, 2027 ---- */
function updateCountdown() {
  const target = new Date('2027-01-01T00:00:00');
  const now = new Date();
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  const el = document.getElementById('daysCountdown');
  if (el) el.textContent = diff > 0 ? diff : '🎯 D-Day!';
}
updateCountdown();

/* ---- TODAY'S LECTURES ---- */
function getTodayStr() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`;
}

function renderTodayLectures() {
  const today = getTodayStr();
  const container = document.getElementById('todayLectures');
  const found = [];
  for (const [subj, sData] of Object.entries(CURRICULUM)) {
    for (const ch of sData.chapters) {
      for (const lec of ch.lectures) {
        if (lec.date === today) {
          found.push({ subj, ch: ch.name, lec: lec.lec, color: SUBJ_COLORS[subj] });
        }
      }
    }
  }
  if (found.length === 0) {
    container.innerHTML = '<span style="font-size:12px;color:var(--text3);font-family:var(--font-mono)">No lectures today</span>';
    return;
  }
  container.innerHTML = found.map(f =>
    `<div class="today-lec-item">
      <div class="today-lec-dot" style="background:${f.color}"></div>
      <span style="font-size:11px;color:var(--text2)"><b style="color:${f.color}">${f.subj.split(' ')[0]}</b> · ${f.ch} · L${f.lec}</span>
    </div>`
  ).join('');
}
renderTodayLectures();

/* ---- NEXT TEST ---- */
function renderNextTest() {
  const today = getTodayStr();
  const upcoming = TEST_PLANNER.filter(t => t.date >= today).sort((a,b) => a.date.localeCompare(b.date));
  const nameEl = document.getElementById('nextTestName');
  const dateEl = document.getElementById('nextTestDate');
  const daysEl = document.getElementById('nextTestDays');
  if (upcoming.length === 0) { nameEl.textContent = 'All Done!'; return; }
  const next = upcoming[0];
  const daysLeft = Math.ceil((new Date(next.date) - new Date()) / (1000*60*60*24));
  nameEl.textContent = next.name;
  const d = new Date(next.date);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  dateEl.textContent = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} · ${next.pattern}`;
  daysEl.textContent = daysLeft <= 0 ? 'Today!' : `${daysLeft}d away`;
}
renderNextTest();

/* ---- PROGRESS CALCULATIONS ---- */
function getChapterProgress(ch) {
  const chId = ch.id;
  const totalLec = ch.lectures.length;
  let doneLec = 0;
  for (let i = 1; i <= totalLec; i++) {
    if (loadState(`lec_${chId}_${i}`, false)) doneLec++;
  }
  const dpp = loadState(`dpp_${chId}`, false) ? 1 : 0;
  const pyq = loadState(`pyq_${chId}`, false) ? 1 : 0;
  const mod = loadState(`mod_${chId}`, false) ? 1 : 0;
  const total = totalLec + 3; // lecs + dpp + pyq + module
  const done = doneLec + dpp + pyq + mod;
  return { done, total, pct: total > 0 ? Math.round((done/total)*100) : 0 };
}

function getSubjectProgress(subjectName) {
  const sData = CURRICULUM[subjectName];
  let done = 0, total = 0;
  for (const ch of sData.chapters) {
    const p = getChapterProgress(ch);
    done += p.done;
    total += p.total;
  }
  return { done, total, pct: total > 0 ? Math.round((done/total)*100) : 0 };
}

function getOverallProgress() {
  let done = 0, total = 0;
  for (const subj of SUBJ_KEYS) {
    const p = getSubjectProgress(subj);
    done += p.done;
    total += p.total;
  }
  return { done, total, pct: total > 0 ? Math.round((done/total)*100) : 0 };
}

/* ---- RENDER OVERALL BAR ---- */
function renderOverallBar() {
  const op = getOverallProgress();
  document.getElementById('overallPercent').textContent = op.pct + '%';
  document.getElementById('overallBar').style.width = op.pct + '%';

  const miniBar = document.getElementById('subjectMiniBar');
  miniBar.innerHTML = SUBJ_KEYS.map(subj => {
    const sp = getSubjectProgress(subj);
    const shortName = subj.split(' ')[0];
    return `<div class="smb-item">
      <div class="smb-label">${shortName}</div>
      <div class="smb-track">
        <div class="smb-fill" style="width:${sp.pct}%;background:${SUBJ_COLORS[subj]}"></div>
      </div>
      <div class="smb-pct">${sp.pct}%</div>
    </div>`;
  }).join('');
}

/* ---- RENDER OVERVIEW ---- */
function renderOverview() {
  const content = document.getElementById('mainContent');
  content.innerHTML = `
    <div class="print-header"><h2>Prayas JEE 2027 — Progress Report</h2><p>Generated: ${new Date().toLocaleString()}</p></div>
    <div class="overview-grid">
      ${SUBJ_KEYS.map(subj => {
        const sData = CURRICULUM[subj];
        const sp = getSubjectProgress(subj);
        const color = SUBJ_COLORS[subj];
        return `<div class="subject-summary-card" style="border-top-color:${color}" onclick="switchTab('${subj}')">
          <div class="ssc-header">
            <div class="ssc-title" style="color:${color}">${subj}</div>
            <div class="ssc-pct" style="color:${color}">${sp.pct}%</div>
          </div>
          <div class="ssc-progress-bar">
            <div class="ssc-progress-fill" style="width:${sp.pct}%;background:${color}"></div>
          </div>
          <div class="ssc-stats">
            <span>${sData.chapters.length} chapters</span>
            <span>·</span>
            <span>${sp.done}/${sp.total} items done</span>
          </div>
        </div>`;
      }).join('')}
    </div>`;
}

/* ---- RENDER SUBJECT ---- */
function renderSubject(subjectName) {
  const sData = CURRICULUM[subjectName];
  const color = SUBJ_COLORS[subjectName];
  const sp = getSubjectProgress(subjectName);
  const content = document.getElementById('mainContent');

  let html = `
    <div class="print-header"><h2>Prayas JEE 2027 — ${subjectName}</h2><p>Generated: ${new Date().toLocaleString()}</p></div>
    <div class="subject-title-bar">
      <div style="width:10px;height:10px;border-radius:50%;background:${color};flex-shrink:0"></div>
      <h2 style="color:${color}">${subjectName}</h2>
      <span class="faculty-badge">${sData.faculty}</span>
      <span style="margin-left:auto;font-family:var(--font-mono);font-size:13px;font-weight:700;color:${color}">${sp.pct}% complete</span>
    </div>`;

  for (const ch of sData.chapters) {
    const cp = getChapterProgress(ch);
    html += renderChapterSection(ch, cp, color);
  }

  content.innerHTML = html;
  attachChapterListeners();
}

/* ---- RENDER SINGLE CHAPTER SECTION ---- */
function renderChapterSection(ch, cp, color) {
  const isOpen = loadState(`open_${ch.id}`, false);
  return `
  <div class="chapter-section" id="cs_${ch.id}">
    <div class="chapter-section-header ${isOpen ? 'open' : ''}" onclick="toggleChapter('${ch.id}')">
      <div class="ch-header-left">
        <div class="ch-color-dot" style="background:${color}"></div>
        <div class="ch-name">${ch.name}</div>
      </div>
      <div class="ch-header-right">
        <div class="ch-progress-mini">
          <div class="ch-progress-fill" style="width:${cp.pct}%;background:${color}"></div>
        </div>
        <div class="ch-pct-label">${cp.pct}%</div>
        <div class="ch-toggle ${isOpen ? 'open' : ''}">▼</div>
      </div>
    </div>
    <div class="chapter-body ${isOpen ? 'open' : ''}" id="cb_${ch.id}">
      ${renderChapterBody(ch, color)}
    </div>
  </div>`;
}

/* ---- RENDER CHAPTER BODY ---- */
function renderChapterBody(ch, color) {
  const chId = ch.id;
  // Lectures
  let lecHtml = ch.lectures.map(lec => {
    const key = `lec_${chId}_${lec.lec}`;
    const done = loadState(key, false);
    const d = new Date(lec.date);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dateStr = `${d.getDate()} ${months[d.getMonth()]}`;
    return `<div class="lec-item ${done ? 'done' : ''}" id="li_${key}">
      <input type="checkbox" id="${key}" data-key="${key}" data-type="lec" data-chid="${chId}" ${done ? 'checked' : ''}>
      <label for="${key}">L${lec.lec} <span style="font-size:10px;color:var(--text3)">${dateStr}</span></label>
    </div>`;
  }).join('');

  // DPP, PYQ, Module
  const dppDone = loadState(`dpp_${chId}`, false);
  const pyqDone = loadState(`pyq_${chId}`, false);
  const modDone = loadState(`mod_${chId}`, false);

  return `
    <div class="category-section">
      <div class="cat-label">📹 Lectures (${ch.lectures.length})</div>
      <div class="lecture-grid">${lecHtml}</div>
    </div>
    <div class="category-section">
      <div class="cat-label">📋 Study Materials</div>
      <div class="single-checks">
        <div class="single-check-item ${dppDone ? 'done' : ''}" id="sci_dpp_${chId}">
          <input type="checkbox" id="dpp_${chId}" data-key="dpp_${chId}" data-type="single" data-chid="${chId}" ${dppDone ? 'checked' : ''}>
          <span>DPP Completed</span>
        </div>
        <div class="single-check-item ${pyqDone ? 'done' : ''}" id="sci_pyq_${chId}">
          <input type="checkbox" id="pyq_${chId}" data-key="pyq_${chId}" data-type="single" data-chid="${chId}" ${pyqDone ? 'checked' : ''}>
          <span>PYQs Completed</span>
        </div>
        <div class="single-check-item ${modDone ? 'done' : ''}" id="sci_mod_${chId}">
          <input type="checkbox" id="mod_${chId}" data-key="mod_${chId}" data-type="single" data-chid="${chId}" ${modDone ? 'checked' : ''}>
          <span>Module Completed</span>
        </div>
      </div>
    </div>`;
}

/* ---- TOGGLE CHAPTER ---- */
function toggleChapter(chId) {
  const header = document.querySelector(`#cs_${chId} .chapter-section-header`);
  const body = document.getElementById(`cb_${chId}`);
  const toggle = document.querySelector(`#cs_${chId} .ch-toggle`);
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  header.classList.toggle('open', !isOpen);
  toggle.classList.toggle('open', !isOpen);
  saveState(`open_${chId}`, !isOpen);
}

/* ---- ATTACH LISTENERS ---- */
function attachChapterListeners() {
  document.querySelectorAll('[data-type="lec"]').forEach(cb => {
    cb.addEventListener('change', function() {
      saveState(this.dataset.key, this.checked);
      const li = document.getElementById('li_' + this.dataset.key);
      if (li) li.classList.toggle('done', this.checked);
      updateChapterProgress(this.dataset.chid);
      renderOverallBar();
    });
  });

  document.querySelectorAll('[data-type="single"]').forEach(cb => {
    cb.addEventListener('change', function() {
      saveState(this.dataset.key, this.checked);
      const typePrefix = this.dataset.key.split('_')[0];
      const sci = document.getElementById(`sci_${typePrefix}_${this.dataset.chid}`);
      if (sci) sci.classList.toggle('done', this.checked);
      updateChapterProgress(this.dataset.chid);
      renderOverallBar();
    });
  });
}

/* ---- UPDATE CHAPTER PROGRESS IN UI ---- */
function updateChapterProgress(chId) {
  let ch = null;
  for (const subj of SUBJ_KEYS) {
    ch = CURRICULUM[subj].chapters.find(c => c.id === chId);
    if (ch) break;
  }
  if (!ch) return;
  const cp = getChapterProgress(ch);
  const fill = document.querySelector(`#cs_${chId} .ch-progress-fill`);
  const pct = document.querySelector(`#cs_${chId} .ch-pct-label`);
  if (fill) fill.style.width = cp.pct + '%';
  if (pct) pct.textContent = cp.pct + '%';
}

/* ---- RENDER TESTS ---- */
function renderTests() {
  const content = document.getElementById('mainContent');
  const today = getTodayStr();

  let html = `
    <div class="print-header"><h2>Prayas JEE 2027 — Test Log</h2><p>Generated: ${new Date().toLocaleString()}</p></div>
    <div class="test-header-bar">
      <h2>Test Planner</h2>
      <span style="font-family:var(--font-mono);font-size:13px;color:var(--text3)">${TEST_PLANNER.length} total tests</span>
    </div>
    <div class="tests-grid">`;

  for (const test of TEST_PLANNER) {
    const completed = loadState(`test_done_${test.id}`, false);
    const score = loadState(`test_score_${test.id}`, '');
    const isPast = test.date < today;
    const isToday = test.date === today;
    const d = new Date(test.date);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const dateStr = `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    const patternClass = test.pattern.replace(/\s+/g,'-');
    const statusClass = completed ? 'completed' : (isPast ? 'test-past' : 'test-upcoming');
    const daysLeft = Math.ceil((new Date(test.date) - new Date()) / (1000*60*60*24));
    const badge = isToday ? 'TODAY!' : (isPast ? 'Past' : `In ${daysLeft}d`);

    html += `<div class="test-card pattern-${patternClass} ${statusClass}" id="tc_${test.id}">
      <div class="tc-date-badge">${badge}</div>
      <div class="tc-top">
        <div>
          <div class="tc-name">${test.name}</div>
        </div>
        <span class="tc-pattern">${test.pattern}</span>
      </div>
      <div class="tc-date">📅 ${dateStr} · ${test.type}</div>
      <div class="tc-controls">
        <div class="tc-check-row">
          <input type="checkbox" id="td_${test.id}" data-testid="${test.id}" ${completed ? 'checked' : ''}>
          <label for="td_${test.id}" style="cursor:pointer;font-size:13px">${completed ? '✅ Completed' : '⬜ Mark as Done'}</label>
        </div>
        <div class="tc-score-row">
          <span>Score:</span>
          <input type="text" class="score-input" placeholder="e.g. 240" value="${score}" data-testid="${test.id}" id="ts_${test.id}">
          <span class="out-of">/ 300</span>
        </div>
      </div>
    </div>`;
  }

  html += `</div>`;
  content.innerHTML = html;
  attachTestListeners();
}

function attachTestListeners() {
  document.querySelectorAll('[data-testid]').forEach(el => {
    if (el.type === 'checkbox') {
      el.addEventListener('change', function() {
        const id = this.dataset.testid;
        saveState(`test_done_${id}`, this.checked);
        const card = document.getElementById(`tc_${id}`);
        if (card) card.classList.toggle('completed', this.checked);
        const lbl = this.nextElementSibling;
        if (lbl) lbl.textContent = this.checked ? '✅ Completed' : '⬜ Mark as Done';
      });
    } else if (el.classList.contains('score-input')) {
      el.addEventListener('input', function() {
        saveState(`test_score_${this.dataset.testid}`, this.value);
      });
    }
  });
}

/* ---- TAB SWITCHING ---- */
function switchTab(tab) {
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.subject === tab);
  });
  if (tab === 'all') renderOverview();
  else if (tab === 'tests') renderTests();
  else renderSubject(tab);
}

/* ---- NAV SETUP ---- */
document.getElementById('subjectNav').addEventListener('click', function(e) {
  const tab = e.target.closest('.nav-tab');
  if (tab) switchTab(tab.dataset.subject);
});

/* ---- DARK MODE ---- */
const darkBtn = document.getElementById('darkModeToggle');
let darkMode = loadState('darkMode', false);

function applyDark(on) {
  document.body.classList.toggle('dark-mode', on);
  document.body.classList.toggle('light-mode', !on);
  darkBtn.textContent = on ? '☀️' : '🌙';
}

applyDark(darkMode);
darkBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  saveState('darkMode', darkMode);
  applyDark(darkMode);
});

/* ---- PRINT ---- */
document.getElementById('printBtn').addEventListener('click', () => {
  document.getElementById('printModal').classList.add('active');
});
document.getElementById('cancelPrint').addEventListener('click', () => {
  document.getElementById('printModal').classList.remove('active');
});
document.getElementById('confirmPrint').addEventListener('click', () => {
  document.getElementById('printModal').classList.remove('active');
  window.print();
});

/* ---- INIT ---- */
renderOverallBar();
renderOverview();

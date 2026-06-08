/* ================================================
   PRAYAS JEE 2027 — STUDY TRACKER
   Cloud sync via Supabase + Daily Task List
   ================================================ */

const SUBJ_COLORS = {
  'Physics':              '#3b82f6',
  'Physical Chemistry':   '#10b981',
  'Inorganic Chemistry':  '#f59e0b',
  'Organic Chemistry':    '#8b5cf6',
  'Mathematics':          '#ef4444'
};
const SUBJ_KEYS = Object.keys(SUBJ_COLORS);
const MONTHS  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS    = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const DAYS_S  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/* ---- LOCAL STORAGE ---- */
function lsGet(k, def) {
  try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : def; }
  catch(e) { return def; }
}
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {} }

/* ---- SUPABASE CONFIG ---- */
let SB_URL  = lsGet('sb_url',  '');
let SB_KEY  = lsGet('sb_key',  '');
let SB_USER = lsGet('sb_user', 'prince');

/* In-memory cache for instant UI */
const memCache = {};
let syncTimeout = null;
let pendingWrites = {};

/* ---- SUPABASE HELPERS ---- */
async function sbLoadAll() {
  if (!SB_URL || !SB_KEY) { setSyncStatus('err', 'Not connected'); return; }
  setSyncStatus('loading', 'Syncing...');
  try {
    const prefix = encodeURIComponent(SB_USER + '_');
    const r = await fetch(
      `${SB_URL}/rest/v1/tracker?key=like.${prefix}%25&select=key,value`,
      { headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY } }
    );
    if (!r.ok) { setSyncStatus('err', 'Error'); return; }
    const data = await r.json();
    for (const row of data) {
      const shortKey = row.key.slice(SB_USER.length + 1);
      try { memCache[shortKey] = JSON.parse(row.value); }
      catch(e) { memCache[shortKey] = row.value; }
    }
    setSyncStatus('ok', 'Synced');
    renderOverallBar();
    renderCurrentTab();
  } catch(e) { setSyncStatus('err', 'Offline'); }
}

function dbGet(key, def) { return key in memCache ? memCache[key] : def; }

function dbSet(key, value) {
  memCache[key] = value;
  if (SB_URL && SB_KEY) {
    pendingWrites[SB_USER + '_' + key] = JSON.stringify(value);
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(flushWrites, 800);
  } else {
    lsSet('local_' + key, value);
  }
}

async function flushWrites() {
  if (!SB_URL || !SB_KEY) return;
  const entries = Object.entries(pendingWrites);
  if (!entries.length) return;
  pendingWrites = {};
  setSyncStatus('loading', 'Saving...');
  try {
    const rows = entries.map(([k, v]) => ({ key: k, value: v, updated_at: new Date().toISOString() }));
    const r = await fetch(`${SB_URL}/rest/v1/tracker`, {
      method: 'POST',
      headers: {
        'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY,
        'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(rows)
    });
    setSyncStatus(r.ok ? 'ok' : 'err', r.ok ? 'Saved ✓' : 'Save error');
    if (r.ok) setTimeout(() => setSyncStatus('ok', 'Synced'), 2500);
  } catch(e) { setSyncStatus('err', 'Offline'); }
}

/* ---- SYNC STATUS UI ---- */
function setSyncStatus(state, label) {
  const dot = document.getElementById('syncDot');
  const lbl = document.getElementById('syncLabel');
  if (dot) dot.className = 'sync-dot ' + state;
  if (lbl) lbl.textContent = label;
}

/* ---- SETUP SCREEN ---- */
function checkSetup() {
  if (!SB_URL || !SB_KEY) {
    document.getElementById('setupScreen').classList.remove('hidden');
  } else {
    document.getElementById('setupScreen').classList.add('hidden');
    sbLoadAll();
  }
}

document.getElementById('setupSave').addEventListener('click', () => {
  const url  = document.getElementById('sbUrl').value.trim().replace(/\/$/, '');
  const key  = document.getElementById('sbKey').value.trim();
  const user = document.getElementById('sbUser').value.trim() || 'prince';
  if (!url || !key) { alert('Please fill in the Supabase URL and Key.'); return; }
  SB_URL = url;  lsSet('sb_url', url);
  SB_KEY = key;  lsSet('sb_key', key);
  SB_USER = user; lsSet('sb_user', user);
  document.getElementById('setupScreen').classList.add('hidden');
  sbLoadAll();
});

document.getElementById('showGuide').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('supaGuideModal').classList.add('active');
});
document.getElementById('closeGuide').addEventListener('click', () => {
  document.getElementById('supaGuideModal').classList.remove('active');
});

document.getElementById('settingsBtn').addEventListener('click', () => {
  document.getElementById('settingsInfo').innerHTML =
    `URL: ${SB_URL||'—'}<br>User/ID: ${SB_USER||'—'}`;
  document.getElementById('settingsModal').classList.add('active');
});
document.getElementById('closeSettings').addEventListener('click', () =>
  document.getElementById('settingsModal').classList.remove('active')
);
document.getElementById('reconfigBtn').addEventListener('click', () => {
  document.getElementById('settingsModal').classList.remove('active');
  document.getElementById('sbUrl').value = SB_URL;
  document.getElementById('sbKey').value = SB_KEY;
  document.getElementById('sbUser').value = SB_USER;
  document.getElementById('setupScreen').classList.remove('hidden');
});

/* ---- CLOCK ---- */
function updateClock() {
  const n = new Date();
  const pad = x => String(x).padStart(2,'0');
  const te = document.getElementById('clock-time');
  const de = document.getElementById('clock-date');
  if (te) te.textContent = `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`;
  if (de) de.textContent = `${DAYS[n.getDay()]}, ${n.getDate()} ${MONTHS[n.getMonth()]} ${n.getFullYear()}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ---- COUNTDOWN ---- */
function updateCountdown() {
  const diff = Math.ceil((new Date('2027-01-01') - new Date()) / 86400000);
  const el = document.getElementById('daysCountdown');
  if (el) el.textContent = diff > 0 ? diff : '🎯';
}
updateCountdown();

/* ---- NEXT TEST ---- */
function getTodayStr() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`;
}
function renderNextTest() {
  const today = getTodayStr();
  const nxt = TEST_PLANNER.filter(t => t.date >= today).sort((a,b) => a.date.localeCompare(b.date))[0];
  const ne = document.getElementById('nextTestName');
  const de = document.getElementById('nextTestDate');
  const dy = document.getElementById('nextTestDays');
  if (!nxt) { if(ne) ne.textContent = 'All done!'; return; }
  const d = new Date(nxt.date);
  const daysLeft = Math.ceil((new Date(nxt.date) - new Date()) / 86400000);
  if (ne) ne.textContent = nxt.name;
  if (de) de.textContent = `${d.getDate()} ${MONTHS[d.getMonth()]} · ${nxt.pattern}`;
  if (dy) dy.textContent = daysLeft <= 0 ? 'Today!' : `${daysLeft}d away`;
}
renderNextTest();

/* ---- PROGRESS ---- */
function getChapterProgress(ch) {
  const done = ['lec','dpp','pyq','mod'].filter(t => dbGet(`${t}_${ch.id}`, false)).length;
  return { done, total: 4, pct: Math.round((done/4)*100) };
}
function getSubjectProgress(subj) {
  let done=0, total=0;
  for (const ch of CURRICULUM[subj].chapters) { const p=getChapterProgress(ch); done+=p.done; total+=p.total; }
  return { done, total, pct: total ? Math.round((done/total)*100) : 0 };
}
function getOverallProgress() {
  let done=0, total=0;
  for (const s of SUBJ_KEYS) { const p=getSubjectProgress(s); done+=p.done; total+=p.total; }
  return { done, total, pct: total ? Math.round((done/total)*100) : 0 };
}

function renderOverallBar() {
  const op = getOverallProgress();
  const pe = document.getElementById('overallPercent');
  const be = document.getElementById('overallBar');
  if (pe) pe.textContent = op.pct+'%';
  if (be) be.style.width = op.pct+'%';
  const mb = document.getElementById('subjectMiniBar');
  if (!mb) return;
  mb.innerHTML = SUBJ_KEYS.map(s => {
    const sp = getSubjectProgress(s);
    return `<div class="smb-item">
      <div class="smb-label">${s.split(' ')[0]}</div>
      <div class="smb-track"><div class="smb-fill" style="width:${sp.pct}%;background:${SUBJ_COLORS[s]}"></div></div>
      <div class="smb-pct">${sp.pct}%</div>
    </div>`;
  }).join('');
}

/* ---- OVERVIEW ---- */
function renderOverview() {
  document.getElementById('mainContent').innerHTML = `
    <div class="print-header"><h2>Prayas JEE 2027 — Progress Report</h2><p>Generated: ${new Date().toLocaleString()}</p></div>
    <div class="overview-grid">
      ${SUBJ_KEYS.map(subj => {
        const sp = getSubjectProgress(subj), col = SUBJ_COLORS[subj];
        return `<div class="subject-summary-card" style="border-top-color:${col}" onclick="switchTab('${subj}')">
          <div class="ssc-header">
            <div class="ssc-title" style="color:${col}">${subj}</div>
            <div class="ssc-pct" style="color:${col}">${sp.pct}%</div>
          </div>
          <div class="ssc-progress-bar"><div class="ssc-progress-fill" style="width:${sp.pct}%;background:${col}"></div></div>
          <div class="ssc-stats">
            <span>${CURRICULUM[subj].chapters.length} chapters</span>
            <span>·</span>
            <span>${sp.done}/${sp.total} tasks</span>
          </div>
        </div>`;
      }).join('')}
    </div>`;
}

/* ---- SUBJECT VIEW ---- */
function renderSubject(subjName) {
  const sData = CURRICULUM[subjName], col = SUBJ_COLORS[subjName];
  const sp = getSubjectProgress(subjName);
  let html = `
    <div class="print-header"><h2>Prayas JEE 2027 — ${subjName}</h2><p>${new Date().toLocaleString()}</p></div>
    <div class="subject-title-bar">
      <div style="width:10px;height:10px;border-radius:50%;background:${col};flex-shrink:0"></div>
      <h2 style="color:${col}">${subjName}</h2>
      <span class="faculty-badge">${sData.faculty}</span>
      <span class="subj-pct-badge" style="color:${col}">${sp.pct}% complete</span>
    </div>`;

  for (const ch of sData.chapters) {
    const cp = getChapterProgress(ch);
    const allDone = cp.pct === 100;
    html += `<div class="chapter-section" id="cs_${ch.id}">
      <div class="chapter-row ${allDone?'done':''}">
        <div class="ch-name-wrap">
          <div class="ch-name">${ch.name}</div>
          <div class="ch-meta">${ch.lectures.length} lectures · ${sData.faculty.split(' ')[0]}</div>
        </div>
        <div class="ch-checks">
          ${['lec','dpp','pyq','mod'].map(type => {
            const key = `${type}_${ch.id}`;
            const chk = dbGet(key, false);
            const labels = {lec:'Lectures',dpp:'DPP',pyq:'PYQs',mod:'Module'};
            return `<div class="check-pill ${chk?'checked':''}" id="pill_${key}">
              <input type="checkbox" id="cb_${key}" data-key="${key}" data-chid="${ch.id}" ${chk?'checked':''}>
              <label for="cb_${key}">${labels[type]}</label>
            </div>`;
          }).join('')}
        </div>
        <div class="ch-progress-mini">
          <div class="ch-progress-fill" id="cpf_${ch.id}" style="width:${cp.pct}%;background:${col}"></div>
        </div>
        <div class="ch-pct-label" id="cpl_${ch.id}">${cp.pct}%</div>
      </div>
    </div>`;
  }

  document.getElementById('mainContent').innerHTML = html;

  document.querySelectorAll('.check-pill input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', function() {
      const key = this.dataset.key, chId = this.dataset.chid;
      dbSet(key, this.checked);
      const pill = document.getElementById('pill_' + key);
      if (pill) pill.classList.toggle('checked', this.checked);
      let ch = null;
      for (const s of SUBJ_KEYS) { ch = CURRICULUM[s].chapters.find(c=>c.id===chId); if(ch) break; }
      if (!ch) return;
      const cp = getChapterProgress(ch);
      const fill = document.getElementById('cpf_'+chId);
      const lbl  = document.getElementById('cpl_'+chId);
      const row  = document.querySelector(`#cs_${chId} .chapter-row`);
      if (fill) fill.style.width = cp.pct+'%';
      if (lbl)  lbl.textContent  = cp.pct+'%';
      if (row)  row.classList.toggle('done', cp.pct===100);
      renderOverallBar();
    });
  });
}

/* ---- TESTS VIEW ---- */
function renderTests() {
  const today = getTodayStr();
  let html = `
    <div class="print-header"><h2>Prayas JEE 2027 — Tests</h2><p>${new Date().toLocaleString()}</p></div>
    <div class="test-header-bar">
      <h2>Test Planner</h2>
      <span style="font-family:var(--font-m);font-size:12px;color:var(--text3)">${TEST_PLANNER.length} tests</span>
    </div>
    <div class="tests-grid">`;

  for (const test of TEST_PLANNER) {
    const completed = dbGet(`test_done_${test.id}`, false);
    const score     = dbGet(`test_score_${test.id}`, '');
    const d = new Date(test.date);
    const dateStr = `${DAYS_S[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    const isToday = test.date === today, isPast = test.date < today;
    const daysLeft = Math.ceil((new Date(test.date) - new Date()) / 86400000);
    const badge = isToday ? 'Today!' : (isPast ? 'Past' : `In ${daysLeft}d`);
    const patCls = 'p' + test.pattern.replace(/\s+/g,'-');
    html += `<div class="test-card ${patCls} ${completed?'completed':''}" id="tc_${test.id}">
      <div class="tc-badge ${isToday?'today':''}">${badge}</div>
      <div class="tc-top">
        <div class="tc-name">${test.name}</div>
        <span class="tc-pattern">${test.pattern}</span>
      </div>
      <div class="tc-date">📅 ${dateStr} · ${test.type}</div>
      <div class="tc-controls">
        <div class="tc-check-row">
          <input type="checkbox" id="td_${test.id}" data-testid="${test.id}" ${completed?'checked':''}>
          <label for="td_${test.id}" style="cursor:pointer;font-size:13px">${completed?'✅ Completed':'⬜ Mark as Done'}</label>
        </div>
        <div class="tc-score-row">
          <span>Score:</span>
          <input type="text" class="score-input" data-testid="${test.id}" placeholder="e.g. 240" value="${score}">
          <span class="out-of">/ 300</span>
        </div>
      </div>
    </div>`;
  }
  html += `</div>`;
  document.getElementById('mainContent').innerHTML = html;

  document.querySelectorAll('.tc-check-row input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', function() {
      const id = this.dataset.testid;
      dbSet(`test_done_${id}`, this.checked);
      document.getElementById(`tc_${id}`)?.classList.toggle('completed', this.checked);
      if (this.nextElementSibling) this.nextElementSibling.textContent = this.checked ? '✅ Completed' : '⬜ Mark as Done';
    });
  });
  document.querySelectorAll('.score-input').forEach(inp => {
    inp.addEventListener('input', function() { dbSet(`test_score_${this.dataset.testid}`, this.value); });
  });
}

/* ---- DAILY TASKS ---- */
let dailyViewDate = getTodayStr();

function toDateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function formatDateLabel(str) {
  const d = new Date(str + 'T12:00:00'), today = getTodayStr();
  const yesterday = toDateStr(new Date(Date.now()-86400000));
  const tomorrow  = toDateStr(new Date(Date.now()+86400000));
  const base = `${d.getDate()} ${MONTHS[d.getMonth()]}`;
  if (str===today)     return `Today, ${base}`;
  if (str===yesterday) return `Yesterday, ${base}`;
  if (str===tomorrow)  return `Tomorrow, ${base}`;
  return `${DAYS_S[d.getDay()]}, ${base} ${d.getFullYear()}`;
}

function renderDaily() {
  const dateLabel = formatDateLabel(dailyViewDate);
  const tasks = dbGet(`daily_${dailyViewDate}`, []);
  const doneCount = tasks.filter(t=>t.done).length;

  document.getElementById('mainContent').innerHTML = `
    <div class="daily-section">
      <div class="daily-header">
        <h2>Daily Tasks</h2>
        <div class="daily-date-nav">
          <button class="date-nav-btn" id="prevDay">‹</button>
          <span class="current-date-label">${dateLabel}</span>
          <button class="date-nav-btn" id="nextDay">›</button>
        </div>
      </div>
      <div class="daily-add-row">
        <input class="daily-input" id="taskInput" placeholder="Add a task for ${dateLabel}..." autocomplete="off">
        <button class="daily-add-btn" id="addTaskBtn">+ Add</button>
      </div>
      ${tasks.length ? `<div class="daily-stats">
        <span>${tasks.length} task${tasks.length!==1?'s':''}</span>
        <span class="${doneCount===tasks.length&&tasks.length>0?'highlight':''}">${doneCount} done</span>
        <span>${tasks.length-doneCount} remaining</span>
      </div>` : ''}
      <div class="task-list" id="taskList">
        ${tasks.length===0
          ? `<div class="daily-empty">No tasks for ${dateLabel}.<br>Add something above ☝️</div>`
          : tasks.map((t,i) => `<div class="task-item ${t.done?'done':''}" id="task_${i}">
              <input type="checkbox" class="task-cb" data-idx="${i}" ${t.done?'checked':''}>
              <span class="task-text">${t.text.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</span>
              <button class="task-delete" data-idx="${i}" title="Delete">✕</button>
            </div>`).join('')}
      </div>
    </div>`;

  document.getElementById('prevDay').addEventListener('click', () => {
    const d=new Date(dailyViewDate+'T12:00:00'); d.setDate(d.getDate()-1);
    dailyViewDate=toDateStr(d); renderDaily();
  });
  document.getElementById('nextDay').addEventListener('click', () => {
    const d=new Date(dailyViewDate+'T12:00:00'); d.setDate(d.getDate()+1);
    dailyViewDate=toDateStr(d); renderDaily();
  });

  function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim(); if (!text) return;
    const tasks = dbGet(`daily_${dailyViewDate}`, []);
    tasks.push({ id: Date.now(), text, done: false });
    dbSet(`daily_${dailyViewDate}`, tasks);
    input.value = ''; renderDaily();
    setTimeout(() => document.getElementById('taskInput')?.focus(), 30);
  }
  document.getElementById('addTaskBtn').addEventListener('click', addTask);
  document.getElementById('taskInput').addEventListener('keydown', e => { if(e.key==='Enter') addTask(); });

  document.querySelectorAll('.task-cb').forEach(cb => {
    cb.addEventListener('change', function() {
      const idx = parseInt(this.dataset.idx);
      const tasks = dbGet(`daily_${dailyViewDate}`, []);
      tasks[idx].done = this.checked;
      dbSet(`daily_${dailyViewDate}`, tasks);
      document.getElementById('task_'+idx)?.classList.toggle('done', this.checked);
    });
  });
  document.querySelectorAll('.task-delete').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = parseInt(this.dataset.idx);
      const tasks = dbGet(`daily_${dailyViewDate}`, []);
      tasks.splice(idx, 1);
      dbSet(`daily_${dailyViewDate}`, tasks);
      renderDaily();
    });
  });
}

/* ---- TAB SWITCHING ---- */
let currentTab = 'all';
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.subject===tab));
  renderCurrentTab();
}
function renderCurrentTab() {
  switch(currentTab) {
    case 'all':   renderOverview();         break;
    case 'tests': renderTests();            break;
    case 'daily': renderDaily();            break;
    default:      renderSubject(currentTab);
  }
}
document.getElementById('subjectNav').addEventListener('click', e => {
  const tab = e.target.closest('.nav-tab');
  if (tab) switchTab(tab.dataset.subject);
});

/* ---- DARK MODE ---- */
let darkMode = lsGet('darkMode', false);
const darkBtn = document.getElementById('darkModeToggle');
function applyDark(on) {
  document.body.classList.toggle('dark-mode', on);
  document.body.classList.toggle('light-mode', !on);
  if (darkBtn) darkBtn.textContent = on ? '☀️' : '🌙';
}
applyDark(darkMode);
darkBtn.addEventListener('click', () => { darkMode=!darkMode; lsSet('darkMode',darkMode); applyDark(darkMode); });

/* ---- PRINT ---- */
document.getElementById('printBtn').addEventListener('click', () =>
  document.getElementById('printModal').classList.add('active')
);
document.getElementById('cancelPrint').addEventListener('click', () =>
  document.getElementById('printModal').classList.remove('active')
);
document.getElementById('confirmPrint').addEventListener('click', () => {
  document.getElementById('printModal').classList.remove('active');
  window.print();
});

/* ---- INIT ---- */
checkSetup();
renderOverallBar();
renderOverview();

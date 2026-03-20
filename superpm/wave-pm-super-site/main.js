const STORAGE_KEY = 'wave_pm_super_site_v2';

const baseTerms = [
  {
    id: 't-eia',
    name: 'EIA',
    category: 'project',
    desc: '環境影響評估。通常是專案前期最關鍵、也最容易影響時程的審查節點之一。',
    talk: '我會先把 EIA 對時程、利害關係人與許可依賴關係整理清楚，再回頭看後續推進順序。'
  },
  {
    id: 't-cppa',
    name: 'CPPA',
    category: 'finance',
    desc: '企業購售電合約。是再生能源案場常見的長期售電商業安排。',
    talk: '我們可以先釐清 CPPA 對收入穩定性與商業條件的影響，再對應合約風險。'
  },
  {
    id: 't-project-finance',
    name: 'Project Finance',
    category: 'finance',
    desc: '以專案未來現金流與資產為基礎進行融資的架構。',
    talk: '我目前會把融資端關心的現金流、風險配置與履約能力放在同一張圖上檢視。'
  },
  {
    id: 't-dscr',
    name: 'DSCR',
    category: 'finance',
    desc: '償債備付能力常用指標，可用來觀察專案對債務償還的承受力。',
    talk: '這一塊我會優先確認 DSCR 的假設基礎，而不是只看結果數字。'
  },
  {
    id: 't-lcoe',
    name: 'LCOE',
    category: 'finance',
    desc: '平準化度電成本，用來理解整體發電成本競爭力。',
    talk: '我們可以先拆 LCOE 的主要敏感因子，再看哪些變數最值得優先優化。'
  },
  {
    id: 't-cod',
    name: 'COD',
    category: 'project',
    desc: '商轉日期。專案時程、收入啟動與合約責任常會圍繞這個時間點。',
    talk: '目前我會把會影響 COD 的介面與風險放到優先追蹤清單。'
  },
  {
    id: 't-pto',
    name: 'PTO',
    category: 'tech',
    desc: 'Power Take-Off，波浪能轉成可利用能量的核心取能系統。',
    talk: '我想先釐清 PTO 在整個能量轉換鏈裡的角色，這樣討論設備時不會只看單點。'
  },
  {
    id: 't-point-absorber',
    name: 'Point Absorber',
    category: 'tech',
    desc: '點吸收式波浪能裝置，通常藉由浮體上下或多方向運動來取能。',
    talk: '如果是點吸收式架構，我會先確認浮體運動、PTO 與繫泊配置的關聯。'
  },
  {
    id: 't-commissioning',
    name: 'Commissioning',
    category: 'project',
    desc: '試運轉與調試階段，目的是確認系統在正式運轉前符合設計與操作要求。',
    talk: '我想把 commissioning 的驗證項目與責任邊界先畫清楚，避免交接模糊。'
  },
  {
    id: 't-grid',
    name: 'Grid Connection',
    category: 'project',
    desc: '併網。專案要把電送進電網前，涉及技術、流程與界面協調。',
    talk: '這裡我會把併網條件、文件需求與現場配合時程一起對齊。'
  },
  {
    id: 't-scada',
    name: 'SCADA',
    category: 'tech',
    desc: '監控與資料擷取系統，常用來查看設備狀態、警報與運轉資料。',
    talk: 'SCADA 對我來說不只是畫面，而是後續追蹤異常與營運資料的重要入口。'
  },
  {
    id: 't-availability',
    name: 'Availability',
    category: 'marine',
    desc: '設備可用率，用來看系統在需要運行時能否提供服務。',
    talk: '我會先確認 availability 的定義與計算口徑，避免不同單位講的是不同數字。'
  },
  {
    id: 't-metocean',
    name: 'Metocean',
    category: 'marine',
    desc: '海象與氣象條件的整體資料背景，常影響設計、施工與運維安排。',
    talk: '案場若受 metocean 條件影響，我們需要把設計假設與施工窗口一起看。'
  },
  {
    id: 't-bathymetry',
    name: 'Bathymetry',
    category: 'marine',
    desc: '水深地形資訊，是海域設備規劃、布放與纜線路徑的重要參考。',
    talk: '我會把 bathymetry 視為前置基礎資料，因為後續布設決策都會受它影響。'
  },
  {
    id: 't-mooring',
    name: 'Mooring',
    category: 'marine',
    desc: '繫泊系統，用來讓海上裝置維持在設計位置與姿態。',
    talk: '對我來說，繫泊不是單一零件，而是牽動生存性、維修與海事風險的核心配置。'
  },
  {
    id: 't-survivability',
    name: 'Survivability',
    category: 'marine',
    desc: '設備在嚴苛海況下仍能承受並保持完整的能力。',
    talk: '若要談 survivability，我會想先知道極端條件定義與保守設計邏輯。'
  },
  {
    id: 't-bop',
    name: 'BOP',
    category: 'project',
    desc: 'Balance of Plant，指主要設備之外，為整體系統運作所需的周邊系統與工程。',
    talk: '我會把 BOP 當成介面管理的重點區，因為很多落差都出現在主設備之外。'
  },
  {
    id: 't-epc',
    name: 'EPC',
    category: 'project',
    desc: '設計、採購、施工整合的常見專案執行模式。',
    talk: '如果是 EPC 架構，我會特別注意責任分界、變更管理與交付標準。'
  },
  {
    id: 't-fat',
    name: 'FAT / SAT',
    category: 'tech',
    desc: '工廠驗收測試與現場驗收測試，是設備交付驗證的重要節點。',
    talk: '我希望 FAT / SAT 的測試邏輯可以從一開始就跟驗收標準對齊。'
  },
  {
    id: 't-cars',
    name: 'CAR / DSU',
    category: 'risk',
    desc: '營造綜合險與延誤損失相關保障，是大型工程專案常見的風險管理工具。',
    talk: '我想先掌握保單涵蓋範圍與不保事項，這樣遇到風險事件才不會反應太慢。'
  },
  {
    id: 't-loto',
    name: 'LOTO',
    category: 'risk',
    desc: '掛牌上鎖。常見於設備與電氣作業的安全隔離程序。',
    talk: '這一塊我會把 LOTO 當成現場管理的基本功，而不是只看文件有沒有寫。'
  },
  {
    id: 't-change-order',
    name: 'Change Order',
    category: 'project',
    desc: '變更指令。專案在範圍、成本或時程發生調整時的重要管理工具。',
    talk: '若有變更，我會先確認變更理由、影響範圍與批准流程是否完整。'
  },
  {
    id: 't-three-way',
    name: 'Three-Way Match',
    category: 'finance',
    desc: '常見於付款控管：合約、驗收、請款資料需互相對齊。',
    talk: '我會先核對基礎文件的一致性，再往下談請款節奏。'
  },
  {
    id: 't-social-license',
    name: 'Social License',
    category: 'project',
    desc: '社會接受度與在地認同，是很多開發案能否順利推進的軟性關鍵。',
    talk: '我會把社會溝通視為專案條件的一部分，而不是完工前才補救。'
  },
  {
    id: 't-mws',
    name: 'Marine Warranty Surveyor',
    category: 'marine',
    desc: '海事保證相關的角色，常出現在海上運輸、安裝與風險控管流程中。',
    talk: '如果牽涉海上安裝，我會先確認 MWS 在審視哪些作業條件與文件。'
  },
  {
    id: 't-corrosion',
    name: 'Corrosion Protection',
    category: 'tech',
    desc: '腐蝕防護。海事環境下的設備壽命、維護與可靠度常與此密切相關。',
    talk: '海上設備我會先問腐蝕防護策略，因為這會影響長期維運成本。'
  }
];

const learningPath = [
  {
    title: '第 1 站｜先看懂整個案子在推什麼',
    desc: '目標不是一次懂完，而是先把「案場目的、主要設備、利害關係人、目前階段」放在同一張腦內地圖。',
    items: [
      '用自己的話說出：這個案場的目的、目前階段、主要參與者。',
      '整理一張簡單流程：開發 → 設計 → 採購 → 施工 / 佈放 → 併網 / 測試 → 運維。',
      '列出妳目前最常聽到的 10 個縮寫，先不要背細節，只記功能。'
    ]
  },
  {
    title: '第 2 站｜理解波浪發電核心機制',
    desc: '先抓大方向：波浪能怎麼被取出？PTO、浮體、繫泊、海纜、岸上設備怎麼串起來？',
    items: [
      '弄懂至少一種 WEC / 點吸收式系統的能量轉換鏈。',
      '分辨浮體、PTO、繫泊、海纜、岸上接口分別在做什麼。',
      '遇到技術名詞時，先能回答「它在整個鏈裡扮演什麼角色」。'
    ]
  },
  {
    title: '第 3 站｜專案 PM 真正要顧的是介面與風險',
    desc: 'PM 不一定要比工程師懂得更深，但要知道資訊缺口在哪、介面落差在哪、風險會從哪裡冒出來。',
    items: [
      '整理目前專案最關鍵的 5 個介面：技術、採購、海事、許可、財務。',
      '把可能影響 COD 的事件寫成風險清單。',
      '練習一句話說明每個風險可能造成的影響。'
    ]
  },
  {
    title: '第 4 站｜可以跟主管與廠商對得上話',
    desc: '最重要的不是完美回答，而是能清楚表達妳目前掌握到哪裡、正在確認什麼、下一步要做什麼。',
    items: [
      '練習三段式回報：已掌握／待確認／下一步。',
      '把今天不懂的內容轉成 3 個具體問題。',
      '每週至少整理 3 句自己能自然說出口的專案句型。'
    ]
  }
];

const meetingPrompts = [
  {
    role: '對主管回報',
    question: '如果主管問：「妳現在對蘇澳案場掌握到哪裡？」',
    answer: [
      '先講已掌握的部分：目前我先把案場階段、主要設備與關鍵介面整理好了。',
      '再講還在確認的部分：目前對某些技術細節與時程依賴關係還在釐清。',
      '最後講下一步：我接下來會把風險、時程與責任界面再整理成一頁給您確認。'
    ]
  },
  {
    role: '對設備廠商提問',
    question: '如果廠商介紹設備，妳可以怎麼問，才顯得有掌握重點？',
    answer: [
      '先問它在整個系統中的角色：這個設備在能量轉換鏈裡負責哪一段？',
      '再問介面：它跟其他設備、海纜或岸上系統的接口怎麼定義？',
      '最後問風險：目前最需要注意的限制、維護難點或失效情境是什麼？'
    ]
  },
  {
    role: '對海事團隊對話',
    question: '如果要跟海事團隊討論海況或施作窗口，妳可以怎麼開口？',
    answer: [
      '先確認條件：目前我們判斷施作窗口時，主要看的海況條件有哪些？',
      '再確認限制：哪些條件一超過，就會直接影響布放或安裝？',
      '最後拉回專案面：這些限制目前如何反映在時程安排與備援計畫上？'
    ]
  },
  {
    role: '對財務或管理端',
    question: '若管理端問：「這件事對專案影響大嗎？」',
    answer: [
      '先回答影響面：我目前會從時程、成本與風險三個面向來看。',
      '再說明不確定性：有些細節還在確認，但已知會影響哪個關鍵節點。',
      '最後給出行動：我會把需要決策的部分與建議方案整理後再回報。'
    ]
  },
  {
    role: '自我定位',
    question: '如果別人問：「妳最近在這個專案主要在做什麼？」',
    answer: [
      '可以先說：我目前主要在加速建立案場知識地圖與關鍵介面整理。',
      '再補一句：同時也在把技術、風險與溝通資訊轉成可追蹤的工作節奏。',
      '最後說：希望讓後續跟廠商、內部與主管溝通時能更準更穩。'
    ]
  }
];

const affirmations = [
  '妳不是在硬撐，妳是在建立專業重心。',
  '現在聽不懂的每個名詞，未來都會變成妳能自然說出口的語言。',
  'PM 的強，不是一次全懂，而是知道怎麼整理、怎麼追問、怎麼推進。',
  '把今天弄懂 1%，一個月後就不是同一個自己。',
  '妳不需要完美，妳需要穩定且持續地變強。'
];

const categoryMap = {
  project: '專案',
  tech: '技術',
  finance: '財務',
  risk: '風險 / 保險 / HSE',
  marine: '海事 / 案場',
  custom: '自訂'
};

const goalTypes = [
  { id: 'weekly', label: '本週目標', type: 'week', defaultTime: '08:30' },
  { id: 'monthly', label: '本月目標', type: 'month', defaultTime: '09:00' },
  { id: 'quarterly', label: '本季目標', type: 'quarter', defaultTime: '09:30' },
  { id: 'yearly', label: '年度目標', type: 'year', defaultTime: '10:00' }
];

const defaultState = {
  goals: {
    weekly: [
      { id: uid(), text: '弄懂今天最常被提到的 3 個名詞，並能各說一句白話版本。', done: false }
    ],
    monthly: [
      { id: uid(), text: '整理一份蘇澳案場的關鍵介面與待確認事項。', done: false }
    ],
    quarterly: [
      { id: uid(), text: '建立自己的波浪發電專案學習地圖，能對主管說清楚全貌。', done: false }
    ],
    yearly: [
      { id: uid(), text: '成為能和主管、廠商自然對談的穩定 PM。', done: false }
    ]
  },
  reminders: {
    notifyEnabled: false,
    lastFired: {},
    weekly: '08:30',
    monthly: '09:00',
    quarterly: '09:30',
    yearly: '10:00'
  },
  route: [
    {
      id: uid(),
      title: '先用自己的話說出整個案場在做什麼',
      stage: '第 1 週',
      note: '不用求完整，但要能說出：目的、主要設備、目前階段。',
      done: false
    }
  ],
  notes: {
    learned: '',
    unclear: '',
    ask: '',
    quote: '',
    externalTerms: '',
    thirtySec: '',
    thirtySecSavedAt: ''
  },
  customTerms: []
};

let state = loadState();
let currentAffirmationIndex = 0;
let currentDailyTerms = [];
let currentMeetingPromptIndex = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function uid() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...deepClone(defaultState),
      ...parsed,
      goals: { ...deepClone(defaultState).goals, ...(parsed.goals || {}) },
      reminders: { ...deepClone(defaultState).reminders, ...(parsed.reminders || {}) },
      notes: { ...deepClone(defaultState).notes, ...(parsed.notes || {}) },
      customTerms: Array.isArray(parsed.customTerms) ? parsed.customTerms : [],
      route: Array.isArray(parsed.route) ? parsed.route : deepClone(defaultState).route
    };
  } catch {
    return deepClone(defaultState);
  }
}

function saveState(render = true) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (render) renderAll();
}

function showToast(message) {
  const stack = $('#toastStack');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = message;
  stack.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
  }, 2600);
  setTimeout(() => el.remove(), 3100);
}

function nowText() {
  const d = new Date();
  const weekday = ['週日','週一','週二','週三','週四','週五','週六'][d.getDay()];
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${weekday}`;
}

function updateClock() {
  const now = new Date();
  $('#clock').textContent = now.toLocaleTimeString('zh-TW', { hour12: false });
  $('#todayText').textContent = nowText();
}

function cycleAffirmation(forceNext = false) {
  if (forceNext) {
    currentAffirmationIndex = (currentAffirmationIndex + 1) % affirmations.length;
  } else {
    currentAffirmationIndex = new Date().getDate() % affirmations.length;
  }
  $('#affirmationText').textContent = affirmations[currentAffirmationIndex];
}

function getAllTerms() {
  const lines = (state.notes.externalTerms || '')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map((name, index) => ({
      id: `ext_${index}_${name}`,
      name,
      category: 'custom',
      desc: '由外部來源匯入，建議再補上白話說明或會議說法。',
      talk: '今天先記得它出現在哪個流程或對話中，之後再補完整定義。'
    }));

  return [...baseTerms, ...state.customTerms, ...lines];
}

function deterministicPick(list, count, offset = 0) {
  if (!list.length) return [];
  const result = [];
  const base = new Date();
  const seed = Number(`${base.getFullYear()}${base.getMonth() + 1}${base.getDate()}`) + offset;
  let index = seed % list.length;
  while (result.length < Math.min(count, list.length)) {
    const item = list[index % list.length];
    if (!result.includes(item)) result.push(item);
    index += 7;
  }
  return result;
}

function renderDailyTerms(randomize = false) {
  const allTerms = getAllTerms();
  currentDailyTerms = randomize
    ? shuffle([...allTerms]).slice(0, 3)
    : deterministicPick(allTerms, 3, 11);

  const container = $('#dailyTerms');
  container.innerHTML = currentDailyTerms.map(term => `
    <div class="termCard">
      <div class="termTag">${categoryMap[term.category] || '分類'}</div>
      <h4>${escapeHtml(term.name)}</h4>
      <p class="termDesc">${escapeHtml(term.desc)}</p>
      <p class="termTalk">💬 ${escapeHtml(term.talk)}</p>
      <div class="termActions">
        <button type="button" data-copy-term="${escapeAttr(term.name)}｜${escapeAttr(term.desc)}">複製重點</button>
        <button type="button" data-talk-term="${escapeAttr(term.talk)}">複製說法</button>
      </div>
    </div>
  `).join('');

  const focus = currentDailyTerms[0];
  if (focus) {
    $('#dailyFocusTitle').textContent = focus.name;
    $('#dailyFocusDesc').textContent = focus.desc;
  }

  const actions = [
    `先把「${focus ? focus.name : '今日名詞'}」用自己的話說一次。`,
    '把今天還不懂的地方寫進「明天要問」。',
    '練 1 題主管或廠商對談，讓輸出先跟上理解。'
  ];
  $('#todayActions').innerHTML = actions.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

function computePeriodInfo(type) {
  const now = new Date();
  let start;
  let end;

  if (type === 'week') {
    const day = now.getDay();
    start = new Date(now);
    start.setHours(0, 0, 0, 0);
    start.setDate(now.getDate() - day);
    end = new Date(start);
    end.setDate(start.getDate() + 7);
  } else if (type === 'month') {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  } else if (type === 'quarter') {
    const quarter = Math.floor(now.getMonth() / 3);
    start = new Date(now.getFullYear(), quarter * 3, 1);
    end = new Date(now.getFullYear(), quarter * 3 + 3, 1);
  } else {
    start = new Date(now.getFullYear(), 0, 1);
    end = new Date(now.getFullYear() + 1, 0, 1);
  }

  const total = end - start;
  const elapsed = now - start;
  const percent = Math.min(100, Math.max(0, (elapsed / total) * 100));
  const remainingDays = Math.max(0, Math.ceil((end - now) / (1000 * 60 * 60 * 24)));
  return { percent, remainingDays };
}

function renderProgressSummary() {
  const wrap = $('#progressSummary');
  wrap.innerHTML = goalTypes.map(goal => {
    const info = computePeriodInfo(goal.type);
    const items = state.goals[goal.id] || [];
    const done = items.filter(item => item.done).length;
    const ratio = items.length ? Math.round((done / items.length) * 100) : 0;
    return `
      <div class="summaryCard">
        <div class="summaryTitle">${goal.label}</div>
        <div class="summaryValue">${ratio}%</div>
        <div class="progressTrack"><div class="progressFill" style="width:${info.percent}%;"></div></div>
        <div class="summaryMeta">完成 ${done}/${items.length || 0}｜剩 ${info.remainingDays} 天</div>
      </div>
    `;
  }).join('');
}

function renderNotes() {
  $('#noteLearned').value = state.notes.learned || '';
  $('#noteUnclear').value = state.notes.unclear || '';
  $('#noteAsk').value = state.notes.ask || '';
  $('#noteQuote').value = state.notes.quote || '';
  $('#externalTermsInput').value = state.notes.externalTerms || '';
  $('#thirtySecInput').value = state.notes.thirtySec || '';
  $('#externalTermsCount').textContent = `目前自訂詞數：${(state.notes.externalTerms || '').split('\n').map(v => v.trim()).filter(Boolean).length}`;
  $('#thirtySecSavedText').textContent = state.notes.thirtySecSavedAt
    ? `最近儲存：${state.notes.thirtySecSavedAt}`
    : '尚未儲存。';
}

function renderPathTimeline() {
  $('#pathTimeline').innerHTML = learningPath.map((stage, index) => `
    <div class="timelineItem">
      <div class="timelineDot">${index + 1}</div>
      <div class="timelineBody">
        <h4>${escapeHtml(stage.title)}</h4>
        <p>${escapeHtml(stage.desc)}</p>
        <ul class="checkList">
          ${stage.items.map(item => `
            <li class="checkItem">
              <input type="checkbox" disabled>
              <span>${escapeHtml(item)}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderCustomRoute() {
  const list = $('#customRouteList');
  if (!state.route.length) {
    list.innerHTML = '<div class="emptyState">還沒有自訂航線，先加一個最想搞懂的主題吧。</div>';
    return;
  }

  list.innerHTML = state.route.map(item => `
    <div class="routeCard ${item.done ? 'routeDone' : ''}">
      <div class="routeTop">
        <div>
          <div class="routeBadge">${escapeHtml(item.stage || '未分類')}</div>
          <h4>${escapeHtml(item.title)}</h4>
        </div>
      </div>
      <p>${escapeHtml(item.note || '尚未補充說明')}</p>
      <div class="routeActions">
        <button type="button" data-route-toggle="${item.id}">${item.done ? '標記未完成' : '標記完成'}</button>
        <button type="button" class="danger" data-route-delete="${item.id}">刪除</button>
      </div>
    </div>
  `).join('');
}

function renderTermGrid() {
  const keyword = ($('#termSearchInput').value || '').trim().toLowerCase();
  const filter = $('#termCategoryFilter').value;
  const terms = getAllTerms().filter(term => {
    const matchFilter = filter === 'all' ? true : term.category === filter;
    const haystack = `${term.name} ${term.desc} ${term.talk} ${categoryMap[term.category] || ''}`.toLowerCase();
    const matchKeyword = keyword ? haystack.includes(keyword) : true;
    return matchFilter && matchKeyword;
  });

  const grid = $('#termGrid');
  if (!terms.length) {
    grid.innerHTML = '<div class="emptyState">找不到符合的名詞，換個關鍵字試試看。</div>';
    return;
  }

  grid.innerHTML = terms.map(term => `
    <div class="termAtlasCard">
      <div class="termTag">${categoryMap[term.category] || '分類'}</div>
      <h4>${escapeHtml(term.name)}</h4>
      <p>${escapeHtml(term.desc)}</p>
      <p class="termTalk">💬 ${escapeHtml(term.talk)}</p>
    </div>
  `).join('');
}

function renderGoals() {
  const container = $('#goalSections');
  container.innerHTML = goalTypes.map(goal => {
    const items = state.goals[goal.id] || [];
    const info = computePeriodInfo(goal.type);
    const done = items.filter(item => item.done).length;
    return `
      <section class="goalSection">
        <div class="goalHeader">
          <div>
            <h4>${goal.label}</h4>
            <div class="goalMeta">完成 ${done}/${items.length || 0}｜剩 ${info.remainingDays} 天</div>
          </div>
          <div style="min-width:180px; width:180px;">
            <div class="progressTrack"><div class="progressFill" style="width:${info.percent}%;"></div></div>
          </div>
        </div>
        <ul class="goalList">
          ${items.map(item => `
            <li class="goalItem ${item.done ? 'done' : ''}">
              <input type="checkbox" ${item.done ? 'checked' : ''} data-goal-toggle="${goal.id}|${item.id}">
              <div class="goalText">${escapeHtml(item.text)}</div>
              <button class="iconBtn danger" type="button" data-goal-delete="${goal.id}|${item.id}">×</button>
            </li>
          `).join('')}
        </ul>
        <div class="addGoalBox">
          <input type="text" data-goal-input="${goal.id}" placeholder="新增${goal.label}...">
          <button class="primaryBtn" type="button" data-goal-add="${goal.id}">新增</button>
        </div>
      </section>
    `;
  }).join('');
}

function renderReminders() {
  $('#reminderSettings').innerHTML = goalTypes.map(goal => `
    <label class="reminderRow">
      <div>
        <strong>${goal.label}</strong>
        <div class="goalMeta">網站開著時，會在這個時間提醒妳看本期目標。</div>
      </div>
      <input type="time" data-reminder-time="${goal.id}" value="${state.reminders[goal.id] || goal.defaultTime}">
    </label>
  `).join('');

  const permission = typeof Notification === 'undefined' ? '此瀏覽器不支援通知' : Notification.permission;
  $('#notifyStatus').textContent = `通知狀態：${permission}${state.reminders.notifyEnabled ? '｜已開啟提醒檢查' : '｜尚未啟用提醒檢查'}`;
}

function renderMeetingPrompt(randomize = false) {
  currentMeetingPromptIndex = randomize
    ? Math.floor(Math.random() * meetingPrompts.length)
    : new Date().getDay() % meetingPrompts.length;

  const prompt = meetingPrompts[currentMeetingPromptIndex];
  $('#meetingRole').textContent = prompt.role;
  $('#meetingQuestion').textContent = prompt.question;
  $('#meetingAnswer').innerHTML = prompt.answer.map(line => `<li>${escapeHtml(line)}</li>`).join('');
}

function renderAll() {
  updateClock();
  cycleAffirmation(false);
  renderDailyTerms(false);
  renderProgressSummary();
  renderNotes();
  renderPathTimeline();
  renderCustomRoute();
  renderTermGrid();
  renderGoals();
  renderReminders();
  renderMeetingPrompt(false);
}

function addRoute() {
  const title = $('#routeTitleInput').value.trim();
  const stage = $('#routeStageInput').value.trim();
  const note = $('#routeNoteInput').value.trim();
  if (!title) {
    showToast('請先輸入航標標題。');
    return;
  }
  state.route.unshift({ id: uid(), title, stage, note, done: false });
  $('#routeTitleInput').value = '';
  $('#routeStageInput').value = '';
  $('#routeNoteInput').value = '';
  saveState();
  showToast('已加入妳自己的成長航標。');
}

function addGoal(groupId) {
  const input = document.querySelector(`[data-goal-input="${groupId}"]`);
  if (!input) return;
  const text = input.value.trim();
  if (!text) {
    showToast('請先輸入目標內容。');
    return;
  }
  state.goals[groupId].push({ id: uid(), text, done: false });
  input.value = '';
  saveState();
}

function saveQuickNotes() {
  state.notes.learned = $('#noteLearned').value.trim();
  state.notes.unclear = $('#noteUnclear').value.trim();
  state.notes.ask = $('#noteAsk').value.trim();
  state.notes.quote = $('#noteQuote').value.trim();
  saveState();
  showToast('今天的學習筆記已儲存。');
}

function saveExternalTerms() {
  state.notes.externalTerms = $('#externalTermsInput').value;
  saveState();
  showToast('外部關鍵字清單已儲存，會加入搜尋與每日抽取。');
}

function saveThirtySec() {
  state.notes.thirtySec = $('#thirtySecInput').value.trim();
  state.notes.thirtySecSavedAt = `${nowText()} ${new Date().toLocaleTimeString('zh-TW', { hour12: false })}`;
  saveState();
  showToast('30 秒整理稿已儲存。');
}

function addCustomTerm() {
  const name = $('#customTermName').value.trim();
  const category = $('#customTermCategory').value;
  const desc = $('#customTermDesc').value.trim();
  const talk = $('#customTermTalk').value.trim();
  if (!name || !desc || !talk) {
    showToast('請把名詞、白話說明與會議說法都填好。');
    return;
  }
  state.customTerms.unshift({ id: uid(), name, category, desc, talk });
  ['#customTermName', '#customTermDesc', '#customTermTalk'].forEach(selector => $(selector).value = '');
  $('#customTermCategory').value = 'custom';
  saveState();
  showToast(`已加入自訂名詞：${name}`);
}

function switchView(viewName) {
  $$('.tabBtn').forEach(btn => btn.classList.toggle('active', btn.dataset.view === viewName));
  $$('.view').forEach(view => view.classList.toggle('activeView', view.id === `view-${viewName}`));
}

function enableNotifications() {
  if (typeof Notification === 'undefined') {
    showToast('目前瀏覽器不支援通知功能。');
    return;
  }
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      state.reminders.notifyEnabled = true;
      saveState();
      showToast('提醒通知已啟用。');
    } else {
      state.reminders.notifyEnabled = false;
      saveState();
      showToast('通知權限未開啟，仍會保留站內提醒。');
    }
  });
}

function maybeFireReminder() {
  const now = new Date();
  const nowTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const todayKey = now.toISOString().slice(0, 10);

  goalTypes.forEach(goal => {
    const reminderTime = state.reminders[goal.id];
    const fireKey = `${goal.id}_${todayKey}`;
    if (reminderTime === nowTime && state.reminders.lastFired[fireKey] !== true) {
      const message = `${goal.label}提醒：打開看看妳設定的目標，今天至少前進一小步。`;
      showToast(message);
      if (state.reminders.notifyEnabled && typeof Notification !== 'undefined' && Notification.permission === 'granted') {
        new Notification(goal.label, { body: '打開網站，檢查目標、名詞與明天要問。' });
      }
      state.reminders.lastFired[fireKey] = true;
      saveState(false);
    }
  });
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wave-pm-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('已匯出備份檔。');
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      state = loadState();
      renderAll();
      showToast('資料匯入成功。');
    } catch {
      showToast('匯入失敗，請確認 JSON 檔案格式。');
    }
  };
  reader.readAsText(file);
}

function copyText(text) {
  if (!navigator.clipboard || !window.isSecureContext) {
    showToast('目前環境不支援自動複製，請手動複製。');
    return;
  }
  navigator.clipboard.writeText(text)
    .then(() => showToast('已複製到剪貼簿。'))
    .catch(() => showToast('複製失敗，請手動選取。'));
}

function setupSceneInteraction() {
  const waveField = $('#waveField');
  const buoy = $('#buoy');
  const pistonRod = $('#pistonRod');

  window.addEventListener('pointerdown', event => {
    const target = event.target;
    if (target.closest('#app')) return;

    const buoyRect = buoy.getBoundingClientRect();
    if (event.clientX >= buoyRect.left || event.clientY < window.innerHeight * 0.36) return;

    const wave = document.createElement('div');
    wave.className = 'moving-wave';
    wave.style.left = `${event.clientX}px`;
    wave.style.top = `${event.clientY}px`;
    waveField.appendChild(wave);

    const distance = buoyRect.left - event.clientX;
    const duration = Math.max(500, (distance / 620) * 1000);
    wave.animate([
      { transform: 'translateX(0px)', opacity: 0.95 },
      { transform: `translateX(${distance}px)`, opacity: 0.15 }
    ], { duration, easing: 'linear', fill: 'forwards' });

    setTimeout(() => {
      wave.remove();
      pistonRod.style.transform = 'translateX(36px)';
      buoy.style.transform = 'translateY(-16px)';

      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${buoyRect.left - 30}px`;
      ripple.style.top = `${buoyRect.top + 36}px`;
      waveField.appendChild(ripple);
      setTimeout(() => ripple.remove(), 900);

      const textEl = document.createElement('div');
      textEl.className = 'energy-text';
      const randomTerm = currentDailyTerms.length ? currentDailyTerms[Math.floor(Math.random() * currentDailyTerms.length)] : null;
      textEl.textContent = randomTerm ? `＋${randomTerm.name}` : '＋學習能量';
      textEl.style.left = `${buoyRect.left - 10}px`;
      textEl.style.top = `${buoyRect.top - 28}px`;
      waveField.appendChild(textEl);
      setTimeout(() => textEl.remove(), 1800);

      setTimeout(() => {
        pistonRod.style.transform = 'translateX(0px)';
        buoy.style.transform = '';
      }, 260);
    }, duration);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('\n', ' ');
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function bindEvents() {
  $$('.tabBtn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  $('#nextAffirmationBtn').addEventListener('click', () => cycleAffirmation(true));
  $('#refreshDailyTermsBtn').addEventListener('click', () => {
    renderDailyTerms(true);
    showToast('已重新抽取今天的學習詞。');
  });
  $('#saveNotesBtn').addEventListener('click', saveQuickNotes);
  $('#saveExternalBtn').addEventListener('click', saveExternalTerms);
  $('#addRouteBtn').addEventListener('click', addRoute);
  $('#addCustomTermBtn').addEventListener('click', addCustomTerm);
  $('#enableNotifyBtn').addEventListener('click', enableNotifications);
  $('#nextMeetingPromptBtn').addEventListener('click', () => renderMeetingPrompt(true));
  $('#saveThirtySecBtn').addEventListener('click', saveThirtySec);
  $('#exportDataBtn').addEventListener('click', exportData);
  $('#importDataBtn').addEventListener('click', () => $('#importFileInput').click());
  $('#importFileInput').addEventListener('change', event => {
    const [file] = event.target.files || [];
    if (file) importData(file);
    event.target.value = '';
  });

  $('#termSearchInput').addEventListener('input', renderTermGrid);
  $('#termCategoryFilter').addEventListener('change', renderTermGrid);

  document.addEventListener('click', event => {
    const target = event.target;

    const addGoalBtn = target.closest('[data-goal-add]');
    if (addGoalBtn) {
      addGoal(addGoalBtn.dataset.goalAdd);
      return;
    }

    const goalToggle = target.closest('[data-goal-toggle]');
    if (goalToggle) {
      const [groupId, goalId] = goalToggle.dataset.goalToggle.split('|');
      const goal = state.goals[groupId].find(item => item.id === goalId);
      if (goal) {
        goal.done = !goal.done;
        saveState();
      }
      return;
    }

    const goalDelete = target.closest('[data-goal-delete]');
    if (goalDelete) {
      const [groupId, goalId] = goalDelete.dataset.goalDelete.split('|');
      state.goals[groupId] = state.goals[groupId].filter(item => item.id !== goalId);
      saveState();
      return;
    }

    const routeToggle = target.closest('[data-route-toggle]');
    if (routeToggle) {
      const item = state.route.find(route => route.id === routeToggle.dataset.routeToggle);
      if (item) {
        item.done = !item.done;
        saveState();
      }
      return;
    }

    const routeDelete = target.closest('[data-route-delete]');
    if (routeDelete) {
      state.route = state.route.filter(route => route.id !== routeDelete.dataset.routeDelete);
      saveState();
      return;
    }

    const copyTermBtn = target.closest('[data-copy-term]');
    if (copyTermBtn) {
      copyText(copyTermBtn.dataset.copyTerm);
      return;
    }

    const talkTermBtn = target.closest('[data-talk-term]');
    if (talkTermBtn) {
      copyText(talkTermBtn.dataset.talkTerm);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const goalInput = event.target.closest('[data-goal-input]');
      if (goalInput) {
        addGoal(goalInput.dataset.goalInput);
      }
    }
  });

  document.addEventListener('input', event => {
    const reminderInput = event.target.closest('[data-reminder-time]');
    if (reminderInput) {
      state.reminders[reminderInput.dataset.reminderTime] = reminderInput.value;
      saveState();
    }
  });
}

function init() {
  renderAll();
  bindEvents();
  setupSceneInteraction();
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(maybeFireReminder, 30000);
  maybeFireReminder();
}

init();

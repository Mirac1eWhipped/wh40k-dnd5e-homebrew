/* ══════════════════════════════════════════════════════════════════
   INDUCTION PROTOCOL — guided character builder wizard
   Loaded by deathwatch_character_sheet.html after builder_data.js.

   The overlay container (#builder-overlay) is an EMPTY div in the sheet's
   static markup. Every input the wizard uses is built here, at open time,
   after DOMContentLoaded — so the sheet's memoized positional save caches
   (_fields / _checkboxes) never see them and the save format is untouched.

   Nothing touches the sheet until the final Commit: all choices accumulate
   in the _bw state object, and cancelling at any point leaves the sheet
   exactly as it was. The commit drives the sheet through its own setters
   (dispatching input/change so the existing inline handlers fire), never
   through Supabase directly.
══════════════════════════════════════════════════════════════════ */

/* ── Injected styles (kept out of the sheet file; themed via CSS vars) ── */
(function () {
  var css = [
    '#builder-overlay{display:none;position:fixed;inset:0;background:var(--overlay-bg,rgba(0,0,0,.72));z-index:1300;align-items:center;justify-content:center;}',
    '#builder-overlay.open{display:flex;}',
    '#bw-modal{background:var(--panel,var(--panel-bg,#111));border:1px solid var(--gold);border-radius:4px;width:min(920px,96vw);height:min(660px,92vh);display:flex;flex-direction:column;overflow:hidden;box-shadow:var(--modal-shadow,0 0 30px rgba(0,0,0,.6));}',
    '#bw-hdr{font-family:var(--font-label);font-size:10pt;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-light);border-bottom:1px solid var(--border2);padding:10px 14px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;}',
    '.bw-x{background:none;border:none;color:var(--silver-dim);font-size:14pt;cursor:pointer;line-height:1;}',
    '.bw-x:hover{color:var(--gold);}',
    '#bw-main{display:flex;flex:1;min-height:0;}',
    '#bw-rail{width:172px;flex-shrink:0;border-right:1px solid var(--border2);padding:10px 0;overflow-y:auto;background:var(--panel2,transparent);}',
    '.bw-rail-item{display:flex;align-items:center;gap:7px;padding:6px 12px;font-family:var(--font-label);font-size:8pt;letter-spacing:.1em;text-transform:uppercase;color:var(--text-dim);cursor:default;border-left:3px solid transparent;}',
    '.bw-rail-item.seen{color:var(--silver-dim);cursor:pointer;}',
    '.bw-rail-item.seen:hover{color:var(--gold-light);}',
    '.bw-rail-item.cur{color:var(--gold);border-left-color:var(--gold);background:rgba(var(--gold-rgb),.07);}',
    '.bw-rail-num{width:16px;height:16px;border:1px solid var(--border2);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:7pt;flex-shrink:0;}',
    '.bw-rail-item.cur .bw-rail-num{border-color:var(--gold);}',
    '.bw-rail-item.done .bw-rail-num{border-color:var(--gold-dim);color:var(--gold);}',
    '#bw-content{flex:1;overflow-y:auto;padding:16px 18px;min-width:0;}',
    '.bw-h{font-family:var(--font-label);font-size:12pt;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:4px;}',
    '.bw-sub{font-size:9.5pt;color:var(--text-dim);line-height:1.5;margin-bottom:14px;}',
    '.bw-sec{font-family:var(--font-label);font-size:8.5pt;letter-spacing:.18em;text-transform:uppercase;color:var(--silver-dim);border-bottom:1px solid var(--border);padding-bottom:4px;margin:16px 0 8px;}',
    '.bw-sec.first{margin-top:0;}',
    '.bw-field{margin-bottom:12px;}',
    '.bw-field label{display:block;font-family:var(--font-label);font-size:8pt;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:4px;}',
    '.bw-inp{width:100%;max-width:340px;background:var(--panel2,#1a1a1a);border:1px solid var(--border2);color:var(--text);font-family:var(--font-body,inherit);font-size:11pt;padding:7px 10px;border-radius:3px;outline:none;box-sizing:border-box;}',
    '.bw-inp:focus{border-color:var(--gold-dim);}',
    '.bw-inp.small{max-width:90px;text-align:center;}',
    '.bw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;}',
    '.bw-card{border:1px solid var(--border2);border-radius:3px;padding:8px 10px;cursor:pointer;transition:all .15s;background:transparent;text-align:left;}',
    '.bw-card:hover{border-color:var(--gold-dim);background:rgba(var(--gold-rgb),.05);}',
    '.bw-card.sel{border-color:var(--gold);background:rgba(var(--gold-rgb),.1);box-shadow:0 0 8px rgba(var(--gold-rgb),.2);}',
    '.bw-card.locked{cursor:default;opacity:.85;border-style:dashed;}',
    '.bw-card-name{font-family:var(--font-label);font-size:9.5pt;letter-spacing:.08em;text-transform:uppercase;color:var(--gold-light);display:flex;justify-content:space-between;gap:6px;align-items:baseline;}',
    '.bw-card-stat{font-size:8.5pt;color:var(--text-dim);line-height:1.4;margin-top:2px;}',
    '.bw-card-cost{font-size:8pt;color:var(--gold);white-space:nowrap;}',
    '.bw-tag{display:inline-block;font-family:var(--font-label);font-size:7pt;letter-spacing:.1em;text-transform:uppercase;border:1px solid var(--gold-dim);color:var(--gold);border-radius:2px;padding:1px 5px;margin:2px 3px 0 0;}',
    '.bw-tag.dim{border-color:var(--border2);color:var(--text-dim);}',
    '.bw-note{font-size:8.5pt;color:var(--text-dim);font-style:italic;line-height:1.5;margin-top:8px;}',
    '.bw-warn{font-size:9pt;color:var(--warn-text,#e08888);background:var(--warn-bg,rgba(192,64,64,.15));border:1px solid var(--warn-border,rgba(192,64,64,.4));border-radius:3px;padding:8px 10px;margin:10px 0;line-height:1.5;}',
    '.bw-count{font-family:var(--font-label);font-size:9pt;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin:6px 0 10px;}',
    '.bw-count.over{color:var(--warn-text,#e08888);}',
    '.bw-meter{font-family:var(--font-label);font-size:8pt;letter-spacing:.1em;text-transform:uppercase;color:var(--text-dim);border:1px solid var(--border2);border-radius:3px;padding:4px 8px;display:inline-block;margin-bottom:10px;}',
    '.bw-meter b{color:var(--gold);font-weight:600;}',
    '#bw-foot{border-top:1px solid var(--border2);padding:10px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0;}',
    '#bw-strip{flex:1;font-family:var(--font-label);font-size:8pt;letter-spacing:.12em;text-transform:uppercase;color:var(--silver-dim);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
    '#bw-err{font-size:8.5pt;color:var(--warn-text,#e08888);margin-right:6px;}',
    '.bw-nav{font-family:var(--font-label);font-size:9pt;letter-spacing:.12em;text-transform:uppercase;background:transparent;border:1px solid var(--border2);color:var(--silver-dim);padding:8px 18px;border-radius:3px;cursor:pointer;}',
    '.bw-nav:hover{border-color:var(--silver-dim);color:var(--text);}',
    '.bw-nav.primary{border-color:var(--gold);color:var(--gold);}',
    '.bw-nav.primary:hover{background:var(--gold);color:var(--hover-ink);}',
    '.bw-btn{font-family:var(--font-label);font-size:8.5pt;letter-spacing:.1em;text-transform:uppercase;background:transparent;border:1px solid var(--gold-dim);color:var(--gold);padding:4px 12px;border-radius:2px;cursor:pointer;}',
    '.bw-btn:hover{background:var(--gold-dim);color:var(--hover-ink);}',
    '.bw-btn:disabled{opacity:.35;cursor:default;}',
    '.bw-btn:disabled:hover{background:transparent;color:var(--gold);}',
    '.bw-seg{display:inline-flex;border:1px solid var(--border2);border-radius:3px;overflow:hidden;margin-bottom:12px;}',
    '.bw-seg button{font-family:var(--font-label);font-size:8.5pt;letter-spacing:.1em;text-transform:uppercase;background:transparent;border:none;color:var(--text-dim);padding:6px 14px;cursor:pointer;}',
    '.bw-seg button.on{background:var(--gold);color:var(--hover-ink);}',
    '.bw-set-card{border:1px solid var(--border2);border-radius:3px;padding:8px 10px;margin-bottom:8px;cursor:pointer;}',
    '.bw-set-card.sel{border-color:var(--gold);background:rgba(var(--gold-rgb),.08);}',
    '.bw-set-hdr{display:flex;align-items:center;gap:8px;font-family:var(--font-label);font-size:8.5pt;letter-spacing:.12em;text-transform:uppercase;color:var(--gold-light);}',
    '.bw-set-sum{margin-left:auto;color:var(--text-dim);font-size:8pt;}',
    '.bw-roll-chip{display:inline-block;border:1px solid var(--border2);border-radius:3px;padding:3px 7px;margin:5px 5px 0 0;text-align:center;}',
    '.bw-roll-tot{font-family:var(--font-label);font-size:11pt;color:var(--gold-light);}',
    '.bw-roll-dice{font-size:7pt;color:var(--text-dim);}',
    '.bw-roll-dice s{opacity:.55;}',
    '.bw-ab-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;margin-top:10px;}',
    '.bw-ab-cell{border:1px solid var(--border2);border-radius:3px;padding:7px 9px;text-align:center;}',
    '.bw-ab-lbl{font-family:var(--font-label);font-size:8pt;letter-spacing:.16em;color:var(--gold);text-transform:uppercase;}',
    '.bw-ab-final{font-family:var(--font-label);font-size:14pt;color:var(--gold-light);margin:2px 0;}',
    '.bw-ab-mod{font-size:8.5pt;color:var(--text-dim);}',
    '.bw-ab-src{font-size:7pt;color:var(--text-dim);opacity:.8;margin-top:2px;line-height:1.4;}',
    '.bw-sel{background:var(--panel2,#1a1a1a);border:1px solid var(--border2);color:var(--text);font-size:9.5pt;padding:4px 6px;border-radius:3px;outline:none;width:100%;box-sizing:border-box;margin-top:4px;}',
    '.bw-sel:focus{border-color:var(--gold-dim);}',
    '.bw-step-chk{display:flex;align-items:center;gap:8px;margin:8px 0;font-size:9.5pt;color:var(--text);cursor:pointer;}',
    '.bw-asi-card{border:1px solid var(--border2);border-radius:3px;padding:10px 12px;margin-bottom:10px;}',
    '.bw-asi-hdr{font-family:var(--font-label);font-size:9pt;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-light);margin-bottom:6px;display:flex;align-items:center;gap:10px;}',
    '.bw-asi-row{display:flex;align-items:center;gap:6px;margin:3px 0;font-size:9.5pt;color:var(--text);}',
    '.bw-asi-row .bw-btn{padding:0 8px;font-size:10pt;line-height:1.5;}',
    '.bw-asi-val{font-family:var(--font-label);font-size:10pt;color:var(--gold-light);width:34px;text-align:center;}',
    '.bw-summary-row{display:flex;gap:10px;padding:4px 0;border-bottom:1px solid var(--border);font-size:9.5pt;}',
    '.bw-summary-k{font-family:var(--font-label);font-size:8pt;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);width:130px;flex-shrink:0;padding-top:1px;}',
    '.bw-summary-v{color:var(--text);line-height:1.5;min-width:0;}',
    '#bw-hint{position:fixed;bottom:18px;right:18px;z-index:900;background:var(--panel,#111);border:1px solid var(--gold);border-radius:4px;padding:12px 14px;max-width:280px;box-shadow:var(--modal-shadow,0 0 30px rgba(0,0,0,.6));}',
    '#bw-hint .bw-h{font-size:9.5pt;margin-bottom:6px;}',
    '#bw-hint p{font-size:9pt;color:var(--text-dim);line-height:1.5;margin:0 0 10px;}',
    '#bw-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1400;background:var(--panel,#111);border:1px solid var(--gold);border-radius:4px;padding:10px 18px;font-family:var(--font-label);font-size:9.5pt;letter-spacing:.12em;text-transform:uppercase;color:var(--gold-light);box-shadow:var(--modal-shadow,0 0 30px rgba(0,0,0,.6));opacity:0;transition:opacity .3s;}',
    '#bw-toast.show{opacity:1;}',
    '@media print{#builder-overlay,#bw-hint,#bw-toast{display:none!important;}}'
  ].join('\n');
  var el = document.createElement('style');
  el.id = 'bw-styles';
  el.textContent = css;
  document.head.appendChild(el);
})();

/* ── Wizard state ── */
var _bw = null;
var _BW_STATS = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
var _BW_STAT_LABEL = { str:'Strength', dex:'Dexterity', con:'Constitution', int:'Intelligence', wis:'Wisdom', cha:'Charisma' };
var _BW_SKILL_LABEL = {
  acrobatics:'Acrobatics', arcana:'Arcana', athletics:'Athletics', deception:'Deception',
  history:'History', insight:'Insight', intimidation:'Intimidation', investigation:'Investigation',
  medicine:'Medicine', perception:'Perception', persuasion:'Persuasion', religion:'Religion',
  'sleight-of-hand':'Sleight of Hand', stealth:'Stealth', survival:'Survival', technology:'Technology'
};
var _BW_TIER_LABEL = {
  base:'Base Powers (Free)', rank1:'Rank I', rank2:'Rank II', rank3:'Rank III', rank4:'Rank IV — Immateria',
  dev1:'Devotion I', dev2:'Devotion II', dev3:'Devotion III'
};

function _bwFresh() {
  return {
    step: 0, maxSeen: 0,
    identity: { name:'', player:'' },
    chapter: '',
    cls: '', sub: '', level: 1,
    abilities: {
      method: 'roll',
      sets: [],            // [[{dice:[4], droppedIdx, total} ×6], …]
      activeSet: -1,
      assign: { str:null, dex:null, con:null, int:null, wis:null, cha:null },  // roll index in active set
      manual: { str:10, dex:10, con:10, int:10, wis:10, cha:10 },
      bump: 'wis'          // Astartes third +1: 'wis' | 'int'
    },
    skills: [],            // chosen choose-N skill ids
    toolKit: '',           // REQ_ITEMS Tools id ('' = deferred)
    kitPicks: {},          // kit entry index → chosen REQ_ITEMS id
    grenades: [],          // chosen grenade ids (grenadeCase)
    shop: {},              // REQ_ITEMS id → count
    shopQ: '',
    spells: [],            // chosen spell ids (casters)
    asi: [],               // [{level, mode:'asi'|'feat', plus:{}, featNote:''}]
    clearWargearFirst: false,
    applyTheme: true
  };
}

/* ── Small helpers ── */
function _bwE(s) {
  return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function _bwMod(score) { return Math.floor((score - 10) / 2); }
function _bwFmt(n) { return n >= 0 ? '+' + n : String(n); }
function _bwPB(lvl) { return Math.ceil(lvl / 4) + 1; }
function _bwItem(id) { return (typeof REQ_ITEMS !== 'undefined' ? REQ_ITEMS : []).find(function(x){ return x.id === id; }); }
function _bwCls() { return _bw && _bw.cls ? BUILDER_CLASSES[_bw.cls] : null; }
function _bwCaster() { var c = _bwCls(); return c && c.caster ? c.caster : null; }
/* Numeric RP cost, or null when the item can't be bought (Standard Issue,
   Cannot be purchased, Training, Material-crafted, combi pricing). */
function _bwCost(it) {
  if (!it || !it.cost) return null;
  if (/material/i.test(it.cost)) return null;
  var m = /^(\d+)\s*RP/.exec(it.cost);
  return m ? parseInt(m[1], 10) : null;
}
function _bwPickItems(p) {
  var all = (typeof REQ_ITEMS !== 'undefined') ? REQ_ITEMS : [];
  if (p.ids) return p.ids.map(_bwItem).filter(Boolean);
  return all.filter(function(it) {
    if (p.cat && it.cat !== p.cat) return false;
    if (p.wtype && it.wtype !== p.wtype) return false;
    if (p.mod && (it.mods || []).indexOf(p.mod) === -1) return false;
    if (p.melee !== undefined) {
      var isMelee = /melee/i.test(it.range || '');
      if (p.melee !== isMelee) return false;
    }
    return true;
  });
}
function _bwGrenadeItems(gc) {
  var all = (typeof REQ_ITEMS !== 'undefined') ? REQ_ITEMS : [];
  return all.filter(function(it) {
    if (it.cat !== 'Equipment') return false;
    if ((it.mods || []).indexOf('Thrown') === -1) return false;
    if (gc.excl && gc.excl.indexOf(it.id) !== -1) return false;
    return true;
  });
}
function _bwBaseScore(ab) {
  var a = _bw.abilities;
  if (a.method === 'manual') {
    var v = parseInt(a.manual[ab], 10);
    return isNaN(v) ? null : v;
  }
  if (a.activeSet < 0 || a.assign[ab] === null) return null;
  var set = a.sets[a.activeSet];
  return set && set[a.assign[ab]] ? set[a.assign[ab]].total : null;
}
function _bwFinalScores() {
  var out = {};
  _BW_STATS.forEach(function(ab) {
    var base = _bwBaseScore(ab);
    if (base === null) { out[ab] = null; return; }
    var racial = (ab === 'str' || ab === 'con') ? 1 : (ab === _bw.abilities.bump ? 1 : 0);
    var asi = 0;
    _bw.asi.forEach(function(m) { if (m.mode === 'asi') asi += (m.plus[ab] || 0); });
    out[ab] = Math.min(BUILDER_SCORE_CAP, base + racial + asi);
  });
  return out;
}
function _bwHpMax() {
  var c = _bwCls();
  if (!c) return null;
  var fin = _bwFinalScores();
  if (fin.con === null) return null;
  var con = _bwMod(fin.con);
  return c.hitDie + con + (_bw.level - 1) * (c.hitDie / 2 + 1 + con);
}
/* Granted skills the choose-list must not re-offer: chapter grants + class signature. */
function _bwGrantedSkills() {
  var g = {};
  var ch = CHAPTER_GRANTS[_bw.chapter];
  (ch && ch.skills ? ch.skills : []).forEach(function(id){ g[id] = _bw.chapter; });
  var c = _bwCls();
  (c ? c.autoSkills : []).forEach(function(id){ g[id] = _bw.cls; });
  return g;
}
function _bwSyncAsi() {
  var keep = {};
  _bw.asi.forEach(function(m){ keep[m.level] = m; });
  _bw.asi = BUILDER_ASI_LEVELS.filter(function(l){ return l <= _bw.level; }).map(function(l) {
    return keep[l] || { level:l, mode:'asi', plus:{}, featNote:'' };
  });
}
function _bwSpellsAvail() {
  var caster = _bwCaster();
  if (!caster || typeof SPELLS === 'undefined') return [];
  return SPELLS.filter(function(sp) {
    if (sp.class !== caster.list) return false;
    var min = BUILDER_SPELL_MINLVL[sp.tier];
    return min !== undefined && min <= _bw.level;
  });
}
function _bwSpellCap() {
  var caster = _bwCaster();
  if (!caster) return 0;
  var fin = _bwFinalScores();
  var mod = fin[caster.stat] === null ? 0 : _bwMod(fin[caster.stat]);
  return Math.max(1, _bw.level + mod + _bwPB(_bw.level));
}
function _bwSheetBlank() {
  var nm = document.getElementById('char-name');
  var cs = document.getElementById('cls-select');
  if (nm && nm.value.trim()) return false;
  if (cs && cs.value) return false;
  var rows = document.querySelectorAll('.wg-equip-row');
  for (var i = 0; i < rows.length; i++) {
    var inp = rows[i].querySelector('input');
    if (inp && inp.value.trim()) return false;
  }
  return true;
}

/* ── Slot capacity guard ── */
function _bwSlotsNeeded() {
  var rows = 0, ammoNames = {};
  function noteAmmo(it) { if (it && it.ammo && it.ammo !== 'N/A') ammoNames[it.ammo] = true; }
  var c = _bwCls();
  if (c) {
    c.kit.forEach(function(entry, i) {
      if (entry.item) {
        var it = _bwItem(entry.item);
        if (it && it.cat !== 'Ammo') rows++;
        noteAmmo(it);
      } else if (entry.pick) {
        rows++;
        noteAmmo(_bwItem(_bw.kitPicks[i]));
      } else if (entry.grenadeCase) {
        rows += _bw.grenades.length;
      }
    });
  }
  if (_bw.toolKit) rows++;
  Object.keys(_bw.shop).forEach(function(id) {
    var it = _bwItem(id);
    if (!it) return;
    if (it.cat === 'Ammo') { ammoNames[it.name] = true; }
    else { rows++; noteAmmo(it); }
  });
  var ammo = 0;
  Object.keys(ammoNames).forEach(function(name) {
    if (_bw.clearWargearFirst) { ammo++; return; }
    if (typeof _ammoRowByName !== 'function' || _ammoRowByName(name) === -1) ammo++;
  });
  return { rows: rows, ammo: ammo };
}
function _bwSlotsFree() {
  if (_bw.clearWargearFirst) {
    return { rows: document.querySelectorAll('.wg-equip-row').length,
             ammo: document.querySelectorAll('.wg-ammo-row').length };
  }
  var rows = 0, ammo = 0;
  document.querySelectorAll('.wg-equip-row').forEach(function(r) {
    var inp = r.querySelector('input');
    if (inp && !inp.value.trim()) rows++;
  });
  document.querySelectorAll('.wg-ammo-row').forEach(function(r) {
    var inp = r.querySelector('input');
    if (inp && !inp.value.trim()) ammo++;
  });
  return { rows: rows, ammo: ammo };
}
function _bwCapacityErr() {
  var need = _bwSlotsNeeded(), free = _bwSlotsFree();
  if (need.rows > free.rows) return 'Not enough empty wargear rows: this loadout needs ' + need.rows + ', the sheet has ' + free.rows + ' free. Remove purchases or enable "empty the wargear list first" on the Welcome step.';
  if (need.ammo > free.ammo) return 'Not enough empty ammunition rows: this loadout needs ' + need.ammo + ', the sheet has ' + free.ammo + ' free.';
  return null;
}
function _bwMeterHtml() {
  var need = _bwSlotsNeeded(), free = _bwSlotsFree();
  var over = need.rows > free.rows || need.ammo > free.ammo;
  return '<div class="bw-meter"' + (over ? ' style="border-color:var(--warn-border);color:var(--warn-text);"' : '') + '>Slots — Wargear <b>' + need.rows + '</b>/' + free.rows + ' free · Ammo <b>' + need.ammo + '</b>/' + free.ammo + ' free</div>';
}

/* ══ Step registry ══ */
function _bwSteps() {
  var steps = [
    { id:'welcome',  label:'Welcome' },
    { id:'identity', label:'Identity' },
    { id:'chapter',  label:'Chapter' },
    { id:'class',    label:'Class & Level' },
    { id:'abilities',label:'Ability Scores' },
    { id:'skills',   label:'Skills' },
    { id:'tools',    label:'Tool Kit' },
    { id:'kit',      label:'Starting Kit' },
    { id:'shop',     label:'Requisition' }
  ];
  if (_bw && _bw.level > 1) steps.push({ id:'advance', label:'Advancement' });
  if (_bw && _bwCaster())   steps.push({ id:'spells',  label:'Powers' });
  steps.push({ id:'review', label:'Review' });
  return steps;
}

/* ══ Open / close / navigation ══ */
function _builderOpen() {
  var ov = document.getElementById('builder-overlay');
  if (!ov) return;
  if (typeof _viewOnly !== 'undefined' && _viewOnly) return;
  var hint = document.getElementById('bw-hint');
  if (hint) hint.remove();
  _bw = _bwFresh();
  _bw.clearWargearFirst = !_bwSheetBlank();
  ov.onmousedown = function(e) { if (e.target === ov) _builderCancelPrompt(); };
  ov.classList.add('open');
  document.addEventListener('keydown', _bwEsc);
  _bwRender();
}
function _builderClose() {
  var ov = document.getElementById('builder-overlay');
  if (ov) { ov.classList.remove('open'); ov.innerHTML = ''; }
  document.removeEventListener('keydown', _bwEsc);
  _bw = null;
}
function _bwEsc(e) { if (e.key === 'Escape') _builderCancelPrompt(); }
function _builderCancelPrompt() {
  if (!_bw) { _builderClose(); return; }
  if (confirm('Abandon the Induction Protocol? No changes have been applied to the sheet.')) _builderClose();
}
function _bwErr(msg) {
  var el = document.getElementById('bw-err');
  if (el) el.textContent = msg || '';
}
function _bwGoto(i) {
  if (!_bw) return;
  var steps = _bwSteps();
  if (i < 0 || i >= steps.length || i > _bw.maxSeen) return;
  _bw.step = Math.min(i, steps.length - 1);
  _bwRender();
}
function _bwBack() { if (_bw && _bw.step > 0) { _bw.step--; _bwRender(); } }
function _bwNext() {
  if (!_bw) return;
  var steps = _bwSteps();
  var err = _bwValidate(steps[_bw.step].id);
  if (err) { _bwErr(err); return; }
  if (_bw.step >= steps.length - 1) { _builderCommit(); return; }
  _bw.step++;
  _bw.maxSeen = Math.max(_bw.maxSeen, _bw.step);
  _bwRender();
}
function _bwValidate(stepId) {
  if (stepId === 'identity') {
    if (!_bw.identity.name.trim()) return 'Every operative needs a name.';
  }
  if (stepId === 'chapter' && !_bw.chapter) return 'Choose a Chapter.';
  if (stepId === 'class') {
    if (!_bw.cls) return 'Choose a class.';
    if (!(_bw.level >= 1 && _bw.level <= 20)) return 'Level must be between 1 and 20.';
  }
  if (stepId === 'abilities') {
    for (var i = 0; i < _BW_STATS.length; i++) {
      if (_bwBaseScore(_BW_STATS[i]) === null) {
        return _bw.abilities.method === 'roll' ? 'Assign all six rolled scores.' : 'Enter all six ability scores.';
      }
    }
  }
  if (stepId === 'skills') {
    var c = _bwCls();
    if (c && _bw.skills.length !== c.skills.count) return 'Choose ' + c.skills.count + ' skills (' + _bw.skills.length + ' selected).';
  }
  if (stepId === 'kit') {
    var cc = _bwCls();
    if (cc) {
      for (var k = 0; k < cc.kit.length; k++) {
        var entry = cc.kit[k];
        if (entry.pick && !_bw.kitPicks[k]) return 'Choose your ' + entry.pick.label + '.';
        if (entry.grenadeCase && _bw.grenades.length !== entry.grenadeCase.count) {
          return 'Pick ' + entry.grenadeCase.count + ' grenade types for your case.';
        }
      }
    }
  }
  if (stepId === 'advance') {
    for (var m = 0; m < _bw.asi.length; m++) {
      var ms = _bw.asi[m];
      if (ms.mode === 'asi') {
        var pts = 0;
        _BW_STATS.forEach(function(ab){ pts += (ms.plus[ab] || 0); });
        if (pts !== 2) return 'Level ' + ms.level + ' milestone: allocate both ability points (or mark it as a feat).';
      }
    }
  }
  if (stepId === 'spells') {
    if (_bw.spells.length > _bwSpellCap()) return 'Too many powers prepared — the cap is ' + _bwSpellCap() + '.';
  }
  return null;
}

/* ══ Render ══ */
function _bwRender() {
  var ov = document.getElementById('builder-overlay');
  if (!ov || !_bw) return;
  var steps = _bwSteps();
  if (_bw.step >= steps.length) _bw.step = steps.length - 1;
  var cur = steps[_bw.step];
  var rail = steps.map(function(s, i) {
    var cls = 'bw-rail-item' + (i === _bw.step ? ' cur' : '') + (i <= _bw.maxSeen ? ' seen' : '') + (i < _bw.step ? ' done' : '');
    var mark = i < _bw.step ? '✓' : String(i + 1);
    return '<div class="' + cls + '"' + (i <= _bw.maxSeen ? ' onclick="_bwGoto(' + i + ')"' : '') + '><span class="bw-rail-num">' + mark + '</span>' + s.label + '</div>';
  }).join('');
  var content = _bwStepHtml(cur.id);
  var strip = [
    _bw.identity.name.trim() || null,
    _bw.chapter || null,
    _bw.cls ? _bw.cls + ' · Lv ' + _bw.level : null
  ].filter(Boolean).join(' — ') || 'New Operative';
  var isLast = _bw.step === steps.length - 1;
  ov.innerHTML =
    '<div id="bw-modal" onmousedown="event.stopPropagation()">' +
      '<div id="bw-hdr"><span>⚒ Induction Protocol</span><button type="button" class="bw-x" onclick="_builderCancelPrompt()">✕</button></div>' +
      '<div id="bw-main"><div id="bw-rail">' + rail + '</div><div id="bw-content">' + content + '</div></div>' +
      '<div id="bw-foot">' +
        '<div id="bw-strip">' + _bwE(strip) + '</div>' +
        '<span id="bw-err"></span>' +
        (_bw.step > 0 ? '<button type="button" class="bw-nav" onclick="_bwBack()">← Back</button>' : '') +
        '<button type="button" class="bw-nav primary" onclick="_bwNext()">' + (isLast ? '⚒ Complete Induction' : 'Next →') + '</button>' +
      '</div>' +
    '</div>';
}
function _bwStepHtml(id) {
  switch (id) {
    case 'welcome':   return _bwStepWelcome();
    case 'identity':  return _bwStepIdentity();
    case 'chapter':   return _bwStepChapter();
    case 'class':     return _bwStepClass();
    case 'abilities': return _bwStepAbilities();
    case 'skills':    return _bwStepSkills();
    case 'tools':     return _bwStepTools();
    case 'kit':       return _bwStepKit();
    case 'shop':      return _bwStepShop();
    case 'advance':   return _bwStepAdvance();
    case 'spells':    return _bwStepSpells();
    case 'review':    return _bwStepReview();
  }
  return '';
}

/* ── Step: Welcome ── */
function _bwStepWelcome() {
  var blank = _bwSheetBlank();
  var loggedIn = (typeof _loggedIn === 'function') ? _loggedIn() : false;
  var h = '<div class="bw-h">Welcome, Battle-Brother</div>' +
    '<div class="bw-sub">This protocol walks you through creating a Deathwatch operative step by step — chapter, class, ability scores, skills, wargear, and requisition. Nothing is written to the sheet until you complete the final step, and you can cancel at any time without consequence.</div>';
  if (!blank) {
    h += '<div class="bw-warn"><strong>This sheet already holds a character.</strong> Completing the protocol will overwrite its identity, chapter, class, scores, and skills with your new choices.</div>' +
      '<label class="bw-step-chk"><input type="checkbox" ' + (_bw.clearWargearFirst ? 'checked' : '') + ' onchange="_bw.clearWargearFirst=this.checked;_bwRender();"> Empty the wargear &amp; ammunition lists before adding the new starting kit (recommended)</label>';
  }
  if (!loggedIn) {
    h += '<div class="bw-warn">You are not signed in — the builder will fill the sheet, but nothing saves to the cloud until you sign in from the portal.</div>';
  }
  h += '<div class="bw-note">The Emperor provides — 150 Requisition Points, a full starting kit, and the training of your Chapter await.</div>';
  return h;
}

/* ── Step: Identity ── */
function _bwStepIdentity() {
  return '<div class="bw-h">Rite of Naming</div>' +
    '<div class="bw-sub">Every operative seconded to the Deathwatch surrenders their old life. What name is entered in the Watch rolls?</div>' +
    '<div class="bw-field"><label>Operative Name</label><input class="bw-inp" type="text" value="' + _bwE(_bw.identity.name) + '" oninput="_bw.identity.name=this.value" placeholder="e.g. Brother Castiel"></div>' +
    '<div class="bw-field"><label>Player Name</label><input class="bw-inp" type="text" value="' + _bwE(_bw.identity.player) + '" oninput="_bw.identity.player=this.value" placeholder="Who commands this operative?"></div>';
}

/* ── Step: Chapter ── */
function _bwStepChapter() {
  var chapters = Object.keys(CHAPTER_GRANTS);
  var cards = chapters.map(function(ch) {
    var g = CHAPTER_GRANTS[ch] || {};
    var tags = [];
    (g.skills || []).forEach(function(s){ tags.push(_BW_SKILL_LABEL[s] || s); });
    (g.tools  || []).forEach(function(t){ tags.push(t); });
    (g.resist || []).forEach(function(r){ tags.push(r + ' Resist'); });
    var tagHtml = tags.map(function(t){ return '<span class="bw-tag">' + _bwE(t) + '</span>'; }).join('');
    return '<div class="bw-card' + (_bw.chapter === ch ? ' sel' : '') + '" onclick="_bwPickChapter(\'' + ch.replace(/'/g, "\\'") + '\')">' +
      '<div class="bw-card-name">' + _bwE(ch) + '</div>' +
      '<div class="bw-card-stat">' + tagHtml + '</div></div>';
  }).join('');
  var h = '<div class="bw-h">Chapter of Origin</div>' +
    '<div class="bw-sub">Your Chapter\'s heritage grants the proficiencies shown on each card automatically. All Astartes also share the gene-wrought traits below.</div>' +
    '<div class="bw-grid">' + cards + '</div>';
  if (_bw.chapter && typeof CHAPTER_HERITAGE !== 'undefined' && CHAPTER_HERITAGE[_bw.chapter]) {
    h += '<div class="bw-sec">' + _bwE(_bw.chapter) + ' — Heritage</div>';
    h += CHAPTER_HERITAGE[_bw.chapter].map(function(t) {
      return '<div class="bw-card locked" style="margin-bottom:6px;"><div class="bw-card-name">' + _bwE(t.name) + '</div><div class="bw-card-stat">' + t.body + '</div></div>';
    }).join('');
  }
  if (typeof ASTARTES_TRAITS !== 'undefined') {
    h += '<div class="bw-sec">Adeptus Astartes — Shared Traits</div>';
    h += ASTARTES_TRAITS.map(function(t) {
      return '<div class="bw-card locked" style="margin-bottom:6px;"><div class="bw-card-name">' + _bwE(t.name) + '</div><div class="bw-card-stat">' + t.body + '</div></div>';
    }).join('');
  }
  return h;
}
function _bwPickChapter(ch) { _bw.chapter = ch; _bwRender(); }

/* ── Step: Class & Level ── */
function _bwStepClass() {
  var cards = Object.keys(BUILDER_CLASSES).map(function(name) {
    var c = BUILDER_CLASSES[name];
    var sig = c.autoSkills.length ? '<span class="bw-tag">' + _bwE(_BW_SKILL_LABEL[c.autoSkills[0]] || c.autoSkills[0]) + '</span>' : '';
    return '<div class="bw-card' + (_bw.cls === name ? ' sel' : '') + '" onclick="_bwPickClass(\'' + name.replace(/'/g, "\\'") + '\')">' +
      '<div class="bw-card-name">' + _bwE(name) + '<span class="bw-card-cost">d' + c.hitDie + '</span></div>' +
      '<div class="bw-card-stat">Saves: ' + c.saves.map(function(s){ return s.toUpperCase(); }).join(' · ') +
      (c.caster ? ' · ' + (c.caster.list === 'librarian' ? 'Psyker (INT)' : 'Blessed (CHA)') : '') + '</div>' +
      '<div class="bw-card-stat">' + sig + '<span class="bw-tag dim">Choose ' + c.skills.count + ' skills</span></div></div>';
  }).join('');
  var h = '<div class="bw-h">Combat Specialty</div>' +
    '<div class="bw-sub">Your class fixes your hit die, saving throws, and armor/weapon training (applied automatically). Skills, tools, and wargear choices follow in the next steps.</div>' +
    '<div class="bw-grid">' + cards + '</div>' +
    '<div class="bw-sec">Starting Level</div>' +
    '<div class="bw-field"><input class="bw-inp small" type="number" min="1" max="20" value="' + _bw.level + '" oninput="_bwSetLevel(this.value)"> <span style="font-size:9pt;color:var(--text-dim);">Level 1 for a fresh induction; higher for a veteran joining mid-campaign (ASI milestones handled in the Advancement step).</span></div>';
  if (_bw.cls && _bw.level >= 3 && typeof DW_CLASSES !== 'undefined' && DW_CLASSES[_bw.cls] && DW_CLASSES[_bw.cls].subclasses) {
    var subs = Object.keys(DW_CLASSES[_bw.cls].subclasses);
    h += '<div class="bw-sec">Subclass (unlocked at level 3)</div><div class="bw-field"><select class="bw-sel" style="max-width:340px;" onchange="_bw.sub=this.value">' +
      '<option value="">— Choose later —</option>' +
      subs.map(function(s){ return '<option value="' + _bwE(s) + '"' + (_bw.sub === s ? ' selected' : '') + '>' + _bwE(s) + '</option>'; }).join('') +
      '</select></div>';
  }
  if (_bw.cls && typeof CLASS_GRANTS !== 'undefined' && CLASS_GRANTS[_bw.cls]) {
    var g = CLASS_GRANTS[_bw.cls];
    h += '<div class="bw-sec">Granted automatically on induction</div><div class="bw-card locked"><div class="bw-card-stat">' +
      '<strong style="color:var(--gold-light);">Armor:</strong> ' + _bwE((g.armor || []).join(', ')) + '<br>' +
      '<strong style="color:var(--gold-light);">Weapons:</strong> ' + _bwE((g.weapons || []).join(', ')) + '<br>' +
      '<strong style="color:var(--gold-light);">Tools:</strong> ' + _bwE((g.tools || []).join(', ')) +
      (g.skills ? '<br><strong style="color:var(--gold-light);">Signature skill:</strong> ' + _bwE(g.skills.map(function(s){ return _BW_SKILL_LABEL[s] || s; }).join(', ')) : '') +
      '</div></div>';
  }
  return h;
}
function _bwPickClass(name) {
  if (_bw.cls !== name) {
    _bw.cls = name; _bw.sub = '';
    _bw.skills = []; _bw.kitPicks = {}; _bw.grenades = []; _bw.spells = [];
  }
  _bwRender();
}
function _bwSetLevel(v) {
  var lvl = Math.max(1, Math.min(20, parseInt(v, 10) || 1));
  if (lvl === _bw.level) return;
  _bw.level = lvl;
  _bwSyncAsi();
  // prune powers whose tier is no longer reachable at the new level
  var avail = {};
  _bwSpellsAvail().forEach(function(sp){ avail[sp.id] = true; });
  _bw.spells = _bw.spells.filter(function(id){ return avail[id]; });
}

/* ── Step: Ability Scores ── */
function _bwRollSet() {
  var set = [];
  for (var i = 0; i < 6; i++) {
    var dice = [];
    for (var d = 0; d < 4; d++) dice.push(1 + Math.floor(Math.random() * 6));
    var low = 0;
    for (var j = 1; j < 4; j++) if (dice[j] < dice[low]) low = j;
    var total = dice.reduce(function(a, b){ return a + b; }, 0) - dice[low];
    set.push({ dice: dice, droppedIdx: low, total: total });
  }
  return set;
}
function _bwRollNewSet() {
  if (_bw.abilities.sets.length >= 4) return;
  _bw.abilities.sets.push(_bwRollSet());
  if (_bw.abilities.activeSet === -1) _bw.abilities.activeSet = 0;
  _bwRender();
}
function _bwSelSet(i) {
  if (_bw.abilities.activeSet !== i) {
    _bw.abilities.activeSet = i;
    _bw.abilities.assign = { str:null, dex:null, con:null, int:null, wis:null, cha:null };
  }
  _bwRender();
}
function _bwAssign(ab, v) {
  _bw.abilities.assign[ab] = v === '' ? null : parseInt(v, 10);
  _bwRender();
}
function _bwSetManual(ab, v) {
  _bw.abilities.manual[ab] = v;
  _bwFinalGridRefresh();
}
function _bwSetMethod(m) {
  _bw.abilities.method = m;
  _bwRender();
}
function _bwSetBump(b) { _bw.abilities.bump = b; _bwRender(); }
function _bwFinalGridHtml() {
  var fin = _bwFinalScores();
  return _BW_STATS.map(function(ab) {
    var base = _bwBaseScore(ab);
    var racial = (ab === 'str' || ab === 'con') ? 1 : (ab === _bw.abilities.bump ? 1 : 0);
    var asi = 0;
    _bw.asi.forEach(function(m){ if (m.mode === 'asi') asi += (m.plus[ab] || 0); });
    var src = base === null ? '—' : base + (racial ? ' +' + racial + ' Astartes' : '') + (asi ? ' +' + asi + ' ASI' : '');
    return '<div class="bw-ab-cell"><div class="bw-ab-lbl">' + ab.toUpperCase() + '</div>' +
      '<div class="bw-ab-final">' + (fin[ab] === null ? '—' : fin[ab]) + '</div>' +
      '<div class="bw-ab-mod">' + (fin[ab] === null ? '' : _bwFmt(_bwMod(fin[ab])) + ' mod') + '</div>' +
      '<div class="bw-ab-src">' + _bwE(src) + '</div></div>';
  }).join('');
}
function _bwFinalGridRefresh() {
  var el = document.getElementById('bw-final-grid');
  if (el) el.innerHTML = _bwFinalGridHtml();
}
function _bwStepAbilities() {
  var a = _bw.abilities;
  var h = '<div class="bw-h">Trials of the Flesh</div>' +
    '<div class="bw-sub">Determine your six ability scores — roll 4d6 and drop the lowest die, or enter scores agreed with your GM. The Astartes gene-forging (+1 STR, +1 CON, +1 WIS or INT) is applied on top.</div>' +
    '<div class="bw-seg"><button type="button" class="' + (a.method === 'roll' ? 'on' : '') + '" onclick="_bwSetMethod(\'roll\')">⚄ Roll 4d6</button><button type="button" class="' + (a.method === 'manual' ? 'on' : '') + '" onclick="_bwSetMethod(\'manual\')">Manual Entry</button></div>';
  if (a.method === 'roll') {
    h += '<div style="margin-bottom:8px;"><button type="button" class="bw-btn" onclick="_bwRollNewSet()"' + (a.sets.length >= 4 ? ' disabled' : '') + '>⚄ Roll ' + (a.sets.length ? 'Another Set' : '6 Scores') + '</button>' +
      (a.sets.length ? ' <span style="font-size:8.5pt;color:var(--text-dim);">All rolled sets stay visible — select the one to use. (' + a.sets.length + '/4 sets)</span>' : '') + '</div>';
    h += a.sets.map(function(set, i) {
      var sum = set.reduce(function(s, r){ return s + r.total; }, 0);
      var chips = set.map(function(r) {
        var dice = r.dice.map(function(d, di){ return di === r.droppedIdx ? '<s>' + d + '</s>' : String(d); }).join(' ');
        return '<span class="bw-roll-chip"><span class="bw-roll-tot">' + r.total + '</span><br><span class="bw-roll-dice">' + dice + '</span></span>';
      }).join('');
      return '<div class="bw-set-card' + (a.activeSet === i ? ' sel' : '') + '" onclick="_bwSelSet(' + i + ')">' +
        '<div class="bw-set-hdr"><span>' + (a.activeSet === i ? '◉' : '○') + ' Set ' + (i + 1) + '</span><span class="bw-set-sum">Total ' + sum + '</span></div>' + chips + '</div>';
    }).join('');
    if (a.activeSet >= 0 && a.sets[a.activeSet]) {
      var set = a.sets[a.activeSet];
      var used = {};
      _BW_STATS.forEach(function(ab){ if (a.assign[ab] !== null) used[a.assign[ab]] = ab; });
      h += '<div class="bw-sec">Assign Set ' + (a.activeSet + 1) + '</div><div class="bw-ab-grid">' +
        _BW_STATS.map(function(ab) {
          var opts = '<option value="">—</option>' + set.map(function(r, ri) {
            var takenBy = used[ri];
            var dis = takenBy && takenBy !== ab ? ' disabled' : '';
            return '<option value="' + ri + '"' + (a.assign[ab] === ri ? ' selected' : '') + dis + '>' + r.total + (takenBy && takenBy !== ab ? ' · ' + takenBy.toUpperCase() : '') + '</option>';
          }).join('');
          return '<div class="bw-ab-cell"><div class="bw-ab-lbl">' + ab.toUpperCase() + '</div><div style="font-size:7.5pt;color:var(--text-dim);">' + _BW_STAT_LABEL[ab] + '</div><select class="bw-sel" onchange="_bwAssign(\'' + ab + '\', this.value)">' + opts + '</select></div>';
        }).join('') + '</div>';
    }
  } else {
    h += '<div class="bw-ab-grid">' + _BW_STATS.map(function(ab) {
      return '<div class="bw-ab-cell"><div class="bw-ab-lbl">' + ab.toUpperCase() + '</div><div style="font-size:7.5pt;color:var(--text-dim);">' + _BW_STAT_LABEL[ab] + '</div>' +
        '<input class="bw-inp small" style="margin-top:4px;" type="number" min="3" max="20" value="' + _bwE(a.manual[ab]) + '" oninput="_bwSetManual(\'' + ab + '\', this.value)"></div>';
    }).join('') + '</div>';
  }
  h += '<div class="bw-sec">Astartes Gene-Forging</div>' +
    '<div style="font-size:9.5pt;color:var(--text);margin-bottom:6px;"><span class="bw-tag">+1 STR</span><span class="bw-tag">+1 CON</span> and your choice of: ' +
    '<label style="cursor:pointer;margin-left:8px;"><input type="radio" name="bw-bump" ' + (a.bump === 'wis' ? 'checked' : '') + ' onchange="_bwSetBump(\'wis\')"> +1 WIS</label>' +
    '<label style="cursor:pointer;margin-left:12px;"><input type="radio" name="bw-bump" ' + (a.bump === 'int' ? 'checked' : '') + ' onchange="_bwSetBump(\'int\')"> +1 INT</label></div>' +
    '<div class="bw-sec">Final Scores</div><div class="bw-ab-grid" id="bw-final-grid">' + _bwFinalGridHtml() + '</div>';
  return h;
}

/* ── Step: Skills ── */
function _bwStepSkills() {
  var c = _bwCls();
  if (!c) return '<div class="bw-sub">Choose a class first.</div>';
  var granted = _bwGrantedSkills();
  var chooseFrom = c.skills.from.filter(function(id){ return !granted[id]; });
  var count = c.skills.count;
  var over = _bw.skills.length > count;
  var h = '<div class="bw-h">Skill Training</div>' +
    '<div class="bw-sub">' + _bwE(_bw.cls) + ' training grants ' + count + ' skill proficiencies of your choice. Skills already granted by your Chapter or class are shown locked below — they don\'t cost a pick.</div>' +
    '<div class="bw-count' + (over ? ' over' : '') + '">' + _bw.skills.length + ' of ' + count + ' chosen</div>' +
    '<div class="bw-grid">';
  h += chooseFrom.map(function(id) {
    var on = _bw.skills.indexOf(id) !== -1;
    return '<div class="bw-card' + (on ? ' sel' : '') + '" onclick="_bwTogSkill(\'' + id + '\')">' +
      '<div class="bw-card-name">' + (on ? '☑' : '☐') + ' ' + _bwE(_BW_SKILL_LABEL[id] || id) + '</div></div>';
  }).join('');
  h += '</div>';
  var grantedIds = Object.keys(granted);
  if (grantedIds.length) {
    h += '<div class="bw-sec">Granted automatically</div><div class="bw-grid">' +
      grantedIds.map(function(id) {
        return '<div class="bw-card locked"><div class="bw-card-name">✓ ' + _bwE(_BW_SKILL_LABEL[id] || id) + '</div><div class="bw-card-stat">granted by ' + _bwE(granted[id]) + '</div></div>';
      }).join('') + '</div>';
  }
  return h;
}
function _bwTogSkill(id) {
  var i = _bw.skills.indexOf(id);
  var c = _bwCls();
  if (i !== -1) _bw.skills.splice(i, 1);
  else if (!c || _bw.skills.length < c.skills.count) _bw.skills.push(id);
  _bwRender();
}

/* ── Step: Tool Kit ── */
function _bwStepTools() {
  var clsTools = (typeof CLASS_GRANTS !== 'undefined' && CLASS_GRANTS[_bw.cls] && CLASS_GRANTS[_bw.cls].tools) || [];
  var chTools = (CHAPTER_GRANTS[_bw.chapter] && CHAPTER_GRANTS[_bw.chapter].tools) || [];
  function classHas(name) {
    return clsTools.some(function(n){ return _toolKey(n) === _toolKey(name); });
  }
  function chapterHas(name) {
    return chTools.some(function(n){ return _toolKey(n) === _toolKey(name); });
  }
  var kits = ((typeof REQ_ITEMS !== 'undefined') ? REQ_ITEMS : []).filter(function(it) {
    if (it.cat !== 'Tools') return false;
    if (/training/i.test(it.cost || '')) return false;   // trained proficiencies, not kits
    return !classHas(it.name);                            // class already grants these
  });
  var h = '<div class="bw-h">Tool Proficiency</div>' +
    '<div class="bw-sub">Every operative chooses one tool kit at creation (in addition to the Auspex Operator\'s Kit and any class or Chapter kits, granted automatically). The physical kit is added to your wargear and the proficiency to your training.</div>' +
    '<div class="bw-grid">';
  h += kits.map(function(it) {
    var on = _bw.toolKit === it.id;
    var dup = chapterHas(it.name);
    return '<div class="bw-card' + (on ? ' sel' : '') + '" onclick="_bwPickTool(\'' + it.id + '\')">' +
      '<div class="bw-card-name">' + (on ? '☑' : '☐') + ' ' + _bwE(it.name) + '</div>' +
      '<div class="bw-card-stat">' + _bwE(it.use || '') + '</div>' +
      (dup ? '<div class="bw-card-stat" style="color:var(--gold);">Chapter already grants this — picking it upgrades to Expertise.</div>' : '') +
      '</div>';
  }).join('');
  h += '</div><div class="bw-note">Prefer to decide in the field? <button type="button" class="bw-btn" onclick="_bwPickTool(\'\')">Skip — choose later via the Requisitorium</button>' + (_bw.toolKit === '' ? ' <span style="color:var(--gold);">(skipping)</span>' : '') + '</div>';
  return h;
}
function _bwPickTool(id) { _bw.toolKit = (_bw.toolKit === id) ? '' : id; _bwRender(); }

/* ── Step: Starting Kit ── */
function _bwStepKit() {
  var c = _bwCls();
  if (!c) return '<div class="bw-sub">Choose a class first.</div>';
  var h = '<div class="bw-h">Munitorum Loadout</div>' +
    '<div class="bw-sub">The standard-issue kit for a ' + _bwE(_bw.cls) + '. Fixed issue is locked; make your choices where the Munitorum allows them. Weapons arrive with their ammunition crates filled to your armor\'s carrying capacity.</div>' +
    _bwMeterHtml();
  c.kit.forEach(function(entry, i) {
    if (entry.item) {
      var it = _bwItem(entry.item);
      if (!it) return;
      var qty = entry.qty && entry.qty > 1 ? ' ×' + entry.qty : '';
      h += '<div class="bw-card locked" style="margin-bottom:6px;"><div class="bw-card-name">✦ ' + _bwE(it.name) + qty + '<span class="bw-card-cost">Standard Issue</span></div>' +
        '<div class="bw-card-stat">' + _bwE(it.dmg && it.dmg !== 'N/A' ? it.dmg : (it.effects || it.use || '')) + '</div></div>';
    } else if (entry.pick) {
      var items = _bwPickItems(entry.pick);
      var sel = _bw.kitPicks[i];
      h += '<div class="bw-sec">' + _bwE(entry.pick.label) + (entry.crates ? ' <span style="letter-spacing:.06em;">· with ' + entry.crates + ' full crate' + (entry.crates > 1 ? 's' : '') + ' of ammo</span>' : '') + '</div><div class="bw-grid">';
      h += items.map(function(it) {
        var on = sel === it.id;
        return '<div class="bw-card' + (on ? ' sel' : '') + '" onclick="_bwKitPick(' + i + ', \'' + it.id + '\')">' +
          '<div class="bw-card-name">' + (on ? '☑' : '☐') + ' ' + _bwE(it.name) + '</div>' +
          '<div class="bw-card-stat">' + _bwE(it.dmg || '') + (it.range && it.range !== 'N/A' ? ' · ' + _bwE(it.range) : '') + '</div>' +
          ((it.mods || []).length ? '<div class="bw-card-stat">' + it.mods.map(function(m){ return '<span class="bw-tag dim">' + _bwE(m) + '</span>'; }).join('') + '</div>' : '') +
          '</div>';
      }).join('');
      h += '</div>';
    } else if (entry.grenadeCase) {
      var gItems = _bwGrenadeItems(entry.grenadeCase);
      h += '<div class="bw-sec">Case of Grenades — pick ' + entry.grenadeCase.count + ' types</div>' +
        '<div class="bw-count' + (_bw.grenades.length > entry.grenadeCase.count ? ' over' : '') + '">' + _bw.grenades.length + ' of ' + entry.grenadeCase.count + ' chosen</div><div class="bw-grid">';
      h += gItems.map(function(it) {
        var on = _bw.grenades.indexOf(it.id) !== -1;
        return '<div class="bw-card' + (on ? ' sel' : '') + '" onclick="_bwTogGrenade(\'' + it.id + '\', ' + entry.grenadeCase.count + ')">' +
          '<div class="bw-card-name">' + (on ? '☑' : '☐') + ' ' + _bwE(it.name) + '</div>' +
          '<div class="bw-card-stat">' + _bwE(it.dmg || '') + (it.save ? ' · DC ' + it.save.dc + ' ' + it.save.ability : '') + '</div></div>';
      }).join('');
      h += '</div>';
    }
  });
  return h;
}
function _bwKitPick(kitIdx, id) {
  _bw.kitPicks[kitIdx] = (_bw.kitPicks[kitIdx] === id) ? undefined : id;
  _bwRender();
}
function _bwTogGrenade(id, max) {
  var i = _bw.grenades.indexOf(id);
  if (i !== -1) _bw.grenades.splice(i, 1);
  else if (_bw.grenades.length < max) _bw.grenades.push(id);
  _bwRender();
}

/* ── Step: RP Shop ── */
function _bwShopSpent() {
  var sum = 0;
  Object.keys(_bw.shop).forEach(function(id) {
    var cost = _bwCost(_bwItem(id));
    if (cost !== null) sum += cost * _bw.shop[id];
  });
  return sum;
}
function _bwStepShop() {
  var c = _bwCls();
  var budget = c ? c.startingRP : 150;
  var spent = _bwShopSpent();
  var h = '<div class="bw-h">Requisitorium — Induction Stipend</div>' +
    '<div class="bw-sub">The Munitorum Loadout Mandate grants every new operative a one-time stipend of ' + budget + ' Requisition Points. Spend some now, or bank it all — the remainder is written to your sheet.</div>' +
    '<div class="bw-meter" style="font-size:9pt;">Budget <b>' + (budget - spent) + '</b> / ' + budget + ' RP remaining</div> ' + _bwMeterHtml() +
    '<div class="bw-field"><input class="bw-inp" type="text" placeholder="Search items…" value="' + _bwE(_bw.shopQ) + '" oninput="_bw.shopQ=this.value;_bwShopGridRefresh();"></div>' +
    '<div id="bw-shop-grid">' + _bwShopGridHtml() + '</div>';
  return h;
}
function _bwShopGridHtml() {
  var c = _bwCls();
  var budget = c ? c.startingRP : 150;
  var spent = _bwShopSpent();
  var q = (_bw.shopQ || '').toLowerCase();
  var items = ((typeof REQ_ITEMS !== 'undefined') ? REQ_ITEMS : []).filter(function(it) {
    if (_bwCost(it) === null) return false;
    if (q && it.name.toLowerCase().indexOf(q) === -1 && it.cat.toLowerCase().indexOf(q) === -1 && (it.wtype || '').toLowerCase().indexOf(q) === -1) return false;
    return true;
  });
  var byCat = {};
  items.forEach(function(it) { (byCat[it.cat] = byCat[it.cat] || []).push(it); });
  var order = ['Primary Ranged','Secondary Ranged','Melee','Unique Melee','Terminator','Equipment','Tools','Armor','Ammo'];
  var h = '';
  order.forEach(function(cat) {
    if (!byCat[cat]) return;
    h += '<div class="bw-sec">' + _bwE(cat) + '</div><div class="bw-grid">';
    h += byCat[cat].map(function(it) {
      var cost = _bwCost(it);
      var count = _bw.shop[it.id] || 0;
      var canAdd = cost <= (budget - spent) && (cat !== 'Ammo' || count === 0);
      return '<div class="bw-card' + (count ? ' sel' : '') + '" style="cursor:default;">' +
        '<div class="bw-card-name">' + _bwE(it.name) + '<span class="bw-card-cost">' + _bwE(it.cost) + '</span></div>' +
        '<div class="bw-card-stat">' + _bwE(it.dmg && it.dmg !== 'N/A' ? it.dmg : (it.use || it.effects || '')) + '</div>' +
        '<div style="display:flex;align-items:center;gap:6px;margin-top:5px;">' +
          (count ? '<button type="button" class="bw-btn" onclick="_bwShopSub(\'' + it.id + '\')">−</button><span class="bw-asi-val">×' + count + '</span>' : '') +
          '<button type="button" class="bw-btn" onclick="_bwShopAdd(\'' + it.id + '\')"' + (canAdd ? '' : ' disabled') + '>+ ' + (count ? '' : 'Add') + '</button>' +
        '</div></div>';
    }).join('');
    h += '</div>';
  });
  return h || '<div class="bw-note">No items match your search.</div>';
}
function _bwShopGridRefresh() {
  var el = document.getElementById('bw-shop-grid');
  if (el) el.innerHTML = _bwShopGridHtml();
}
function _bwShopAdd(id) {
  var it = _bwItem(id);
  var cost = _bwCost(it);
  var c = _bwCls();
  var budget = c ? c.startingRP : 150;
  if (cost === null || cost > budget - _bwShopSpent()) return;
  _bw.shop[id] = (_bw.shop[id] || 0) + 1;
  _bwRender();
}
function _bwShopSub(id) {
  if (!_bw.shop[id]) return;
  _bw.shop[id]--;
  if (!_bw.shop[id]) delete _bw.shop[id];
  _bwRender();
}

/* ── Step: Advancement (level > 1) ── */
function _bwStepAdvance() {
  _bwSyncAsi();
  var h = '<div class="bw-h">Record of Advancement</div>' +
    '<div class="bw-sub">A level ' + _bw.level + ' veteran has passed ' + _bw.asi.length + ' advancement milestone' + (_bw.asi.length === 1 ? '' : 's') + ' (levels ' + BUILDER_ASI_LEVELS.filter(function(l){ return l <= _bw.level; }).join(', ') + '). At each, take +2 ability points — or record a feat taken instead (feats are applied manually from the <a href="Feats.html" target="_blank" style="color:var(--gold);">Feats codex</a>).</div>';
  _bw.asi.forEach(function(ms, mi) {
    h += '<div class="bw-asi-card"><div class="bw-asi-hdr">Level ' + ms.level + ' Milestone' +
      '<span class="bw-seg" style="margin:0;"><button type="button" class="' + (ms.mode === 'asi' ? 'on' : '') + '" onclick="_bwAsiMode(' + mi + ', \'asi\')">Ability +2</button><button type="button" class="' + (ms.mode === 'feat' ? 'on' : '') + '" onclick="_bwAsiMode(' + mi + ', \'feat\')">Feat</button></span></div>';
    if (ms.mode === 'asi') {
      var pts = 0;
      _BW_STATS.forEach(function(ab){ pts += (ms.plus[ab] || 0); });
      h += '<div class="bw-count' + (pts > 2 ? ' over' : '') + '">' + pts + ' of 2 points allocated</div>';
      var fin = _bwFinalScores();
      h += _BW_STATS.map(function(ab) {
        var v = ms.plus[ab] || 0;
        var capped = fin[ab] !== null && fin[ab] >= BUILDER_SCORE_CAP;
        return '<div class="bw-asi-row"><span class="bw-ab-lbl" style="width:38px;">' + ab.toUpperCase() + '</span>' +
          '<button type="button" class="bw-btn" onclick="_bwAsiPlus(' + mi + ', \'' + ab + '\', -1)"' + (v ? '' : ' disabled') + '>−</button>' +
          '<span class="bw-asi-val">' + (v ? '+' + v : '·') + '</span>' +
          '<button type="button" class="bw-btn" onclick="_bwAsiPlus(' + mi + ', \'' + ab + '\', 1)"' + (pts >= 2 || v >= 2 || capped ? ' disabled' : '') + '>+</button>' +
          (fin[ab] !== null ? '<span style="font-size:8pt;color:var(--text-dim);">→ ' + fin[ab] + '</span>' : '') +
          '</div>';
      }).join('');
    } else {
      h += '<div class="bw-field"><label>Feat taken</label><input class="bw-inp" type="text" value="' + _bwE(ms.featNote) + '" oninput="_bw.asi[' + mi + '].featNote=this.value" placeholder="Feat name — applied manually after induction"></div>';
    }
    h += '</div>';
  });
  var hp = _bwHpMax();
  var c = _bwCls();
  if (hp !== null && c) {
    var fin = _bwFinalScores();
    var con = _bwMod(fin.con);
    h += '<div class="bw-sec">Hit Points</div><div class="bw-card locked"><div class="bw-card-stat">' +
      'Level 1: <strong style="color:var(--gold-light);">' + c.hitDie + ' + ' + con + ' CON</strong> · Levels 2–' + _bw.level + ': <strong style="color:var(--gold-light);">' + (c.hitDie / 2 + 1) + ' + ' + con + ' CON each</strong>' +
      '<br>Maximum Hit Points: <strong style="color:var(--gold-light);font-size:11pt;">' + hp + '</strong></div></div>';
  }
  return h;
}
function _bwAsiMode(mi, mode) { _bw.asi[mi].mode = mode; _bwRender(); }
function _bwAsiPlus(mi, ab, d) {
  var ms = _bw.asi[mi];
  var v = (ms.plus[ab] || 0) + d;
  if (v < 0 || v > 2) return;
  var pts = 0;
  _BW_STATS.forEach(function(a2){ pts += (a2 === ab ? v : (ms.plus[a2] || 0)); });
  if (pts > 2) return;
  ms.plus[ab] = v;
  if (!v) delete ms.plus[ab];
  _bwRender();
}

/* ── Step: Powers (Librarian / Chaplain) ── */
function _bwStepSpells() {
  var caster = _bwCaster();
  if (!caster) return '';
  var cap = _bwSpellCap();
  var avail = _bwSpellsAvail();
  var label = caster.list === 'librarian' ? 'Warp Powers' : 'Holy Powers';
  var statLabel = caster.stat.toUpperCase();
  var over = _bw.spells.length > cap;
  var h = '<div class="bw-h">' + label + '</div>' +
    '<div class="bw-sub">Prepare up to <strong style="color:var(--gold-light);">' + cap + '</strong> powers (Level ' + _bw.level + ' + ' + statLabel + ' + PB). Higher tiers unlock as you level. You can change your prepared list any time from the sheet\'s Spell Browser — skipping this step is fine.</div>' +
    '<div class="bw-count' + (over ? ' over' : '') + '">' + _bw.spells.length + ' of ' + cap + ' prepared</div>';
  var byTier = {};
  avail.forEach(function(sp){ (byTier[sp.tier] = byTier[sp.tier] || []).push(sp); });
  ['base','rank1','dev1','rank2','dev2','rank3','dev3','rank4'].forEach(function(t) {
    if (!byTier[t]) return;
    h += '<div class="bw-sec">' + _bwE(_BW_TIER_LABEL[t] || t) + '</div><div class="bw-grid">';
    h += byTier[t].map(function(sp) {
      var on = _bw.spells.indexOf(sp.id) !== -1;
      var costLabel = sp.costType === 'free' ? 'FREE' : sp.cost + ' ' + sp.costType;
      return '<div class="bw-card' + (on ? ' sel' : '') + '" onclick="_bwTogSpell(\'' + sp.id + '\')">' +
        '<div class="bw-card-name">' + (on ? '☑' : '☐') + ' ' + _bwE(sp.name) + '<span class="bw-card-cost">' + _bwE(costLabel) + '</span></div>' +
        '<div class="bw-card-stat">' + _bwE(sp.action + ' · ' + sp.range + ' · ' + sp.duration) + (sp.hasPerils ? ' · <span style="color:var(--warn-text);">⚠ Perils</span>' : '') + '</div></div>';
    }).join('');
    h += '</div>';
  });
  return h;
}
function _bwTogSpell(id) {
  var i = _bw.spells.indexOf(id);
  if (i !== -1) _bw.spells.splice(i, 1);
  else if (_bw.spells.length < _bwSpellCap()) _bw.spells.push(id);
  _bwRender();
}

/* ── Step: Review ── */
function _bwStepReview() {
  var c = _bwCls();
  var fin = _bwFinalScores();
  var granted = _bwGrantedSkills();
  var hp = _bwHpMax();
  var budget = c ? c.startingRP : 150;
  var spent = _bwShopSpent();
  function row(k, v) { return '<div class="bw-summary-row"><div class="bw-summary-k">' + k + '</div><div class="bw-summary-v">' + v + '</div></div>'; }
  var scoreStr = _BW_STATS.map(function(ab){ return ab.toUpperCase() + ' ' + (fin[ab] === null ? '—' : fin[ab] + ' (' + _bwFmt(fin[ab] === null ? 0 : _bwMod(fin[ab])) + ')'); }).join(' · ');
  var skillStr = _bw.skills.map(function(id){ return _bwE(_BW_SKILL_LABEL[id] || id); }).join(', ') || '—';
  var grantStr = Object.keys(granted).map(function(id){ return _bwE(_BW_SKILL_LABEL[id] || id); }).join(', ') || '—';
  var kitBits = [];
  if (c) c.kit.forEach(function(entry, i) {
    if (entry.item) { var it = _bwItem(entry.item); if (it) kitBits.push(_bwE(it.name) + (entry.qty > 1 ? ' ×' + entry.qty : '')); }
    else if (entry.pick) { var p = _bwItem(_bw.kitPicks[i]); kitBits.push(p ? _bwE(p.name) : '<span style="color:var(--warn-text);">unchosen ' + _bwE(entry.pick.label) + '</span>'); }
    else if (entry.grenadeCase) { _bw.grenades.forEach(function(g){ var gi = _bwItem(g); if (gi) kitBits.push(_bwE(gi.name)); }); }
  });
  var toolIt = _bw.toolKit ? _bwItem(_bw.toolKit) : null;
  if (toolIt) kitBits.push(_bwE(toolIt.name));
  var shopBits = Object.keys(_bw.shop).map(function(id) {
    var it = _bwItem(id);
    return it ? _bwE(it.name) + (_bw.shop[id] > 1 ? ' ×' + _bw.shop[id] : '') : '';
  }).filter(Boolean);
  var themeKey = BUILDER_CHAPTER_THEME[_bw.chapter];
  var themeOk = themeKey && typeof THEMES !== 'undefined' && THEMES[themeKey];
  var h = '<div class="bw-h">Final Rites</div>' +
    '<div class="bw-sub">Review the dossier. Completing the induction applies everything below to the sheet in one pass and saves.</div>';
  h += row('Operative', _bwE(_bw.identity.name) + (_bw.identity.player ? ' <span style="color:var(--text-dim);">(' + _bwE(_bw.identity.player) + ')</span>' : ''));
  h += row('Chapter', _bwE(_bw.chapter));
  h += row('Class', _bwE(_bw.cls) + ' · Level ' + _bw.level + (_bw.sub ? ' · ' + _bwE(_bw.sub) : ''));
  h += row('Ability Scores', scoreStr);
  h += row('Hit Points', hp === null ? '—' : hp + ' max');
  h += row('Chosen Skills', skillStr);
  h += row('Granted Skills', grantStr);
  h += row('Starting Kit', kitBits.join(', ') || '—');
  if (shopBits.length) h += row('Purchases', shopBits.join(', ') + ' <span style="color:var(--text-dim);">(' + spent + ' RP)</span>');
  h += row('Requisition Points', (budget - spent) + ' RP');
  if (_bwCaster() && _bw.spells.length) {
    h += row('Prepared Powers', _bw.spells.map(function(id) {
      var sp = (typeof SPELLS !== 'undefined') ? SPELLS.find(function(s){ return s.id === id; }) : null;
      return sp ? _bwE(sp.name) : '';
    }).filter(Boolean).join(', '));
  }
  var featNotes = _bw.asi.filter(function(m){ return m.mode === 'feat'; });
  if (featNotes.length) {
    h += row('Feats (manual)', featNotes.map(function(m){ return 'L' + m.level + ': ' + _bwE(m.featNote || 'unnamed feat'); }).join(' · '));
  }
  // Warnings
  if (_bw.cls === 'Terminator' && fin.str !== null && fin.str < 15) {
    h += '<div class="bw-warn">Terminator Armor requires STR 15+ — this operative has STR ' + fin.str + '. The armor is still issued; resolve with your GM.</div>';
  }
  var capErr = _bwCapacityErr();
  if (capErr) h += '<div class="bw-warn">' + _bwE(capErr) + '</div>';
  if (themeOk) {
    h += '<label class="bw-step-chk"><input type="checkbox" ' + (_bw.applyTheme ? 'checked' : '') + ' onchange="_bw.applyTheme=this.checked"> Paint the sheet in <strong style="color:var(--gold-light);">&nbsp;' + _bwE(THEMES[themeKey].label) + '</strong></label>';
  }
  if (!_bwSheetBlank()) {
    h += '<div class="bw-note">' + (_bw.clearWargearFirst ? 'The wargear and ammunition lists will be emptied before the new kit is issued.' : 'Existing wargear rows are kept — the new kit fills empty rows only.') + '</div>';
  }
  return h;
}

/* ══ Commit — applies everything to the sheet through its own setters ══ */
function _bwSetInput(id, val) {
  var el = document.getElementById(id);
  if (!el) return;
  el.value = val;
  el.dispatchEvent(new Event('input'));
  el.dispatchEvent(new Event('change'));
}
function _bwClearWargear() {
  // Unequip everything through the sheet's own toggle (handles armor AC + speed mods)
  (_wargearMeta || []).forEach(function(m, i) { if (m && m.equipped) { try { _toggleEquip(i); } catch(e) {} } });
  // Withdraw tool proficiencies that came from requisitioned kits (rows are going away)
  if (typeof _autoGrants === 'object' && _autoGrants.toolItems) {
    Object.keys(_autoGrants.toolItems).forEach(function(k) {
      var rec = _autoGrants.toolItems[k];
      if (rec && typeof _toolRemove === 'function') _toolRemove(rec.name, rec.op);
      delete _autoGrants.toolItems[k];
    });
  }
  document.querySelectorAll('.wg-equip-row').forEach(function(r) {
    r.querySelectorAll('input').forEach(function(inp) {
      if (inp.value) { inp.value = ''; inp.dispatchEvent(new Event('input')); inp.dispatchEvent(new Event('change')); }
    });
  });
  document.querySelectorAll('.wg-ammo-row').forEach(function(r) {
    r.querySelectorAll('input').forEach(function(inp) {
      if (inp.value) { inp.value = ''; inp.dispatchEvent(new Event('input')); inp.dispatchEvent(new Event('change')); }
    });
  });
  _wargearMeta = [];
  _ammoClips = {};
  if (typeof _ammoTypeCache === 'object') _ammoTypeCache = {};
  if (typeof _rowTriggersReset === 'function') _rowTriggersReset();
  if (typeof renderAmmoTracker === 'function') renderAmmoTracker();
  if (typeof syncQuickActionsFromWargear === 'function') syncQuickActionsFromWargear();
}
function _bwAddItemRow(id, qty) {
  var it = _bwItem(id);
  if (!it) return;
  _sreqAdd(id);
  if (qty && qty > 1) {
    // find the row _sreqAdd just filled (last row bearing this item's name) and set its Qty
    var rows = document.querySelectorAll('.wg-equip-row');
    for (var i = rows.length - 1; i >= 0; i--) {
      var ins = rows[i].querySelectorAll('input');
      if (ins.length && ins[0].value === it.name) {
        if (ins[1]) { ins[1].value = String(qty); ins[1].dispatchEvent(new Event('input')); ins[1].dispatchEvent(new Event('change')); }
        break;
      }
    }
  }
  // Class-granted kits arriving as starting equipment are one grant, not a duplicate:
  // undo the spurious Expertise upgrade _toolAdd recorded (Apothecary Medicae Kit,
  // Techmarine Artificer's Tools). A deliberate duplicate pick in the Tool step keeps it.
  if (it.cat === 'Tools' && typeof _autoGrants === 'object' && _autoGrants.toolItems) {
    var rec = _autoGrants.toolItems[it.id];
    if (rec && rec.op === 'upgraded') {
      var clsTools = (typeof CLASS_GRANTS !== 'undefined' && CLASS_GRANTS[_bw.cls] && CLASS_GRANTS[_bw.cls].tools) || [];
      if (clsTools.some(function(n){ return _toolKey(n) === _toolKey(rec.name); })) {
        _listRemove('tools', rec.name, 'upgraded');
        delete _autoGrants.toolItems[it.id];
      }
    }
  }
}
function _builderCommit() {
  if (!_bw) return;
  var capErr = _bwCapacityErr();
  if (capErr) { _bwErr(capErr); return; }
  var st = _bw;
  var c = _bwCls();

  // 0. optional scoped reset
  if (st.clearWargearFirst) _bwClearWargear();

  // 1. identity
  _bwSetInput('char-name', st.identity.name.trim());
  _bwSetInput('char-player', st.identity.player.trim());

  // 2. chapter — dispatching change fires the inline handler (renderLineageTraits + _applyChapterGrants)
  var chSel = document.getElementById('char-chapter');
  if (chSel) { chSel.value = st.chapter; chSel.dispatchEvent(new Event('change')); }

  // 3. class — inline handler: updateSubclassOpts + _applyClassGrants + _schedSave
  var clsSel = document.getElementById('cls-select');
  if (clsSel) { clsSel.value = st.cls; clsSel.dispatchEvent(new Event('change')); }

  // 4. level (oninput → onLevelChange) + subclass
  var lvlEl = document.getElementById('char-level');
  if (lvlEl) { lvlEl.value = String(st.level); lvlEl.dispatchEvent(new Event('input')); }
  if (st.level >= 3 && st.sub) {
    var subSel = document.getElementById('sub-select');
    if (subSel) { subSel.value = st.sub; subSel.dispatchEvent(new Event('change')); }
  }

  // 5. final ability scores (base + racial + ASI) — oninput → calcMod → _recalcDerived
  var fin = _bwFinalScores();
  _BW_STATS.forEach(function(ab) {
    var el = document.getElementById(ab + '-score');
    if (el && fin[ab] !== null) { el.value = String(fin[ab]); el.dispatchEvent(new Event('input')); }
  });

  // 6. chosen skills — player-owned picks, checked directly (not via _skillGrant)
  st.skills.forEach(function(id) {
    var p = document.getElementById('skill-' + id + '-prof');
    if (p && !p.checked) { p.checked = true; p.dispatchEvent(new Event('change')); }
  });

  // 7. tool kit of choice
  if (st.toolKit) _bwAddItemRow(st.toolKit);

  // 8. starting kit — data lists armor first, so ammo caps use the right pattern
  if (c) {
    c.kit.forEach(function(entry, i) {
      if (entry.item)        _bwAddItemRow(entry.item, entry.qty);
      else if (entry.pick)   { if (st.kitPicks[i]) _bwAddItemRow(st.kitPicks[i]); }
      else if (entry.grenadeCase) st.grenades.forEach(function(g){ _bwAddItemRow(g); });
    });
  }

  // 9. shop purchases + RP remainder
  Object.keys(st.shop).forEach(function(id) { _bwAddItemRow(id, st.shop[id]); });
  var budget = c ? c.startingRP : 150;
  _bwSetInput('req-points', String(budget - _bwShopSpent()));

  // 10. prepared powers
  if (_bwCaster() && typeof _spellbook !== 'undefined') {
    st.spells.forEach(function(id) { if (_spellbook.indexOf(id) === -1) _spellbook.push(id); });
    if (typeof renderActivePowers === 'function') renderActivePowers();
    if (typeof _updatePowerTracker === 'function') _updatePowerTracker();
    if (typeof _powerReset === 'function') _powerReset();   // fresh induction: full power pool
    if (typeof _syncPreparedDisplay === 'function') _syncPreparedDisplay();
  }

  // 11. hit points + hit dice pool
  var hp = _bwHpMax();
  if (hp !== null) {
    _bwSetInput('hp-max', String(hp));
    _bwSetInput('hp-cur', String(hp));
    _bwSetInput('hd-total', String(st.level));
  }

  // 12. feat milestone notes → misc notes textarea (it has no id — selector matches its placeholder)
  var featLines = st.asi.filter(function(m){ return m.mode === 'feat'; }).map(function(m) {
    return 'L' + m.level + ': Feat — ' + (m.featNote.trim() || 'to be chosen') + ' (apply manually — see Feats page)';
  });
  if (featLines.length) {
    var notesTa = document.querySelector('textarea[placeholder^="Anything else"]');
    if (notesTa) {
      notesTa.value = (notesTa.value ? notesTa.value + '\n' : '') + featLines.join('\n');
      notesTa.dispatchEvent(new Event('input'));
      notesTa.dispatchEvent(new Event('change'));
    }
  }

  // 13. chapter theme
  var themeKey = BUILDER_CHAPTER_THEME[st.chapter];
  if (st.applyTheme && themeKey && typeof THEMES !== 'undefined' && THEMES[themeKey] && typeof applyTheme === 'function') {
    applyTheme({ id: themeKey, label: THEMES[themeKey].label });
  }

  // 14. finalize
  if (typeof _recalcDerived === 'function') _recalcDerived();
  if (typeof syncQuickActionsFromWargear === 'function') syncQuickActionsFromWargear();
  if (typeof renderAmmoTracker === 'function') renderAmmoTracker();
  if (typeof calcAC === 'function') calcAC();
  if (typeof _schedSave === 'function') _schedSave();

  _builderClose();
  _bwToast('✠ Induction complete — welcome to the Deathwatch, ' + (st.identity.name.trim() || 'Battle-Brother'));
}

/* ── Toast + blank-sheet hint ── */
function _bwToast(msg) {
  var t = document.getElementById('bw-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'bw-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(function(){ t.classList.add('show'); });
  setTimeout(function(){ t.classList.remove('show'); }, 5000);
}
function _builderHintDismiss() {
  try { localStorage.setItem('dw_builder_hint_dismissed', '1'); } catch(e) {}
  var el = document.getElementById('bw-hint');
  if (el) el.remove();
}
function _builderMaybeSuggest() {
  try {
    if (typeof _viewOnly !== 'undefined' && _viewOnly) return;
    if (localStorage.getItem('dw_builder_hint_dismissed')) return;
    if (!_bwSheetBlank()) return;
    if (document.getElementById('bw-hint')) return;
    var d = document.createElement('div');
    d.id = 'bw-hint';
    d.innerHTML = '<div class="bw-h">⚒ New Recruit?</div>' +
      '<p>This sheet is blank. The Induction Protocol walks you through building an operative — chapter, class, scores, skills, and full starting wargear.</p>' +
      '<button type="button" class="bw-btn" onclick="_builderHintDismiss();_builderOpen();">Begin Induction</button> ' +
      '<button type="button" class="bw-nav" style="padding:4px 10px;font-size:8pt;" onclick="_builderHintDismiss()">Dismiss</button>';
    document.body.appendChild(d);
  } catch(e) {}
}

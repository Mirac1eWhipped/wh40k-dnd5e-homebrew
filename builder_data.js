// Character Builder data — consumed by character_builder.js on the Deathwatch sheet.
// KEEP IN SYNC with the nine class pages (Tactical_Operative.html etc.) and with
// CLASS_GRANTS / CHAPTER_GRANTS in deathwatch_character_sheet.html — the class pages
// remain the display source of truth (same convention as CLASS_GRANTS).
//
// Kit entry forms:
//   {item:'req_item_id'}                                — fixed REQ_ITEMS id
//   {item:'stims', qty:2}                               — fixed id; builder sets the row Qty after add
//   {pick:{label, cat, wtype?, mod?, melee?, ids?}}     — one filtered chooser slot:
//       cat    → REQ_ITEMS.cat match
//       wtype  → exact wtype match
//       mod    → mods[] must contain this entry (e.g. 'Gravis')
//       melee  → true: range contains 'Melee' · false: it doesn't (Terminator split)
//       ids    → explicit whitelist, overrides all other filters
//   {pick:{...}, crates:N}                              — informational: _sreqAdd already fills the
//       linked ammo row to the armor-pattern cap ("full crate"); crates only labels the kit list
//   {grenadeCase:{count:2, excl:['dragonheart']}}       — "Case of Grenades": pick N grenade types
//       (Equipment items whose mods include 'Thrown', minus excl), each added as its own row

const BUILDER_ASI_LEVELS = [4, 8, 12, 16, 19];
const BUILDER_SCORE_CAP  = 20;   // standard 5e cap — no homebrew variance found on the class pages

const BUILDER_CLASSES = {
  'Tactical Operative': {
    hitDie: 8, saves: ['dex','wis'], autoSkills: [],
    skills: { count: 4, from: ['acrobatics','deception','history','perception','religion','survival','stealth','sleight-of-hand'] },
    toolChoice: true, startingRP: 150, caster: null,
    kit: [
      {item:'armor_tacticus'},
      {pick:{label:'Physical Melee Weapon', cat:'Melee', wtype:'Physical'}},
      {pick:{label:'Bolt Primary Weapon',   cat:'Primary Ranged',   wtype:'Bolt'}, crates:1},
      {pick:{label:'Bolt Secondary Weapon', cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {grenadeCase:{count:2, excl:['dragonheart']}},
      {item:'stims', qty:1}
    ]
  },
  'Close Combat Operative': {
    hitDie: 10, saves: ['str','con'], autoSkills: [],
    skills: { count: 4, from: ['athletics','acrobatics','history','intimidation','perception','religion','stealth'] },
    toolChoice: true, startingRP: 150, caster: null,
    kit: [
      {item:'armor_tacticus'},
      {pick:{label:'Physical Melee Weapon', cat:'Melee', wtype:'Physical'}},
      {pick:{label:'Bolt Secondary Weapon', cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {grenadeCase:{count:2, excl:['dragonheart']}},
      {item:'stims', qty:1}
    ]
  },
  'Gravis Operative': {
    hitDie: 10, saves: ['str','con'], autoSkills: [],
    skills: { count: 3, from: ['athletics','intimidation','perception','history','survival','religion'] },
    toolChoice: true, startingRP: 150, caster: null,
    kit: [
      {item:'armor_gravis'},
      {pick:{label:'Gravis-tagged Primary Weapon', cat:'Primary Ranged', mod:'Gravis'}, crates:2},
      {pick:{label:'Power Melee Weapon',    cat:'Melee', wtype:'Power'}},
      {pick:{label:'Bolt Secondary Weapon', cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {item:'stims', qty:2}
    ]
  },
  'Terminator': {
    hitDie: 12, saves: ['str','con'], autoSkills: [],
    skills: { count: 3, from: ['athletics','history','insight','intimidation','perception','religion','survival'] },
    toolChoice: true, startingRP: 150, caster: null,
    kit: [
      {item:'armor_term'},
      {pick:{label:'Terminator Ranged Weapon', cat:'Terminator', melee:false}, crates:2},
      {pick:{label:'Terminator Melee Weapon',  cat:'Terminator', melee:true}},
      {pick:{label:'Bolt Secondary Weapon',    cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {item:'stims', qty:2}
    ]
  },
  'Vanguard Operative': {
    hitDie: 6, saves: ['dex','wis'], autoSkills: [],
    skills: { count: 4, from: ['acrobatics','athletics','deception','investigation','perception','sleight-of-hand','stealth','survival'] },
    toolChoice: true, startingRP: 150, caster: null,
    kit: [
      {item:'armor_phobos'},
      {pick:{label:'Physical Melee Weapon', cat:'Melee', wtype:'Physical'}},
      {pick:{label:'Bolt Primary Weapon',   cat:'Primary Ranged',   wtype:'Bolt'}, crates:1},
      {pick:{label:'Bolt Secondary Weapon', cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {grenadeCase:{count:2, excl:['dragonheart']}},
      {item:'stims', qty:1}
    ]
  },
  'Apothecary': {
    hitDie: 8, saves: ['wis','con'], autoSkills: ['medicine'],
    skills: { count: 2, from: ['history','insight','perception','religion','survival'] },
    toolChoice: true, startingRP: 150, caster: null,
    kit: [
      {item:'armor_tacticus'},
      {item:'narthecium'},
      {pick:{label:'Bolt Secondary Weapon', cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {item:'stims', qty:4},
      {item:'tool_medicae'}
    ]
  },
  'Chaplain': {
    hitDie: 8, saves: ['wis','cha'], autoSkills: ['religion'],
    skills: { count: 2, from: ['history','insight','intimidation','perception','persuasion'] },
    toolChoice: true, startingRP: 150, caster: {list:'chaplain', stat:'cha'},
    kit: [
      {item:'armor_tacticus'},
      {item:'crozius'},
      {pick:{label:'Bolt Secondary Weapon', cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {item:'stims', qty:3}
    ]
  },
  'Librarian': {
    hitDie: 6, saves: ['int','wis'], autoSkills: ['arcana'],
    skills: { count: 2, from: ['history','insight','investigation','perception','religion'] },
    toolChoice: true, startingRP: 150, caster: {list:'librarian', stat:'int'},
    kit: [
      {item:'armor_tacticus'},
      {pick:{label:'Force Sword or Force Staff', ids:['fsword','fstaff']}},
      {pick:{label:'Bolt Secondary Weapon', cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {item:'stims', qty:3}
    ]
  },
  'Techmarine': {
    hitDie: 8, saves: ['int','con'], autoSkills: ['technology'],
    skills: { count: 2, from: ['athletics','history','investigation','medicine','perception'] },
    toolChoice: true, startingRP: 150, caster: null,
    kit: [
      {item:'armor_tacticus'},
      {item:'omnaxe'},
      {item:'servoarm'},
      {pick:{label:'Bolt Secondary Weapon', cat:'Secondary Ranged', wtype:'Bolt'}, crates:1},
      {item:'tool_artificer'},
      {item:'stims', qty:2}
    ]
  }
};

// Spell tier gates by character level — mirrors the rank prose on the power pages:
// Librarian_Warp_Powers.html (Psyker Ranking 2 = Lv7+, Ranking 3 = Lv14+, Warp Mastery = Lv17+)
// and Chaplain_Holy_Powers.html (Devotion II = Lv7+, Devotion III = Lv13+).
const BUILDER_SPELL_MINLVL = { base:0, rank1:1, rank2:7, rank3:14, rank4:17, dev1:1, dev2:7, dev3:13 };

// Chapter → THEMES preset for the finish-step suggestion. White Scars has no
// preset (no gen entry in THEMES) — omitted deliberately; guard on THEMES[key].
const BUILDER_CHAPTER_THEME = {
  'Dark Angels':    'dark_angels',
  'Space Wolves':   'space_wolves',
  'Salamanders':    'salamanders',
  'Ultramarines':   'ultramarines',
  'Blood Angels':   'blood_angels',
  'Raven Guard':    'raven_guard',
  'Iron Hands':     'iron_hands',
  'Imperial Fists': 'imperial_fists'
};

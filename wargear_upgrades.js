// Shared Wargear Upgrade data — single source of truth for the Sanctioned Upgrade Patterns.
// Used by Wargear_Upgrades.html (renders its trait cards from this file) and both
// Deathwatch character sheets (per-item upgrade system on wargear rows).
//
// Trait schema:
//   id       unique key (persisted in character saves — never rename)
//   name     display name
//   slot     'weapon' | 'armor'
//   tier     1 | 2 | 3 — the slot tier at which this trait becomes available
//   family   weapon-family restriction (bolt/plasma/melta/volkite/grav/needle/las/power/physical) or null
//   pattern  armor-pattern restriction (phobos/tacticus/gravis/terminator) or null
//   grants   named WEAPON_MODS property this trait grafts on — eligible only if the weapon lacks it
//   elig     eligibility text shown on restricted cards ("Eligible: …")
//   desc     rules text (may contain <strong>)
//   choose   {label, options[]} — install-time choice, stored on the character
//   hooks    machine-readable effects the sheets apply automatically:
//            shots_mult (ammo capacity ×), dmg_add (extra damage dice string),
//            crit_range (+N crit range), range_mult (range ×), extra_t1_slot (bonus Tier I slot)

const UPGRADE_TIERS = [
  {tier:1, name:'Sanctified Pattern',     tag:'Tier I',   bonus:1, cost:300, total:300,  swap:50},
  {tier:2, name:'Artificer Pattern',      tag:'Tier II',  bonus:2, cost:450, total:750,  swap:100},
  {tier:3, name:'Master-Crafted Pattern', tag:'Tier III', bonus:3, cost:750, total:1500, swap:150},
];

const UPGRADE_TRAITS = [
  // ── WEAPON AUGMETIC TRAITS (generic) ──────────────────────────────
  {id:'balanced_grip', name:'Balanced Grip', slot:'weapon', tier:1,
   desc:'You have <strong>advantage</strong> on the first attack roll made with this weapon in each combat encounter.'},
  {id:'extended_magazine', name:'Extended Magazine', slot:'weapon', tier:1,
   desc:'This weapon\'s ammo capacity (shots per clip) increases by <strong>50%</strong>, rounded up.',
   hooks:{shots_mult:1.5}},
  {id:'marked_for_kill', name:'Marked for the Kill', slot:'weapon', tier:1,
   desc:'You gain <strong>+2 to attack rolls</strong> with this weapon against any creature at or below half its maximum HP.'},
  {id:'steady_recoil', name:'Steady Recoil Compensation', slot:'weapon', tier:1,
   desc:'You ignore disadvantage on attack rolls made with this weapon at long range.'},

  {id:'cogitator_targeting', name:'Cogitator-Guided Targeting', slot:'weapon', tier:2,
   desc:'This weapon\'s fire-control cogitator tracks every foe you engage. You have <strong>advantage</strong> on attack rolls made with this weapon against a creature you have already hit with it since the start of the current combat.'},
  {id:'searing_rounds', name:'Searing Rounds', slot:'weapon', tier:2,
   desc:'On a hit, this weapon deals an additional <strong>1d4 Fire damage</strong>.',
   hooks:{dmg_add:'1d4 Fire'}},
  {id:'overcharged_cell', name:'Overcharged Cell', slot:'weapon', tier:2,
   desc:'On a critical hit with this weapon, deal <strong>maximum damage</strong> on all dice, plus one additional damage die of the weapon\'s primary type.'},
  {id:'honed_edge', name:'Honed Edge', slot:'weapon', tier:2,
   desc:'This weapon\'s critical hit range increases by <strong>1</strong> (stacks with other sources — e.g. 20 becomes 19–20, or 19–20 becomes 18–20).',
   hooks:{crit_range:1}},

  {id:'zealots_bane', name:'Zealot\'s Bane', slot:'weapon', tier:3,
   desc:'At the start of each day, designate one creature type (Xenos, Heretic, Daemon, or Ork). This weapon deals an additional <strong>1d6 damage</strong> of its primary type against that type until the next dawn.'},
  {id:'disintegration_coil', name:'Disintegration Coil', slot:'weapon', tier:3,
   desc:'On a critical hit against a creature already at or below 25% of its maximum HP, that creature must succeed on a <strong>CON save</strong> (DC 8 + your Proficiency Bonus + relevant modifier) or be instantly slain, leaving no recoverable remains.'},
  {id:'perfect_balance', name:'Perfect Balance', slot:'weapon', tier:3,
   desc:'Attack rolls with this weapon are never affected by disadvantage from situational penalties (cover, range, awkward positioning — natural disadvantage from conditions like Blinded still applies). Once per turn, add your Proficiency Bonus to one damage roll with this weapon.'},
  {id:'sanctified_core', name:'Sanctified Core', slot:'weapon', tier:3,
   desc:'This weapon counts as magical for the purpose of overcoming resistance and immunity. It deals an additional <strong>1d8 Radiant damage</strong> against Daemons and Chaos-aligned creatures.'},

  // ── WEAPON-FAMILY TRAITS (pattern-restricted) ─────────────────────
  {id:'overcharge_coil', name:'Overcharge Coil', slot:'weapon', tier:2, family:'las', grants:'Overcharge',
   elig:'Las-pattern energy weapons (e.g. Las Fusil) that lack Overcharge.',
   desc:'Grants <strong>Overcharge</strong>: before rolling to hit, declare Overcharge. Roll 1d6 — on a 1 or 2 the weapon misfires (take 1d8 Radiant, lose the attack). On a 3+ deal an additional 1d8 damage.'},
  {id:'stabilised_matrix', name:'Stabilised Overcharge Matrix', slot:'weapon', tier:3, family:'plasma',
   elig:'any Plasma-pattern weapon.',
   desc:'Refines its existing Overcharge mod: it now only misfires on a natural <strong>1</strong> instead of a 1 or 2.'},
  {id:'focusing_coil', name:'Focusing Coil', slot:'weapon', tier:1, family:'melta',
   elig:'any Melta-pattern weapon.',
   desc:'Increases the weapon\'s range by <strong>50%</strong>, rounded up.',
   hooks:{range_mult:1.5}},
  {id:'pierce_lens', name:'Armour Pierce Lens', slot:'weapon', tier:2, family:'melta', grants:'Armour Pierce',
   elig:'Melta-pattern weapons lacking Armour Pierce.',
   desc:'Grants <strong>Armour Pierce</strong>: ignores AC bonuses from non-magical armour — use the target\'s unarmoured AC (10 + DEX modifier) when attacking.'},
  {id:'cascading_deflagration', name:'Cascading Deflagration', slot:'weapon', tier:3, family:'volkite',
   elig:'any Volkite-pattern weapon.',
   desc:'Expands its Deflagrate chain-reaction radius from 5 ft to <strong>10 ft</strong> — matching the Volkite Culverin\'s heavier pattern.'},
  {id:'crush_emitter', name:'Crush Emitter', slot:'weapon', tier:2, family:'grav', grants:'Crush',
   elig:'Grav-pattern weapons lacking Crush.',
   desc:'Grants <strong>Crush</strong>: deals an additional 1d6 Force damage for each AC point above 15 the target has (maximum +3d6).'},
  {id:'neurotoxin_reservoir', name:'Neurotoxin Reservoir', slot:'weapon', tier:2, family:'needle',
   elig:'any Needle-pattern weapon.',
   desc:'On a hit, the target must succeed on a DC 13 CON save or be <strong>Poisoned</strong> until the end of its next turn, in addition to normal damage.'},
  {id:'adamantium_rounds', name:'Adamantium Penetrator Rounds', slot:'weapon', tier:2, family:'bolt', grants:'Armour Pierce',
   elig:'Bolt-pattern weapons lacking Armour Pierce.',
   desc:'Grants <strong>Armour Pierce</strong> (as above) — the same principle behind Sternguard Kraken Penetrator rounds, scaled down to a field-installable coating.'},
  {id:'rapid_cycling', name:'Rapid Cycling Mechanism', slot:'weapon', tier:2, family:'bolt', grants:'Rapid Fire',
   elig:'Bolt-pattern weapons lacking Rapid Fire (e.g. Bolt Sniper Rifle, Stalker Bolt Rifle).',
   desc:'Grants <strong>Rapid Fire</strong>: gain an additional attack if you have not moved this turn.'},
  {id:'reinforced_tooth', name:'Reinforced Tooth Assembly', slot:'weapon', tier:2, family:'physical', grants:'Shatter',
   elig:'Chain-pattern weapons lacking Shatter (e.g. Chainsword, Chainaxe).',
   desc:'Grants <strong>Shatter</strong>: deals double damage against structures and vehicles. You also have <strong>advantage</strong> on Strength checks made to break, sunder, or force open objects and doors using this weapon.'},
  {id:'kinetic_shock', name:'Kinetic Shock Coil', slot:'weapon', tier:3, family:'power', grants:'Stunning',
   elig:'Power-pattern weapons lacking Stunning (e.g. Power Sword, Power Fist).',
   desc:'Grants <strong>Stunning</strong>: on a successful hit, target makes a DC 13 CON save or is stunned until the end of its next turn (once per creature per combat).'},

  // ── ARMOUR AUGMETIC TRAITS (generic) ──────────────────────────────
  {id:'reinforced_joints', name:'Reinforced Joints', slot:'armor', tier:1,
   desc:'Your movement speed while wearing this armour increases by <strong>5 ft</strong>.',
   hooks:{speed_add:5}},
  {id:'auto_sealing', name:'Auto-Sealing Plates', slot:'armor', tier:1,
   desc:'You have <strong>advantage</strong> on saving throws to avoid being Blinded or Deafened by explosions, flares, or other sudden environmental shocks while wearing this armour.'},
  {id:'dampening_lining', name:'Dampening Lining', slot:'armor', tier:1,
   desc:'When you take falling damage, treat the fall as <strong>10 ft shorter</strong> than it actually was for the purpose of calculating damage.'},
  {id:'signal_ward', name:'Signal Ward', slot:'armor', tier:1,
   desc:'You have <strong>advantage</strong> on checks and saves to avoid being detected by auspex scanners, vox-tracking, or other technological detection while wearing this armour.'},

  {id:'kinetic_diffusion', name:'Kinetic Diffusion Plating', slot:'armor', tier:2,
   desc:'Choose Bludgeoning, Piercing, or Slashing at installation. You have <strong>resistance</strong> to that damage type from non-magical sources while wearing this armour.',
   choose:{label:'Damage type', options:['Bludgeoning','Piercing','Slashing']}},
  {id:'thermal_core', name:'Thermal Regulation Core', slot:'armor', tier:2,
   desc:'Choose a damage type at installation — Fire, Cold, Lightning, or Acid — that you do not already have resistance to from another source. You have <strong>resistance</strong> to that damage type while wearing this armour.',
   choose:{label:'Damage type', options:['Fire','Cold','Lightning','Acid']}},
  {id:'reactive_plating', name:'Reactive Counter-Plating', slot:'armor', tier:2,
   desc:'Once per turn when a creature hits you with a melee attack while you wear this armour, that creature takes <strong>1d6 damage</strong> of the same type they dealt.'},
  {id:'stabilised_void', name:'Stabilised Void Plating', slot:'armor', tier:2,
   desc:'You have <strong>advantage</strong> on saving throws and ability checks to avoid being knocked prone or restrained while wearing this armour.'},

  {id:'voidhardened', name:'Voidhardened Plating', slot:'armor', tier:3,
   desc:'You are <strong>immune</strong> to the effects of vacuum exposure, extreme heat, extreme cold, and radiation while wearing this armour.'},
  {id:'multispectrum', name:'Multi-Spectrum Sensorium', slot:'armor', tier:3,
   desc:'You can see clearly through non-magical smoke, fog, and heavy foliage as if they weren\'t there, and you automatically sense the presence (though not the exact location) of invisible creatures within <strong>30 feet</strong> of you.'},
  {id:'overwatch_protocol', name:'Overwatch Protocol', slot:'armor', tier:3,
   desc:'Once per short rest, when a creature you can see moves more than 5 ft while within 30 ft of you, you may use your reaction to make one attack against it with a ranged weapon you are holding.'},
  {id:'adaptive_camo', name:'Adaptive Camouflage Weave', slot:'armor', tier:3,
   desc:'If you have not moved since the start of your last turn, attacks against you are made with <strong>disadvantage</strong> until you move or take an action other than Ready.'},

  // ── ARMOR PATTERN TRAITS (pattern-restricted) ─────────────────────
  {id:'umbral_weave', name:'Umbral Weave', slot:'armor', tier:1, pattern:'phobos',
   elig:'Phobos-pattern armour only.',
   desc:'You leave no tracks, scent trail, or other physical evidence of your passage, and creatures relying on non-visual senses (scent, vibration, tremorsense) cannot pinpoint your location.'},
  {id:'marksman_discipline', name:'Marksman\'s Discipline', slot:'armor', tier:1, pattern:'phobos',
   elig:'Phobos-pattern armour only.',
   desc:'While benefiting from the Silence of Thunder rule, you may fire one additional time (<strong>three shots total</strong>) from the same location before your stealth breaks.'},
  {id:'evasive_instincts', name:'Evasive Instincts', slot:'armor', tier:2, pattern:'phobos',
   elig:'Phobos-pattern armour only.',
   desc:'The first time each combat that an attack misses you, you may immediately move up to <strong>10 feet</strong> without provoking opportunity attacks.'},
  {id:'grapnel_line', name:'Grapnel Line', slot:'armor', tier:3, pattern:'phobos',
   elig:'Phobos-pattern armour only.',
   desc:'Once per short rest, as a bonus action, you may fire an integrated grapnel line to pull yourself up to <strong>30 feet</strong> toward a fixed point you can see, ignoring difficult terrain along the way. This movement does not provoke opportunity attacks.'},

  {id:'efficient_loadout', name:'Efficient Loadout', slot:'armor', tier:1, pattern:'tacticus',
   elig:'Tacticus-pattern armour only.',
   desc:'Once per combat, when a weapon you are holding would run dry, you may ignore this — a reserve magazine you didn\'t know you were carrying covers the gap.'},
  {id:'req_efficiency', name:'Requisition Efficiency', slot:'armor', tier:2, pattern:'tacticus',
   elig:'Tacticus-pattern armour only.',
   desc:'Whenever you requisition standard-issue equipment (not relics) during a resupply, its RP cost is reduced by <strong>15%</strong>.'},
  {id:'adaptive_doctrine', name:'Adaptive Combat Doctrine', slot:'armor', tier:2, pattern:'tacticus',
   elig:'Tacticus-pattern armour only.',
   desc:'When this trait is installed, choose two weapon categories from <strong>Primary Ranged, Secondary Ranged, or Melee</strong>. You gain a <strong>+1 bonus</strong> to attack rolls with weapons from your chosen categories.',
   choose:{label:'Weapon categories', options:['Primary + Secondary Ranged','Primary Ranged + Melee','Secondary Ranged + Melee']}},
  {id:'modular_hardpoints', name:'Modular Hardpoints', slot:'armor', tier:3, pattern:'tacticus',
   elig:'Tacticus-pattern armour only.',
   desc:'This armour gains one additional Augmetic Trait slot, filled with a Tier I trait of your choice, beyond what its tier would normally allow.',
   hooks:{extra_t1_slot:true}},

  {id:'blast_dampening', name:'Blast-Dampening Plating', slot:'armor', tier:1, pattern:'gravis',
   elig:'Gravis-pattern armour only.',
   desc:'You and any creature within 5 ft of you take half damage from the blast radius of your own Heavy Ordinance weapons.'},
  {id:'ammo_sled', name:'Ammunition Sled Integration', slot:'armor', tier:2, pattern:'gravis',
   elig:'Gravis-pattern armour only.',
   desc:'Weapons with the Stationary or Heavy Ordinance tag no longer count against your carrying capacity, and you may carry one additional Heavy weapon without penalty.'},
  {id:'servo_harness', name:'Servo-Harness Mounting', slot:'armor', tier:3, pattern:'gravis',
   elig:'Gravis-pattern armour only.',
   desc:'You can draw or stow a Heavy weapon as part of your movement, without spending your object interaction for the turn. If you draw a Stationary-tagged weapon this way, your first attack with it this turn still gains that weapon\'s bonus for not having moved, even though you did.'},

  {id:'voidshield_reactor', name:'Voidshield Reactor', slot:'armor', tier:1, pattern:'terminator',
   elig:'Terminator-pattern armour only.',
   desc:'As a bonus action, you may vent your armour\'s void-shield reactor to gain <strong>10 temporary hit points</strong>. These follow standard temporary HP rules. You may use this a number of times equal to <strong>3 per resupply</strong>.'},
  {id:'graze_ward', name:'Graze-Ward Plating', slot:'armor', tier:2, pattern:'terminator',
   elig:'Terminator-pattern armour only.',
   desc:'Since this armour cannot Dodge, its plating compensates: any attack that hits you with a total exactly equal to your AC deals no damage.'},
  {id:'teleportarium', name:'Teleportarium Lock', slot:'armor', tier:3, pattern:'terminator',
   elig:'Terminator-pattern armour only.',
   desc:'Once per resupply as an action, you may teleport up to <strong>60 feet</strong> to an unoccupied space you can see, ignoring cover and obstacles. This movement does not provoke opportunity attacks.'},
];

/* ── Shared helpers ─────────────────────────────────────────────── */

/* Weapon families a Requisitorium item belongs to (for family-trait eligibility).
   Detection favours the item NAME because wtype is not a clean family key
   (Las Fusil and Needler Sniper Rifle are wtype 'Sniper'). */
function upgradeFamiliesOf(item) {
  if (!item) return [];
  var fams = [];
  var name = item.name || '', wt = item.wtype || '';
  if (wt === 'Bolt'    || /\bbolt/i.test(name))    fams.push('bolt');
  if (wt === 'Plasma')                             fams.push('plasma');
  if (wt === 'Melta')                              fams.push('melta');
  if (wt === 'Volkite')                            fams.push('volkite');
  if (wt === 'Grav')                               fams.push('grav');
  if (wt === 'Needle'  || /needle/i.test(name))    fams.push('needle');
  if (/\blas\b/i.test(name))                       fams.push('las');
  if (wt === 'Power')                              fams.push('power');
  if (/chain/i.test(name))                         fams.push('physical');
  return fams;
}

/* True if a catalog item can carry an upgrade track: any non-Relic weapon,
   or an armor pattern (not shields — the +N applies to worn armour). */
function upgradeItemEligible(item) {
  if (!item) return false;
  if (item.cat === 'Armor') return !!item.armor_type;
  var WEAPON_CATS = ['Primary Ranged','Secondary Ranged','Melee','Unique Melee','Terminator'];
  return WEAPON_CATS.indexOf(item.cat) !== -1;
}

/* 'weapon' | 'armor' | null upgrade slot for a catalog item */
function upgradeSlotOf(item) {
  if (!upgradeItemEligible(item)) return null;
  return item.cat === 'Armor' ? 'armor' : 'weapon';
}

/* Traits legally installable in a slot of tier `slotTier` on `item`.
   takenIds: trait ids already installed on the item (no duplicates).
   Rules: trait tier ≤ slot tier; slot type must match; family traits need a
   matching family AND the weapon must lack the granted property; pattern
   traits need the matching armor pattern. The Modular Hardpoints bonus slot
   passes slotTier=1 with allowT1Only. */
function upgradeEligibleTraits(item, slotTier, takenIds) {
  var slotType = upgradeSlotOf(item);
  if (!slotType) return [];
  var fams = slotType === 'weapon' ? upgradeFamiliesOf(item) : [];
  var taken = takenIds || [];
  return UPGRADE_TRAITS.filter(function(t) {
    if (t.slot !== slotType) return false;
    if (t.tier > slotTier) return false;
    if (taken.indexOf(t.id) !== -1) return false;
    if (t.family && fams.indexOf(t.family) === -1) return false;
    if (t.pattern && item.armor_type !== t.pattern) return false;
    if (t.grants && Array.isArray(item.mods) && item.mods.indexOf(t.grants) !== -1) return false;
    return true;
  });
}

function upgradeTraitById(id) {
  for (var i = 0; i < UPGRADE_TRAITS.length; i++) {
    if (UPGRADE_TRAITS[i].id === id) return UPGRADE_TRAITS[i];
  }
  return null;
}

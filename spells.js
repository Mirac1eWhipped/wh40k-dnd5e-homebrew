/* ══════════════════════════════════════════════════════════════════════════════════
   SPELLS.JS — Psychic Disciplines & Holy Powers Catalog
   Librarian Warp Powers (WRP) · Chaplain Emperor's Blessings (EBP)
   WH40K D&D 5E Homebrew · Jericho Reach Campaign
   ══════════════════════════════════════════════════════════════════════════════════ */

const SPELLS = [

  /* ══════════════════════════════════════════════════════
     LIBRARIAN — BASE WARP POWERS (At-Will · FREE)
  ══════════════════════════════════════════════════════ */
  {
    id:'wrp_psychic_mending', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Psychic Mending', cost:0, costType:'free', damage:'—',
    action:'Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Stabilize a dying creature within range (no check required), or restore 1d6 HP to a willing creature you can see. Cannot be used on yourself. Scales: 2d6 at Lv7, 3d6 at Lv14.'
  },
  {
    id:'wrp_warp_trace', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Warp Trace', cost:0, costType:'free', damage:'—',
    action:'Action', range:'Touch / 30ft', duration:'1 hour', hasPerils:false,
    desc:'Attune to a creature\'s psychic signature — must touch them or an object they have carried. For 1 hour, you know their general direction (not distance or precise location). Blocked by 2ft of stone, 2in of metal, or a thin sheet of lead. Usable outside combat only.'
  },
  {
    id:'wrp_warp_flame', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Warp Flame', cost:0, costType:'free', damage:'1d8 fire + 1d4 fire',
    action:'Action', range:'Touch', duration:'Instant', hasPerils:false,
    desc:'Make a melee spell attack. Hit: 1d8 fire damage and target catches warp-fire — 1d4 fire/turn. DEX check (DC = Save DC) as action to extinguish. Cannot be smothered or doused normally. Also ignites flammable objects. Scales: 2d8 at Lv7, 3d8 at Lv14.'
  },
  {
    id:'wrp_psychic_bolt', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Psychic Bolt', cost:0, costType:'free', damage:'1d10 psychic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'Make a ranged spell attack (INT + Prof). On hit: 1d10 psychic damage (2d10 at Lv7, 3d10 at Lv14). No saving throw — a direct psychic strike.'
  },
  {
    id:'wrp_mind_scan', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Mind Scan', cost:0, costType:'free', damage:'—',
    action:'Action', range:'30ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Target makes an INT save. Failure: read surface thoughts — emotional state, immediate intent, ask GM one yes/no question about their knowledge. Success: they know you attempted the probe. Daemons have disadvantage.'
  },
  {
    id:'wrp_warp_sight', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Warp Sight', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'Self', duration:'10 min', hasPerils:false,
    desc:'Gain darkvision 60ft (or extend existing by 60ft), see invisible/warp entities, automatically detect any psyker or daemon within 60ft with relative direction.'
  },
  {
    id:'wrp_telepathic_link', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Telepathic Link', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'120ft', duration:'1 hour', hasPerils:false,
    desc:'Establish silent two-way telepathic communication with up to 3 willing allies. Instantaneous, uninterceptable. All linked allies hear everything you transmit. Ends if knocked unconscious or on resupply.'
  },
  {
    id:'wrp_kinetic_ward', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Kinetic Ward', cost:0, costType:'free', damage:'—',
    action:'Reaction', range:'Self', duration:'Until next turn', hasPerils:false,
    desc:'Manifest a telekinetic barrier as a reaction to being targeted. Gain +2 AC against the triggering attack and until your next turn. At Lv11, increases to +3 AC and reduces damage by 1d6 if the attack hits.'
  },
  {
    id:'wrp_neural_disruption', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Neural Disruption', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'Fire a precise psychic spike at a target\'s neural pathways. Target makes a CON save. Failure: disadvantage on their next attack roll, saving throw, or ability check (you declare which). Subtle — the target may not know you caused it.'
  },
  {
    id:'wrp_phase_shift', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Phase Shift', cost:0, costType:'free', damage:'—',
    action:'Reaction (on attack)', range:'Self', duration:'Instant', hasPerils:false,
    desc:'Briefly phase into the Warp. The triggering attack misses automatically. After phasing, you have disadvantage on all attack rolls until the start of your next turn as you reorient. Usable once per round.'
  },
  {
    id:'wrp_psychic_communion', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Psychic Communion', cost:0, costType:'free', damage:'—',
    action:'Action', range:'30ft', duration:'Conc. 10 min', hasPerils:false,
    desc:'Share full senses with a willing ally — see, hear, and perceive everything they experience. Communicate complex tactical information instantly (no word limit). You are not surprised while communing, regardless of your physical position.'
  },
  {
    id:'wrp_kinetic_lift', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Kinetic Lift', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'60ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Telekinetically levitate an object (up to 500 lbs) or creature (Large or smaller). Object: move 20ft per turn free action. Creature: STR save or lifted 10ft and suspended. Levitated creatures can still act. Falling deals normal damage.'
  },
  {
    id:'wrp_warp_echo', class:'librarian', tier:'base', tierLabel:'Base Power',
    name:'Warp Echo', cost:0, costType:'free', damage:'—',
    action:'Action', range:'60ft radius', duration:'Instant', hasPerils:false,
    desc:'Open your mind to psychic residue of recent events. Receive visions of significant events within 60ft of your position in the last 24 hours. Violence, deaths, and powerful emotions leave the strongest impressions. GM determines what is visible. Cannot be used during active combat.'
  },

  /* ══════════════════════════════════════════════════════
     LIBRARIAN — RANK I (Level 1+ · 4–6 WRP)
  ══════════════════════════════════════════════════════ */
  {
    id:'wrp_smite_the_unclean', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Smite the Unclean', cost:4, costType:'WRP', damage:'2d8 psychic',
    action:'Bonus Action', range:'Self', duration:'Instant (next hit)', hasPerils:true,
    desc:'Channel psychic energy through your Force weapon. The next hit this turn deals an additional 2d8 psychic damage. Against Chaos-aligned creatures and daemons: 3d8. Declare after seeing the attack roll. Does not trigger Perils of the Warp.'
  },
  {
    id:'wrp_force_wave', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Force Wave', cost:4, costType:'WRP', damage:'4d8 force',
    action:'Action', range:'30ft cone', duration:'Instant', hasPerils:false,
    desc:'Project a telekinetic burst in a 30ft cone. Each creature makes a STR save. Failure: 4d8 force damage and pushed 20ft. Success: half, no push. Objects up to 500 lbs are also pushed. Light cover is knocked aside.'
  },
  {
    id:'wrp_mind_grasp', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Mind Grasp', cost:4, costType:'WRP', damage:'—',
    action:'Action', range:'30ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Seize a creature of Large size or smaller with telekinetic force. Target makes a STR save. Failure: Grappled (no physical contact). Move the target 15ft/turn as a free action. They reattempt the save at the end of each of their turns.'
  },
  {
    id:'wrp_soul_sear', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Soul Sear', cost:4, costType:'WRP', damage:'4d8 psychic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'Lash out with a bolt of psychic fire. Target makes an INT save. Failure: 4d8 psychic damage and Frightened until end of their next turn. Success: half, not Frightened. Mindless creatures are immune to Frightened but take full damage.'
  },
  {
    id:'wrp_warp_speed', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Warp Speed', cost:4, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'Self', duration:'Until end of turn', hasPerils:false,
    desc:'Partially phase through the Warp. Until end of your turn: movement speed triples, no opportunity attacks provoked, pass through difficult terrain freely. You may pass through occupied spaces but cannot end your turn inside one.'
  },
  {
    id:'wrp_pyrokinesis', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Pyrokinesis', cost:4, costType:'WRP', damage:'4d6 fire + 1d6 fire',
    action:'Action', range:'60ft', duration:'Ongoing', hasPerils:false,
    desc:'Ignite a target with warp-fueled psychic fire. Make a ranged spell attack. Hit: 4d6 fire damage and the target catches warp-fire — 1d6 fire damage at the start of each of their turns. DEX check (DC = Save DC) as an action to extinguish. Cannot be extinguished by mundane means (not water, not smothering).'
  },
  {
    id:'wrp_telepathic_assault', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Telepathic Assault', cost:5, costType:'WRP', damage:'2d10 psychic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'Hammer a target\'s mind. Target makes an INT save. Failure: 2d10 psychic damage and Stunned until end of their next turn. Success: 1d10, not Stunned. Creatures with INT 3 or lower are immune to Stun but take double damage instead.'
  },
  {
    id:'wrp_null_field', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Null Field', cost:5, costType:'WRP', damage:'—',
    action:'Action', range:'Self (15ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Project a psychic damping field. All psykers within 15ft must spend 4 additional WRP per power and roll manifesting at disadvantage. Warp entities have disadvantage on all rolls within the area. Affects allies — use with care.'
  },
  {
    id:'wrp_veil_of_time', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Veil of Time', cost:5, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Drag a target into slow-time. Target makes a WIS save. Failure: Slowed — speed halved, -2 AC, -2 DEX saves, one action or attack per turn (not both). They repeat the save at end of each turn to escape.'
  },
  {
    id:'wrp_psychic_shroud', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Psychic Shroud', cost:5, costType:'WRP', damage:'—',
    action:'Action', range:'Self', duration:'Conc. 1 min', hasPerils:false,
    desc:'Bend light and mental perception around yourself. You become invisible; your thoughts cannot be read. Ends immediately on any hostile action (attacking, offensive power, interacting with enemy). Other psykers within 30ft detect your presence on an INT check (DC = Save DC).'
  },
  {
    id:'wrp_psychic_scour', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Psychic Scour', cost:5, costType:'WRP', damage:'—',
    action:'Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Burn away a negative condition afflicting an ally with focused psychic energy. Remove one of the following from a willing ally: Blinded, Deafened, Frightened, Poisoned, or one level of Exhaustion. Alternatively, clear one non-magical disease. The target experiences a brief intense burning sensation.'
  },
  {
    id:'wrp_ectoplasmic_tendrils', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Ectoplasmic Tendrils', cost:5, costType:'WRP', damage:'2d6 psychic',
    action:'Action', range:'30ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Manifest psychokinetic tendrils. Up to 3 creatures within 30ft make STR saves. Failures are Restrained and take 2d6 psychic damage at the start of each of their turns. STR save each turn to break free. Release any tendril as a free action.'
  },
  {
    id:'wrp_mental_bastion', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Mental Bastion', cost:4, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Encounter', hasPerils:false,
    desc:'Fortify an ally\'s mind against psychic intrusion. One willing ally gains resistance to psychic damage and advantage on INT saving throws for the rest of the encounter. They also cannot be Charmed or Frightened while the Bastion persists. Only one ally may be Bastioned at a time.'
  },
  {
    id:'wrp_crushing_grasp', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Crushing Grasp', cost:5, costType:'WRP', damage:'6d8 force',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'Compress air around a creature into a crushing telekinetic vice. Target makes a CON save. Failure: 6d8 force damage and Incapacitated until start of their next turn. Success: 3d8, not Incapacitated. Creatures in power armor have disadvantage — even ceramite yields to focused telekinesis.'
  },
  {
    id:'wrp_mindlink_network', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Mindlink Network', cost:5, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Conc. 1 hour', hasPerils:false,
    desc:'Establish a full tactical psychic network with up to 5 willing allies. All linked allies communicate silently within 1 mile. The network shares the highest Initiative modifier among its members, and the group cannot be Surprised while any networked ally is aware of a threat.'
  },
  {
    id:'wrp_far_sight', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Far Sight', cost:5, costType:'WRP', damage:'—',
    action:'Action', range:'Unlimited', duration:'Conc. 10 min', hasPerils:false,
    desc:'Extend psychic senses across vast distances. Choose a location you have previously visited. For the duration, see and hear that location as if present — observation only, no interaction. You are blind and deaf to your actual surroundings while projecting. Excellent for pre-mission reconnaissance.'
  },
  {
    id:'wrp_warp_construct', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Warp Construct', cost:6, costType:'WRP', damage:'—',
    action:'Action', range:'30ft', duration:'1 hour', hasPerils:true,
    desc:'Condense warp energy into a simple physical object or structure up to 10ft in any dimension. The construct has AC 13, 20 HP. Serves as cover, bridge, barrier, or any non-mechanical shape you define. Visibly unnatural — faintly luminescent. Vanishes when destroyed or when duration expires.'
  },
  {
    id:'wrp_memory_wipe', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Memory Wipe', cost:6, costType:'WRP', damage:'—',
    action:'Action', range:'30ft', duration:'Permanent', hasPerils:true,
    desc:'Selectively erase a creature\'s recent memories. Target makes an INT save. Failure: lose all memory of the last 1 hour. They do not know they\'ve been affected. Reserve for necessary operational security. Success: target knows something was attempted and becomes hostile.'
  },
  {
    id:'wrp_gate_of_infinity_i', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Gate of Infinity I', cost:6, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'Self (30ft)', duration:'Instant', hasPerils:true,
    desc:'Tear a miniature hole in reality and step through, appearing within 30ft. No opportunity attacks provoked. Ignores difficult terrain, obstacles, barriers under 10ft. If destination occupied, appear in nearest unoccupied space. A crack of displaced air marks both points.'
  },
  {
    id:'wrp_temporal_echo', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Temporal Echo', cost:6, costType:'WRP', damage:'—',
    action:'Action', range:'30ft (30ft radius)', duration:'Instant', hasPerils:true,
    desc:'Briefly replay the last 6 seconds in a 30ft radius. All creatures in the area make WIS saves. Failure: displaced back 6 seconds — their position, HP, and conditions reset to start of last turn. They lose memory of that turn\'s events. Success: unaffected. Closely monitored by the Librarius — use with operational justification.'
  },
  {
    id:'wrp_compel', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Compel', cost:4, costType:'WRP', damage:'—',
    action:'Action', range:'30ft', duration:'1 min', hasPerils:false,
    desc:'Plant a simple psychic command (max 5 words, non-harmful) into a target\'s mind. Target makes a WIS save. Failure: they carry out the command for up to 1 minute, believing it was their own idea. The command must be actionable and specific. Success: the target knows psychic intrusion was attempted and may become hostile.'
  },
  {
    id:'wrp_pyroclast', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Pyroclast', cost:5, costType:'WRP', damage:'8d6 fire + 1d8 fire',
    action:'Action', range:'60ft (20ft radius)', duration:'Instant', hasPerils:false,
    desc:'Detonate a burst of warp-fire at a point within 60ft. All creatures in the 20ft radius make a DEX save. Failure: 8d6 fire damage and they catch warp-fire — 1d8 fire damage at the start of each of their turns. DEX check (DC = Save DC) as an action to extinguish. Cannot be smothered or doused normally. Success: half, no ongoing.'
  },
  {
    id:'wrp_psychometry', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Psychometry', cost:4, costType:'WRP', damage:'—',
    action:'Action', range:'Touch', duration:'Instant', hasPerils:false,
    desc:'Touch an object and read its psychic history. Learn up to 3 significant events involving the object within the last month. Violence, death, and powerful emotion leave the strongest impressions — mundane use leaves almost none. GM determines what is visible. Cannot be used on living creatures.'
  },
  {
    id:'wrp_kinetic_barrier', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Kinetic Barrier', cost:5, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Conjure a 10ft wide, 10ft tall wall of compressed telekinetic force at a point within 60ft. The wall has AC 15 and 30 HP. Physical projectiles (bolts, slugs, arrows) are blocked automatically — no roll required. Warp powers and spells targeting through the wall require a contested INT check against your save DC to pass. The wall is translucent and visible.'
  },
  {
    id:'wrp_bio_surge', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Bio-Surge', cost:4, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Until end of their next turn', hasPerils:false,
    desc:'Flood an ally\'s body with a surge of warp-fuelled biological enhancement. Target gains advantage on all STR and CON checks and saving throws, +10ft movement speed, and deals +1d4 damage on all attacks. No Exhaustion on expiry. Brief, potent, surgical — the Biomancer\'s answer to a moment of crisis.'
  },
  {
    id:'wrp_drain_life', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Drain Life', cost:5, costType:'WRP', damage:'4d8 necrotic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'Ranged spell attack (INT+Prof). Hit: 4d8 necrotic. Regain HP equal to half the damage dealt. No effect on undead or constructs. Scales: 5d8 at Lv7, 7d8 at Lv14.'
  },
  {
    id:'wrp_synaptic_overload', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Synaptic Overload', cost:5, costType:'WRP', damage:'3d6 necrotic',
    action:'Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Hijack a target\'s nervous system. CON save. Failure: 3d6 necrotic and Stunned until end of their next turn. Success: 3d6 only. No effect on constructs or undead.'
  },
  {
    id:'wrp_shockwave', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Shockwave', cost:5, costType:'WRP', damage:'4d6 force',
    action:'Action', range:'Self (15ft radius)', duration:'Instant', hasPerils:false,
    desc:'Slam telekinetic force into the ground. All creatures within 15ft make a STR save. Failure: 4d6 force damage and knocked Prone. Success: half, not prone. You are unaffected.'
  },
  {
    id:'wrp_combustion', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Combustion', cost:5, costType:'WRP', damage:'4d8 fire',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'Target makes a CON save. Failure: 4d8 fire damage and catches warp-fire (1d8/turn). Success: 2d8, no ongoing. DEX check (DC = Save DC) as action to extinguish — cannot be doused normally.'
  },
  {
    id:'wrp_fire_walk', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Fire Walk', cost:4, costType:'WRP', damage:'1d6 fire',
    action:'Bonus Action', range:'Self', duration:'Until end of turn', hasPerils:false,
    desc:'Until end of your turn: immune to fire damage, move freely through flames. Your movement leaves a warp-fire trail persisting 1 minute — difficult terrain dealing 1d6 fire to any creature entering it.'
  },
  {
    id:'wrp_solar_ray', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Solar Ray', cost:5, costType:'WRP', damage:'4d8 radiant + 2d8 fire',
    action:'Action', range:'60ft line', duration:'Instant', hasPerils:false,
    desc:'Searing beam in a 5ft wide, 60ft line. Each creature makes a DEX save. Failure: 4d8 radiant + 2d8 fire damage and Blinded until end of their next turn. Success: half, not blinded.'
  },
  {
    id:'wrp_combat_precognition', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Combat Precognition', cost:4, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'60ft', duration:'Until start of target\'s next turn', hasPerils:false,
    desc:'Read a creature\'s immediate psychic intent. The GM tells you exactly what action they will take on their next turn. You also have advantage on the first attack or save you make against them before their next turn.'
  },
  {
    id:'wrp_aura_reading', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Aura Reading', cost:4, costType:'WRP', damage:'—',
    action:'Action', range:'Self (60ft)', duration:'1 min', hasPerils:false,
    desc:'Perceive the psychic signature of all creatures and objects within 60ft: whether each creature is a psyker/spellcaster, their emotional state, whether objects are warp-touched, and the discipline of any active psychic effects. No concentration required.'
  },
  {
    id:'wrp_mind_map', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Mind Map', cost:5, costType:'WRP', damage:'—',
    action:'Action', range:'Self (100ft)', duration:'10 min', hasPerils:false,
    desc:'Project psychic awareness through walls within 100ft. Perceive the layout of all enclosed spaces, the location of every creature (not identity), and any active warp or psychic zones. Blocked by 10ft of solid rock.'
  },
  {
    id:'wrp_haste', class:'librarian', tier:'rank1', tierLabel:'Rank I',
    name:'Haste', cost:5, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Until start of your next turn', hasPerils:false,
    desc:'Accelerate an ally\'s personal timeline. Until start of your next turn: movement speed doubles, +2 AC, advantage on DEX saves, and one additional action (Attack, Dash, or Disengage only). When it ends they are Slowed until end of their next turn.'
  },

  /* ══════════════════════════════════════════════════════
     LIBRARIAN — RANK II (Level 7+ · 8–12 WRP)
  ══════════════════════════════════════════════════════ */
  {
    id:'wrp_might_of_heroes', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Might of Heroes', cost:8, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Flood one ally\'s biology with psychic enhancement. Target gains +4 STR, DEX, and CON, movement +20ft, and may make one additional attack when taking the Attack action. Highly visible — target emanates a psychic aura. (Distinct from divine buffs — this is raw biological enhancement, not faith.)'
  },
  {
    id:'wrp_prescience', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Prescience', cost:8, costType:'WRP', damage:'1d6 psychic',
    action:'Bonus Action', range:'Self', duration:'Conc. 1 min', hasPerils:true,
    desc:'Open your mind to the near-future. Gain advantage on all attack rolls, saving throws, and ability checks. The first attack against you each turn is made with disadvantage. Breaking concentration costs 1d6 psychic damage as the visions snap away violently.'
  },
  {
    id:'wrp_psychic_fortress', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Psychic Fortress', cost:8, costType:'WRP', damage:'—',
    action:'Action', range:'30ft (self + allies)', duration:'Until depleted', hasPerils:true,
    desc:'Project a shared psychic barrier around yourself and up to 3 allies. Each gains temporary HP equal to 2d10 + INT modifier. While any temp HP from this power remains, the target has resistance to psychic damage. Temp HP must be depleted before other HP is lost.'
  },
  {
    id:'wrp_hallucination', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Hallucination', cost:8, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Implant false sensory experiences in a target\'s mind. Target makes an INT save. Failure: fully hallucinating — disadvantage on all attacks and saves, must use their action each turn interacting with the hallucination. Repeat save at end of each turn. You design the content of what they experience.'
  },
  {
    id:'wrp_force_cage', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Force Cage', cost:8, costType:'WRP', damage:'2d8 force',
    action:'Action', range:'60ft', duration:'Conc. 1 hour', hasPerils:true,
    desc:'Imprison a creature in an invisible telekinetic cage. Target makes a STR save. Failure: contained in a 10ft force cube — cannot move, teleport, or be moved. Can still attack and act. The cage has no physical component — attacks pass through, only the creature is held. Success: 2d8 force damage, no cage.'
  },
  {
    id:'wrp_biomantic_surge', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Biomantic Surge', cost:8, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Dramatically enhance an ally\'s physical biology. One ally gains: STR and CON become 20 (if not higher), movement doubles, one free attack when an enemy enters melee range, and they need not breathe. When the duration ends: target gains 1 level of Exhaustion. The body cannot sustain such enhancement without cost.'
  },
  {
    id:'wrp_dominate_mind', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Dominate Mind', cost:10, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Seize control of a sentient creature\'s will. Target makes a WIS save. Failure: Charmed and under your mental control — follow your spoken commands (up to 3 words) issued as a bonus action each turn. Creatures with INT 3 or lower are immune. The dominated creature may repeat the save if it takes damage from your allies.'
  },
  {
    id:'wrp_soul_blaze', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Soul Blaze', cost:10, costType:'WRP', damage:'5d6 psychic + 3d6 psychic',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Set a target\'s soul alight with warp-fire. Target makes a CON save. Failure: 5d6 psychic damage now, plus 3d6 psychic damage at start of each of their turns. Success: 3d6, no ongoing. Action to reattempt the CON save and extinguish the blaze.'
  },
  {
    id:'wrp_psychic_transference', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Psychic Transference', cost:8, costType:'WRP', damage:'—',
    action:'Reaction (ally takes damage)', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'When an ally within 60ft takes damage, redirect it psychically. The ally takes no damage — the damage source takes half the original amount as psychic damage (no save), and your ally takes the other half as psychic damage. Net: damage is split and partially reflected back to its origin.'
  },
  {
    id:'wrp_storm_of_the_emperor_s_wrath', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Storm of the Emperor\'s Wrath', cost:10, costType:'WRP', damage:'5d8 lightning + 3d8 psychic',
    action:'Action', range:'Self (60ft cone)', duration:'Instant', hasPerils:true,
    desc:'Call down crackling psychic lightning in a 60ft cone. Each creature makes a DEX save. Failure: 5d8 lightning + 3d8 psychic damage. Success: half. Metallic armor (power armor excluded) grants no protection — armored targets have disadvantage on the save.'
  },
  {
    id:'wrp_null_storm', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Null Storm', cost:10, costType:'WRP', damage:'—',
    action:'Action', range:'60ft (30ft radius)', duration:'Conc. 10 min', hasPerils:true,
    desc:'Unleash a psychic dampening storm. Within the 30ft radius, all powers and spells cost double and all save DCs reduce by 3. Warp entities have disadvantage on all rolls. Does not suppress your own powers while you maintain concentration.'
  },
  {
    id:'wrp_brain_burst', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Brain Burst', cost:10, costType:'WRP', damage:'7d10 psychic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Focus psychic energy to a singular devastating point inside a target\'s skull. Target makes a CON save. Failure: 7d10 psychic damage. If reduced to 0 HP, their head detonates — all within 10ft make CON saves or take 2d10 psychic. Success: 3d10, no secondary effect.'
  },
  {
    id:'wrp_warp_rift', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Warp Rift', cost:10, costType:'WRP', damage:'3d10 force',
    action:'Action', range:'60ft (10×30ft line)', duration:'1 minute', hasPerils:true,
    desc:'Tear a gash in realspace. Creatures entering or starting their turn inside take 3d10 force damage (DEX save for half). Creatures reduced to 0 HP inside are pulled into the Warp — recovery requires Gate of Infinity or GM narrative intervention. Escaping costs double movement.'
  },
  {
    id:'wrp_warp_horror', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Warp Horror', cost:10, costType:'WRP', damage:'—',
    action:'Action', range:'60ft (30ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Project terrifying warp imagery into enemy minds. All enemies within 30ft of a designated point make WIS saves. Failure: Frightened of that point, must move away. At start of each turn, repeat the save — on a second failure, they are also Incapacitated for that turn. Constructs and mindless creatures are immune.'
  },
  {
    id:'wrp_cognitive_override', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Cognitive Override', cost:10, costType:'WRP', damage:'—',
    action:'Action', range:'30ft', duration:'Until resupply', hasPerils:true,
    desc:'Convince a creature\'s mind it never experienced this encounter. Target makes an INT save. Failure: forgets having seen you or your kill team entirely — loses all tactical knowledge of positions and capabilities gained this combat. Will not pursue, report, or remember the engagement. Success: target is aware of the attempt.'
  },
  {
    id:'wrp_gestalt_mind', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Gestalt Mind', cost:10, costType:'WRP', damage:'1d6 psychic',
    action:'Action', range:'30ft', duration:'Conc. 10 min', hasPerils:true,
    desc:'Temporarily merge the tactical consciousness of up to 4 willing allies. Linked members may share action economy (one can use another\'s reaction), all have advantage on attacks against any creature that attacked any member, and cannot be Surprised. When the gestalt ends, all participants take 1d6 psychic damage.'
  },
  {
    id:'wrp_dimensional_step', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Dimensional Step', cost:10, costType:'WRP', damage:'4d10 force',
    action:'Bonus Action', range:'Self (90ft)', duration:'Instant', hasPerils:true,
    desc:'Phase through the Warp in a streak of violet energy, crossing up to 90ft — including through solid matter up to 5ft thick. Unlike Gate I, line of sight is not required, only knowledge of the destination. If you phase into solid matter, take 4d10 force damage and shunt to nearest open space.'
  },
  {
    id:'wrp_vortex_of_doom', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Vortex of Doom', cost:12, costType:'WRP', damage:'6d8 force',
    action:'Action', range:'60ft (20ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Tear open a miniature warp vortex. All creatures within 20ft make DEX saves. Failure: 6d8 force damage + pulled 10ft toward center. Success: half, no pull. Repeat at start of each of your turns. Escaping costs double movement. Creatures reduced to 0 HP inside are lost to the Warp.'
  },
  {
    id:'wrp_reality_shear', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Reality Shear', cost:12, costType:'WRP', damage:'8d8 force',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Tear apart the quantum structure of reality around a target. Target makes a CON save. Failure: 8d8 force damage and one of their equipped items (weapons, armor, or key equipment — your choice) is permanently destroyed as molecular bonds are severed. Success: 4d8 damage, no item destruction. Ignores damage resistances and immunities.'
  },
  {
    id:'wrp_gate_of_infinity_ii', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Gate of Infinity II', cost:12, costType:'WRP', damage:'—',
    action:'Action', range:'Self + 3 allies (60ft)', duration:'Instant', hasPerils:true,
    desc:'Step through a larger warp gate bringing allies. Up to 3 willing creatures within 10ft of you teleport with you to a destination within 60ft. A crackling tear in space opens at both origin and destination. All transported creatures make WIS saves (DC 10) or are Disoriented until end of their next turn.'
  },
  {
    id:'wrp_regenerative_field', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Regenerative Field', cost:8, costType:'WRP', damage:'—',
    action:'Action', range:'Self (30ft)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Project a biological restoration aura. Up to 3 allies of your choice within 30ft regain 1d8 + INT modifier HP at the start of each of your turns while they remain in range. Concentration is required — breaking it immediately ends the field. You may change which allies are included as a free action on your turn.'
  },
  {
    id:'wrp_mass_suggestion', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Mass Suggestion', cost:8, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'1 hour', hasPerils:true,
    desc:'Broadcast a psychic command to up to 6 creatures of your choice within 60ft. Each makes a WIS save. Failures: the target complies with a reasonable, non-suicidal suggestion for 1 hour, believing it sounds sensible. Creatures currently hostile to you make the save with advantage. When the effect ends, targets are not automatically aware they were influenced.'
  },
  {
    id:'wrp_pyroclastic_shell', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Pyroclastic Shell', cost:8, costType:'WRP', damage:'1d8 fire + +1d6 fire + 3d8 fire',
    action:'Action', range:'30ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Encase a willing ally in a shell of controlled warp-fire. While the shell persists: creatures that hit the target with melee attacks take 1d8 fire damage, and the target deals +1d6 fire damage on all melee attacks. As a bonus action, the target (or you) can erupt the shell — dealing 3d8 fire damage to all within 10ft (DEX save for half) and ending the effect. Warp-fire cannot be doused by mundane means.'
  },
  {
    id:'wrp_fate_s_eye', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Fate\'s Eye', cost:10, costType:'WRP', damage:'1d8 psychic',
    action:'Bonus Action', range:'Self', duration:'Conc. 1 min', hasPerils:true,
    desc:'Open your mind to the immediate future — a window of 3 seconds. You cannot be Surprised, have advantage on all saving throws, and enemies have disadvantage on all attacks against you. The weight of constant foresight is immense — if concentration breaks from taking damage, you take an additional 1d8 psychic damage as the visions shatter. More overwhelming than Prescience, but requires no preparation.'
  },
  {
    id:'wrp_cellular_regeneration', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Cellular Regeneration', cost:8, costType:'WRP', damage:'—',
    action:'Action', range:'Touch', duration:'Instant', hasPerils:true,
    desc:'Touch a creature — restore 5d8 + INT modifier HP and remove one disease, poison, or non-magical condition (Blinded, Deafened, Frightened, Paralyzed, or Poisoned). Cannot target constructs or undead.'
  },
  {
    id:'wrp_iron_constitution', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Iron Constitution', cost:8, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Fortify an ally\'s physiology. Target gains resistance to bludgeoning, piercing, and slashing damage and their max HP increases by 2x your INT modifier (they gain that HP immediately). Bonus HP is lost when the power ends.'
  },
  {
    id:'wrp_bone_crush', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Bone Crush', cost:10, costType:'WRP', damage:'7d8 necrotic',
    action:'Action', range:'60ft', duration:'1 min', hasPerils:true,
    desc:'CON save. Failure: 7d8 necrotic, speed reduced to 0 until end of their next turn, and disadvantage on STR checks/saves for 1 minute. Success: 4d8 only. Constructs immune to speed/STR effects but take full damage.'
  },
  {
    id:'wrp_gravity_well', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Gravity Well', cost:10, costType:'WRP', damage:'3d8 force',
    action:'Action', range:'60ft (20ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Create a point of intense telekinetic gravity. Each creature within 20ft makes a STR save at start of its turn. Failure: pulled 10ft toward the center and takes 3d8 force damage. Success: half, no pull. Escaping costs double movement.'
  },
  {
    id:'wrp_telekinetic_slam', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Telekinetic Slam', cost:8, costType:'WRP', damage:'6d10 force',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Seize two targets within 60ft and hurl them into each other. Each makes a STR save. Failure: 6d10 force damage and Stunned until start of their next turn. Success: 3d10, not Stunned. Huge+ creatures have advantage.'
  },
  {
    id:'wrp_phoenix_fury', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Phoenix Fury', cost:8, costType:'WRP', damage:'8d8 fire',
    action:'Action', range:'Self (20ft radius)', duration:'Instant', hasPerils:true,
    desc:'Detonate warp-fire centred on yourself. All other creatures within 20ft make a DEX save. Failure: 8d8 fire damage. Success: half. You take no damage. Every flammable object in the radius ignites.'
  },
  {
    id:'wrp_conflagration', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Conflagration', cost:10, costType:'WRP', damage:'5d6 fire',
    action:'Action', range:'60ft (20ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Seed an area with spreading warp-fire. Creatures entering or starting a turn inside take 5d6 fire damage (DEX save half). Failed save: also catch warp-fire (2d6/turn). Each round the fire expands 5ft in a random direction unless blocked by stone. Cannot be doused.'
  },
  {
    id:'wrp_smelt', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Smelt', cost:8, costType:'WRP', damage:'5d8 fire',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Focus warp-heat on a metal object being worn or carried. Target makes a CON save. Failure: 5d8 fire damage and the object is partially melted — weapons deal -2 damage, armour loses 3 AC (permanent until repaired). Success: 2d8, no item damage.'
  },
  {
    id:'wrp_flame_wall', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Flame Wall', cost:10, costType:'WRP', damage:'4d8 fire',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Conjure a 40ft long, 10ft tall wall of warp-fire. Creatures passing through take 4d8 fire damage (DEX save half) and catch warp-fire. The wall provides total concealment from mundane vision and blocks non-warp projectiles. Cannot be doused.'
  },
  {
    id:'wrp_true_sight', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'True Sight', cost:8, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'Self', duration:'10 min', hasPerils:true,
    desc:'Open your mind\'s eye to unfiltered reality. For 10 minutes: see through illusions, perceive the true form of shapeshifters and warp entities, see invisible creatures, and detect dimensional pockets within 30ft.'
  },
  {
    id:'wrp_oracle_s_vision', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Oracle\'s Vision', cost:8, costType:'WRP', damage:'—',
    action:'Action', range:'Self', duration:'Instant', hasPerils:true,
    desc:'Project your psychic senses up to 1 hour into the future. Describe a specific concern — the GM provides a vision of the most probable outcome, possibly symbolic. Visions can be changed by subsequent choices. Cannot be used during active combat.'
  },
  {
    id:'wrp_doom_sight', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Doom Sight', cost:10, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Read the thread of fate around a target and perceive their most likely death. WIS save. Failure: Frightened 1 minute and -2 to all rolls (knowing their end is near). Success: you still see their fate, they feel nothing. You always learn their death method regardless.'
  },
  {
    id:'wrp_retrocognition', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Retrocognition', cost:10, costType:'WRP', damage:'—',
    action:'Action', range:'Touch (location)', duration:'Conc. 10 min', hasPerils:true,
    desc:'Fully experience any moment in a location\'s history up to 1 year ago — all senses, up to 10 minutes of vision-time. Observation only. Traumatic events (battles, daemonic incursions) require a WIS save DC 12 or take 1d4 psychic.'
  },
  {
    id:'wrp_slow', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Slow', cost:8, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'Drag up to 3 creatures into temporal treacle. WIS save. Failure: Slowed — speed halved, -2 AC, -2 DEX saves, either action OR movement per turn (not both). Repeat save at end of each turn.'
  },
  {
    id:'wrp_rewind', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Rewind', cost:10, costType:'WRP', damage:'—',
    action:'Reaction (on taking damage)', range:'Self', duration:'Instant', hasPerils:true,
    desc:'Undo the last 6 seconds. The triggering damage does not occur — you revert to HP, conditions, and position from the start of your last turn. You retain full memory. Allies and enemies are unaffected. Once per resupply.'
  },
  {
    id:'wrp_temporal_displacement', class:'librarian', tier:'rank2', tierLabel:'Rank II',
    name:'Temporal Displacement', cost:10, costType:'WRP', damage:'—',
    action:'Reaction (on being targeted)', range:'Self', duration:'Until start of your next turn', hasPerils:true,
    desc:'Step out of phase with time. Until your next turn you cannot be targeted — present but untouchable. You can observe but cannot act or interact. At the start of your next turn, reappear anywhere within 30ft of your displaced position. Once per resupply.'
  },

  /* ══════════════════════════════════════════════════════
     LIBRARIAN — RANK III (Level 14+ · 12–18 WRP · High Peril Risk)
  ══════════════════════════════════════════════════════ */
  {
    id:'wrp_reality_anchor', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Reality Anchor', cost:14, costType:'WRP', damage:'—',
    action:'Action', range:'60ft (30ft radius)', duration:'Conc. 10 min', hasPerils:true,
    desc:'Lock down the laws of physics in a 30ft radius. Within the area: no teleportation of any kind (including Gate of Infinity, daemonic stepping), no summoning or banishment, no extradimensional spaces can be accessed. Affects everyone equally — including you. Plan accordingly.'
  },
  {
    id:'wrp_mind_shatter', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Mind Shatter', cost:14, costType:'WRP', damage:'6d12 psychic',
    action:'Action', range:'60ft', duration:'Permanent', hasPerils:true,
    desc:'Launch a devastating attack designed to permanently damage the target\'s mind. Target makes an INT save. Failure: 6d12 psychic damage and INT permanently reduced by 1d6. If INT reaches 0, vegetative state. Success: 6d12, no reduction. Cannot target constructs. Repeated use attracts Inquisitorial attention.'
  },
  {
    id:'wrp_purge_soul', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Purge Soul', cost:14, costType:'WRP', damage:'10d10 psychic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Reach into a target\'s soul and attempt to rip it out. Target makes a CON save. Failure: 10d10 psychic damage. Success: 5d10. If reduced to 0 HP, the target cannot be stabilized — their soul scatters to the Warp. Recovery requires extraordinary GM-narrative intervention.'
  },
  {
    id:'wrp_astral_projection', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Astral Projection', cost:14, costType:'WRP', damage:'—',
    action:'Action', range:'Self', duration:'Conc. 10 min', hasPerils:true,
    desc:'Leave your physical body behind and project your psychic consciousness across the battlefield. Your astral form is invisible, flies 60ft, and can observe everything within 300ft of your body. You can communicate mentally with anyone you can see. Your body is helpless (AC 10, cannot act). If your body drops to 0 HP, the projection is destroyed immediately.'
  },
  {
    id:'wrp_gate_of_infinity_iii', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Gate of Infinity III', cost:14, costType:'WRP', damage:'—',
    action:'Action', range:'30ft (dest. 300ft)', duration:'Instant', hasPerils:true,
    desc:'Open a massive warp gate transporting your entire kill team. All willing creatures within 30ft teleport to a destination within 300ft you can see or have previously visited. Unwilling creatures within the radius must make a WIS save or be transported as well.'
  },
  {
    id:'wrp_temporal_stasis', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Temporal Stasis', cost:14, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Up to 1 hour', hasPerils:true,
    desc:'Freeze one creature outside the flow of time. Target makes a WIS save. Failure: perfectly preserved in a frozen moment — cannot act, be damaged, moved, or affected. Simply paused. Lasts until you end it, it is dispelled, or 1 hour passes. Success: Slowed for 1 minute instead.'
  },
  {
    id:'wrp_mass_dominion', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Mass Dominion', cost:14, costType:'WRP', damage:'—',
    action:'Action', range:'60ft (30ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Extend your psychic will to dominate multiple minds. Up to 3 creatures of your choice within 30ft make WIS saves. Failures are Charmed and under your mental control. A single bonus action command applies to all dominated creatures simultaneously. If one breaks free, all repeat their saves.'
  },
  {
    id:'wrp_veil_between_worlds', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Veil Between Worlds', cost:16, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'1 minute', hasPerils:true,
    desc:'Banish one creature to a Warp pocket. Target makes a CHA save. Failure: vanishes for 1 minute in a hellish pocket dimension, returning to an unoccupied space within 10ft with 2 levels of Exhaustion. Success: unaffected.'
  },
  {
    id:'wrp_psychic_scream', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Psychic Scream', cost:16, costType:'WRP', damage:'8d8 psychic',
    action:'Action', range:'Self (90ft radius)', duration:'Instant', hasPerils:true,
    desc:'Unleash a psychic shriek shredding minds across a massive area. All enemies within 90ft make INT saves. Failure: 8d8 psychic damage and Stunned until end of their next turn. Success: 4d8. Constructs and mindless creatures are immune. Allies within 30ft make WIS saves (DC 12) or are Deafened 1 minute.'
  },
  {
    id:'wrp_psychic_sundering', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Psychic Sundering', cost:16, costType:'WRP', damage:'8d12 psychic',
    action:'Action', range:'60ft', duration:'Permanent', hasPerils:true,
    desc:'Strike at the very core of a psyker\'s being. Target must be a psyker or spellcaster — makes an INT save at disadvantage. Failure: psychic/magical abilities permanently suppressed — cannot cast spells or manifest powers until Greater Restoration or equivalent. Success: 8d12 psychic damage.'
  },
  {
    id:'wrp_warp_maw', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Warp Maw', cost:16, costType:'WRP', damage:'8d12 force',
    action:'Action', range:'60ft', duration:'Until escaped', hasPerils:true,
    desc:'Open a mouth of pure void beneath a target. DEX save. Failure: 8d12 force damage and Swallowed into the Warp — incapacitated, 4d6 force/turn. WIS save each turn to claw back, reappearing within 10ft of you. Success: 4d12 only.'
  },
  {
    id:'wrp_living_vortex', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Living Vortex', cost:16, costType:'WRP', damage:'5d8 force + 5d8 psychic',
    action:'Action', range:'Self (20ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Become one with a Warp Vortex. Your form dissolves into a 20ft storm of psychic energy. Immune to physical damage. Any creature starting its turn within 20ft takes 5d8 force + 5d8 psychic (DEX save for half). You cannot be targeted by abilities requiring a specific creature. Perils check each turn (WIS DC 15). If concentration breaks: reappear at 1 HP.'
  },
  {
    id:'wrp_cataclysmic_pyrokinesis', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Cataclysmic Pyrokinesis', cost:16, costType:'WRP', damage:'6d8 fire + 6d8 psychic',
    action:'Action', range:'120ft (40ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Unleash a catastrophic psychic inferno. All creatures in 40ft radius make DEX saves. Failure: 6d8 fire + 6d8 psychic and caught in warp-fire (2d8/turn). Success: half, no ongoing. Within the area: visibility 10ft, movement costs double, non-airtight armor users make CON saves each turn or gain 1 Exhaustion.'
  },
  {
    id:'wrp_the_emperor_s_wrath', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'The Emperor\'s Wrath', cost:18, costType:'WRP', damage:'8d8 lightning + 8d8 psychic',
    action:'Action', range:'120ft (20ft radius)', duration:'Instant', hasPerils:true,
    desc:'Channel the raw psychic might of the Emperor\'s will. All creatures in a 20ft radius sphere make DEX saves. Failure: 8d8 lightning + 8d8 psychic damage. Success: half. The ground becomes difficult terrain; all warp effects active within are immediately dispelled.'
  },
  {
    id:'wrp_biological_singularity', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Biological Singularity', cost:14, costType:'WRP', damage:'8d10 necrotic',
    action:'Action', range:'60ft', duration:'Instant / 1 min', hasPerils:true,
    desc:'Accelerate a target\'s cellular processes to catastrophic speeds. Target makes a CON save. Failure: 8d10 necrotic damage. If they survive the failure, their body overcorrects — they regain 2d10 HP at the start of each of their turns for 1 minute as cells go into frenzied regeneration. This regeneration cannot be suppressed. Success: 4d10 only, no regeneration. Cannot target constructs or undead.'
  },
  {
    id:'wrp_collective_consciousness', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Collective Consciousness', cost:14, costType:'WRP', damage:'2d6 psychic',
    action:'Action', range:'60ft', duration:'10 min', hasPerils:true,
    desc:'Merge your kill team\'s minds into a single tactical consciousness. Up to 5 willing allies within 60ft share all senses completely — see through any member\'s eyes, hear through any member\'s ears. The group acts on the same initiative count (highest among members). Any member\'s awareness prevents Surprise for all. When the duration ends: each member takes 2d6 psychic damage and is Stunned until the end of their next turn.'
  },
  {
    id:'wrp_chronological_rewrite', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Chronological Rewrite', cost:18, costType:'WRP', damage:'—',
    action:'Action', range:'Self (60ft radius)', duration:'Instant', hasPerils:true,
    desc:'Rewrite the last 1 minute of events within 60ft of your position. All creatures and objects within range revert — positions, HP, conditions, and expended resources reset to their state 1 minute ago. You retain memory of both timelines. Unwilling creatures within range make a WIS save; those who succeed also retain memory of the erased timeline. The Librarius considers this power heresy-adjacent. Automatic Perils check DC 18. You gain 1d8 Corruption regardless of the check\'s result.'
  },
  {
    id:'wrp_warp_plague', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Warp Plague', cost:14, costType:'WRP', damage:'4d6 necrotic',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:true,
    desc:'CON save. Failure: Poisoned, and takes 4d6 necrotic/turn. At the start of each turn a Poisoned target must pass a CON save (same DC) or transmit the plague to one adjacent creature. Success: Poisoned 1 round, no spread. Curable by Psychic Scour at double WRP cost.'
  },
  {
    id:'wrp_mass_vitality', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Mass Vitality', cost:14, costType:'WRP', damage:'—',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Restore biological vigour to the entire kill team. Up to 5 allies within 60ft each regain 6d8 + INT modifier HP. Additionally, each target is cleansed of one condition of your choice: Blinded, Deafened, Frightened, Paralyzed, or Poisoned.'
  },
  {
    id:'wrp_necrotic_aura', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Necrotic Aura', cost:14, costType:'WRP', damage:'4d6 necrotic',
    action:'Action', range:'Self (15ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Emanate a field of accelerated cellular death. Enemies within 15ft make a CON save at the start of their turn. Failure: 4d6 necrotic damage and -2 to all attack rolls until end of their next turn. Success: half, no debuff. You are unaffected.'
  },
  {
    id:'wrp_kinetic_singularity', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Kinetic Singularity', cost:14, costType:'WRP', damage:'8d10 force + 3d10 force',
    action:'Action', range:'60ft (30ft radius)', duration:'Instant', hasPerils:true,
    desc:'Collapse a 30ft radius sphere toward its centre. All creatures in the area make a STR save. Failure: pulled 20ft toward the centre and take 8d10 force damage. Success: 4d10, pulled 10ft. Creatures colliding at the centre take an additional 3d10 force damage. Area becomes difficult terrain.'
  },
  {
    id:'wrp_immolation', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Immolation', cost:16, costType:'WRP', damage:'8d8 fire + 4d6 fire',
    action:'Action', range:'60ft', duration:'Until extinguished', hasPerils:true,
    desc:'Ignite a target from the inside. CON save. Failure: 8d8 fire damage and the target burns internally — takes 4d6 fire/turn, cannot be extinguished by external means. Only a CON save (same DC) at end of their turn ends it. Success: 4d8, no ongoing.'
  },
  {
    id:'wrp_nova_burst', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Nova Burst', cost:16, costType:'WRP', damage:'10d8 fire + 5d8 psychic',
    action:'Action', range:'Self (60ft radius)', duration:'Instant', hasPerils:true,
    desc:'Release all contained warp-fire in a catastrophic detonation. All creatures in 60ft radius make a DEX save. Failure: 10d8 fire + 5d8 psychic damage. Success: half. All ongoing warp-fire effects in the area are consumed — you regain 1d10 WRP as the energy feeds back.'
  },
  {
    id:'wrp_stellar_core', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Stellar Core', cost:16, costType:'WRP', damage:'12d6 fire + 4d10 fire',
    action:'Action', range:'120ft', duration:'Instant', hasPerils:true,
    desc:'Compress warp-fire into a star-point and release it. Ranged spell attack. Hit: 12d6 fire damage. If this reduces the target to 0 HP, they are vaporised — no body remains. All creatures within 10ft of the target make a DEX save or take 4d10 fire damage (success: half).'
  },
  {
    id:'wrp_probability_shift', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Probability Shift', cost:14, costType:'WRP', damage:'—',
    action:'Reaction (after any roll)', range:'120ft', duration:'Instant', hasPerils:true,
    desc:'Once per resupply, reach into the web of probability and alter one dice result after it is revealed. Replace the result with any number on that die — no reroll, your choice. Works on attack rolls, saves, checks, or damage. The Warp notices the impossibility.'
  },
  {
    id:'wrp_death_s_clock', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Death\'s Clock', cost:14, costType:'WRP', damage:'—',
    action:'Action', range:'Self (60ft radius)', duration:'1 min', hasPerils:true,
    desc:'Read the lifespan remaining in every living creature within 60ft. You know each creature\'s exact current HP and conditions. You also know which target is closest to death — attacks against that creature deal maximum damage for the rest of your turn. The weight of so much impending death requires a WIS save DC 13 or gain 1 Corruption.'
  },
  {
    id:'wrp_temporal_duplicate', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Temporal Duplicate', cost:14, costType:'WRP', damage:'2d6 psychic',
    action:'Action', range:'Self', duration:'Until start of your next turn', hasPerils:true,
    desc:'Pull a version of yourself from 6 seconds in the past. Your Duplicate shares your current stats, acts immediately after you on initiative, and has your current HP. It cannot use Rank III+ powers. When it disappears: you take 2d6 psychic damage as the timelines collapse.'
  },
  {
    id:'wrp_time_stop', class:'librarian', tier:'rank3', tierLabel:'Rank III',
    name:'Time Stop', cost:16, costType:'WRP', damage:'—',
    action:'Action', range:'Self', duration:'3 additional turns', hasPerils:true,
    desc:'Stop time for one round. All other creatures are frozen — cannot act, move, or react. You take 3 additional turns in sequence. You cannot directly harm frozen creatures (reality prevents paradox) but may reposition, buff allies, and set environmental hazards that trigger when time resumes.'
  },

  /* ══════════════════════════════════════════════════════
     LIBRARIAN — RANK IV: IMMATERIA (Level 17+ · 18–24 WRP · Mandatory Perils — Forbidden Disciplines)
  ══════════════════════════════════════════════════════ */
  {
    id:'wrp_nexus_of_power', class:'librarian', tier:'rank4', tierLabel:'Rank IV',
    name:'Nexus of Power', cost:20, costType:'WRP', damage:'—',
    action:'Bonus Action', range:'Self', duration:'Instant (next power)', hasPerils:true,
    desc:'Concentrate psychic power into a moment of absolute clarity. The next Advanced Warp Power you manifest before end of turn costs 20 WRP, skips Perils checks, and deals maximum damage / achieves maximum effect. That power\'s save DCs increase by 2.'
  },
  {
    id:'wrp_entropy_field', class:'librarian', tier:'rank4', tierLabel:'Rank IV',
    name:'Entropy Field', cost:18, costType:'WRP', damage:'—',
    action:'Action', range:'60ft (20ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Project a field of accelerated entropy. All enemies in the radius make CON saves at start of each turn. Failure: equipment deteriorates — weapons deal -1d6 damage (cumulative), armor loses 1 AC (cumulative), and they take 3d8 necrotic. Success: 2d8 necrotic. After 3 failures, equipment is destroyed. Deterioration is permanent unless repaired.'
  },
  {
    id:'wrp_warp_siphon', class:'librarian', tier:'rank4', tierLabel:'Rank IV',
    name:'Warp Siphon', cost:18, costType:'WRP', damage:'5d10 psychic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Reach into an enemy psyker and rip their power out. Target makes an INT save. Failure: their power pool is reduced by 25% for this encounter; you regain WRP equal to what they lost (max 15 WRP). Success: 5d10 psychic damage only. Cannot target non-psychic targets — useless against constructs.'
  },
  {
    id:'wrp_apotheosis', class:'librarian', tier:'rank4', tierLabel:'Rank IV',
    name:'Apotheosis', cost:20, costType:'WRP', damage:'—',
    action:'Action', range:'Self', duration:'Conc. 1 min', hasPerils:true,
    desc:'Shed your physical form and become a being of pure psychic energy. Immune to physical damage, fly 60ft (hover), each Warp Power deals +4d6 bonus psychic damage, emanate a 30ft aura — enemies make WIS saves or Frightened. When duration ends: automatic Perils check DC 18.'
  },
  {
    id:'wrp_psychic_annihilation', class:'librarian', tier:'rank4', tierLabel:'Rank IV',
    name:'Psychic Annihilation', cost:22, costType:'WRP', damage:'12d12 psychic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:true,
    desc:'Pure psychic energy that disassembles matter at the molecular level. Target makes a CON save. Failure: 12d12 psychic damage. If reduced to 0 HP, the target is completely disintegrated — every molecule dispersed. Nothing remains. Success: 6d12. Automatically triggers a Perils check at DC 16 in addition to any other checks this turn.'
  },
  {
    id:'wrp_warp_manifestation', class:'librarian', tier:'rank4', tierLabel:'Rank IV',
    name:'Warp Manifestation', cost:22, costType:'WRP', damage:'—',
    action:'Action', range:'30ft', duration:'1 hour', hasPerils:true,
    desc:'Tear the veil and bind a warp entity to your will. A Lesser Daemon (GM-stat, CR 8–10 equivalent) is summoned in an unoccupied space within 30ft. It serves you for 1 hour but cannot leave without permission. When dismissed or duration ends: gain 1d6 Corruption. If destroyed in battle: gain 1d8 Corruption. The Inquisition is interested in Librarians who can do this.'
  },
  {
    id:'wrp_reality_fracture', class:'librarian', tier:'rank4', tierLabel:'Rank IV',
    name:'Reality Fracture', cost:22, costType:'WRP', damage:'—',
    action:'Action', range:'60ft (40ft radius)', duration:'Conc. 1 min', hasPerils:true,
    desc:'Shatter the laws of physics in a 40ft radius. Within the area: all damage rolls are made twice and the lower result used (reality resists violence), all movement costs triple, and all saving throws are at disadvantage. You may exempt yourself from one law of physics (gravity, inertia, or solidity) while inside the area.'
  },
  {
    id:'wrp_the_warp_speaks', class:'librarian', tier:'rank4', tierLabel:'Rank IV',
    name:'The Warp Speaks', cost:24, costType:'WRP', damage:'—',
    action:'Action', range:'Self', duration:'1 hour', hasPerils:true,
    desc:'Open your mind completely to the Immaterium and receive its answer. Ask one question — any question. The GM answers truthfully from the Warp\'s perspective: accurate but possibly symbolic or incomplete. For 1 hour the Warp continues to whisper: ask the GM one yes/no question per combat round as a free action. Automatic Perils DC 18. Gain 1d4+2 Corruption regardless of the Perils result.'
  },

  /* ══════════════════════════════════════════════════════
     CHAPLAIN — BASE HOLY SPELLS (At-Will · FREE)
  ══════════════════════════════════════════════════════ */
  {
    id:'ebp_sacred_flame', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Sacred Flame', cost:0, costType:'free', damage:'1d8 radiant',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'A bolt of radiant energy descends on one creature. Make a ranged spell attack (CHA + Prof). Hit: 1d8 radiant damage (2d8 at Lv7, 3d8 at Lv14). Ignores physical cover — the Emperor\'s light cannot be blocked by obstacles.'
  },
  {
    id:'ebp_word_of_censure', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Word of Censure', cost:0, costType:'free', damage:'1d6 thunder',
    action:'Bonus Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Speak a thunderous word of divine condemnation. Target makes a CON save. Failure: 1d6 thunder damage and Deafened until end of their next turn. Daemons, heretics, and Chaos-aligned creatures have disadvantage on this save.'
  },
  {
    id:'ebp_guidance', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Guidance', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Until used or 1 min', hasPerils:false,
    desc:'Speak a word of divine encouragement. One willing ally may add a d4 to their next ability check, attack roll, or saving throw. May be granted reactively before a roll (GM discretion). Only one creature may benefit at a time.'
  },
  {
    id:'ebp_toll_the_dead', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Toll the Dead', cost:0, costType:'free', damage:'1d12 necrotic',
    action:'Action', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'Sound a toll resonating only in the target\'s mind. Target makes a WIS save. If target is below full HP: 1d12 necrotic on failure, half on success. If at full HP: 1d8 on failure. Constructs are immune; undead have disadvantage on the save.'
  },
  {
    id:'ebp_mending_prayer', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Mending Prayer', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Speak a brief prayer for a nearby conscious ally. They regain HP equal to your CHA modifier (minimum 1). May target yourself. At Level 18 (Vessel of the Emperor), also clears one condition affecting the target.'
  },
  {
    id:'ebp_righteous_fury', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Righteous Fury', cost:0, costType:'free', damage:'1d12 radiant',
    action:'Action', range:'Self', duration:'Until end of turn', hasPerils:false,
    desc:'Call upon the Emperor\'s anger to fuel your next strike. Your next melee attack this turn deals an additional 1d12 radiant damage and may push the target 5ft (no save) on a hit. At Level 11: increases to 2d12.'
  },
  {
    id:'ebp_last_rites', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Last Rites', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Speak a quick prayer over a dying ally at range. Stabilize one creature within 30ft at 0 HP — they stop making death saves. No touch required; usable while engaged in melee. At Level 9: the stabilized ally also regains 1 HP and regains consciousness.'
  },
  {
    id:'ebp_holy_light', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Holy Light', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'Self (30ft radius)', duration:'10 min', hasPerils:false,
    desc:'Radiate holy light in a 30ft radius. Undead and daemonic entities cannot benefit from invisibility and have disadvantage on Stealth checks within the area. Chaos-aligned entities beginning their turn in the light take 1 radiant damage (no save). Can be dimmed to a faint glow on your command.'
  },
  {
    id:'ebp_kneel_before_the_emperor', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Kneel Before the Emperor', cost:0, costType:'free', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Until end of next turn', hasPerils:false,
    desc:'Issue a divine command that weakens a target\'s resolve. One enemy makes a WIS save. Failure: disadvantage on their next attack roll. Critical failure (5+ below DC): also fall prone. Daemonic and Chaos-aligned creatures have disadvantage on the save.'
  },
  {
    id:'ebp_sanctify', class:'chaplain', tier:'base', tierLabel:'Base Power',
    name:'Sanctify', cost:0, costType:'free', damage:'—',
    action:'Action', range:'Touch', duration:'Until resupply', hasPerils:false,
    desc:'Sanctify one object, location (10ft cube), or willing ally. Sanctified weapons: +1 radiant damage per hit. Sanctified locations: daemons/undead must save (WIS) or be repelled. Sanctified allies: advantage on their first save of each combat. You may have up to 3 active simultaneously.'
  },

  /* ══════════════════════════════════════════════════════
     CHAPLAIN — DEVOTION I (Level 1+ · 4–5 EBP)
  ══════════════════════════════════════════════════════ */
  {
    id:'ebp_divine_smite', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Divine Smite', cost:4, costType:'EBP', damage:'2d8 radiant',
    action:'Bonus Action (on hit)', range:'Self', duration:'Instant', hasPerils:false,
    desc:'Channel the Emperor\'s wrath through your Crozius. Declare after confirming a hit — the attack deals an additional 2d8 radiant damage. Against daemons, heretics, and Chaos-aligned creatures: 3d8. Declare after seeing the attack roll but before rolling damage.'
  },
  {
    id:'ebp_bless', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Bless', cost:4, costType:'EBP', damage:'—',
    action:'Action', range:'30ft', duration:'Conc. 10 min', hasPerils:false,
    desc:'Call the Emperor\'s blessing upon up to 3 willing allies. Blessed allies add 1d4 to all attack rolls and saving throws for the duration. One target may be yourself. Visible as a faint golden shimmer — enemies will know your allies are bolstered.'
  },
  {
    id:'ebp_cure_wounds', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Cure Wounds', cost:4, costType:'EBP', damage:'—',
    action:'Action', range:'Touch', duration:'Instant', hasPerils:false,
    desc:'Lay hands on a willing or incapacitated creature and channel healing light. Target regains 2d8 + CHA modifier HP. Cannot target constructs or undead. May target yourself. At Level 11+, spending an additional 4 EBP increases healing to 4d8 + CHA modifier.'
  },
  {
    id:'ebp_shield_of_faith', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Shield of Faith', cost:4, costType:'EBP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Conc. 10 min', hasPerils:false,
    desc:'Surround one ally in a shimmering shield of divine energy. Target gains +2 to Armor Class for the duration. May target yourself. If the target is struck by a critical hit while shielded, they may reroll the damage dice and take the lower result.'
  },
  {
    id:'ebp_command', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Command', cost:4, costType:'EBP', damage:'—',
    action:'Action', range:'60ft', duration:'Until end of next turn', hasPerils:false,
    desc:'Issue a one-word divine command to a creature that can hear you. Target makes a WIS save. Failure: obeys until end of their next turn. Valid: Halt (no movement/actions), Flee (move away), Submit (fall prone), Silence (no verbal abilities), Surrender (drop weapons). Undead, constructs, charm-immune creatures resist automatically.'
  },
  {
    id:'ebp_holy_fervor', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Holy Fervor', cost:4, costType:'EBP', damage:'1d6 radiant',
    action:'Bonus Action', range:'30ft', duration:'Until end of next turn', hasPerils:false,
    desc:'Ignite one ally with divine battle-rage. Target may immediately make one additional Attack action this turn (even if they have already taken their action). Each attack deals an additional 1d6 radiant damage. Using on the same ally more than once per encounter risks 1 level of Exhaustion.'
  },
  {
    id:'ebp_battle_hymn', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Battle Hymn', cost:4, costType:'EBP', damage:'—',
    action:'Action', range:'Self (30ft radius)', duration:'Encounter', hasPerils:false,
    desc:'Sing a verse of holy battle music. All allies within 30ft gain +2 to Initiative rolls for the rest of the encounter (applied retroactively if Initiative has already been rolled). Additionally, all allies who haven\'t yet taken a turn this combat may take it immediately if they wish. Usable only in the first 2 rounds.'
  },
  {
    id:'ebp_emperor_s_grace', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Emperor\'s Grace', cost:4, costType:'EBP', damage:'—',
    action:'Reaction (ally takes damage)', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'When an ally within 60ft takes damage, reduce that damage by 2d8 + CHA modifier as a reaction. Applied after the damage roll, before resistances or immunities. Can be used once per round regardless of how many reactions you have available from other sources.'
  },
  {
    id:'ebp_thunderous_rebuke', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Thunderous Rebuke', cost:5, costType:'EBP', damage:'3d8 thunder',
    action:'Action', range:'Self (30ft cone)', duration:'Instant', hasPerils:false,
    desc:'The Emperor\'s fury manifests as a thunderclap of divine force. All enemies in a 30ft cone make a CON save. Failure: 3d8 thunder damage and pushed 15ft. Success: half, no push. Structures and light vehicles take full damage automatically. Audible within 300ft — stealth broken.'
  },
  {
    id:'ebp_searing_brand', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Searing Brand', cost:4, costType:'EBP', damage:'1d8 radiant',
    action:'Bonus Action', range:'60ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Mark a target with a brand of holy fire. Any creature attacking you or an ally within 15ft takes 1d8 radiant damage at end of the attacker\'s turn (no save). The branded creature cannot become invisible while branded. The brand glows faintly — marked targets are visible at a distance.'
  },
  {
    id:'ebp_iron_will', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Iron Will', cost:4, costType:'EBP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'1 hour', hasPerils:false,
    desc:'Fortify one ally\'s resolve against enemy attempts to disable them. The target gains immunity to one condition of your choice: Frightened, Charmed, Stunned, or Paralyzed. The chosen immunity lasts until resupply. Choose wisely — this cannot be changed once invoked.'
  },
  {
    id:'ebp_protection_from_corruption', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Protection from Corruption', cost:5, costType:'EBP', damage:'—',
    action:'Action', range:'30ft', duration:'Conc. 1 hour', hasPerils:false,
    desc:'Speak a ward against the Warp over up to 3 allies. Targets gain advantage on saves against Corruption effects, psychic damage, daemonic possession, and warp-based conditions. Daemonic and Chaos-aligned entities have disadvantage on attack rolls against warded targets. The ward is invisible but psykers sense it.'
  },
  {
    id:'ebp_consecrate_weapon', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Consecrate Weapon', cost:5, costType:'EBP', damage:'1d6 radiant + 2d6 radiant',
    action:'Bonus Action', range:'Touch', duration:'10 min', hasPerils:false,
    desc:'Consecrate one weapon with holy light. The weapon deals an additional 1d6 radiant damage per hit and counts as magical. Against daemons and Chaos-aligned creatures: 2d6 radiant. The weapon glows visibly while consecrated — stealth attacks are harder to conceal.'
  },
  {
    id:'ebp_blessed_ammunition', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Blessed Ammunition', cost:5, costType:'EBP', damage:'1d4 radiant + 1d8 radiant',
    action:'Action', range:'Touch', duration:'Until resupply', hasPerils:false,
    desc:'Consecrate one magazine or ammunition source with holy light. All ranged attacks using this ammunition deal an additional 1d4 radiant damage per hit and count as magical. Against daemons and Chaos-aligned creatures: 1d8 radiant. The ammunition glows faintly — note this when attempting stealth.'
  },
  {
    id:'ebp_penitent_s_strike', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Penitent\'s Strike', cost:4, costType:'EBP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Until end of next turn', hasPerils:false,
    desc:'Grant one ally who has taken damage this encounter the will to strike harder. For their next attack roll, they may add the total damage they have taken this combat as a bonus to damage (maximum +20). Pain transformed into purpose. Must be used before the start of your next turn.'
  },
  {
    id:'ebp_voice_of_command', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Voice of Command', cost:4, costType:'EBP', damage:'—',
    action:'Bonus Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Grant one ally their reaction immediately — even if they have already used it this round. They may use it as any reaction ability they possess, not just reactions normally available as reactions. Represents the Chaplain\'s ability to unlock split-second heroism in battle-brothers at the critical moment.'
  },
  {
    id:'ebp_martyrdom_s_resolve', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Martyrdom\'s Resolve', cost:5, costType:'EBP', damage:'—',
    action:'Reaction (ally drops to 0 HP)', range:'60ft', duration:'1 round', hasPerils:false,
    desc:'When an ally drops to exactly 0 HP (not killed outright), empower them with one final act of will. They remain standing at 0 HP, make no death saving throws, and take one full turn (action, bonus action, movement) before falling unconscious. Any action they take while on death\'s door deals maximum damage.'
  },
  {
    id:'ebp_aura_of_purity', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Aura of Purity', cost:5, costType:'EBP', damage:'—',
    action:'Action', range:'Self (15ft radius)', duration:'Conc. 10 min', hasPerils:false,
    desc:'Radiate a constant wave of purifying faith. Allies within the radius reduce their Corruption by 1 point at the end of each minute while present. Any ally gaining Corruption within the aura may immediately make a WIS save (DC 12) — success reduces the Corruption gain by 1. The aura does not suppress warp powers.'
  },
  {
    id:'ebp_holy_barrier', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Holy Barrier', cost:5, costType:'EBP', damage:'2d6 radiant',
    action:'Action', range:'60ft', duration:'Conc. 10 min', hasPerils:false,
    desc:'Create an immovable wall of divine force — up to 20ft long, 10ft high, 1ft thick. The wall has AC 18, 60 HP and provides full cover. Daemons and undead cannot pass through — it is an impassable divine barrier to them. Chaos-aligned creatures that touch the wall take 2d6 radiant damage.'
  },
  {
    id:'ebp_wrathful_sermon', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Wrathful Sermon', cost:5, costType:'EBP', damage:'2d8 thunder',
    action:'Action', range:'Self (20ft radius)', duration:'Instant', hasPerils:false,
    desc:'Deliver a devastating verse condemning your enemies. All enemies within 20ft who can hear you make WIS saves. Failure: 2d8 thunder damage (the force of divine rhetoric) and Stunned until end of their next turn. Success: half, not Stunned. Creatures that cannot understand language are immune to the Stun but take full damage.'
  },
  {
    id:'ebp_oath_of_enmity_new', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Oath of Enmity New', cost:4, costType:'EBP', damage:'—',
    action:'Bonus Action', range:'60ft', duration:'Conc. / Until slain', hasPerils:false,
    desc:'Speak a kill-oath against one visible enemy, declaring them your Oathbound Target. You have advantage on all attack rolls against that creature. When any ally slays the marked target, you may immediately speak a new Oath as a free action (no EBP cost). Only one target may be marked at a time — marking a new one ends the previous oath.'
  },
  {
    id:'ebp_death_mask_new', class:'chaplain', tier:'dev1', tierLabel:'Devotion I',
    name:'Death Mask New', cost:5, costType:'EBP', damage:'—',
    action:'Reaction (enemy drops ally to 0 HP)', range:'60ft', duration:'1 min', hasPerils:false,
    desc:'When a creature within 60ft reduces an ally to 0 HP, invoke a mask of divine wrath as a reaction. The creature makes a WIS save. Failure: Frightened of you for 1 minute and must spend its first turn moving directly away from you. Failure by 5+ or more: also Stunned until end of its next turn. They will know what they have done.'
  },

  /* ══════════════════════════════════════════════════════
     CHAPLAIN — DEVOTION II (Level 7+ · 8–12 EBP)
  ══════════════════════════════════════════════════════ */
  {
    id:'ebp_spiritual_crusader', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Spiritual Crusader', cost:8, costType:'EBP', damage:'2d8+4 radiant',
    action:'Bonus Action', range:'60ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Summon a ghostly warrior clad in ancient Chapter armor — a spirit from the Chapter\'s storied past. Appears in any unoccupied space within 60ft. Has AC 16, 40 HP. On each of your turns (bonus action): makes one melee attack for 2d8+4 radiant damage. Immune to psychic damage and conditions. Vanishes at 0 HP or if concentration breaks.'
  },
  {
    id:'ebp_silence_the_warp', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Silence the Warp', cost:8, costType:'EBP', damage:'—',
    action:'Action', range:'60ft (20ft radius)', duration:'Conc. 10 min', hasPerils:false,
    desc:'Create a zone of holy silence crushing psychic energies. Within the radius, no spells can be cast and no Warp Powers manifested. Daemons/warp entities have disadvantage on all attacks and saves. This affects all psychic abilities regardless of source — including allied psykers. Plan accordingly. Visible as a golden dome.'
  },
  {
    id:'ebp_hold_the_line', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Hold the Line', cost:8, costType:'EBP', damage:'—',
    action:'Action', range:'Self (20ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'The Emperor\'s will holds the ground. Any hostile creature attempting to enter the 20ft radius makes a STR save. Failure: movement ends at the boundary. Creatures within when activated must save to move out — failure means speed 0 for that turn. Creatures may reattempt at start of each turn.'
  },
  {
    id:'ebp_beacon_of_faith', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Beacon of Faith', cost:8, costType:'EBP', damage:'2d6 radiant',
    action:'Bonus Action', range:'Self (30ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Illuminate the area with divine light. All healing effects within 30ft (from any source) are maximized. Allies within gain immunity to Frightened. Daemons within take 2d6 radiant damage at start of each of their turns (no save). Bright as daylight while active.'
  },
  {
    id:'ebp_mass_cure_wounds', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Mass Cure Wounds', cost:10, costType:'EBP', damage:'—',
    action:'Action', range:'Self (30ft radius)', duration:'Instant', hasPerils:false,
    desc:'Spread the Emperor\'s healing through all who stand with you. All allies within 30ft regain 2d8 + CHA modifier HP. If Beacon of Faith is active, each ally instead regains maximum possible HP (16 + CHA modifier). Cannot be combined with single-target Cure Wounds on the same turn.'
  },
  {
    id:'ebp_flame_of_purity', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Flame of Purity', cost:10, costType:'EBP', damage:'4d8 radiant',
    action:'Action', range:'Self (60ft cone)', duration:'Instant', hasPerils:false,
    desc:'Channel the Emperor\'s purifying flame. All enemies in a 60ft cone make a DEX save. Failure: 4d8 radiant damage. Success: half. The flame ignores all physical cover — it is divine. Heretics, daemons, and Chaos-aligned creatures have disadvantage on the save and take an additional 1d8 on failure.'
  },
  {
    id:'ebp_divine_mantle', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Divine Mantle', cost:10, costType:'EBP', damage:'1d6 radiant',
    action:'Action', range:'Self (20ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Cloak your allies in holy radiance. All allies within 20ft deal an additional 1d6 radiant damage on every melee hit. Enemies striking allies within the mantle make a CON save (DC = Holy Power Save DC) or are Blinded until end of their next turn. Visible as a golden aura around each ally.'
  },
  {
    id:'ebp_rite_of_exorcism', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Rite of Exorcism', cost:12, costType:'EBP', damage:'4d10 radiant',
    action:'Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Perform a focused exorcism against a daemonic, possessed, or Chaos-aligned entity. Target makes a CHA save at disadvantage. Failure: entity Banished to the Warp for 1 minute (returns to origin plane if not anchored). If the target is possessed, the possession ends — host survives at 1 HP. Success: 4d10 radiant damage.'
  },
  {
    id:'ebp_word_of_recall', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Word of Recall', cost:10, costType:'EBP', damage:'—',
    action:'Reaction (ally drops to 0 HP)', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'When an ally within 60ft drops to 0 HP, speak a word of protective power. They are teleported to within 5ft of you, stabilized at 0 HP, and cannot take further damage until start of your next turn. You then have your action to administer aid or continue fighting.'
  },
  {
    id:'ebp_war_sermon', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'War Sermon', cost:8, costType:'EBP', damage:'—',
    action:'Action', range:'Self (30ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Deliver an ongoing sermon of divine warfare. While preaching you cannot use other bonus actions. Ally bonus scales with numbers present: 1–2 allies: +1d4 damage. 3–4 allies: +1d6 damage. 5+ allies: +1d8 damage and advantage on saving throws. Your highest expression of battlefield leadership.'
  },
  {
    id:'ebp_consecrated_ground', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Consecrated Ground', cost:8, costType:'EBP', damage:'—',
    action:'Action', range:'60ft (20ft radius)', duration:'1 hour', hasPerils:false,
    desc:'Consecrate the ground in a 20ft radius. Within: all healing increased by 1d6, allies have advantage on saves against fear and Corruption, and enemies must make WIS saves to enter (failure: movement ends at boundary). Daemons and undead cannot enter at all — it is an absolute divine barrier to them.'
  },
  {
    id:'ebp_absolution', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Absolution', cost:8, costType:'EBP', damage:'—',
    action:'Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Perform a rite of cleansing absolution on one willing ally. Reduce the target\'s Corruption score by 1d4. The Chaplain\'s unique ability to address the soul directly — not just the body. At Level 14+, this reduces Corruption by 2d4 instead. The most direct spiritual healing available in combat.'
  },
  {
    id:'ebp_crusading_charge', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Crusading Charge', cost:8, costType:'EBP', damage:'—',
    action:'Action', range:'Self (30ft radius)', duration:'Instant', hasPerils:false,
    desc:'Bellow a war cry and lead a charge in the Emperor\'s name. All allies within 30ft may immediately move up to their full movement speed toward any enemy they can see (no opportunity attacks provoked). If they end adjacent to an enemy, they make one additional melee attack. This happens before your own action this turn.'
  },
  {
    id:'ebp_inquisitor_s_eye', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Inquisitor\'s Eye', cost:10, costType:'EBP', damage:'—',
    action:'Action', range:'30ft', duration:'10 min', hasPerils:false,
    desc:'Call upon the Emperor\'s discernment. For the duration: detect lies (speakers make CHA saves or you know they\'re lying), heresy (Chaos-aligned creatures glow faintly to your eyes), and hidden threats (automatic Perception checks vs all hidden creatures within 30ft). You cannot be deceived by illusions while active.'
  },
  {
    id:'ebp_unbreakable', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Unbreakable', cost:10, costType:'EBP', damage:'—',
    action:'Reaction (on lethal hit to ally)', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'When an ally within 60ft would be killed (reduced to 0 HP by damage that would kill them outright), declare them Unbreakable. The killing blow is reduced to leave them at exactly 1 HP — they survive. Usable once per ally per resupply. The Unbreakable warrior gains +2 to all rolls for 1 round, driven by survival instinct and faith.'
  },
  {
    id:'ebp_chains_of_penance', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Chains of Penance', cost:10, costType:'EBP', damage:'2d6 radiant',
    action:'Action', range:'60ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Bind an enemy in divine chains of radiant energy. Target makes a STR save. Failure: Restrained and takes 2d6 radiant damage at start of each of their turns. Cannot teleport or use warp movement while chained. STR save each turn to break free. Daemons have disadvantage on the save. Success: 2d6 damage only.'
  },
  {
    id:'ebp_holy_sundering', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Holy Sundering', cost:12, costType:'EBP', damage:'—',
    action:'Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Project the Emperor\'s authority to unmake heretical magic. Choose one: destroy one non-artifact magic item on an enemy (CHA save to resist), dispel all ongoing effects on a target, or destroy one summoned creature outright (CON save — fail: instant death, success: 8d10 radiant). Cannot affect items or effects of Imperial or divine origin.'
  },
  {
    id:'ebp_last_sacrament', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Last Sacrament', cost:10, costType:'EBP', damage:'—',
    action:'Action', range:'30ft', duration:'Until end of next turn', hasPerils:false,
    desc:'Perform a swift sacrament over a critically wounded ally (at 25% HP or less). They are healed to full HP and become temporarily invulnerable — cannot be reduced below 1 HP by any means. When the invulnerability ends, they gain 2 levels of Exhaustion. The body cannot sustain such grace without cost. A desperate measure.'
  },
  {
    id:'ebp_fortress_of_faith', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Fortress of Faith', cost:10, costType:'EBP', damage:'—',
    action:'Action', range:'Self (20ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Project an aura of divine protection. All allies within 20ft gain resistance to all damage types for the duration. The aura is visible as a shimmering golden field — enemies know their attacks are reduced. Moving outside the radius ends the resistance immediately. The aura moves with you, always centered on your position.'
  },
  {
    id:'ebp_rites_of_battle_new', class:'chaplain', tier:'dev2', tierLabel:'Devotion II',
    name:'Rites of Battle New', cost:8, costType:'EBP', damage:'—',
    action:'Action', range:'Self (30ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Perform a sweeping blessing over the entire kill team before battle is joined. All allies within 30ft gain +1 to attack and damage rolls for the duration. Additionally, they may reroll any 1s rolled on attack dice once per attack, taking the new result. Does not stack with Bless\'s d4 bonus — but both effects may be active simultaneously on the same target.'
  },

  /* ══════════════════════════════════════════════════════
     CHAPLAIN — DEVOTION III (Level 13+ · 12–16 EBP)
  ══════════════════════════════════════════════════════ */
  {
    id:'ebp_holy_aegis', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Holy Aegis', cost:12, costType:'EBP', damage:'—',
    action:'Action', range:'Self (30ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Surround your kill team with an impenetrable holy barrier. All allies within 30ft gain immunity to psychic damage and advantage on all saves against Corruption effects. Warp-based effects targeting shielded allies automatically fail unless the caster succeeds on a CHA check vs your Holy Power Save DC. Visible as a golden dome of repelled warp energy.'
  },
  {
    id:'ebp_emperor_s_benediction', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Emperor\'s Benediction', cost:12, costType:'EBP', damage:'—',
    action:'Action', range:'30ft', duration:'Instant', hasPerils:false,
    desc:'Invoke the Emperor\'s mercy upon a fallen ally. One creature within 30ft dead for no more than 1 minute is revived with HP equal to half their maximum. All conditions cleared; 2 levels of Exhaustion. Cannot revive creatures whose bodies are destroyed, consumed by the Warp, or claimed by Chaos.'
  },
  {
    id:'ebp_divine_retribution', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Divine Retribution', cost:14, costType:'EBP', damage:'2d8 radiant + 4d8 radiant',
    action:'Action', range:'Self (20ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Any creature attacking an ally within 20ft takes 2d8 radiant damage after the attack resolves (no save). If the attack would reduce an ally to 0 HP, the attacker takes 4d8 radiant damage instead of 2d8. Each triggering attack generates a visible bolt of golden energy striking back at the attacker.'
  },
  {
    id:'ebp_the_throne_s_judgment', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'The Throne\'s Judgment', cost:14, costType:'EBP', damage:'10d10 radiant',
    action:'Action', range:'90ft', duration:'Instant', hasPerils:false,
    desc:'Pass divine judgment on a single creature. Target makes a CON save. Failure: 10d10 radiant damage. Success: 5d10. If this reduces the target to 0 HP, they are instantly and irreversibly slain — no death saves, no revival. The Emperor has spoken. Cannot be used on Imperium-aligned or Light-aligned creatures.'
  },
  {
    id:'ebp_litany_of_sacrifice', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Litany of Sacrifice', cost:14, costType:'EBP', damage:'—',
    action:'Reaction (ally would die)', range:'60ft', duration:'Instant', hasPerils:false,
    desc:'When an ally within 60ft would be reduced to 0 HP, invoke this desperate prayer. The damage is redirected to you — your ally drops to 1 HP; you take the full amount. Make a CON save (DC 15) — success: halve the redirected damage. Failure: take it all. Faith demands sacrifice.'
  },
  {
    id:'ebp_mass_banishment', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Mass Banishment', cost:14, costType:'EBP', damage:'6d10 radiant',
    action:'Action', range:'Self (60ft radius)', duration:'1 min (or permanent)', hasPerils:false,
    desc:'Speak the Great Litany of Banishment. All daemons, warp entities, and Chaos-aligned creatures within 60ft make a CHA save. Failure: Banished to the Warp immediately. Maintained for 1 full minute (concentration): banishment becomes permanent — the entity cannot return here for 100 years. Success: 6d10 radiant damage instead.'
  },
  {
    id:'ebp_resurrection_rite', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Resurrection Rite', cost:12, costType:'EBP', damage:'—',
    action:'Action', range:'Touch', duration:'Instant', hasPerils:false,
    desc:'Perform the full Rites of Resurrection over a fallen warrior dead for no more than 1 hour. Target is revived with full HP. Returns with all conditions cleared, 1 level of Exhaustion, and filled with certainty of the Emperor\'s will — advantage on all rolls for 1 minute. Cannot revive Chaos-tainted creatures or those claimed by the Warp.'
  },
  {
    id:'ebp_sanctuary', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Sanctuary', cost:14, costType:'EBP', damage:'4d10 radiant',
    action:'Action', range:'30ft (30ft radius)', duration:'Conc. 10 min', hasPerils:false,
    desc:'Create a 30ft radius zone of complete divine protection. No enemy may enter voluntarily — they make WIS saves or their movement ends at the threshold. Enemies forced into the sanctuary take 4d10 radiant damage upon entry. Allies within gain advantage on all saving throws. Visible as a golden dome.'
  },
  {
    id:'ebp_crusade_of_faith', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Crusade of Faith', cost:14, costType:'EBP', damage:'—',
    action:'Action', range:'Self (30ft radius)', duration:'1 round', hasPerils:false,
    desc:'Unleash a surge of holy power driving your allies beyond mortal limits. All allies within 30ft immediately gain one additional full turn — action, bonus action, reaction, movement — taken immediately after your turn ends. After these bonus turns complete, affected allies gain 1 level of Exhaustion.'
  },
  {
    id:'ebp_emperor_s_hand', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Emperor\'s Hand', cost:14, costType:'EBP', damage:'+3d8 radiant',
    action:'Bonus Action', range:'30ft', duration:'1 min', hasPerils:false,
    desc:'Channel the Emperor\'s physical might directly into one ally. For 1 minute: their STR becomes 24, weapon attacks deal +3d8 radiant damage, they cannot be moved against their will, and they are immune to Stunned and Paralyzed. When the effect ends: 2 levels of Exhaustion and Stunned until end of their next turn.'
  },
  {
    id:'ebp_wrath_of_the_emperor', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Wrath of the Emperor', cost:16, costType:'EBP', damage:'8d8 radiant + 2d8 radiant',
    action:'Action', range:'120ft (10ft radius column)', duration:'Instant', hasPerils:false,
    desc:'Call down a pillar of holy fire — 10ft radius, 40ft tall. All within make a DEX save. Failure: 8d8 radiant damage. Success: half. Heretics and daemons fail the save automatically and take an additional 2d8 radiant at start of their next turn. Visible from miles away. ✠ The Emperor\'s wrath made manifest'
  },
  {
    id:'ebp_storm_of_righteousness', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Storm of Righteousness', cost:16, costType:'EBP', damage:'4d8 radiant',
    action:'Action', range:'120ft (30ft radius)', duration:'Conc. 1 min', hasPerils:false,
    desc:'Conjure an ongoing storm of divine wrath. All enemies within the area take 4d8 radiant damage at start of each of their turns (CON save for half). All allies within are healed for 1d8 HP at start of each of their turns. Move the storm\'s center up to 20ft as a free action each of your turns.'
  },
  {
    id:'ebp_voice_of_the_emperor', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Voice of the Emperor', cost:16, costType:'EBP', damage:'—',
    action:'Action', range:'Self (60ft radius)', duration:'Until end of round', hasPerils:false,
    desc:'Speak with the Emperor\'s voice — literally. All enemies within 60ft who can hear you make a WIS save. Failure: Stunned until end of their next turn as divine authority overwhelms them. Daemons and Chaos-aligned creatures have disadvantage and on failure are also Frightened for 1 minute. Creatures with INT 4 or lower are immune.'
  },
  {
    id:'ebp_the_long_watch', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'The Long Watch', cost:16, costType:'EBP', damage:'—',
    action:'Action', range:'Self (30ft radius)', duration:'1 round', hasPerils:false,
    desc:'Invoke the most protective invocation of the Chaplaincy. For 1 full round, no ally within 30ft can be killed — damage that would reduce them to 0 HP instead leaves them at 1 HP. Death saves are suspended. After the round ends, each such ally makes a CON save (DC 15) — success: stable at 1 HP. Failure: fall unconscious and begin dying.'
  },
  {
    id:'ebp_martyrdom_apotheosis', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Martyrdom Apotheosis', cost:16, costType:'EBP', damage:'—',
    action:'Bonus Action', range:'Self', duration:'Until end of next turn', hasPerils:false,
    desc:'Accept your own death to preserve your brothers. Until start of your next turn: you cannot die — any killing blow leaves you at 1 HP. Any damage dealt to any ally within 60ft may be automatically redirected to you instead (no action required). At start of your next turn if at 0 HP: Stabilized. Gain 4 levels of Exhaustion when this power ends.'
  },
  {
    id:'ebp_avatar_of_faith', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'Avatar of Faith', cost:16, costType:'EBP', damage:'+3d8 radiant',
    action:'Action', range:'Self', duration:'Conc. 1 min', hasPerils:false,
    desc:'The Emperor\'s power flows through you completely. For the duration: CHA becomes 22, all Holy Powers cost half EBP (rounded down), Crozius deals +3d8 radiant per hit, immunity to all conditions, and allies within 30ft regain 2d8 HP at start of each of your turns. When it ends: 3 levels of Exhaustion. ✠ Use only when the mission demands everything'
  },
  {
    id:'ebp_in_nomine_imperatoris', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'In Nomine Imperatoris', cost:16, costType:'EBP', damage:'8d10 radiant',
    action:'Action', range:'120ft radius', duration:'Instant', hasPerils:false,
    desc:'Speak the True Name of the Emperor\'s Wrath. Every enemy within 120ft makes a WIS save. Failure: 8d10 radiant damage, Frightened 1 minute, and Chaos-aligned creatures additionally make a CHA save or be permanently Banished from this plane. Success: half, not Frightened. Allies within 120ft regain 3d10 HP. Usable once per session — not once per resupply. ✠ The Emperor\'s final word upon the battlefield'
  },
  {
    id:'ebp_the_reckoning_new', class:'chaplain', tier:'dev3', tierLabel:'Devotion III',
    name:'The Reckoning New', cost:14, costType:'EBP', damage:'2d8 radiant',
    action:'Bonus Action', range:'60ft', duration:'Conc. 1 min', hasPerils:false,
    desc:'Name one enemy and declare them a target of the Emperor\'s Final Reckoning. For the duration: all attacks against that target deal an additional 2d8 radiant damage, the target has disadvantage on all saving throws, and it cannot retreat — any attempt to move away from any ally reduces its speed to 0 for that turn. If reduced to 0 HP while Reckoned, it cannot be revived by any means. ✠ The Emperor passes sentence. You carry it out.'
  }

];

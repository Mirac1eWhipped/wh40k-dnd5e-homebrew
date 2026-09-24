/* chapters.js — Adeptus Astartes lineage traits and the nine Chapter heritages.
   SINGLE SOURCE OF TRUTH (2026-09-24). Consumers derive their own shapes from this file:
     general_portal.html            → CHAPTERS (Lineage tab cards + modal, search index)
     deathwatch_character_sheet.html→ ASTARTES_TRAITS, CHAPTER_HERITAGE, CHAPTER_GRANTS (auto-grants, Quick Actions)
     warhammer_portal.html          → CHAPTERS_LIST (roster dropdown)
     character_builder.js           → via the sheet's derived objects
   Trait fields: name, body (HTML allowed) and, where the sheet tracks the trait in Quick Actions,
   uses {n, per}, action, atk {stat}, dice. grants = the fixed auto-grants (skills / tools / resist).
   Edit here only — the per-page copies were removed. */
const DW_ASTARTES_TRAITS = [
  {
    "badge": "Astartes",
    "name": "Ability Score Increase",
    "body": "Your Strength and Constitution scores each increase by 1. One ability score of your choice — Wisdom or Intelligence — also increases by 1."
  },
  {
    "badge": "Astartes",
    "name": "Size",
    "body": "You stand between 7 and 8 feet tall and weigh between 700 and 1,000 lbs in full armour. Your size is Medium, but you count as Large for carrying capacity, pushing, dragging, lifting, and grappling."
  },
  {
    "badge": "Astartes",
    "name": "Speed",
    "body": "Your base walking speed is 35 feet."
  },
  {
    "badge": "Astartes",
    "name": "Occulobe",
    "body": "<strong>Darkvision.</strong> You can see in dim light within 60 ft as if it were bright light, and in darkness as if it were dim light. You cannot discern colour in darkness, only shades of grey."
  },
  {
    "badge": "Astartes",
    "name": "Astartes Resilience",
    "body": "You have advantage on saving throws against disease and being poisoned, and resistance to poison damage. You can survive in a vacuum or airless environment for up to 10 minutes before suffering its effects."
  },
  {
    "badge": "Astartes",
    "name": "Transhuman Physiology",
    "body": "You recover from exhaustion twice as fast as normal creatures. A resupply requires only 2 hours rather than 8, granting the same benefits. Due to the Catalepsean node, you may also spend time on your resupply learning new skills or engaging in light activities, such as gear maintenance or creating ammunition. You require no food or water to survive, and you can breathe in toxic atmospheres and underwater without harm."
  },
  {
    "badge": "Astartes",
    "name": "Languages",
    "body": "You can speak, read, and write Low Gothic and Techna-Lingua."
  }
];

const DW_CHAPTERS = [
  {
    "id": "dark-angels",
    "name": "Dark Angels",
    "subtitle": "I Legion — The Unforgiven",
    "description": "The First Legion of Space Marines, bearers of a terrible secret known only as the Fallen. The Dark Angels hunt their wayward brethren with grim, unrelenting purpose across the stars — for to expose their shame would unmake all they have built in the Emperor's name. They fight with cold discipline and hidden fury, every victory tainted by the guilt of ages.",
    "grants": {
      "skills": [
        "deception",
        "insight"
      ]
    },
    "traits": [
      {
        "name": "Grim Resolve",
        "body": "Advantage on saving throws against fear and charm effects. You gain proficiency with the Deception and Insight skills. If you already possess those proficiencies, you gain expertise."
      },
      {
        "name": "Hunt the Fallen",
        "body": "Once per resupply, as a bonus action you mark a target in combat. You deal an additional 1d8 damage on attacks made to that creature until it dies.",
        "uses": {
          "n": 1,
          "per": "resupply"
        },
        "action": "Bonus Action"
      },
      {
        "name": "Abhor the Heretic, Purge the Xenos",
        "body": "You gain advantage on Perception and Survival checks made to find heretical creatures. You gain advantage on the first attack you make against a Chaos-tainted creature per combat. This effect can trigger on each heretical creature once."
      }
    ]
  },
  {
    "id": "space-wolves",
    "name": "Space Wolves",
    "subtitle": "VI Legion — Sons of Fenris",
    "description": "Fierce and feral warriors hailing from the frozen death-world of Fenris, the Space Wolves embody the savage spirit of the wolf. Sons of the primarch Leman Russ, they reject the rigid Codex Astartes in favour of their own warrior culture, fighting with primal ferocity and an unbreakable bond to their packmates.",
    "grants": {
      "skills": [
        "survival",
        "perception"
      ]
    },
    "traits": [
      {
        "name": "Feral Instincts",
        "body": "You gain a climbing speed equal to your movement speed. You gain proficiency in Survival and Perception checks and have advantage on initiative rolls. If you already possess those proficiencies, you gain expertise."
      },
      {
        "name": "Nordic Rage",
        "body": "Once you drop below half of your HP total, you enter a frenzied rage. You gain the following effects:\n\n• Advantage on Strength checks and Strength saving throws.\n• When you make a melee weapon attack using Strength, you gain a +3 bonus to the damage roll.\n\nThis effect lasts without consequence until 1 minute has passed. For every turn after the 1 minute has passed and the rage is still active, you gain a point of exhaustion. Once you hit 5 points of exhaustion, you go feral, attacking any and all creatures within range until an effect stops you or you are incapacitated."
      }
    ]
  },
  {
    "id": "salamanders",
    "name": "Salamanders",
    "subtitle": "XVIII Legion — Sons of Nocturne",
    "description": "Born from the volcanic death-world of Nocturne, the Salamanders are forge-masters and protectors of the weak. Among the most humane of all the Adeptus Astartes, they carry the heat of Nocturne's fires in their hearts — a fierce devotion to those they shelter beneath their blades. In battle they burn with the fury of a forge-god.",
    "grants": {
      "tools": [
        "Smith's Tools"
      ],
      "resist": [
        "Fire"
      ]
    },
    "traits": [
      {
        "name": "Forge Born",
        "body": "You gain proficiency with Smith's tools and resistance to Fire damage. If you already possess that proficiency, you gain expertise. You can also craft light bolter ammo, standard bolter ammo, and fuel canisters while deployed on missions (if the necessary resources are available)."
      },
      {
        "name": "Shield of Vulkan",
        "body": "When an ally within 10 ft is hit by an attack, you can use your reaction to impose disadvantage on the roll, representing your instinctive protection of others. This feature can be used a number of times equal to your proficiency modifier and resets on a resupply.",
        "uses": {
          "n": "pb",
          "per": "resupply"
        },
        "action": "Reaction"
      }
    ]
  },
  {
    "id": "ultramarines",
    "name": "Ultramarines",
    "subtitle": "XIII Legion — Sons of Macragge",
    "description": "The paragon Chapter of all Space Marines, the Ultramarines are the standard by which all others are measured. Sons of the primarch Roboute Guilliman, they combine tactical brilliance with ironclad discipline. From their fortress-world of Macragge they stand as a bulwark against the darkness, inspiring all who fight alongside them.",
    "grants": {
      "skills": [
        "persuasion"
      ]
    },
    "traits": [
      {
        "name": "Commanding Voice",
        "body": "You can use the Help action as a Bonus Action to grant a single ally advantage on their next attack once per turn."
      },
      {
        "name": "Son of Guilliman",
        "body": "You gain proficiency with the Persuasion skill. If you already possess those proficiencies, you gain expertise."
      },
      {
        "name": "March for Macragge",
        "body": "Once per resupply, as an action you supply all allies with a 1d6 Inspiration die that can be used on any roll until the next resupply.",
        "uses": {
          "n": 1,
          "per": "resupply"
        },
        "action": "Action"
      }
    ]
  },
  {
    "id": "blood-angels",
    "name": "Blood Angels",
    "subtitle": "IX Legion — Sons of Baal",
    "description": "Angelic in form yet cursed in soul, the Blood Angels wage war against their own terrible nature as much as the enemies of Mankind. Sons of the sanguine primarch Sanguinius, they carry the twin curses of the Red Thirst and the Black Rage. Beautiful and terrible, they are among the mightiest of all the Emperor's warriors.",
    "grants": {
      "skills": [
        "medicine"
      ]
    },
    "traits": [
      {
        "name": "The Red Thirst",
        "body": "If you have less than half of your HP total, you may use your action to perform a bite attack. If you successfully hit the target, roll 1d8 + STR. You heal for the amount of damage dealt. This feature can be used a number of times equal to your proficiency modifier and resets on a resupply.",
        "uses": {
          "n": "pb",
          "per": "resupply"
        },
        "action": "Action",
        "atk": {
          "stat": "str"
        },
        "dice": "Heals 1d8 + STR HP"
      },
      {
        "name": "The Black Rage",
        "body": "Once per resupply, when reduced to 0 HP, you stay conscious and regain 1 HP. If you successfully defeat an enemy in the following round, you gain 1d8 HP.",
        "uses": {
          "n": 1,
          "per": "resupply"
        },
        "action": "Free"
      },
      {
        "name": "Sanguinary Tradition",
        "body": "You gain proficiency with the Medicine skill. If you already possess that proficiency, you gain expertise."
      }
    ]
  },
  {
    "id": "raven-guard",
    "name": "Raven Guard",
    "subtitle": "XIX Legion — Sons of Deliverance",
    "description": "Masters of shadow, stealth, and lightning strikes, the Raven Guard excel where other Chapters would march openly. Sons of the phantom primarch Corvus Corax, they strike from darkness and vanish before the enemy can respond — surgical, efficient, and remorseless.",
    "grants": {
      "skills": [
        "stealth"
      ]
    },
    "traits": [
      {
        "name": "Shadow Masters",
        "body": "You gain proficiency with the Stealth skill. If you obtain this proficiency from a different source, such as a class or feat, you gain expertise with this skill. You gain advantage on Stealth skill checks when in dim light or darkness."
      },
      {
        "name": "Guerilla Warfare",
        "body": "You gain a climbing speed equal to your movement speed. If you attack an opponent during a surprise round, you gain an additional 1d8 damage on all attacks."
      }
    ]
  },
  {
    "id": "white-scars",
    "name": "White Scars",
    "subtitle": "V Legion — Sons of Chogoris",
    "description": "The lightning-swift horsemen of the void, the White Scars fight as the steppe riders of old — fast, ferocious, and impossible to pin down. Sons of the Khan Jaghatai, they cross the galaxy striking from unexpected angles, wheeling away before retaliation, and returning before the enemy can breathe.",
    "grants": {
      "tools": [
        "Vehicles (Land · Air)"
      ]
    },
    "traits": [
      {
        "name": "Lightning Strike",
        "body": "You gain an additional 5 ft of movement and ignore difficult terrain. After successfully making a melee attack, you can move 10 ft without provoking opportunity attacks."
      },
      {
        "name": "Warrior of Chogoris",
        "body": "You gain proficiency with Vehicles (Land and Air). If you already possess that proficiency, you gain expertise."
      },
      {
        "name": "Tribal Inheritance",
        "body": "You may treat any melee weapon as though it has the Finesse trait, provided it does not require the use of two hands and is not locked in."
      }
    ]
  },
  {
    "id": "iron-hands",
    "name": "Iron Hands",
    "subtitle": "X Legion — The Gorgon's Sons",
    "description": "Cold logic, iron will, and deep contempt for the weakness of flesh — the Iron Hands are among the most brutal and uncompromising of all the Space Marines. Sons of Ferrus Manus, they replace frail biological tissue with bionics in a constant quest for mechanical perfection, fighting with the implacable efficiency of a machine.",
    "grants": {
      "tools": [
        "Servo-arms & Mechadendrites"
      ]
    },
    "traits": [
      {
        "name": "The Flesh is Weak",
        "body": "While you are wearing Gravis or Terminator armour, bludgeoning, piercing, and slashing damage that you take from nonmagical attacks is reduced by 2."
      },
      {
        "name": "Mechadendrite Interface",
        "body": "You gain proficiency with servo-arms and mechadendrite arms. You gain a retractable mechadendrite arm that can be used to manipulate tools. You gain advantage on any skill checks that involve using tools that you are proficient with."
      }
    ]
  },
  {
    "id": "imperial-fists",
    "name": "Imperial Fists",
    "subtitle": "VII Legion — Sons of Dorn",
    "description": "Unyielding, indomitable, eternal — the Imperial Fists are the iron wall against which all assaults break. Sons of Rogal Dorn, the Praetorian of Terra, they are masters of siege craft: fortifying, defending, and withstanding punishment that would shatter lesser warriors. They do not bend. They do not retreat.",
    "grants": {
      "tools": [
        "Demolitions Kit"
      ]
    },
    "traits": [
      {
        "name": "Phalanx",
        "body": "If a creature within 10 ft of you takes damage, you can use your reaction to move 10 ft and take the attack instead. Roll 1d6. Reduce the damage you take by that amount. This feature can be used a number of times equal to your proficiency modifier and resets on a resupply.",
        "uses": {
          "n": "pb",
          "per": "resupply"
        },
        "action": "Reaction",
        "dice": "1d6"
      },
      {
        "name": "Defend the Imperium",
        "body": "You gain +1 to AC if you have not moved on your turn (excluding Terminator Armour). You cannot be forcibly moved by any effect that moves you less than 10 ft. Movement performed using the Phalanx reaction does not affect this ability."
      },
      {
        "name": "Siege Masters",
        "body": "You gain proficiency with the Demolitions Kit. If you already possess that proficiency, you gain expertise."
      }
    ]
  }
];

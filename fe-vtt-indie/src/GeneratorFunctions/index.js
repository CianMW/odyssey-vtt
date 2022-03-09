// Mission Generators START

export function randFaction() {

const factionList = [
"Order of Shadow (stay hidden)",
"Galactic Congress (maintain control)",
"Stellar Alliance (stop oppression)",
"Freetrader Syndicate (defy authority)",
"Explor-A-Corp (boldly go)",
"Species 4774 (who knows...)",
]

const selected = factionList[Math.floor(Math.random() * 6)]

return selected
}

export function randMission () {

const missionList = [
    "Destroy or Defend",
    "Deliver or Steal",
    "Capture or Escort",
    "Aid or Investigate",
    "Save or Negotiate",
    "Retrieve or Infiltrate",
]

const selected = missionList[Math.floor(Math.random() * 6)]

return selected
}

export function randObjective() {

const objectiveList = [
"Friend or Frenemy",
"Gizmo or Treasure",
"Discovery or Beasty",
"Massive Monster",
"Message or Secret",
"Space Hulk or Mech",
]

const selected = objectiveList[Math.floor(Math.random() * 6)]

return selected
}


export function randLocation() {

const locationList = [
"Planet or Deep Space",
"Station or Colony",
"Starship or Shipyard",
"Asteroid Field",
"Badlands or Nebula",
"Strange Anomaly",
]

const selected = locationList[Math.floor(Math.random() * 6)]

return selected
}

export function randLocationAspect() {

const locationAspectList = [
"Enclave (congregate)",
"Archive (contain info)",
"Fortification (protect)",
"Den (harbor danger)",
"Wonder (inspire awe)",
"Ruins (hidden things)",
]

const selected = locationAspectList[Math.floor(Math.random() * 6)]

return selected
}

export function randOpposition() {

const oppositionList = [
"Pirate or Bounty",
"Monster or Invasion",
"Friend or Rival",
"Time or Puzzle",
"Viral or Corporation",
"Environment or Law",
]

const selected = oppositionList[Math.floor(Math.random() * 6)]

return selected
}

export function randOppositionAgenda() {

const oppositionAgendaList = [
"Sow Chaos",
"Gain Wealth",
"Increase Power",
"Infest & Spread",
"Enact Revenge",
"Destroy Enemy",
]

const selected = oppositionAgendaList[Math.floor(Math.random() * 6)]

return selected
}

export function randSnag() {

const theSnagList = [
"Tough Decision or Trap",
"Creature or Enemy",
"Theft or Abduction",
"Mistaken or Manipulated",
"Countdown or Betrayal",
"Disaster or Malfunction",
]

const selected = theSnagList[Math.floor(Math.random() * 6)]

return selected
}


export function completeMissionGenerator() {

    let mission = {
        faction: randFaction(),
        mission: randMission(),
        objective: randObjective(),
        location: randLocation(),
        locationAspect: randLocationAspect(),
        opposition: randOpposition(),
        oppositionAgenda: randOppositionAgenda(),
        theSnag: randSnag()
    }

    // let mission = {
    //     faction: "",
    //     mission: "",
    //     objective: "",
    //     location: "",
    //     locationAspect: "",
    //     opposition: "",
    //     oppositionAgenda: "",
    //     theSnag: ""
    // }

    return mission

}
// Mission Generators End

// Episode Events Generation START


export function randScuffle() {

    const d6 = Math.ceil(Math.random() * 6)

    if(d6 < 3 ) {
        let numberOfMinions = Math.ceil(Math.random() * 6)
        return `${numberOfMinions} x Minions (1 Gumption & 1 Harm)`
    } else if (d6 > 3 && d6 < 6) {
        let numberOfGoons = Math.ceil(Math.random() * 6)
        return `${numberOfGoons} x Goons (3 Gumption & 2 Harm)`
    } else {
        let bossGumption = (Math.ceil(Math.random() * 6) + 6)
        return `Big Baddy (${bossGumption} Gumption & 3 Harm)`
    }
}

export function randTactic() {

    const tacticList = [
    "Destroy",
    "Weaken",
    "Capture",
    "Deceive",
    "Steal",
    "Hunt",
        ]
        
        const selected = tacticList[Math.floor(Math.random() * 6)]

    return selected
}
export function randBearing() {

    const bearingList = [
       "Hostile",
       "In Peril",
       "In Need",
       "Shifty",
       "Nervous",
       "Friendly",
        ]
        
        const selected = bearingList[Math.floor(Math.random() * 6)]

    return selected
}

export function randSocial() {

    const socialList = [
        "Harbinger or Hero",
        "Guardian or Gossip",
        "Trickster or Sage",
        "Hunter or Authority",
        "Seeker or Outcast",
        "Outlaw or Shadow",
        ]
        
        const selected = socialList[Math.floor(Math.random() * 6)]

    return selected
}

export function randEncounter() {

    const encounterList = [
        "Danger (imperil)",
        "Obstacle (slow)",
        "Barrier (prevent)",
        "Passage (advance)",
        "Resource (enable)",
        "Refuge (refresh)",
        ]
        
        const selected = encounterList[Math.floor(Math.random() * 6)]

    return selected
}

export function randDifficulty() {

    const difficultyList = [
        "Overcome or Aid",
        "Rescue or Protect",
        "Endure or Choose",
        "Outwit or Restore",
        "Survive or Avoid",
        "Escape or Hinder",
        ]
        
        const selected = difficultyList[Math.floor(Math.random() * 6)]

    return selected
}

export function randFlavour() {
    const d6 = Math.ceil(Math.random() * 6)
    console.log(d6)


    if (d6 < 3) {
        console.log(d6)

        const firstFlavourList = [
            "Captured",
            "Abandoned",
            "Advanced",
            "Monolithic",
            "Endangered",
            "Treacherous",
            ]
            
            const selected = firstFlavourList[Math.floor(Math.random() * 6)]
        return selected

    } else if (d6 < 5){
        console.log(d6)

        const secondFlavourList = [
            "Protected",
            "Volatile",
            "Beautiful",
            "Deceptive",
            "Shattered",
            "Savage",
            ]
            
            const selected = secondFlavourList[Math.floor(Math.random() * 6)]
        return selected

    } else {
        console.log(d6)

        const thirdFlavourList = [
            "Exotic",
            "Fragile",
            "Civilized",
            "Hidden",
            "Active",
            "Moving",
            ]
            
        const selected = thirdFlavourList[Math.floor(Math.random() * 6)]
        return selected
    }
    
}


export function completeEvent() {

    const d6 =  Math.ceil(Math.random() * 6)
    let result = {
        name: "",
        result: "",
        flavour: ""
    }

    if (d6 === 1 ) {
        result.name = "Scuffle"
        result.result = randScuffle()
        return result
    }else if (d6 === 2 ) {
        result.name = "Scuffle"
        result.result = randScuffle()
        return
    }else if (d6 === 3 ) {
        result.name = "Scuffle"
        result.result = randScuffle()
        return
    }else if (d6 === 4 ) {
        result.name = "Scuffle"
        result.result = randScuffle()
        return
    }else if (d6 > 5 ) {
        return
    }



}


// Episode Events Generation End


// AI Generator START

export function askTheAI(setting) {
    const d20 = Math.ceil(Math.random() * 20)
    let answer 

    if (d20 > setting) {
        answer = "yes"
    } else {
        answer = "no"
    }

    const d6 = Math.ceil(Math.random() * 6)
    if(d6 < 3){
        answer = answer + " but..."
    }
    if(d6 > 4){
        answer = answer + " and..."
    }
    return answer
}
// AI Generator END



// Galactic Guidebook START
export function planetType() {
    const d6 = Math.ceil(Math.random() * 6)
    if (d6 < 3) {
        console.log(d6)

        const firstPlanetTypeList = [
            "Desert",
            "Jungle",
            "Oceanic",
            "Frozen",
            "Volcanic",
            "Junkyard",
            ]
            
        const selected = firstPlanetTypeList[Math.floor(Math.random() * 6)]
        return selected

    } else if (d6 < 5){
        console.log(d6)

        const secondPlanetTypeList = [
            "Artificial",
            "Hollow",
            "Sentient",
            "Metropolis",
            "Paradisiac",
            "Dark",
            ]
            
        const selected = secondPlanetTypeList[Math.floor(Math.random() * 6)]
        return selected

    } else {
        console.log(d6)

        const thirdPlanetTypeList = [
            "Shattered",
            "Gaseous",
            "Mountain",
            "Swamp",
            "Tropical",
            "Roll Twice",
            ]
            
        const selected = thirdPlanetTypeList[Math.floor(Math.random() * 6)]
        return selected
    }
    
}


export function planetaryPickle() {
    const d6 = Math.ceil(Math.random() * 6)
    const pickles = []
    function returnPickles() {
        if(d6 < 4) {
            return "No Pickles"
        } else if (d6 > 3 && d6 < 6) {
            return 1
        } else {
            return 2
        }
    }

    for (let i = 0; i <= returnPickles(); i++) {
        
        const pickleList = [
            "Corrupt Leadership",
            "Resource Scarcity",
            "Natural Disaster",
            "Plague or Unrest",
            "Raiders or Invaders",
            "Darkverse Incursion",
            ]
            
        const selected = pickleList[Math.floor(Math.random() * 6)]
        pickles.push(selected)
        
    }

    return pickles
}


export function speciesPrefix() {


    const d6 = Math.ceil(Math.random() * 6)
    if (d6 < 4) {
        
        const firstSpeciesPrefixList = [
            "Bork",
            "Mew",
            "Dino",
            "Geo",
            "Octo",
            "Birdo",
            ]
        const selected = firstSpeciesPrefixList[Math.floor(Math.random() * 6)]
        return selected
    } else if (d6 > 3) {
        const secondSpeciesPrefixList = [
            "Botano",
            "Xeno",
            "Merma",
            "Plushy",
            "Gorillo",
            "Robo",
            ]
        const selected = secondSpeciesPrefixList[Math.floor(Math.random() * 6)]
        return selected
    }
}
export function speciesSuffix() {

    const d6 = Math.ceil(Math.random() * 6)
    if (d6 < 4) {
        
        const firstSpeciesSuffixList = [
            "...poid",
            "...onian",
            "...saur",
            "...bot",
            "...mera",
            "...whal",
            ]
        const selected = firstSpeciesSuffixList[Math.floor(Math.random() * 6)]
        return selected
    } else if (d6 > 3) {
        const secondSpeciesSuffixList = [
            "...shroom",
            "...bear",
            "...chilla",
            "...bug",
            "...nicorn",
            "...golem",
            ]
        const selected = secondSpeciesSuffixList[Math.floor(Math.random() * 6)]
        return selected
    }
}
export function featureAspect() {

    const d6 = Math.ceil(Math.random() * 6)
    if (d6 < 3) {
        
        const firstFeatureAspectList = [
            "Stylish",
            "Dangerous",
            "Adorable",
            "Enigmatic",
            "Colossal",
            "Miniature",
            ]
        const selected = firstFeatureAspectList[Math.floor(Math.random() * 6)]
        return selected
    } else if (d6 > 2 && d6 < 5) {
        const secondFeatureAspectList = [
            "Diverse",
            "High-Tech",
            "Flamboyant",
            "Rejuvenating",
            "Floating",
            "Crystalline",
            ]
        const selected = secondFeatureAspectList[Math.floor(Math.random() * 6)]
        return selected
    } else if (d6 > 4) {
        const thirdFeatureAspectList = [
            "Legendary",
            "Dramatic",
            "Terrible",
            "Orbital",
            "Volatile",
            "Desirable",
            ]
        const selected = thirdFeatureAspectList[Math.floor(Math.random() * 6)]
        return selected
    }
}


export function featureOfInterest() {

    const d6 = Math.ceil(Math.random() * 6)
    if (d6 < 3) {
        
        const firstInterestList = [
            "Food & Drink",
            "Resorts",
            "Recreation",
            "Palaces",
            "Art & Music",
            "Wildlife",
            ]
        const selected = firstInterestList[Math.floor(Math.random() * 6)]
        return selected
    } else if (d6 > 2 && d6 < 5) {
        const secondInterestList = [
            "Plantlife",
            "Landscape",
            "Population",
            "Phenomena",
            "Architecture",
            "Technology",
            ]
        const selected = secondInterestList[Math.floor(Math.random() * 6)]
        return selected
    } else if (d6 > 4) {
        const thirdInterestList = [
            "Artifacts",
            "Ruins",
            "Monsters",
            "Markets",
            "Academies",
            "Weather",
            ]
        const selected = thirdInterestList[Math.floor(Math.random() * 6)]
        return selected
    }
}

export function planetCulture() {

    const d6 = Math.ceil(Math.random() * 6)
    const cultures = {
        cultures: [],
        status: ""
    }
    const statusList = [
        "single culture",
        "single culture",
        "single culture",
        "At peace",
        "At peace",
        "At Odds",
    ]
    const selectedStatus = Math.floor(Math.random() * 6)
    cultures.status = statusList[selectedStatus]
    let loopNum = 1
    if (selectedStatus > 3){
        loopNum = 2
    }

    for (let i = 0; i < loopNum; i++) {
    
    if (d6 < 3) {
        
        const firstCultureList = [
            "Primitive",
            "Pacifist",
            "Medieval",
            "Utopian",
            "Scientific",
            "Warrior",
            ]
        const selected = firstCultureList[Math.floor(Math.random() * 6)]
        cultures.cultures.push(selected)
    } else if (d6 > 2 && d6 < 5) {
        const secondCultureList = [
            "Outlaws",
            "Psionic",
            "Wild West",
            "Merchant",
            "Monastic",
            "Hospitality",
            ]
        const selected = secondCultureList[Math.floor(Math.random() * 6)]
        cultures.cultures.push(selected)
    } else if (d6 > 4) {
        const thirdCultureList = [
            "Steampunk",
            "Cyberpunk",
            "Xenophobic",
            "Suburbia",
            "Subterfuge",
            "Aristocratic",
            ]
        const selected = thirdCultureList[Math.floor(Math.random() * 6)]
        cultures.cultures.push(selected)

    }

}

        return cultures
}

export function completePlanet() {
    const speciesName = speciesPrefix() + speciesSuffix().split("...")[0]
    const planet = {
        planetType: planetType(),
        planetaryPickle: planetaryPickle(),
        species: speciesName,
        culture: planetCulture(),
        featureOfInterest: featureOfInterest(),
        featureAspect: featureAspect(),
    }
    return planet

}


// Galactic Guidebook END



// Star Hulks & Space Ruins START
export function randRuinType() {

    const typeList = [
        "Starship",
        "Asteroid",
        "Colony",
        "Station",
        "Caves",
        "Ruins",
        ]
        
        const selected = typeList[Math.floor(Math.random() * 6)]

    return selected
}
export function randAesthetic() {

    const aestheticList = [
        "Monolithic or High-Tech",
        "Primitive or Crystalline",
        "Fractured or Flooded",
        "Organic or Luxurious",
        "Pitch Black or Toxic",
        "Bizarre or Volatile",
        ]
        
        const selected = aestheticList[Math.floor(Math.random() * 6)]

    return selected
}
export function randPurpose() {

    const purposeList = [
        "Transporting or Powering",
        "Extracting or Venerating",
        "Computing or Strange",
        "Recreation or Guarding",
        "Creating or Learning",
        "Living or Storing",
        ]
        
        const selected = purposeList[Math.floor(Math.random() * 6)]

    return selected
}

export function randDangerLevel() {
    const dangerLevel = {
        dangerLevel: "",
        number: "",
    }
    const randD20 = Math.ceil(Math.random() * 20)
        
       if (randD20 > 14 ) {
           dangerLevel.dangerLevel = "Death Trap"
           dangerLevel.number = 15
       } else if (randD20 > 9 ) {
           dangerLevel.dangerLevel = "Perilous"
           dangerLevel.number = 10
       } else if (randD20 < 10 ) {
           dangerLevel.dangerLevel = "Milk Run"
           dangerLevel.number = 5
       }

    return dangerLevel
}

export function randDepth() {

    const randD6 = Math.ceil(Math.random() * 6)
        
       if (randD6 < 3 ) {
            return "Miniature, 3 Progress"
       } else if (randD6 < 5 ) {
            return "Sizable, 5 Progress"
       } else if (randD6 > 4){
           return "Gargantuan, 10 Progress"
       }

}
export function randLoomingThreat() {

    const threatList = [
        "Rival Team",
        "Being Hunted",
        "Structural Failure",
        "Radiation Levels",
        "Rogue AI",
        "Insanity",
        ]
        
        const selected = threatList[Math.floor(Math.random() * 6)]

    return selected
}

export function randMonsterType() {

    const monsterTypeList = [
        "Reptilian or Crustacean",
        "Cephalapoid or Slimoid",
        "Macroviral or Arachnoid",
        "Mechanoid or Insectoid",
        "Xenomorph or Beastial",
        "Silicoid or Plantoid",
        ]
        
        const selected = monsterTypeList[Math.floor(Math.random() * 6)]

    return selected
}
export function randMonsterAspect() {

    const monsterAspectList = [
        "Armored or Intelligent",
        "Toxic or Regenerating",
        "Spawning or Stealthy",
        "Artificial or Huge",
        "Fast or Phasing",
        "Ferocious or Small",
        ]
        
        const selected = monsterAspectList[Math.floor(Math.random() * 6)]

    return selected
}
export function randMonsterBearing() {

    const monsterBearingList = [
        "Hostile",
        "Hostile",
        "Hostile",
        "Hostile",
        "Confused",
        "Friendly",
        ]
        
        const selected = monsterBearingList[Math.floor(Math.random() * 6)]

    return selected
}
export function randMonsterSize() {

    const monsterSizeList = [
        "1D6 Small (1 Gumption & 1 Harm)",
        "1D6 Small (1 Gumption & 1 Harm)",
        "1D6 Small (1 Gumption & 1 Harm)",
        "1D3 Medium (3 Gumption & 2 Harm)",
        "1D3 Medium (3 Gumption & 2 Harm)",
        "Large (6+D6 Gumption & 3 Harm)",
        ]
        
        const selected = monsterSizeList[Math.floor(Math.random() * 6)]

    return selected
}
export function randMonsterHazard() {

    const monsterHazardList = [[
        "Turret",
        "Sentinel",
        "Zero-G",
        "Lasers",
        "Flames",
        "Alarm,",
    ],
[
        "Sealed",
        "Ravine",
        "Painfield",
        "Vacuum",
        "Darkness",
        "Blocked,",
    ],[
        "Forcefield",
        "Sleepy Gas",
        "Spike Ball",
        "Chompers",
        "Acid Pool",
        "Malfunction,",
    ],
]
        
        const selected = monsterHazardList[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 6)]

    return selected
}

export function randTreasure() {

    const treasureAspectList = [
        "Trapped",
        "Venerated",
        "Preserved",
        "Forgotten",
        "Unstable",
        "Phasing",
        ]
    const treasureFeatureList = [
        "Crystalline",
        "Precursor",
        "Xenomorph",
        "Dimensional",
        "Temporal",
        "Cybernetic",
        ]
    const treasureFormList = [
        "Egg",
        "Artifact",
        "Archive",
        "Weapon",
        "Technology",
        "Intelligence",
        ]
        
        const treasure = {
            aspect: treasureAspectList[Math.floor(Math.random() * 6)],
            feature: treasureFeatureList[Math.floor(Math.random() * 6)],
            Form: treasureFormList[Math.floor(Math.random() * 6)],
        }

        return treasure
}

// Star Hulks & Space Ruins END

// Starship Shenanigans START
export function randStarshipQuirks() {

    const starshipQuirks = {
        age: "",
        quirks: []
    }

    const age = Math.ceil(Math.random() * 2)
    
    if (age === 1 ){
        starshipQuirks.age = "Shiny"
    } else {
        starshipQuirks.age = "Scuffed"
    }

    for (let i = 0; i < age; i++) {
        
 
    const starshipQuirkList = [[
        "Vintage Model",
        "Smoke Trail",
        "Infamous",
        "Space Fleas",
        "No Seatbelts",
        "Finicky Gravity",
    ],
[
        "Sticky Floors",
        "Weird Paint Job",
        "Faulty Lighting",
        "Strange Sounds...",
        "Uniforms Ride Up",
        "Secondhand AI",
    ],[
        "Needs Organic Fuel",
        "Jumpy Self-Destruct",
        "Smells Of Chowder",
        "Too Many Buttons",
        "Check Engine Light",
        "Surly Sonic Showers",
    ],
]
        
    const selected = starshipQuirkList[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 6)]
    starshipQuirks.quirks.push(selected)
    }
    return starshipQuirks
}



export function randStarshipPerks() {

    const starshipPerks = {
        type: "",
        perks: []
    }

    const starshipClass = Math.ceil(Math.random() * 2)
    
    if (starshipClass === 1 ){
        starshipQuirks.type = "Economy"
    } else {
        starshipQuirks.type = "Luxury"
    }

    for (let i = 0; i < starshipClass; i++) {
        
 
    const starshipPerksList = [[
        "Bowling Alley",
        "Star Autochef",
        "Bigger On Inside",
        "Smuggler’s Hold",
        "Extensive Library",
        "Stylish Uniforms",
    ],
[
        "Zero-G Gym",
        "Comfy Chairs",
        "Holodeck",
        "Lens Flares",
        "XL Cargo Bay",
        "Party Mode",
    ],[
        "Separable Saucer",
        "Carpeted Corridors",
        "Manipulator Arm",
        "Chameleon Plating",
        "Calming Engine Hum",
        "Aftermarket Spoiler",
    ],[
        "Farscanner",
        "Omega Drive",
        "Afterburner",
        "Supercomputer",
        "Posh Quarters",
        "Ram Scoop",
    ],[
        "Medical Holo",
        "Repair Bot",
        "Plasmazooka",
        "Autopilot AI",
        "Starshielding",
        "Decoy Buoy",
    ],[
        "Gravity Tractor",
        "Tactical Droid",
        "Morphing Hull",
        "EM Torpedos",
        "Starbug",
        "Red and Blue Lasers",
    ],
]
        
    const selected = starshipPerksList[Math.floor(Math.random() * 6)][Math.floor(Math.random() * 6)]
    starshipPerks.perks.push(selected)
    }

    return starshipQuirks
}

export function randHowYouGotIt() {

    const howYouGotItList = [
        "Don't Ask...",
        "Loan Shark",
        "Card Game",
        "Eccentric Uncle",
        "Finders Keepers",
        "Fair-n-Square",
        ]
        
        const selected = howYouGotItList[Math.floor(Math.random() * 6)]

    return selected
}

// Starship Shenanigans End

// Hyperspace Hubris START
export function randDistressSignal() {
    const distressSignal = {
        type: "",
        reason: ""
    }
    const rollD6 = Math.ceil(Math.random() * 6)
    if (rollD6 < 3) {
        distressSignal.type = "It's A Trap!"
    } else {
        distressSignal.type = "Not A Trap"
    }

    const distressReasonList = [
        "Out of Fuel",
        "Damaged, Need Repairs!",
        "Halp! Under Attack!",
        "Escape Pod SOS",
        "Nothing But Debris",
        "Abandoned(?) Derelict",
        ]
        
        const selected = distressReasonList[Math.floor(Math.random() * 6)]
        distressSignal.reason = selected
    return distressSignal
}


export function randSpaceWeather() {

    const spaceWeatherList = [
        "Solar Flare (Sensors blinded)",
        "Energy Wave (Computers offline)",
        "Meteor Shower (Engines clogged)",
        "Ion Storms (Weapons backfire)",
        "Dark Matter Field (Reactor offline)",
        "Supernova (Hyperdrive disabled",
        ]
        
        const selected = spaceWeatherList[Math.floor(Math.random() * 6)]

    return selected
}
export function randAnotherShip() {

    const anotherShipList = [
        [
            "Luxury Liner",
            "Space Pirate",
            "Merchant Ship",
            "Patrol Vessel",
            "Colonist Ship",
            "Prison Convoy",
    ],[
        "Bounty Hunter",
        "Battle Cruiser",
        "Smuggler Craft",
        "Diplomatic Envoy",
        "1D6 Swarm Ships",
        "Refugee Ships",
    ]]
        
    const selected = anotherShipList[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 6)]

    return selected
}
export function randShipStatus() {

    const shipStatusList = [
        [
            "Drifting",
            "Hailing You",
            "In Battle...",
            "In Pursuit...",
            "Fleeing...",
            "Salvaging",
    ],[
        "Running Silent",
        "Docked With...",
        "Sending SOS",
        "Abandoning Ship",
        "Dumping Cargo",
        "Attacking You",
    ]]
        
    const selected = shipStatusList[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 6)]

    return selected
}
export function randSpaceCreatures() {

    const spaceCreatures = {
        demeanour: "",
        species: ""
    }
    const randD6 = Math.ceil(Math.random() * 6)

    if (randD6 < 3) {
        spaceCreatures.demeanour = "Friendly"
    } else if (randD6 < 5) {
        spaceCreatures.demeanour = "Hostile"
    } else {
        spaceCreatures.demeanour = "In Peril"
    }

    const spaceCreaturesList = [
        "Void Kraken",
        "Astro Shark",
        "Space Whales",
        "Pulsar Piranhas",
        "Galactic Turtle",
        "Stellar Jellyfish",
   ]
        
    spaceCreatures.species = spaceCreaturesList[Math.floor(Math.random() * 6)]

    return spaceCreatures
}


export function randOnboardIssues() {

    const onboardIssues = {
        level: "",
        issue: ""
    }
    const randD6 = Math.ceil(Math.random() * 6)

    if (randD6 < 3) {
        onboardIssues.level = "Major"
    } else {
        onboardIssues.level = "Minor"
    }

    const onboardIssuesList = [
        "Disagreement",
        "Stowaway",
        "Infestation",
        "Sickness",
        "Bad News",
        "Malfunction",
   ]
        
   onboardIssues.issues = onboardIssuesList[Math.floor(Math.random() * 6)]

    return onboardIssues
}
export function randStrangeEncounter() {


    const strangeEncounterList = [
        "Rogue Planet",
        "Drone Swarm Hive",
        "Stuck In Time Loop",
        "Mysterious Outpost",
        "Doppelgängers",
        "Dark Matter Comet",
   ]
        
   const selected = strangeEncounterList[Math.floor(Math.random() * 6)]

    return selected
}

// Hyperspace Hubris END

// Friends & Frenemies START

export function randNotableQuirk() {

    const notableQuirkList = [
        [
            "Formal",
            "Hums",
            "Twitchy",
            "Terse",
            "Drawl",
            "Yells",
    ],[
        "Mumbles",
        "Rambles",
        "Squeaky",
        "Prankster",
        "Awkward",
        "Narrates",
    ], [
        "Vocal Fry",
        "Know-It-All",
        "Anecdotes",
        "Perma-Smile",
        "Monotone",
        "Evil Laugh",
    ]]
        
    const selected = notableQuirkList[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 6)]

    return selected
}

export function randHelpfulForte() {

    const helpfulForteList = [
        [
            "Brave",
            "Wealthy",
            "Loyal",
            "Educated",
            "Technical",
            "Skilled",
    ], [
        "Connected",
        "Powerful",
        "Generous",
        "Sneaky",
        "Tactical",
        "Inventive",
    ]]
        
    const selected = helpfulForteList[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 6)]

    return selected
}

export function randExploitableFlaw() {

    const exploitableFlawList = [
        [
            "Greedy",
            "Naive",
            "Paranoid",
            "Cowardly",
            "Indebted",
            "Vain",
    ], [
        "Unstable",
        "Infamous",
        "Temper",
        "Imposter",
        "Addicted",
        "Spiteful",
    ]]
        
    const selected = exploitableFlawList[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 6)]

    return selected
}

export function randGoal() {

    const goalList = 
        [
            "Give or Seek",
            "Help or Hinder",
            "Create or Destroy",
            "Hide or Reveal",
            "Save or Escape",
            "Achieve or Defeat",
    ]
        
    const selected = goalList[Math.floor(Math.random() * 6)]

    return selected
}

export function randObject() {

    const objectList = 
        [
            "Knowledge or Love",
            "Power or Justice",
            "Friend or Enemy",
            "Fortune or Object",
            "Secret or Obligation",
            "Peace or Conflict",
    ]
        
    const selected = objectList[Math.floor(Math.random() * 6)]

    return selected
}

export function randSecret() {

    const secretList = 
        [
            "Identity",
            "Agenda",
            "Information",
            "Ability",
            "History",
            "Resources",
    ]
        
    const selected = secretList[Math.floor(Math.random() * 6)]

    return selected
}



export function randDemeanour() {

    const demeanourList = [
        [
            "Show-off",
            "Confused",
            "Nervous",
            "Serene",
            "Arrogant",
            "Carefree",
        ],
        [
            "Logical",
            "Intense",
            "Bleak",
            "Wild",
            "Irritable",
            "Positive",
    ], [
        "Charming",
        "Suspicious",
        "Distracted",
        "Sarcastic",
        "Confident",
        "Menacing",
    ]]
        
    const selected = demeanourList[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 6)]

    return selected
}



// Friends & Frenemies END

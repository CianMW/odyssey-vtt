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
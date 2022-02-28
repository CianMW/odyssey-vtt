// Mission Generators START

function randFaction() {

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

function randMission () {

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

function randObjective() {

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


function randLocation() {

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

function randLocationAspect() {

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
function randOpposition() {

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

function randOppositionAgenda() {

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
function randSnag() {

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


function completeMissionGenerator() {

    let mission = {
        
    }

}
// Mission Generators End
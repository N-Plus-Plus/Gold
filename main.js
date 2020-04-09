var gameData = {
    tickTimer: 1000,
    increment: 1.25,
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    goldPerMinerCost: 500,
    goldPerMotivatorCost: 10000,
    goldPerBossesCost: 100000,
    goldPerInvestorCost: 500000,
    goldPerStrategistCost: 1000000,
    pickaxeLevel: 1,
    miners: 0,
    motivators: 0,
    motivation: 1, 
    bosses: 0,
    bossing: 1,
    investors: 0,
    interest: 0.00001,
    strategists: 0,
    strategicBenefit: 0.00001,
    showPickaxe: 0,
    showMiners: 0,
    showMotivators: 0,
    showBosses: 0,
    showStrategists: 0,
  }

function cheat() {
    gameData.gold += 10000000
}
  

function mineGold() {
    gameData.gold += gameData.goldPerClick;
    document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Owned"
    showButtons()
    togglePickaxe()
    toggleMiner()
    toggleMotivator()
    toggleBosses()
    toggleInvestors()
    toggleStrategist()
  }

  function minersMining() {
    gameData.gold += ( gameData.goldPerClick * gameData.miners * gameData.motivation * gameData.bossing );
    document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Owned"
    showButtons()
    togglePickaxe()
    toggleMiner()
    toggleMotivator()
    toggleBosses()
    toggleInvestors()
    toggleStrategist()
  }


  function investorsInvesting() {
    gameData.gold *= ( 1 + gameData.interest * gameData.investors * ( 1 + gameData.strategicBenefit ) )
    gameData.interest = ( 1 - ( 1 - gameData.interest ) * ( 1 - gameData.strategicBenefit * gameData.strategists ) )
  }

  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick += 1
      gameData.goldPerClickCost *= gameData.increment
      gameData.pickaxeLevel += 1
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe - " + Math.floor(gameData.goldPerClickCost) + " Gold (increases Gold per click)"
      document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Owned"
      togglePickaxe()
    }
  }

  function hireMiner() {
    if (gameData.gold >= gameData.goldPerMinerCost) {
      gameData.gold -= gameData.goldPerMinerCost
      gameData.goldPerMinerCost *= gameData.increment
      gameData.miners += 1
      document.getElementById("miners").innerHTML = gameData.miners + " miners mining..."
      document.getElementById("perMinerUpgrade").innerHTML = "Hire Miner - " + Math.floor(gameData.goldPerMinerCost) + " Gold (increases clicks per second)"
      document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Owned"
      toggleMiner()
      }
  }

  function hireMotivator() {
    if (gameData.gold >= gameData.goldPerMotivatorCost) {
      gameData.gold -= gameData.goldPerMinerCost
      gameData.goldPerMotivatorCost *= ( gameData.increment * 1.05 )
      gameData.motivators += 1
      gameData.motivation *= gameData.increment
      document.getElementById("motivators").innerHTML = gameData.motivators + " whippers whipping..."
      document.getElementById("perMotivatorUpgrade").innerHTML = "Hire Motivator - " + Math.floor(gameData.goldPerMotivatorCost) + " Gold (increases miner's output)"
      document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Owned"
      toggleMotivator()
      }
  }


  function hireBoss() {
    if (gameData.gold >= gameData.goldPerBossesCost) {
      gameData.gold -= gameData.goldPerBossesCost
      gameData.goldPerBossesCost *= gameData.increment
      gameData.increment = ( ( gameData.increment - 1 ) * 0.95 +1 )
      gameData.bosses += 1
      document.getElementById("bosses").innerHTML = gameData.bosses + " bosses bossing..."
      document.getElementById("perBossUpgrade").innerHTML = "Hire Boss - " + Math.floor(gameData.goldPerBossesCost) + " Gold (decreases cost scaling)"
      document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Owned"
      toggleBosses()
      }
  }


  function hireInvestor() {
    if (gameData.gold >= gameData.goldPerInvestorCost) {
      gameData.gold -= gameData.goldPerInvestorCost
      gameData.goldPerInvestorCost *= gameData.increment
      gameData.investors += 1
      document.getElementById("investors").innerHTML = gameData.investors + " investors investing..."
      document.getElementById("perInvestorUpgrade").innerHTML = "Hire Investor - " + Math.floor(gameData.goldPerInvestorCost) + " Gold (earns interest on holdings)"
      document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Owned"
      toggleInvestors()
      }
  }


  function hireStrategist() {
    if (gameData.gold >= gameData.goldPerStrategistCost) {
      gameData.gold -= gameData.goldPerStrategistCost
      gameData.goldPerStrategistCost *= gameData.increment
      gameData.strategists += 1
      document.getElementById("strategists").innerHTML = gameData.strategists + " strategists strategising..."
      document.getElementById("perStrategistUpgrade").innerHTML = "Hire Strategist - " + Math.floor(gameData.goldPerStrategistCost) + " Gold (increases investment yeild)"
      document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Owned"
      toggleStrategist()
      }
  }

  var mainGameLoop = window.setInterval(function() {
    minersMining()
    investorsInvesting()
    }, gameData.tickTimer
) 

function showButtons() {
    if( gameData.gold >= 10) gameData.showPickaxe = 1;
    if( gameData.gold >= 500) gameData.showMiners = 1;
    if( gameData.gold >= 10000) gameData.showMotivators = 1;
    if( gameData.gold >= 100000) gameData.showBosses = 1;
    if( gameData.gold >= 500000) gameData.showInvestors = 1;
    if( gameData.gold >= 1000000) gameData.showStrategists = 1;
    if( gameData.showPickaxe == 1 )
    document.getElementById("perClickUpgrade").style.visibility = "visible";
    if( gameData.showMiners == 1 )
    document.getElementById("perMinerUpgrade").style.visibility = "visible";
    if( gameData.showMotivators == 1 )
    document.getElementById("perMotivatorUpgrade").style.visibility = "visible";
    if( gameData.showBosses == 1 )
    document.getElementById("perBossUpgrade").style.visibility = "visible";
    if( gameData.showInvestors == 1 )
    document.getElementById("perInvestorUpgrade").style.visibility = "visible";
    if( gameData.showStrategists == 1 )
    document.getElementById("perStrategistUpgrade").style.visibility = "visible";
}

function togglePickaxe() {
    if( gameData.gold >= gameData.goldPerClickCost )
    document.getElementById("perClickUpgrade").disabled = false;
    else document.getElementById("perClickUpgrade").disabled = true;
}

function toggleMiner() {
    if( gameData.gold >= gameData.goldPerMinerCost )
    document.getElementById("perMinerUpgrade").disabled = false;
    else document.getElementById("perMinerUpgrade").disabled = true;
}

function toggleMotivator() {
    if( gameData.gold >= gameData.goldPerMotivatorCost )
    document.getElementById("perMotivatorUpgrade").disabled = false;
    else document.getElementById("perMotivatorUpgrade").disabled = true;
}

function toggleBosses() {
    if( gameData.gold >= gameData.goldPerBossesCost )
    document.getElementById("perBossUpgrade").disabled = false;
    else document.getElementById("perBossUpgrade").disabled = true;
}

function toggleInvestors() {
    if( gameData.gold >= gameData.goldPerInvestorCost )
    document.getElementById("perInvestorUpgrade").disabled = false;
    else document.getElementById("perInvestorUpgrade").disabled = true;
}

function toggleStrategist() {
    if( gameData.gold >= gameData.goldPerStrategistCost )
    document.getElementById("perStrategistUpgrade").disabled = false;
    else document.getElementById("perStrategistUpgrade").disabled = true;
}

 var mainGameLoop = window.setInterval(function() 
   {  if (gameData.automation == 1 )
     { mineGold()
   , 1000 } }
 )
     
  

 var saveGameLoop = window.setInterval(function() {
   localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
 }, 15000)

 var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
   if (savegame !== null) {
   gameData = savegame
   }

function hardReset() {
   localStorage.setItem("goldMinerSave", JSON.stringify())
   location.reload();
}
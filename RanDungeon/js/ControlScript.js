// STRING ARRAYS / VARIABLES ---------------------------------------------------------------

var newLine = "<br>";

var tileWall = '<img src="Images/Wall.png">';
var tilePlayer = '<img src="Images/Player.png">';

var tileFloorMain = '<img src="Images/Floor-Empty.png">';

var tileLoot = '<img src="Images/LootTile1.png">';

var tileFloorEmptys = [
	'<img src="Images/Floor-Empty2.png">',
	'<img src="Images/Floor-Empty3.png">',
	'<img src="Images/Floor-Empty4.png">',
	'<img src="Images/Floor-Empty5.png">',
	'<img src="Images/Floor-Empty6.png">'
]

var tileMobs = [
	'<img src="Images/Mob1.png">',
	'<img src="Images/Mob2.png">',
	'<img src="Images/Mob3.png">',
	'<img src="Images/Mob4.png">',
	'<img src="Images/Mob5.png">'
]

var roomInfo = [
	"A foul smell invades your nostrils, the room radiates evil.",
	"Nothing of interest resides within this room.",
	"This room hums with the ancient screams of the dead.",
	"A strange moss grows on all surfaces within this room.",
	"This room is filled with strange carvings from a lost culture.",
	"The bones of a lost explorer lie upon the floor.",
	"A feeling of foreboding falls upon you.",
	"A dark depression falls upon you, you consider giving up.",
	"On entering, you sink into a deep sleep, waking hours later.",
	"A dark entity can be felt in this room.",
	"This room is filled with shadows. Within them something stirs.",
	"This room is calm, nothing but stone and wood.",
	"You burst through the door, ready for battle!",
	"You ready your weapons, turning to face whatever foe you might find.",
	"What's your next move?",
	"You take a moment to survey your surroundings.",
	"You pause, taking in every detail before planning your next move.",
	"Every wall of this room is covered in blood stains.",
	"The smell of death lies heavy in the air.",
	"You have a strange sensation that a powerful evil lies near.",
	"Many enemies lie in wait, tread carefully."
];

var questStart = [
	"An old man approaches you from the gloom." + newLine + "He whispers in your ear about a lost treasure and being unable to continue on without it. He's hard to understand but you think he wants to come with you and look for something." + newLine + newLine + "After taking some time to talk to the man, you come to realise that he's looking for his lost "
];

var questSuccess = [
	"Hidden amongst a pile of objects likely stolen by a mob you find the old man's missing "
];

var questFails = [
	"You get excited when you see what appears to be treasure in the corner of the room." + newLine + newLine + "On closer inspection however, you realise it's simply a pile of broken furniture"
];

var questItems = [
	"creeper plushie",
	"magic ring",
	"medication",
	"magic bar of soap",
	"golden monkey statue"
]

var mobNamesF = [
	"Barry",
	"Geoff",
	"Bob",
	"Terry",
	"Francis",
	"Jessica",
	"Samantha",
	"Jo",
	"Joe",
	"Peter",
	"Tyson",
	"Craig",
	"Bartholomew",
	"Arnold",
	"Bingle",
	"Boofhead",
	"Anselm",
	"Anthony",
	"Edgar",
	"Elijah",
	"Duke",
	"Eugene",
	"Ferdinand",
	"Harvey",
	"Jonathan",
	"Lamont",
	"Montgomery",
	"Ragnok",
	"Nagrok",
	"Pagpok",
	"Seymor",
	"Hank",
	"Arin",
	"Ashia",
	"Ariel",
	"Catlin",
	"Another Chloe",
	"Eminence",
	"Zetzi",
	"Chloe",
	"Cherish",
	"Izidora",
	"Isabel",
	"Ingrid",
	"Shyla",
	"Suki",
	"Tamra",
	"Zali",
];

var mobNamesL = [
	"The Goblin",
	"The Scrawny",
	"The Bean",
	"Smith",
	"The Guy Who Just Got Here",
	"Jones",
	"The Bandit",
	"The Frog Lord",
	"McDoogleflorg",
	"The Sheep Whisperer",
	"The Goldfish Whisperer",
	"Bond",
	"Defender Of Goblinkind",
	"Von Klousunpants",
	"Danger",
	"The Blind",
	"The Stinky",
	"The Flamable",
	"The Heavy Metal Fan",
	"The Born Again Christian",
	"The Walrus"
];

var artifactOwners = [
	"John's ",
	"Danny's ",
	"Buffalo Hide ",
	"Flaming ",
	"Iced ",
	"Slightly Stinky ",
	"Sugar Coated ",
	"Leather ",
	"Paper Mache ",
	"Cotton ",
	"Chain Mail "
]

var artifactNames = [
	"Headband of ",
	"Wristguard of ",
	"T-Shirt of ",
	"Ring of ",
	"Boots of ",
	"Gloves of ",
	"Scarf of ",
	"Neckbeard of ",
	"Gameboy of "
]

var playerStats = [
	"Attack",
	"Defence",
	"Endurance",
	"Perception",
	"Intelligence",
	"Luck"
]

var mobPerks = [
	"$$$",
	"ATK",
	"LUC",
	"HP+",
	"XP+"
]

var roomString = "";
var combatLogString = "";
var lootLogString = "";

var roomDescString = "";
var infoString = "";

var tempCombatLog = "TEMP";
var tempLootLog = "TEMP";

var tempInvestigateString = "";

// GAME VARIABLES: ----------------------------------------------------------

var firstRun = true;

var roomLvl = 0;

var currentNumOfMobs = 0;
var currentNumOfLoot = 0;

var currentMobs = [];
var currentLoot = [];

var currentRoom;
var currentQuest;

var playerHP = 0;
var playerMaxHP = 0;

var playerLvl = 1;
var playerName = "";

var playerSkillPoints = 0;

var playerAtk = 1;
var playerDef = 1;
var playerEnd = 1;
var playerPer = 1;
var playerInt = 1;
var playerLuc = 1;

var playerXP = 0;

var xpForNextLvl = 0;
var xpNeeded = 0;

var playerLoot = 0;

var turnCounter = 0;

var currentlyDefending = false;
var originalDef = 0;

var defTurnFinish = 0;

var playerSpawned = false;

// HTML ELEMENTS: ----------------------------------------------------

var contentFrame = document.getElementById("content");
var infoFrame = document.getElementById("infodiv");
var combatLogFrame = document.getElementById("combatlogdiv");
var lootLogFrame = document.getElementById("lootlogdiv");
var playerInfoFrame = document.getElementById("playerinfodiv");

var roomInvestigated = false;

//FIRST RUN STUFF: ----------------------------------------------------------

// Prompt the player to input a name:
playerName = prompt("Player name?");

// set roomDescString to a temp 'intro':
roomDescString = "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + newLine + newLine + "You stand outside an ancient dungeon. You have ridden long and far to be here. Tales speak of vast fortunes hidden away in the hallways and rooms contained by these aging walls. " + newLine + newLine + "Evil magic hums, heavy on the air." + newLine + newLine + "Are you bold enough to enter?" + newLine + newLine + "Will you survive?" + newLine + newLine + "Or, will you fall, like so many before you?" + newLine + newLine + "Good luck, " + playerName + "." + newLine + newLine + "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-";

// Set the initial player xp and HP values, max and current:
xpForNextLvl = xpForNextLvl + Math.ceil(playerLvl + ((playerLvl * 20) * 1.5));
xpNeeded = xpForNextLvl - playerXP;

playerMaxHP = Math.ceil(playerLvl * 20) + Math.ceil(playerEnd * 1.5);
playerHP = playerMaxHP;

// Update the html content the first time:
UpdateAll();

//GENERATE A ROOM ---------------------------------------------------------------

function GenRoom()
{
	playerSpawned = false;
	questSpawned = false;
	
	// Set the room's LVL = between half the player's lvl and the player's lvl + 10%, rounded up:
	roomLvl = getRandomInt(Math.ceil(playerLvl * 0.5), playerLvl + Math.ceil(playerLvl * 0.25));
	
	// Create new Room object - see Room() function in CUSTOM CLASSES:
	currentRoom = new Room(roomLvl);
	
	roomString = "";
	
	roomInvestigated = false;	
	
	var numOfMobs = 0;
	var numOfLoot = 0;
	
	var roomTilesX = getRandomInt(6, 20);
	var roomTilesY = getRandomInt(6, 20);
	
	for (var x = 1; x <= roomTilesX;)
	{
		for (var y = 1; y <= roomTilesY;)
		{
			if (y === (roomTilesY -1) && x === (roomTilesX - 1))
			{
				if (playerSpawned === false)
				{
					roomString = roomString + tilePlayer;
					playerSpawned = true;
				}
				else
				{
					roomString = roomString + tileFloorMain;
				}
			}
			else if (y === 1 || y === roomTilesY || x === 1 || x === roomTilesX)
			{
				roomString = roomString + tileWall;
			}
			else
			{
				var TileChance = getRandomInt(1,100);
				
				if (TileChance < 60)
				{
					if (playerSpawned === false)
					{
						var spawnPlayerChance = getRandomInt(1,5);
						
						if (spawnPlayerChance === 3)
						{
							roomString = roomString + tilePlayer;
							playerSpawned = true;
						}
						else
						{
							var emptyFloorChance = getRandomInt(1,75);
							
							if (emptyFloorChance === 10)
							{
								roomString = roomString + tileFloorEmptys[getRandomInt(0, tileFloorEmptys.length - 1)];
							}
							else
							{
								roomString = roomString + tileFloorMain;
							}
						}
					}
					else
					{
						var emptyFloorChance = getRandomInt(1,75);
							
						if (emptyFloorChance === 10)
						{
							roomString = roomString + tileFloorEmptys[getRandomInt(0, tileFloorEmptys.length - 1)];
						}
						else
						{
							roomString = roomString + tileFloorMain;
						}
					}
				}
				else if (TileChance < 85)
				{
					var spawnMobChance = getRandomInt(1,20);
					
					if (spawnMobChance === 3)
					{
						roomString = roomString + tileMobs[getRandomInt(0, tileMobs.length - 1)];
						numOfMobs++;
					}
					else
					{
						var emptyFloorChance = getRandomInt(1,75);
							
						if (emptyFloorChance === 10)
						{
							roomString = roomString + tileFloorEmptys[getRandomInt(0, tileFloorEmptys.length - 1)];
						}
						else
						{
							roomString = roomString + tileFloorMain;
						}
					}
				}
				else
				{
					var spawnLootChance = getRandomInt(1,20)
					
					if (spawnLootChance === 3)
					{
						roomString = roomString + tileLoot;
						numOfLoot++;
					}
					else
					{
						var emptyFloorChance = getRandomInt(1,75);
							
						if (emptyFloorChance === 10)
						{
							roomString = roomString + tileFloorEmptys[getRandomInt(0, tileFloorEmptys.length - 1)];
						}
						else
						{
							roomString = roomString + tileFloorMain;
						}
					}
				}
			}

			y++;
		}
		
		x++;
		roomString = roomString + newLine;
	}
	
	roomDescString = "";
	roomDescString = roomInfo[getRandomInt(0, roomInfo.length - 1)];
	
	currentNumOfLoot = numOfLoot;
	currentNumOfMobs = numOfMobs;
	
	if (currentNumOfMobs > 0)
	{
		currentMobs = [];
		
		for (var i = 0; i < currentNumOfMobs; i++)
		{
			var minMobLvl = Math.ceil(roomLvl * 0.5);
			var newMob = new Mob(getRandomInt(minMobLvl, roomLvl + Math.ceil(roomLvl * 0.1)));
			currentMobs[i] = newMob;
		}
	}
	
	if (currentNumOfLoot > 0)
	{
		currentLoot = [];
		
		for (var i = 0; i < currentNumOfLoot; i++)
		{
			var newLoot = new Loot(playerLvl);
			currentLoot[i] = newLoot;
		}
	}
	
	UpdateAll();
}

// UPDATE ALL / INFO FUNCTIONS ----------------------------------------------------------------

function UpdateAll()
{
	CheckXP();
	
	playerMaxHP = Math.ceil(playerLvl * 20) + Math.ceil(playerEnd * 1.5);
	
	infoFrame.innerHTML =  "";
	
	playerInfoFrame.innerHTML = newLine + "-= " + playerName + " =-" + newLine + newLine + "Gold - " + '<font color="DarkGoldenrod">' + playerLoot + "g" + "</font>" + newLine + newLine + '<font color="red">' + "HP " + playerHP + "</font>" + " / MAX " + playerMaxHP + newLine + newLine + "Attack: " + playerAtk + " | Defence: " + playerDef + " | Endurance: " + playerEnd + newLine + "Perception: " + playerPer + " | Intelligence: " + playerInt + " | Luck: " + playerLuc + newLine + newLine + "Player LVL: " + playerLvl + newLine + newLine + "/ CURRENT XP: " + playerXP + newLine + "/ REQ FOR LVL " + (playerLvl + 1) +": " + xpForNextLvl + newLine + "/ NEEDED: " + xpNeeded + newLine + newLine + "Skill Points: " + playerSkillPoints + " - Turn Count: " + turnCounter + newLine + "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + newLine;
	
	contentFrame.innerHTML = roomString;
	infoFrame.innerHTML = roomDescString;
	
	if (combatLogString !== tempCombatLog)
	{	
		tempCombatLog = combatLogString;
		combatLogString = "-=-=-=-=-=-=-=-=-=-=-=-=|TURN # " + turnCounter + "|=-=-=-=-=-=-=-=-=-=-=-=-" + newLine + combatLogString;
		tempCombatLog = combatLogString;
		combatLogFrame.innerHTML = combatLogString;
	}
	
	if (lootLogString !== tempLootLog)
	{
		tempLootLog = lootLogString;
		lootLogString = "-=-=-=-=-=-=-=-=-=-=-=-=|TURN # " + turnCounter + "|=-=-=-=-=-=-=-=-=-=-=-=-" + newLine + lootLogString;
		tempLootLog = lootLogString;
		lootLogFrame.innerHTML = lootLogString;
	}
}

function UpdateInfo()
{
	infoFrame.innerHTML =  "";
	infoString = "";
	
	playerInfoFrame.innerHTML = newLine + "-= " + playerName + " =-" + newLine + newLine + "Gold - " + '<font color="DarkGoldenrod">' + playerLoot + "g" + "</font>" + newLine + newLine + '<font color="red">' + "HP " + playerHP + "</font>" + " / MAX " + playerMaxHP + newLine + newLine + "Attack: " + playerAtk + " - Defence: " + playerDef + " - Endurance: " + playerEnd + newLine + "Perception: " + playerPer + " - Intelligence: " + playerInt + " - Luck: " + playerLuc + newLine + newLine + "Player LVL: " + playerLvl + newLine + newLine + "/ CURRENT XP: " + playerXP + newLine + "/ REQ FOR LVL " + (playerLvl + 1) +": " + xpForNextLvl + newLine + "/ NEEDED: " + xpNeeded + newLine + newLine + "Skill Points: " + playerSkillPoints + " - Turn Count: " + turnCounter + newLine + "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + newLine;
	
	var tempMobInfoString = "";
	
	if (currentNumOfMobs > 0)
	{
		tempMobInfoString = tempMobInfoString + newLine + "Mobs in room: " + newLine + "--------------------------------------------------------";
	
		for (var i = 0; i < currentNumOfMobs; i++)
		{
			var tempMob = currentMobs[i];
			
			if (tempMob.name !== "DEAD MOB")
			{
				tempMobInfoString = tempMobInfoString + newLine + tempMob.name + " - Lvl: " + tempMob.lvl + " - HP: " + tempMob.hp + " - Carrying: " + tempMob.lootValue + newLine;
				
				if (tempMob.perkString !== "")
				{
					tempMobInfoString = tempMobInfoString + tempMob.perkString + newLine + "--------------------------------------------------------";
				}
				else
				{
					tempMobInfoString = tempMobInfoString + "--------------------------------------------------------";
				}
			}
		}
	}
	
	infoString = tempInvestigateString + tempMobInfoString;
	infoFrame.innerHTML = infoString;
}

// BUTTON FUNCTIONS ----------------------------------------------------------------------

function Attack()
{
	if (roomInvestigated === true)
	{
		if (currentNumOfMobs > 0)
		{	
			var deadMobCounter = 0;
			
			for (var i = 0; i < currentNumOfMobs; i++)
			{
				if (currentMobs[i].name !== "DEAD MOB")
				{
					var playerMaxHit = playerLvl + playerAtk;
					var playerHit = getRandomInt(playerLvl, playerMaxHit);
					
					var critHit = Math.ceil(playerMaxHit * 1.5);
					
					var tempMob = currentMobs[i];
					
					var critHitLucTest = MobStatCheck("luc", tempMob);
					
					if (critHitLucTest === false)
					{
						combatLogString = '<font color="DarkRed">' + "You hit " + tempMob.name + " for " + playerHit + " damage!"  + "</font>" + newLine + combatLogString;
					
						tempMob.hp = tempMob.hp - playerHit;
					}
					else
					{
						combatLogString = '<font color="DarkRed">' + "You critical hit " + tempMob.name + " for " + critHit + " damage! - CRITICAL!!!"  + "</font>" + newLine + combatLogString;
						
						tempMob.hp = tempMob.hp - critHit;
					}
					
					if (tempMob.hp <= 0)
					{
						playerLoot = playerLoot + tempMob.lootValue;
						combatLogString = '<font color="RoyalBlue">' + "For your efforts, you gain " + tempMob.xpValue + " XP" + "</font>" + newLine + '<font color="Green">' + tempMob.name + " dies! " + "</font>" + newLine + combatLogString;
						lootLogString = '<font color="DarkGoldenrod">' + tempMob.name + " drops " + tempMob.lootValue + " gold." + "</font>" + newLine + lootLogString;
						tempMob.name = "DEAD MOB";
						tempMob.lootValue = 0;
						tempMob.hp = 0;
						playerXP = playerXP + tempMob.xpValue;
						
						var deadMobRoomString = roomString.replace('<img src="Images/Mob', '<img src="Images/MDead');
						roomString = deadMobRoomString;
					}
					
					MobAttack();					
					break;
				}
				else
				{
					deadMobCounter++;
				}
				
				if (deadMobCounter === currentNumOfMobs)
				{
					combatLogString = '<font color="Green">' + "All mobs in this room have been destroyed!" + "</font>" + newLine + combatLogString;
				}
			}
			
			UpdateAll();
			UpdateInfo();
		}
		else
		{
			combatLogString = "Nothing to attack!" + newLine + combatLogString;
			
			UpdateAll();
			UpdateInfo();
		}
	}
	else
	{
		combatLogString = "You can't see anything to attack." + newLine + combatLogString;
		UpdateAll();
	}
}

function Defend()
{
	if (roomInvestigated === true)
	{
		if (currentlyDefending === false)
		{
			currentlyDefending = true;
			
			var tempTurnAmt = getRandomInt(Math.ceil(playerLvl * 0.1), playerLvl + playerDef) + 1;
			defTurnFinish = turnCounter + tempTurnAmt;
			
			var tempDefAmt = getRandomInt(Math.ceil(playerLvl * 0.1), playerLvl + playerDef + 2);
			originalDef = playerDef;
			playerDef = playerDef + tempDefAmt;
			
			combatLogString = "You defend, boosting your defence rating by " + tempDefAmt + newLine + "For the next " + (tempTurnAmt - 1) + " turns." + newLine + combatLogString;
			
			UpdateAll();
			
			if (roomInvestigated === true)
			{
				UpdateInfo();
			}
			
			MobAttack();
		}
		else
		{
			combatLogString = "Already defending!" + newLine + combatLogString;
			
			UpdateAll();
			
			if (roomInvestigated === true)
			{
				UpdateInfo();
			}
		}
	}
	else
	{
		combatLogString = "Can't see anything to defend against." + newLine + combatLogString;
		
		UpdateAll();
			
		if (roomInvestigated === true)
		{
			UpdateInfo();
		}
	}
}

function Investigate()
{
	if (roomInvestigated === false && playerSpawned === true)
	{
		roomInvestigated = true;
		
		var investigateRoomPerCheck = RoomStatCheck("per", currentRoom);
		
		if (investigateRoomPerCheck === true)
		{
			lootLogString = "You fully explore this room, finding all it contains." + newLine + lootLogString;
			
			tempInvestigateString =  roomDescString + newLine + newLine + "In this room, you see " + currentNumOfMobs + " monsters and " + currentNumOfLoot + " piles of loot." + newLine + "This room appears to be a LVL " + roomLvl + newLine;
		}
		else
		{
			lootLogString = "You explore but feel that some secrets have been missed." + newLine + lootLogString;
			
			tempInvestigateString =  roomDescString + newLine + newLine + "In this room, you see " + currentNumOfMobs + " monsters and " + currentNumOfLoot + " piles of loot." + newLine + "This room appears to be a LVL " + roomLvl + newLine;
		}
		
		TurnCount();
		UpdateAll();
		UpdateInfo();
	}
}

function GatherLoot()
{
	if (roomInvestigated === true)
	{
		if (currentNumOfLoot > 0)
		{
			var lootedCounter = 0;
			
			for (var i = 0; i < currentNumOfLoot; i++)
			{
				var tempLoot = currentLoot[i];
				
				if (tempLoot.looted === false)
				{
					var noLootRoomString = roomString.replace('<img src="Images/LootTile', '<img src="Images/LGone');
					roomString = noLootRoomString;
					
					if (tempLoot.type === "Gold")
					{
						lootLogString = '<font color="DarkGoldenrod">' + "You find " + tempLoot.value + "g." + "</font>" + newLine + lootLogString;
						playerLoot = playerLoot + tempLoot.value;
						tempLoot.looted = true;
						
						MobAttack();
						break;
					}
					else if (tempLoot.type === "Health")
					{
						lootLogString = '<font color="Green">' + "You find a health potion which restores " + tempLoot.value + " HP." + "</font>" + newLine + lootLogString;
						playerHP = playerHP + tempLoot.value;
						
						if (playerHP > playerMaxHP)
						{
							playerHP = playerMaxHP;
						}
						
						tempLoot.looted = true;
						
						MobAttack();
						break;
					}
					else if (tempLoot.type === "Artifact")
					{
						lootLogString = '<font color="Indigo">' + "Your " + tempLoot.stat + " stat has been buffed by " + tempLoot.value + "." + "</font>" + newLine +
						lootLogString;
						lootLogString = '<font color="Indigo">' + "You find " + tempLoot.name + "</font>" + newLine + lootLogString;
						
						if (tempLoot.stat === "Attack")
						{
							playerAtk = playerAtk + tempLoot.value;
						}
						else if (tempLoot.stat === "Defence")
						{
							playerDef = playerDef + tempLoot.value;
						}
						else if (tempLoot.stat === "Endurance")
						{
							playerEnd = playerEnd + tempLoot.value;
						}
						else if (tempLoot.stat === "Perception")
						{
							playerPer = playerPer + tempLoot.value;
						}
						else if (tempLoot.stat === "Intelligence")
						{
							playerInt = playerInt + tempLoot.value;
						}
						else if (tempLoot.stat === "Luck")
						{
							playerLuc = playerLuc + tempLoot.value;
						}
						
						tempLoot.looted = true;
						
						MobAttack();
						break;
					}
				}
				else
				{
					lootedCounter++;
				}
				
				if (lootedCounter === currentNumOfLoot)
				{
					lootLogString = "Nothing more to loot." + newLine + lootLogString;
			
					UpdateAll();
					
					if (roomInvestigated === true)
					{
						UpdateInfo();
					}
				}
			}
			
			UpdateAll();
			
			if (roomInvestigated === true)
			{
				UpdateInfo();
			}
		}
		else
		{
			lootLogString = "Nothing to loot." + newLine + lootLogString;
			
			UpdateAll();
			
			if (roomInvestigated === true)
			{
				UpdateInfo();
			}
		}
	}
	else
	{
		lootLogString = "Cannot see any loot." + newLine + lootLogString;
			
			UpdateAll();
			
			if (roomInvestigated === true)
			{
				UpdateInfo();
			}
	}
}

function BuyHeal()
{
	if (playerLoot >= 100 && playerHP < playerMaxHP)
	{
		playerLoot = playerLoot - 100;
	
		var teampHealMaxAmt = Math.ceil(playerMaxHP * 0.50)
		var tempHealMinAmt = Math.ceil(playerMaxHP * 0.25)
		var tempHealAmt = getRandomInt(tempHealMinAmt, teampHealMaxAmt)
		
		playerHP = playerHP + tempHealAmt;
		
		if (playerHP > playerMaxHP)
		{
			playerHP = playerMaxHP;
		}
		
		combatLogString = '<font color="Green">' + "Healed " + tempHealAmt + " hp." + "</font>" + newLine + combatLogString;
		UpdateAll();
		
		if (roomInvestigated === true)
		{
			UpdateInfo();
		}
		
		MobAttack();
	}
	else
	{
		combatLogString = "You either don't need, or can't afford healing." + newLine + combatLogString;
		UpdateAll();
		
		if (roomInvestigated === true)
		{
			UpdateInfo();
		}
	}
}

function BuyStat(stat)
{
	if (playerSkillPoints > 0)
	{
		playerSkillPoints--;
		
		if (stat === 1)
		{
			playerAtk++;
			lootLogString = "Attack upgraded." + newLine + lootLogString;
		}
		else if (stat === 2)
		{
			playerDef++;
			lootLogString = "Defence upgraded." + newLine + lootLogString;
		}
		else if (stat === 3)
		{
			playerEnd++;
			lootLogString = "Endurance upgraded." + newLine + lootLogString;
		}
		else if (stat === 4)
		{
			playerPer++;
			lootLogString = "Perception upgraded." + newLine + lootLogString;
		}
		else if (stat === 5)
		{
			playerInt++;
			lootLogString = "Intelligence upgraded." + newLine + lootLogString;
		}
		else if (stat === 6)
		{
			playerLuc++;
			lootLogString = "Luck upgraded." + newLine + lootLogString;
		}
	}
	else
	{
		lootLogString = "Cannot afford to upgrade." + newLine + lootLogString;
	}
	
	UpdateAll();
		
	if (roomInvestigated=== true)
	{
		UpdateInfo();
	}
}

function ClearLog(log)
{
	if (log === "combat")
	{
		combatLogString = "";
	}
	else if (log === "loot")
	{
		lootLogString = "";
	}
	
	UpdateAll();
	
	if (roomInvestigated === true)
	{
		UpdateInfo();
	}
	
}

// GAME FUNCTIONS -----------------------------------------------------------------------------

function MobAttack()
{
	for (var i = 0; i < currentNumOfMobs; i++)
	{
		var tempMob = currentMobs[i];
		
		if (tempMob.name !== "DEAD MOB")
		{
			var defendMobAttackDefCheck = MobStatCheck("def", tempMob);
			
			if (defendMobAttackDefCheck === true)
			{
				combatLogString = '<font color="DarkCyan">' + tempMob.name + " attacks but you avoid the attack!" + "</font>" + newLine + combatLogString;	
			}
			else
			{
				var mobHit = getRandomInt(tempMob.lvl, tempMob.lvl + tempMob.attack);
				combatLogString = '<font color="FireBrick">' + tempMob.name + " hits you for " + mobHit + " damage!" + "</font>" + newLine + combatLogString;	
				playerHP = playerHP - mobHit;
				
				if (playerHP <= 0)
				{
					PlayerDie(tempMob);
					break;
				}
			}			
		}
	}
	
	TurnCount();
	UpdateAll();
	UpdateInfo();
}

function TurnCount()
{
	turnCounter++;
	
	CheckBuffs();
}

function CheckBuffs()
{
	if (currentlyDefending === true)
	{
		if (turnCounter >= defTurnFinish)
		{
			playerDef = originalDef;
			
			currentlyDefending = false;
			
			combatLogString = "You defence boost has worn off." + newLine + combatLogString;
			
			UpdateAll();
			
			if (roomInvestigated === true)
			{
				UpdateInfo();
			}
		}
	}
}

function CheckXP()
{
	xpNeeded = xpForNextLvl - playerXP;
	
	if (xpNeeded <= 0)
	{
		playerLvl++;
		playerSkillPoints += 5;
		
		xpForNextLvl = xpForNextLvl + Math.ceil(playerLvl + ((playerLvl * 20) * 1.5));
		xpNeeded = xpForNextLvl - playerXP;
		
		combatLogString = '<font color="Orchid">' + "Player LVL Increased!" + "</font>" + newLine + combatLogString;
		lootLogString = "Gained 5 skill points!" + newLine + lootLogString;
		
		playerMaxHP = Math.ceil(playerLvl * 20) + Math.ceil(playerEnd * 1.5);
		playerHP = playerMaxHP;
		
		UpdateAll();
			
		if (roomInvestigated === true)
		{
			UpdateInfo();
		}
	}
}

function PlayerDie(mob)
{
	combatLogString = "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + newLine + playerName + " was slain by " + mob.name + "." + newLine + "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + newLine + newLine+ combatLogString;

	UpdateAll();
	
	if (roomInvestigated === true)
	{
		UpdateInfo();
	}
		
	window.alert("You have died! Restarting.");
	location.reload();
}

// CUSTOM CLASSES --------------------------------------------------------------------------------

function Mob(pLvl)
{
	this.lvl = pLvl;
	this.name = mobNamesF[getRandomInt(0, mobNamesF.length - 1)] + " " + mobNamesL[getRandomInt(0, mobNamesL.length - 1)];
	
	var eliteChance = getRandomInt(0, 100);
	
	var hpMin = Math.ceil(this.lvl * 0.5);
	var hpMax = Math.ceil(this.lvl * 3);
	
	var attackMin = Math.ceil(this.lvl * 0.5);
	var attackMax = Math.ceil(this.lvl * 2);
	
	var luckMin = Math.ceil(this.lvl * 0.5);
	var luckMax = Math.ceil(this.lvl * 2);
	
	var xpMin = Math.ceil(this.lvl * 0.5);
	var xpMax = Math.ceil(this.lvl * 1.5);
	
	var lootMin = 1;
	var lootMax = 28;
	
	var tempPerksString = "";
	var tempWarningString = "";
	
	if (this.lvl > playerLvl * 2)
	{
		tempWarningString = " HIGH LVL";
	}
	
	if (eliteChance > 74)
	{
		tempPerksString = tempPerksString + "Elite Mob!!! ";
		
		var perkChoice = getRandomInt(0, mobPerks.length - 1);
		var statToBuff = mobPerks[perkChoice];
		
		if (statToBuff === mobPerks[0])
		{
			lootMin = 29;
			lootMax = 50;
			tempPerksString = tempPerksString + "| " + mobPerks[0] + " |" + tempWarningString;
		}
		else if (statToBuff === mobPerks[1])
		{
			attackMin = Math.ceil(this.lvl * 2.1);
			attackMax = Math.ceil(this.lvl * 3.5);
			tempPerksString = tempPerksString + "| " + mobPerks[1] + " |" + tempWarningString;
		}
		else if (statToBuff === mobPerks[2])
		{
			luckMin = Math.ceil(this.lvl * 2.1);
			luckMax = Math.ceil(this.lvl * 3.5);
			tempPerksString = tempPerksString + "| " + mobPerks[2] + " |" + tempWarningString;
		}
		else if (statToBuff === mobPerks[3])
		{
			hpMin = Math.ceil(this.lvl * 3.1);
			hpMax = Math.ceil(this.lvl * 5.5);
			tempPerksString = tempPerksString + "| " + mobPerks[3] + " |" + tempWarningString;
		}
		else if (statToBuff === mobPerks[4])
		{
			xpMin = Math.ceil(this.lvl * 1.6);
			xpMax = Math.ceil(this.lvl * 3.5);
			tempPerksString = tempPerksString + "| " + mobPerks[4] + " |" + tempWarningString;
		}
	}
	else
	{
		tempPerksString = tempWarningString;
	}
	
	this.hp = getRandomInt(hpMin, hpMax);
	this.attack = getRandomInt(attackMin, attackMax);
	this.luck = getRandomInt(luckMin, luckMax);
	this.xpValue = getRandomInt(xpMin, xpMax);
	this.lootValue = this.lvl * getRandomInt(lootMin, lootMax);
	
	this.perkString = tempPerksString;
}

function Quest(lvl)
{
	this.questReward = new QuestReward(lvl);
	
	this.questItem = questItems[getRandomInt(0, questItems.length - 1)];
		
	var questStringChance = getRandomInt(0, questStart.length - 1);
	
	this.questStringStart = questStart[questStringChance] + " " + this.questItem + "." + newLine + newLine + "Reward: " + this.questReward.rewardValue + " " + this.questReward.rewardType;
	
	this.questStringSuccess = questSuccess[questStringChance];
}

function QuestReward(lvl)
{
	var typeChance = getRandomInt(1,3)
	{
		if (typeChance === 1)
		{
			this.rewardType = "XP";
			this.rewardValue = getRandomInt(Math.ceil(lvl * 2.5), Math.ceil(lvl * 4));
		}
		else if (typeChance === 2)
		{
			this.rewardType = "Gold";
			this.rewardValue = getRandomInt(Math.ceil(lvl * 30), Math.ceil(lvl * 75));
		}
		else if (typeChance === 3)
		{
			this.rewardType = "Skill Points"
			this.rewardValue = getRandomInt(1,5);
		}
	}
}

function Loot(lvl)
{
	var typeChance = getRandomInt(1, 10);
	
	if (typeChance < 6)
	{
		this.type = "Gold";
		this.value = lvl * getRandomInt(1, 30);
	}
	else if (typeChance < 10)
	{
		this.type = "Health";
		this.value = getRandomInt(Math.ceil(playerMaxHP * 0.25), playerMaxHP);
	}
	else
	{
		this.type = "Artifact";
		this.stat = playerStats[getRandomInt(0, playerStats.length - 1)];
		this.name = artifactOwners[getRandomInt(0, artifactOwners.length - 1)] + artifactNames[getRandomInt(0, artifactNames.length - 1)] + this.stat;
		this.value = getRandomInt(1, 3);		
	}
	
	this.looted = false;
}

function Room(currentRoomLvl)
{
	this.lvl = currentRoomLvl;
	this.roomAtk = getRandomInt(Math.ceil(currentRoomLvl * 0.5), Math.ceil(currentRoomLvl * 3));
	this.roomDef = getRandomInt(Math.ceil(currentRoomLvl * 0.5), Math.ceil(currentRoomLvl * 3));
	this.roomEnd = getRandomInt(Math.ceil(currentRoomLvl * 0.5), Math.ceil(currentRoomLvl * 3));
	this.roomPer = getRandomInt(Math.ceil(currentRoomLvl * 0.5), Math.ceil(currentRoomLvl * 3));
	this.roomInt = getRandomInt(Math.ceil(currentRoomLvl * 0.5), Math.ceil(currentRoomLvl * 3));
	this.roomLuc = getRandomInt(Math.ceil(currentRoomLvl * 0.5), Math.ceil(currentRoomLvl * 3));
}

// AUTO FUNCTIONS -------------------------------------------------------------------------------

function RoomStatCheck(stat, tempRoom)
{
	var result = false;
	
	var playerRoll = 0;
	var roomRoll = 0;
	
	if (stat === "atk")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerAtk);
		roomRoll = getRandomInt(tempRoom.lvl, tempRoom.lvl + tempRoom.roomAtk);
	}
	else if (stat === "def")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerDef);
		roomRoll = getRandomInt(tempRoom.lvl, tempRoom.lvl + tempRoom.roomDef);
	}
	else if (stat === "end")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerEnd);
		roomRoll = getRandomInt(tempRoom.lvl, tempRoom.lvl + tempRoom.roomEnd);
	}
	else if (stat === "per")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerPer);
		roomRoll = getRandomInt(tempRoom.lvl, tempRoom.lvl + tempRoom.roomPer);
	}
	else if (stat === "int")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerInt);
		roomRoll = getRandomInt(tempRoom.lvl, tempRoom.lvl + tempRoom.roomInt);
	}
	else if (stat === "luc")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerLuc);
		roomRoll = getRandomInt(tempRoom.lvl, tempRoom.lvl + tempRoom.roomLuc);
	}
	
	if (playerRoll > roomRoll)
	{
		result = true;
	}
	else
	{
		result = false;
	}
	
	return result;
}

function MobStatCheck(stat, mob)
{
	var result = false;
	
	var playerRoll = 0;
	var mobRoll = 0;	
	
	if (stat === "atk")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerAtk);
		mobRoll = getRandomInt(mob.lvl, mob.lvl + mob.attack);
	}
	else if (stat === "def")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerDef);
		mobRoll = getRandomInt(mob.lvl, mob.lvl + mob.attack);
	}
	else if (stat === "end")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerEnd);
		mobRoll = getRandomInt(mob.lvl, mob.lvl + mob.attack);
	}
	else if (stat === "per")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerPer);
		mobRoll = getRandomInt(mob.lvl, mob.lvl + mob.attack);
	}
	else if (stat === "int")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerInt);
		mobRoll = getRandomInt(mob.lvl, mob.lvl + mob.attack);
	}
	else if (stat === "luc")
	{
		playerRoll = getRandomInt(playerLvl, playerLvl + playerLuc);
		mobRoll = getRandomInt(mob.lvl, mob.lvl + mob.luck);
	}
	
	if (playerRoll > mobRoll)
	{
		result = true;
	}
	else
	{
		result = false;
	}
	
	return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
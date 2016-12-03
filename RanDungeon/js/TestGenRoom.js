
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
	
	var roomTilesX = getRandomInt(4, 20);
	var roomTilesY = getRandomInt(4, 20);
	
	for (var x = 1; x <= roomTilesX; x++)
	{
		for (var y = 1; y<= roomTilesY; y++)
		{
			if (y === (roomTilesY -1) && x === (roomTilesX - 1))
			{
				if (playerSpawned === false)
				{
					roomString = roomString + '<img src="Images/Mob2.png">';
					playerSpawned = true;
				}
				else
				{
					roomString = roomString + '<img src="Images/Floor-Empty.png">';
				}
			}
			else if (y === 1 || y === roomTilesY || x === 1 || x === roomTilesX)
			{
				roomString = roomString + '<img src="Images/Wall.png">';
			}
			else
			{
				var TileChance = getRandomInt(1,100);
				
				if (TileChance < 60)
				{
					if (playerSpawned === false)
					{
						var spawnPlayerChance = getRandomInt(1,3);
						
						if (spawnPlayerChance === 3)
						{
							roomString = roomString + '<img src="Images/Mob4.png">';
							playerSpawned = true;
						}
						else
						{
							roomString = roomString + '<img src="Images/Floor-Empty.png">';
						}
					}
					else
					{
						roomString = roomString + '<img src="Images/Floor-Empty.png">';
					}
				}
				else if (TileChance < 85)
				{
					var spawnMobChance = getRandomInt(1,3);
					
					if (spawnMobChance === 3)
					{
						roomString = roomString + '<img src="Images/Mob5.png">';
						numOfMobs++;
					}
					else
					{
						roomString = roomString + '<img src="Images/Floor-Empty.png">';
					}
				}
				else
				{
					var spawnLootChance = getRandomInt(1,3)
					
					if (spawnLootChance === 3)
					{
						roomString = roomString + '<img src="Images/Loot.png">';
						numOfLoot++;
					}
				}
			}			
		}
		
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
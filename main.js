var app = (function () {
  var artist = "Mario";
  var twitter = "NinjiGalaxy";
  var currentIndex = 0;
  var zipUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //the infinite heardle template doesn't work unless there's a valid url here. if you choose to click this it's on you.

  var musicNameList = [
    "Ground - Super Mario Bros. (1985)",
    "Underground - Super Mario Bros. (1985)",
    "Castle - Super Mario Bros. (1985)",
    "Underwater - Super Mario Bros. (1985)",
    "Super Star (Invincible) - Super Mario Bros. (1985)",
    "Phase BGM - Wrecking Crew",
    "Bonus Stage - Wrecking Crew",
    "Golden Hammer - Wrecking Crew",
    "Name Entry - Vs. Super Mario Bros.",
    "Ending - Super Mario Bros. The Lost Levels",
    "Doki Doki Do It - Super Mario Bros: The Great Mission To Rescue Princess Peach",
    "The Light Blue Waltz (Underwater Theme) - Super Mario Bros: The Great Mission To Rescue Princess Peach",
    "Knitting Diagram - I Am A Teacher: Super Mario Sweater",
    "Title Screen - Super Mario Bros. 2",
    "Player Select - Super Mario Bros. 2",
    "Ground - Super Mario Bros. 2",
    "Underground - Super Mario Bros. 2",
    "Wart - Super Mario Bros. 2",
    "Ending - Super Mario Bros. 2",
    "Subspace - Super Mario Bros. 2",
    "Ground - Super Mario Bros. 3",
    "Underground - Super Mario Bros. 3",
    "Underwater - Super Mario Bros. 3",
    "Athletic - Super Mario Bros. 3",
    "Airship - Super Mario Bros. 3",
    "Fortress - Super Mario Bros. 3",
    "Boss Battle - Super Mario Bros. 3",
    "Hammer Bros. - Super Mario Bros. 3",
    "Ending - Super Mario Bros. 3",
    "Grass Land (World 1) - Super Mario Bros. 3",
    "Desert Land (World 2) - Super Mario Bros. 3",
    "Water Land (World 3) - Super Mario Bros. 3",
    "Giant Land (World 4) - Super Mario Bros. 3",
    "Sky Land (World 5) - Super Mario Bros. 3",
    "Ice Land (World 6) - Super Mario Bros. 3",
    "Pipe Land (World 7) - Super Mario Bros. 3",
    "Dark Land (World 8) - Super Mario Bros. 3",
    "Warp Zone (World 9) - Super Mario Bros. 3",
    "Bowser Battle - Super Mario Bros. 3",
    "Birabuto Kingdom - Super Mario Land",
    "Muda Kingdom - Super Mario Land",
    "Chai Kingdom - Super Mario Land",
    "Easton Kingdom - Super Mario Land",
    "Marine Pop, Sky Pop! - Super Mario Land",
    "Ending & Staff Roll - Super Mario Land",
    "Mario Brothers Rap - The Super Mario Bros. Super Show",
    "Do The Mario! - The Super Mario Bros. Super Show",
    "Title Screen - Dr. Mario (NES)",
    "Fever - Dr. Mario (NES)",
    "Chill - Dr. Mario (NES)",
    "Ending - Dr. Mario (NES)",
    "Do The Koopa - The Adventures Of Super Mario Bros. 3",
    "Title Screen - Super Mario World",
    "Yoshi's Island - Super Mario World",
    "Donut Plains/Chocolate Island - Super Mario World",
    "Vanilla Dome - Super Mario World",
    "Forest Of Illusion - Super Mario World",
    "Valley Of Bowser - Super Mario World",
    "Star Road - Super Mario World",
    "Special World - Super Mario World",
    "Ground - Super Mario World",
    "Athletic - Super Mario World",
    "Castle - Super Mario World",
    "Boss Battle - Super Mario World",
    "Underground - Super Mario World",
    "Underwater - Super Mario World",
    "Ghost House - Super Mario World",
    "Bonus - Super Mario World",
    "The Evil King Bowser (Final Battle) - Super Mario World",
    "Ending - Super Mario World",
    "Title Screen - Yoshi (NES)",
    "Music C (Starman) - Yoshi (NES)",
    "Title Screen - Mario Paint",
    "Creative Exercise - Mario Paint",
    "Monkey Song - Mario Paint",
    "Mysterious - Mario Paint",
    "Data Robot - Mario Paint",
    "Gnat Attack - Mario Paint",
    "Title Screen - Super Mario Kart",
    "Mario Circuit - Super Mario Kart",
    "Donut Plains - Super Mario Kart",
    "Koopa Beach - Super Mario Kart",
    "Ghost Valley - Super Mario Kart",
    "Bowser Castle - Super Mario Kart",
    "Choco Island - Super Mario Kart",
    "Vanilla Lake - Super Mario Kart",
    "Rainbow Road - Super Mario Kart",
    "Battle - Super Mario Kart",
    "Staff Roll - Super Mario Kart",
    "Choose Your Pipe (File Select) - Super Mario Land 2: 6 Golden Coins",
    "Athletic - Super Mario Land 2: 6 Golden Coins",
    "Treetop (Tree Zone) - Super Mario Land 2: 6 Golden Coins",
    "Seashore (Turtle Zone/Macro Zone) - Super Mario Land 2: 6 Golden Coins",
    "Machine (Mario Zone) - Super Mario Land 2: 6 Golden Coins",
    "The Moon (Space Zone) - Super Mario Land 2: 6 Golden Coins",
    "Star Maze (Space Zone) - Super Mario Land 2: 6 Golden Coins",
    "Wario's Castle - Super Mario Land 2: 6 Golden Coins",
    "Staff Roll - Super Mario Land 2: 6 Golden Coins",
    "Title Screen - Yoshi's Cookie (NES)",
    "Music Type C - Yoshi's Cookie (NES)",
    "Action Type B - Yoshi's Cookie (SNES)",
    "Versus Type B - Yoshi's Cookie (SNES)",
    "Main Title - Super Mario Bros. (1993)",
    "Drive To Work On Instinct - Super Mario Bros. (1993)",
    "Title Screen - Super Mario All-Stars",
    "Game Select - Super Mario All-Stars",
    "Title Screen [Super Mario Bros.] - Super Mario All-Stars",
    "Ground [Super Mario Bros.] - Super Mario All-Stars",
    "Underwater [Super Mario Bros.] - Super Mario All-Stars",
    "Bonus [Super Mario Bros.] - Super Mario All-Stars",
    "Title Screen [Super Mario Bros.: The Lost Levels] - Super Mario All-Stars",
    "Ending [Super Mario Bros.: The Lost Levels] - Super Mario All-Stars",
    "Title Screen [Super Mario Bros. 2] - Super Mario All-Stars",
    "Player Select [Super Mario Bros. 2] - Super Mario All-Stars",
    "Ground [Super Mario Bros. 2] - Super Mario All-Stars",
    "Ending [Super Mario Bros. 2] - Super Mario All-Stars",
    "Ground [Super Mario Bros. 3] - Super Mario All-Stars",
    "Underwater [Super Mario Bros. 3] - Super Mario All-Stars",
    "Athletic [Super Mario Bros. 3] - Super Mario All-Stars",
    "Airship [Super Mario Bros. 3] - Super Mario All-Stars",
    "Hammer Bros. [Super Mario Bros. 3] - Super Mario All-Stars",
    "Ending [Super Mario Bros. 3] - Super Mario All-Stars",
    "Grass Land (World 1) [Super Mario Bros. 3] - Super Mario All-Stars",
    "Giant Land (World 4) [Super Mario Bros. 3] - Super Mario All-Stars",
    "Ice Land (World 6) [Super Mario Bros. 3] - Super Mario All-Stars",
    "Pipe Land (World 7) [Super Mario Bros. 3] - Super Mario All-Stars",
    "Title Screen - Yoshi's Safari",
    "Grass Land - Yoshi's Safari",
    "Pipe Island - Yoshi's Safari",
    "Title Screen - Mario & Wario",
    "Woods - Mario & Wario",
    "Desert - Mario & Wario",
    "Main Theme - Wario Land: Super Mario Land 3",
    "Kitchen Island (World Map) - Wario Land: Super Mario Land 3",
    "Underwater Course - Wario Land: Super Mario Land 3",
    "Train Course - Wario Land: Super Mario Land 3",
    "Staff Roll - Wario Land: Super Mario Land 3",
    "Title Screen - Wario's Woods (NES)",
    "Round Game - Wario's Woods (NES)",
    "Title Screen - Donkey Kong '94",
    "Forest - Donkey Kong '94",
    "Ship - Donkey Kong '94",
    "Showdown At The Tower - Donkey Kong '94",
    "Title Screen - Donkey Kong Country (SNES)",
    "Simian Segue (World Map) - Donkey Kong Country (SNES)",
    "DK Island Swing - Donkey Kong Country (SNES)",
    "Cranky's Theme - Donkey Kong Country (SNES)",
    "Bonus Room Blitz - Donkey Kong Country (SNES)",
    "Aquatic Ambiance - Donkey Kong Country (SNES)",
    "Mine Cart Madness - Donkey Kong Country (SNES)",
    "Life In The Mines - Donkey Kong Country (SNES)",
    "Forest Frenzy - Donkey Kong Country (SNES)",
    "Treetop Rock - Donkey Kong Country (SNES)",
    "Northern Hemispheres - Donkey Kong Country (SNES)",
    "Ice Cave Chant - Donkey Kong Country (SNES)",
    "Fear Factory - Donkey Kong Country (SNES)",
    "Gang Plank Galleon - Donkey Kong Country (SNES)",
    "The Credits Concerto (Staff Roll) - Donkey Kong Country (SNES)",
    "Fever - Tetris & Dr. Mario (SNES)",
    "Title Screen - Mario's Picross",
    "Star Picross - Mario's Picross",
    "Time Trial - Mario's Picross",
    "How To Play - Mario's Picross",
    "Title Screen - Donkey Kong Land",
    "Chimpanzee Clouds - Donkey Kong Land",
    "Aquatic Ambiance - Donkey Kong Land",
    "Singles Match 1 - Mario's Tennis (Virtual Boy)",
    "Results - Mario's Tennis (Virtual Boy)",
    "Opening Melody - Super Mario World 2: Yoshi's Island",
    "Title Screen - Super Mario World 2: Yoshi's Island",
    "Flower Field - Super Mario World 2: Yoshi's Island",
    "Score - Super Mario World 2: Yoshi's Island",
    "Underground - Super Mario World 2: Yoshi's Island",
    "Castles & Forts - Super Mario World 2: Yoshi's Island",
    "Stage Boss - Super Mario World 2: Yoshi's Island",
    "Athletic - Super Mario World 2: Yoshi's Island",
    "Ground - Super Mario World 2: Yoshi's Island",
    "Big Boss - Super Mario World 2: Yoshi's Island",
    "World Map - Super Mario World 2: Yoshi's Island",
    "Powerful Mario - Super Mario World 2: Yoshi's Island",
    "Baby Bowser Battle - Super Mario World 2: Yoshi's Island",
    "Ending - Super Mario World 2: Yoshi's Island",
    "Title Screen - Mario's Super Picross",
    "Mario BGM 1 - Mario's Super Picross",
    "Mario BGM 2 - Mario's Super Picross",
    "Wario BGM 2 - Mario's Super Picross",
    "Staff Roll - Mario's Super Picross",
    "Title Screen - Mario Clash",
    "Pipes (Level 1) - Mario Clash",
    "Ghost (Level 13) - Mario Clash",
    "Level Theme 1 - Virtual Boy Wario Land",
    "Level Theme 3 (Underwater) - Virtual Boy Wario Land",
    "K. Rool Returns (Title Screen) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Welcome To Crocodile Isle (World Map) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Token Tango - Donkey Kong Country 2: Diddy's Kong Quest",
    "Jib Jig - Donkey Kong Country 2: Diddy's Kong Quest",
    "Funky The Main Monkey - Donkey Kong Country 2: Diddy's Kong Quest",
    "Hot Head Bop - Donkey Kong Country 2: Diddy's Kong Quest",
    "Kannon's Klanking (Mining Melancholy) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Bayou Boogie - Donkey Kong Country 2: Diddy's Kong Quest",
    "Krook's March - Donkey Kong Country 2: Diddy's Kong Quest",
    "In A Snowbound Land - Donkey Kong Country 2: Diddy's Kong Quest",
    "Stickerbush Symphony - Donkey Kong Country 2: Diddy's Kong Quest",
    "Forest Interlude - Donkey Kong Country 2: Diddy's Kong Quest",
    "Haunted Chase - Donkey Kong Country 2: Diddy's Kong Quest",
    "Crocodile Cacophony - Donkey Kong Country 2: Diddy's Kong Quest",
    "Donkey Kong Rescued (Staff Roll) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Fun Adventure, Cheerful Adventure - Super Mario RPG: Legend Of The Seven Stars",
    "Let's Try! (File Select) - Super Mario RPG: Legend Of The Seven Stars",
    "Battling Bowser - Super Mario RPG: Legend Of The Seven Stars",
    "Super Mario House - Super Mario RPG: Legend Of The Seven Stars",
    "Where To? (World Map) - Super Mario RPG: Legend Of The Seven Stars",
    "Danger Abounds On The Journey (Mushroom Way) - Super Mario RPG: Legend Of The Seven Stars",
    "Battling Monsters (Enemy Battle) - Super Mario RPG: Legend Of The Seven Stars",
    "Hello, Happy Kingdom (Mushroom Kingdom) - Super Mario RPG: Legend Of The Seven Stars",
    "Danger Aplenty On The Journey (Bandit's Way) - Super Mario RPG: Legend Of The Seven Stars",
    "Battling Strongish Monsters (Boss Battle) - Super Mario RPG: Legend Of The Seven Stars",
    "The Weapons Show Up - Super Mario RPG: Legend Of The Seven Stars",
    "Battling A Weapon Boss - Super Mario RPG: Legend Of The Seven Stars",
    "Let's Take The Midas River - Super Mario RPG: Legend Of The Seven Stars",
    "Grandpa And The Upbeat Tadpoles (Tadpole Pond) - Super Mario RPG: Legend Of The Seven Stars",
    "Elegy (Sad Song) - Super Mario RPG: Legend Of The Seven Stars",
    "Beware Of Forest Mushrooms (Forest Maze) - Super Mario RPG: Legend Of The Seven Stars",
    "Rose Town - Super Mario RPG: Legend Of The Seven Stars",
    "Greetings From The Pipes (Pipe Vault) - Super Mario RPG: Legend Of The Seven Stars",
    "Welcome To Yo'ster Isle! - Super Mario RPG: Legend Of The Seven Stars",
    "A Working Mole Is A Happy Mole (Moleville) - Super Mario RPG: Legend Of The Seven Stars",
    "Moleville Mountain Rail - Super Mario RPG: Legend Of The Seven Stars",
    "This Is Booster Tower - Super Mario RPG: Legend Of The Seven Stars",
    "The Bell Rings Out At Marrymore - Super Mario RPG: Legend Of The Seven Stars",
    "Shopping At Seaside Town - Super Mario RPG: Legend Of The Seven Stars",
    "Battling Culex - Super Mario RPG: Legend Of The Seven Stars",
    "Let's Get Fluffy! (Nimbus Land) - Super Mario RPG: Legend Of The Seven Stars",
    "Barrel Volcano - Super Mario RPG: Legend Of The Seven Stars",
    "The Factory (Weapon World) - Super Mario RPG: Legend Of The Seven Stars",
    "Farewell, Geno - Super Mario RPG: Legend Of The Seven Stars",
    "The Wishes From The Stars - Super Mario RPG: Legend Of The Seven Stars",
    "Fun Parade, Cheerful Parade (Staff Roll) - Super Mario RPG: Legend Of The Seven Stars",
    "Title Screen - Super Mario 64",
    "File Select - Super Mario 64",
    "Opening - Super Mario 64",
    "Inside The Castle Walls (Peach's Castle) - Super Mario 64",
    "Main Theme (Bob Omb Battlefield/Whomp's Fortress) - Super Mario 64",
    "Stage Boss - Super Mario 64",
    "Slider (Tick Tock Clock/Rainbow Ride) - Super Mario 64",
    "Cool, Cool Mountain/Snowman's Land - Super Mario 64",
    "Dire Dire Docks/Jolly Roger Bay - Super Mario 64",
    "Powerful Mario - Super Mario 64",
    "Big Boo's Haunt - Super Mario 64",
    "Merry Go Round - Super Mario 64",
    "Hazy Maze Cave/Wet Dry World - Super Mario 64",
    "Metal Mario - Super Mario 64",
    "Lethal Lava Land/Shifting Sand Land - Super Mario 64",
    "Bowser's Road - Super Mario 64",
    "Bowser's Theme - Super Mario 64",
    "The Endless Stairs - Super Mario 64",
    "Ultimate Bowser (Final Battle) - Super Mario 64",
    "Ending - Super Mario 64",
    "Staff Roll - Super Mario 64",
    "Piranha Plant's Lullaby - Super Mario 64",
    "Title Screen - Tetris Attack",
    "Tutorial (Lip's Theme) - Tetris Attack",
    "Yoshi's Stage - Tetris Attack",
    "Breeze Stage (Lakitu) - Tetris Attack",
    "Glacial Stage (Bumpty) - Tetris Attack",
    "Forest Stage (Poochy) - Tetris Attack",
    "VS Mode Staff Roll - Tetris Attack",
    "I'm Nobody's Hero - Donkey Kong Country (Animated Series)",
    "Let Me Go Back To My Home - Donkey Kong Country (Animated Series)",
    "Our Love Is Stronger Than A Golden Banana - Donkey Kong Country (Animated Series)",
    "Welcome To Crocodile Isle (World Map) - Donkey Kong Land 2",
    "Stickerbush Symphony - Donkey Kong Land 2",
    "In A Snowbound Land - Donkey Kong Land 2",
    "BGM 2 - (Mario's) Picross 2",
    "Northern Kremisphere - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Stilt Village - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Jangle Bells - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Treetop Tumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Water World - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Rockface Rumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Brothers Bear - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Wrinkly 64 (Super Mario 64 ~ Peach's Castle) - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Title Screen - Mario Kart 64",
    "Main Menu - Mario Kart 64",
    "Luigi/Mario/Royal Raceway/Wario Stadium - Mario Kart 64",
    "Moo Moo Farm/Yoshi Valley - Mario Kart 64",
    "Koopa Troopa Beach - Mario Kart 64",
    "Kalimari Desert - Mario Kart 64",
    "Toad's Turnpike - Mario Kart 64",
    "Frappe Snowland/Sherbet Land - Mario Kart 64",
    "Choco Mountain - Mario Kart 64",
    "Bowser's Castle - Mario Kart 64",
    "DK's Jungle Parkway - Mario Kart 64",
    "Banshee Boardwalk - Mario Kart 64",
    "Rainbow Road - Mario Kart 64",
    "Battle Arenas - Mario Kart 64",
    "Winning Results - Mario Kart 64",
    "Trophy Presentation - Mario Kart 64",
    "Staff Roll - Mario Kart 64",
    "Manhole - Game & Watch Gallery (1997)",
    "Fire - Game & Watch Gallery (1997)",
    "Octopus - Game & Watch Gallery (1997)",
    "Oil Panic - Game & Watch Gallery (1997)",
    "Title Screen - Game & Watch Gallery 2",
    "Parachute - Game & Watch Gallery 2",
    "Helmet - Game & Watch Gallery 2",
    "Chef - Game & Watch Gallery 2",
    "Vermin - Game & Watch Gallery 2",
    "Donkey Kong - Game & Watch Gallery 2",
    "Ball - Game & Watch Gallery 2",
    "Stilt Village - Donkey Kong Land III",
    "Treetop Tumble - Donkey Kong Land III",
    "Title Screen - Diddy Kong Racing",
    "Choose Your Racer - Diddy Kong Racing",
    "Ancient Lake - Diddy Kong Racing",
    "Jungle Falls - Diddy Kong Racing",
    "Hot Top Volcano - Diddy Kong Racing",
    "Walrus Cove - Diddy Kong Racing",
    "Frosty Village - Diddy Kong Racing",
    "Crescent Island / Staff Roll - Diddy Kong Racing",
    "Darkmoon Caverns - Diddy Kong Racing",
    "Spaceport Alpha - Diddy Kong Racing",
    "T.T.'s Theme - Diddy Kong Racing",
    "Title Screen - Yoshi's Story",
    "Yoshi's Song - Yoshi's Story",
    "Yo-Yo-Yoshi - Yoshi's Story",
    "Love Is In The Air - Yoshi's Story",
    "Alpina Blue - Yoshi's Story",
    "Baby Bowser's Lullaby - Yoshi's Story",
    "Song Of Happiness - Yoshi's Story",
    "Ending Story - Yoshi's Story",
    "Title Screen - Wrecking Crew '98",
    "Battling Someone - Wrecking Crew '98",
    "Escape From The Woods - Wario Land II",
    "Underwater Tunnels - Wario Land II",
    "Stop That Train! - Wario Land II",
    "Up On The Rooftop - Wario Land II",
    "Level Goal - Wario Land II",
    "The Journey Home (Staff Roll) - Wario Land II",
    "Title Screen - Mario no Photopi",
    "Star Frame - Mario no Photopi",
    "Mushroom Shop - Mario Party (N64)",
    "DK's Jungle Adventure - Mario Party (N64)",
    "Adventure Begins - Mario Party (N64)",
    "Mario's Rainbow Castle - Mario Party (N64)",
    "Peach's Birthday Cake - Mario Party (N64)",
    "Yoshi's Tropical Island - Mario Party (N64)",
    "Wario's Battle Canyon - Mario Party (N64)",
    "Bowser's Magma Mountain - Mario Party (N64)",
    "Minigame Rules - Mario Party (N64)",
    "Let's Go Lightly (Bobsled Run, Platform Peril) - Mario Party (N64)",
    "Faster Than All (Handcar Havoc, Slot Car Derby, etc) - Mario Party (N64)",
    "Can It Be Done? (Ground Pound, Face Lift) - Mario Party (N64)",
    "Chance Time! - Mario Party (N64)",
    "Mini Game Stadium - Mario Party (N64)",
    "Everyone's A Super Star (Staff Roll) - Mario Party (N64)",
    "Peach's Castle - Super Smash Bros. (N64)",
    "Kongo Jungle - Super Smash Bros. (N64)",
    "Yoshi's Island - Super Smash Bros. (N64)",
    "You Vs. Boo - Super Mario Bros. Deluxe",
    "Vs. Race - Super Mario Bros. Deluxe",
    "Main Menu - Super Mario Bros. Deluxe",
    "File Select - Super Mario Bros. Deluxe",
    "Staff Roll - Super Mario Bros. Deluxe",
    "Main Menu - Mario Golf (N64)",
    "Mini Golf - Mario Golf (N64)",
    "Toad Highlands - Mario Golf (N64)",
    "Koopa Park - Mario Golf (N64)",
    "Boo Valley - Mario Golf (N64)",
    "Egg - Game & Watch Gallery 3",
    "Greenhouse - Game & Watch Gallery 3",
    "Turtle Bridge - Game & Watch Gallery 3",
    "Mario Bros. - Game & Watch Gallery 3",
    "Donkey Kong Jr. - Game & Watch Gallery 3",
    "Main Menu - Mario Golf (GBC)",
    "Peach's Castle - Mario Golf (GBC)",
    "DK Rap - Donkey Kong 64",
    "Main Menu - Donkey Kong 64",
    "DK Isle - Donkey Kong 64",
    "Jungle Japes - Donkey Kong 64",
    "Angry Aztec - Donkey Kong 64",
    "Frantic Factory - Donkey Kong 64",
    "K. Rool Duel - Donkey Kong 64",
    "Title Screen - Mario Party 2",
    "Welcome To Mario Land (Main Menu) - Mario Party 2",
    "Laboratory (Settings) - Mario Party 2",
    "In The Pipe - Mario Party 2",
    "Pirate Land - Mario Party 2",
    "Western Land - Mario Party 2",
    "Space Land - Mario Party 2",
    "Mystery Land - Mario Party 2",
    "Horror Land - Mario Party 2",
    "Let The Game Begin (Minigame Rules) - Mario Party 2",
    "Keepin' On The Path (Speed Hockey, Shock Drop Or Roll, etc) - Mario Party 2",
    "That's All Of It (Archerival, Bowser's Big Blast, etc) - Mario Party 2",
    "The Blue Skies Yonder (Slot Car Derby, Handcar Havoc, etc) - Mario Party 2",
    "Going Somewhere (Bobsled Run, Sky Pilots, etc) - Mario Party 2",
    "This Way That (Quicksand Cache, Filet Relay, etc) - Mario Party 2",
    "Staff Roll - Mario Party 2",
    "World Map (Day) - Wario Land 3",
    "Out Of The Woods (Day) - Wario Land 3",
    "Peaceful Village, A Town In Chaos (Day) - Wario Land 3",
    "West Crater, East Crater - Wario Land 3",
    "Big Bridge, Bank Of The Wild River, Steep Canyon - Wario Land 3",
    "Tidal Coast, Sea Turtle Rocks, Beneath The Waves - Wario Land 3",
    "Above The Clouds (Night) - Wario Land 3",
    "Staff Roll - Wario Land 3",
    "Main Menu - Mario Tennis (N64)",
    "Game Point ~ Break Point - Mario Tennis (N64)",
    "Mario Brothers Court - Mario Tennis (N64)",
    "Wario & Waluigi Court - Mario Tennis (N64)",
    "Title Screen - Paper Mario (N64)",
    "A Party At Peach's Castle - Paper Mario (N64)",
    "March Ahead - Paper Mario (N64)",
    "Goomba Village - Paper Mario (N64)",
    "Toad Town - Paper Mario (N64)",
    "Battle - Paper Mario (N64)",
    "Fuzzies Stole My Shell - Paper Mario (N64)",
    "Koopa Village - Paper Mario (N64)",
    "Mt. Rugged - Paper Mario (N64)",
    "Dry Dry Desert Trek - Paper Mario (N64)",
    "Ghost Gulping - Paper Mario (N64)",
    "Shy Guy's Toy Box - Paper Mario (N64)",
    "Princess In Distress - Paper Mario (N64)",
    "Jade Jungle - Paper Mario (N64)",
    "Welcome To Yoshi's Village - Paper Mario (N64)",
    "Flower Fields Rondo - Paper Mario (N64)",
    "Cold Reception In Shiver City - Paper Mario (N64)",
    "Snow Road - Paper Mario (N64)",
    "Starborn Valley Trail - Paper Mario (N64)",
    "Over Shiver Mountain - Paper Mario (N64)",
    "Crystal Palace Crawl - Paper Mario (N64)",
    "Shooting Star Summit - Paper Mario (N64)",
    "Cloudy Climb - Paper Mario (N64)",
    "Wish Of The Princess - Paper Mario (N64)",
    "Victory Parade (Staff Roll) - Paper Mario (N64)",
    "Mario And Peach - Paper Mario (N64)",
    "Main Menu - Paper Mario (N64)",
    "Main Menu - Mario Tennis (GBC)",
    "Game Point - Mario Tennis (GBC)",
    "Title Screen - Mario Party 3",
    "Free Play Room - Mario Party 3",
    "Star Lift - Mario Party 3",
    "Still Going (Last 5 Turns) - Mario Party 3",
    "Chilly Waters - Mario Party 3",
    "Deep Bloober Sea - Mario Party 3",
    "Woody Woods - Mario Party 3",
    "Creepy Cavern - Mario Party 3",
    "Waluigi's Island - Mario Party 3",
    "Don't Hurry (River Raiders, Rockin' Raceway, etc) - Mario Party 3",
    "Fighting Spirit (Snowball Summit, Vine With Me, etc) - Mario Party 3",
    "Let's Get A Move On (Aces High, Ridiculous Relay, etc) - Mario Party 3",
    "Mustn't Panic (Eatsa Pizza, Pipe Cleaners, etc) - Mario Party 3",
    "Stage Theme 1 - Mario Bros. (GBA)",
    "Bonus Round - Mario Bros. (GBA)",
    "Choose A Game! - Super Mario Advance (Super Mario Bros. 2)",
    "Ground - Super Mario Advance (Super Mario Bros. 2)",
    "Jar - Super Mario Advance (Super Mario Bros. 2)",
    "Title Screen - Dr. Mario 64",
    "Fever - Dr. Mario 64",
    "Chill - Dr. Mario 64",
    "Cube (Cough) - Dr. Mario 64",
    "Que Que (Sneeze) - Dr. Mario 64",
    "Vs. Rudy - Dr. Mario 64",
    "Title Screen - Mario Kart: Super Circuit",
    "Main Menu - Mario Kart: Super Circuit",
    "Peach/Mario/Luigi Circuit - Mario Kart: Super Circuit",
    "Shy Guy Beach/Cheep Cheep Island - Mario Kart: Super Circuit",
    "Riverside Park - Mario Kart: Super Circuit",
    "Bowser Castle - Mario Kart: Super Circuit",
    "Boo Lake/Broken Pier - Mario Kart: Super Circuit",
    "Cheese Land - Mario Kart: Super Circuit",
    "Sky Garden - Mario Kart: Super Circuit",
    "Sunset Wilds - Mario Kart: Super Circuit",
    "Snow Land - Mario Kart: Super Circuit",
    "Ribbon Road - Mario Kart: Super Circuit",
    "Yoshi Desert - Mario Kart: Super Circuit",
    "Lakeside Park - Mario Kart: Super Circuit",
    "Rainbow Road - Mario Kart: Super Circuit",
    "Battle - Mario Kart: Super Circuit",
    "Staff Roll - Mario Kart: Super Circuit",
    "Work It! (Title Screen) - Wario Land 4",
    "Puzzle Room - Wario Land 4",
    "Palm Tree Paradise - Wario Land 4",
    "Monsoon Jungle - Wario Land 4",
    "40 Below Fridge - Wario Land 4",
    "Toy Block Tower - Wario Land 4",
    "Arabian Night - Wario Land 4",
    "Hurry Up! - Wario Land 4",
    "Staff Roll - Wario Land 4",
    "Main Theme - Luigi's Mansion (GameCube)",
    "File Select - Luigi's Mansion (GameCube)",
    "Training Room - Luigi's Mansion (GameCube)",
    "There, There, Toad - Luigi's Mansion (GameCube)",
    "Professor E. Gadd's Lab - Luigi's Mansion (GameCube)",
    "Chatting With Professor E. Gadd - Luigi's Mansion (GameCube)",
    "Chatting With A Ghost - Luigi's Mansion (GameCube)",
    "Observatory - Luigi's Mansion (GameCube)",
    "King Boo Battle - Luigi's Mansion (GameCube)",
    "Staff Roll - Luigi's Mansion (GameCube)",
    "Princess Peach's Castle (Super Mario Bros. ~ Ground) - Super Smash Bros. Melee",
    "Ground Theme (Super Mario Bros. 3) - Super Smash Bros. Melee",
    "Rainbow Cruise (Super Mario 64 ~ Slider) - Super Smash Bros. Melee",
    "Yoshi's Island (Super Mario World ~ Athletic) - Super Smash Bros. Melee",
    "Fever (Dr. Mario) - Super Smash Bros. Melee",
    "Kongo Falls (Donkey Kong Country ~ DK Island Swing) - Super Smash Bros. Melee",
    "Yoshi's Song (Yoshi's Story) - Super Smash Bros. Melee",
    "Ground - Super Mario World: Super Mario Advance 2",
    "Athletic - Super Mario World: Super Mario Advance 2",
    "Vanilla Dome - Super Mario World: Super Mario Advance 2",
    "Status Screen - Super Mario World: Super Mario Advance 2",
    "Isle Delfino - Super Mario Sunshine",
    "Bianco Hills - Super Mario Sunshine",
    "Ricco Harbor - Super Mario Sunshine",
    "Gelato Beach - Super Mario Sunshine",
    "Pinna Park - Super Mario Sunshine",
    "Sirena Beach - Super Mario Sunshine",
    "Hotel Delfino - Super Mario Sunshine",
    "Casino - Super Mario Sunshine",
    "Noki Bay - Super Mario Sunshine",
    "Noki Depths - Super Mario Sunshine",
    "Pianta Village - Super Mario Sunshine",
    "Pianta Hot Spring - Super Mario Sunshine",
    "Corona Mountain - Super Mario Sunshine",
    "Secret Course - Super Mario Sunshine",
    "Secret Course ~ Sky And Sea - Super Mario Sunshine",
    "Mid Boss - Super Mario Sunshine",
    "Boss Battle - Super Mario Sunshine",
    "Staff Roll - Super Mario Sunshine",
    "Flower Field - Super Mario Advance 3: Yoshi's Island",
    "Athletic - Super Mario Advance 3: Yoshi's Island",
    "100% Completion - Super Mario Advance 3: Yoshi's Island",
    "Toad's Midway Madness - Mario Party 4",
    "Goomba's Greedy Gala - Mario Party 4",
    "Boo's Haunted Bash - Mario Party 4",
    "Koopa's Seaside Soiree - Mario Party 4",
    "Slowly Yet Surely (Stamp Out!, Trace Race, etc) - Mario Party 4",
    "Try Hard, Folks (Three Throw, Beach Volley Folly, etc) - Mario Party 4",
    "Loud And Sweet (Blame It On The Crane, Booksquirm, etc) - Mario Party 4",
    "Fortunes Turn (Reversal Of Fortune) - Mario Party 4",
    "Boxing - Game & Watch Gallery 4",
    "Rain Shower - Game & Watch Gallery 4",
    "Mario's Cement Factory - Game & Watch Gallery 4",
    "Donkey Kong 3 - Game & Watch Gallery 4",
    "Octopus - Game & Watch Gallery 4",
    "Fire Attack - Game & Watch Gallery 4",
    "Action Type C - Yoshi's Cookie (Nintendo Puzzle Collection)",
    "Main Menu - WarioWare, Inc.: Mega Microgame$!",
    "Drifting Away - WarioWare, Inc.: Mega Microgame$!",
    "Four Seasons - WarioWare, Inc.: Mega Microgame$!",
    "Paper Plane - WarioWare, Inc.: Mega Microgame$!",
    "Pyoro - WarioWare, Inc.: Mega Microgame$!",
    "Staff Roll - WarioWare, Inc.: Mega Microgame$!",
    "DK Island Swing - Donkey Kong Country (GBA)",
    "Aquatic Ambiance - Donkey Kong Country (GBA)",
    "Greenhorn Forest - Wario World",
    "Pause Screen - Wario World",
    "Greenhorn Ruins - Wario World",
    "Sky Sub Level - Wario World",
    "Battle Ring - Wario World",
    "Shivering Mountains - Wario World",
    "Title Screen - Wario World",
    "Ground - Super Mario Advance 4: Super Mario Bros. 3",
    "Athletic - Super Mario Advance 4: Super Mario Bros. 3",
    "World Select - Super Mario Advance 4: Super Mario Bros. 3",
    "Bonus - Super Mario Advance 4: Super Mario Bros. 3",
    "Scanning An e Card - Super Mario Advance 4: Super Mario Bros. 3",
    "World-e - Super Mario Advance 4: Super Mario Bros. 3",
    "World-e Castle - Super Mario Advance 4: Super Mario Bros. 3",
    "Staff Roll - Super Mario Advance 4: Super Mario Bros. 3",
    "Main Menu - Mario Golf: Toadstool Tour",
    "Lakitu Valley - Mario Golf: Toadstool Tour",
    "Shifting Sands - Mario Golf: Toadstool Tour",
    "Blooper Bay - Mario Golf: Toadstool Tour",
    "Stealth Turtles - WarioWare, Inc.: Mega Party Game$!",
    "Title Screen - Mario Kart: Double Dash!!",
    "Main Menu - Mario Kart: Double Dash!!",
    "Luigi/Mario/Yoshi Circuit - Mario Kart: Double Dash!!",
    "Peach Beach/Daisy Cruiser - Mario Kart: Double Dash!!",
    "Baby Park - Mario Kart: Double Dash!!",
    "Dry Dry Desert - Mario Kart: Double Dash!!",
    "Mushroom Bridge/Mushroom City - Mario Kart: Double Dash!!",
    "Waluigi Stadium/Wario Colosseum - Mario Kart: Double Dash!!",
    "Sherbet Land - Mario Kart: Double Dash!!",
    "DK Mountain/Dino Dino Jungle - Mario Kart: Double Dash!!",
    "Bowser's Castle - Mario Kart: Double Dash!!",
    "Rainbow Road - Mario Kart: Double Dash!!",
    "Balloon Battle - Mario Kart: Double Dash!!",
    "Winning Results - Mario Kart: Double Dash!!",
    "Staff Roll - Mario Kart: Double Dash!!",
    "Toy Dream - Mario Party 5",
    "Rainbow Dream - Mario Party 5",
    "Pirate Dream - Mario Party 5",
    "Undersea Dream - Mario Party 5",
    "Bowser Nightmare - Mario Party 5",
    "Everybody Party (Dinger Derby, Coney Island, etc) - Mario Party 5",
    "Bustling Noisily (Hotel Goomba, Pushy Penguins, etc) - Mario Party 5",
    "A New Adventure Begins (Title Screen) - Mario & Luigi: Superstar Saga (GBA)",
    "We're Off Again! (File Select) - Mario & Luigi: Superstar Saga (GBA)",
    "Peach's Castle - Mario & Luigi: Superstar Saga (GBA)",
    "Let's Go! (Battle) - Mario & Luigi: Superstar Saga (GBA)",
    "We Can't Lose! (Boss Battle) - Mario & Luigi: Superstar Saga (GBA)",
    "Stardust Fields - Mario & Luigi: Superstar Saga (GBA)",
    "Beanish People (Hoohoo Village) - Mario & Luigi: Superstar Saga (GBA)",
    "Prince Peasley's Theme - Mario & Luigi: Superstar Saga (GBA)",
    "Hoohoo Mountaintop - Mario & Luigi: Superstar Saga (GBA)",
    "The Kingdom Called Beanbean (Beanbean Fields) - Mario & Luigi: Superstar Saga (GBA)",
    "Castle Of Beans - Mario & Luigi: Superstar Saga (GBA)",
    "Cackletta, The Fiercest Foe - Mario & Luigi: Superstar Saga (GBA)",
    "Chucklehuck Woods - Mario & Luigi: Superstar Saga (GBA)",
    "The Marvelous Duo (Popple Battle) - Mario & Luigi: Superstar Saga (GBA)",
    "Woohoo Hooniversity - Mario & Luigi: Superstar Saga (GBA)",
    "Sweet Surfin' (Gwarhar Lagoon) - Mario & Luigi: Superstar Saga (GBA)",
    "Sea... Sea... Sea... (Oho Ocean) - Mario & Luigi: Superstar Saga (GBA)",
    "Don't Dwell On Danger (Tee Hee Valley) - Mario & Luigi: Superstar Saga (GBA)",
    "Decisive Battleground (Bowser's Castle) - Mario & Luigi: Superstar Saga (GBA)",
    "Showdown With Cackletta! - Mario & Luigi: Superstar Saga (GBA)",
    "Going Home (Staff Roll) - Mario & Luigi: Superstar Saga (GBA)",
    "Professor E. Gadd (Luigi's Mansion ~ Main Theme) - Mario & Luigi: Superstar Saga (GBA)",
    "September - Donkey Konga",
    "Mario Toy Company A - Mario vs. Donkey Kong (GBA)",
    "Mini Mario Level - Mario vs. Donkey Kong (GBA)",
    "Donkey Kong Jungle B - Mario vs. Donkey Kong (GBA)",
    "Fire Mountain A - Mario vs. Donkey Kong (GBA)",
    "Spooky House A - Mario vs. Donkey Kong (GBA)",
    "Mystic Forest A - Mario vs. Donkey Kong (GBA)",
    "Stickerbush Symphony - Donkey Kong Country 2 (GBA)",
    "Forest Interlude - Donkey Kong Country 2 (GBA)",
    "Kannon's Klanking (Mining Melancholy) - Donkey Kong Country 2 (GBA)",
    "An Awfully Long Time Ago... - Paper Mario: The Thousand-Year Door (GameCube)",
    "Title Screen - Paper Mario: The Thousand-Year Door (GameCube)",
    "Rogueport - Paper Mario: The Thousand-Year Door (GameCube)",
    "Rogueport Underground - Paper Mario: The Thousand-Year Door (GameCube)",
    "Battle - Paper Mario: The Thousand-Year Door (GameCube)",
    "Petal Meadows - Paper Mario: The Thousand-Year Door (GameCube)",
    "Petalburg - Paper Mario: The Thousand-Year Door (GameCube)",
    "Hooktail Castle - Paper Mario: The Thousand-Year Door (GameCube)",
    "Pit Of 100 Trials - Paper Mario: The Thousand-Year Door (GameCube)",
    "Battle ~ Shadow Sirens - Paper Mario: The Thousand-Year Door (GameCube)",
    "Super Bowser Bros. ~ World 1 - Paper Mario: The Thousand-Year Door (GameCube)",
    "Super Luigi - Paper Mario: The Thousand-Year Door (GameCube)",
    "Boggly Woods - Paper Mario: The Thousand-Year Door (GameCube)",
    "The Great Tree - Paper Mario: The Thousand-Year Door (GameCube)",
    "Glitzville - Paper Mario: The Thousand-Year Door (GameCube)",
    "The Glitz Pit - Paper Mario: The Thousand-Year Door (GameCube)",
    "Battle ~ The Champ (Rawk Hawk) - Paper Mario: The Thousand-Year Door (GameCube)",
    "A Bittersweet Music Box - Paper Mario: The Thousand-Year Door (GameCube)",
    "Twilight Town - Paper Mario: The Thousand-Year Door (GameCube)",
    "Battle ~ Cortez - Paper Mario: The Thousand-Year Door (GameCube)",
    "Excess Express (Day) - Paper Mario: The Thousand-Year Door (GameCube)",
    "Detective Pennington's On The Case - Paper Mario: The Thousand-Year Door (GameCube)",
    "Twilight Trail - Paper Mario: The Thousand-Year Door (GameCube)",
    "Excess Express (Evening) - Paper Mario: The Thousand-Year Door (GameCube)",
    "Excess Express (Night) - Paper Mario: The Thousand-Year Door (GameCube)",
    "Riverside Station - Paper Mario: The Thousand-Year Door (GameCube)",
    "Poshley Heights - Paper Mario: The Thousand-Year Door (GameCube)",
    "Super Bowser Bros. ~ World 3 - Paper Mario: The Thousand-Year Door (GameCube)",
    "X-Naut Fortress - Paper Mario: The Thousand-Year Door (GameCube)",
    "Battle ~ Shadow Queen - Paper Mario: The Thousand-Year Door (GameCube)",
    "Supportive Voices From Afar - Paper Mario: The Thousand-Year Door (GameCube)",
    "Final Battle ~ Shadow Queen - Paper Mario: The Thousand-Year Door (GameCube)",
    "Fond Farewells - Paper Mario: The Thousand-Year Door (GameCube)",
    "Staff Roll - Paper Mario: The Thousand-Year Door (GameCube)",
    "Title Screen - Mario Pinball Land",
    "Grassy - Mario Pinball Land",
    "Petey Piranha Battle - Mario Pinball Land",
    "Under The Ice - Mario Pinball Land",
    "Title Screen - WarioWare: Twisted!",
    "Main Menu - WarioWare: Twisted!",
    "Mona Pizza's Song - WarioWare: Twisted!",
    "Wario De Mambo - WarioWare: Twisted!",
    "Pyoro R - WarioWare: Twisted!",
    "Main Menu - Mario Power Tennis",
    "Peach Dome Court - Mario Power Tennis",
    "Delfino Plaza Court - Mario Power Tennis",
    "Mario Classic Court (Mario Bros. Theme) - Mario Power Tennis",
    "Towering Treetop - Mario Party 6",
    "Faire Square - Mario Party 6",
    "Snowflake Lake - Mario Party 6",
    "Castaway Bay - Mario Party 6",
    "Clockwork Castle - Mario Party 6",
    "Frantic (Daft Rafts, Snow Brawl, etc) - Mario Party 6",
    "Jazzy (Catch You Letter, Dust 'Til Dawn, etc) - Mario Party 6",
    "Blissful (Clean Team, Mowtown, etc) - Mario Party 6",
    "Relaxed (Rocky Road, Snow Whirled, etc) - Mario Party 6",
    "Sunshine Isles - Super Mario 64 DS",
    "Rec Room - Super Mario 64 DS",
    "Casino Minigames - Super Mario 64 DS",
    "Psyche Out! (Minigame) - Super Mario 64 DS",
    "Title Screen - WarioWare: Touched!",
    "Main Menu - WarioWare: Touched!",
    "Hawt Spot Dance Floor - WarioWare: Touched!",
    "Ashley's Song - WarioWare: Touched!",
    "Mike's Song - WarioWare: Touched!",
    "Pyoro T - WarioWare: Touched!",
    "Title Screen - Yoshi Topsy-Turvy",
    "Farewell, Friends! (Staff Roll) - Yoshi Topsy-Turvy",
    "Title Screen - Donkey Kong Jungle Beat",
    "Battle For Storm Hill - Donkey Kong Jungle Beat",
    "Sky Garden - Donkey Kong Jungle Beat",
    "Ice Warren - Donkey Kong Jungle Beat",
    "Clock Tower - Donkey Kong Jungle Beat",
    "Boss Hog - Donkey Kong Jungle Beat",
    "Shroom City - Mario Party Advance",
    "Twist & Shake [Mario Party 4] - Mario Party Advance",
    "Let's Get A Move On [Mario Party 3] - Mario Party Advance",
    "Title Screen - Yoshi Touch & Go",
    "Flower Field - Yoshi Touch & Go",
    "Title Screen - DK: King Of Swing",
    "World 1 (Simian Segue) - DK: King Of Swing",
    "Banana Bungalow - DK: King Of Swing",
    "Main Menu - Dance Dance Revolution Mario Mix",
    "Here We Go! (Super Mario Bros. ~ Ground) - Dance Dance Revolution: Mario Mix",
    "Destruction Dance (Wrecking Crew ~ Bonus Stage) - Dance Dance Revolution: Mario Mix",
    "Jump! Jump! Jump! (Super Mario Bros. 3 ~ Athletic) - Dance Dance Revolution: Mario Mix",
    "Pirate Dance (Super Mario World ~ Ground) - Dance Dance Revolution: Mario Mix",
    "Hammer Dance (Super Mario Bros. 3 ~ Ground) - Dance Dance Revolution: Mario Mix",
    "Boo Boogie (Super Mario Bros. 2 ~ Ground) - Dance Dance Revolution: Mario Mix",
    "Starring Wario! (Wario World ~ Greenhorn Forest) - Dance Dance Revolution: Mario Mix",
    "Always Smiling - Dance Dance Revolution: Mario Mix",
    "Bowser's Castle (Mario Kart: Double Dash!!) - Dance Dance Revolution: Mario Mix",
    "Piroli (Famicom Disk System ~ BIOS) - Dance Dance Revolution: Mario Mix",
    "Pick A Game! - Dr. Mario & Puzzle League (GBA)",
    "Fever - Dr. Mario & Puzzle League (GBA)",
    "Main Menu - Mario Superstar Baseball",
    "Mario Stadium - Mario Superstar Baseball",
    "Wario Palace - Mario Superstar Baseball",
    "Bowser Castle - Mario Superstar Baseball",
    "Main Menu - Mario Kart Arcade GP",
    "Mario Cup - Mario Kart Arcade GP",
    "Pac-Man Cup - Mario Kart Arcade GP",
    "Title Screen - Super Princess Peach",
    "Ladida Plains 1 - Super Princess Peach",
    "Ladida Plains 2 - Super Princess Peach",
    "Tag The Flowers - Super Princess Peach",
    "Hoo's Wood 1 - Super Princess Peach",
    "Hoo's Wood 2 - Super Princess Peach",
    "Shriek Mansion 1 - Super Princess Peach",
    "Shriek Mansion 2 - Super Princess Peach",
    "Fury Volcano 1 - Super Princess Peach",
    "Fury Volcano 2 - Super Princess Peach",
    "Wavy Beach 1 - Super Princess Peach",
    "Wavy Beach 2 - Super Princess Peach",
    "Gleam Glacier 1 - Super Princess Peach",
    "Gleam Glacier 2 - Super Princess Peach",
    "Giddy Sky 1 - Super Princess Peach",
    "Giddy Sky 2 - Super Princess Peach",
    "Perry's Dream - Super Princess Peach",
    "Bowser's Villa 1 - Super Princess Peach",
    "Bowser's Villa 2 - Super Princess Peach",
    "Staff Roll - Super Princess Peach",
    "Under The Starry Night - Super Princess Peach",
    "Frosty Frolics - Donkey Kong Country 3 (GBA)",
    "Treetop Tumble - Donkey Kong Country 3 (GBA)",
    "Water World - Donkey Kong Country 3 (GBA)",
    "Rockface Rumble - Donkey Kong Country 3 (GBA)",
    "Grand Canal - Mario Party 7",
    "Pagoda Peak - Mario Party 7",
    "Pyramid Park - Mario Party 7",
    "Neon Heights - Mario Party 7",
    "Windmillville - Mario Party 7",
    "Lazy Day Lollygag (Picture This, World Piece, etc) - Mario Party 7",
    "Don't Look Down (Buzzstormer, Fun Run, etc) - Mario Party 7",
    "Cool As A Cucumber (Camp Ukiki, Spin Doctor, etc) - Mario Party 7",
    "Title Screen - Mario Kart DS",
    "Main Menu - Mario Kart DS",
    "Options - Mario Kart DS",
    "Figure 8 Circuit/Mario Circuit - Mario Kart DS",
    "Yoshi Falls - Mario Kart DS",
    "Cheep Cheep Beach - Mario Kart DS",
    "Luigi's Mansion - Mario Kart DS",
    "Desert Hills - Mario Kart DS",
    "Delfino Square - Mario Kart DS",
    "Waluigi Pinball/Wario Stadium - Mario Kart DS",
    "Shroom Ridge - Mario Kart DS",
    "DK Pass - Mario Kart DS",
    "Tick Tock Clock - Mario Kart DS",
    "Airship Fortress - Mario Kart DS",
    "Peach Gardens - Mario Kart DS",
    "Bowser's Castle - Mario Kart DS",
    "Rainbow Road - Mario Kart DS",
    "GBA Sky Garden - Mario Kart DS",
    "Battle Mode - Mario Kart DS",
    "Mission Mode - Mario Kart DS",
    "Boss Battle - Mario Kart DS",
    "WiFi Menu - Mario Kart DS",
    "Records - Mario Kart DS",
    "Staff Roll - Mario Kart DS",
    "Title Screen - Super Mario Strikers",
    "The Palace Intro - Super Mario Strikers",
    "Pipeline Central Intro - Super Mario Strikers",
    "Match Results - Super Mario Strikers",
    "Opening/Staff Roll - Super Mario Strikers",
    "Hello! Time Travelers (Title Screen) - Mario & Luigi: Partners In Time",
    "File Select - Mario & Luigi: Partners In Time",
    "Shroobs! (Prologue) - Mario & Luigi: Partners In Time",
    "Peach's Castle - Mario & Luigi: Partners In Time",
    "Serious Trouble - Mario & Luigi: Partners In Time",
    "Attack The Enemy (Battle) - Mario & Luigi: Partners In Time",
    "The Time Machine - Mario & Luigi: Partners In Time",
    "Listen Up, Now - Mario & Luigi: Partners In Time",
    "Holli Jolli Village - Mario & Luigi: Partners In Time",
    "Crisis Of The Red And Green (Boss Battle) - Mario & Luigi: Partners In Time",
    "Toadwood Forest - Mario & Luigi: Partners In Time",
    "Vim Factory - Mario & Luigi: Partners In Time",
    "Yoshi Mountain - Mario & Luigi: Partners In Time",
    "Yoshi Village - Mario & Luigi: Partners In Time",
    "Yoob's Belly - Mario & Luigi: Partners In Time",
    "Gritzy Desert - Mario & Luigi: Partners In Time",
    "Koopaseum - Mario & Luigi: Partners In Time",
    "Thwomp Volcano - Mario & Luigi: Partners In Time",
    "Thwomp Caverns - Mario & Luigi: Partners In Time",
    "Toad Town - Mario & Luigi: Partners In Time",
    "Star Hill - Mario & Luigi: Partners In Time",
    "Star Shrine - Mario & Luigi: Partners In Time",
    "Shroob Castle - Mario & Luigi: Partners In Time",
    "Princess Shroob Battle - Mario & Luigi: Partners In Time",
    "Another's Requiem (Final Battle) - Mario & Luigi: Partners In Time",
    "Dance With Babies (Staff Roll) - Mario & Luigi: Partners In Time",
    "Title Screen - New Super Mario Bros. (DS)",
    "World 1 (Grass) - New Super Mario Bros. (DS)",
    "World 2 (Desert) - New Super Mario Bros. (DS)",
    "World 3 (Beach) - New Super Mario Bros. (DS)",
    "World 4 (Jungle) - New Super Mario Bros. (DS)",
    "World 5 (Snow) - New Super Mario Bros. (DS)",
    "World 6 (Mountain) - New Super Mario Bros. (DS)",
    "World 7 (Sky) - New Super Mario Bros. (DS)",
    "World 8 (Lava) - New Super Mario Bros. (DS)",
    "Ground - New Super Mario Bros. (DS)",
    "Underground - New Super Mario Bros. (DS)",
    "Underwater - New Super Mario Bros. (DS)",
    "Castle - New Super Mario Bros. (DS)",
    "Desert - New Super Mario Bros. (DS)",
    "Athletic - New Super Mario Bros. (DS)",
    "Tower - New Super Mario Bros. (DS)",
    "Ghost House - New Super Mario Bros. (DS)",
    "Beach - New Super Mario Bros. (DS)",
    "Volcano - New Super Mario Bros. (DS)",
    "Bonus - New Super Mario Bros. (DS)",
    "Staff Roll - New Super Mario Bros. (DS)",
    "Minigames Menu - New Super Mario Bros. (DS)",
    "The Plains (Mario vs. Luigi) - New Super Mario Bros. (DS)",
    "The Snow Plains (Mario vs. Luigi) - New Super Mario Bros. (DS)",
    "Sort Or 'Splode - Super Mario 64 DS",
    "Title Screen - Mario Hoops 3-On-3",
    "Character Select - Mario Hoops 3-On-3",
    "Mario Stadium - Mario Hoops 3-On-3",
    "Peach Field - Mario Hoops 3-On-3",
    "Jr. Street - Mario Hoops 3-On-3",
    "Sherbet Land - Mario Hoops 3-On-3",
    "Bloocheep Ocean - Mario Hoops 3-On-3",
    "Title Screen - Mario vs. Donkey Kong 2: March Of The Minis",
    "Mushroom Mayhem A - Mario vs. Donkey Kong 2: March Of The Minis",
    "Pipe Works A - Mario vs. Donkey Kong 2: March Of The Minis",
    "Flower Garden - Yoshi's Island DS",
    "Wildlands - Yoshi's Island DS",
    "In The Clouds - Yoshi's Island DS",
    "Flower Field (Athletic) - Yoshi's Island DS",
    "Big Boss - Yoshi's Island DS",
    "Level Select - WarioWare: Smooth Moves",
    "Temple Of Form - WarioWare: Smooth Moves",
    "Tomorrow Hill - WarioWare: Smooth Moves",
    "Wii Dancing (Wario Dance Company) - WarioWare: Smooth Moves",
    "Form Baton Tutorial - WarioWare: Smooth Moves",
    "Pyoro S - WarioWare: Smooth Moves",
    "Mad Hat (Count Cannoli Battle) - Wario: Master Of Disguise",
    "S.S. Caviar (Interior) - Wario: Master Of Disguise",
    "Sweatmore Peak - Wario: Master Of Disguise",
    "Head Honcho, Carpaccio (Carpaccio Battle) - Wario: Master Of Disguise",
    "Allergia Gardens - Wario: Master Of Disguise",
    "Main Menu - Mario Kart Arcade GP 2",
    "Waluigi Cup - Mario Kart Arcade GP 2",
    "Today's Story - Super Paper Mario",
    "Title Screen - Super Paper Mario",
    "The Evil Count Bleck - Super Paper Mario",
    "Flipside - Super Paper Mario",
    "Lineland Road - Super Paper Mario",
    "An Unrivaled Battle (8-Bit Mega Star Power) - Super Paper Mario",
    "Mount Lineland - Super Paper Mario",
    "Yold Ruins - Super Paper Mario",
    "Gloam Valley - Super Paper Mario",
    "Merlee's Mansion - Super Paper Mario",
    "The Bitlands - Super Paper Mario",
    "Nostalgic Underground - Super Paper Mario",
    "The Tile Pool - Super Paper Mario",
    "A Powerful Enemy Emerges (Boss Battle) - Super Paper Mario",
    "Dimentio, Charming Magician - Super Paper Mario",
    "Fort Francis - Super Paper Mario",
    "Outer Space - Super Paper Mario",
    "Whoa Zone - Super Paper Mario",
    "Flopside - Super Paper Mario",
    "Gap Of Crag - Super Paper Mario",
    "Floro Sapien Caverns - Super Paper Mario",
    "Sammer's Kingdom - Super Paper Mario",
    "Flipside Arcade - Super Paper Mario",
    "The Underwhere - Super Paper Mario",
    "Underchomp Battle - Super Paper Mario",
    "The Overthere - Super Paper Mario",
    "Memory 4 - Super Paper Mario",
    "Castle Bleck - Super Paper Mario",
    "The Ultimate Show (Final Battle) - Super Paper Mario",
    "Proof Of Existance - Super Paper Mario",
    "Staff Roll - Super Paper Mario",
    "Pit Of 100 Trials - Super Paper Mario",
    "Title Screen - Mario Strikers Charged",
    "Pause Menu - Mario Strikers Charged",
    "The Classroom - Mario Strikers Charged",
    "The Lava Pit - Mario Strikers Charged",
    "The Wastelands - Mario Strikers Charged",
    "Crystal Canyons - Mario Strikers Charged",
    "The Dump - Mario Strikers Charged",
    "Sudden Death - Mario Strikers Charged",
    "Mario's Theme - Mario Strikers Charged",
    "Luigi's Theme - Mario Strikers Charged",
    "Peach's Theme - Mario Strikers Charged",
    "Bowser's Theme - Mario Strikers Charged",
    "Wario's Theme - Mario Strikers Charged",
    "Petey Piranha's Theme - Mario Strikers Charged",
    "Title Screen - Mario Party 8",
    "DK's Treetop Temple - Mario Party 8",
    "Goomba's Booty Boardwalk - Mario Party 8",
    "King Boo's Haunted Hideaway - Mario Party 8",
    "Shy Guy's Perplex Express - Mario Party 8",
    "Koopa's Tycoon Town - Mario Party 8",
    "Bowser's Warped Orbit - Mario Party 8",
    "How To Play Minigames - Mario Party 8",
    "Feelin' Cyber (Ion The Prize, Mario Matrix, etc) - Mario Party 8",
    "Happy Go Lucky (At The Chomp Wash, Crank To Rank, etc) - Mario Party 8",
    "It's A Dead Heat (Alpine Assault, Cosmic Slalom, etc) - Mario Party 8",
    "Friendly Competition (Paint Misbehavin', Suger Rush, etc) - Mario Party 8",
    "DK Jungle - Donkey Kong Barrel Blast",
    "Cosmic Highway - Donkey Kong Barrel Blast",
    "Mt. Dynamite - Donkey Kong Barrel Blast",
    "Sun Sun Beach - DK: Jungle Climber",
    "Cliffy Peak - DK: Jungle Climber",
    "Wistful Lake - DK: Jungle Climber",
    "Candy's Theme - DK: Jungle Climber",
    "Title Screen - Super Mario Galaxy",
    "The Star Festival (Grand Finale Galaxy) - Super Mario Galaxy",
    "Enter The Galaxy (Gateway Galaxy) - Super Mario Galaxy",
    "Egg Planet (Good Egg Galaxy) - Super Mario Galaxy",
    "Honeyhive Galaxy/Gold Leaf Galaxy - Super Mario Galaxy",
    "Space Junk Road - Super Mario Galaxy",
    "Battlerock Galaxy/Dreadnought Galaxy - Super Mario Galaxy",
    "Beach Bowl Galaxy/Sea Slide Galaxy - Super Mario Galaxy",
    "Enter Bowser Jr.! - Super Mario Galaxy",
    "Waltz Of The Boos (Ghostly Galaxy) - Super Mario Galaxy",
    "Buoy Base Galaxy - Super Mario Galaxy",
    "Gusty Garden Galaxy - Super Mario Galaxy",
    "Rosalina In The Observatory - Super Mario Galaxy",
    "King Bowser - Super Mario Galaxy",
    "Melty Molten Galaxy - Super Mario Galaxy",
    "The Galaxy Reactor - Super Mario Galaxy",
    "Final Battle With Bowser - Super Mario Galaxy",
    "Staff Roll - Super Mario Galaxy",
    "Purple Comet - Super Mario Galaxy",
    "Blue Sky Athletic (Sweet Sweet Galaxy) - Super Mario Galaxy",
    "Super Mario 2007 (Toy Time Galaxy) - Super Mario Galaxy",
    "File Select - Super Mario Galaxy",
    "Luma - Super Mario Galaxy",
    "Dino Piranha - Super Mario Galaxy",
    "King Kaliente - Super Mario Galaxy",
    "Airship Armada (Super Mario Bros. 3 ~ Airship) - Super Mario Galaxy",
    "Space Fantasy (Bubble Breeze Galaxy/Bubble Blast Galaxy)  - Super Mario Galaxy",
    "Gateway Galaxy - Super Mario Galaxy",
    "Megaleg - Super Mario Galaxy",
    "The Fiery Stronghold - Super Mario Galaxy",
    "Star Ball - Super Mario Galaxy",
    "The Library - Super Mario Galaxy",
    "Chase The Bunnies! - Super Mario Galaxy",
    "Major Burrows - Super Mario Galaxy",
    "Cosmic Clone - Super Mario Galaxy",
    "Drip Drop Galaxy - Super Mario Galaxy",
    "Kingfin - Super Mario Galaxy",
    "Ice Mountain (Freezeflame Galaxy) - Super Mario Galaxy",
    "Lava Path (Freezeflame Galaxy) - Super Mario Galaxy",
    "Dusty Dune Galaxy - Super Mario Galaxy",
    "Heavy Metal Mecha-Bowser - Super Mario Galaxy",
    "Deep Dark Galaxy/Bigmouth Galaxy - Super Mario Galaxy",
    "Sad Girl - Super Mario Galaxy",
    "Family - Super Mario Galaxy",
    "Grand Opening (Title Screen) - Mario Party DS",
    "Wiggler's Garden - Mario Party DS",
    "Toadette's Music Room - Mario Party DS",
    "DK's Stone Statue - Mario Party DS",
    "Kamek's Library - Mario Party DS",
    "Into The Fairy Tale (Book It!, Soap Surfers, etc) - Mario Party DS",
    "Fresh As Mint (Hanger Management, Rail Riders, etc) - Mario Party DS",
    "Bouncing Around (Dust Buddies, Globe Gunners, etc) - Mario Party DS",
    "Contemplation (Dress For Success, Trace Cadets) - Mario Party DS",
    "Another Crazy Match (Fast Food Frenzy, Track Star, etc) - Mario Party DS",
    "Staff Roll - Mario Party DS",
    "Main Menu - Mario & Sonic At The Olympic Games (2007)",
    "Athletics: 100m - Mario & Sonic At The Olympic Games (2007)",
    "Mushroomy Kingdom (Ground) - Super Smash Bros. Brawl",
    "Mushroomy Kingdom (Underground) - Super Smash Bros. Brawl",
    "Underground Theme (Super Mario Land) - Super Smash Bros. Brawl",
    "Airship Theme (Super Mario Bros. 3) - Super Smash Bros. Brawl",
    "Title/Ending (Super Mario World) - Super Smash Bros. Brawl",
    "Castle/Fortress Boss (Super Mario World/Super Mario Bros. 3) - Super Smash Bros. Brawl",
    "Main Theme (New Super Mario Bros.) - Super Smash Bros. Brawl",
    "Gritzy Desert (Mario & Luigi: Partners In Time) - Super Smash Bros. Brawl",
    "Mario Bros. Medley - Super Smash Bros. Brawl",
    "Mario Golf ~ Mario Tennis - Super Smash Bros. Brawl",
    "Title (Famicom Grand Prix II: 3D Hot Rally) - Super Smash Bros. Brawl",
    "Mario Circuit (Super Mario Kart) - Super Smash Bros. Brawl",
    "Luigi Raceway (Mario Kart 64) - Super Smash Bros. Brawl",
    "Waluigi Pinball (Mario Kart DS) - Super Smash Bros. Brawl",
    "Luigi's Mansion Theme - Super Smash Bros. Brawl",
    "Opening: Donkey Kong - Super Smash Bros. Brawl",
    "Donkey Kong (25m) - Super Smash Bros. Brawl",
    "King K. Rool ~ Ship Deck 2 (Donkey Kong Country) - Super Smash Bros. Brawl",
    "Stickerbush Symphony (Donkey Kong Country 2) - Super Smash Bros. Brawl",
    "Athletic (Yoshi's Island) - Super Smash Bros. Brawl",
    "Flower Field (Yoshi Touch & Go) - Super Smash Bros. Brawl",
    "Wildlands (Yoshi's Island DS) - Super Smash Bros. Brawl",
    "Ending (Yoshi's Story) - Super Smash Bros. Brawl",
    "WarioWare, Inc. - Super Smash Bros. Brawl",
    "WarioWare, Inc. Medley - Super Smash Bros. Brawl",
    "Ashley's Song (WarioWare: Touched!) - Super Smash Bros. Brawl",
    "Mona Pizza's Song (WarioWare: Twisted!) - Super Smash Bros. Brawl",
    "Mike's Song (WarioWare: Touched!) - Super Smash Bros. Brawl",
    "Opening - Mario Kart Wii",
    "Title Screen - Mario Kart Wii",
    "Main Menu - Mario Kart Wii",
    "Luigi Circuit/Mario Circuit - Mario Kart Wii",
    "Moo Moo Meadows - Mario Kart Wii",
    "Mushroom Gorge - Mario Kart Wii",
    "Toad's Factory - Mario Kart Wii",
    "Coconut Mall - Mario Kart Wii",
    "DK Summit/DK's Snowboard Cross - Mario Kart Wii",
    "Wario's Gold Mine - Mario Kart Wii",
    "Daisy Circuit - Mario Kart Wii",
    "Koopa Cape - Mario Kart Wii",
    "Maple Treeway - Mario Kart Wii",
    "Grumble Volcano - Mario Kart Wii",
    "Dry Dry Ruins - Mario Kart Wii",
    "Moonview Highway - Mario Kart Wii",
    "Bowser's Castle - Mario Kart Wii",
    "Rainbow Road - Mario Kart Wii",
    "Staff Roll Pt.1 - Mario Kart Wii",
    "Staff Roll Pt.2 - Mario Kart Wii",
    "Block Plaza - Mario Kart Wii",
    "Delfino Pier - Mario Kart Wii",
    "Funky Stadium - Mario Kart Wii",
    "Chain Chomp Wheel/Chain Chomp Roulette - Mario Kart Wii",
    "Thwomp Desert - Mario Kart Wii",
    "GBA Shy Guy Beach - Mario Kart Wii",
    "DS Delfino Square - Mario Kart Wii",
    "GBA Battle Course 3 - Mario Kart Wii",
    "DS Twilight House - Mario Kart Wii",
    "Losing Results - Mario Kart Wii",
    "Winning Results - Mario Kart Wii",
    "Spectating - Mario Kart Wii",
    "WiFi Menu - Mario Kart Wii",
    "Galaxy Colosseum/Galaxy Arena - Mario Kart Wii",
    "Options - Mario Kart Wii",
    "Mario Kart Channel - Mario Kart Wii",
    "Main Menu - Mario Super Sluggers",
    "Character Select - Mario Super Sluggers",
    "Mario Stadium - Mario Super Sluggers",
    "Yoshi Park - Mario Super Sluggers",
    "Daisy Cruiser - Mario Super Sluggers",
    "Bowser Castle - Mario Super Sluggers",
    "Map: Yoshi Park - Mario Super Sluggers",
    "Instant Replay - Mario Super Sluggers",
    "Staff Roll - Mario Super Sluggers",
    "Title Screen - Wario Land: Shake It!",
    "Syrup's Theme - Wario Land: Shake It!",
    "Main Theme (Level Select) - Wario Land: Shake It!",
    "Stonecarving City/Launchpad Labyrinth - Wario Land: Shake It!",
    "Foulwater Falls/Gurgle Gurch - Wario Land: Shake It!",
    "Just Plains - Wario Land: Shake It!",
    "Mt. Lava Lava - Wario Land: Shake It!",
    "Stonetooth Cave/Its All Mine (Escape) - Wario Land: Shake It!",
    "Glittertown/Neon City (Wario World ~ Greenhorn Ruins) - Wario Land: Shake It!",
    "Airytale Castle/Prism Prison - Wario Land: Shake It!",
    "Mount Bighill/Bamboozle Village (Escape) - Wario Land: Shake It!",
    "Creep Blue Sea - Wario Land: Shake It!",
    "Slipshod Slopes/Freezing Fields - Wario Land: Shake It!",
    "Staff Roll - Wario Land: Shake It!",
    "On To The Next Adventure! (Title Screen) - Mario & Luigi: Bowser's Inside Story (DS)",
    "File Select - Mario & Luigi: Bowser's Inside Story (DS)",
    "It's Fawful! - Mario & Luigi: Bowser's Inside Story (DS)",
    "Resting In Toad Town - Mario & Luigi: Bowser's Inside Story (DS)",
    "Persistant Joy - Mario & Luigi: Bowser's Inside Story (DS)",
    "A Bit Of Peace And Quiet (Peach's Castle) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Here We Go! (Battle As Bros.) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Showtime! (Battle As Bowser) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Meet Me At Wonder Woods (Dimble Wood) - Mario & Luigi: Bowser's Inside Story (DS)",
    "The Path Of Secrets - Mario & Luigi: Bowser's Inside Story (DS)",
    "Bowser's Stolen Castle - Mario & Luigi: Bowser's Inside Story (DS)",
    "A Gentle Breeze At Cavi Cape - Mario & Luigi: Bowser's Inside Story (DS)",
    "Beachside Dreaming (Plack Beach) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Beachside Dreaming (Inside Bowser) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Minigame - Mario & Luigi: Bowser's Inside Story (DS)",
    "Tough Guy Alert! (Boss Battle) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Forever In The Plains (Bumpsy Plains) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Forever In The Plains (Inside Bowser) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Waltz In The Lake (Blubble Lake) - Mario & Luigi: Bowser's Inside Story (DS)",
    "The Castle Depths - Mario & Luigi: Bowser's Inside Story (DS)",
    "The Grand Finale - Mario & Luigi: Bowser's Inside Story (DS)",
    "The Giant (Giant Battle) - Mario & Luigi: Bowser's Inside Story (DS)",
    "A Journey To Remember (Staff Roll) - Mario & Luigi: Bowser's Inside Story (DS)",
    "Title Screen - WarioWare D.I.Y.",
    "Main Menu - WarioWare D.I.Y.",
    "D.I.Y. Shop - WarioWare D.I.Y.",
    "Body Rock - WarioWare D.I.Y.",
    "Assembly Dojo - WarioWare D.I.Y.",
    "Graphics Creation - WarioWare D.I.Y.",
    "Distribution Center - WarioWare D.I.Y.",
    "Staff Roll - WarioWare D.I.Y.",
    "Wario Man Super Store - WarioWare: D.I.Y. Showcase",
    "Bobsleigh - Mario & Sonic At The Olympic Winter Games (Wii)",
    "Curling - Mario & Sonic At The Olympic Winter Games (Wii)",
    "Alpine Skiing: Downhill - Mario & Sonic At The Olympic Winter Games (Wii)",
    "Dream Figure Skating: (Ground Theme ~ Super Mario Bros.) - Mario & Sonic At The Olympic Winter Games (Wii)",
    "Dream Snowball Fight: (Cool Cool Mountain ~ Super Mario 64) - Mario & Sonic At The Olympic Winter Games (Wii)",
    "Dream Ice Hockey: Bowser's Castle (Mario Kart: Super Circuit) - Mario & Sonic At The Olympic Winter Games (Wii)",
    "Dream Ski Jumping: (Good Egg Galaxy ~ Super Mario Galaxy) - Mario & Sonic At The Olympic Winter Games (Wii)",
    "Dream Ski Cross: (Mario/Luigi Circuit ~ Mario Kart Wii) - Mario & Sonic At The Olympic Winter Games (Wii)",
    "Adventure Tours: Sparkletown - Mario & Sonic At The Olympic Winter Games (DS)",
    "Adventure Tours: Boss - Mario & Sonic At The Olympic Winter Games (DS)",
    "Title Screen - New Super Mario Bros. Wii",
    "File Select - New Super Mario Bros. Wii",
    "World 1 (Grass) - New Super Mario Bros. Wii",
    "World 2 (Desert) - New Super Mario Bros. Wii",
    "World 3 (Snow) - New Super Mario Bros. Wii",
    "World 4 (Beach) - New Super Mario Bros. Wii",
    "World 5 (Jungle) - New Super Mario Bros. Wii",
    "World 6 (Mountain) - New Super Mario Bros. Wii",
    "World 7 (Sky) - New Super Mario Bros. Wii",
    "World 8 (Lava) - New Super Mario Bros. Wii",
    "Ground - New Super Mario Bros. Wii",
    "Underground - New Super Mario Bros. Wii",
    "Bonus - New Super Mario Bros. Wii",
    "Underwater - New Super Mario Bros. Wii",
    "Castle - New Super Mario Bros. Wii",
    "Desert - New Super Mario Bros. Wii",
    "Athletic - New Super Mario Bros. Wii",
    "Snow - New Super Mario Bros. Wii",
    "Jungle - New Super Mario Bros. Wii",
    "Airship - New Super Mario Bros. Wii",
    "Tower - New Super Mario Bros. Wii",
    "Ghost House - New Super Mario Bros. Wii",
    "Beach - New Super Mario Bros. Wii",
    "Volcano - New Super Mario Bros. Wii",
    "Volcano Underground - New Super Mario Bros. Wii",
    "Final Bowser - New Super Mario Bros. Wii",
    "Staff Roll - New Super Mario Bros. Wii",
    "World 9 (Space) - New Super Mario Bros. Wii",
    "Title Screen - Super Mario Galaxy 2",
    "Sky Station Galaxy - Super Mario Galaxy 2",
    "Yoshi Star Galaxy - Super Mario Galaxy 2",
    "World 1 & 2 - Super Mario Galaxy 2",
    "The Starship Sails - Super Mario Galaxy 2",
    "Spin-Dig Galaxy/Boulder Bowl Galaxy - Super Mario Galaxy 2",
    "Digga Leg - Super Mario Galaxy 2",
    "Flip Swap Galaxy/Flip Out Galaxy - Super Mario Galaxy 2",
    "Gobblegut - Super Mario Galaxy 2",
    "Tip Network - Super Mario Galaxy 2",
    "Puzzle Plank Galaxy - Super Mario Galaxy 2",
    "Wild Glide Galaxy - Super Mario Galaxy 2",
    "Cosmic Cove Galaxy - Super Mario Galaxy 2",
    "Hightail Falls Galaxy (Super Mario World ~ Athletic) - Super Mario Galaxy 2",
    "Honeybloom Galaxy/Honey Hop Galaxy - Super Mario Galaxy 2",
    "World 3 - Super Mario Galaxy 2",
    "Tall Trunk Galaxy - Super Mario Galaxy 2",
    "Tall Trunk Galaxy: Slider (Super Mario 64) - Super Mario Galaxy 2",
    "Freezy Flake Galaxy - Super Mario Galaxy 2",
    "Pipe Room - Super Mario Galaxy 2",
    "Fluffy Bluff Galaxy/Cloudy Court Galaxy - Super Mario Galaxy 2",
    "Megahammer - Super Mario Galaxy 2",
    "World 4 - Super Mario Galaxy 2",
    "Flipsville Galaxy/Chomp Works Galaxy - Super Mario Galaxy 2",
    "Glamdozer - Super Mario Galaxy 2",
    "Beat Block Galaxy/Flash Black Galaxy - Super Mario Galaxy 2",
    "Starshine Beach Galaxy - Super Mario Galaxy 2",
    "World 5 - Super Mario Galaxy 2",
    "Space Storm Galaxy/Battle Belt Galaxy - Super Mario Galaxy 2",
    "Rightside Down Galaxy/Upside Dizzy Galaxy - Super Mario Galaxy 2",
    "Haunty Halls Galaxy/Boo Moon Galaxy (Super Mario World ~ Ghost House) - Super Mario Galaxy 2",
    "Slipsand Galaxy/Clockwork Ruins Galaxy - Super Mario Galaxy 2",
    "Squizzard - Super Mario Galaxy 2",
    "Bowser Jr's Fiery Flotilla - Super Mario Galaxy 2",
    "Starship Mario - Super Mario Galaxy 2",
    "World 6 - Super Mario Galaxy 2",
    "Melty Monster Galaxy - Super Mario Galaxy 2",
    "Throwback Galaxy (Super Mario 64 ~ Bob Omb Battlefield) - Super Mario Galaxy 2",
    "Sweet Mystery Galaxy - Super Mario Galaxy 2",
    "Fleet Glide Galaxy - Super Mario Galaxy 2",
    "Slimy Spring Galaxy - Super Mario Galaxy 2",
    "Boss Blitz Galaxy - Super Mario Galaxy 2",
    "Speed Run (Speedy Comet) - Super Mario Galaxy 2",
    "World S - Super Mario Galaxy 2",
    "Bowser's Galaxy Generator - Super Mario Galaxy 2",
    "Bowser Battle - Super Mario Galaxy 2",
    "Fated Battle - Super Mario Galaxy 2",
    "Staff Roll - Super Mario Galaxy 2",
    "Green Star - Super Mario Galaxy 2",
    "Coaster Hills C (Super Mario Bros. 2 ~ Ground) - Mario vs. Donkey Kong: Mini-Land Mayhem!",
    "Teatime Twirl Boss - Mario vs. Donkey Kong: Mini-Land Mayhem!",
    "Cannon Cove C - Mario vs. Donkey Kong: Mini-Land Mayhem!",
    "Super Skywheel B - Mario vs. Donkey Kong: Mini-Land Mayhem!",
    "Donkey Kong Returns (Title Screen) - Donkey Kong Country Returns",
    "Jungle Hijinx (DK Island Swing) - Donkey Kong Country Returns",
    "Beach Overworld (Simian Segue) - Donkey Kong Country Returns",
    "Lift Beach - Donkey Kong Country Returns",
    "Storm Beach - Donkey Kong Country Returns",
    "Thrill! Gear Flight - Donkey Kong Country Returns",
    "Lift Off Launch - Donkey Kong Country Returns",
    "Aquatic Ambiance Returns - Donkey Kong Country Returns",
    "Staff Roll - Donkey Kong Country Returns",
    "Main Menu - Mario Sports Mix",
    "Mario Stadium - Mario Sports Mix",
    "Peach's Castle - Mario Sports Mix",
    "Luigi's Mansion - Mario Sports Mix",
    "Western Junction - Mario Sports Mix",
    "Bowser Jr. Boulevard - Mario Sports Mix",
    "Bowser's Castle - Mario Sports Mix",
    "Waluigi Pinball - Mario Sports Mix",
    "Feed Petey: Level 2 - Mario Sports Mix",
    "Bob Omb Dodge: Level 2 - Mario Sports Mix",
    "World 1 - Super Mario 3D Land",
    "World 2 - Super Mario 3D Land",
    "World 3 - Super Mario 3D Land",
    "World 4 - Super Mario 3D Land",
    "World 5 - Super Mario 3D Land",
    "World 6 - Super Mario 3D Land",
    "World 7 - Super Mario 3D Land",
    "World 8 - Super Mario 3D Land",
    "Special World 1 - Super Mario 3D Land",
    "Special World 5 - Super Mario 3D Land",
    "Special World 8 - Super Mario 3D Land",
    "Title Screen - Super Mario 3D Land",
    "Ground - Super Mario 3D Land",
    "Rainbow Park - Super Mario 3D Land",
    "Koopa's Lava Castle (Worlds 1 & 5) - Super Mario 3D Land",
    "Beach - Super Mario 3D Land",
    "Underwater - Super Mario 3D Land",
    "Ghost House - Super Mario 3D Land",
    "Desert Ruins - Super Mario 3D Land",
    "Snowball Park - Super Mario 3D Land",
    "Beep Block Beat (Three In A Row) - Super Mario 3D Land",
    "Clock Tower - Super Mario 3D Land",
    "Bowser's Castle (World 8) - Super Mario 3D Land",
    "The Final Battle - Super Mario 3D Land",
    "Block Land - Super Mario 3D Land",
    "Beep Block Beat (One By One) - Super Mario 3D Land",
    "Staff Roll - Super Mario 3D Land",
    "Main Menu - Mario & Sonic at the London 2012 Olympic Games",
    "Beach Volleyball - Mario & Sonic at the London 2012 Olympic Games",
    "Canoeing - Mario & Sonic at the London 2012 Olympic Games",
    "Dream Long Jump: (Yoshi's Picture Book ~ Yoshi's Story) - Mario & Sonic at the London 2012 Olympic Games",
    "Dream Equestrian: (Moo Moo Meadows ~ Mario Kart Wii) - Mario & Sonic at the London 2012 Olympic Games",
    "Dream Spacewalk: Sky Station Galaxy (Super Mario Galaxy 2) - Mario & Sonic at the London 2012 Olympic Games",
    "Chance Card (Yoshi's Island ~ Athletic) - Fortune Street",
    "Peach's Castle (Super Mario RPG) - Fortune Street",
    "Super Mario Bros. Theme - Fortune Street",
    "Bowser's Castle (New Super Mario Bros.) - Fortune Street",
    "Title Screen - Mario Kart 7",
    "Main Menu - Mario Kart 7",
    "Toad Circuit/Mario Circuit - Mario Kart 7",
    "Daisy Hills - Mario Kart 7",
    "Cheep Cheep Lagoon/Cheep Cheep Cape - Mario Kart 7",
    "Shy Guy Bazaar - Mario Kart 7",
    "Wuhu Loop/Maka Wuhu - Mario Kart 7",
    "Music Park/Melody Motorway - Mario Kart 7",
    "Rock Rock Mountain/Alpine Pass - Mario Kart 7",
    "Piranha Plant Slide/Piranha Plant Pipeway - Mario Kart 7",
    "Wario's Shipyard/Wario's Galleon - Mario Kart 7",
    "Neo Bowser City/Koopa City - Mario Kart 7",
    "DK Jungle - Mario Kart 7",
    "Rosalina's Ice World - Mario Kart 7",
    "Bowser's Castle - Mario Kart 7",
    "Rainbow Road - Mario Kart 7",
    "SNES Rainbow Road - Mario Kart 7",
    "Spectating - Mario Kart 7",
    "WiFi Menu - Mario Kart 7",
    "Staff Roll - Mario Kart 7",
    "Title Screen - Mario Party 9",
    "Main Menu - Mario Party 9",
    "Toad Road - Mario Party 9",
    "Blooper Beach - Mario Party 9",
    "Magma Mine - Mario Party 9",
    "Bowser Jr's Mad! - Mario Party 9",
    "Pandemonium (Flinger Painting, Hazard Hold, etc) - Mario Party 9",
    "Fluff (Buddy Bounce, Bumper Bubbles) - Mario Party 9",
    "Island Activities (Pianta Pool, Pier Pressure, etc) - Mario Party 9",
    "Don't Freeze (Polar Extreme, Mob Sleds, etc) - Mario Party 9",
    "Mario Stadium - Mario Tennis Open",
    "Wario Dunes - Mario Tennis Open",
    "Penguin Iceberg - Mario Tennis Open",
    "Galaxy Arena - Mario Tennis Open",
    "Title Screen - New Super Mario Bros. 2",
    "Ground - New Super Mario Bros. 2",
    "Athletic (Leaf Beat) - New Super Mario Bros. 2",
    "World Mushroom - New Super Mario Bros. 2",
    "World Flower - New Super Mario Bros. 2",
    "World Star - New Super Mario Bros. 2",
    "Coin Rush DLC Shop - New Super Mario Bros. 2",
    "Staff Roll - New Super Mario Bros. 2",
    "Title Screen - Paper Mario: Sticker Star",
    "Blue Skies, White Clouds - Paper Mario: Sticker Star",
    "Sticker Battle - Paper Mario: Sticker Star",
    "Underground Cave Connection - Paper Mario: Sticker Star",
    "Malevolent Magikoopa, Kamek Battle - Paper Mario: Sticker Star",
    "Wiggler's Sleepy Time - Paper Mario: Sticker Star",
    "Snifit Or Whiffit! - Paper Mario: Sticker Star",
    "The Lush Forest - Paper Mario: Sticker Star",
    "Snow Rise - Paper Mario: Sticker Star",
    "Give Me A Lift - Paper Mario: Sticker Star",
    "Boo Night Fever - Paper Mario: Sticker Star",
    "Battleship (Super Mario Bros. 3 ~ Airship) - Paper Mario: Sticker Star",
    "Spectacular Finale - Paper Mario: Sticker Star",
    "Staff Roll - Paper Mario: Sticker Star",
    "Start Up Screen - New Super Mario Bros. U",
    "Title Screen - New Super Mario Bros. U",
    "Main Menu - New Super Mario Bros. U",
    "Acorn Plains (World 1) - New Super Mario Bros. U",
    "Frosted Glacier (World 4) - New Super Mario Bros. U",
    "Soda Jungle ~ Deep Jungle (World 5) - New Super Mario Bros. U",
    "Rock Candy Mines (World 6) - New Super Mario Bros. U",
    "Meringue Clouds (World 7) - New Super Mario Bros. U",
    "Peach's Castle (World 8) - New Super Mario Bros. U",
    "Superstar Road (World 9) - New Super Mario Bros. U",
    "Ground - New Super Mario Bros. U",
    "Athletic - New Super Mario Bros. U",
    "Snow - New Super Mario Bros. U",
    "Staff Roll - New Super Mario Bros. U",
    "Title Screen - Luigi's Mansion: Dark Moon",
    "Gloomy Manor - Luigi's Mansion: Dark Moon",
    "Evershade Valley - Luigi's Mansion: Dark Moon",
    "Haunted Towers - Luigi's Mansion: Dark Moon",
    "Old Clockworks - Luigi's Mansion: Dark Moon",
    "Duel Scream Ringtone - Luigi's Mansion: Dark Moon",
    "ScareScraper - Luigi's Mansion: Dark Moon",
    "Staff Roll - Luigi's Mansion: Dark Moon",
    "Patchwork - Game & Wario",
    "Mom Appears! (Gamer) - Game & Wario",
    "Ashley (Stage 1) - Game & Wario",
    "Sketch - Game & Wario",
    "Fruit - Game & Wario",
    "Your Dream Adventure! (Title Screen) - Mario & Luigi: Dream Team",
    "Travel Journal (File Select) - Mario & Luigi: Dream Team",
    "Panic Pit - Mario & Luigi: Dream Team",
    "Comedic Curtains - Mario & Luigi: Dream Team",
    "Nightmare Lullaby - Mario & Luigi: Dream Team",
    "Bowser's Theme - Mario & Luigi: Dream Team",
    "Antasma's Theme - Mario & Luigi: Dream Team",
    "Challenging Actions! - Mario & Luigi: Dream Team",
    "Break At Pi'illo Castle - Mario & Luigi: Dream Team",
    "Breezy Mushrise Park - Mario & Luigi: Dream Team",
    "Dozing Sands Secret - Mario & Luigi: Dream Team",
    "Shopping In Wakeport - Mario & Luigi: Dream Team",
    "Lofty Mount Pajamaja - Mario & Luigi: Dream Team",
    "Sunny Driftwood Shore - Mario & Luigi: Dream Team",
    "Sacred Somnom Woods - Mario & Luigi: Dream Team",
    "Neo Bowser Castle - Mario & Luigi: Dream Team",
    "Dreamy Castle Rendezvous - Mario & Luigi: Dream Team",
    "Rules On Dreamy Mountain - Mario & Luigi: Dream Team",
    "Try, Try Again (Battle) - Mario & Luigi: Dream Team",
    "Victory In The Dream World (Dream Battle) - Mario & Luigi: Dream Team",
    "Never Let Up! (Boss Battle) - Mario & Luigi: Dream Team",
    "Size Up Your Enemy (Giant Battle) - Mario & Luigi: Dream Team",
    "The Final Antasma Battle - Mario & Luigi: Dream Team",
    "Adventure's End - Mario & Luigi: Dream Team",
    "Peach's Castle - Mario Kart Arcade GP DX",
    "Kingdom Way - Mario Kart Arcade GP DX",
    "Bon Dance Street - Mario Kart Arcade GP DX",
    "Omatsuri Circuit - Mario Kart Arcade GP DX",
    "Snowboard Cross - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Ice Hockey - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Bowser's Factory - Mario Kart Arcade GP DX",
    "Aerial Road - Mario Kart Arcade GP DX",
    "Sky Arena - Mario Kart Arcade GP DX",
    "Staff Roll - Mario Kart Arcade GP DX",
    "Ground Theme (Super Mario Bros.) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Underwater Theme (Super Mario Bros.) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Ground Theme (Super Mario Bros. 3) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Figure Skating Pairs (Birabuto Kingdom/Ending ~ Super Mario Land) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Staff Roll (Super Mario 64) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Snowball Scrimmage: (Sherbet Land ~ Mario Kart 64) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Snow Day Street Hockey: Delfino Plaza (Super Mario Sunshine) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Mario Circuit (Mario Kart: Double Dash!!) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Groove Pipe Snowboard: (Mushroom Bridge/City ~ Mario Kart: Double Dash!!) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Underwater Theme (New Super Mario Bros.) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Buoy Base Galaxy (Super Mario Galaxy) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Gusty Garden Galaxy (Super Mario Galaxy) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Daisy Circuit (Mario Kart Wii) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Wario's Gold Mine (Mario Kart Wii) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Rainbow Road (Mario Kart Wii) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Snow Theme (New Super Mario Bros. Wii) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Puzzle Plank Galaxy (Super Mario Galaxy 2) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Bowser's Galaxy Generator (Super Mario Galaxy 2) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    "Title Screen - Super Mario 3D World",
    "World 1 (Grass) - Super Mario 3D World",
    "World 2 (Desert) - Super Mario 3D World",
    "World 3 (Snow) - Super Mario 3D World",
    "World 4 (Canyon) - Super Mario 3D World",
    "World 5 (Beach) - Super Mario 3D World",
    "World 6 (Sky) - Super Mario 3D World",
    "World Castle - Super Mario 3D World",
    "World Bowser - Super Mario 3D World",
    "World Star - Super Mario 3D World",
    "World Mushroom/Flower - Super Mario 3D World",
    "Super Bell Hill - Super Mario 3D World",
    "Underground - Super Mario 3D World",
    "Switch Scramble Circus - Super Mario 3D World",
    "Mystery House Entrance - Super Mario 3D World",
    "Shifty Boo Mansion - Super Mario 3D World",
    "Captain Toad Goes Forth - Super Mario 3D World",
    "Chain Link Charge (Athletic) - Super Mario 3D World",
    "Hisstocrat - Super Mario 3D World",
    "Sprawling Savannah - Super Mario 3D World",
    "Beep Block Skyway - Super Mario 3D World",
    "Fuzzy Time Mine - Super Mario 3D World",
    "Sprixie Princess Theme (Stamp House) - Super Mario 3D World",
    "Fort Fire Bros. - Super Mario 3D World",
    "Bowser's Highway Showdown - Super Mario 3D World",
    "Double Cherry Pass - Super Mario 3D World",
    "Puffprod Peaks/Footlight Lane/Super Galaxy - Super Mario 3D World",
    "The Bullet Bill Express - Super Mario 3D World",
    "The Great Tower - Super Mario 3D World",
    "The Great Tower Showdown - Super Mario 3D World",
    "The Credits Roll (Staff Roll) - Super Mario 3D World",
    "Conkdor Canyon - Super Mario 3D World",
    "Mount Must Dash (Super Mario Kart ~ Mario Circuit) - Super Mario 3D World",
    "Snowball Park - Super Mario 3D World",
    "Hands On Hall - Super Mario 3D World",
    "Captain Toad Plays Peek-A-Boo - Super Mario 3D World",
    "Pipeline Lagoon/Sunshine Seaside (Above Water) - Super Mario 3D World",
    "Pipeline Lagoon/Sunshine Seaside (Underwater) - Super Mario 3D World",
    "A Boss Approaches - Super Mario 3D World",
    "Bowser's Bullet Bill Brigade - Super Mario 3D World",
    "Piranha Creeper Creek - Super Mario 3D World",
    "Roulette House - Super Mario 3D World",
    "Simmering Lava Lake - Super Mario 3D World",
    "Bowser's Lava Lake Keep - Super Mario 3D World",
    "Splash River (Super Mario 64 ~ Slider) - Super Mario 3D World",
    "Motley Boss Blob - Super Mario 3D World",
    "Super Block Land (Super Mario 3D Land ~ Ground) - Super Mario 3D World",
    "Captain Toad's Fiery Finale - Super Mario 3D World",
    "Champion's Road (Super Mario Galaxy ~ Gusty Garden Galaxy) - Super Mario 3D World",
    "Main Menu - Mario Party: Island Tour",
    "Perilous Palace Path - Mario Party: Island Tour",
    "Rocket Road - Mario Party: Island Tour",
    "Dizzy - Dr. Luigi",
    "Drowsy - Dr. Luigi",
    "Title Screen - Donkey Kong Country: Tropical Freeze",
    "Mangrove Cove - Donkey Kong Country: Tropical Freeze",
    "Mangrove Cove (Underwater) - Donkey Kong Country: Tropical Freeze",
    "Trunk Twister - Donkey Kong Country: Tropical Freeze",
    "Busted Bayou - Donkey Kong Country: Tropical Freeze",
    "Big Top Bop (World 1 Boss) - Donkey Kong Country: Tropical Freeze",
    "Windmill Hills - Donkey Kong Country: Tropical Freeze",
    "Mountain Mania - Donkey Kong Country: Tropical Freeze",
    "Grassland Groove - Donkey Kong Country: Tropical Freeze",
    "Scorch 'N' Torch - Donkey Kong Country: Tropical Freeze",
    "Twilight Terror (Stickerbush Symphony Returns) - Donkey Kong Country: Tropical Freeze",
    "Fruity Factory - Donkey Kong Country: Tropical Freeze",
    "Jelly Jamboree - Donkey Kong Country: Tropical Freeze",
    "Frosty Fruits - Donkey Kong Country: Tropical Freeze",
    "Seashore War - Donkey Kong Country: Tropical Freeze",
    "Staff Roll - Donkey Kong Country: Tropical Freeze",
    "Secret Seclusion (Donkey Kong Jr. Theme) - Donkey Kong Country: Tropical Freeze",
    "Yoshi Clan - Yoshi's New Island",
    "Main Theme - Yoshi's New Island",
    "Underground - Yoshi's New Island",
    "Bouncy Beanstalk Walk - Yoshi's New Island",
    "Bandit Valley - Yoshi's New Island",
    "Forest Course - Mario Golf World Tour",
    "Sky Island (Super Mario Bros. 3 ~ Athletic) - Mario Golf World Tour",
    "Peach Gardens - Mario Golf World Tour",
    "Rock-Candy Mines - Mario Golf World Tour",
    "Title Screen - Mario Kart 8",
    "Selection Screen - Mario Kart 8",
    "Mario Kart Stadium - Mario Kart 8",
    "Water Park - Mario Kart 8",
    "Sweet Sweet Canyon - Mario Kart 8",
    "Thwomp Ruins - Mario Kart 8",
    "Mario Circuit - Mario Kart 8",
    "Toad Harbor - Mario Kart 8",
    "Twisted Mansion - Mario Kart 8",
    "Shy Guy Falls - Mario Kart 8",
    "Sunshine Airport - Mario Kart 8",
    "Dolphin Shoals (Underwater) - Mario Kart 8",
    "Dolphin Shoals (On The Sea) - Mario Kart 8",
    "Electrodrome - Mario Kart 8",
    "Mount Wario - Mario Kart 8",
    "Cloudtop Cruise - Mario Kart 8",
    "Bone Dry Dunes - Mario Kart 8",
    "Bowser's Castle - Mario Kart 8",
    "Rainbow Road - Mario Kart 8",
    "Wii Moo Moo Meadows - Mario Kart 8",
    "GBA Mario Circuit - Mario Kart 8",
    "DS Cheep Cheep Beach - Mario Kart 8",
    "N64 Toad's Turnpike - Mario Kart 8",
    "GCN Dry Dry Desert - Mario Kart 8",
    "SNES Donut Plains 3 - Mario Kart 8",
    "N64 Royal Raceway - Mario Kart 8",
    "3DS DK Jungle - Mario Kart 8",
    "DS Wario Stadium - Mario Kart 8",
    "GCN Sherbet Land - Mario Kart 8",
    "3DS Music Park/3DS Melody Motorway - Mario Kart 8",
    "N64 Yoshi Valley - Mario Kart 8",
    "DS Tick Tock Clock - Mario Kart 8",
    "3DS Piranha Plant Slide/3DS Piranha Plant Pipeway - Mario Kart 8",
    "Wii Grumble Volcano - Mario Kart 8",
    "N64 Rainbow Road - Mario Kart 8",
    "Mario Kart TV - Mario Kart 8",
    "GCN Yoshi Circuit - Mario Kart 8",
    "Excitebike Arena - Mario Kart 8",
    "Dragon Driftway - Mario Kart 8",
    "Mute City - Mario Kart 8",
    "Wii Wario's Gold Mine - Mario Kart 8",
    "SNES Rainbow Road - Mario Kart 8",
    "Ice Ice Outpost - Mario Kart 8",
    "Hyrule Circuit - Mario Kart 8",
    "GCN Baby Park - Mario Kart 8",
    "GBA Cheese Land - Mario Kart 8",
    "Wild Woods - Mario Kart 8",
    "Animal Crossing (Summer) - Mario Kart 8",
    "Animal Crossing (Winter) - Mario Kart 8",
    "3DS Neo Bowser City/3DS Koopa City - Mario Kart 8",
    "GBA Ribbon Road - Mario Kart 8",
    "Super Bell Subway - Mario Kart 8",
    "Big Blue - Mario Kart 8",
    "Spectating - Mario Kart 8",
    "Selection Screen (Online) - Mario Kart 8",
    "Staff Roll - Mario Kart 8",
    "Super Mario World Medley - Super Smash Bros. For 3DS/Wii U",
    "Fortress Boss (Super Mario World) - Super Smash Bros. For 3DS/Wii U",
    "Main Theme (Super Mario 64) - Super Smash Bros. For 3DS/Wii U",
    "Rosalina In The Observatory / Luma (Super Mario Galaxy) - Super Smash Bros. For 3DS/Wii U",
    "Egg Planet (Good Egg Galaxy ~ Super Mario Galaxy) - Super Smash Bros. For 3DS/Wii U",
    "Ground Theme (Super Mario 3D Land) - Super Smash Bros. For 3DS/Wii U",
    "Try, Try Again (Mario & Luigi: Dream Team) - Super Smash Bros. For 3DS/Wii U",
    "Blue Skies, White Clouds (Paper Mario: Sticker Star) - Super Smash Bros. For 3DS/Wii U",
    "Rogueport (Paper Mario: The Thousand Year Door) - Super Smash Bros. For 3DS/Wii U",
    "Title Theme (Super Mario Maker) - Super Smash Bros. For 3DS/Wii U",
    "Wrecking Crew Medley - Super Smash Bros. For 3DS/Wii U",
    "Mario Paint Medley - Super Smash Bros. For 3DS/Wii U",
    "Rainbow Road Medley - Super Smash Bros. For 3DS/Wii U",
    "Circuit (Mario Kart 7) - Super Smash Bros. For 3DS/Wii U",
    "Luigi's Mansion Series Medley - Super Smash Bros. For 3DS/Wii U",
    "DK Island Swing (Donkey Kong Country) - Super Smash Bros. For 3DS/Wii U",
    "Gear Getaway (Donkey Kong Country Returns) - Super Smash Bros. For 3DS/Wii U",
    "Flower Field / Opening Melody (Yoshi's Island) - Super Smash Bros. For 3DS/Wii U",
    "Main Theme (Yoshi's Woolly World) - Super Smash Bros. For 3DS/Wii U",
    "Title Screen - Captain Toad: Treasure Tracker",
    "Plucky Path Beginnings - Captain Toad: Treasure Tracker",
    "Underground - Captain Toad: Treasure Tracker",
    "Ruins - Captain Toad: Treasure Tracker",
    "Piranha Creeper Dash - Captain Toad: Treasure Tracker",
    "Spinwheel Library - Captain Toad: Treasure Tracker",
    "Trick Track Hall - Captain Toad: Treasure Tracker",
    "Universal Unary Unison (Space) - Captain Toad: Treasure Tracker",
    "Rolling Hills A - Mario vs. Donkey Kong: Tipping Stars",
    "Twilight Valley A - Mario vs. Donkey Kong: Tipping Stars",
    "Orbiting Observatory A - Mario vs. Donkey Kong: Tipping Stars",
    "Main Menu - Mario Party 10",
    "Mushroom Park - Mario Party 10",
    "Whimsical Waters - Mario Party 10",
    "Airship Central - Mario Party 10",
    "Bowser's Turn - Mario Party 10",
    "amiibo Party: Wario (Stonecarving City ~ Wario Land: Shake It!) - Mario Party 10",
    "Swing! (Rapid River Race) - Mario Party 10",
    "Exciting And Exciting (Foo Me Once, Goombrat Combat) - Mario Party 10",
    "Craft Island - Yoshi's Woolly World",
    "Title Screen - Yoshi's Woolly World",
    "Yarn Yoshi Takes Shape! (Main Theme) - Yoshi's Woolly World",
    "Shy But Deadly - Yoshi's Woolly World",
    "Across The Fluttering Dunes - Yoshi's Woolly World",
    "A Little Light Snowfall - Yoshi's Woolly World",
    "Fluffin' Puffin' Babysitting - Yoshi's Woolly World",
    "Knitty-Knotty Windmill - Yoshi's Woolly World",
    "Lava Scarves & Red-Hot Blarggs - Yoshi's Woolly World",
    "Spooky Scraps! Don't Get Spooked! - Yoshi's Woolly World",
    "Fluffy Snow, Here We Go! - Yoshi's Woolly World",
    "Frozen Solid And Chilled - Yoshi's Woolly World",
    "Up Shuttlethread Pass - Yoshi's Woolly World",
    "Yoshi & Cookies - Yoshi's Woolly World",
    "Bounceabout Woods - Yoshi's Woolly World",
    "Special Course - Yoshi's Woolly World",
    "Staff Roll - Yoshi's Woolly World",
    "Title Screen - Super Mario Maker",
    "Ground [Super Mario Bros.] (Edit) - Super Mario Maker",
    "Underground [Super Mario Bros.] (Edit) - Super Mario Maker",
    "Airship [Super Mario Bros.] - Super Mario Maker",
    "Ghost House [Super Mario Bros.] - Super Mario Maker",
    "Ghost House [Super Mario Bros. 3] - Super Mario Maker",
    "Ground [Super Mario World] (Edit) - Super Mario Maker",
    "Airship [Super Mario World] - Super Mario Maker",
    "Ground [New Super Mario Bros. U] (Edit) - Super Mario Maker",
    "100 Mario Challenge (Super Mario Bros. 3 ~ Grass Land) - Super Mario Maker",
    "Start Of The Adventure (Title Screen) - Mario & Luigi: Paper Jam",
    "Whispered Secrets (Peach's Theme) - Mario & Luigi: Paper Jam",
    "Springtime Breeze - Mario & Luigi: Paper Jam",
    "Uh Oh, Sand Flow! (Doop Doop Dunes) - Mario & Luigi: Paper Jam",
    "Epic Story (Twinsy Tropics) - Mario & Luigi: Paper Jam",
    "Mixed-Up Scramble (Battle) - Mario & Luigi: Paper Jam",
    "Big Bang! (Boss Battle) - Mario & Luigi: Paper Jam",
    "Attack And Run! (Papercraft Battle) - Mario & Luigi: Paper Jam",
    "Forest Fairy Melody (Gloomy Woods) - Mario & Luigi: Paper Jam",
    "Mountaintop Secrets (Mount Brrr) - Mario & Luigi: Paper Jam",
    "Welcome To The Lakitu Info Center! - Mario & Luigi: Paper Jam",
    "Floating Castle Of Doom (Neo Bowser Castle) - Mario & Luigi: Paper Jam",
    "Final Battle - Mario & Luigi: Paper Jam",
    "Paper Parade! (Staff Roll) - Mario & Luigi: Paper Jam",
    "Egg Launch Land (Yoshi's Island ~ Flower Field) - Mini Mario & Friends: amiibo Challenge",
    "Moonlight Mansion (Luigi's Mansion ~ Main Theme) - Mini Mario & Friends: amiibo Challenge",
    "Fire Ride Fortress (Super Mario 64 ~ Bowser's Theme) - Mini Mario & Friends: amiibo Challenge",
    "Gravity Galaxy (Super Mario Galaxy ~ Rosalina In The Observatory) - Mini Mario & Friends: amiibo Challenge",
    "Fútbol - Mario & Sonic at the Rio 2016 Olympic Games",
    "Equestrian - Mario & Sonic at the Rio 2016 Olympic Games",
    "Copacabana Beach - Mario & Sonic at the Rio 2016 Olympic Games",
    "Rhythmic Hoop: Ground Theme (Super Mario Bros.) - Mario & Sonic at the Rio 2016 Olympic Games",
    "Rosalina In The Observatory (Super Mario Galaxy) - Mario & Sonic at the Rio 2016 Olympic Games",
    "Ground Theme (New Super Mario Bros. Wii) - Mario & Sonic at the Rio 2016 Olympic Games",
    "Final Bowser (New Super Mario Bros. Wii) - Mario & Sonic at the Rio 2016 Olympic Games",
    "Ground Theme (New Super Mario Bros. U) - Mario & Sonic at the Rio 2016 Olympic Games",
    "Cheep Cheep Beach (Mario Kart DS) - Mario & Sonic at the Rio 2016 Olympic Games",
    "DK Island Swing (Donkey Kong Country) - Mario & Sonic at the Rio 2016 Olympic Games",
    "Title Screen - Paper Mario: Color Splash",
    "Card Battle - Paper Mario: Color Splash",
    "Port Prisma - Paper Mario: Color Splash",
    "Ruddy Road - Paper Mario: Color Splash",
    "Toad Cafe - Paper Mario: Color Splash",
    "Cherry Lake - Paper Mario: Color Splash",
    "Indigo Underground - Paper Mario: Color Splash",
    "Bloo Bay Beach - Paper Mario: Color Splash",
    "Blissful Beach - Paper Mario: Color Splash",
    "Daffodil Peak - Paper Mario: Color Splash",
    "Sunglow Ridge - Paper Mario: Color Splash",
    "Marmalade Valley - Paper Mario: Color Splash",
    "Plum Park - Paper Mario: Color Splash",
    "The Violet Isles - Paper Mario: Color Splash",
    "Toad Trainworks - Paper Mario: Color Splash",
    "Prisma Museum - Paper Mario: Color Splash",
    "SMB3 Battle - Paper Mario: Color Splash",
    "Rainbow Road - Paper Mario: Color Splash",
    "Staff Roll - Paper Mario: Color Splash",
    "Star Rush Plaza (Main Menu) - Mario Party: Star Rush",
    "Toad Scramble (World 1) - Mario Party: Star Rush",
    "Balloon Bash - Mario Party: Star Rush",
    "Boo's Block Party - Mario Party: Star Rush",
    "Ground - Super Mario Run",
    "Underground - Super Mario Run",
    "Remix 10 - Super Mario Run",
    "Ground (Coin Rush) - Super Mario Run",
    "Ghost House (Coin Rush) - Super Mario Run",
    "Remix 10 Menu - Super Mario Run",
    "Selection Screen (Wireless) - Mario Kart 8 Deluxe",
    "Battle Stadium - Mario Kart 8 Deluxe",
    "Lunar Colony - Mario Kart 8 Deluxe",
    "3DS Wuhu Town - Mario Kart 8 Deluxe",
    "GCN Luigi's Mansion - Mario Kart 8 Deluxe",
    "SNES Battle Course 1 - Mario Kart 8 Deluxe",
    "Urchin Underpass (Splattack!) - Mario Kart 8 Deluxe",
    "Two Worlds Collide - Mario + Rabbids Kingdom Battle",
    "Sunny Side Up - Mario + Rabbids Kingdom Battle",
    "Hoppers! - Mario + Rabbids Kingdom Battle",
    "Mid Boss Mayhem - Mario + Rabbids Kingdom Battle",
    "A Song Of Ice And Desert - Mario + Rabbids Kingdom Battle",
    "Cold Start, Hot Finish - Mario + Rabbids Kingdom Battle",
    "Icicle Golem Finale - Mario + Rabbids Kingdom Battle",
    "A Stroll In The Cemetary - Mario + Rabbids Kingdom Battle",
    "The Phantom Of The Bwahpera, Act 1 - Mario + Rabbids Kingdom Battle",
    "The Phantom Of The Bwahpera, Act 3 - Mario + Rabbids Kingdom Battle",
    "A New Adventure Begins (Title Screen) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "Let's Go! (Battle) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "We Can't Lose! (Boss Battle) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "The Marvelous Duo - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "The Kingdom Called Beanbean (Beanbean Fields) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "Beanish People (Hoohoo Village) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "Sweet Surfin' (Gwarhar Lagoon) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "Don't Dwell On Danger (Tee Hee Valley) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "This Is Minion Turf! (Battle) (Bowser's Minions) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "Going Home (Staff Roll) - Mario & Luigi: Superstar Saga + Bowser's Minions",
    "Jump Up, Super Star! - Super Mario Odyssey",
    "Bonneton (Cap Kingdom) - Super Mario Odyssey",
    "Battling The Broodals - Super Mario Odyssey",
    "Fossil Falls (Cascade Kingdom) - Super Mario Odyssey",
    "To The Next Kingdom! (World Map) - Super Mario Odyssey",
    "Tostarena Ruins (Sand Kingdom) - Super Mario Odyssey",
    "Inside The Inverted Pyramid - Super Mario Odyssey",
    "Tostarena Town (Sand Kingdom) - Super Mario Odyssey",
    "Jaxi Joyride (Sand Kingdom) - Super Mario Odyssey",
    "Steam Gardens (Wooded Kingdom) - Super Mario Odyssey",
    "Lake Lamode (Lake Kingdom) - Super Mario Odyssey",
    "Lake Lamode: Underwater Passage - Super Mario Odyssey",
    "Forgotten Isle (Lost Kingdom) - Super Mario Odyssey",
    "New Donk City (Metro Kingdom) - Super Mario Odyssey",
    "Pausing By The Poolside (Super Mario World ~ Ground) - Super Mario Odyssey",
    "The Band's All Here (Super Mario Bros. ~ Ground) - Super Mario Odyssey",
    "Bubblaine (Seaside Kingdom) - Super Mario Odyssey",
    "Bubblaine: Underwater (Seaside Kingdom) - Super Mario Odyssey",
    "Shiveria Town (Snow Kingdom) - Super Mario Odyssey",
    "Mount Volbono (Luncheon Kingdom) - Super Mario Odyssey",
    "Peronza Plaza (Luncheon Kingdom) - Super Mario Odyssey",
    "Bowser's Castle (Bowser's Kingdom) - Super Mario Odyssey",
    "Honeylune Ridge (Moon Kingdom) - Super Mario Odyssey",
    "Underground Moon Caverns (Moon Kingdom) - Super Mario Odyssey",
    "Honeylune Ridge: Collapse (Moon Kingdom) - Super Mario Odyssey",
    "Break Free (Lead The Way) - Super Mario Odyssey",
    "Staff Roll - Super Mario Odyssey",
    "Peach's Castle (Mushroom Kingdom) - Super Mario Odyssey",
    "Run, Jump, Throw! 1 - Super Mario Odyssey",
    "Run, Jump, Throw! 2 - Super Mario Odyssey",
    "Cooking Cookatiel - Super Mario Odyssey",
    "Rebuffing The Ruined Dragon - Super Mario Odyssey",
    "Battling Bowser (Nimbus Arena) - Super Mario Odyssey",
    "Top Hat Tower - Super Mario Odyssey",
    "Ice Caves - Super Mario Odyssey",
    "Challenges In Another World - Super Mario Odyssey",
    "Crazy Cap - Super Mario Odyssey",
    "Race - Super Mario Odyssey",
    "RC Car Challenge (Super Mario Kart ~ Mario Circuit) - Super Mario Odyssey",
    "Main Menu - Mario Party: The Top 100",
    "Everybody Party [Mario Party 5] (Dinger Derby, Coney Island, etc) - Mario Party: The Top 100",
    "Title Screen - Mario Tennis Aces",
    "Stadium Theme - Mario Tennis Aces",
    "Midboss Melee - Mario + Rabbids Kingdom Battle: Donkey Kong Adventure",
    "Dungeon Dispute - Mario + Rabbids Kingdom Battle: Donkey Kong Adventure",
    "Main Menu - WarioWare Gold",
    "Drifting Away (Mega Microgame$!) - WarioWare Gold",
    "Body Rock (D.I.Y.) - WarioWare Gold",
    "Work Those Muscles! (5-Volt Stage) - WarioWare Gold",
    "18 x 13 - WarioWare Gold",
    "Wario Deluxe (Final Stage) - WarioWare Gold",
    "Main Theme - Super Mario Party",
    "Party Plaza - Super Mario Party",
    "Megafruit Paradise/Watermelon Walkabout - Super Mario Party",
    "Kamek's Tantalizing Tower/Tantalizing Tower Toys - Super Mario Party",
    "Around And Around (Sizzling Stakes, Tow The Line, etc) - Super Mario Party",
    "Pleasantly Happy (Can Take Pancake, Go With The Flow) - Super Mario Party",
    "Ground Theme (Super Mario Bros. 2) - Super Smash Bros. Ultimate",
    "Ground Theme (Super Mario Bros. 3) - Super Smash Bros. Ultimate",
    "King Bowser (Super Mario Bros. 3) - Super Smash Bros. Ultimate",
    "Delfino Plaza (Super Mario Sunshine) - Super Smash Bros. Ultimate",
    "Luigi's Mansion Theme - Super Smash Bros. Ultimate",
    "Wrecking Crew Medley - Super Smash Bros. Ultimate",
    "Donkey Kong & Donkey Kong Jr. Medley - Super Smash Bros. Ultimate",
    "The Map Page / Bonus Level (Donkey Kong Country) - Super Smash Bros. Ultimate",
    "Gang Plank Galleon (Donkey Kong Country) - Super Smash Bros. Ultimate",
    "Main Theme (Yoshi's New Island) - Super Smash Bros. Ultimate",
    "Mario, Luigi, And Bowser Too! (Title Screen) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "Here We Go! (Battle As Bros.) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "Showtime! (Battle As Bowser) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "A Gentle Breeze At Cavi Cape - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "Tough Guy Alert! (Boss Battle) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "Forever In The Plains (Bumpsy Plains) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "Destroy the Dark Power! - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "The Grand Finale - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "Bowser Jr.'s Theme (Bowser Jr.'s Journey) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "Battle! (Bowser Jr.'s Journey) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
    "Staff Roll - New Super Mario Bros. U Deluxe",
    "Main Theme - Yoshi's Crafted World",
    "Water/Space Level - Yoshi's Crafted World",
    "Hidden Hills - Yoshi's Crafted World",
    "Title Screen - Super Mario Maker 2",
    "Desert [Super Mario Bros.] - Super Mario Maker 2",
    "Snow [Super Mario Bros.] - Super Mario Maker 2",
    "Forest [Super Mario Bros.] - Super Mario Maker 2",
    "Sky [Super Mario Bros.] - Super Mario Maker 2",
    "Snow [Super Mario Bros. 3] - Super Mario Maker 2",
    "Desert [Super Mario World] - Super Mario Maker 2",
    "Snow [Super Mario World] - Super Mario Maker 2",
    "Forest [Super Mario World] - Super Mario Maker 2",
    "Yamamura's Dojo - Super Mario Maker 2",
    "Peach's Castle - Super Mario Maker 2",
    "Fever - Dr. Mario World",
    "Main Menu - Mario Kart Tour",
    "New York Minute - Mario Kart Tour",
    "Tokyo Blur - Mario Kart Tour",
    "Paris Promenade - Mario Kart Tour",
    "London Loop - Mario Kart Tour",
    "Vancouver Velocity - Mario Kart Tour",
    "Los Angeles Laps - Mario Kart Tour",
    "Merry Mountain - Mario Kart Tour",
    "Berlin Byways - Mario Kart Tour",
    "Ninja Hideaway - Mario Kart Tour",
    "Sydney Sprint - Mario Kart Tour",
    "Singapore Speedway - Mario Kart Tour",
    "Amsterdam Drift - Mario Kart Tour",
    "Bangkok Rush - Mario Kart Tour",
    "GBA Sunset Wilds - Mario Kart Tour",
    "GBA Sky Garden - Mario Kart Tour",
    "GBA Boo Lake - Mario Kart Tour",
    "GBA Riverside Park - Mario Kart Tour",
    "GBA Snow Land - Mario Kart Tour",
    "Piranha Plant Cove - Mario Kart Tour",
    "GBA Yoshi Desert - Mario Kart Tour",
    "Athens Dash - Mario Kart Tour",
    "GBA Peach Circuit - Mario Kart Tour",
    "Rome Avanti - Mario Kart Tour",
    "Piranha Plant Pipeline - Mario Kart Tour",
    "GBA Lakeside Park - Mario Kart Tour",
    "Squeaky Clean Sprint - Mario Kart Tour",
    "Madrid Drive - Mario Kart Tour",
    "Race Results - Mario Kart Tour",
    "Main Theme (Title Screen) - Luigi's Mansion 3",
    "E. Gadd's Laboratory - Luigi's Mansion 3",
    "Twisted Suites - Luigi's Mansion 3",
    "Boilerworks - Luigi's Mansion 3",
    "Paranormal Productions - Luigi's Mansion 3",
    "Tomb Suites - Luigi's Mansion 3",
    "DJ Phantasmagloria Battle - Luigi's Mansion 3",
    "Staff Roll - Luigi's Mansion 3",
    "Tokyo Overworld - Mario & Sonic at the Olympic Games Tokyo 2020",
    "Surfing - Mario & Sonic at the Olympic Games Tokyo 2020",
    "Peach's Castle (Super Mario 64) - Mario & Sonic At The Olympic Games Tokyo 2020",
    "Title Screen - Paper Mario: The Origami King",
    "Event Battle - Paper Mario: The Origami King",
    "Whispering Woods - Paper Mario: The Origami King",
    "Red Streamer Battle - Paper Mario: The Origami King",
    "Toad's BBQ Foodeatery - Paper Mario: The Origami King",
    "Graffiti Underground - Paper Mario: The Origami King",
    "Toad Town (Ghost Town) - Paper Mario: The Origami King",
    "Picnic Road - Paper Mario: The Origami King",
    "Overlook Mountain - Paper Mario: The Origami King",
    "Vellumental Battle - Paper Mario: The Origami King",
    "Chestnut Valley - Paper Mario: The Origami King",
    "Eddy River - Paper Mario: The Origami King",
    "Autumn Mountain - Paper Mario: The Origami King",
    "Battle (Autumn Mountain) - Paper Mario: The Origami King",
    "Tranquil Pipes Teahouse - Paper Mario: The Origami King",
    "Shogun Studios - Paper Mario: The Origami King",
    "Olivia Having Fun - Paper Mario: The Origami King",
    "Big Sho' Theater - Paper Mario: The Origami King",
    "Swan Lake (Punk Remix) - Paper Mario: The Origami King",
    "Sweetpaper Valley - Paper Mario: The Origami King",
    "Yellow Streamer Battle - Paper Mario: The Origami King",
    "Shroom City - Paper Mario: The Origami King",
    "Thrills At Night - Paper Mario: The Origami King",
    "Scuffle Island - Paper Mario: The Origami King",
    "Toad Town (Purple Streamer Removal) - Paper Mario: The Origami King",
    "Shangri Spa - Paper Mario: The Origami King",
    "Ninji Skills - Paper Mario: The Origami King",
    "Bowser's Castle - Paper Mario: The Origami King",
    "Origami Castle - Paper Mario: The Origami King",
    "Battle With King Olly - Paper Mario: The Origami King",
    "The Final Battle - Paper Mario: The Origami King",
    "Staff Roll - Paper Mario: The Origami King",
    "Main Menu - Super Mario Bros. 35",
    "Main Theme - Mario Kart Live: Home Circuit",
    "Track Building - Mario Kart Live: Home Circuit",
    "Title Screen - Bowser's Fury",
    "Choose Your Adventure - Bowser's Fury",
    "Lake Lapcat - Bowser's Fury",
    "Scamper Shores - Bowser's Fury",
    "Bowser's Fury - Bowser's Fury",
    "Pounce Bounce Isle - Bowser's Fury",
    "Crisp Climb Castle - Bowser's Fury",
    "Fort Flaptrap - Bowser's Fury",
    "Showdown With Fury Bowser - Bowser's Fury",
    "Plessie Ride! - Bowser's Fury",
    "Mount Magmeow - Bowser's Fury",
    "Final Showdown With Fury Bowser - Bowser's Fury",
    "Staff Roll - Bowser's Fury",
    "Bonny Greens - Mario Golf: Super Rush",
    "Ridgerock Lake - Mario Golf: Super Rush",
    "Wildweather Woods (Speed Golf) - Mario Golf: Super Rush",
    "Bonny Greens (Adventure Mode) - Mario Golf: Super Rush",
    "Title Screen - WarioWare: Get It Together!",
    "Main Menu - WarioWare: Get It Together!",
    "Character Select - WarioWare: Get It Together!",
    "Penny's Song - WarioWare: Get It Together!",
    "Staff Roll - WarioWare: Get It Together!",
    "Title Screen [Mario Party 1] - Mario Party Superstars",
    "Title Screen [Mario Party 2] - Mario Party Superstars",
    "Title Screen [Mario Party 3] - Mario Party Superstars",
    "Toad's Shop Bop! [Mario Party 1] - Mario Party Superstars",
    "Peach's Birthday Cake [Mario Party 1] - Mario Party Superstars",
    "Space Land [Mario Party 2] - Mario Party Superstars",
    "Woody Woods [Mario Party 3] - Mario Party Superstars",
    "You Are The Superstar! - Mario Party Superstars",
    "Faster Than All [Mario Party 1] (Handcar Havoc) - Mario Party Superstars",
    "The Blue Skies Yonder [Mario Party 2] (Slot Car Derby, Mecha Marathon) - Mario Party Superstars",
    "Mustn't Panic [Mario Party 3] (Eatsa Pizza) - Mario Party Superstars",
    "Jazzy [Mario Party 6] (Catch You Letter) - Mario Party Superstars",
    "Cool As A Cucumber [Mario Party 7] (Spin Doctor) - Mario Party Superstars",
    "Friendly Competition [Mario Party 8] (Paint Misbehavin') - Mario Party Superstars",
    "Everyone's A Superstar (Staff Roll) - Mario Party Superstars",
    "Tour Paris Promenade (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
    "N64 Choco Mountain (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
    "Wii Coconut Mall (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
    "Tour Tokyo Blur (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
    "DS Shroom Ridge (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
    "GBA Sky Garden (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
    "Tour New York Minute (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
    "SNES Mario Circuit 3 (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
    "N64 Kalimari Desert (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
    "Tour Sydney Sprint (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
    "GBA Snow Land (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
    "Sky High Sundae (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
    "Tour London Loop (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
    "Wii Maple Treeway (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
    "DS Peach Gardens (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
    "Merry Mountain (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
    "GBA Boo Lake (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
    "3DS Rainbow Road (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
    "Title Screen - Mario Strikers: Battle League",
    "Mushroom Hill (Super Mario 3D World ~ Super Bell Hill) - Mario Strikers: Battle League",
    "Spooky Mansion (Luigi's Mansion ~ Main Theme) - Mario Strikers: Battle League",
    "Mushroom Hill (New Super Mario Bros. ~ Ground) - Mario Strikers: Battle League",
    "Royal Castle (Super Mario 64 ~ Peach's Castle) - Mario Strikers: Battle League",
    "Jungle Retreat (Donkey Kong Country ~ DK Island Swing) - Mario Strikers: Battle League",
    "Mario's Theme - Mario Strikers: Battle League",
    "Luigi's Theme - Mario Strikers: Battle League",
    "Rosalina's Theme - Mario Strikers: Battle League",
    "Bowser's Theme - Mario Strikers: Battle League",
    "On The Back Of The Darkmess Manta (Prologue) - Mario + Rabbids: Sparks Of Hope",
    "The Galaxy Awaits (Main Menu) - Mario + Rabbids: Sparks Of Hope",
    "Battle Of Beacon Beach - Mario + Rabbids: Sparks Of Hope",
    "Icy Battle Ballet - Mario + Rabbids: Sparks Of Hope",
    "Warmth Amongst The Snow - Mario + Rabbids: Sparks Of Hope",
    "Uphill Battle - Mario + Rabbids: Sparks Of Hope",
    "Fight Songs From The Flower Planet - Mario + Rabbids: Sparks Of Hope",
    "Spout Forth - Mario + Rabbids: Sparks Of Hope",
    "For The Galaxy! (Final Boss) - Mario + Rabbids: Sparks Of Hope",
    "Tour Amsterdam Drift (Wave 4) - MX8DX Booster Course Pass Waves 4-6",
    "Wii DK Summit (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
    "Yoshi's Island (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
    "Results (Yoshi's Island) (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
    "DS Mario Circuit (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
    "GCN Waluigi Stadium (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
    "Tour Singapore Speedway (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
    "Tour Athens Dash (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
    "GCN Daisy Cruiser (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
    "Wii Moonview Highway (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
    "Wii Moonview Highway (Straightaway) (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
    "Squeaky Clean Sprint (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
    "Tour Los Angeles Laps (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
    "Tour Vancouver Velocity (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
    "Tour Rome Avanti (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
    "GCN DK Mountain (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
    "Wii Daisy Circuit (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
    "Tour Madrid Drive (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
    "SNES Bowser Castle 3 (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
    "Wii Rainbow Road (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
    "Staff Roll (Booster Course Pass) - MK8DX Booster Course Pass Waves 4-6",
    "Press Start - The Super Mario Bros. Movie",
    "Strange New World - The Super Mario Bros. Movie",
    "Welcome To The Mushroom Kingdom - The Super Mario Bros. Movie",
    "Peaches - The Super Mario Bros. Movie",
    "Drivin' Me Bananas - The Super Mario Bros. Movie",
    "Karts! - The Super Mario Bros. Movie",
    "Fighting Tooth And Veil - The Super Mario Bros. Movie",
    "Mario Brothers Rap - The Super Mario Bros. Movie",
    "Superstars - The Super Mario Bros. Movie",
    "Level Complete (Credits) - The Super Mario Bros. Movie",
    "Mecha King Bob Omb Blast - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
    "The Rayman Show - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
    "Phantom Returns, Act 1 - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
    "Phantom, Razzmatazz - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
    "Phantom, Metal Mayhem - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
    "Phantom Returns, Act 3 - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
    "Title Screen - Super Mario Bros. Wonder",
    "Pipe Rock Plateau (World 1) - Super Mario Bros. Wonder",
    "Grassland (Ground) - Super Mario Bros. Wonder",
    "Bendy Boing Wonder - Super Mario Bros. Wonder",
    "Forest - Super Mario Bros. Wonder",
    "Piranha Plants On Parade - Super Mario Bros. Wonder",
    "Badge Challenge - Super Mario Bros. Wonder",
    "Savanna - Super Mario Bros. Wonder",
    "Spikey Dance Number - Super Mario Bros. Wonder",
    "Medley Mix Wonder - Super Mario Bros. Wonder",
    "Athletic - Super Mario Bros. Wonder",
    "Flippy Float Wonder - Super Mario Bros. Wonder",
    "Wiggler Race! - Super Mario Bros. Wonder",
    "Palace - Super Mario Bros. Wonder",
    "Petal Isles - Super Mario Bros. Wonder",
    "Coast (Beach) - Super Mario Bros. Wonder",
    "Underwater - Super Mario Bros. Wonder",
    "Stretchy Shadow Wonder - Super Mario Bros. Wonder",
    "Fluff Puff Peaks (World 2) - Super Mario Bros. Wonder",
    "Snow - Super Mario Bros. Wonder",
    "Jump! Jump! Jump! - Super Mario Bros. Wonder",
    "Airship - Super Mario Bros. Wonder",
    "Shining Falls (World 3) - Super Mario Bros. Wonder",
    "Lake - Super Mario Bros. Wonder",
    "Shapey Shift Wonder - Super Mario Bros. Wonder",
    "Sunbaked Desert (World 4) - Super Mario Bros. Wonder",
    "Desert - Super Mario Bros. Wonder",
    "Ninji Disco - Super Mario Bros. Wonder",
    "Fungi Mines (World 5) - Super Mario Bros. Wonder",
    "Dark Woods - Super Mario Bros. Wonder",
    "Pumpkin Party - Super Mario Bros. Wonder",
    "A Night At Boo's Opera - Super Mario Bros. Wonder",
    "Deep Magma Bog (World 6) - Super Mario Bros. Wonder",
    "Lava - Super Mario Bros. Wonder",
    "Castle Bowser - Super Mario Bros. Wonder",
    "Factory - Super Mario Bros. Wonder",
    "Zappy Zone Wonder (Super Mario 64 ~ Metal Mario) - Super Mario Bros. Wonder",
    "Bowser's Blazing Beats - Super Mario Bros. Wonder",
    "Castle Bowser Battle - Super Mario Bros. Wonder",
    "Special World - Super Mario Bros. Wonder",
    "A Very Special March - Super Mario Bros. Wonder",
    "Starry Staff Wonder (Staff Roll) - Super Mario Bros. Wonder",
    "Title Screen - WarioWare: Move It!",
    "Museum - WarioWare: Move It!",
    "Form Explanation - WarioWare: Move It!",
    "Super Wario Dance Company - WarioWare: Move It!",
    "Megagame Muscles - WarioWare: Move It!",
    "Pyoro W - WarioWare: Move It!",
    "Let's Try! (File Select) - Super Mario RPG (Switch)",
    "Super Mario House - Super Mario RPG (Switch)",
    "Danger Abounds On The Journey (Mushroom Way) - Super Mario RPG (Switch)",
    "Battling Monsters (Enemy Battle) - Super Mario RPG (Switch)",
    "Hello, Happy Kingdom (Mushroom Kingdom) - Super Mario RPG (Switch)",
    "Danger Aplenty On The Journey (Bandit's Way) - Super Mario RPG (Switch)",
    "Battling Strongish Monsters (Boss Battle) - Super Mario RPG (Switch)",
    "Battling A Weapon Boss - Super Mario RPG (Switch)",
    "Let's Take The Midas River - Super Mario RPG (Switch)",
    "Grandpa And The Upbeat Tadpoles (Tadpole Pond) - Super Mario RPG (Switch)",
    "Elegy (Sad Song) - Super Mario RPG (Switch)",
    "Beware Of Forest Mushrooms (Forest Maze) - Super Mario RPG (Switch)",
    "Rose Town - Super Mario RPG (Switch)",
    "Welcome To Yo'ster Isle - Super Mario RPG (Switch)",
    "Moleville Mountain Rail - Super Mario RPG (Switch)",
    "The Bell Rings Out At Marrymore - Super Mario RPG (Switch)",
    "Shopping At Seaside Town - Super Mario RPG (Switch)",
    "Battling Culex - Super Mario RPG (Switch)",
    "Let's Get Fluffy! (Nimbus Land) - Super Mario RPG (Switch)",
    "Farewell Geno - Super Mario RPG (Switch)",
    "Title Screen - Mario vs. Donkey Kong (Switch)",
    "Mario Toy Company C - Mario vs. Donkey Kong (Switch)",
    "Mini Mario Level - Mario vs. Donkey Kong (Switch)",
    "Merry Mini Land A - Mario vs. Donkey Kong (Switch)",
    "Spooky House A - Mario vs. Donkey Kong (Switch)",
    "Slippery Summit B - Mario vs. Donkey Kong (Switch)",
    "Twilight City A - Mario vs. Donkey Kong (Switch)",
    "Staff Roll - Mario vs. Donkey Kong (Switch)",
    "The Real Final Battle - Mario vs. Donkey Kong (Switch)",
    "Entrancing Prelude (Main Menu) - Princess Peach: Showtime!",
    "Welcome To Sparkle Theater - Princess Peach: Showtime!",
    "Assassin Disco (Ninja Peach) - Princess Peach: Showtime!",
    "Galloping Through The Wilderness (Cowgirl Peach) - Princess Peach: Showtime!",
    "Time For Tea? (Patissiere Peach) - Princess Peach: Showtime!",
    "Peach March (Trailer Theme) - Princess Peach: Showtime!",
    "Under The Cover Of Night (Dashing Thief Peach) - Princess Peach: Showtime!",
    "Snow Village - Princess Peach: Showtime!",
    "Gliding Across The Snowscape (Figure Skater Peach) - Princess Peach: Showtime!",
    "Leave the Sleuthing to Me (Detective Peach) - Princess Peach: Showtime!",
    "Enchanting Echo Of The Deep (Mermaid Peach) - Princess Peach: Showtime!",
    "Staff Roll - Princess Peach: Showtime!",
    "Title Screen - Paper Mario: The Thousand-Year Door (Switch)",
    "Greetings From The Mushroom Kingdom - Paper Mario: The Thousand-Year Door (Switch)",
    "Rogueport - Paper Mario: The Thousand-Year Door (Switch)",
    "Rogueport (Shops) - Paper Mario: The Thousand-Year Door (Switch)",
    "Rogueport Underground - Paper Mario: The Thousand-Year Door (Switch)",
    "Battle ~ Chapter 1 - Paper Mario: The Thousand-Year Door (Switch)",
    "Petal Meadows - Paper Mario: The Thousand-Year Door (Switch)",
    "Petalburg - Paper Mario: The Thousand-Year Door (Switch)",
    "Koops' Theme - Paper Mario: The Thousand-Year Door (Switch)",
    "Hooktail Castle - Paper Mario: The Thousand-Year Door (Switch)",
    "Battle ~ Extra (Hooktail Castle & Pit Of 100 Trials) - Paper Mario: The Thousand-Year Door (Switch)",
    "Super Luigi - Paper Mario: The Thousand-Year Door (Switch)",
    "Madame Flurrie's Theme - Paper Mario: The Thousand-Year Door (Switch)",
    "Yoshi Kid's Theme - Paper Mario: The Thousand-Year Door (Switch)",
    "A Bittersweet Music Box - Paper Mario: The Thousand-Year Door (Switch)",
    "Battle ~ The Champ (Rawk Hawk) - Paper Mario: The Thousand-Year Door (Switch)",
    "Battle ~ Prince Mush - Paper Mario: The Thousand-Year Door (Switch)",
    "Twilight Town - Paper Mario: The Thousand-Year Door (Switch)",
    "Vivian's Theme - Paper Mario: The Thousand-Year Door (Switch)",
    "Excess Express (Day) - Paper Mario: The Thousand-Year Door (Switch)",
    "Detective Pennington's On The Case - Paper Mario: The Thousand-Year Door (Switch)",
    "Battle ~ Chapter 6 - Paper Mario: The Thousand-Year Door (Switch)",
    "X-Naut Fortress - Paper Mario: The Thousand-Year Door (Switch)",
    "Battle ~ Shadow Queen - Paper Mario: The Thousand-Year Door (Switch)",
    "Final Battle - Paper Mario: The Thousand-Year Door (Switch)",
    "Staff Roll - Paper Mario: The Thousand-Year Door (Switch)",
    "Title Screen - Super Mario Party Jamboree",
    "Mega Wiggler's Tree Party - Super Mario Party Jamboree",
    "Goomba Lagoon - Super Mario Party Jamboree",
    "Rainbow Galleria - Super Mario Party Jamboree",
    "Mario's Rainbow Castle [Mario Party 1] - Super Mario Party Jamboree",
    "Bowser Busts In - Super Mario Party Jamboree",
    "Mega Rocky Wrench Wreckers - Super Mario Party Jamboree",
    "Slowly Yet Surely [Mario Party 4] (Stamp Out!) - Super Mario Party Jamboree",
    "Yoshi's Mountain Race - Super Mario Party Jamboree",
    "Rosalina's Radical Race - Super Mario Party Jamboree",
    "Keep Your Cool (Hammer It Home, Prime Cut, etc) - Super Mario Party Jamboree",
    "Match 'Em Up (Twist And Sort, Cage Catch, etc) - Super Mario Party Jamboree",
    "Title Screen - Mario & Luigi: Brothership",
    "Battle - Mario & Luigi: Brothership",
    "Shipshape Island - Mario & Luigi: Brothership",
    "Mid Boss Battle - Mario & Luigi: Brothership",
    "Twistee Island - Mario & Luigi: Brothership",
    "Boss Battle - Mario & Luigi: Brothership",
    "Florall Island - Mario & Luigi: Brothership",
    "Desloatt Island - Mario & Luigi: Brothership",
    "Heatfreeze Island - Mario & Luigi: Brothership",
    "Slippenglide Island - Mario & Luigi: Brothership",
    "Jellyfish Island - Mario & Luigi: Brothership",
    "Wayaway Island (Super Mario Bros. 3 ~ Fortress) - Mario & Luigi: Brothership",
  ];
    // Bug : Sometimes musics stops appearing in suggestions, it seems that musics dissapears at the end of the array
    // Adding empty string makes them unfindable and prevent this bug
  musicNameList = musicNameList.concat(
    new Array(musicNameList.length).fill("")
  );

  var musicListWithLinks = [
          {
            url: "https://soundcloud.com/smbx-equipo-estelar/1-running-about",
            answer: "Ground - Super Mario Bros. (1985)",
          },
          {
            url: "https://soundcloud.com/smbx-equipo-estelar/3-underground",
            answer: "Underground - Super Mario Bros. (1985)",
          },
          {
            url: "https://soundcloud.com/smbx-equipo-estelar/7-bowsers-castle",
            answer: "Castle - Super Mario Bros. (1985)",
          },
          {
            url: "https://soundcloud.com/notorioustwibs/super-mario-bros-underwater-theme",
            answer: "Underwater - Super Mario Bros. (1985)",
          },
          {
            url: "https://soundcloud.com/smbx-equipo-estelar/9-invincible",
            answer: "Super Star (Invincible) - Super Mario Bros. (1985)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/phase-bgm",
            answer: "Phase BGM - Wrecking Crew",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/bonus-stage",
            answer: "Bonus Stage - Wrecking Crew",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/golden-hammer",
            answer: "Golden Hammer - Wrecking Crew",
          },
          {
            url: "https://soundcloud.com/vgm-specialist/vs-super-mario-bros-name-registration-1",
            answer: "Name Entry - Vs. Super Mario Bros.",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/smb2j-ending",
            answer: "Ending - Super Mario Bros. The Lost Levels",
          },
          {
            url: "https://soundcloud.com/vitalic-rudenko-396547002/super-mario-bros-the-great-3",
            answer: "Doki Doki Do It - Super Mario Bros: The Great Mission To Rescue Princess Peach",
          },
          {
            url: "https://soundcloud.com/vitalic-rudenko-396547002/super-mario-bros-the-great",
            answer: "The Light Blue Waltz (Underwater Theme) - Super Mario Bros: The Great Mission To Rescue Princess Peach",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/knitting-diagram-i-am-a-teacher-super-mario-sweater",
            answer: "Knitting Diagram - I Am A Teacher: Super Mario Sweater",
          },
          {
            url: "https://soundcloud.com/6nintendo/title-theme",
            answer: "Title Screen - Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/6nintendo/character-select",
            answer: "Player Select - Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/6nintendo/overworld",
            answer: "Ground - Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/6nintendo/underworld-1",
            answer: "Underground - Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/6nintendo/wart",
            answer: "Wart - Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/6nintendo/ending-1",
            answer: "Ending - Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/6nintendo/sub-space",
            answer: "Subspace - Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/simplepro/above-ground-overworld-wood-super-mario-bros-3",
            answer: "Ground - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/underground-super-mario-bros-3",
            answer: "Underground - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/underwater-super-mario-bros-3",
            answer: "Underwater - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/1074/super-mario-bros-3-athletic-theme",
            answer: "Athletic - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/airship-bgm-super-mario-bros-3",
            answer: "Airship - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/fortress-super-mario-bros-3",
            answer: "Fortress - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/fortress-boss-super-mario-bros-3",
            answer: "Boss Battle - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/hammer-brothers",
            answer: "Hammer Bros. - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/ending-super-mario-bros-3",
            answer: "Ending - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/grass-land-super-mario-bros-3",
            answer: "Grass Land (World 1) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/desert-land-super-mario-bros-3",
            answer: "Desert Land (World 2) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/water-land-super-mario-bros-3",
            answer: "Water Land (World 3) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/giant-land-super-mario-bros-3",
            answer: "Giant Land (World 4) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/sky-land-super-mario-bros-3",
            answer: "Sky Land (World 5) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/ice-land-super-mario-bros-3",
            answer: "Ice Land (World 6) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/pipe-land-super-mario-bros-3",
            answer: "Pipe Land (World 7) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/dark-land-super-mario-bros-3",
            answer: "Dark Land (World 8) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/warp-zone-super-mario-bros-3",
            answer: "Warp Zone (World 9) - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/simplepro/final-bowser-fight-super-mario-bros-3",
            answer: "Bowser Battle - Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-1-01-birabuto-kingdom?in=dmg8bit/sets/game-boy-super-mario-land-1",
            answer: "Birabuto Kingdom - Super Mario Land",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-1-02-muda-kingdom?in=dmg8bit/sets/game-boy-super-mario-land-1",
            answer: "Muda Kingdom - Super Mario Land",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-1-04-chai-kingdom?in=dmg8bit/sets/game-boy-super-mario-land-1",
            answer: "Chai Kingdom - Super Mario Land",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-1-03-easton-kingdom?in=dmg8bit/sets/game-boy-super-mario-land-1",
            answer: "Easton Kingdom - Super Mario Land",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-1-11-marine-pop-sky-pop?in=dmg8bit/sets/game-boy-super-mario-land-1",
            answer: "Marine Pop, Sky Pop! - Super Mario Land",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-1-18-rocket-ship-ride?in=dmg8bit/sets/game-boy-super-mario-land-1",
            answer: "Ending & Staff Roll - Super Mario Land",
          },
          {
            url: "https://soundcloud.com/lamont-lol/the-super-mario-bros-super-show-rap-hd-remaster",
            answer: "Mario Brothers Rap - The Super Mario Bros. Super Show",
          },
          {
            url: "https://soundcloud.com/awildzapdos/do-the-mario",
            answer: "Do The Mario! - The Super Mario Bros. Super Show",
          },
          {
            url: "https://soundcloud.com/mario-heardle/title-screen-dr-mario-nes",
            answer: "Title Screen - Dr. Mario (NES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/fever",
            answer: "Fever - Dr. Mario (NES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/chill",
            answer: "Chill - Dr. Mario (NES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/ending-theme",
            answer: "Ending - Dr. Mario (NES)",
          },
          {
            url: "https://soundcloud.com/cayby-elbourn/do-the-koopa",
            answer: "Do The Koopa - The Adventures Of Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/1-title-bgm",
            answer: "Title Screen - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/2-map-1-yoshi-039s-island",
            answer: "Yoshi's Island - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/3-map-2-overworld",
            answer: "Donut Plains/Chocolate Island - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/4-map-3-vanilla-dome",
            answer: "Vanilla Dome - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/6-map-5-forest-of-illusion",
            answer: "Forest Of Illusion - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/8-map-6-koopa-castle",
            answer: "Valley Of Bowser - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/5-map-4-native-star",
            answer: "Star Road - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/9-map-7-special",
            answer: "Special World - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/10-overworld-bgm",
            answer: "Ground - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/11-athletic-bgm",
            answer: "Athletic - Super Mario World",
          },
          {
            url: "https://soundcloud.com/bruno32/castle-theme-super-mario",
            answer: "Castle - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/20-koopa-junior-bgm",
            answer: "Boss Battle - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/12-underground-bgm",
            answer: "Underground - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/13-swimming-bgm",
            answer: "Underwater - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/14-haunted-house-bgm",
            answer: "Ghost House - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/18-bonus-screen-bgm",
            answer: "Bonus - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/26-the-evil-king-koopa-bgm",
            answer: "The Evil King Bowser (Final Battle) - Super Mario World",
          },
          {
            url: "https://soundcloud.com/vincent-thompson-763471057/28-ending",
            answer: "Ending & Staff Roll - Super Mario World",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/title-theme",
            answer: "Title Screen - Yoshi (NES)",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/starman-music-c",
            answer: "Music C (Starman) - Yoshi (NES)",
          },
          {
            url: "https://soundcloud.com/susumi-sama/mario-paint-main-theme",
            answer: "Title Screen - Mario Paint",
          },
          {
            url: "https://soundcloud.com/susumi-sama/mario-paint-bgm-1",
            answer: "Creative Exercise - Mario Paint",
          },
          {
            url: "https://soundcloud.com/susumi-sama/mario-paint-bgm-2",
            answer: "Monkey Song - Mario Paint",
          },
          {
            url: "https://soundcloud.com/susumi-sama/mario-paint-bgm-3",
            answer: "Mysterious - Mario Paint",
          },
          {
            url: "https://soundcloud.com/zeroblade-861262243/mario-paint-data-robot",
            answer: "Data Robot - Mario Paint",
          },
          {
            url: "https://soundcloud.com/susumi-sama/mario-paint-gnat-attack-1",
            answer: "Gnat Attack - Mario Paint",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/super-mario-kart",
            answer: "Title Screen - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/mario-circuit",
            answer: "Mario Circuit - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/donut-plains",
            answer: "Donut Plains - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/koopa-beach",
            answer: "Koopa Beach - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/ponocho-tundra/ghost-valley-super-mario-kart",
            answer: "Ghost Valley - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/bowser-castle",
            answer: "Bowser Castle - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/chocolate-island",
            answer: "Choco Island - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/vanilla-lake",
            answer: "Vanilla Lake - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/rainbow-road",
            answer: "Rainbow Road - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/battle-mode",
            answer: "Battle - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/ending-1",
            answer: "Staff Roll - Super Mario Kart",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-2-choose-your-pipe?in=dmg8bit/sets/game-boy-super-mario-land-2",
            answer: "Choose Your Pipe (File Select) - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-2-athletic?in=dmg8bit/sets/game-boy-super-mario-land-2",
            answer: "Athletic - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-2-treetop?in=dmg8bit/sets/game-boy-super-mario-land-2",
            answer: "Treetop (Tree Zone) - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-2-seashore?in=dmg8bit/sets/game-boy-super-mario-land-2",
            answer: "Seashore (Turtle Zone/Macro Zone) - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-2-machine?in=dmg8bit/sets/game-boy-super-mario-land-2",
            answer: "Machine (Mario Zone) - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-2-the-moon?in=dmg8bit/sets/game-boy-super-mario-land-2,",
            answer: "The Moon (Space Zone) - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-2-star-maze?in=dmg8bit/sets/game-boy-super-mario-land-2",
            answer: "Star Maze (Space Zone) - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/dmg8bit/game-boy-super-mario-land-2-warios-castle?in=dmg8bit/sets/game-boy-super-mario-land-2",
            answer: "Wario's Castle - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/the-blj-elite/staff-roll-super-mario-land-2-6-golden-coins",
            answer: "Staff Roll - Super Mario Land 2: 6 Golden Coins",
          },
          {
            url: "https://soundcloud.com/yoshis-cookie-osts/title-theme",
            answer: "Title Screen - Yoshi's Cookie (NES)",
          },
          {
            url: "https://soundcloud.com/yoshis-cookie-osts/1p-music-type-c",
            answer: "Music Type C - Yoshi's Cookie (NES)",
          },
          {
            url: "https://soundcloud.com/yoshis-cookie-osts/frantic-factory",
            answer: "Action Type B - Yoshi's Cookie (SNES)",
          },
          {
            url: "https://soundcloud.com/yoshis-cookie-osts/counting-the-cookies",
            answer: "Versus Type B - Yoshi's Cookie (SNES)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/main-titles",
            answer: "Main Title - Super Mario Bros. (1993)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/drive-to-work-on-instinct",
            answer: "Drive To Work On Instinct - Super Mario Bros. (1993)",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/title-screen-super-mario-all",
            answer: "Title Screen - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/game-select-super-mario-all",
            answer: "Game Select - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/title-screen-super-mario-1",
            answer: "Title Screen [Super Mario Bros.] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/ground-subspace-super-mario",
            answer: "Ground [Super Mario Bros.] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/underwater-super-mario-bros",
            answer: "Underwater [Super Mario Bros.] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/bonus-super-mario-bros-super",
            answer: "Bonus [Super Mario Bros.] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/title-screen-super-mario-bros",
            answer: "Title Screen [Super Mario Bros.: The Lost Levels] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/ending-super-mario-bros-the",
            answer: "Ending [Super Mario Bros.: The Lost Levels] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/title-screen-super-mario-3",
            answer: "Title Screen [Super Mario Bros. 2] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/player-select-super-mario-bros",
            answer: "Player Select [Super Mario Bros. 2] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/ground-super-mario-bros-2",
            answer: "Ground [Super Mario Bros. 2] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/ending-super-mario-bros-2",
            answer: "Ending [Super Mario Bros. 2] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/ground-super-mario-bros-3",
            answer: "Ground [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/underwater-super-mario-bros-3",
            answer: "Underwater [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/athletic-super-mario-bros-3",
            answer: "Athletic [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/airship-super-mario-bros-3",
            answer: "Airship [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/hammer-bros-battle-super-mario",
            answer: "Hammer Bros. [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/ending-super-mario-bros-3",
            answer: "Ending [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/grass-land-super-mario-bros-3",
            answer: "Grass Land (World 1) [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/giant-land-super-mario-bros-3",
            answer: "Giant Land (World 4) [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/ice-land-super-mario-bros-3",
            answer: "Ice Land (World 6) [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/pipe-land-super-mario-bros-3",
            answer: "Pipe Land (World 7) [Super Mario Bros. 3] - Super Mario All-Stars",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/title-screen-yoshis-safari",
            answer: "Title Screen - Yoshi's Safari",
          },
          {
            url: "https://soundcloud.com/user-756081282/grass-land-yoshis-safari",
            answer: "Grass Land - Yoshi's Safari",
          },
          {
            url: "https://soundcloud.com/1212127/pipe-island-yoshis-safari",
            answer: "Pipe Island - Yoshi's Safari",
          },
          {
            url: "https://soundcloud.com/warioheardle/title-screen-mario-wario",
            answer: "Title Screen - Mario & Wario",
          },
          {
            url: "https://soundcloud.com/warioheardle/woods-mario-wario",
            answer: "Woods - Mario & Wario",
          },
          {
            url: "https://soundcloud.com/warioheardle/desert-mario-wario",
            answer: "Desert - Mario & Wario",
          },
          {
            url: "https://soundcloud.com/warioland123/main-theme",
            answer: "Main Theme - Wario Land: Super Mario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/kitchen-island",
            answer: "Kitchen Island (World Map) - Wario Land: Super Mario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/underwater-course",
            answer: "Underwater Course - Wario Land: Super Mario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/train-course",
            answer: "Train Course - Wario Land: Super Mario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/end-credits",
            answer: "Staff Roll - Wario Land: Super Mario Land 3",
          },
          {
            url: "https://soundcloud.com/warioheardle/title-screen-warios-woods",
            answer: "Title Screen - Wario's Woods (NES)",
          },
          {
            url: "https://soundcloud.com/warioheardle/round-game-warios-woods",
            answer: "Round Game - Wario's Woods (NES)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/title-screen-donkey-kong-game-boy",
            answer: "Title Screen - Donkey Kong '94",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/forest-donkey-kong-game-boy",
            answer: "Forest - Donkey Kong '94",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/ship-donkey-kong-game-boy",
            answer: "Ship - Donkey Kong '94",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/showdown-at-the-tower-donkey-kong-game-boy",
            answer: "Showdown At The Tower - Donkey Kong '94",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/theme",
            answer: "Title Screen - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/simian-segue",
            answer: "Simian Segue (World Map) - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/dk-island-swing",
            answer: "DK Island Swing - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/crankys-theme",
            answer: "Cranky's Theme - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/bonus-room-blitz-1",
            answer: "Bonus Room Blitz - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/paulonfinds/donkey-kong-country-ost-aquatic-ambience",
            answer: "Aquatic Ambiance - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/mine-cart-madness-1",
            answer: "Mine Cart Madness - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/life-in-the-mines-1",
            answer: "Life In The Mines - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/forest-frenzy-1",
            answer: "Forest Frenzy - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/treetop-rock-1",
            answer: "Treetop Rock - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/northern-hemispheres-1",
            answer: "Northern Hemispheres - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/ice-cave-chant-1",
            answer: "Ice Cave Chant - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/fear-factory-1",
            answer: "Fear Factory - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/gang-plank-galleon-1",
            answer: "Gang Plank Galleon - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/the-credits-concerto-1",
            answer: "The Credits Concerto (Staff Roll) - Donkey Kong Country (SNES)",
          },
          {
            url: "https://soundcloud.com/kerenon/tetris-dr-mario-fever",
            answer: "Fever - Tetris & Dr. Mario (SNES)",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/title-screen",
            answer: "Title Screen - Mario's Picross",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/bgm-3-star-picross",
            answer: "Star Picross - Mario's Picross",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/bgm-4-time-trial",
            answer: "Time Trial - Mario's Picross",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/bgm-5-how-to-play",
            answer: "How To Play - Mario's Picross",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/main-theme-donkey-kong-land",
            answer: "Title Screen - Donkey Kong Land",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/sky-donkey-kong-land-ost",
            answer: "Chimpanzee Clouds - Donkey Kong Land",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/waterworld-donkey-kong-land",
            answer: "Aquatic Ambiance - Donkey Kong Land",
          },
          {
            url: "https://soundcloud.com/vbwario/singles-1",
            answer: "Singles Match 1 - Mario's Tennis (Virtual Boy)",
          },
          {
            url: "https://soundcloud.com/vbwario/results",
            answer: "Results - Mario's Tennis (Virtual Boy)",
          },
          {
            url: "https://soundcloud.com/1074/yoshis-island-music-box-theme",
            answer: "Opening Melody - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/title-screen-world-6-super-mario-world-2-yoshis-island",
            answer: "Title Screen - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/supernintendosounds/yoshis-island-flower-garden",
            answer: "Flower Field - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/nightshadex766/goal-score",
            answer: "Score - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/kerenon/yoshis-island-underground",
            answer: "Underground - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/kerenon/yoshis-island-castle-fortress",
            answer: "Castles & Forts - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/stage-boss-super-mario-world-2",
            answer: "Stage Boss - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/kerenon/yoshis-island-athletic",
            answer: "Athletic - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/kerenon/yoshis-island-overworld",
            answer: "Ground - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/big-boss-super-mario-world-2",
            answer: "Big Boss - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/supernintendosounds/yoshis-island-map",
            answer: "World Map - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/nightshadex766/powerful-baby",
            answer: "Powerful Mario - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/adrian-fernandez-842998753/baby-bowser-yoshis-island",
            answer: "Baby Bowser Battle - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/nightshadex766/ending",
            answer: "Ending - Super Mario World 2: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/title-screen-1",
            answer: "Title Screen - Mario's Super Picross",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/mario-bgm-1",
            answer: "Mario BGM 1 - Mario's Super Picross",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/mario-bgm-2",
            answer: "Mario BGM 2 - Mario's Super Picross",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/wario-bgm-2",
            answer: "Wario BGM 2 - Mario's Super Picross",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/staff-roll",
            answer: "Staff Roll - Mario's Super Picross",
          },
          {
            url: "https://soundcloud.com/vbwario/mario-clash",
            answer: "Title Screen - Mario Clash",
          },
          {
            url: "https://soundcloud.com/vbwario/pipes-l1",
            answer: "Pipes (Level 1) - Mario Clash",
          },
          {
            url: "https://soundcloud.com/vbwario/ghost-l13",
            answer: "Ghost (Level 13) - Mario Clash",
          },
          {
            url: "https://soundcloud.com/vbwario/07-level-theme-1",
            answer: "Level Theme 1 - Virtual Boy Wario Land",
          },
          {
            url: "https://soundcloud.com/vbwario/19-level-theme-3",
            answer: "Level Theme 3 (Underwater) - Virtual Boy Wario Land",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/k-rool-returns",
            answer: "K. Rool Returns (Title Screen) - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/welcome-to-crocodile-isle",
            answer: "Welcome To Crocodile Isle (World Map) - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/token-tango",
            answer: "Token Tango - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/jib-jig",
            answer: "Jib Jig - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/funky-the-main-monkey",
            answer: "Funky The Main Monkey - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/hot-head-bop",
            answer: "Hot Head Bop - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/mining-melancholy",
            answer: "Kannon's Klanking (Mining Melancholy) - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/bayou-boogie",
            answer: "Bayou Boogie - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/krooks-march",
            answer: "Krook's March - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/in-a-snow-bound-land",
            answer: "In A Snowbound Land - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/marco-cabrera-486924595/stickerbush-symphony",
            answer: "Stickerbush Symphony - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/forest-interlude",
            answer: "Forest Interlude - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/haunted-chase",
            answer: "Haunted Chase - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/crocodile-cacophony",
            answer: "Crocodile Cacophony - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/donkey-kong-rescued",
            answer: "Donkey Kong Rescued (Staff Roll) - Donkey Kong Country 2: Diddy's Kong Quest",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-58",
            answer: "Fun Adventure, Cheerful Adventure - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-57",
            answer: "Let's Try! (File Select) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-54",
            answer: "Battling Bowser - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-52",
            answer: "Super Mario House - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-51",
            answer: "Where To? (World Map) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-50",
            answer: "Danger Abounds On The Journey (Mushroom Way) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-49",
            answer: "Battling Monsters (Enemy Battle) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-47",
            answer: "Hello, Happy Kingdom (Mushroom Kingdom) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-44",
            answer: "Danger Aplenty On The Journey (Bandit's Way) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-42",
            answer: "Battling Strongish Monsters (Boss Battle) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-41",
            answer: "The Weapons Show Up - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-40",
            answer: "Battling A Weapon Boss - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-38",
            answer: "Let's Take The Midas River - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-37",
            answer: "Grandpa And The Upbeat Tadpoles (Tadpole Pond) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-35",
            answer: "Elegy (Sad Song) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-32",
            answer: "Beware Of Forest Mushrooms (Forest Maze) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-31",
            answer: "Rose Town - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-30",
            answer: "Greetings From The Pipes (Pipe Vault) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-29",
            answer: "Welcome To Yo'ster Isle! - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-27",
            answer: "A Working Mole Is A Happy Mole (Moleville) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-26",
            answer: "Moleville Mountain Rail - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-25",
            answer: "This Is Booster Tower - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-20",
            answer: "The Bell Rings Out At Marrymore - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-16",
            answer: "Shopping At Seaside Town - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-14",
            answer: "Battling Culex - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-10",
            answer: "Let's Get Fluffy! (Nimbus Land) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-7",
            answer: "Barrel Volcano - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of-4",
            answer: "The Factory (Weapon World) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/mario-heardle/goodbye-geno-super-mario-rpg-legend-of-the-seven-stars",
            answer: "Farewell, Geno - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/mario-heardle/seeing-dreams-through-the-window-stars-super-mario-rpg-legend-of-the-seven-stars",
            answer: "The Wishes From The Stars - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/user-272592510/super-mario-rpg-legend-of",
            answer: "Fun Parade, Cheerful Parade (Staff Roll) - Super Mario RPG: Legend Of The Seven Stars",
          },
          {
            url: "https://soundcloud.com/megawoofy/title-theme-super-mario-64-ost",
            answer: "Title Screen - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/file-select-super-mario-64-ost",
            answer: "File Select - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/opening-super-mario-64-ost",
            answer: "Opening - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/inside-the-castle-walls-super",
            answer: "Inside The Castle Walls (Peach's Castle) - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/super-mario-64-main-theme",
            answer: "Main Theme (Bob Omb Battlefield/Whomp's Fortress) - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/stage-boss-super-mario-64-ost",
            answer: "Stage Boss - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/slider-super-mario-64-ost",
            answer: "Slider (Tick Tock Clock/Rainbow Ride) - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/snow-mountain-super-mario-64",
            answer: "Cool, Cool Mountain/Snowman's Land - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/dire-dire-docks-super-mario-64",
            answer: "Dire Dire Docks/Jolly Roger Bay - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/powerful-mario-super-mario-64",
            answer: "Powerful Mario - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/haunted-house-super-mario-64",
            answer: "Big Boo's Haunt - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/merry-go-round-super-mario-64",
            answer: "Merry Go Round - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/cave-dungeon-super-mario-64",
            answer: "Hazy Maze Cave/Wet Dry World - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/metallic-mario-super-mario-64",
            answer: "Metal Mario - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/lethal-lava-land-super-mario",
            answer: "Lethal Lava Land/Shifting Sand Land - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/koopas-road-super-mario-64-ost",
            answer: "Bowser's Road - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/koopas-theme-super-mario-64",
            answer: "Bowser's Theme - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/looping-steps-super-mario-64",
            answer: "The Endless Stairs - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/ultimate-koopa-super-mario-64",
            answer: "Ultimate Bowser (Final Battle) - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/ending-demo-super-mario-64-ost",
            answer: "Ending - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/staff-roll-super-mario-64-ost",
            answer: "Staff Roll - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/megawoofy/piranha-plants-lullaby-super",
            answer: "Piranha Plant's Lullaby - Super Mario 64",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/title-screen-tetris-attack",
            answer: "Title Screen - Tetris Attack",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/lips-stage-tutorial",
            answer: "Tutorial (Lip's Theme) - Tetris Attack",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/yoshis-stage",
            answer: "Yoshi's Stage - Tetris Attack",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/windys-stage-breeze-stage",
            answer: "Breeze Stage (Lakitu) - Tetris Attack",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/sherbets-stage-glacial-stage",
            answer: "Glacial Stage (Bumpty) - Tetris Attack",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/thianas-stage-forest-stage",
            answer: "Forest Stage (Poochy) - Tetris Attack",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/versus-ending-staff-roll",
            answer: "VS Mode Staff Roll - Tetris Attack",
          },
          {
            url: "https://soundcloud.com/tylerthetyrrific/im-nobodys-hero",
            answer: "I'm Nobody's Hero - Donkey Kong Country (Animated Series)",
          },
          {
            url: "https://soundcloud.com/tylerthetyrrific/let-me-go-back-to-my-home",
            answer: "Let Me Go Back To My Home - Donkey Kong Country (Animated Series)",
          },
          {
            url: "https://soundcloud.com/tylerthetyrrific/our-love-is-stronger-than-a",
            answer: "Our Love Is Stronger Than A Golden Banana - Donkey Kong Country (Animated Series)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/welcome-to-crocodile-isle-donkey-kong-land-2",
            answer: "Welcome To Crocodile Isle (World Map) - Donkey Kong Land 2",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/stickerbush-symphony-donkey-kong-land-2",
            answer: "Stickerbush Symphony - Donkey Kong Land 2",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/in-a-snow-bound-land-donkey-kong-land-2",
            answer: "In A Snowbound Land - Donkey Kong Land 2",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/puzzle-bgm-2",
            answer: "BGM 2 - (Mario's) Picross 2",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/northern-kremisphere-donkey",
            answer: "Northern Kremisphere - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/stilt-village-donkey-kong",
            answer: "Stilt Village - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/jangle-bells-donkey-kong",
            answer: "Jangle Bells - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/treetop-tumble-donkey-kong",
            answer: "Treetop Tumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/water-world-donkey-kong",
            answer: "Water World - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/rockface-rumble-donkey-kong",
            answer: "Rockface Rumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/brothers-bear-donkey-kong",
            answer: "Brothers Bear - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/wrinkly-64-donkey-kong-country",
            answer: "Wrinkly 64 (Super Mario 64 ~ Peach's Castle) - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/mario-kart-64-theme",
            answer: "Title Screen - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/setup-kart-select",
            answer: "Main Menu - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/wario-stadium",
            answer: "Luigi/Mario/Royal Raceway/Wario Stadium - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/moo-moo-farm-yoshi-valley",
            answer: "Moo Moo Farm/Yoshi Valley - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/koopa-troopa-beach",
            answer: "Koopa Troopa Beach - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/kalimari-desert",
            answer: "Kalimari Desert - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/toads-turnpike",
            answer: "Toad's Turnpike - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/frappe-snowland-sherbet-land",
            answer: "Frappe Snowland/Sherbet Land - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/choco-mountain-battle-arenas",
            answer: "Choco Mountain - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/bowsers-castle",
            answer: "Bowser's Castle - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/dks-jungle-parkway",
            answer: "DK's Jungle Parkway - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/banshee-boardwalk",
            answer: "Banshee Boardwalk - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/rainbow-road-1",
            answer: "Rainbow Road - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/battle-arenas",
            answer: "Battle Arenas - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/winning-results",
            answer: "Winning Results - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/trophy-presentations-part-2",
            answer: "Trophy Presentation - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/user-227502204-594364584/victory-lap",
            answer: "Staff Roll - Mario Kart 64",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw1-manhole",
            answer: "Manhole - Game & Watch Gallery (1997)",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw1-fire",
            answer: "Fire - Game & Watch Gallery (1997)",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw1-octopus",
            answer: "Octopus - Game & Watch Gallery (1997)",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw1-oil-panic",
            answer: "Oil Panic - Game & Watch Gallery (1997)",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw2-title-screen",
            answer: "Title Screen - Game & Watch Gallery 2",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw2-parachute",
            answer: "Parachute - Game & Watch Gallery 2",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw2-helmet-level-1",
            answer: "Helmet - Game & Watch Gallery 2",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw2-chef",
            answer: "Chef - Game & Watch Gallery 2",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw2-vermin",
            answer: "Vermin - Game & Watch Gallery 2",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw2-donkey-kong",
            answer: "Donkey Kong - Game & Watch Gallery 2",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw2-ball",
            answer: "Ball - Game & Watch Gallery 2",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/stilt-village-donkey-kong-land-iii",
            answer: "Stilt Village - Donkey Kong Land III",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/treetop-tumble-donkey-kong-land-iii",
            answer: "Treetop Tumble - Donkey Kong Land III",
          },
          {
            url: "https://soundcloud.com/beep-blox/title-theme-diddy-kong-racing",
            answer: "Title Screen - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/character-select-diddy-kong-racing",
            answer: "Choose Your Racer - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/ancient-lake-diddy-kong-racing",
            answer: "Ancient Lake - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/jungle-falls-diddy-kong-racing",
            answer: "Jungle Falls - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/hot-top-volcano-diddy-kong-racing",
            answer: "Hot Top Volcano - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/walrus-cove-diddy-kong-racing",
            answer: "Walrus Cove - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/frosty-village-diddy-kong-racing",
            answer: "Frosty Village - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/crescent-island-diddy-kong-racing",
            answer: "Crescent Island / Staff Roll - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/darkmoon-caverns-diddy-kong-racing",
            answer: "Darkmoon Caverns - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/spaceport-alpha-diddy-kong-racing",
            answer: "Spaceport Alpha - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/beep-blox/tts-theme-diddy-kong-racing",
            answer: "T.T.'s Theme - Diddy Kong Racing",
          },
          {
            url: "https://soundcloud.com/gametracks/yoshis-story-theme",
            answer: "Title Screen - Yoshi's Story",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/yoshis-song-yoshis-story",
            answer: "Yoshi's Song - Yoshi's Story",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/yo-yo-yoshi-yoshis-story",
            answer: "Yo-Yo-Yoshi - Yoshi's Story",
          },
          {
            url: "https://soundcloud.com/kooper-12238687/love-is-in-the-air-yoshis",
            answer: "Love Is In The Air - Yoshi's Story",
          },
          {
            url: "https://soundcloud.com/user-980511460/yoshis-story-ost-alpina-blue",
            answer: "Alpina Blue - Yoshi's Story",
          },
          {
            url: "https://soundcloud.com/spooky-candy/yoshis-story-baby-bowsers-lullaby",
            answer: "Baby Bowser's Lullaby - Yoshi's Story",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/song-of-happiness-yoshis-story",
            answer: "Song Of Happiness - Yoshi's Story",
          },
          {
            url: "https://soundcloud.com/user-504187549/yoshis-story-endingcredits-ost",
            answer: "Ending Story - Yoshi's Story",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/title-screen",
            answer: "Title Screen - Wrecking Crew '98",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/battling-someone",
            answer: "Battling Someone - Wrecking Crew '98",
          },
          {
            url: "https://soundcloud.com/warioland123/escape-from-the-woods",
            answer: "Escape From The Woods - Wario Land II",
          },
          {
            url: "https://soundcloud.com/warioland123/underwater-tunnels",
            answer: "Underwater Tunnels - Wario Land II",
          },
          {
            url: "https://soundcloud.com/warioland123/stop-that-train",
            answer: "Stop That Train! - Wario Land II",
          },
          {
            url: "https://soundcloud.com/warioland123/up-on-the-rooftop",
            answer: "Up On The Rooftop - Wario Land II",
          },
          {
            url: "https://soundcloud.com/warioland123/level-goal",
            answer: "Level Goal - Wario Land II",
          },
          {
            url: "https://soundcloud.com/warioland123/the-journey-home",
            answer: "The Journey Home (Staff Roll) - Wario Land II",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/title-screen",
            answer: "Title Screen - Mario no Photopi",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/star-frame",
            answer: "Star Frame - Mario no Photopi",
          },
          {
            url: "https://soundcloud.com/mvpl/mario-party-1-ost-mushroom",
            answer: "Mushroom Shop - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/adventure-begins-mario-party",
            answer: "Adventure Begins - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/dks-jungle-adventure-mario",
            answer: "DK's Jungle Adventure - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/ghoul-guy/mario-rainbow-castle",
            answer: "Mario's Rainbow Castle - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/ghoul-guy/peachs-birthday-cake",
            answer: "Peach's Birthday Cake - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/ghoul-guy/yoshis-tropical-island",
            answer: "Yoshi's Tropical Island - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/ghoul-guy/warios-battle-canyon",
            answer: "Wario's Battle Canyon - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/ghoul-guy/bowser-magma-mountain",
            answer: "Bowser's Magma Mountain - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/mvpl/mario-party-1-ost-play-a-mini",
            answer: "Minigame Rules - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/mvpl/mario-party-1-ost-lets-go",
            answer: "Let's Go Lightly (Bobsled Run, Platform Peril) - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/faster-than-all-mario-party",
            answer: "Faster Than All (Handcar Havoc, Slot Car Derby, etc) - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/can-it-be-done-mario-party",
            answer: "Can It Be Done? (Ground Pound, Face Lift) - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/professoramazing2/mario-party-music-chance-time",
            answer: "Chance Time! - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/mvpl/mario-party-1-ost-mini-game-6",
            answer: "Mini Game Stadium - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/everyones-a-super-star-mario",
            answer: "Everyone's A Super Star (Staff Roll) - Mario Party (N64)",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/004-ground-theme-super-mario",
            answer: "Peach's Castle - Super Smash Bros. (N64)",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/10-jungle-level-64",
            answer: "Kongo Jungle - Super Smash Bros. (N64)",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/07-yoshis-story-64",
            answer: "Yoshi's Island - Super Smash Bros. (N64)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/you-vs-boo-super-mario-bros-deluxe",
            answer: "You Vs. Boo - Super Mario Bros. Deluxe",
          },
          {
            url: "https://soundcloud.com/mario-heardle/vs-race-super-mario-bros-deluxe",
            answer: "Vs. Race - Super Mario Bros. Deluxe",
          },
          {
            url: "https://soundcloud.com/mario-heardle/menu-super-mario-bros-deluxe",
            answer: "Main Menu - Super Mario Bros. Deluxe",
          },
          {
            url: "https://soundcloud.com/mario-heardle/file-select-super-mario-bros-deluxe",
            answer: "File Select - Super Mario Bros. Deluxe",
          },
          {
            url: "https://soundcloud.com/mario-heardle/credits-super-mario-bros-deluxe",
            answer: "Staff Roll - Super Mario Bros. Deluxe",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/main-menu-mario-golf-n64",
            answer: "Main Menu - Mario Golf (N64)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/mini-golf-mario-golf-n64",
            answer: "Mini Golf - Mario Golf (N64)",
          },
          {
            url: "https://soundcloud.com/zane-maserati/mario-golf-64-music-toad",
            answer: "Toad Highlands - Mario Golf (N64)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/koopa-park-mario-golf-n64",
            answer: "Koopa Park - Mario Golf (N64)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/boo-valley-mario-golf-n64",
            answer: "Boo Valley - Mario Golf (N64)",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw3-egg",
            answer: "Egg - Game & Watch Gallery 3",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw3-greenhouse",
            answer: "Greenhouse - Game & Watch Gallery 3",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw3-turtle-bridge",
            answer: "Turtle Bridge - Game & Watch Gallery 3",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw3-mario-bros-normal-direction",
            answer: "Mario Bros. - Game & Watch Gallery 3",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw3-donkey-kong-jr-level-1",
            answer: "Donkey Kong Jr. - Game & Watch Gallery 3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/menu-mario-golf-gbc",
            answer: "Main Menu - Mario Golf (GBC)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/peachs-castle-mario-golf-gbc",
            answer: "Peach's Castle - Mario Golf (GBC)",
          },
          {
            url: "https://soundcloud.com/cyalm/dk-rap",
            answer: "DK Rap - Donkey Kong 64",
          },
          {
            url: "https://soundcloud.com/cyalm/main-menu",
            answer: "Main Menu - Donkey Kong 64",
          },
          {
            url: "https://soundcloud.com/cyalm/dk-isle",
            answer: "DK Isle - Donkey Kong 64",
          },
          {
            url: "https://soundcloud.com/cyalm/jungle-japes-1",
            answer: "Jungle Japes - Donkey Kong 64",
          },
          {
            url: "https://soundcloud.com/cyalm/angry-aztec",
            answer: "Angry Aztec - Donkey Kong 64",
          },
          {
            url: "https://soundcloud.com/cyalm/frantic-factory",
            answer: "Frantic Factory - Donkey Kong 64",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/k-rool-duel-donkey-kong-64",
            answer: "K. Rool Duel - Donkey Kong 64",
          },
          {
            url: "https://soundcloud.com/ferriol-rovira/mario-party-2-theme",
            answer: "Title Screen - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/welcome-to-mario-land-mario",
            answer: "Welcome To Mario Land (Main Menu) - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/laboratory-mario-party-2",
            answer: "Laboratory (Settings) - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/kooper-12238687/in-the-pipe-mario-party-2",
            answer: "In The Pipe - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/twoblu94/pirate-land",
            answer: "Pirate Land - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/twoblu94/western-land",
            answer: "Western Land - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/twoblu94/space-land",
            answer: "Space Land - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/twoblu94/mystery-land",
            answer: "Mystery Land - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/twoblu94/horror-land",
            answer: "Horror Land - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/user-625232827/let-the-game-begin-mario-party-2",
            answer: "Let The Game Begin (Minigame Rules) - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/ghost-hunter-mike/mario-party-2-soundtrack",
            answer: "Keepin' On The Path (Speed Hockey, Shock Drop Or Roll, etc) - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/thats-all-of-it-mario-party-2",
            answer: "That's All Of It (Archerival, Bowser's Big Blast, etc) - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/ghoul-guy/the-blue-skies-yonder",
            answer: "The Blue Skies Yonder (Slot Car Derby, Handcar Havoc, etc) - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/twoblu94/going-somewhere",
            answer: "Going Somewhere (Bobsled Run, Sky Pilots, etc) - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/i-earrape-for-fun/y2matecom-mario-party-2-music-this-way-that-g3onkz3ifx4",
            answer: "This Way That (Quicksand Cache, Filet Relay, etc) - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/credits-mario-party-2",
            answer: "Staff Roll - Mario Party 2",
          },
          {
            url: "https://soundcloud.com/warioland123/world-map-day",
            answer: "World Map (Day) - Wario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/out-of-the-woods-day",
            answer: "Out Of The Woods (Day) - Wario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/peaceful-village-a-town-in-1",
            answer: "Peaceful Village, A Town In Chaos (Day) - Wario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/west-crater-east-crater",
            answer: "West Crater, East Crater - Wario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/big-bridge-bank-of-the-wild",
            answer: "Big Bridge, Bank Of The Wild River, Steep Canyon - Wario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/tidal-coast-sea-turtle-rocks",
            answer: "Tidal Coast, Sea Turtle Rocks, Beneath The Waves - Wario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/above-the-clouds-night",
            answer: "Above The Clouds (Night) - Wario Land 3",
          },
          {
            url: "https://soundcloud.com/warioland123/credits",
            answer: "Staff Roll - Wario Land 3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/menu-mario-tennis-n64",
            answer: "Main Menu - Mario Tennis (N64)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/game-point-mario-tennis-n64",
            answer: "Game Point ~ Break Point - Mario Tennis (N64)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/mario-bros-court-mario-tennis-n64",
            answer: "Mario Brothers Court - Mario Tennis (N64)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/wario-waluigi-court-mario-tennis-n64",
            answer: "Wario & Waluigi Court - Mario Tennis (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/main-title-paper-mario-2000",
            answer: "Title Screen - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/a-party-at-peachs-castle-paper-mario-2000",
            answer: "A Party At Peach's Castle - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/march-ahead-paper-mario-2000",
            answer: "March Ahead - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/goomba-village-paper-mario-2000",
            answer: "Goomba Village - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/toad-town-paper-mario-2000",
            answer: "Toad Town - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/battle-fanfare-a-paper-mario-2000",
            answer: "Battle - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/fuzzys-stole-my-shell-paper-mario-2000",
            answer: "Fuzzies Stole My Shell - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/koopa-village",
            answer: "Koopa Village - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/mt-rugged-paper-mario-2000",
            answer: "Mt. Rugged - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/dry-dry-desert-trek-paper-mario-2000",
            answer: "Dry Dry Desert Trek - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/ghost-gulping-paper-mario-2000",
            answer: "Ghost Gulping - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/shy-guys-toy-box-paper-mario-2000",
            answer: "Shy Guy's Toy Box - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/princess-in-distress-paper-mario-2000",
            answer: "Princess In Distress - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/jade-jungle-paper-mario-2000",
            answer: "Jade Jungle - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/welcome-to-yoshis-village-2-paper-mario-2000",
            answer: "Welcome To Yoshi's Village - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/flower-fields-rondo-paper-mario-2000",
            answer: "Flower Fields Rondo - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/cold-reception-in-shiver-city-paper-mario-2000",
            answer: "Cold Reception In Shiver City - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/snow-road-paper-mario-2000",
            answer: "Snow Road - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/starborn-valley-trail-paper-mario-2000",
            answer: "Starborn Valley Trail - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/over-shiver-paper-mario-2000",
            answer: "Over Shiver Mountain - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/crystal-palace-crawl-paper-mario-2000",
            answer: "Crystal Palace Crawl - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/shooting-star-summit-paper-mario-2000",
            answer: "Shooting Star Summit - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/iruy-otudser/cloudy-climb-paper-mario-2000",
            answer: "Cloudy Climb - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/wish-of-the-princess-paper-mario-2000",
            answer: "Wish Of The Princess - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/victory-parade-paper-mario-2000",
            answer: "Victory Parade (Staff Roll) - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/mario-and-peach-paper-mario-2000",
            answer: "Mario And Peach - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/civ-nohp/main-menu-paper-mario-2000",
            answer: "Main Menu - Paper Mario (N64)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/menu-mario-tennis-gbc",
            answer: "Main Menu - Mario Tennis (GBC)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/game-point-mario-tennis-gbc",
            answer: "Game Point - Mario Tennis (GBC)",
          },
          {
            url: "https://soundcloud.com/beep-blox/title-screen-mario-party-3",
            answer: "Title Screen - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/free-play-room-mario-party-3",
            answer: "Free Play Room - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/star-lift-mario-party-3",
            answer: "Star Lift - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/still-going-mario-party-3",
            answer: "Still Going (Last 5 Turns) - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/chilly-waters-mario-party-3",
            answer: "Chilly Waters - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/deep-blooper-sea-mario-party-3",
            answer: "Deep Bloober Sea - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/woody-woods-mario-party-3",
            answer: "Woody Woods - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/creepy-cavern-mario-party-3",
            answer: "Creepy Cavern - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/waluigi-island-mario-party-3",
            answer: "Waluigi's Island - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/qroglumbie/dont-hurry-mario-party-3",
            answer: "Don't Hurry (River Raiders, Rockin' Raceway, etc) - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/fighting-spirit-mario-party-3",
            answer: "Fighting Spirit (Snowball Summit, Vine With Me, etc) - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/lets-get-a-move-on-mario-party-3",
            answer: "Let's Get A Move On (Aces High, Ridiculous Relay, etc) - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/beep-blox/mustnt-panic-mario-party-3",
            answer: "Mustn't Panic (Eatsa Pizza, Pipe Cleaners, etc) - Mario Party 3",
          },
          {
            url: "https://soundcloud.com/alexthetoon/03-mb-stage-theme-1",
            answer: "Stage Theme 1 - Mario Bros. (GBA)",
          },
          {
            url: "https://soundcloud.com/alexthetoon/mario-bros-bonus-stage",
            answer: "Bonus Round - Mario Bros. (GBA)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/choose-a-game-super-mario-advance",
            answer: "Choose A Game! - Super Mario Advance (Super Mario Bros. 2)",
          },
          {
            url: "https://soundcloud.com/alexthetoon/smb2-level-overworld",
            answer: "Ground - Super Mario Advance (Super Mario Bros. 2)",
          },
          {
            url: "https://soundcloud.com/vgm-doctor/inside-jar-yoshis-egg-challenge-super-mario-advance-smb2-hq",
            answer: "Jar - Super Mario Advance (Super Mario Bros. 2)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/title-screen-dr-mario-64",
            answer: "Title Screen - Dr. Mario 64",
          },
          {
            url: "https://soundcloud.com/mario-heardle/fever-dr-mario-64",
            answer: "Fever - Dr. Mario 64",
          },
          {
            url: "https://soundcloud.com/mario-heardle/chill-dr-mario-64",
            answer: "Chill - Dr. Mario 64",
          },
          {
            url: "https://soundcloud.com/mario-heardle/cube-dr-mario-64",
            answer: "Cube (Cough) - Dr. Mario 64",
          },
          {
            url: "https://soundcloud.com/mario-heardle/que-que-dr-mario-64",
            answer: "Que Que (Sneeze) - Dr. Mario 64",
          },
          {
            url: "https://soundcloud.com/mario-heardle/vs-rudy-dr-mario-64",
            answer: "Vs. Rudy - Dr. Mario 64",
          },
          {
            url: "https://soundcloud.com/julianunderscore/smss-title-gba-hd",
            answer: "Title Screen - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/mario-heardle/menu-mario-kart-super-circuit",
            answer: "Main Menu - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/3-circuits-mario-kart-super",
            answer: "Peach/Mario/Luigi Circuit - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/shy-guy-beach-cheep-cheep",
            answer: "Shy Guy Beach/Cheep Cheep Island - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/riverside-park-mario-kart",
            answer: "Riverside Park - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/bowser-castle-mario-kart-super",
            answer: "Bowser Castle - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/boo-lake-broken-pier-mario",
            answer: "Boo Lake/Broken Pier - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/cheese-land-mario-kart-super",
            answer: "Cheese Land - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/sky-garden-mario-kart-super",
            answer: "Sky Garden - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/sunset-wilds-mario-kart-super",
            answer: "Sunset Wilds - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/snow-land-mario-kart-super",
            answer: "Snow Land - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/ribbon-road-mario-kart-super",
            answer: "Ribbon Road - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/yoshi-desert-mario-kart-super",
            answer: "Yoshi Desert - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/lakeside-park-mario-kart-super",
            answer: "Lakeside Park - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/rainbow-road-mario-kart-super",
            answer: "Rainbow Road - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/geko-xeno/battle-mario-kart-super",
            answer: "Battle - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/mario-heardle/staff-roll-mario-kart-super-circuit",
            answer: "Staff Roll - Mario Kart: Super Circuit",
          },
          {
            url: "https://soundcloud.com/tahutoa/work-it-title-theme-wario-land-4",
            answer: "Work It! (Title Screen) - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/puzzle-room-wario-land-4",
            answer: "Puzzle Room - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/palm-tree-paradise-wario-land-4",
            answer: "Palm Tree Paradise - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/monsoon-jungle-wario-land-4",
            answer: "Monsoon Jungle - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/40-below-fridge-wario-land-4",
            answer: "40 Below Fridge - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/toy-block-tower-wario-land-4",
            answer: "Toy Block Tower - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/arabian-night-wario-land-4",
            answer: "Arabian Night - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/hurry-up-wario-land-4",
            answer: "Hurry Up! - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/credits-wario-land-4",
            answer: "Staff Roll - Wario Land 4",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/main-theme-luigis-mansion",
            answer: "Main Theme - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/menu-luigis-mansion",
            answer: "File Select - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/training-theme-luigis-mansion",
            answer: "Training Room - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/toads-theme-luigis-mansion",
            answer: "There, There, Toad - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/egads-luigis-mansion",
            answer: "Professor E. Gadd's Lab - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/game-boy-horror-luigis-mansion",
            answer: "Chatting With Professor E. Gadd - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/talking-with-ghosts-luigis-mansion",
            answer: "Chatting With A Ghost - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/observatory-luigis-mansion",
            answer: "Observatory - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/king-boo-battle-luigis-mansion",
            answer: "King Boo Battle - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/vgmhoarder/credits-luigis-mansion",
            answer: "Staff Roll - Luigi's Mansion (GameCube)",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/005-ground-theme-super-mario",
            answer: "Princess Peach's Castle (Super Mario Bros. ~ Ground) - Super Smash Bros. Melee",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/023-ground-theme-super-mario",
            answer: "Ground Theme (Super Mario Bros. 3) - Super Smash Bros. Melee",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/040-slide",
            answer: "Rainbow Cruise (Super Mario 64 ~ Slider) - Super Smash Bros. Melee",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/01-athletic-theme-super-mario",
            answer: "Yoshi's Island (Super Mario World ~ Athletic) - Super Smash Bros. Melee",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/106-fever",
            answer: "Fever (Dr. Mario) - Super Smash Bros. Melee",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/11-jungle-level-melee",
            answer: "Kongo Falls (Donkey Kong Country ~ DK Island Swing) - Super Smash Bros. Melee",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/08-yoshis-story-melee",
            answer: "Yoshi's Song (Yoshi's Story) - Super Smash Bros. Melee",
          },
          {
            url: "https://soundcloud.com/mario-heardle/ground-super-mario-world-super-mario-advance-2",
            answer: "Ground - Super Mario World: Super Mario Advance 2",
          },
          {
            url: "https://soundcloud.com/mario-heardle/athletic-super-mario-world-super-mario-advance-2",
            answer: "Athletic - Super Mario World: Super Mario Advance 2",
          },
          {
            url: "https://soundcloud.com/mario-heardle/vanilla-dome-super-mario-world-super-mario-advance-2",
            answer: "Vanilla Dome - Super Mario World: Super Mario Advance 2",
          },
          {
            url: "https://soundcloud.com/doc-vgm/status-screen-super-mario-advance-2-super-mario-world",
            answer: "Status Screen - Super Mario World: Super Mario Advance 2",
          },
          {
            url: "https://soundcloud.com/vybenet/super-mario-sunshine-ost-2",
            answer: "Isle Delfino - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/vybenet/super-mario-sunshine-ost-6",
            answer: "Bianco Hills - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/vybenet/super-mario-sunshine-ost-ricco-harbor",
            answer: "Ricco Harbor - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/caitlin-freeman-8/gelato-beach-super-mario-sunshine",
            answer: "Gelato Beach - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/generalkoopa/pinna-park-super-mario",
            answer: "Pinna Park - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/user-667082446/super-maerio-sunshine-sirena-beach",
            answer: "Sirena Beach - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/gabriel12cfg/hotel-delfino",
            answer: "Hotel Delfino - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/aquatis-gd/super-mario-sunshine-ost-casino",
            answer: "Casino - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/tomas_vrbada/noki-bay-super-mario-sunshine",
            answer: "Noki Bay - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/aquatis-gd/noki-depths-super-mario-sunshine",
            answer: "Noki Depths - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/aquatis-gd/super-mario-sunshine-ost-pianta-village",
            answer: "Pianta Village - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/gabriel12cfg/pianta-village-band-hot-2",
            answer: "Pianta Hot Spring - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/aquatis-gd/super-mario-sunshine-ost-corona-mountain",
            answer: "Corona Mountain - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/vybenet/super-mario-sunshine-ost-9",
            answer: "Secret Course - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/the-green-queens-86415144/sky-sea-super-mario-sunshine",
            answer: "Secret Course ~ Sky And Sea - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/gabriel12cfg/vs-plungelo",
            answer: "Mid Boss - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/gabriel12cfg/vs-boss",
            answer: "Boss Battle - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/kevinrios1342/staff-credits-super-mario",
            answer: "Staff Roll - Super Mario Sunshine",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/flower-garden-yoshis-island-super-mario-advance-3",
            answer: "Flower Field - Super Mario Advance 3: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/athletic-yoshis-island-super-mario-advance-3",
            answer: "Athletic - Super Mario Advance 3: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/100-completion-yoshis-island-super-mario-advance-3",
            answer: "100% Completion - Super Mario Advance 3: Yoshi's Island",
          },
          {
            url: "https://soundcloud.com/mvpl/31-map-1-toads-midway-mad",
            answer: "Toad's Midway Madness - Mario Party 4",
          },
          {
            url: "https://soundcloud.com/mvpl/35-map-2-goombas-greedy-g",
            answer: "Goomba's Greedy Gala - Mario Party 4",
          },
          {
            url: "https://soundcloud.com/mvpl/46-map-4-boos-haunted-bas",
            answer: "Boo's Haunted Bash - Mario Party 4",
          },
          {
            url: "https://soundcloud.com/mvpl/51-map-5-koopas-seaside-soiree",
            answer: "Koopa's Seaside Soiree - Mario Party 4",
          },
          {
            url: "https://soundcloud.com/mvpl/62-slowly-yet-surely",
            answer: "Slowly Yet Surely (Stamp Out!, Trace Race, etc) - Mario Party 4",
          },
          {
            url: "https://soundcloud.com/mvpl/64-try-hard-folks",
            answer: "Try Hard, Folks (Three Throw, Beach Volley Folly, etc) - Mario Party 4",
          },
          {
            url: "https://soundcloud.com/mvpl/65-loud-and-sweet",
            answer: "Loud And Sweet (Blame It On The Crane, Booksquirm, etc) - Mario Party 4",
          },
          {
            url: "https://soundcloud.com/mvpl/69-fortunes-turn",
            answer: "Fortunes Turn (Reversal Of Fortune) - Mario Party 4",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw4-boxing-modern-mode",
            answer: "Boxing - Game & Watch Gallery 4",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw4-rain-shower-modern-mode",
            answer: "Rain Shower - Game & Watch Gallery 4",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw4-marios-cement-factory-modern-1",
            answer: "Mario's Cement Factory - Game & Watch Gallery 4",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw4-donkey-kong-3-modern-mode",
            answer: "Donkey Kong 3 - Game & Watch Gallery 4",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw4-octopus-modern-mode",
            answer: "Octopus - Game & Watch Gallery 4",
          },
          {
            url: "https://soundcloud.com/game-and-watch-gallery/gw4-fire-attack-modern-mode",
            answer: "Fire Attack - Game & Watch Gallery 4",
          },
          {
            url: "https://soundcloud.com/yoshis-cookie-osts/action-type-c",
            answer: "Action Type C - Yoshi's Cookie (Nintendo Puzzle Collection)",
          },
          {
            url: "https://soundcloud.com/angelino-704347337/main-menu-warioware-inc-mega-microgame",
            answer: "Main Menu - WarioWare, Inc.: Mega Microgame$!",
          },
          {
            url: "https://soundcloud.com/dogcrossing/drifting-away-warioware-inc",
            answer: "Drifting Away - WarioWare, Inc.: Mega Microgame$!",
          },
          {
            url: "https://soundcloud.com/goon-221509626/four-seasons-warioware-inc-mega-microgame",
            answer: "Four Seasons - WarioWare, Inc.: Mega Microgame$!",
          },
          {
            url: "https://soundcloud.com/warioheardle/paper-plane-warioware-inc-mega-microgame",
            answer: "Paper Plane - WarioWare, Inc.: Mega Microgame$!",
          },
          {
            url: "https://soundcloud.com/warioheardle/pyoro-warioware-inc-mega-microgame",
            answer: "Pyoro - WarioWare, Inc.: Mega Microgame$!",
          },
          {
            url: "https://soundcloud.com/warioheardle/staff-roll-warioware-inc-mega-microgame",
            answer: "Staff Roll - WarioWare, Inc.: Mega Microgame$!",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/dk-island-swing",
            answer: "DK Island Swing - Donkey Kong Country (GBA)",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/aquatic-ambiance",
            answer: "Aquatic Ambiance - Donkey Kong Country (GBA)",
          },
          {
            url: "https://soundcloud.com/warioheardle/greenhorn-forest",
            answer: "Greenhorn Forest - Wario World",
          },
          {
            url: "https://soundcloud.com/warioheardle/pause-menu",
            answer: "Pause Screen - Wario World",
          },
          {
            url: "https://soundcloud.com/warioheardle/greenhorn-ruins",
            answer: "Greenhorn Ruins - Wario World",
          },
          {
            url: "https://soundcloud.com/warioheardle/sky-sub-level",
            answer: "Sky Sub Level - Wario World"
          },
          {
            url: "https://soundcloud.com/warioheardle/battle-ring",
            answer: "Battle Ring - Wario World",
          },
          {
            url: "https://soundcloud.com/warioheardle/shivering-mountains-mountain",
            answer: "Shivering Mountains - Wario World",
          },
          {
            url: "https://soundcloud.com/warioheardle/wario-world",
            answer: "Title Screen - Wario World",
          },
          {
            url: "https://soundcloud.com/mario-heardle/ground-super-mario-advance-4-super-mario-bros-3",
            answer: "Ground - Super Mario Advance 4: Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/alexthetoon/level-2",
            answer: "Athletic - Super Mario Advance 4: Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/world-select-super-mario-advance-4-super-mario-bros-3",
            answer: "World Select - Super Mario Advance 4: Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/bonus-super-mario-advance-4-super-mario-bros-3",
            answer: "Bonus - Super Mario Advance 4: Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/scanning-an-e-card-super-mario-advance-4-super-mario-bros-3",
            answer: "Scanning An e Card - Super Mario Advance 4: Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/world-e-super-mario-advance-4-super-mario-bros-3",
            answer: "World e - Super Mario Advance 4: Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/not-big-surprise/super-mario-advance-4-smb3",
            answer: "World e Castle - Super Mario Advance 4: Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/staff-credits-super-mario-advance-4-super-mario-bros-3",
            answer: "Staff Roll - Super Mario Advance 4: Super Mario Bros. 3",
          },
          {
            url: "https://soundcloud.com/rachel-lambert-810356329/mario-golf-toadstool-tour-main-menu",
            answer: "Main Menu - Mario Golf: Toadstool Tour",
          },
          {
            url: "https://soundcloud.com/nicol-s-reyes-palma/49-lakitu-valley-mario-golf",
            answer: "Lakitu Valley - Mario Golf: Toadstool Tour",
          },
          {
            url: "https://soundcloud.com/rachel-lambert-810356329/mario-golf-toadstool-tour-shifting-sands",
            answer: "Shifting Sands - Mario Golf: Toadstool Tour",
          },
          {
            url: "https://soundcloud.com/rachel-lambert-810356329/mario-golf-toadstool-tour-blooper-bay",
            answer: "Blooper Bay - Mario Golf: Toadstool Tour",
          },
          {
            url: "https://soundcloud.com/smokacchi/stealth-turtles-warioware-inc-mega-party-games-music",
            answer: "Stealth Turtles - WarioWare, Inc.: Mega Party Game$!",
          },
          {
            url: "https://soundcloud.com/ar-cade-gaming/mario-kart-double-dash-music-main-theme",
            answer: "Title Screen - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/silver565/mario-kart-double-dash-menu",
            answer: "Main Menu - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/user409121565/circuit-theme-mario-kart",
            answer: "Luigi/Mario/Yoshi Circuit - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-gcn-peach-beach",
            answer: "Peach Beach/Daisy Cruiser - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/user409121565/baby-park-mario-kart-double",
            answer: "Baby Park - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/user409121565/dry-dry-desert-mario-kart",
            answer: "Dry Dry Desert - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/disc-256683208/mushroom-bridge-mushroom-city-mario-kart-double-dash",
            answer: "Mushroom Bridge/Mushroom City - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/tj-gaming/gcn-waluigi-stadium",
            answer: "Waluigi Stadium/Wario Colosseum - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/hax-766019189/sherbet-land-mario-kart-double-dash-music-extended-audiotrimmercom",
            answer: "Sherbet Land - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/user409121565/dk-mountain-dino-dino-jungle",
            answer: "DK Mountain/Dino Dino Jungle - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/user409121565/bowsers-castle-mario-kart",
            answer: "Bowser's Castle - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/user485151016/rainbow-road-mario-kart-double",
            answer: "Rainbow Road - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/user409121565/battle-stage-mario-kart-double",
            answer: "Balloon Battle - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/alain-limon/results-1st-place-3rd-place",
            answer: "Winning Results - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/trainiax/staff-roll-mario-kart-double-dash",
            answer: "Staff Roll - Mario Kart: Double Dash!!",
          },
          {
            url: "https://soundcloud.com/nicol-s-reyes-palma/53-lots-of-toys-mario-party-5",
            answer: "Toy Dream - Mario Party 5",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/sky-presents-rainbow-dream",
            answer: "Rainbow Dream - Mario Party 5",
          },
          {
            url: "https://soundcloud.com/twoblu94/an-adventurer-pirate-dream-mario-party-5-ost",
            answer: "Pirate Dream - Mario Party 5",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/happy-seafloor-undersea-dream",
            answer: "Undersea Dream - Mario Party 5",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/bowsers-dream-bowser-nightmare",
            answer: "Bowser Nightmare - Mario Party 5",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/everybody-party-mario-party-5",
            answer: "Everybody Party (Dinger Derby, Coney Island, etc) - Mario Party 5",
          },
          {
            url: "https://soundcloud.com/ghoul-guy/bustling-noisily",
            answer: "Bustling Noisily (Hotel Goomba, Pushy Penguins, etc) - Mario Party 5"
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/01-a-new-adventure-begins",
            answer: "A New Adventure Begins (Title Screen) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/02-were-off-again",
            answer: "We're Off Again! (File Select) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/peachs-castle",
            answer: "Peach's Castle - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/13-come-on",
            answer: "Let's Go! (Battle) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/16-we-cant-lose",
            answer: "We Can't Lose! (Boss Battle) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/12-stardust-fields-area-64",
            answer: "Stardust Fields - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/17-beanish-people",
            answer: "Beanish People (Hoohoo Village) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/19-prince-peasley",
            answer: "Prince Peasley's Theme - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/18-hoohoo-mountaintop",
            answer: "Hoohoo Mountaintop - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/20-the-kingdom-called-beanbean",
            answer: "The Kingdom Called Beanbean (Beanbean Fields) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/21-castle-of-beans",
            answer: "Castle Of Beans - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/36-cackletta-the-fiercest-foe",
            answer: "Cackletta, The Fiercest Foe - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/24-chucklehuck-woods",
            answer: "Chucklehuck Woods - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/23-the-marvelous-duo",
            answer: "The Marvelous Duo (Popple Battle) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/27-woohoo-hooniversity",
            answer: "Woohoo Hooniversity - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/29-sweet-surfin",
            answer: "Sweet Surfin' (Gwarhar Lagoon) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/31-sea-sea-sea",
            answer: "Sea... Sea... Sea... (Oho Ocean) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/32-dont-dwell-on-danger",
            answer: "Don't Dwell On Danger (Tee Hee Valley) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/37-decisive-battleground",
            answer: "Decisive Battleground (Bowser's Castle) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/39-showdown-with-cackletta",
            answer: "Showdown With Cackletta! - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/41-going-home",
            answer: "Going Home (Staff Roll) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/26-professor-e-gadd",
            answer: "Professor E. Gadd (Luigi's Mansion ~ Main Theme) - Mario & Luigi: Superstar Saga (GBA)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/september-donkey-konga-european-version",
            answer: "September - Donkey Konga",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/mario-toy-company-a",
            answer: "Mario Toy Company A - Mario vs. Donkey Kong (GBA)",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/mini-mario-level",
            answer: "Mini Mario Level - Mario vs. Donkey Kong (GBA)",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/donkey-kong-jungle-b",
            answer: "Donkey Kong Jungle B - Mario vs. Donkey Kong (GBA)",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/fire-mountain-a",
            answer: "Fire Mountain A - Mario vs. Donkey Kong (GBA)",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/spooky-house-a",
            answer: "Spooky House A - Mario vs. Donkey Kong (GBA)",
          },
          {
            url: "https://soundcloud.com/picross-all-stars/mystic-forest-a",
            answer: "Mystic Forest A - Mario vs. Donkey Kong (GBA)",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/stickerbush-symphony",
            answer: "Stickerbush Symphony - Donkey Kong Country 2 (GBA)",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/forest-interlude",
            answer: "Forest Interlude - Donkey Kong Country 2 (GBA)",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/kannons-klaim",
            answer: "Kannon's Klanking (Mining Melancholy) - Donkey Kong Country 2 (GBA)",
          },
          {
            url: "https://soundcloud.com/papergirl2/intro-story-paper-mario-the",
            answer: "An Awfully Long Time Ago... - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/main-theme-paper-mario-the",
            answer: "Title Screen - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/rogueport-paper-mario-the",
            answer: "Rogueport - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/rogueport-sewers-paper-mario",
            answer: "Rogueport Underground - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/battle-theme-paper-mario-the",
            answer: "Battle - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/petal-meadows-paper-mario-the",
            answer: "Petal Meadows - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/petalburg-paper-mario-the",
            answer: "Petalburg - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/hooktails-castle-paper-mario",
            answer: "Hooktail Castle - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/pit-of-100-trials-paper-mario",
            answer: "Pit Of 100 Trials - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/shadow-sirens-battle-paper",
            answer: "Battle ~ Shadow Sirens - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/super-koopa-bros-world-1-paper",
            answer: "Super Bowser Bros. ~ World 1 - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/luigis-theme-paper-mario-the",
            answer: "Super Luigi - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/boggly-woods-paper-mario-the",
            answer: "Boggly Woods - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/the-great-boggly-tree-paper",
            answer: "The Great Tree - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/glitzville-paper-mario-the",
            answer: "Glitzville - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/glitz-pit-paper-mario-the",
            answer: "The Glitz Pit - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/rawk-hawk-battle-paper-mario",
            answer: "Battle ~ The Champ (Rawk Hawk) - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/sadness-and-happiness-paper",
            answer: "A Bittersweet Music Box - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/twilight-town-paper-mario-the",
            answer: "Twilight Town - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/cortez-battle-paper-mario-the",
            answer: "Battle ~ Cortez - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/excess-express-at-day-paper",
            answer: "Excess Express (Day) - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/detective-pennington-paper",
            answer: "Detective Pennington's On The Case - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/twilight-trail-paper-mario-the",
            answer: "Twilight Trail - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/excess-express-at-dusk-paper",
            answer: "Excess Express (Evening) - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/excess-express-at-night-paper",
            answer: "Excess Express (Night) - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/riverside-station-paper-mario",
            answer: "Riverside Station - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/poshley-heights-paper-mario",
            answer: "Poshley Heights - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/super-koopa-bros-world-3-paper",
            answer: "Super Bowser Bros. ~ World 3 - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/x-naut-fortress-paper-mario",
            answer: "X-Naut Fortress - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/shadow-peach-battle-paper",
            answer: "Battle ~ Shadow Queen - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/were-counting-on-you-mario",
            answer: "Supportive Voices From Afar - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/final-battle-paper-mario-the",
            answer: "Final Battle ~ Shadow Queen - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl3/return-to-mushroom-kingdom",
            answer: "Fond Farewells - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/papergirl2/credits-paper-mario-the",
            answer: "Staff Roll - Paper Mario: The Thousand-Year Door (GameCube)",
          },
          {
            url: "https://soundcloud.com/zane-maserati/title-screen-mario-pinball",
            answer: "Title Screen - Mario Pinball Land",
          },
          {
            url: "https://soundcloud.com/mario-heardle/grassy-mario-pinball-land",
            answer: "Grassy - Mario Pinball Land",
          },
          {
            url: "https://soundcloud.com/user-969696540/petey-piranha-battle",
            answer: "Petey Piranha Battle - Mario Pinball Land",
          },
          {
            url: "https://soundcloud.com/pokeseal-domaniat/under-the-ice-mario-pinball",
            answer: "Under The Ice - Mario Pinball Land",
          },
          {
            url: "https://soundcloud.com/warioheardle/title-screen-warioware-twisted",
            answer: "Title Screen - WarioWare: Twisted!",
          },
          {
            url: "https://soundcloud.com/warioheardle/menu-warioware-twisted",
            answer: "Main Menu - WarioWare: Twisted!",
          },
          {
            url: "https://soundcloud.com/sonicxd95/wario-ware-twisted-mona-pizza",
            answer: "Mona Pizza's Song - WarioWare: Twisted!",
          },
          {
            url: "https://soundcloud.com/santino-vaquer/warioware-twisted-wario-de",
            answer: "Wario De Mambo - WarioWare: Twisted!",
          },
          {
            url: "https://soundcloud.com/warioheardle/pyoro-r-warioware-twisted",
            answer: "Pyoro R - WarioWare: Twisted!",
          },
          {
            url: "https://soundcloud.com/vbwario/mario-power-tennis-main-menu",
            answer: "Main Menu - Mario Power Tennis",
          },
          {
            url: "https://soundcloud.com/vbwario/mario-power-tennis-peach-dome-court-exhibition",
            answer: "Peach Dome Court - Mario Power Tennis",
          },
          {
            url: "https://soundcloud.com/vbwario/mario-power-tennis-delfino-plaza-court-exhibition",
            answer: "Delfino Plaza Court - Mario Power Tennis",
          },
          {
            url: "https://soundcloud.com/vbwario/mario-power-tennis-mario-classic-court-exhibition",
            answer: "Mario Classic Court (Mario Bros. Theme) - Mario Power Tennis",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/towering-treetop-mario-party-6",
            answer: "Towering Treetop - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/faire-square-mario-party-6",
            answer: "Faire Square - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/snowflake-lake-mario-party-6",
            answer: "Snowflake Lake - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/castaway-bay-mario-party-6",
            answer: "Castaway Bay - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/clockwork-castle-mario-party-6",
            answer: "Clockwork Castle - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/frantic-mario-party-6",
            answer: "Frantic (Daft Rafts, Snow Brawl, etc) - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/jazzy-mario-party-6",
            answer: "Jazzy (Catch You Letter, Dust 'Til Dawn, etc) - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/blissful-mario-party-6",
            answer: "Blissful (Clean Team, Mowtown, etc) - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/relaxed-mario-party-6",
            answer: "Relaxed (Rocky Road, Snow Whirled, etc) - Mario Party 6",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/sunshine-isles",
            answer: "Sunshine Isles - Super Mario 64 DS",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/rec-room",
            answer: "Rec Room - Super Mario 64 DS",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/casino-minigames",
            answer: "Casino Minigames - Super Mario 64 DS",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/psyche-out-minigame",
            answer: "Psyche Out! (Minigame) - Super Mario 64 DS",
          },
          {
            url: "https://soundcloud.com/warioheardle/title-screen-warioware-touched",
            answer: "Title Screen - WarioWare: Touched!",
          },
          {
            url: "https://soundcloud.com/warioheardle/menu-warioware-touched",
            answer: "Main Menu - WarioWare: Touched!",
          },
          {
            url: "https://soundcloud.com/warioheardle/hawt-spot-dance-floor-warioware-touched",
            answer: "Hawt Spot Dance Floor - WarioWare: Touched!",
          },
          {
            url: "https://soundcloud.com/buurazu/ashleys-song-warioware-touched",
            answer: "Ashley's Song - WarioWare: Touched!",
          },
          {
            url: "https://soundcloud.com/warioheardle/mikes-song-warioware-touched",
            answer: "Mike's Song - WarioWare: Touched!",
          },
          {
            url: "https://soundcloud.com/warioheardle/pyoro-t-warioware-touched",
            answer: "Pyoro T - WarioWare: Touched!",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/title-screen-yoshi-topsy-turvy-universal-gravatation",
            answer: "Title Screen - Yoshi Topsy-Turvy",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/farewell-friends-yoshi-topsy-turvy-universal-gravitation",
            answer: "Farewell, Friends! (Staff Roll) - Yoshi Topsy-Turvy",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/title-screen-donkey-kong",
            answer: "Title Screen - Donkey Kong Jungle Beat",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/battle-for-storm-hill-donkey",
            answer: "Battle For Storm Hill - Donkey Kong Jungle Beat",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/sky-garden-donkey-kong-jungle",
            answer: "Sky Garden - Donkey Kong Jungle Beat",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/ice-warren-donkey-kong-jungle",
            answer: "Ice Warren - Donkey Kong Jungle Beat",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/clock-tower-donkey-kong-jungle",
            answer: "Clock Tower - Donkey Kong Jungle Beat",
          },
          {
            url: "https://soundcloud.com/bobbery-hoonsey/boss-hog-donkey-kong-jungle",
            answer: "Boss Hog - Donkey Kong Jungle Beat",
          },
          {
            url: "https://soundcloud.com/mario-heardle/shroom-city-mario-party-advance",
            answer: "Shroom City - Mario Party Advance",
          },
          {
            url: "https://soundcloud.com/mario-heardle/twist-shake-mario-party-advance",
            answer: "Twist & Shake [Mario Party 4] - Mario Party Advance",
          },
          {
            url: "https://soundcloud.com/mario-heardle/lets-get-a-move-on-mario-party-advance",
            answer: "Let's Get A Move On [Mario Party 3] - Mario Party Advance",
          },
          {
            url: "https://soundcloud.com/user-504187549/title-screen-ytg",
            answer: "Title Screen - Yoshi Touch & Go",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/flower-field-yoshi-touch-and-go",
            answer: "Flower Field - Yoshi Touch & Go",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/title-screen-dk-king-of-swing",
            answer: "Title Screen - DK: King Of Swing",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/world-1-simian-segue-dk-king-of-swing",
            answer: "World 1 (Simian Segue) - DK: King Of Swing",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/banana-bungalow-dk-king-of-swing",
            answer: "Banana Bungalow - DK: King Of Swing",
          },
          {
            url: "https://soundcloud.com/mario-heardle/menu-dance-dance-revolution-mario-mix",
            answer: "Main Menu - Dance Dance Revolution Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/here-we-go",
            answer: "Here We Go! (Super Mario Bros. ~ Ground) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/destruction-in-the-moonlight",
            answer: "Destruction Dance (Wrecking Crew ~ Bonus Stage) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/jump-jump-jump",
            answer: "Jump! Jump! Jump! (Super Mario Bros. 3 ~ Athletic) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/korogaru-koin-no-yoo-ni",
            answer: "Pirate Dance (Super Mario World ~ Ground) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/kue-te-baya-mario",
            answer: "Hammer Dance (Super Mario Bros. 3 ~ Ground) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/hoppin-choppin",
            answer: "Boo Boogie (Super Mario Bros. 2 ~ Ground) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/im-a-star",
            answer: "Starring Wario! (Wario World ~ Greenhorn Forest) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/kitto-egao-ga-ichiban-sa",
            answer: "Always Smiling - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/wagahai-wa-bosu-de-aru",
            answer: "Bowser's Castle (Mario Kart: Double Dash!!) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/kereta-simit/pi-ro-ri",
            answer: "Piroli (Famicom Disk System ~ BIOS) - Dance Dance Revolution: Mario Mix",
          },
          {
            url: "https://soundcloud.com/mario-heardle/pick-a-game-dr-mario-puzzle-league",
            answer: "Pick A Game! - Dr. Mario & Puzzle League (GBA)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/fever-dr-mario-puzzle-league",
            answer: "Fever - Dr. Mario & Puzzle League (GBA)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/menu-mario-superstar-baseball",
            answer: "Main Menu - Mario Superstar Baseball",
          },
          {
            url: "https://soundcloud.com/nicol-s-r-p/62-mario-stadium-mario",
            answer: "Mario Stadium - Mario Superstar Baseball",
          },
          {
            url: "https://soundcloud.com/mario-heardle/wario-palace-mario-superstar-baseball",
            answer: "Wario Palace - Mario Superstar Baseball",
          },
          {
            url: "https://soundcloud.com/majinboo0111/mario-superstar-baseball-ost-bowser-castle",
            answer: "Bowser Castle - Mario Superstar Baseball",
          },
          {
            url: "https://soundcloud.com/mario-heardle/menu-mario-kart-arcade-gp",
            answer: "Main Menu - Mario Kart Arcade GP",
          },
          {
            url: "https://soundcloud.com/trainiax/gp-mario-highway-mario-kart-arcade-gp",
            answer: "Mario Cup - Mario Kart Arcade GP",
          },
          {
            url: "https://soundcloud.com/trainiax/gp-pac-mountain-mario-kart-arcade-gp",
            answer: "Pac-Man Cup - Mario Kart Arcade GP",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/title-theme-super-princess",
            answer: "Title Screen - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/nicol-s-r-p/64-ladida-plains-1-super",
            answer: "Ladida Plains 1 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/ladida-plains-2-super-princess",
            answer: "Ladida Plains 2 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/tag-the-flowers-super-princess",
            answer: "Tag The Flowers - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/hoos-wood-1-super-princess",
            answer: "Hoo's Wood 1 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/hoos-wood-2-super-princess",
            answer: "Hoo's Wood 2 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/shriek-mansion-1-super",
            answer: "Shriek Mansion 1 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/shriek-mansion-2-super",
            answer: "Shriek Mansion 2 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/adrian-fernandez-842998753/super-princess-peach-fury-volcano-act-1-2",
            answer: "Fury Volcano 1 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/slimyappraisal/fury-volcano-2",
            answer: "Fury Volcano 2 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/wavy-beach-1-super-princess",
            answer: "Wavy Beach 1 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/wavy-beach-2-super-princess",
            answer: "Wavy Beach 2 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/user-943811663/super-princess-peach-gleam-glacier-1",
            answer: "Gleam Glacier 1 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/gleam-glacier-2-super-princess",
            answer: "Gleam Glacier 2 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/giddy-sky-1-super-princess",
            answer: "Giddy Sky 1 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/giddy-sky-2-super-princess",
            answer: "Giddy Sky 2 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/astralstatis/perrys-dream-super-princess-peach",
            answer: "Perry's Dream - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/user-274753087/bowsers-villa-1-super-princess",
            answer: "Bowser's Villa 1 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/user-274753087/bowsers-villa-2-super-princess",
            answer: "Bowser's Villa 2 - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/staff-roll-super-princess",
            answer: "Staff Roll - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/natian_15-seami/under-the-starry-night-super",
            answer: "Under The Starry Night - Super Princess Peach",
          },
          {
            url: "https://soundcloud.com/user-407531921/dkc3-gba-ost-11-frosty-frolics",
            answer: "Frosty Frolics - Donkey Kong Country 3 (GBA)",
          },
          {
            url: "https://soundcloud.com/user-407531921/dkc3-gba-ost-14-treetop-tumble",
            answer: "Treetop Tumble - Donkey Kong Country 3 (GBA)",
          },
          {
            url: "https://soundcloud.com/user-407531921/dkc3-gba-ost-17-water-world",
            answer: "Water World - Donkey Kong Country 3 (GBA)",
          },
          {
            url: "https://soundcloud.com/user-407531921/dkc3-gba-ost-22-rockface",
            answer: "Rockface Rumble - Donkey Kong Country 3 (GBA)",
          },
          {
            url: "https://soundcloud.com/j_angel01/sail-the-canals-mario-party-7",
            answer: "Grand Canal - Mario Party 7",
          },
          {
            url: "https://soundcloud.com/j_angel01/mario-party-7-music-climb-the",
            answer: "Pagoda Peak - Mario Party 7",
          },
          {
            url: "https://soundcloud.com/nicol-s-r-p/65-park-it-mario-party-7",
            answer: "Pyramid Park - Mario Party 7",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/neon-nation-neon-heights-mario",
            answer: "Neon Heights - Mario Party 7",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/mill-it-over-windmillville",
            answer: "Windmillville - Mario Party 7",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/lazy-day-lollygag-mario-party",
            answer: "Lazy Day Lollygag (Picture This, World Piece, etc) - Mario Party 7",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/dont-look-down-mario-party-7",
            answer: "Don't Look Down (Buzzstormer, Fun Run, etc) - Mario Party 7",
          },
          {
            url: "https://soundcloud.com/generalkoopa/cool-as-a-cucumber-mario-party",
            answer: "Cool As A Cucumber (Camp Ukiki, Spin Doctor, etc) - Mario Party 7",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-title-screen",
            answer: "Title Screen - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-main-menu",
            answer: "Main Menu - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-options",
            answer: "Options - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-figure-8",
            answer: "Figure 8 Circuit/Mario Circuit - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-yoshi-falls",
            answer: "Yoshi Falls - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-cheep-cheep",
            answer: "Cheep Cheep Beach - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-luigis",
            answer: "Luigi's Mansion - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-desert-hills",
            answer: "Desert Hills - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-delfino",
            answer: "Delfino Square - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-waluigi",
            answer: "Waluigi Pinball/Wario Stadium - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-shroom-ridge",
            answer: "Shroom Ridge - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-dk-pass",
            answer: "DK Pass - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-tick-tock",
            answer: "Tick Tock Clock - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-airship",
            answer: "Airship Fortress - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-peach",
            answer: "Peach Gardens - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-bowsers",
            answer: "Bowser's Castle - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-rainbow-road",
            answer: "Rainbow Road - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-sky-garden",
            answer: "GBA Sky Garden - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/3nintendo/battle-mode",
            answer: "Battle Mode - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/3nintendo/mission-mode",
            answer: "Mission Mode - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/3nintendo/boss-battle",
            answer: "Boss Battle - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-wi-fi-menu",
            answer: "WiFi Menu - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-records",
            answer: "Records - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/user409121565/mario-kart-ds-ost-credits",
            answer: "Staff Roll - Mario Kart DS",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/title-screen-super-mario-strikers",
            answer: "Title Screen - Super Mario Strikers",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/the-palace-intro-super-mario-strikers",
            answer: "The Palace Intro - Super Mario Strikers",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/pipeline-central-intro-super-mario-strikers",
            answer: "Pipeline Central Intro - Super Mario Strikers",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/match-results-super-mario-strikers",
            answer: "Match Results - Super Mario Strikers",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/intro-theme-credits-super-mario-strikers",
            answer: "Opening/Staff Roll - Super Mario Strikers",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/01-hello-time-travelers",
            answer: "Hello! Time Travelers (Title Screen) - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/02-file-select",
            answer: "File Select - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/03-shroobs",
            answer: "Shroobs! (Prologue) - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/04-peachs-castle",
            answer: "Peach's Castle - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-007-danger",
            answer: "Serious Trouble - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-008-main-battle-theme",
            answer: "Attack The Enemy (Battle) - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/08-the-time-machine",
            answer: "The Time Machine - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/11-listen-up-now",
            answer: "Listen Up, Now - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/12-holli-jolli-village",
            answer: "Holli Jolli Village - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-013-boss-battle",
            answer: "Crisis Of The Red And Green (Boss Battle) - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/17-toadwood-forest",
            answer: "Toadwood Forest - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-027-vim-factory",
            answer: "Vim Factory - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/21-yoshi-mountain",
            answer: "Yoshi Mountain - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/20-the-yoshi-village",
            answer: "Yoshi Village - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-031-yoobs-belly",
            answer: "Yoob's Belly - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/dooki51/gritzy-desert-mario-luigi-partners-in-time",
            answer: "Gritzy Desert - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in",
            answer: "Koopaseum - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-044-thwomp-volcano",
            answer: "Thwomp Volcano - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-045-thwomp-caverns",
            answer: "Thwomp Caverns - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-048-ruins-of-toad-town",
            answer: "Toad Town - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/33-star-hill",
            answer: "Star Hill - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-052-star-shrine",
            answer: "Star Shrine - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-054-shroob-castle-princess-peachs-castle-past",
            answer: "Shroob Castle - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-058-elder-princess-shroob-battle-theme",
            answer: "Princess Shroob Battle - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/38-anothers-requiem",
            answer: "Another's Requiem (Final Battle) - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-and-luigi-partners-in-time-ost-062-credits",
            answer: "Dance With Babies (Staff Roll) - Mario & Luigi: Partners In Time",
          },
          {
            url: "https://soundcloud.com/daxmynz/title-theme-new-super-mario-bros",
            answer: "Title Screen - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/world-1-plains-new-super-mario-bros",
            answer: "World 1 (Grass) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/world-2-desert-new-super-mario-bros",
            answer: "World 2 (Desert) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/world-3-beach-new-super-mario-bros",
            answer: "World 3 (Beach) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/world-4-forest-new-super-mario-bros",
            answer: "World 4 (Jungle) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/world-5-snow-new-super-mario-bros",
            answer: "World 5 (Snow) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/world-6-canyon-new-super-mario-bros",
            answer: "World 6 (Mountain) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/world-7-clouds-new-super-mario-bros",
            answer: "World 7 (Sky) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/world-8-lava-new-super-mario-bros",
            answer: "World 8 (Lava) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/overworld-theme-new-super-mario-bros",
            answer: "Ground - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/underground-theme-new-super-mario-bros",
            answer: "Underground - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/underwater-theme-new-super-mario-bros",
            answer: "Underwater - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/castle-theme-new-super-mario-bros",
            answer: "Castle - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/desert-overworld-new-super-mario-bros",
            answer: "Desert - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/athletic-theme-new-super-mario-bros",
            answer: "Athletic - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/fortress-theme-new-super-mario-bros",
            answer: "Tower - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/haunted-mansion-new-super-mario-bros",
            answer: "Ghost House - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/beach-overworld-new-super-mario-bros",
            answer: "Beach - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/juan-manuel-montoyaxd/new-super-mario-bros-ds-volcano",
            answer: "Volcano - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/bonus-area-new-super-mario-bros",
            answer: "Bonus - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/end-credits-new-super-mario-bros",
            answer: "Staff Roll - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/versus-menu-screen-new-super-mario-bros",
            answer: "Minigames Menu - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/overworld-versus-mode-new-super-mario-bros",
            answer: "The Plains (Mario vs. Luigi) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/daxmynz/snow-overworld-versus-mode-new-super-mario-bros",
            answer: "The Snow Plains (Mario vs. Luigi) - New Super Mario Bros. (DS)",
          },
          {
            url: "https://soundcloud.com/mario-heardle/sort-or-splode-sm64ds-nsmb-minigames",
            answer: "Sort Or 'Splode - Super Mario 64 DS",
          },
          {
            url: "https://soundcloud.com/julianunderscore/main-menu-mario-slam-basketball",
            answer: "Title Screen - Mario Hoops 3-On-3",
          },
          {
            url: "https://soundcloud.com/julianunderscore/character-select-mario-slam-basketball",
            answer: "Character Select - Mario Hoops 3-On-3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/mario-stadium-mario-hoops-3-on-3",
            answer: "Mario Stadium - Mario Hoops 3-On-3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/peach-field-mario-hoops-3-on-3",
            answer: "Peach Field - Mario Hoops 3-On-3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/jr-street-mario-hoops-3-on-3",
            answer: "Jr. Street - Mario Hoops 3-On-3",
          },
          {
            url: "https://soundcloud.com/kasabee/mario-hoops-3-on-3-sherbet-land",
            answer: "Sherbet Land - Mario Hoops 3-On-3",
          },
          {
            url: "https://soundcloud.com/mario-heardle/bloocheep-ocean-mario-hoops-3-on-3",
            answer: "Bloocheep Ocean - Mario Hoops 3-On-3",
          },
          {
            url: "https://soundcloud.com/medi101/mario-vs-donkey-kong-2-march-of-the-ministitle-screen",
            answer: "Title Screen - Mario vs. Donkey Kong 2: March Of The Minis",
          },
          {
            url: "https://soundcloud.com/medi101/mvdk2-mushroom-mayhem-i",
            answer: "Mushroom Mayhem A - Mario vs. Donkey Kong 2: March Of The Minis",
          },
          {
            url: "https://soundcloud.com/medi101/mvdk2-pipe-works-i",
            answer: "Pipe Works A - Mario vs. Donkey Kong 2: March Of The Minis",
          },
          {
            url: "https://soundcloud.com/procrastinating-reality/yoshis-island-ds-flower-garden",
            answer: "Flower Garden - Yoshi's Island DS",
          },
          {
            url: "https://soundcloud.com/rachel-lambert-810356329/yoshis-island-ds-wildlands",
            answer: "Wildlands - Yoshi's Island DS",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/in-the-clouds-yoshis-island-ds",
            answer: "In The Clouds - Yoshi's Island DS",
          },
          {
            url: "https://soundcloud.com/chepfoorie/yoshis-island-ds-flower-field",
            answer: "Flower Field (Athletic) - Yoshi's Island DS",
          },
          {
            url: "https://soundcloud.com/jkmettaton-net52/yoshis-island-ds-boss-battle",
            answer: "Big Boss - Yoshi's Island DS",
          },
          {
            url: "https://soundcloud.com/wariowaresmoothmoves/level-select",
            answer: "Level Select - WarioWare: Smooth Moves",
          },
          {
            url: "https://soundcloud.com/wariowaresmoothmoves/temple-of-form",
            answer: "Temple Of Form - WarioWare: Smooth Moves",
          },
          {
            url: "https://soundcloud.com/wariowaresmoothmoves/tomorrow-hill-international",
            answer: "Tomorrow Hill - WarioWare: Smooth Moves",
          },
          {
            url: "https://soundcloud.com/wariowaresmoothmoves/wii-dancing",
            answer: "Wii Dancing (Wario Dance Company) - WarioWare: Smooth Moves",
          },
          {
            url: "https://soundcloud.com/wariowaresmoothmoves/form-baton-international",
            answer: "Form Baton Tutorial - WarioWare: Smooth Moves",
          },
          {
            url: "https://soundcloud.com/wariowaresmoothmoves/pyoro-s",
            answer: "Pyoro S - WarioWare: Smooth Moves",
          },
          {
            url: "https://soundcloud.com/warioheardle/mad-hat-count-cannoli-battle-wario-master-of-disguise",
            answer: "Mad Hat (Count Cannoli Battle) - Wario: Master Of Disguise",
          },
          {
            url: "https://soundcloud.com/warioheardle/ss-caviar-interior-wario-master-of-disguise",
            answer: "S.S. Caviar (Interior) - Wario: Master Of Disguise",
          },
          {
            url: "https://soundcloud.com/warioheardle/sweatmore-peak-wario-master-of-disguise",
            answer: "Sweatmore Peak - Wario: Master Of Disguise",
          },
          {
            url: "https://soundcloud.com/warioheardle/head-honcho-carpaccio-carpaccio-battle-wario-master-of-disguise",
            answer: "Head Honcho, Carpaccio (Carpaccio Battle) - Wario: Master Of Disguise",
          },
          {
            url: "https://soundcloud.com/warioheardle/allergia-gardens-wario-master-of-disguise",
            answer: "Allergia Gardens - Wario: Master Of Disguise",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/menu-mario-kart-arcade-gp-2",
            answer: "Main Menu - Mario Kart Arcade GP 2",
          },
          {
            url: "https://soundcloud.com/user-550331963/mario-kart-arcade-gp-2-ost-waluigi-cup",
            answer: "Waluigi Cup - Mario Kart Arcade GP 2",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/todays-story",
            answer: "Today's Story - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/super-paper-mario-title-super-paper-mario-2007",
            answer: "Title Screen - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/the-evil-count-bleck-super-paper-mario-2007",
            answer: "The Evil Count Bleck - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/flipside-super-paper-mario-2007",
            answer: "Flipside - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/lineland-road",
            answer: "Lineland Road - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/an-unrivaled-battle-8-bit-mega-star-power-super-paper-mario-2007",
            answer: "An Unrivaled Battle (8-Bit Mega Star Power) - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/mount-lineland-super-paper-mario-2007",
            answer: "Mount Lineland - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/yold-ruins-super-paper-mario-2007",
            answer: "Yold Ruins - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/gloam-valley-super-paper-mario-2007",
            answer: "Gloam Valley - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/merlees-mansion-super-paper-mario-2007",
            answer: "Merlee's Mansion - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/the-open-plane-the-bitlands-super-paper-mario-2007",
            answer: "The Bitlands - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/nostalgic-underground-bitlands-underground-super-paper-mario-2007",
            answer: "Nostalgic Underground - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/the-tile-pool-super-paper-mario-2007",
            answer: "The Tile Pool - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/a-powerful-enemy-emerges-boss-battle-super-paper-mario-2007",
            answer: "A Powerful Enemy Emerges (Boss Battle) - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/dimentio-charming-magician-super-paper-mario-2007",
            answer: "Dimentio, Charming Magician - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/fort-francis-super-paper-mario-2007",
            answer: "Fort Francis - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/outer-space",
            answer: "Outer Space - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/whoa-zone-super-paper-mario-2007",
            answer: "Whoa Zone - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/flopside-super-paper-mario-2007",
            answer: "Flopside - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/gap-of-crag-super-paper-mario-2007",
            answer: "Gap Of Crag - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/floro-sapien-caverns-super-paper-mario-2007",
            answer: "Floro Sapien Caverns - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/sammers-kingdom-super-paper-mario-2007",
            answer: "Sammer's Kingdom - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/tokens-please-flipside-arcade-super-paper-mario-2007",
            answer: "Flipside Arcade - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/the-underwhere-super-paper-mario-2007",
            answer: "The Underwhere - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/underchomp-battle-super-paper-mario-2007",
            answer: "Underchomp Battle - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/the-overthere-super-paper-mario-2007",
            answer: "The Overthere - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/memory-4-super-paper-mario-2007",
            answer: "Memory 4 - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/castle-bleck-super-paper-mario-2007",
            answer: "Castle Bleck - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/the-ultimate-show-final-battle-super-paper-mario-2007",
            answer: "The Ultimate Show (Final Battle) - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/super-paper-camek/proof-of-existence",
            answer: "Proof Of Existance - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/camek-neptunia-mk3/staff-roll-super-p-mario-2007",
            answer: "Staff Roll - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/camek-neptunia-mk3/pit-of-100-trials-super-paper-mario-2007",
            answer: "Pit Of 100 Trials - Super Paper Mario",
          },
          {
            url: "https://soundcloud.com/exile2003/mario-strikers-charged-title",
            answer: "Title Screen - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/exile2003/mario-strikers-charged-paused",
            answer: "Pause Menu - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/exile2003/mario-strikers-charged-the-classroom",
            answer: "The Classroom - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/exile2003/mario-strikers-charged-the-lavapit",
            answer: "The Lava Pit - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/nurse-ratched/mario-strikers-charged-the",
            answer: "The Wastelands - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/hamza-jamjoom-194736716/crystal-canyon-mario-strikers-charged-music-extended",
            answer: "Crystal Canyons - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/generalkoopa/the-dump-mario-strikers",
            answer: "The Dump - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/hanasawa/sudden-death-mario-strikers-charged",
            answer: "Sudden Death - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/marios-theme-mario-strikers",
            answer: "Mario's Theme - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/luigis-theme-mario-strikers",
            answer: "Luigi's Theme - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/peachs-theme-mario-strikers",
            answer: "Peach's Theme - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/bowsers-theme-mario-strikers",
            answer: "Bowser's Theme - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/warios-theme-mario-strikers",
            answer: "Wario's Theme - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/petey-piranhas-theme-mario",
            answer: "Petey Piranha's Theme - Mario Strikers Charged",
          },
          {
            url: "https://soundcloud.com/user-272592510/welcome-to-mario-party",
            answer: "Title Screen - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/user-272592510/treetop-temple",
            answer: "DK's Treetop Temple - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/user-272592510/booty-boardwalk",
            answer: "Goomba's Booty Boardwalk - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/user-272592510/haunted-hideaway",
            answer: "King Boo's Haunted Hideaway - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/user-272592510/perplex-express",
            answer: "Shy Guy's Perplex Express - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/user-272592510/tycoon-town",
            answer: "Koopa's Tycoon Town - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/user-272592510/warped-orbit",
            answer: "Bowser's Warped Orbit - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/lilsweens-extra/mario-party-8-how-to-play",
            answer: "How To Play Minigames - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/mario-heardle/feelin-cyber-mario-party-8",
            answer: "Feelin' Cyber (Ion The Prize, Mario Matrix, etc) - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/mario-heardle/happy-go-lucky-mario-party-8",
            answer: "Happy Go Lucky (At The Chomp Wash, Crank To Rank, etc) - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/mario-heardle/its-a-dead-heat-mario-party-8",
            answer: "It's A Dead Heat (Alpine Assault, Cosmic Slalom, etc) - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/mario-heardle/friendly-competition-mario-party-8",
            answer: "Friendly Competition (Paint Misbehavin', Suger Rush, etc) - Mario Party 8",
          },
          {
            url: "https://soundcloud.com/moonboy_65/dk-jungle",
            answer: "DK Jungle - Donkey Kong Barrel Blast",
          },
          {
            url: "https://soundcloud.com/moonboy_65/cosmic-highway",
            answer: "Cosmic Highway - Donkey Kong Barrel Blast",
          },
          {
            url: "https://soundcloud.com/moonboy_65/mt-dynamite",
            answer: "Mt. Dynamite - Donkey Kong Barrel Blast",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/sun-sun-beach-dk-jungle-climber",
            answer: "Sun Sun Beach - DK: Jungle Climber",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/cliffy-peak-dk-jungle-climber",
            answer: "Cliffy Peak - DK: Jungle Climber",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/wistful-lake-dk-jungle-climber",
            answer: "Wistful Lake - DK: Jungle Climber",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/candys-theme-dk-jungle-climber",
            answer: "Candy's Theme - DK: Jungle Climber",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/overture-super-mario-galaxy",
            answer: "Title Screen - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/star-festival-super-mario-galaxy",
            answer: "The Star Festival (Grand Finale Galaxy) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/enter-the-galaxy-super-mario-galaxy",
            answer: "Enter The Galaxy (Gateway Galaxy) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/egg-planet-super-mario-galaxy",
            answer: "Egg Planet (Good Egg Galaxy) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/honeyhive-galaxy-super-mario-galaxy",
            answer: "Honeyhive Galaxy/Gold Leaf Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/space-junk-road-super-mario-galaxy",
            answer: "Space Junk Road - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/battlerock-galaxy-super-mario-galaxy",
            answer: "Battlerock Galaxy/Dreadnought Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/beach-bowl-galaxy-super-mario-galaxy",
            answer: "Beach Bowl Galaxy/Sea Slide Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/enter-bowser-jr-super-mario-galaxy",
            answer: "Enter Bowser Jr.! - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/waltz-of-the-boos-super-mario-galaxy",
            answer: "Waltz Of The Boos (Ghostly Galaxy) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/buoy-base-galaxy-super-mario-galaxy",
            answer: "Buoy Base Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/gusty-garden-galaxy-super-mario-galaxy",
            answer: "Gusty Garden Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/rosalina-in-the-observatory-3-super-mario-galaxy",
            answer: "Rosalina In The Observatory - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/king-bowser-super-mario-galaxy",
            answer: "King Bowser - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/melty-molten-galaxy-super-mario-galaxy",
            answer: "Melty Molten Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/the-galaxy-reactor-super-mario-galaxy",
            answer: "The Galaxy Reactor - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/final-battle-with-bowser-super-mario-galaxy",
            answer: "Final Battle With Bowser - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/super-mario-galaxy",
            answer: "Staff Roll - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/purple-comet-super-mario-galaxy",
            answer: "Purple Comet - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/blue-sky-athletic-super-mario-galaxy",
            answer: "Blue Sky Athletic (Sweet Sweet Galaxy) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/super-mario-2007-super-mario-galaxy",
            answer: "Super Mario 2007 (Toy Time Galaxy) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/file-select-super-mario-galaxy",
            answer: "File Select - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/luma-super-mario-galaxy",
            answer: "Luma - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/dino-piranha-super-mario-galaxy",
            answer: "Dino Piranha - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/king-kaliente-super-mario-galaxy",
            answer: "King Kaliente - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/airship-armada-super-mario-galaxy",
            answer: "Airship Armada (Super Mario Bros. 3 ~ Airship) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/user-505744085/space-fantasy-super-mario",
            answer: "Space Fantasy (Bubble Breeze Galaxy/Bubble Blast Galaxy)  - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/to-the-gateway-super-mario-galaxy",
            answer: "Gateway Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/mlg-troll/megaleg",
            answer: "Megaleg - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/zoren-kohler/the-fiery-stronghold",
            answer: "The Fiery Stronghold - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/zoren-kohler/star-ball",
            answer: "Star Ball - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/the-library-super-mario-galaxy",
            answer: "The Library - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/chase-the-bunnies-super-mario-galaxy",
            answer: "Chase The Bunnies! - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/mlg-troll/major-burrows",
            answer: "Major Burrows - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/user-505744085/shadow-comet-super-mario",
            answer: "Cosmic Clone - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/mlg-troll/drip-drop-galaxy",
            answer: "Drip Drop Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/that-guy-in-the-bushes/super-mario-galaxy-kingfin-critical-mix",
            answer: "Kingfin - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/yeswekyaxo3v/freezeflame-galaxy-ice-super-mario-galaxy",
            answer: "Ice Mountain (Freezeflame Galaxy) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/yeswekyaxo3v/freezeflame-galaxy-fire-super-mario-galaxy",
            answer: "Lava Path (Freezeflame Galaxy) - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/user-84280809/dusty-dune-galaxy-super-mario-galaxy-ost",
            answer: "Dusty Dune Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/zoren-kohler/heavy-metal-mecha-bowser",
            answer: "Heavy Metal Mecha-Bowser - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/user-505744085/deep-dark-galaxy-super-mario",
            answer: "Deep Dark Galaxy/Bigmouth Galaxy - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/sad-girl-super-mario-galaxy",
            answer: "Sad Girl - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/dylan-dylan-298845181/family-super-mario-galaxy",
            answer: "Family - Super Mario Galaxy",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/bouncing-around-mario-party-ds",
            answer: "Title Screen - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/grainy-119659091/mario-party-ds-wigglers-garden",
            answer: "Wiggler's Garden - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/user-899847325/toadettes-music-room-mario-party-ds",
            answer: "Toadette's Music Room - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/weegee85-emeraldsans3/dks-stone-statue-mario-party",
            answer: "DK's Stone Statue - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/dylan-green-230530869/kameks-libary-1",
            answer: "Kamek's Library - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/into-the-fairy-tale-mario",
            answer: "Into The Fairy Tale (Book It!, Soap Surfers, etc) - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/fresh-as-mint-mario-party-ds",
            answer: "Fresh As Mint (Hanger Management, Rail Riders, etc) - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/bouncing-around-mario-party-ds",
            answer: "Bouncing Around (Dust Buddies, Globe Gunners, etc) - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/i-earrape-for-fun/mario-party-ds-ost-contemplation",
            answer: "Contemplation (Dress For Success, Trace Cadets) - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/another-crazy-match-mario",
            answer: "Another Crazy Match (Fast Food Frenzy, Track Star, etc) - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/weegee85-emeraldsans3/thanks-a-lot-credits-mario",
            answer: "Staff Roll - Mario Party DS",
          },
          {
            url: "https://soundcloud.com/faded_boo/main-menu-6",
            answer: "Main Menu - Mario & Sonic At The Olympic Games (2007)",
          },
          {
            url: "https://soundcloud.com/faded_boo/athletics-100m",
            answer: "Athletics: 100m - Mario & Sonic At The Olympic Games (2007)",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/007-ground-theme-super-mario",
            answer: "Mushroomy Kingdom (Ground) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/015-underground-theme-super",
            answer: "Mushroomy Kingdom (Underground) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/032-underground-theme-super",
            answer: "Underground Theme (Super Mario Land) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/029-airship-theme-super-1",
            answer: "Airship Theme (Super Mario Bros. 3) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/033-title-ending-super-mario",
            answer: "Title/Ending (Super Mario World) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/036-castle-boss-fortress-super",
            answer: "Castle/Fortress Boss (Super Mario World/Super Mario Bros. 3) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/045-main-theme-new-super-mario",
            answer: "Main Theme (New Super Mario Bros.) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/078-gritzy-desert",
            answer: "Gritzy Desert (Mario & Luigi: Partners In Time) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/supersmashbrosforwiiu/mario-bros-medley-super-smash-bros-wii-u",
            answer: "Mario Bros. Medley - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/094-mario-tennis-mario-golf",
            answer: "Mario Golf ~ Mario Tennis - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-nintendo/022-title-theme-3d-hot-rally",
            answer: "Title (Famicom Grand Prix II: 3D Hot Rally) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-286118343/01-mario-circuit-super-mario",
            answer: "Mario Circuit (Super Mario Kart) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-286118343/02-luigi-raceway-mario-kart-64",
            answer: "Luigi Raceway (Mario Kart 64) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-286118343/04-waluigi-pinball-mario-kart",
            answer: "Waluigi Pinball (Mario Kart DS) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/102-main-theme-luigis-mansion",
            answer: "Luigi's Mansion Theme - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/01-opening-donkey-kong",
            answer: "Opening: Donkey Kong - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/05-25m-theme",
            answer: "Donkey Kong (25m) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/24-king-k-rool-ship-deck-2",
            answer: "King K. Rool ~ Ship Deck 2 (Donkey Kong Country) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/25-stickerbush-symphony",
            answer: "Stickerbush Symphony (Donkey Kong Country 2) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/04-obstacle-course-yoshis",
            answer: "Athletic (Yoshi's Island) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/10-flower-field",
            answer: "Flower Field (Yoshi Touch & Go) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/11-wildlands",
            answer: "Wildlands (Yoshi's Island DS) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/09-yoshis-tale",
            answer: "Ending (Yoshi's Story) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-wario/warioware-inc",
            answer: "WarioWare, Inc. - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-wario/warioware-inc-medley",
            answer: "WarioWare, Inc. Medley - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-wario/ashleys-song",
            answer: "Ashley's Song (WarioWare: Touched!) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-wario/mona-pizzas-song",
            answer: "Mona Pizza's Song (WarioWare: Twisted!) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-wario/mikes-song",
            answer: "Mike's Song (WarioWare: Touched!) - Super Smash Bros. Brawl",
          },
          {
            url: "https://soundcloud.com/dunnno/opening-movie",
            answer: "Opening - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-title",
            answer: "Title Screen - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/main-menu",
            answer: "Main Menu - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-mario-circuit-luigi-circuit",
            answer: "Luigi Circuit/Mario Circuit - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-moo-moo-meadows",
            answer: "Moo Moo Meadows - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-mushroom-gorge",
            answer: "Mushroom Gorge - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-toads-factory",
            answer: "Toad's Factory - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-coconut-mall",
            answer: "Coconut Mall - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-dks-snowboard-cross-dk-summit",
            answer: "DK Summit/DK's Snowboard Cross - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-warios-gold-mine",
            answer: "Wario's Gold Mine - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-daisy-circuit",
            answer: "Daisy Circuit - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-koopa-cape",
            answer: "Koopa Cape - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-maple-treeway",
            answer: "Maple Treeway - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-grumble-volcano",
            answer: "Grumble Volcano - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-dry-dry-ruins",
            answer: "Dry Dry Ruins - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-moonview-highway",
            answer: "Moonview Highway - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-bowsers-castle",
            answer: "Bowser's Castle - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-rainbow-road",
            answer: "Rainbow Road - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/staff-credits-1",
            answer: "Staff Roll Pt.1 - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/staff-credits-2",
            answer: "Staff Roll Pt.2 - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-block-plaza",
            answer: "Block Plaza - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-delfino-pier",
            answer: "Delfino Pier - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-funky-stadium",
            answer: "Funky Stadium - Mario Kart Wii", 
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-chain-chomp-roulette",
            answer: "Chain Chomp Wheel/Chain Chomp Roulette - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-thwomp-desert",
            answer: "Thwomp Desert - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-gba-shy-guy-beach",
            answer: "GBA Shy Guy Beach - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-ds-delfino-square",
            answer: "DS Delfino Square - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-gba-battle-course-3",
            answer: "GBA Battle Course 3 - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/user-272592510/mario-kart-wii-ds-twilight-house",
            answer: "DS Twilight House - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/losing-results",
            answer: "Losing Results - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/winning-results",
            answer: "Winning Results - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/wi-fi-waiting-room",
            answer: "Spectating - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/nintendo-wfc",
            answer: "WiFi Menu - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/galaxy-arena",
            answer: "Galaxy Colosseum/Galaxy Arena - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/options",
            answer: "Options - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/dunnno/mario-kart-channel-music",
            answer: "Mario Kart Channel - Mario Kart Wii",
          },
          {
            url: "https://soundcloud.com/beep-blox/daytime-select-mario-super-sluggers",
            answer: "Main Menu - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/beep-blox/character-select-mario-super-sluggers",
            answer: "Character Select - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/beep-blox/mario-stadium-mario-super-sluggers",
            answer: "Mario Stadium - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/beep-blox/yoshi-park-mario-super-sluggers",
            answer: "Yoshi Park - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/silver-friends/daisy-cruiser-mario-super",
            answer: "Daisy Cruiser - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/user-234779749/mario-super-sluggers-bowsers-castle-stadium",
            answer: "Bowser Castle - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/map-yoshi-park-mario-super-sluggers",
            answer: "Map: Yoshi Park - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/beep-blox/replay-mario-super-sluggers",
            answer: "Instant Replay - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/not-bonnie/mario-super-sluggers-ost-credits",
            answer: "Staff Roll - Mario Super Sluggers",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/title-screen",
            answer: "Title Screen - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/syrups-theme",
            answer: "Syrup's Theme - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/main-theme",
            answer: "Main Theme (Level Select) - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/stonecarving-city-launchpad",
            answer: "Stonecarving City/Launchpad Labyrinth - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/foulwater-falls-gurgle-gurch-1",
            answer: "Foulwater Falls/Gurgle Gurch - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/just-plains",
            answer: "Just Plains - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/mt-lava-lava",
            answer: "Mt. Lava Lava - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/stonetooth-cave-its-all-mine",
            answer: "Stonetooth Cave/Its All Mine (Escape) - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/glittertown-neon-city",
            answer: "Glittertown/Neon City (Wario World ~ Greenhorn Ruins) - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/airytale-castle-prism-prison",
            answer: "Airytale Castle/Prism Prison - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/mount-bighill-bamboozle",
            answer: "Mount Bighill/Bamboozle Village (Escape) - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/creep-blue-sea",
            answer: "Creep Blue Sea - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/slipshod-slopes-freezing-1",
            answer: "Slipshod Slopes/Freezing Fields - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/wario-land-shake-it/staff-roll",
            answer: "Staff Roll - Wario Land: Shake It!",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/to-a-new-adventure-mario-luigi",
            answer: "On To The Next Adventure! (Title Screen) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-378284065",
            answer: "File Select - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-714883294",
            answer: "It's Fawful! - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-511581192",
            answer: "Resting In Toad Town - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/have-a-nice-talk-mario-luigi-bowsers-inside-story",
            answer: "Persistant Joy - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-228587989",
            answer: "A Bit Of Peace And Quiet (Peach's Castle) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/oki-doki-mario-luigi-bowsers-inside-story",
            answer: "Here We Go! (Battle As Bros.) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-144673786",
            answer: "Showtime! (Battle As Bowser) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-316369436",
            answer: "Meet Me At Wonder Woods (Dimble Wood) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-272527888",
            answer: "The Path Of Secrets - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-inside",
            answer: "Bowser's Stolen Castle - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-124772941",
            answer: "A Gentle Breeze At Cavi Cape - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/beachside-dream-mario-luigi-bowsers-inside-story",
            answer: "Beachside Dreaming (Plack Beach) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-754031671",
            answer: "Beachside Dreaming (Inside Bowser) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/minigame-mario-luigi-bowsers-inside-story",
            answer: "Minigame - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/tough-guy-alert-mario-luigi-bowsers-inside-story",
            answer: "Tough Guy Alert! (Boss Battle) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/grasslands-all-the-way-mario-luigi-bowsers-inside-story",
            answer: "Forever In The Plains (Bumpsy Plains) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/grasslands-all-the-way-inside-bowser-mario-luigi-bowsers-inside-story",
            answer: "Forever In The Plains (Inside Bowser) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/waltz-in-the-lake-mario-luigi-bowsers-inside-story",
            answer: "Waltz In The Lake (Blubble Lake) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/deep-castle-mario-luigi-bowsers-inside-story",
            answer: "The Castle Depths - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/the-grand-finale-mario-luigi-bowsers-inside-story",
            answer: "The Grand Finale - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/charles-couckee-65363841/mario-luigi-bowsers-580878294",
            answer: "The Giant (Giant Battle) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/fawfulhasfury/traveling-about-on-a-journey-of-memories-mario-luigi-bowsers-inside-story",
            answer: "A Journey To Remember (Staff Roll) - Mario & Luigi: Bowser's Inside Story (DS)",
          },
          {
            url: "https://soundcloud.com/warioheardle/title-screen-warioware-diy",
            answer: "Title Screen - WarioWare D.I.Y.",
          },
          {
            url: "https://soundcloud.com/warioheardle/menu-warioware-diy",
            answer: "Main Menu - WarioWare D.I.Y.",
          },
          {
            url: "https://soundcloud.com/jakeypants-62297368/diy-shop-warioware-diy",
            answer: "D.I.Y. Shop - WarioWare D.I.Y.",
          },
          {
            url: "https://soundcloud.com/hotelmariolover/gettin-fit-and-funky",
            answer: "Body Rock - WarioWare D.I.Y.",
          },
          {
            url: "https://soundcloud.com/warioheardle/assembly-dojo-warioware-diy",
            answer: "Assembly Dojo - WarioWare D.I.Y.",
          },
          {
            url: "https://soundcloud.com/thebonezonedeluxe/graphics-editor-main-tools-warioware-diy",
            answer: "Graphics Creation - WarioWare D.I.Y.",
          },
          {
            url: "https://soundcloud.com/warioheardle/distribution-center-warioware-diy",
            answer: "Distribution Center - WarioWare D.I.Y.",
          },
          {
            url: "https://soundcloud.com/warioheardle/staff-roll-warioware-diy",
            answer: "Staff Roll - WarioWare D.I.Y.",
          },
          {
            url: "https://soundcloud.com/the-blj-elite/wario-man-super-store",
            answer: "Wario Man Super Store - WarioWare: D.I.Y. Showcase",
          },
          {
            url: "https://soundcloud.com/faded_boo/bobsleigh",
            answer: "Bobsleigh - Mario & Sonic At The Olympic Winter Games (Wii)",
          },
          {
            url: "https://soundcloud.com/faded_boo/curling",
            answer: "Curling - Mario & Sonic At The Olympic Winter Games (Wii)",
          },
          {
            url: "https://soundcloud.com/faded_boo/alpine-skiing-downhill",
            answer: "Alpine Skiing: Downhill - Mario & Sonic At The Olympic Winter Games (Wii)",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-figure-skating-ground-theme",
            answer: "Dream Figure Skating: (Ground Theme ~ Super Mario Bros.) - Mario & Sonic At The Olympic Winter Games (Wii)",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-snowball-fight-snow-mountain",
            answer: "Dream Snowball Fight: (Cool Cool Mountain ~ Super Mario 64) - Mario & Sonic At The Olympic Winter Games (Wii)",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-ice-hockey-bowsers-castle",
            answer: "Dream Ice Hockey: Bowser's Castle (Mario Kart: Super Circuit) - Mario & Sonic At The Olympic Winter Games (Wii)",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-ski-jumping-good-egg-galaxy",
            answer: "Dream Ski Jumping: (Good Egg Galaxy ~ Super Mario Galaxy) - Mario & Sonic At The Olympic Winter Games (Wii)",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-ski-cross-marioluigi-circuit",
            answer: "Dream Ski Cross: (Mario/Luigi Circuit ~ Mario Kart Wii) - Mario & Sonic At The Olympic Winter Games (Wii)",
          },
          {
            url: "https://soundcloud.com/faded_boo/adventure-tours-sparkletown",
            answer: "Adventure Tours: Sparkletown - Mario & Sonic At The Olympic Winter Games (DS)",
          },
          {
            url: "https://soundcloud.com/faded_boo/adventure-tours-boss",
            answer: "Adventure Tours: Boss - Mario & Sonic At The Olympic Winter Games (DS)",
          },
          {
            url: "https://soundcloud.com/vgmb/02-title-theme",
            answer: "Title Screen - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/vgmb/new-super-mario-bros-wii-main-menu",
            answer: "File Select - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-1-grass-land-new-super-mario-bros-wii",
            answer: "World 1 (Grass) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-2-desert-land-new-super-mario-bros-wii",
            answer: "World 2 (Desert) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-3-snow-land-new-super-mario-bros-wii",
            answer: "World 3 (Snow) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-4-beach-land-new-super-mario-bros-wii",
            answer: "World 4 (Beach) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-5-forest-land-new-super-mario-bros-wii",
            answer: "World 5 (Jungle) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-6-mountain-land-new-super-mario-bros-wii",
            answer: "World 6 (Mountain) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-7-sky-land-new-super-mario-bros-wii",
            answer: "World 7 (Sky) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-8-lava-land-new-super-mario-bros-wii",
            answer: "World 8 (Lava) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/new-super-mario-bros-wii-overworld",
            answer: "Ground - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/underground-theme-new-super-mario-bros-wii",
            answer: "Underground - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/megawoofy/581-bonus-stage-new-super-mario-bros-u-super-mario-maker-1-and-2-soundtrack",
            answer: "Bonus - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/underwater-theme-new-super-mario-bros-wii",
            answer: "Underwater - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/castle-theme-new-super-mario-bros-wii",
            answer: "Castle - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/desert-theme-new-super-mario-bros-wii",
            answer: "Desert - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/athletic-theme-new-super-mario-bros-wii",
            answer: "Athletic - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/snow-theme-new-super-mario-bros-wii",
            answer: "Snow - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/forest-theme-new-super-mario-bros-wii",
            answer: "Jungle - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/airship-theme-new-super-mario-bros-wii",
            answer: "Airship - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/tower-theme-new-super-mario-bros-wii",
            answer: "Tower - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/ghost-house-new-super-mario-bros-wii",
            answer: "Ghost House - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/beach-theme-new-super-mario-bros-wii",
            answer: "Beach - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/volcano-theme-new-super-mario-bros-wii",
            answer: "Volcano - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/volcano-underground-new-super-mario-bros-wii",
            answer: "Volcano Underground - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/final-bowser-new-super-mario-bros-wii",
            answer: "Final Bowser - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/staff-roll-new-super-mario-bros-wii",
            answer: "Staff Roll - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/spryzen-edits/world-9-rainbow-land-new-super-mario-bros-wii",
            answer: "World 9 (Space) - New Super Mario Bros. Wii",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/overture",
            answer: "Title Screen - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/sky-station-galaxy",
            answer: "Sky Station Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/yoshi-star-galaxy",
            answer: "Yoshi Star Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/world-1-2",
            answer: "World 1 & 2 - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/the-starship-sails",
            answer: "The Starship Sails - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/spin-dig-galaxy",
            answer: "Spin-Dig Galaxy/Boulder Bowl Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/digga-leg",
            answer: "Digga Leg - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/flip-swap-galaxy",
            answer: "Flip Swap Galaxy/Flip Out Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/gobblegut",
            answer: "Gobblegut - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/tip-network",
            answer: "Tip Network - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/mlg-troll/puzzle-plank-galaxy",
            answer: "Puzzle Plank Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/wild-glide-galaxy",
            answer: "Wild Glide Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/cosmic-cove",
            answer: "Cosmic Cove Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/hightail-falls-galaxy",
            answer: "Hightail Falls Galaxy (Super Mario World ~ Athletic) - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/honeybloom-galaxy",
            answer: "Honeybloom Galaxy/Honey Hop Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/world-3",
            answer: "World 3 - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/tall-trunk-galaxy",
            answer: "Tall Trunk Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/slider",
            answer: "Tall Trunk Galaxy: Slider (Super Mario 64) - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/freezy-flake-galaxy",
            answer: "Freezy Flake Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/pipe-room",
            answer: "Pipe Room - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/cloudy-court-galaxy",
            answer: "Fluffy Bluff Galaxy/Cloudy Court Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/megahammer",
            answer: "Megahammer - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/world-4",
            answer: "World 4 - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/flipsville-galaxy",
            answer: "Flipsville Galaxy/Chomp Works Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/glamdozer",
            answer: "Glamdozer - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/beat-block-galaxy",
            answer: "Beat Block Galaxy/Flash Black Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/starshine-beach-galaxy",
            answer: "Starshine Beach Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/world-5",
            answer: "World 5 - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/space-storm-galaxy",
            answer: "Space Storm Galaxy/Battle Belt Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/rightside-down-galaxy",
            answer: "Rightside Down Galaxy/Upside Dizzy Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/haunty-halls-galaxy",
            answer: "Haunty Halls Galaxy/Boo Moon Galaxy (Super Mario World ~ Ghost House) - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/slipsand-galaxy",
            answer: "Slipsand Galaxy/Clockwork Ruins Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/squizzard",
            answer: "Squizzard - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/bowser-jrs-fiery-flotilla",
            answer: "Bowser Jr's Fiery Flotilla - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/starship-mario-3",
            answer: "Starship Mario - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/world-6",
            answer: "World 6 - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/melty-monster-galaxy",
            answer: "Melty Monster Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/throwback-galaxy",
            answer: "Throwback Galaxy (Super Mario 64 ~ Bob Omb Battlefield) - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/sweet-mystery-galaxy",
            answer: "Sweet Mystery Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/fleet-glide-galaxy",
            answer: "Fleet Glide Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/slimy-spring-galaxy",
            answer: "Slimy Spring Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/boss-blitz-galaxy",
            answer: "Boss Blitz Galaxy - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/speed-run",
            answer: "Speed Run (Speedy Comet) - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/world-s",
            answer: "World S - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/bowsers-galaxy-generator",
            answer: "Bowser's Galaxy Generator - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/bowser-battle",
            answer: "Bowser Battle - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/fated-battle",
            answer: "Fated Battle - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/staff-credits",
            answer: "Staff Roll - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/vgsoundz2/green-star",
            answer: "Green Star - Super Mario Galaxy 2",
          },
          {
            url: "https://soundcloud.com/user-203973585/coaster-hills-stage-theme",
            answer: "Coaster Hills C (Super Mario Bros. 2 ~ Ground) - Mario vs. Donkey Kong: Mini-Land Mayhem!",
          },
          {
            url: "https://soundcloud.com/user-203973585/teatime-twirl-boss",
            answer: "Teatime Twirl Boss - Mario vs. Donkey Kong: Mini-Land Mayhem!",
          },
          {
            url: "https://soundcloud.com/user-203973585/cannon-cove-stage-theme",
            answer: "Cannon Cove C - Mario vs. Donkey Kong: Mini-Land Mayhem!",
          },
          {
            url: "https://soundcloud.com/user-203973585/super-skywheel-stage-theme",
            answer: "Super Skywheel B - Mario vs. Donkey Kong: Mini-Land Mayhem!",
          },
          {
            url: "https://soundcloud.com/brayden-mentzer-846297716/dkcr-ost-1-donkey-kong-country",
            answer: "Donkey Kong Returns (Title Screen) - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/brayden-mentzer-846297716/1-03-jungle-hijinx-dk-island",
            answer: "Jungle Hijinx (DK Island Swing) - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/user-428725335/donkey-kong-country-204402681",
            answer: "Beach Overworld (Simian Segue) - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/brayden-mentzer-846297716/2-02-poppin-planks-mp3",
            answer: "Lift Beach - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/brayden-mentzer-164130671/2-10-tidal-terror-northern",
            answer: "Storm Beach - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/brayden-mentzer-164130671/4-12-gear-getaway-mp3",
            answer: "Thrill! Gear Flight - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/user-428725335/donkey-kong-country-337643185",
            answer: "Lift Off Launch - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/brayden-mentzer-164130671/2-08-whale-waters-aquatic",
            answer: "Aquatic Ambiance Returns - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/diddy-kong-684985853/staff-roll-credits-concerto-returns-donkey-kong-country-returns-ost",
            answer: "Staff Roll - Donkey Kong Country Returns",
          },
          {
            url: "https://soundcloud.com/user-516585460/mario-sports-mix-main-menu",
            answer: "Main Menu - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/user-472304145/mario-sports-mix-mario-stadium",
            answer: "Mario Stadium - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/astralstatis/mario-sports-mix-peachs-castle",
            answer: "Peach's Castle - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/mario-heardle/luigis-mansion-mario-sports-mix",
            answer: "Luigi's Mansion - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/user-234779749/mario-sports-mix-western-junction",
            answer: "Western Junction - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/mike-snow420/mario-sports-mix-music-bowser-jr-boulevard",
            answer: "Bowser Jr. Boulevard - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/omega-64-401083588/mario-sports-mix-bowser-castle",
            answer: "Bowser's Castle - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/quentthequent/mario-sports-mix-music-waluigi-pinball",
            answer: "Waluigi Pinball - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/adrian-fernandez-842998753/feed-petey-2-mario-sports-mix",
            answer: "Feed Petey: Level 2 - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/olivia-origami-queen/bob-omb-dodge-level-2-mario-sports-mix-music-extended",
            answer: "Bob Omb Dodge: Level 2 - Mario Sports Mix",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/world-1",
            answer: "World 1 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/world-2",
            answer: "World 2 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/world-3",
            answer: "World 3 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/world-4",
            answer: "World 4 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/world-5",
            answer: "World 5 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/world-6",
            answer: "World 6 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/world-7",
            answer: "World 7 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/world-8",
            answer: "World 8 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/spring-freddy-940604966/special-world-1-super-mario-3d-land",
            answer: "Special World 1 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/special-world-5",
            answer: "Special World 5 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/marcovicp/special-world-8-super-mario-3d-land",
            answer: "Special World 8 - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/title",
            answer: "Title Screen - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/gangster-bendy/overworld-theme-super-mario-3d",
            answer: "Ground - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/rainbow-park",
            answer: "Rainbow Park - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/the-blj-elite/koopas-lava-castle",
            answer: "Koopa's Lava Castle (Worlds 1 & 5) - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/beach-overworld",
            answer: "Beach - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/beach-underwater",
            answer: "Underwater - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/christian-estevez-817287781/ghost-house-super-mario-3d",
            answer: "Ghost House - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/mad-doctor-vgm/desert-ruins",
            answer: "Desert Ruins - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/snowball-park",
            answer: "Snowball Park - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/beep-block-beat-three-in-a-row",
            answer: "Beep Block Beat (Three In A Row) - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/weegee85-emeraldsans3/clock-tower-super-mario-3d",
            answer: "Clock Tower - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/mad-doctor-vgm/bowsers-castle",
            answer: "Bowser's Castle (World 8) - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/spring-freddy-940604966/the-final-battle",
            answer: "The Final Battle - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/block-land",
            answer: "Block Land - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/kirbymassattackost/beep-block-beat-one-by-one",
            answer: "Beep Block Beat (One By One) - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/christian-estevez-817287781/staff-roll-super-mario-3d-land",
            answer: "Staff Roll - Super Mario 3D Land",
          },
          {
            url: "https://soundcloud.com/faded_boo/main-menu-867453822",
            answer: "Main Menu - Mario & Sonic at the London 2012 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/beach-volleyball",
            answer: "Beach Volleyball - Mario & Sonic at the London 2012 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/canoeing",
            answer: "Canoeing - Mario & Sonic at the London 2012 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-long-jump-yoshis-picture-book",
            answer: "Dream Long Jump: (Yoshi's Picture Book ~ Yoshi's Story) - Mario & Sonic at the London 2012 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-equestrian-moo-moo-meadows",
            answer: "Dream Equestrian: (Moo Moo Meadows ~ Mario Kart Wii) - Mario & Sonic at the London 2012 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-spacewalk-1-sky-station-galaxy",
            answer: "Dream Spacewalk: Sky Station Galaxy (Super Mario Galaxy 2) - Mario & Sonic at the London 2012 Olympic Games",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/chance-card-yoshis-island",
            answer: "Chance Card (Yoshi's Island ~ Athletic) - Fortune Street",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/peachs-castle",
            answer: "Peach's Castle (Super Mario RPG) - Fortune Street",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/super-mario-bros-ground-theme",
            answer: "Super Mario Bros. Theme - Fortune Street",
          },
          {
            url: "https://soundcloud.com/fortunestreetost/bowsers-castle",
            answer: "Bowser's Castle (New Super Mario Bros.) - Fortune Street",
          },
          {
            url: "https://soundcloud.com/5nintendo/title-screen",
            answer: "Title Screen - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/julianunderscore/main-menu-mario-kart-7-hd-remaster",
            answer: "Main Menu - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/toad-circuit-mario-circuit",
            answer: "Toad Circuit/Mario Circuit - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/daisy-hills",
            answer: "Daisy Hills - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/cheep-cheep-cape",
            answer: "Cheep Cheep Lagoon/Cheep Cheep Cape - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/shy-guy-bazaar",
            answer: "Shy Guy Bazaar - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/wuhu-loop-maka-wuhu",
            answer: "Wuhu Loop/Maka Wuhu - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/music-park",
            answer: "Music Park/Melody Motorway - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/rock-rock-mountain",
            answer: "Rock Rock Mountain/Alpine Pass - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/piranha-plant-pipeway-1",
            answer: "Piranha Plant Slide/Piranha Plant Pipeway - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/wario-shipyard",
            answer: "Wario's Shipyard/Wario's Galleon - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/neo-bowser-city",
            answer: "Neo Bowser City/Koopa City - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/dk-jungle",
            answer: "DK Jungle - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/rosalinas-ice-world",
            answer: "Rosalina's Ice World - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/bowsers-castle",
            answer: "Bowser's Castle - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/rainbow-road",
            answer: "Rainbow Road - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/snes-rainbow-road",
            answer: "SNES Rainbow Road - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/spectator-race",
            answer: "Spectating - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/wi-fi-menu",
            answer: "WiFi Menu - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/5nintendo/staff-roll",
            answer: "Staff Roll - Mario Kart 7",
          },
          {
            url: "https://soundcloud.com/nintendorewind/main-theme-mario-party-9",
            answer: "Title Screen - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/noksbella/mario-party-9-wii-menu-theme",
            answer: "Menu - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/nintendorewind/toad-road-mario-party-9",
            answer: "Toad Road - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/octoling-girl/blooper-beach-mario-party-9",
            answer: "Blooper Beach - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/thegreatnepyrus/mario-party-9-ost-magma-mine",
            answer: "Magma Mine - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/user358182663/mario-party-9-music-bowser-jr-s-mad",
            answer: "Bowser Jr's Mad! - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/user-804117528-162877200/pandemonium-mario-party-9-super-smash-bros-ultimate",
            answer: "Pandemonium (Flinger Painting, Hazard Hold, etc) - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/nintendorewind/fluff-mario-party-9",
            answer: "Fluff (Buddy Bounce, Bumper Bubbles) - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/island-activities-mario-party-9",
            answer: "Island Activities (Pianta Pool, Pier Pressure, etc) - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/kooper-12238687/dont-freeze-mario-party-9",
            answer: "Don't Freeze (Polar Extreme, Mob Sleds, etc) - Mario Party 9",
          },
          {
            url: "https://soundcloud.com/mario-heardle/mario-stadium-mario-tennis-open",
            answer: "Mario Stadium - Mario Tennis Open",
          },
          {
            url: "https://soundcloud.com/mario-heardle/wario-dunes-mario-tennis-open",
            answer: "Wario Dunes - Mario Tennis Open",
          },
          {
            url: "https://soundcloud.com/mario-heardle/penguin-iceberg-mario-tennis-open",
            answer: "Penguin Iceberg - Mario Tennis Open",
          },
          {
            url: "https://soundcloud.com/mario-heardle/galaxy-arena-mario-tennis-open",
            answer: "Galaxy Arena - Mario Tennis Open",
          },
          {
            url: "https://soundcloud.com/whatlosermusic/title-screen",
            answer: "Title Screen - New Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/whatlosermusic/ground",
            answer: "Ground - New Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/whatlosermusic/athletic-leaf-beat",
            answer: "Athletic (Leaf Beat) - New Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/whatlosermusic/world-mushroom",
            answer: "World Mushroom - New Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/mario-heardle/world-flower-new-super-mario-bros-2",
            answer: "World Flower - New Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/whatlosermusic/world-star",
            answer: "World Star - New Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/whatlosermusic/coin-rush-dlc-shop",
            answer: "Coin Rush DLC Shop - New Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/whatlosermusic/staff-credits",
            answer: "Staff Roll - New Super Mario Bros. 2",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/paper-mario-sticker-star-paper",
            answer: "Title Screen - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/blue-skies-white-clouds-paper",
            answer: "Blue Skies, White Clouds - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/sticker-battle-paper-mario",
            answer: "Sticker Battle - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/underground-cave-connection",
            answer: "Underground Cave Connection - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/malevolent-magikoopa-kamek",
            answer: "Malevolent Magikoopa, Kamek Battle - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/wigglers-sleepy-time-paper",
            answer: "Wiggler's Sleepy Time - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/snifit-or-whiffit-paper-mario",
            answer: "Snifit Or Whiffit! - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/the-lush-forest-paper-mario",
            answer: "The Lush Forest - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/snow-rise-paper-mario-sticker",
            answer: "Snow Rise - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/give-me-a-lift-paper-mario",
            answer: "Give Me A Lift - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papermariofangirl/boo-night-fever-paper-mario",
            answer: "Boo Night Fever - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papergirl2/battleship-paper-mario-sticker",
            answer: "Battleship (Super Mario Bros. 3 ~ Airship) - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papergirl2/spectacular-finale-paper-mario",
            answer: "Spectacular Finale - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/papergirl2/staff-roll-ending-credits",
            answer: "Staff Roll - Paper Mario: Sticker Star",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/start-up-screen",
            answer: "Start Up Screen - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/title-screen",
            answer: "Title Screen - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/menu",
            answer: "Main Menu - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/world-1-acorn-plains",
            answer: "Acorn Plains (World 1) - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/world-4-frosted-glacier",
            answer: "Frosted Glacier (World 4) - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/world-5-soda-jungle-deep",
            answer: "Soda Jungle ~ Deep Jungle (World 5) - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/world-6-rock-candy-mines",
            answer: "Rock Candy Mines (World 6) - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/world-7-meringue-clouds",
            answer: "Meringue Clouds (World 7) - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/world-8-peachs-castle",
            answer: "Peach's Castle (World 8) - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/world-9-superstar-road",
            answer: "Superstar Road (World 9) - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/acorn-plains-overworld",
            answer: "Ground - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/athletic",
            answer: "Athletic - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/frosted-glacier-overworld",
            answer: "Snow - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/user-107491243-28699163/credits",
            answer: "Staff Roll - New Super Mario Bros. U",
          },
          {
            url: "https://soundcloud.com/male_07u/title-screen-luigis-mansion",
            answer: "Title Screen - Luigi's Mansion: Dark Moon",
          },
          {
            url: "https://soundcloud.com/hax-766019189/luigis-mansion-dark-moon-gloomy-manor",
            answer: "Gloomy Manor - Luigi's Mansion: Dark Moon",
          },
          {
            url: "https://soundcloud.com/hax-766019189/luigis-mansion-dark-moon-evershade-valley",
            answer: "Evershade Valley - Luigi's Mansion: Dark Moon",
          },
          {
            url: "https://soundcloud.com/hax-766019189/luigis-mansion-dark-moon-haunted-towers",
            answer: "Haunted Towers - Luigi's Mansion: Dark Moon",
          },
          {
            url: "https://soundcloud.com/hax-766019189/luigis-mansion-dark-moon-old-clockworks",
            answer: "Old Clockworks - Luigi's Mansion: Dark Moon",
          },
          {
            url: "https://soundcloud.com/diego-jorquera-3/luigis-mansion-dark-moon",
            answer: "Duel Scream Ringtone - Luigi's Mansion: Dark Moon",
          },
          {
            url: "https://soundcloud.com/hax-766019189/luigis-mansion-dark-moon-scarescraper",
            answer: "ScareScraper - Luigi's Mansion: Dark Moon",
          },
          {
            url: "https://soundcloud.com/hipersuperluigi/luigis-mansion-dark-moon",
            answer: "Staff Roll - Luigi's Mansion: Dark Moon",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/patchwork",
            answer: "Patchwork - Game & Wario",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/mom-appears-gamer",
            answer: "Mom Appears! (Gamer) - Game & Wario",
          },
          {
            url: "https://soundcloud.com/saxophones/game-wario-ost-ashleys-revolution",
            answer: "Ashley (Stage 1) - Game & Wario",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/sketch",
            answer: "Sketch - Game & Wario",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/fruit",
            answer: "Fruit - Game & Wario",
          },
          {
            url: "https://soundcloud.com/the-bruhboy/19-your-dream-adventure-mario",
            answer: "Your Dream Adventure! (Title Screen) - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/user-317881134/02-travel-journal",
            answer: "Travel Journal (File Select) - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/user-317881134/04-panic-pit",
            answer: "Panic Pit - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/lazy-j-891995525/comedic-curtains",
            answer: "Comedic Curtains - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/07-nightmare-lullaby",
            answer: "Nightmare Lullaby - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/09-bowsers-theme",
            answer: "Bowser's Theme - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/flavio514/mario-luigi-dream-team",
            answer: "Antasma's Theme - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/14-challenging-actions",
            answer: "Challenging Actions! - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/19-break-at-piillo-castle",
            answer: "Break At Pi'illo Castle - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/user-802838595/breezy-mushrise-park",
            answer: "Breezy Mushrise Park - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/22-dozing-sands-secret",
            answer: "Dozing Sands Secret - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/frigidscholar/shopping-in-wakeport-mario-luigi-dream-team-music",
            answer: "Shopping In Wakeport - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/frigidscholar/lofty-mount-pajamaja-mario-luigi-dream-team",
            answer: "Lofty Mount Pajamaja - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/26-sunny-driftwood-shore",
            answer: "Sunny Driftwood Shore - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/flavio514/mario-amp-luigi-dream-team-1",
            answer: "Sacred Somnom Woods - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/29-neo-bowser-castle",
            answer: "Neo Bowser Castle - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/32-dreamy-castle-rendezvous",
            answer: "Dreamy Castle Rendezvous - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/37-rules-on-dreamy-mountain",
            answer: "Rules On Dreamy Mountain - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/43-try-try-again",
            answer: "Try, Try Again (Battle) - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/cole-h-942086636/44-victory-in-the-dream-world",
            answer: "Victory In The Dream World (Dream Battle) - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/preixell-gaming/mario-luigi-dream-team-never-let-up",
            answer: "Never Let Up! (Boss Battle) - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/konanoki/size-up-your-enemy-mario-luigi-dream-team-music",
            answer: "Size Up Your Enemy (Giant Battle) - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/flavio514/mario-amp-luigi-dream-team-2",
            answer: "The Final Antasma Battle - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/frigidscholar/adventures-end",
            answer: "Adventure's End - Mario & Luigi: Dream Team",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/peachs-castle",
            answer: "Peach's Castle - Mario Kart Arcade GP DX",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/kingdom-way",
            answer: "Kingdom Way - Mario Kart Arcade GP DX",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/bon-dance-street",
            answer: "Bon Dance Street - Mario Kart Arcade GP DX",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/omatsuri-circuit",
            answer: "Omatsuri Circuit - Mario Kart Arcade GP DX",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/bowsers-factory",
            answer: "Bowser's Factory - Mario Kart Arcade GP DX",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/aerial-road",
            answer: "Aerial Road - Mario Kart Arcade GP DX",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/sky-arena",
            answer: "Sky Arena - Mario Kart Arcade GP DX",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/staff-roll-mario-kart-arcade",
            answer: "Staff Roll - Mario Kart Arcade GP DX",
          },
          {
            url: "https://soundcloud.com/faded_boo/snowboard-cross",
            answer: "Snowboard Cross - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/ice-hockey-2",
            answer: "Ice Hockey - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/main-theme-super-mario-bros-remix",
            answer: "Ground Theme (Super Mario Bros.) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/underwater-theme-super-mario-bros-remix",
            answer: "Underwater Theme (Super Mario Bros.) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/main-theme-super-mario-bros-3-remix",
            answer: "Ground Theme (Super Mario Bros. 3) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/figure-skating-pairs-main-theme-remix",
            answer: "Figure Skating Pairs (Birabuto Kingdom/Ending - Super Mario Land) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/credits-super-mario-64-remix",
            answer: "Staff Roll (Super Mario 64) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/snowball-scrimmage-sherbet-land",
            answer: "Snowball Scrimmage: (Sherbet Land - Mario Kart 64) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/snow-day-street-hockey-3-delfino-plaza",
            answer: "Snow Day Street Hockey: Delfino Plaza (Super Mario Sunshine) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/mario-circuit-mario-kart-double-dash-remix",
            answer: "Mario Circuit (Mario Kart: Double Dash!!) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/groove-pipe-snowboard-mushroom-bridge",
            answer: "Groove Pipe Snowboard: (Mushroom Bridge/City - Mario Kart: Double Dash!!) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/underwater-theme-new-super-mario-bros-remix",
            answer: "Underwater Theme (New Super Mario Bros.) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/buoy-base-galaxy-super-mario-galaxy-remix",
            answer: "Buoy Base Galaxy (Super Mario Galaxy) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/gusty-garden-galaxy-super-mario-galaxy-remix",
            answer: "Gusty Garden Galaxy (Super Mario Galaxy) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/daisy-circuit-mario-kart-wii-remix",
            answer: "Daisy Circuit (Mario Kart Wii) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/warios-gold-mine-mario-kart-wii-remix",
            answer: "Wario's Gold Mine (Mario Kart Wii) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/rainbow-road-mario-kart-wii-remix",
            answer: "Rainbow Road (Mario Kart Wii) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/main-theme-new-super-mario-bros-wii-remix",
            answer: "Snow Theme (New Super Mario Bros. Wii) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/puzzle-plank-super-mario-galaxy-2-remix",
            answer: "Puzzle Plank Galaxy (Super Mario Galaxy 2) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/bowsers-galaxy-generator-super-mario-galaxy-2-remix",
            answer: "Bowser's Galaxy Generator (Super Mario Galaxy 2) - Mario & Sonic at the Sochi 2014 Olympic Winter Games",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/title-super-mario-3d-word-2013",
            answer: "Title Screen - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-1-super-ario-3d-world-2013",
            answer: "World 1 (Grass) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-2-super-mario-3d-world-2013",
            answer: "World 2 (Desert) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-3-super-mario-3d-world-2013",
            answer: "World 3 (Snow) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-4-super-mario-3d-world-2013",
            answer: "World 4 (Canyon) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-5-super-mario-3d-world-2013",
            answer: "World 5 (Beach) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-6-super-mario-3d-world-2013",
            answer: "World 6 (Sky) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-castle-super-mario-3d-world-2013",
            answer: "World Castle - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-bowser-super-mario-3d-world-2013",
            answer: "World Bowser - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-star-super-mario-3d-world-2013",
            answer: "World Star - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/world-mushroom-flower-super-mario-3d-world-2013",
            answer: "World Mushroom/Flower - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/super-bell-hill-super-maio-3d-world-2013",
            answer: "Super Bell Hill - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/underground-cave-super-mario-3d-world-2013",
            answer: "Underground - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/switch-scramble-circus-super-mario-3d-world-2013",
            answer: "Switch Scramble Circus - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/inside-mystery-house-super-mario-3d-world-2013",
            answer: "Mystery House Entrance - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/shifty-boo-mansion-super-mario-3d-world-2013",
            answer: "Shifty Boo Mansion - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/the-adventures-of-captain-toad-super-mario-3d-world-2013",
            answer: "Captain Toad Goes Forth - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/athletic-super-mario-3d-world-2013",
            answer: "Chain Link Charge (Athletic) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/hisstocrat-super-mario-3d-world-2013",
            answer: "Hisstocrat - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/sprawling-savannah-super-mario-3d-world-2013",
            answer: "Sprawling Savannah - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/beep-block-skyway-super-mario-3d-world-2013",
            answer: "Beep Block Skyway - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/fuzzy-time-mine-super-mario-3d-world-2013",
            answer: "Fuzzy Time Mine - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/sprixies-theme-super-mario-3d-world-2013",
            answer: "Sprixie Princess Theme (Stamp House) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/fort-fire-bros-super-mario-3d-world-2013",
            answer: "Fort Fire Bros. - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/highway-showdown-super-mario-3d-world-2013",
            answer: "Bowser's Highway Showdown - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/double-cherry-pass-super-mario-3d-world-2013",
            answer: "Double Cherry Pass - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/footlight-lane-super-mario-3d-world-2013",
            answer: "Puffprod Peaks/Footlight Lane/Super Galaxy - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/the-bullet-bill-express-super-mario-3d-world-2013",
            answer: "The Bullet Bill Express - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/route-to-the-great-tower-super-mario-3d-world-2013",
            answer: "The Great Tower - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/battle-on-the-great-tower-2-super-mario-3d-world-2013",
            answer: "The Great Tower Showdown - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/staff-roll-super-mario-3d-world-2013",
            answer: "The Credits Roll (Staff Roll) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/conkdor-canyon-super-mario-3d-world-2013",
            answer: "Conkdor Canyon - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/mount-must-dash-super-mario-3d-world-2013",
            answer: "Mount Must Dash (Super Mario Kart ~ Mario Circuit) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/snowball-park-super-mario-3d-world-2013",
            answer: "Snowball Park - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/hands-on-hall-super-mario-3d-world-2013",
            answer: "Hands On Hall - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/captain-toad-plays-peek-a-boo-super-mario-3d-world-2013",
            answer: "Captain Toad Plays Peek-A-Boo - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/sunshine-seaside-above-water",
            answer: "Pipeline Lagoon/Sunshine Seaside (Above Water) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/sunshine-seaside-underwater",
            answer: "Pipeline Lagoon/Sunshine Seaside (Underwater) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/bowser-land-theme-super-mario-3d-world-2013",
            answer: "A Boss Approaches - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/the-bullet-bill-brigade-super-mario-3d-world-2013",
            answer: "Bowser's Bullet Bill Brigade - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/piranha-creeper-creek-super-mario-3d-world-2013",
            answer: "Piranha Creeper Creek - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/lucky-house-super-mario-3d-world-2013",
            answer: "Roulette House - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/lava-lake-super-mario-3d-world-2013",
            answer: "Simmering Lava Lake - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/bowsers-lava-lake-keep-super-mario-3d-world-2013",
            answer: "Bowser's Lava Lake Keep - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/plunging-falls-super-mario-3d-world-2013",
            answer: "Splash River (Super Mario 64 ~ Slider) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/motley-bossblob-super-mario-3d-world-2013",
            answer: "Motley Boss Blob - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/super-block-land-super-mario-3d-world-2013",
            answer: "Super Block Land (Super Mario 3D Land ~ Ground) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/captain-toads-fiery-finale-super-mario-3d-world-2013",
            answer: "Captain Toad's Fiery Finale - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/not-bowsers-fury/champions-road-super-mario-3d-world-2013",
            answer: "Champion's Road (Super Mario Galaxy ~ Gusty Garden Galaxy) - Super Mario 3D World",
          },
          {
            url: "https://soundcloud.com/tokaru-mizagone/mario-party-island-tourmain",
            answer: "Main Menu - Mario Party: Island Tour",
          },
          {
            url: "https://soundcloud.com/user-277857493/perilous-palace-path-mario",
            answer: "Perilous Palace Path - Mario Party: Island Tour",
          },
          {
            url: "https://soundcloud.com/user-277857493/rocket-road-mario-party-island",
            answer: "Rocket Road - Mario Party: Island Tour",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/dizzy-operation-l-dr-luigi",
            answer: "Dizzy - Dr. Luigi",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/drowsy-operation-l-dr-luigi",
            answer: "Drowsy - Dr. Luigi",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/tropical-freeze",
            answer: "Title Screen - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/mangrove-cove",
            answer: "Mangrove Cove - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/mangrove-cove-underwater",
            answer: "Mangrove Cove (Underwater) - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/trunk-twister",
            answer: "Trunk Twister - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/115s4cio/busted-bayou",
            answer: "Busted Bayou - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/115s4cio/big-top-bop-boss-pompy-the",
            answer: "Big Top Bop (World 1 Boss) - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/windmill-hills",
            answer: "Windmill Hills - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/mountain-mania",
            answer: "Mountain Mania - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/grassland-groove",
            answer: "Grassland Groove - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/scorch-n-torch",
            answer: "Scorch 'N' Torch - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/gerardomr8/donkey-kong-country-tropical-freeze-soundtrack-twilight-terror",
            answer: "Twilight Terror (Stickerbush Symphony Returns) - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/fruity-factory",
            answer: "Fruity Factory - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/jelly-jamboree",
            answer: "Jelly Jamboree - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/frosty-fruits-in-a-snow-bound",
            answer: "Frosty Fruits - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/seashore-war",
            answer: "Seashore War - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/115s4cio/credits",
            answer: "Staff Roll - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/donkey-kong-country-tropical-freeze-ost/secret-seclusion",
            answer: "Secret Seclusion (Donkey Kong Jr. Theme) - Donkey Kong Country: Tropical Freeze",
          },
          {
            url: "https://soundcloud.com/casey-george-8/the-yoshi-clan-yoshis-new-island-ost",
            answer: "Yoshi Clan - Yoshi's New Island",
          },
          {
            url: "https://soundcloud.com/vallieres/yoshis-new-island-ost-main-theme",
            answer: "Main Theme - Yoshi's New Island",  
          },
          {
            url: "https://soundcloud.com/romeo-lopez-734877597/underground-yoshis-new-island",
            answer: "Underground - Yoshi's New Island",
          },
          {
            url: "https://soundcloud.com/elliot-osagiede/bouncy-beanstalk-walk-yoshis-new-island-ost",
            answer: "Bouncy Beanstalk Walk - Yoshi's New Island",
          },
          {
            url: "https://soundcloud.com/romeo-lopez-734877597/bandit-valley-yoshis-new-island-ost",
            answer: "Bandit Valley - Yoshi's New Island",
          },
          {
            url: "https://soundcloud.com/mario-heardle/forest-course-mario-golf-world-tour",
            answer: "Forest Course - Mario Golf World Tour",
          },
          {
            url: "https://soundcloud.com/mario-heardle/sky-island-mario-golf-world-tour",
            answer: "Sky Island (Super Mario Bros. 3 ~ Athletic) - Mario Golf World Tour",
          },
          {
            url: "https://soundcloud.com/mario-heardle/peach-gardens-mario-golf-world-tour",
            answer: "Peach Gardens - Mario Golf World Tour",
          },
          {
            url: "https://soundcloud.com/mario-heardle/rock-candy-mines-mario-golf-world-tour",
            answer: "Rock-Candy Mines - Mario Golf World Tour",
          },
          {
            url: "https://soundcloud.com/megawoofy/start-screen-mario-kart-8",
            answer: "Title Screen - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/main-menu-mario-kart-8-deluxe",
            answer: "Selection Screen - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/mario-kart-stadium-mario-kart",
            answer: "Mario Kart Stadium - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/water-park-mario-kart-8-deluxe",
            answer: "Water Park - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/sweet-sweet-canyon-mario-kart",
            answer: "Sweet Sweet Canyon - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/thwomp-ruins-mario-kart-8-deluxe-ost",
            answer: "Thwomp Ruins - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/mario-circuit-mario-kart-8",
            answer: "Mario Circuit - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/toad-harbor-mario-kart-8",
            answer: "Toad Harbor - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/twisted-mansion-mario-kart-8",
            answer: "Twisted Mansion - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/shy-guy-falls-mario-kart-8",
            answer: "Shy Guy Falls - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/sunshine-airport-mario-kart-8",
            answer: "Sunshine Airport - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/dolphin-shoals-shallow-water",
            answer: "Dolphin Shoals (Underwater) - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/dolphin-shoals-mario-kart-8",
            answer: "Dolphin Shoals (On The Sea) - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/electrodrome-mario-kart-8",
            answer: "Electrodrome - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/user-602684896/mk8-mount-wario",
            answer: "Mount Wario - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/cloudtop-cruise-mario-kart-8",
            answer: "Cloudtop Cruise - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/bone-dry-dunes-mario-kart-8",
            answer: "Bone Dry Dunes - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/bowsers-castle-mario-kart-8",
            answer: "Bowser's Castle - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/rainbow-road-mario-kart-8",
            answer: "Rainbow Road - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-moo-moo-meadows-mario-kart",
            answer: "Wii Moo Moo Meadows - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/gba-mario-circuit-mario-kart-8",
            answer: "GBA Mario Circuit - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/ds-cheep-cheep-beach-mario",
            answer: "DS Cheep Cheep Beach - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/n64-toads-turnpike-mario-kart",
            answer: "N64 Toad's Turnpike - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/gcn-dry-dry-desert-mario-kart",
            answer: "GCN Dry Dry Desert - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/user-602684896/mk8-snes-donut-plains-3",
            answer: "SNES Donut Plains 3 - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/n64-royal-raceway-mario-kart-8",
            answer: "N64 Royal Raceway - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/3ds-dk-jungle-mario-kart-8",
            answer: "3DS DK Jungle - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/ds-wario-stadium-mario-kart-8",
            answer: "DS Wario Stadium - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/gcn-sherbet-land-mario-kart-8",
            answer: "GCN Sherbet Land - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/3ds-music-park-mario-kart-8",
            answer: "3DS Music Park/3DS Melody Motorway - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/n64-yoshi-valley-mario-kart-8",
            answer: "N64 Yoshi Valley - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/ds-tick-tock-clock-mario-kart",
            answer: "DS Tick Tock Clock - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/3ds-piranha-plant-slide-mario",
            answer: "3DS Piranha Plant Slide/3DS Piranha Plant Pipeway - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-grumble-volcano-mario-kart",
            answer: "Wii Grumble Volcano - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/n64-rainbow-road-mario-kart-8",
            answer: "N64 Rainbow Road - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/mario-kart-tv-mario-kart-8",
            answer: "Mario Kart TV - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/gcn-yoshi-circuit-mario-kart-8",
            answer: "GCN Yoshi Circuit - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/excitebike-arena-mario-kart-8",
            answer: "Excitebike Arena - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/dragon-driftway-mario-kart-8",
            answer: "Dragon Driftway - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/mute-city-mario-kart-8-deluxe",
            answer: "Mute City - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-warios-goldmine-mario-kart",
            answer: "Wii Wario's Gold Mine - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/snes-rainbow-road-mario-kart-8",
            answer: "SNES Rainbow Road - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/ice-ice-outpost-mario-kart-8",
            answer: "Ice Ice Outpost - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/hyrule-circuit-mario-kart-8",
            answer: "Hyrule Circuit - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/gcn-baby-park-mario-kart-8",
            answer: "GCN Baby Park - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/gba-cheese-land-mario-kart-8",
            answer: "GBA Cheese Land - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/wild-woods-mario-kart-8-deluxe",
            answer: "Wild Woods - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/animal-crossing-summer-mario",
            answer: "Animal Crossing (Summer) - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/animal-crossing-winter-mario",
            answer: "Animal Crossing (Winter) - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/3ds-neo-bowsers-city-mario",
            answer: "3DS Neo Bowser City/3DS Koopa City - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/gba-ribbon-road-mario-kart-8",
            answer: "GBA Ribbon Road - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/super-bell-subway-mario-kart-8",
            answer: "Super Bell Subway - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/big-blue-mario-kart-8-deluxe-ost",
            answer: "Big Blue - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/spectating-mario-kart-8-deluxe",
            answer: "Spectating - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/wi-fi-menu-mario-kart-8-deluxe",
            answer: "Selection Screen (Online) - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/megawoofy/credits-mario-kart-8-deluxe",
            answer: "Staff Roll - Mario Kart 8",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/035-super-mario-world-medley",
            answer: "Super Mario World Medley - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/037-fortress-boss-super-mario",
            answer: "Fortress Boss (Super Mario World) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/ssbu-ost/main-theme-super-mario-64-remix",
            answer: "Main Theme (Super Mario 64) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/049-rosalina-in-the",
            answer: "Rosalina In The Observatory / Luma (Super Mario Galaxy) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/047-egg-planet",
            answer: "Egg Planet (Good Egg Galaxy ~ Super Mario Galaxy) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/058-ground-theme-super-mario",
            answer: "Ground Theme (Super Mario 3D Land) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/085-try-try-again-mp3",
            answer: "Try, Try Again (Mario & Luigi: Dream Team) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/082-blue-skies-white-clouds",
            answer: "Blue Skies, White Clouds (Paper Mario: Sticker Star) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/083-rogueport",
            answer: "Rogueport (Paper Mario: The Thousand Year Door) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/066-title-theme-super-mario",
            answer: "Title Theme (Super Mario Maker) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-nintendo/012-wrecking-crew-medley-for-3ds-wii-u",
            answer: "Wrecking Crew Medley - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-686682564/110-mario-paint-medley",
            answer: "Mario Paint Medley - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-286118343/08-rainbow-road-medley",
            answer: "Rainbow Road Medley - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-286118343/06-circuit-mario-kart-7",
            answer: "Circuit (Mario Kart 7) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/103-luigis-mansion-series",
            answer: "Luigi's Mansion Series Medley - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/16-jungle-level-jazz-style-for",
            answer: "DK Island Swing (Donkey Kong Country) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/32-gear-getaway",
            answer: "Gear Getaway (Donkey Kong Country Returns) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/03-yoshis-island-for-3ds-wii-u",
            answer: "Flower Field / Opening Melody (Yoshi's Island) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/15-main-theme-yoshis-woolly",
            answer: "Main Theme (Yoshi's Woolly World) - Super Smash Bros. For 3DS/Wii U",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/captain-toad-treasure-tracker",
            answer: "Title Screen - Captain Toad: Treasure Tracker",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/captain-toad-marches-forth",
            answer: "Plucky Path Beginnings - Captain Toad: Treasure Tracker",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/underground-ambient",
            answer: "Underground - Captain Toad: Treasure Tracker",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/ruins-day-time",
            answer: "Ruins - Captain Toad: Treasure Tracker",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/piranha-creeper-dash-cave",
            answer: "Piranha Creeper Dash - Captain Toad: Treasure Tracker",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/spooky-specters-boo-mansion",
            answer: "Spinwheel Library - Captain Toad: Treasure Tracker",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/trick-track-hall-japanese-stage",
            answer: "Trick Track Hall - Captain Toad: Treasure Tracker",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy-2/universal-unary-unison-space",
            answer: "Universal Unary Unison (Space) - Captain Toad: Treasure Tracker",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/rolling-hills-a",
            answer: "Rolling Hills A - Mario vs. Donkey Kong: Tipping Stars",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/twilight-valley-a",
            answer: "Twilight Valley A - Mario vs. Donkey Kong: Tipping Stars",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong/orbiting-observatory-a",
            answer: "Orbiting Observatory A - Mario vs. Donkey Kong: Tipping Stars",
          },
          {
            url: "https://soundcloud.com/user647851845/party-preperations-mario-4",
            answer: "Main Menu - Mario Party 10",
          },
          {
            url: "https://soundcloud.com/user647851845/mushroom-park-theme-mario",
            answer: "Mushroom Park - Mario Party 10",
          },
          {
            url: "https://soundcloud.com/user647851845/whimsical-waters-theme-1-mario",
            answer: "Whimsical Waters - Mario Party 10",
          },
          {
            url: "https://soundcloud.com/user647851845/airship-central-theme-1-mario",
            answer: "Airship Central - Mario Party 10",
          },
          {
            url: "https://soundcloud.com/user647851845/bowsers-turn-mario-party-10",
            answer: "Bowser's Turn - Mario Party 10",
          },
          {
            url: "https://soundcloud.com/mario-heardle/amiibo-party-warios-theme-mario-party-10",
            answer: "amiibo Party: Wario (Stonecarving City ~ Wario Land: Shake It!) - Mario Party 10",
          },
          {
            url: "https://soundcloud.com/mario-heardle/swing-mario-party-10",
            answer: "Swing! (Rapid River Race) - Mario Party 10",
          },
          {
            url: "https://soundcloud.com/mario-heardle/exciting-and-exciting-mario-party-10",
            answer: "Exciting And Exciting (Foo Me Once, Goombrat Combat) - Mario Party 10",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/craft-island",
            answer: "Craft Island - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/yoshis-cookie-osts/title-1",
            answer: "Title Screen - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/yarn-yoshi-takes-shape",
            answer: "Yarn Yoshi Takes Shape! (Main Theme) - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/shy-but-deadly",
            answer: "Shy But Deadly - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/across-the-fluttering-dunes",
            answer: "Across The Fluttering Dunes - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/a-little-light-snowfall",
            answer: "A Little Light Snowfall - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/fluffin-puffin-babysitting",
            answer: "Fluffin' Puffin' Babysitting - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/knitty-knotty-windmill-hill",
            answer: "Knitty-Knotty Windmill - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/lava-scarves-and-red-hot",
            answer: "Lava Scarves & Red-Hot Blarggs - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/spooky-scraps-dont-get-spooked",
            answer: "Spooky Scraps! Don't Get Spooked! - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/fluffy-snow-here-we-go-1",
            answer: "Fluffy Snow, Here We Go! - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/frozen-solid-and-chilled",
            answer: "Frozen Solid And Chilled - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/up-shuttlethread-pass",
            answer: "Up Shuttlethread Pass - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/yoshi-and-cookies",
            answer: "Yoshi & Cookies - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/bounceabout-woods",
            answer: "Bounceabout Woods - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/special-course",
            answer: "Special Course - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/woolly-world-ost/staff-roll",
            answer: "Staff Roll - Yoshi's Woolly World",
          },
          {
            url: "https://soundcloud.com/cake-gamers/super-mario-maker-title-screen-theme-music",
            answer: "Title Screen - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/chiptune-human/super-mario-maker-2-editor-9",
            answer: "Ground [Super Mario Bros.] (Edit) - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/chiptune-human/super-mario-maker-2-editor-8",
            answer: "Underground [Super Mario Bros.] (Edit) - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/megawoofy/222-airship-theme-super-mario-bros-super-mario-maker-1-and-2-soundtrack",
            answer: "Airship [Super Mario Bros.] - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/megawoofy/217-ghost-house-theme-super-mario-bros-super-mario-maker-1-and-2-soundtrack",
            answer: "Ghost House [Super Mario Bros.] - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/megawoofy/317-ghost-house-theme-super-mario-bros-3-super-mario-maker-1-and-2-soundtrack",
            answer: "Ghost House [Super Mario Bros. 3] - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/chiptune-human/super-mario-maker-2-editor-ost-smw-ground-mix-by-vini64",
            answer: "Ground [Super Mario World] (Edit) - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/megawoofy/430-airship-theme-super-mario-world-super-mario-maker-1-and-2-soundtrack",
            answer: "Airship [Super Mario World] - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/chiptune-human/super-mario-maker-2-editor-ost-nsmbu-ground-mix-by-vini64",
            answer: "Ground [New Super Mario Bros. U] (Edit) - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/megawoofy/143-100-mario-challenge-normal-1-super-mario-maker-1-and-2-soundtrack",
            answer: "100 Mario Challenge (Super Mario Bros. 3 ~ Grass Land) - Super Mario Maker",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/01-start-of-the-adventure",
            answer: "Start Of The Adventure (Title Screen) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/13-whispered-secrets",
            answer: "Whispered Secrets (Peach's Theme) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/15-springtime-breeze",
            answer: "Springtime Breeze - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/16-uh-oh-sand-flow",
            answer: "Uh Oh, Sand Flow! (Doop Doop Dunes) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/17-epic-story",
            answer: "Epic Story (Twinsy Tropics) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/32-mixed-up-scramble",
            answer: "Mixed-Up Scramble (Battle) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/34-big-bang",
            answer: "Big Bang! (Boss Battle) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/40-attack-and-run",
            answer: "Attack And Run! (Papercraft Battle) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/19-forest-fairy-melody",
            answer: "Forest Fairy Melody (Gloomy Woods) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/20-mountaintop-secrets",
            answer: "Mountaintop Secrets (Mount Brrr) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/23-welcome-to-the-lakitu-info",
            answer: "Welcome To The Lakitu Info Center! - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/25-floating-castle-of-doom",
            answer: "Floating Castle Of Doom (Neo Bowser Castle) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/36-final-battle",
            answer: "Final Battle - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/silly-person-52110284/46-paper-parade",
            answer: "Paper Parade! (Staff Roll) - Mario & Luigi: Paper Jam",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/33-egg-launch-land-stage-theme",
            answer: "Egg Launch Land (Yoshi's Island ~ Flower Field) - Mini Mario & Friends: amiibo Challenge",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/53-moonlight-mansion-stage",
            answer: "Moonlight Mansion (Luigi's Mansion ~ Main Theme) - Mini Mario & Friends: amiibo Challenge",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/63-fire-ride-fortress-stage",
            answer: "Fire Ride Fortress (Super Mario 64 ~ Bowser's Theme) - Mini Mario & Friends: amiibo Challenge",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/68-gravity-galaxy-stage-theme",
            answer: "Gravity Galaxy (Super Mario Galaxy ~ Rosalina In The Observatory) - Mini Mario & Friends: amiibo Challenge",
          },
          {
            url: "https://soundcloud.com/faded_boo/football-1",
            answer: "Fútbol - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/equestrian-1",
            answer: "Equestrian - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/copacabana-beach",
            answer: "Copacabana Beach - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/rhythmic-hoop-super-mario-bros-main-theme",
            answer: "Rhythmic Hoop: Ground Theme (Super Mario Bros.) - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/rosalina-in-the-observatory-super-mario-galaxy",
            answer: "Rosalina In The Observatory (Super Mario Galaxy) - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/ground-theme-new-super-mario-bros-wii",
            answer: "Ground Theme (New Super Mario Bros. Wii) - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/final-bowser-new-super-mario-bros-wii",
            answer: "Final Bowser (New Super Mario Bros. Wii) - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/ground-theme-new-super-mario-bros-u",
            answer: "Ground Theme (New Super Mario Bros. U) - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/cheep-cheep-beach-mario-kart-ds",
            answer: "Cheep Cheep Beach (Mario Kart DS) - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/faded_boo/dk-island-swing-donkey-kong-country",
            answer: "DK Island Swing (Donkey Kong Country) - Mario & Sonic at the Rio 2016 Olympic Games",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/paper-mario-color-splash-paper-mario-color-splash-2016",
            answer: "Title Screen - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/card-battle-paper-mario-color-splash-2016",
            answer: "Card Battle - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/port-prisma-paper-mario-color-splash-2016",
            answer: "Port Prisma - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/ruddy-road-paper-mario-color-splash-2016",
            answer: "Ruddy Road - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/toad-cafe-paper-mario-color-splash-2016",
            answer: "Toad Cafe - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/cherry-lake-paper-mario-color-splash-2016",
            answer: "Cherry Lake - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/indigo-underground-paper-mario-color-splash-2016",
            answer: "Indigo Underground - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/bloo-bloo-beach-paper-mario-color-splash-2016",
            answer: "Bloo Bay Beach - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/blissful-beach-paper-mario-color-splash-2016",
            answer: "Blissful Beach - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/daffodil-peak-paper-mario-color-splash-2016",
            answer: "Daffodil Peak - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/sunglow-ridge-paper-mario-color-splash-2016",
            answer: "Sunglow Ridge - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/marmalade-valley-paper-mario-color-splash-2016",
            answer: "Marmalade Valley - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/plum-park-paper-mario-color-splash-2016",
            answer: "Plum Park - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirby-nep-adventure-rst1/the-violet-isles-paper-mario-color-splash-2016",
            answer: "The Violet Isles - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirb-nep-adventure-rst02/toad-trainworks-paper-mario-color-splash-2016",
            answer: "Toad Trainworks - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirb-nep-adventure-rst02/prisma-museum-paper-mario-color-splash-2016",
            answer: "Prisma Museum - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirb-nep-adventure-rst02/smb3-battle-paper-mario-color-splash-2016",
            answer: "SMB3 Battle - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirb-nep-adventure-rst02/rainbow-road-paper-mario-color-splash-2016",
            answer: "Rainbow Road - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/kirb-nep-adventure-rst02/staff-roll-paper-mario-color-splash-2016",
            answer: "Staff Roll - Paper Mario: Color Splash",
          },
          {
            url: "https://soundcloud.com/mario-heardle/star-rush-plaza-menu-mario-party-star-rush",
            answer: "Star Rush Plaza (Main Menu) - Mario Party: Star Rush",
          },
          {
            url: "https://soundcloud.com/mario-heardle/toad-scramble-world-1-mario-party-star-rush",
            answer: "Toad Scramble (World 1) - Mario Party: Star Rush",
          },
          {
            url: "https://soundcloud.com/mario-heardle/balloon-bash-mario-party-star-rush",
            answer: "Balloon Bash - Mario Party: Star Rush",
          },
          {
            url: "https://soundcloud.com/mario-heardle/boos-block-party-mario-party-star-rush",
            answer: "Boo's Block Party - Mario Party: Star Rush",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/ground?in=minimarioamiibo/sets/super-mario-run",
            answer: "Ground - Super Mario Run",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/underground?in=minimarioamiibo/sets/super-mario-run",
            answer: "Underground - Super Mario Run",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/remix-10?in=minimarioamiibo/sets/super-mario-run",
            answer: "Remix 10 - Super Mario Run",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/ground-coin-rush?in=minimarioamiibo/sets/super-mario-run",
            answer: "Ground (Coin Rush) - Super Mario Run",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/ghost-house-coin-rush?in=minimarioamiibo/sets/super-mario-run",
            answer: "Ghost House (Coin Rush) - Super Mario Run",
          },
          {
            url: "https://soundcloud.com/minimarioamiibo/menu-remix-10?in=minimarioamiibo/sets/super-mario-run",
            answer: "Remix 10 Menu - Super Mario Run",
          },
          {
            url: "https://soundcloud.com/megawoofy/wireless-play-mario-kart-8",
            answer: "Selection Screen (Wireless) - Mario Kart 8 Deluxe",
          },
          {
            url: "https://soundcloud.com/megawoofy/battle-stadium-mario-kart-8",
            answer: "Battle Stadium - Mario Kart 8 Deluxe",
          },
          {
            url: "https://soundcloud.com/megawoofy/lunar-colony-mario-kart-8",
            answer: "Lunar Colony - Mario Kart 8 Deluxe",
          },
          {
            url: "https://soundcloud.com/megawoofy/3ds-wuhu-town-mario-kart-8",
            answer: "3DS Wuhu Town - Mario Kart 8 Deluxe",
          },
          {
            url: "https://soundcloud.com/megawoofy/gcn-luigis-mansion-mario-kart",
            answer: "GCN Luigi's Mansion - Mario Kart 8 Deluxe",
          },
          {
            url: "https://soundcloud.com/megawoofy/snes-battle-course-1-mario-kart-8-deluxe-ost",
            answer: "SNES Battle Course 1 - Mario Kart 8 Deluxe",
          },
          {
            url: "https://soundcloud.com/megawoofy/urchin-underpass-mario-kart-8",
            answer: "Urchin Underpass (Splattack!) - Mario Kart 8 Deluxe",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/two-worlds-collide",
            answer: "Two Worlds Collide - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/sunny-side-up",
            answer: "Sunny Side Up - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/hoppers",
            answer: "Hoppers! - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/mid-boss-mayhem",
            answer: "Mid Boss Mayhem - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/a-song-of-ice-and-desert",
            answer: "A Song Of Ice And Desert - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/cold-start-hot-finish",
            answer: "Cold Start, Hot Finish - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/icicle-golem-finale",
            answer: "Icicle Golem Finale - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/a-stroll-in-the-cemetery",
            answer: "A Stroll In The Cemetary - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/the-phantom-of-the-bwahpera-1",
            answer: "The Phantom Of The Bwahpera, Act 1 - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/the-phantom-of-the-bwahpera",
            answer: "The Phantom Of The Bwahpera, Act 3 - Mario + Rabbids Kingdom Battle",
          },
          {
            url: "https://soundcloud.com/hax-766019189/mario-luigi-superstar-saga-bowsers-minions-a-new-adventure-begins",
            answer: "A New Adventure Begins (Title Screen) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/master-x173/lets-go-dx-mario-luigi",
            answer: "Let's Go! (Battle) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/snizz-lamont-yoshi-kid-3000/mario-luigi-superstar-saga-bowsers-minions-ost-come-on-again-boss-battle",
            answer: "We Can't Lose! (Boss Battle) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/user-270209865/mario-and-luigi-superstar-saga-bowsers-minions-rookie-and-popple",
            answer: "The Marvelous Duo - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/isaac-hammer/welcome-to-the-beanbean",
            answer: "The Kingdom Called Beanbean (Beanbean Fields) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/isaac-hammer/hoohoo-village",
            answer: "Beanish People (Hoohoo Village) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/cameron-peterson-221857133/oho-oasis-mario-luigi",
            answer: "Sweet Surfin' (Gwarhar Lagoon) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/isaac-hammer/teehee-valley",
            answer: "Don't Dwell On Danger (Tee Hee Valley) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/090-this-is-minion-turf",
            answer: "This Is Minion Turf! (Battle) (Bowser's Minions) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/isaac-hammer/the-end-of-traveling-staff",
            answer: "Going Home (Staff Roll) - Mario & Luigi: Superstar Saga + Bowser's Minions",
          },
          {
            url: "https://soundcloud.com/megawoofy/jump-up-super-star-super-mario-odyssey-soundtrack",
            answer: "Jump Up, Super Star! - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/bonneton-super-mario-odyssey",
            answer: "Bonneton (Cap Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/broodals-battle-super-mario",
            answer: "Battling The Broodals - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/fossil-falls-super-mario",
            answer: "Fossil Falls (Cascade Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/to-the-next-kingdom-5-super",
            answer: "To The Next Kingdom! (World Map) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/tostarena-ruins-super-mario",
            answer: "Tostarena Ruins (Sand Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/inside-the-inverted-pyramid-1",
            answer: "Inside The Inverted Pyramid - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/tostarena-town-super-mario",
            answer: "Tostarena Town (Sand Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/riding-a-jaxi-super-mario",
            answer: "Jaxi Joyride (Sand Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/steam-gardens-super-mario",
            answer: "Steam Gardens (Wooded Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/lake-lamode-super-mario",
            answer: "Lake Lamode (Lake Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/lake-lamode-underwater-passage",
            answer: "Lake Lamode: Underwater Passage - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/forgotten-isle-super-mario",
            answer: "Forgotten Isle (Lost Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/new-donk-city-super-mario",
            answer: "New Donk City (Metro Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/relax-by-the-pool-super-mario",
            answer: "Pausing By The Poolside (Super Mario World ~ Ground) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/band-performance-super-mario",
            answer: "The Band's All Here (Super Mario Bros. ~ Ground) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/bubblaine-super-mario-odyssey",
            answer: "Bubblaine (Seaside Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/bubblaine-underwater-super",
            answer: "Bubblaine: Underwater (Seaside Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/shiveria-town-super-mario",
            answer: "Shiveria Town (Snow Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/mount-volbono-super-mario",
            answer: "Mount Volbono (Luncheon Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/peronza-plaza-super-mario",
            answer: "Peronza Plaza (Luncheon Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/bowsers-castle-main-courtyard",
            answer: "Bowser's Castle (Bowser's Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/honeylune-ridge-super-mario",
            answer: "Honeylune Ridge (Moon Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/the-moons-underground-caves",
            answer: "Underground Moon Caverns (Moon Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/honeylune-ridge-collapse-super",
            answer: "Honeylune Ridge: Collapse (Moon Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/break-free-lead-the-way-super",
            answer: "Break Free (Lead The Way) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/credits-super-mario-odyssey",
            answer: "Staff Roll - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/inside-the-castle-walls-1",
            answer: "Peach's Castle (Mushroom Kingdom) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/run-jump-throw-1-super-mario",
            answer: "Run, Jump, Throw! 1 - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/run-jump-throw-2-super-mario",
            answer: "Run, Jump, Throw! 2 - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/cookatiel-battle-super-mario",
            answer: "Cooking Cookatiel - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/ruined-dragon-battle-super",
            answer: "Rebuffing The Ruined Dragon - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/bowser-battle-1-nimbus-arena",
            answer: "Battling Bowser (Nimbus Arena) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/top-hat-tower-super-mario",
            answer: "Top Hat Tower - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/ice-cave-super-mario-odyssey",
            answer: "Ice Caves - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/another-world-super-mario",
            answer: "Challenges In Another World - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/crazy-cap-super-mario-odyssey",
            answer: "Crazy Cap - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/bound-bowl-grand-prix-super",
            answer: "Race - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/megawoofy/rc-car-challenge-super-mario",
            answer: "RC Car Challenge (Super Mario Kart ~ Mario Circuit) - Super Mario Odyssey",
          },
          {
            url: "https://soundcloud.com/nintendorewind/main-menu-mario-party-the-top-100",
            answer: "Main Menu - Mario Party: The Top 100",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/mario-party-the-top-100-8",
            answer: "Everybody Party [Mario Party 5] (Dinger Derby, Coney Island, etc) - Mario Party: The Top 100",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/099-title-theme-mario-tennis",
            answer: "Title Screen - Mario Tennis Aces",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/100-stadium-theme-mario-tennis",
            answer: "Stadium Theme - Mario Tennis Aces",
          },
          {
            url: "https://soundcloud.com/megawoofy/midboss-melee-mario-rabbids",
            answer: "Midboss Melee - Mario + Rabbids Kingdom Battle: Donkey Kong Adventure",
          },
          {
            url: "https://soundcloud.com/megawoofy/dungeon-dispute-mario-rabbids",
            answer: "Dungeon Dispute - Mario + Rabbids Kingdom Battle: Donkey Kong Adventure",
          },
          {
            url: "https://soundcloud.com/warioheardle/menu-warioware-gold",
            answer: "Main Menu - WarioWare Gold",
          },
          {
            url: "https://soundcloud.com/alex-victoret/drifting-away",
            answer: "Drifting Away (Mega Microgame$!) - WarioWare Gold",
          },
          {
            url: "https://soundcloud.com/alex-victoret/body-rock",
            answer: "Body Rock (D.I.Y.) - WarioWare Gold",
          },
          {
            url: "https://soundcloud.com/jay-carranza-98135448/warioware-gold-ost-1-37-work",
            answer: "Work Those Muscles! (5-Volt Stage) - WarioWare Gold",
          },
          {
            url: "https://soundcloud.com/alex-victoret/18-x-13",
            answer: "18 x 13 - WarioWare Gold",
          },
          {
            url: "https://soundcloud.com/dogmii/wario-deluxe-final-stage-warioware-gold",
            answer: "Wario Deluxe (Final Stage) - WarioWare Gold",
          },
          {
            url: "https://soundcloud.com/nintendorewind/super-mario-party-main-theme",
            answer: "Main Theme - Super Mario Party",
          },
          {
            url: "https://soundcloud.com/neil-winters-753009113/super-mario-party-party-plaza",
            answer: "Party Plaza - Super Mario Party",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/super-mario-party-ost",
            answer: "Megafruit Paradise/Watermelon Walkabout - Super Mario Party",
          },
          {
            url: "https://soundcloud.com/user-277857493/kameks-tantalizing-tower-1-super-mario-party",
            answer: "Kamek's Tantalizing Tower/Tantalizing Tower Toys - Super Mario Party",
          },
          {
            url: "https://soundcloud.com/mario-heardle/around-and-around-smp",
            answer: "Around And Around (Sizzling Stakes, Tow The Line, etc) - Super Mario Party",
          },
          {
            url: "https://soundcloud.com/mario-heardle/pleasantly-happy-smp",
            answer: "Pleasantly Happy (Can Take Pancake, Go With The Flow) - Super Mario Party",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/019-ground-theme-super-mario",
            answer: "Ground Theme (Super Mario Bros. 2) - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/025-ground-theme-super-mario",
            answer: "Ground Theme (Super Mario Bros. 3) - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/031-king-bowser-super-mario",
            answer: "King Bowser (Super Mario Bros. 3) - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-900815746/042-delfino-plaza",
            answer: "Delfino Plaza (Super Mario Sunshine) - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-390758306/101-main-theme-luigis-mansion",
            answer: "Luigi's Mansion Theme - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-nintendo/wrecking-crew-medley",
            answer: "Wrecking Crew Medley - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/06-donkey-kong-donkey-kong-jr",
            answer: "Donkey Kong & Donkey Kong Jr. Medley - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/07-the-map-page-bonus-level",
            answer: "The Map Page / Bonus Level (Donkey Kong Country) - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-173456116/23-gang-plank-galleon",
            answer: "Gang Plank Galleon (Donkey Kong Country) - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/super-smash-bros-anthology-342578510/12-main-theme-yoshis-new",
            answer: "Main Theme (Yoshi's New Island) - Super Smash Bros. Ultimate",
          },
          {
            url: "https://soundcloud.com/laparkita28/to-a-new-adventure-dx-mario-and-luigi-bowsers-inside-story-bowser-jrs-journey-ost",
            answer: "Mario, Luigi, And Bowser Too! (Title Screen) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/laparkita28/okey-dokey-dx-mario-and-luigi-bowsers-inside-story-bowser-jrs-journey-ost",
            answer: "Here We Go! (Battle As Bros.) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/laparkita28/showtime-with-voice-dx-mario-and-luigi-bowsers-inside-story-bowser-jrs-journey-ost",
            answer: "Showtime! (Battle As Bowser) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/laparkita28/cavi-cape-dx-mario-and-luigi-bowsers-inside-story-bowser-jrs-journey-ost",
            answer: "A Gentle Breeze At Cavi Cape - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/laparkita28/tough-guy-alert-dx-mario-and-luigi-bowsers-inside-story-bowser-jrs-journey-ost",
            answer: "Tough Guy Alert! (Boss Battle) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/laparkita28/bumpsy-plains-dx-mario-and-luigi-bowsers-inside-story-bowser-jrs-journey-ost",
            answer: "Forever In The Plains (Bumpsy Plains) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/the-bruhboy/destroy-the-dark-power-dark",
            answer: "Destroy the Dark Power! - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/laparkita28/in-the-final-dx-mario-and-luigi-bowsers-inside-story-bowser-jrs-journey-ost",
            answer: "The Grand Finale - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/laparkita28/bowser-juniors-theme-bowser-jrs-journey-ost",
            answer: "Bowser Jr.'s Theme (Bowser Jr.'s Journey) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/laparkita28/battle-bowser-jrs-journey-ost",
            answer: "Battle! (Bowser Jr.'s Journey) - Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
          },
          {
            url: "https://soundcloud.com/user-618242250/new-super-mario-bros-u-deluxe",
            answer: "Staff Roll - New Super Mario Bros. U Deluxe",
          },
          {
            url: "https://soundcloud.com/user-863001080-627828770/main-theme-yoshis-crafted-world",
            answer: "Main Theme - Yoshi's Crafted World",
          },
          {
            url: "https://soundcloud.com/yoshiheardle/water-space-level-yoshis-crafted-world",
            answer: "Water/Space Level - Yoshi's Crafted World",
          },
          {
            url: "https://soundcloud.com/kirby-comix/special-area-yoshis-crafted",
            answer: "Hidden Hills - Yoshi's Crafted World",
          },
          {
            url: "https://soundcloud.com/megawoofy/1-01-title-theme-super-mario",
            answer: "Title Screen - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/233-desert-theme-super-mario-bros-super-mario-maker-1-and-2-soundtrack",
            answer: "Desert [Super Mario Bros.] - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/238-snow-theme-super-mario-bros-super-mario-maker-1-and-2-soundtrack",
            answer: "Snow [Super Mario Bros.] - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/243-forest-theme-super-mario-bros-super-mario-maker-1-and-2-soundtrack",
            answer: "Forest [Super Mario Bros.] - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/248-sky-theme-super-mario-bros-super-mario-maker-1-and-2-soundtrack",
            answer: "Sky [Super Mario Bros.] - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/334-snow-theme-super-mario-bros-3-super-mario-maker-1-and-2-soundtrack",
            answer: "Snow [Super Mario Bros. 3] - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/445-desert-theme-super-mario-world-super-mario-maker-1-and-2-soundtrack",
            answer: "Desert [Super Mario World] - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/452-snow-theme-super-mario-world-super-mario-maker-1-and-2-soundtrack",
            answer: "Snow [Super Mario World] - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/459-forest-theme-super-mario-world-super-mario-maker-1-and-2-soundtrack",
            answer: "Forest [Super Mario World] - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/138-yamamuras-dojo-super-mario-maker-1-and-2-soundtrack",
            answer: "Yamamura's Dojo - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/megawoofy/1-20-peachs-castle-5-super",
            answer: "Peach's Castle - Super Mario Maker 2",
          },
          {
            url: "https://soundcloud.com/mario-heardle/fever-dr-mario-world",
            answer: "Fever - Dr. Mario World",
          },
          {
            url: "https://soundcloud.com/javiniceday/mario-kart-tour-main-menu",
            answer: "Main Menu - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-new-york-minute",
            answer: "New York Minute - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-tokyo-blur",
            answer: "Tokyo Blur - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-paris-promenade",
            answer: "Paris Promenade - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-london-loop",
            answer: "London Loop - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-vancouver-velocity",
            answer: "Vancouver Velocity - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-los-angeles-laps",
            answer: "Los Angeles Laps - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/dan-102114985/mario-kart-tour-merry-mountain",
            answer: "Merry Mountain - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-berlin-byways-2",
            answer: "Berlin Byways - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/thatpythonguy/ninja-hideaway-mario-kart-tour",
            answer: "Ninja Hideaway - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-sydney-sprint",
            answer: "Sydney Sprint - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/tyler-helt/mario-kart-tour-singapore-speedway",
            answer: "Singapore Speedway - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/dan-maniel/amsterdam-drift",
            answer: "Amsterdam Drift - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/thatpythonguy/bangkok-rush-mario-kart-tour",
            answer: "Bangkok Rush - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/user-484249316/mario-kart-tour-gba-sunset-wilds",
            answer: "GBA Sunset Wilds - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/gba-sky-garden-mario-kart-tour",
            answer: "GBA Sky Garden - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/gba-boo-lake-mario-kart-tour",
            answer: "GBA Boo Lake - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/gba-riverside-park-mario-kart",
            answer: "GBA Riverside Park - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/gba-snow-land-mario-kart-tour",
            answer: "GBA Snow Land - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/piranha-plant-cove-mario-kart",
            answer: "Piranha Plant Cove - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/gba-yoshi-desert-mario-kart",
            answer: "GBA Yoshi Desert - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/athens-dash-mario-kart-tour",
            answer: "Athens Dash - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/gba-peach-circuit-mario-kart",
            answer: "GBA Peach Circuit - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/rome-aventi-mario-kart-tour",
            answer: "Rome Avanti - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/piranha-plant-pipeline-mario",
            answer: "Piranha Plant Pipeline - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/gba-lakeside-park-mario-kart",
            answer: "GBA Lakeside Park - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/squeaky-clean-sprint-mario-1",
            answer: "Squeaky Clean Sprint - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/madrid-drive-mario-kart-tour",
            answer: "Madrid Drive - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/cheeseboy2251/race-results-mario-kart-tour",
            answer: "Race Results - Mario Kart Tour",
          },
          {
            url: "https://soundcloud.com/the-crafty-army/main-theme-luigis-mansion-3-soundtrack",
            answer: "Main Theme (Title Screen) - Luigi's Mansion 3",
          },
          {
            url: "https://soundcloud.com/user-872152980/e-gadd-selection-e-gadds",
            answer: "E. Gadd's Laboratory - Luigi's Mansion 3",
          },
          {
            url: "https://soundcloud.com/user-824634691/twisted-suites-11-theme-track",
            answer: "Twisted Suites - Luigi's Mansion 3",
          },
          {
            url: "https://soundcloud.com/user-467575802/boilerworks-b2-theme-track-1",
            answer: "Boilerworks - Luigi's Mansion 3",
          },
          {
            url: "https://soundcloud.com/user-824634691/paranormal-productions-8-theme",
            answer: "Paranormal Productions - Luigi's Mansion 3",
          },
          {
            url: "https://soundcloud.com/user-824634691/tomb-suites-10-theme-track-1",
            answer: "Tomb Suites - Luigi's Mansion 3",
          },
          {
            url: "https://soundcloud.com/user-872152980/the-dance-hall-14-dj",
            answer: "DJ Phantasmagloria Battle - Luigi's Mansion 3",
          },
          {
            url: "https://soundcloud.com/user-872152980/rooftop-staff-credits-track-11",
            answer: "Staff Roll - Luigi's Mansion 3",
          },
          {
            url: "https://soundcloud.com/faded_boo/tokyo-overworld-1",
            answer: "Tokyo Overworld - Mario & Sonic at the Olympic Games Tokyo 2020",
          },
          {
            url: "https://soundcloud.com/faded_boo/surfing",
            answer: "Surfing - Mario & Sonic at the Olympic Games Tokyo 2020",
          },
          {
            url: "https://soundcloud.com/faded_boo/dream-karate-peachs-castle-super-mario-odyssey",
            answer: "Peach's Castle (Super Mario 64) - Mario & Sonic At The Olympic Games Tokyo 2020",
          },
          {
            url: "https://soundcloud.com/origami-king-one/paper-mario-the-origami-king-paper-mario-the-origami-king-2020",
            answer: "Title Screen - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/event-battle-paper-mario-the-origami-king-2020",
            answer: "Event Battle - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/whispering-woods-paper-mario-the-origami-king-2020",
            answer: "Whispering Woods - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/red-streamer-battle-paper-mario-the-origami-king-2020",
            answer: "Red Streamer Battle - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/toads-bbq-foodeatery-paper-mario-the-origami-king-2020",
            answer: "Toad's BBQ Foodeatery - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/graffiti-underground-paper-mario-the-origami-king-2020",
            answer: "Graffiti Underground - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/toad-town-ghost-town-paper-mario-the-origami-king-2020",
            answer: "Toad Town (Ghost Town) - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/picnic-road-paper-mario-the-origami-king-2020",
            answer: "Picnic Road - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/overlook-mountain-paper-mario-the-origami-king-2020",
            answer: "Overlook Mountain - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/vellumental-battle-paper-mario-the-origami-king-2020",
            answer: "Vellumental Battle - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/chestnut-valley-paper-mario-the-origami-king-2020",
            answer: "Chestnut Valley - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/eddy-river-paper-mario-the-origami-king-2020",
            answer: "Eddy River - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/autumn-mountain-paper-mario-the-origami-king-2020",
            answer: "Autumn Mountain - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/autumn-mountain-battle-paper-mario-the-origami-king-2020",
            answer: "Battle (Autumn Mountain) - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/tranquil-pipes-teahouse-paper-mario-the-origami-king-2020",
            answer: "Tranquil Pipes Teahouse - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/shogun-studios-paper-mario-the-origami-king-2020",
            answer: "Shogun Studios - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/olivia-having-fun-paper-mario-the-origami-king-2020",
            answer: "Olivia Having Fun - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/big-sho-theater-paper-mario-the-origami-king-2020",
            answer: "Big Sho' Theater - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/swan-lake-punk-remix-paper-mario-the-origami-king-2020",
            answer: "Swan Lake (Punk Remix) - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-two/sweetpaper-valley-paper-mario-the-origami-king-2020",
            answer: "Sweetpaper Valley - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-two/yellow-streamer-battle-paper-mario-the-origami-king-2020",
            answer: "Yellow Streamer Battle - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-two/shroom-city-paper-mario-the-origami-king-2020",
            answer: "Shroom City - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-two/thrills-at-night-paper-mario-the-origami-king-2020",
            answer: "Thrills At Night - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-two/scuffle-island-paper-mario-the-origami-king-2020",
            answer: "Scuffle Island - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-one/toad-town-purple-streamer-removal-paper-mario-the-origami-king-2020",
            answer: "Toad Town (Purple Streamer Removal) - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-two/shangri-spa-paper-mario-the-origami-king-2020",
            answer: "Shangri Spa - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-three/ninji-skills-paper-mario-the-origami-king-2020",
            answer: "Ninji Skills - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-three/bowsers-castle-paper-mario-the-origami-king-2020",
            answer: "Bowser's Castle - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-three/origami-castle-paper-mario-the-origami-king-2020",
            answer: "Origami Castle - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-three/battle-with-king-olly-paper-mario-the-origami-king-2020",
            answer: "Battle With King Olly - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-three/the-final-battle-paper-mario-the-origami-king-2020",
            answer: "The Final Battle - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/origami-king-three/staff-credits-paper-mario-the-origami-king-2020",
            answer: "Staff Roll - Paper Mario: The Origami King",
          },
          {
            url: "https://soundcloud.com/doc-vgm/title-screen-super-mario-bros-35-soundtrack",
            answer: "Main Menu - Super Mario Bros. 35",
          },
          {
            url: "https://soundcloud.com/jacob-skop/main-theme-mario-kart-live-home-circuit-soundtrack",
            answer: "Main Theme - Mario Kart Live: Home Circuit",
          },
          {
            url: "https://soundcloud.com/neil-winters-753009113/mario-kart-live-home-circuit-track-building",
            answer: "Track Building - Mario Kart Live: Home Circuit",
          },
          {
            url: "https://soundcloud.com/megawoofy/title-screen-bowsers-fury",
            answer: "Title Screen - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/choose-your-adventure",
            answer: "Choose Your Adventure - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/lake-lapcat",
            answer: "Lake Lapcat - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/scamper-shores",
            answer: "Scamper Shores - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/bowsers-fury",
            answer: "Bowser's Fury - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/pounce-bounce-isle",
            answer: "Pounce Bounce Isle - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/crisp-climb-castle",
            answer: "Crisp Climb Castle - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/fort-flaptrap",
            answer: "Fort Flaptrap - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/showdown-with-fury-bowser",
            answer: "Showdown With Fury Bowser - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/riding-plessie-across-lake",
            answer: "Plessie Ride! - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/mount-magmeow",
            answer: "Mount Magmeow - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/final-showdown-with-fury",
            answer: "Final Showdown With Fury Bowser - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/megawoofy/credits-bowsers-fury",
            answer: "Staff Roll - Bowser's Fury",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/bonny-greens",
            answer: "Bonny Greens - Mario Golf: Super Rush",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/ridgerock-lake",
            answer: "Ridgerock Lake - Mario Golf: Super Rush",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/speed-golf-wildweather-woods",
            answer: "Wildweather Woods (Speed Golf) - Mario Golf: Super Rush",
          },
          {
            url: "https://soundcloud.com/side-account-604061248/mario-golf-super-rush-ost-bonny-greens-town",
            answer: "Bonny Greens (Adventure Mode) - Mario Golf: Super Rush",
          },
          {
            url: "https://soundcloud.com/user-45513595/title-screen",
            answer: "Title Screen - WarioWare: Get It Together!",
          },
          {
            url: "https://soundcloud.com/user-45513595/main-menu",
            answer: "Main Menu - WarioWare: Get It Together!",
          },
          {
            url: "https://soundcloud.com/user-45513595/character-selection",
            answer: "Character Select - WarioWare: Get It Together!",
          },
          {
            url: "https://soundcloud.com/user-45513595/hq-penny-song-english",
            answer: "Penny's Song - WarioWare: Get It Together!",
          },
          {
            url: "https://soundcloud.com/user-45513595/staff-roll",
            answer: "Staff Roll - WarioWare: Get It Together!",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-superstars-ost-9",
            answer: "Title Screen [Mario Party 1] - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-superstars-ost-4",
            answer: "Title Screen [Mario Party 2] - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-superstars-ost-3",
            answer: "Title Screen [Mario Party 3] - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-superstars-ost",
            answer: "Toad's Shop Bop! [Mario Party 1] - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-495834954",
            answer: "Peach's Birthday Cake [Mario Party 1] - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-316199456",
            answer: "Space Land [Mario Party 2] - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-422357934",
            answer: "Woody Woods [Mario Party 3] - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-superstars-ost-you",
            answer: "You Are The Superstar! - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-417720507",
            answer: "Faster Than All [Mario Party 1] (Handcar Havoc) - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-329072182",
            answer: "The Blue Skies Yonder [Mario Party 2] (Slot Car Derby, Mecha Marathon) - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-149934528",
            answer: "Mustn't Panic [Mario Party 3] (Eatsa Pizza) - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/mario-heardle/jazzy-mario-party-6-mario-party-superstars",
            answer: "Jazzy [Mario Party 6] (Catch You Letter) - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/mario-heardle/cool-as-a-cucumber-mario-party-superstars",
            answer: "Cool As A Cucumber [Mario Party 7] (Spin Doctor) - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/user-624399807/mario-party-superstars-ost",
            answer: "Friendly Competition [Mario Party 8] (Paint Misbehavin') - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/dylan-walter-156875824/mario-party-superstars-ost-1",
            answer: "Everyone's A Superstar (Staff Roll) - Mario Party Superstars",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-paris-promenade-mario",
            answer: "Tour Paris Promenade (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/n64-choco-mountain-mario-kart",
            answer: "N64 Choco Mountain (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-coconut-mall-mario-kart-8",
            answer: "Wii Coconut Mall (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-tokyo-blur-mario-kart-8",
            answer: "Tour Tokyo Blur (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/ds-shroom-ridge-mario-kart-8",
            answer: "DS Shroom Ridge (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/gba-sky-garden-mario-kart-8",
            answer: "GBA Sky Garden (Wave 1) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-new-york-minute-mario",
            answer: "Tour New York Minute (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/snes-mario-circuit-3-mario",
            answer: "SNES Mario Circuit 3 (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/n64-kalimari-desert-mario-kart",
            answer: "N64 Kalimari Desert (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-sydney-sprint-mario-kart",
            answer: "Tour Sydney Sprint (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/gba-snow-land-mario-kart-8",
            answer: "GBA Snow Land (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/sky-high-sundae-mario-kart-8",
            answer: "Sky High Sundae (Wave 2) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-london-loop-mario-kart-8",
            answer: "Tour London Loop (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-maple-treeway-mario-kart-8",
            answer: "Wii Maple Treeway (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/ds-peach-gardens-mario-kart-8",
            answer: "DS Peach Gardens (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/merry-mountain-mario-kart-8",
            answer: "Merry Mountain (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/gba-boo-lake-mario-kart-8",
            answer: "GBA Boo Lake (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/megawoofy/3ds-rainbow-road-mario-kart-8",
            answer: "3DS Rainbow Road (Wave 3) - MK8DX Booster Course Pass Waves 1-3",
          },
          {
            url: "https://soundcloud.com/neil-winters-753009113/mario-strikers-battle-league-title-screen",
            answer: "Title Screen - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/neil-winters-753009113/mario-strikers-battle-league-super-bell-hill",
            answer: "Mushroom Hill (Super Mario 3D World ~ Super Bell Hill) - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/user-312899488/mario-strikers-battle-league",
            answer: "Spooky Mansion (Luigi's Mansion ~ Main Theme) - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/neil-winters-753009113/mario-strikers-battle-league-new-super-mario-bros",
            answer: "Mushroom Hill (New Super Mario Bros. ~ Ground) - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/neil-winters-753009113/mario-strikers-battle-league-inside-the-castle-walls",
            answer: "Royal Castle (Super Mario 64 ~ Peach's Castle) - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/neil-winters-753009113/mario-strikers-battle-league-island-swing",
            answer: "Jungle Retreat (Donkey Kong Country ~ DK Island Swing) - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/ahmad-viper/marios-theme-mario-strikers",
            answer: "Mario's Theme - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/ahmad-viper/luigis-theme-mario-strikers",
            answer: "Luigi's Theme - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/ahmad-viper/rosalinas-theme-mario-strikers",
            answer: "Rosalina's Theme - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/ahmad-viper/bowsers-theme-mario-strikers",
            answer: "Bowser's Theme - Mario Strikers: Battle League",
          },
          {
            url: "https://soundcloud.com/yokoshimomura-music/prologue-on-the-back-of-the",
            answer: "On The Back Of The Darkmess Manta (Prologue) - Mario + Rabbids: Sparks Of Hope",
          },
          {
            url: "https://soundcloud.com/yokoshimomura-music/the-galaxy-awaits-main-menu",
            answer: "The Galaxy Awaits (Main Menu) - Mario + Rabbids: Sparks Of Hope",
          },
          {
            url: "https://soundcloud.com/yokoshimomura-music/battle-of-beacon-beach",
            answer: "Battle Of Beacon Beach - Mario + Rabbids: Sparks Of Hope",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/icy-battle-ballet",
            answer: "Icy Battle Ballet - Mario + Rabbids: Sparks Of Hope",
          },
          {
            url: "https://soundcloud.com/yokoshimomura-music/warmth-amongst-the-snow",
            answer: "Warmth Amongst The Snow - Mario + Rabbids: Sparks Of Hope",
          },
          {
            url: "https://soundcloud.com/yokoshimomura-music/uphill-battle",
            answer: "Uphill Battle - Mario + Rabbids: Sparks Of Hope",
          },
          {
            url: "https://soundcloud.com/garethcokerofficial/fight-songs-from-the-flower",
            answer: "Fight Songs From The Flower Planet - Mario + Rabbids: Sparks Of Hope",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/for-the-galaxy",
            answer: "For The Galaxy! (Final Boss) - Mario + Rabbids: Sparks Of Hope",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-amsterdam-drift-mario",
            answer: "Tour Amsterdam Drift (Wave 4) - MX8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-dk-summit-mario-kart-8",
            answer: "Wii DK Summit (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/yoshis-island-mario-kart-8",
            answer: "Yoshi's Island (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/results-yoshi-mario-kart-8-deluxe-ost",
            answer: "Results (Yoshi's Island) (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/ds-mario-circuit-mario-kart-8",
            answer: "DS Mario Circuit (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/gcn-waluigi-stadium-mario-kart",
            answer: "GCN Waluigi Stadium (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-singapore-speedway-mario",
            answer: "Tour Singapore Speedway (Wave 4) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-athens-dash-mario-kart-8",
            answer: "Tour Athens Dash (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/gcn-daisy-cruiser-mario-kart-8",
            answer: "GCN Daisy Cruiser (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-moonview-highway-mario",
            answer: "Wii Moonview Highway (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-moonview-highway-city",
            answer: "Wii Moonview Highway (Straightaway) (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/squeaky-clean-sprint-mario",
            answer: "Squeaky Clean Sprint (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-los-angeles-laps-mario",
            answer: "Tour Los Angeles Laps (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-vancouver-velocity-mario",
            answer: "Tour Vancouver Velocity (Wave 5) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-rome-avanti-mario-kart-8",
            answer: "Tour Rome Avanti (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/gcn-dk-mountain-mario-kart-8",
            answer: "GCN DK Mountain (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-daisy-circuit-mario-kart-8",
            answer: "Wii Daisy Circuit (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/tour-madrid-drive-mario-kart-8",
            answer: "Tour Madrid Drive (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/snes-bowsers-castle-3-mario",
            answer: "SNES Bowser Castle 3 (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/wii-rainbow-road-mario-kart-8",
            answer: "Wii Rainbow Road (Wave 6) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/megawoofy/staff-credits-booster-course",
            answer: "Staff Roll (Booster Course Pass) - MK8DX Booster Course Pass Waves 4-6",
          },
          {
            url: "https://soundcloud.com/briantyler/press-start",
            answer: "Press Start - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/briantyler/strange-new-world",
            answer: "Strange New World - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/briantyler/welcome-to-the-mushroom",
            answer: "Welcome To The Mushroom Kingdom - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/jackblack-sc/peaches",
            answer: "Peaches - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/briantyler/drivin-me-bananas",
            answer: "Drivin' Me Bananas - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/briantyler/karts",
            answer: "Karts! - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/briantyler/fighting-tooth-and-veil",
            answer: "Fighting Tooth And Veil - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/alidee-music/mario-brothers-rap",
            answer: "Mario Brothers Rap - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/briantyler/superstars",
            answer: "Superstars - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/briantyler/level-complete",
            answer: "Level Complete (Credits) - The Super Mario Bros. Movie",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/mecha-king-bob-omb-blast",
            answer: "Mecha King Bob Omb Blast - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
          },
          {
            url: "https://soundcloud.com/christopheheralofficial/the-rayman-show",
            answer: "The Rayman Show - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/phantom-returns-act-1-overture",
            answer: "Phantom Returns, Act 1 - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/phantom-razzmatazz",
            answer: "Phantom, Razzmatazz - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/phantom-metal-mayhem",
            answer: "Phantom, Metal Mayhem - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
          },
          {
            url: "https://soundcloud.com/grant-kirkhope-official/phantom-returns-act-3-the",
            answer: "Phantom Returns, Act 3 - Mario + Rabbids: Sparks Of Hope Post-Launch Compilation",
          },
          {
            url: "https://soundcloud.com/megawoofy/title-screen-super-mario-bros",
            answer: "Title Screen - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/world-1-pipe-rock-plateau",
            answer: "Pipe Rock Plateau (World 1) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/overworld-super-mario-bros-1",
            answer: "Grassland (Ground) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wonder-wacky-super-mario-bros",
            answer: "Bendy Boing Wonder - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/forest-super-mario-bros-1",
            answer: "Forest - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wonder-piranha-plants-on",
            answer: "Piranha Plants On Parade - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/badge-challenge-super-mario-2",
            answer: "Badge Challenge - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/savannah-super-mario-bros-1",
            answer: "Savanna - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/spikey-dance-number-super",
            answer: "Spikey Dance Number - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wonder-dreamy-super-mario-bros",
            answer: "Medley Mix Wonder - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/athletic-super-mario-bros",
            answer: "Athletic - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wonder-silent-super-mario-bros",
            answer: "Flippy Float Wonder - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wiggler-race-super-mario-bros",
            answer: "Wiggler Race! - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/palace-super-mario-bros-wonder",
            answer: "Palace - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/petal-isles-super-mario-bros",
            answer: "Petal Isles - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/beach-super-mario-bros-1",
            answer: "Coast (Beach) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/underwater-super-mario-bros-4",
            answer: "Underwater - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wonder-strange-super-mario",
            answer: "Stretchy Shadow Wonder - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/world-2-fluff-puff-peaks-super",
            answer: "Fluff Puff Peaks (World 2) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/snow-super-mario-bros-wonder-1",
            answer: "Snow - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/jump-jump-jump-super-mario",
            answer: "Jump! Jump! Jump! - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/airship-super-mario-bros-1",
            answer: "Airship - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/world-3-shining-falls-super",
            answer: "Shining Falls (World 3) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/lake-super-mario-bros-wonder",
            answer: "Lake - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wonder-transform-super-mario",
            answer: "Shapey Shift Wonder - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/world-4-sunbaked-desert-super",
            answer: "Sunbaked Desert (World 4) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/desert-super-mario-bros-wonder",
            answer: "Desert - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/ninji-jump-party-super-mario",
            answer: "Ninji Disco - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/world-5-fungi-mines-super",
            answer: "Fungi Mines (World 5) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/dark-forest-super-mario-bros",
            answer: "Dark Woods - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/pumpkin-party-super-mario-bros",
            answer: "Pumpkin Party - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/a-night-at-boos-opera-super",
            answer: "A Night At Boo's Opera - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/world-6-deep-magma-bog-lava",
            answer: "Deep Magma Bog (World 6) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/lava-super-mario-bros-wonder",
            answer: "Lava - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/castle-bowser-super-mario-bros",
            answer: "Castle Bowser - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/factory-super-mario-bros-1",
            answer: "Factory - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wonder-metal-super-mario-bros",
            answer: "Zappy Zone Wonder (Super Mario 64 ~ Metal Mario) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/bowsers-blazing-beats-full",
            answer: "Bowser's Blazing Beats - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/bowser-battle-full-super-mario",
            answer: "Castle Bowser Battle - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/special-world-super-mario-bros",
            answer: "Special World - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/wonder-a-very-special-march",
            answer: "A Very Special March - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/megawoofy/staff-credits-super-mario-bros",
            answer: "Starry Staff Wonder (Staff Roll) - Super Mario Bros. Wonder",
          },
          {
            url: "https://soundcloud.com/tortilla543/warioware-move-it-main-theme",
            answer: "Title Screen - WarioWare: Move It!",
          },
          {
            url: "https://soundcloud.com/warioheardle/museum-warioware-move-it",
            answer: "Museum - WarioWare: Move It!",
          },
          {
            url: "https://soundcloud.com/warioheardle/form-explanation-warioware-move-it",
            answer: "Form Explanation - WarioWare: Move It!",
          },
          {
            url: "https://soundcloud.com/warioheardle/super-wario-dance-company-warioware-move-it",
            answer: "Super Wario Dance Company - WarioWare: Move It!",
          },
          {
            url: "https://soundcloud.com/tortilla543/warioware-move-it-megagame-muscles",
            answer: "Megagame Muscles - WarioWare: Move It!",
          },
          {
            url: "https://soundcloud.com/warioheardle/pyoro-w-phase-1-2-3-warioware-move-it",
            answer: "Pyoro W - WarioWare: Move It!",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/lets-try",
            answer: "Let's Try! (File Select) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/super-mario-house",
            answer: "Super Mario House - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/danger-abounds-on-the-journey",
            answer: "Danger Abounds On The Journey (Mushroom Way) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/battling-monsters",
            answer: "Battling Monsters (Enemy Battle) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/hello-happy-kingdom",
            answer: "Hello, Happy Kingdom (Mushroom Kingdom) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/danger-aplenty-on-the-journey",
            answer: "Danger Aplenty On The Journey (Bandit's Way) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/battling-strongish-monsters",
            answer: "Battling Strongish Monsters (Boss Battle) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/battling-a-weapon-boss",
            answer: "Battling A Weapon Boss - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/lets-take-the-midas-river",
            answer: "Let's Take The Midas River - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/grandpa-and-the-upbeat",
            answer: "Grandpa And The Upbeat Tadpoles (Tadpole Pond) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/elegy",
            answer: "Elegy (Sad Song) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/beware-of-forest-mushrooms",
            answer: "Beware Of Forest Mushrooms (Forest Maze) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/rose-town",
            answer: "Rose Town - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/welcome-to-yoster-isle",
            answer: "Welcome To Yo'ster Isle - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/moleville-mountain-rail",
            answer: "Moleville Mountain Rail - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/the-bell-rings-out-at",
            answer: "The Bell Rings Out At Marrymore - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/shopping-at-seaside-town",
            answer: "Shopping At Seaside Town - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/battling-culex-3d",
            answer: "Battling Culex - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/lets-get-fluffy",
            answer: "Let's Get Fluffy! (Nimbus Land) - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/super-mario-rpg-switch/farewell-geno-the-wishes-from",
            answer: "Farewell Geno - Super Mario RPG (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/title-screen",
            answer: "Title Screen - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/mario-toy-company-c",
            answer: "Mario Toy Company C - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/mini-mario-level",
            answer: "Mini Mario Level - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/merry-mini-land-a",
            answer: "Merry Mini Land A - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/spooky-house-a",
            answer: "Spooky House A - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/slippery-summit-b",
            answer: "Slippery Summit B - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/twilight-city-a",
            answer: "Twilight City A - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/credits",
            answer: "Staff Roll - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/mario-vs-donkey-kong-switch/the-real-final-battle",
            answer: "The Real Final Battle - Mario vs. Donkey Kong (Switch)",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/entrancing-prelude-main-menu",
            answer: "Entrancing Prelude (Main Menu) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/welcome-to-sparkle-theater",
            answer: "Welcome To Sparkle Theater - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/assassin-disco-ninja-peach",
            answer: "Assassin Disco (Ninja Peach) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/galloping-through-the",
            answer: "Galloping Through The Wilderness (Cowgirl Peach) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/time-for-tea-patissiere-peach",
            answer: "Time For Tea? (Patissiere Peach) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/peach-march",
            answer: "Peach March (Trailer Theme) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/under-the-cover-of-night",
            answer: "Under The Cover Of Night (Dashing Thief Peach) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/snow-village",
            answer: "Snow Village - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/gliding-across-the-snowscape",
            answer: "Gliding Across The Snowscape (Figure Skater Peach) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/leave-the-sleuthing-to-me",
            answer: "Leave the Sleuthing to Me (Detective Peach) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/enchanting-echo-of-the-deep",
            answer: "Enchanting Echo Of The Deep (Mermaid Peach) - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/princess-peach-showtime/credits",
            answer: "Staff Roll - Princess Peach: Showtime!",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-2024-main-theme",
            answer: "Title Screen - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/que-tie-141910712/greetings-from-the-mushroom",
            answer: "Greetings From The Mushroom Kingdom - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/rogueport-paper-mario-the-thousand-year-door-2024",
            answer: "Rogueport - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/rogueport-shops-paper-mario",
            answer: "Rogueport (Shops) - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/jigglypuff-the-pokemon/rogueport-sewers-medley",
            answer: "Rogueport Underground - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-chapter-1-battle-full-mix",
            answer: "Battle ~ Chapter 1 - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/petal-meadows-paper-mario-the-thousand-year-door-2024",
            answer: "Petal Meadows - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-petalburg",
            answer: "Petalburg - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-koops-theme",
            answer: "Koops' Theme - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/ender-uzi/hooktail-castle-top-of-the-castle",
            answer: "Hooktail Castle - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-extra-battle-full-mix",
            answer: "Battle ~ Extra (Hooktail Castle & Pit Of 100 Trials) - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/unfortberdopoly2/super-luigi-paper-mario-the-thousand-year-door-ost",
            answer: "Super Luigi - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-madame-flurrie-theme",
            answer: "Madame Flurrie's Theme - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-yoshi-kid-theme",
            answer: "Yoshi Kid's Theme - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/a-bittersweet-music-box-paper",
            answer: "A Bittersweet Music Box - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-champ-battle-full-mix",
            answer: "Battle ~ The Champ (Rawk Hawk) - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/jio-ti/prince-mush-battle-paper-mario-the-thousand-year-door-remake-ost",
            answer: "Battle ~ Prince Mush - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-twilight-town",
            answer: "Twilight Town - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-vivian-theme",
            answer: "Vivian's Theme - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-excess-express-day",
            answer: "Excess Express (Day) - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-pennington-theme",
            answer: "Detective Pennington's On The Case - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/incrediblyinane/ttyd-chapter-6-battle-full-mix",
            answer: "Battle ~ Chapter 6 - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/jio-ti/x-nauts-fortress-paper-mario-the-thousand-year-door-remake-ost",
            answer: "X-Naut Fortress - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/jio-ti/battle-shadow-queen-switch",
            answer: "Battle ~ Shadow Queen - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/jio-ti/final-battle-shadow-queen-switch",
            answer: "Final Battle - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/staff-credits-paper-mario-the",
            answer: "Staff Roll - Paper Mario: The Thousand-Year Door (Switch)",
          },
          {
            url: "https://soundcloud.com/kenneth-phan-367213033/super-mario-party-jamboree-main-theme-song",
            answer: "Title Screen - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/mega-wigglers-tree-party",
            answer: "Mega Wiggler's Tree Party - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/goomba-lagoon",
            answer: "Goomba Lagoon - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/rainbow-galleria",
            answer: "Rainbow Galleria - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/marios-rainbow-castle",
            answer: "Mario's Rainbow Castle [Mario Party 1] - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/bowser-busts-in",
            answer: "Bowser Busts In - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/mega-rocky-wrench-wreckers-1",
            answer: "Mega Rocky Wrench Wreckers - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/slowly-yet-surely",
            answer: "Slowly Yet Surely [Mario Party 4] (Stamp Out!) - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/yoshis-mountain-race",
            answer: "Yoshi's Mountain Race - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/rosalinas-radical-race",
            answer: "Rosalina's Radical Race - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/keep-your-cool",
            answer: "Keep Your Cool (Hammer It Home, Prime Cut, etc) - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/smpjamboree/match-em-up",
            answer: "Match 'Em Up (Twist And Sort, Cage Catch, etc) - Super Mario Party Jamboree",
          },
          {
            url: "https://soundcloud.com/anime404/mario-luigi-brothership-title-screen",
            answer: "Title Screen - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/anime404/mario-luigi-brothership-battle-theme",
            answer: "Battle - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/anime404/mario-luigi-brothership-music-shipshape-island",
            answer: "Shipshape Island - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/anime404/mario-luigi-brothership-mini-boss-battle",
            answer: "Mid Boss Battle - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/anime404/mario-luigi-brothership-twistee-island",
            answer: "Twistee Island - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/anime404/mario-luigi-brothership-great-lighthouse-boss-battle",
            answer: "Boss Battle - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/anime404/mario-luigi-brothership-florall-island",
            answer: "Florall Island - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/anime404/mario-luigi-brothership-desolatt-island",
            answer: "Desloatt Island - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/heatfreeze-island-mario-luigi-brothership",
            answer: "Heatfreeze Island - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/slippenglide-island-mario-luigi-brothership",
            answer: "Slippenglide Island - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/jellyfish-island-mario-luigi-brothership",
            answer: "Jellyfish Island - Mario & Luigi: Brothership",
          },
          {
            url: "https://soundcloud.com/superninjigalaxy/wayaway-island-mario-luigi-brothership",
            answer: "Wayaway Island (Super Mario Bros. 3 ~ Fortress) - Mario & Luigi: Brothership",
          },
  ];
  shuffleMusic();
  var firstLoad = true;

  fetch(zipUrl).then((r) => {
    if (r.ok == false) {
      zipUrl = "";
    }
  });

  const Cn = ue(musicNameList),
    On = {
      subscribe: ue(musicListWithLinks, Pn).subscribe,
    };

  ("use strict");

  function e() {}

  function shuffleMusic() {
    for (let i = musicListWithLinks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [musicListWithLinks[i], musicListWithLinks[j]] = [
        musicListWithLinks[j],
        musicListWithLinks[i],
      ];
    }
  }

  function nextMusic() {
    currentIndex += 1;
    if (currentIndex >= musicListWithLinks.length) {
      currentIndex = 0;
      shuffleMusic();
      firstLoad = true; // Problem: reset userStats
    }
    document.body.innerHTML = "";
    new (class extends se {
      constructor(e) {
        super(), re(this, e, jn, En, i, {}, null, [-1, -1]);
      }
    })({
      target: document.body,
      props: {},
    });
  }

  function t(e) {
    return e();
  }

  function n() {
    return Object.create(null);
  }

  function r(e) {
    e.forEach(t);
  }

  function s(e) {
    return "function" == typeof e;
  }

  function i(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  let o, a;

  function l(e, t) {
    return o || (o = document.createElement("a")), (o.href = t), e === o.href;
  }

  function u(t, n, r) {
    t.$$.on_destroy.push(
      (function (t, ...n) {
        if (null == t) return e;
        const r = t.subscribe(...n);
        return r.unsubscribe ? () => r.unsubscribe() : r;
      })(n, r)
    );
  }

  function c(e, t, n, r) {
    if (e) {
      const s = d(e, t, n, r);
      return e[0](s);
    }
  }

  function d(e, t, n, r) {
    return e[1] && r
      ? (function (e, t) {
          for (const n in t) e[n] = t[n];
          return e;
        })(n.ctx.slice(), e[1](r(t)))
      : n.ctx;
  }

  function h(e, t, n, r) {
    if (e[2] && r) {
      const s = e[2](r(n));
      if (void 0 === t.dirty) return s;
      if ("object" == typeof s) {
        const e = [],
          n = Math.max(t.dirty.length, s.length);
        for (let r = 0; r < n; r += 1) e[r] = t.dirty[r] | s[r];
        return e;
      }
      return t.dirty | s;
    }
    return t.dirty;
  }

  function f(e, t, n, r, s, i) {
    if (s) {
      const o = d(t, n, r, i);
      e.p(o, s);
    }
  }

  function m(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let e = 0; e < n; e++) t[e] = -1;
      return t;
    }
    return -1;
  }

  function p(e, t) {
    e.appendChild(t);
  }

  function g(e, t, n) {
    e.insertBefore(t, n || null);
  }

  function y(e) {
    e.parentNode.removeChild(e);
  }

  function v(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }

  function w(e) {
    return document.createElement(e);
  }

  function k(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }

  function _(e) {
    return document.createTextNode(e);
  }

  function x() {
    return _(" ");
  }

  function b() {
    return _("");
  }

  function S(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }

  function M(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }

  function $(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }

  function D(e, t) {
    e.value = null == t ? "" : t;
  }

  function T(e, t, n, r) {
    null === n
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, r ? "important" : "");
  }

  function Y(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }

  function C(e) {
    a = e;
  }

  function O() {
    if (!a) throw new Error("Function called outside component initialization");
    return a;
  }

  function P(e) {
    O().$$.on_mount.push(e);
  }

  function A() {
    const e = O();
    return (t, n) => {
      const r = e.$$.callbacks[t];
      if (r) {
        const s = (function (e, t, n = !1) {
          const r = document.createEvent("CustomEvent");
          return r.initCustomEvent(e, n, !1, t), r;
        })(t, n);
        r.slice().forEach((t) => {
          t.call(e, s);
        });
      }
    };
  }

  function L(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach((e) => e.call(this, t));
  }
  const N = [],
    H = [],
    I = [],
    W = [],
    R = Promise.resolve();
  let F = !1;

  function G(e) {
    I.push(e);
  }
  const E = new Set();
  let j = 0;

  function B() {
    const e = a;
    do {
      for (; j < N.length; ) {
        const e = N[j];
        j++, C(e), z(e.$$);
      }
      for (C(null), N.length = 0, j = 0; H.length; ) H.pop()();
      for (let e = 0; e < I.length; e += 1) {
        const t = I[e];
        E.has(t) || (E.add(t), t());
      }
      I.length = 0;
    } while (N.length);
    for (; W.length; ) W.pop()();
    (F = !1), E.clear(), C(e);
  }

  function z(e) {
    if (null !== e.fragment) {
      e.update(), r(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(G);
    }
  }
  const U = new Set();
  let V;

  function J() {
    V = {
      r: 0,
      c: [],
      p: V,
    };
  }

  function K() {
    V.r || r(V.c), (V = V.p);
  }

  function Z(e, t) {
    e && e.i && (U.delete(e), e.i(t));
  }

  function q(e, t, n, r) {
    if (e && e.o) {
      if (U.has(e)) return;
      U.add(e),
        V.c.push(() => {
          U.delete(e), r && (n && e.d(1), r());
        }),
        e.o(t);
    }
  }
  const X =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;

  function Q(e) {
    e && e.c();
  }

  function ee(e, n, i, o) {
    const { fragment: a, on_mount: l, on_destroy: u, after_update: c } = e.$$;
    a && a.m(n, i),
      o ||
        G(() => {
          const n = l.map(t).filter(s);
          u ? u.push(...n) : r(n), (e.$$.on_mount = []);
        }),
      c.forEach(G);
  }

  function te(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (r(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }

  function ne(e, t) {
    -1 === e.$$.dirty[0] &&
      (N.push(e), F || ((F = !0), R.then(B)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }

  function re(t, s, i, o, l, u, c, d = [-1]) {
    const h = a;
    C(t);
    const f = (t.$$ = {
      fragment: null,
      ctx: null,
      props: u,
      update: e,
      not_equal: l,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(s.context || (h ? h.$$.context : [])),
      callbacks: n(),
      dirty: d,
      skip_bound: !1,
      root: s.target || h.$$.root,
    });
    c && c(f.root);
    let m = !1;
    if (
      ((f.ctx = i
        ? i(t, s.props || {}, (e, n, ...r) => {
            const s = r.length ? r[0] : n;
            return (
              f.ctx &&
                l(f.ctx[e], (f.ctx[e] = s)) &&
                (!f.skip_bound && f.bound[e] && f.bound[e](s), m && ne(t, e)),
              n
            );
          })
        : []),
      f.update(),
      (m = !0),
      r(f.before_update),
      (f.fragment = !!o && o(f.ctx)),
      s.target)
    ) {
      if (s.hydrate) {
        const e = (function (e) {
          return Array.from(e.childNodes);
        })(s.target);
        f.fragment && f.fragment.l(e), e.forEach(y);
      } else f.fragment && f.fragment.c();
      s.intro && Z(t.$$.fragment),
        ee(t, s.target, s.anchor, s.customElement),
        B();
    }
    C(h);
  }
  class se {
    $destroy() {
      te(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      var t;
      this.$$set &&
        ((t = e), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }

  function ie(e) {
    let t, n, r, s;
    const i = e[3].default,
      o = c(i, e, e[2], null);
    return {
      c() {
        (t = w("button")),
          o && o.c(),
          M(
            t,
            "class",
            "px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm svelte-1r54uzk"
          ),
          Y(t, "bg-custom-positive", e[0]),
          Y(t, "bg-custom-mg", e[1]);
      },
      m(i, a) {
        g(i, t, a),
          o && o.m(t, null),
          (n = !0),
          r || ((s = S(t, "click", e[4])), (r = !0));
      },
      p(e, [r]) {
        o &&
          o.p &&
          (!n || 4 & r) &&
          f(o, i, e, e[2], n ? h(i, e[2], r, null) : m(e[2]), null),
          1 & r && Y(t, "bg-custom-positive", e[0]),
          2 & r && Y(t, "bg-custom-mg", e[1]);
      },
      i(e) {
        n || (Z(o, e), (n = !0));
      },
      o(e) {
        q(o, e), (n = !1);
      },
      d(e) {
        e && y(t), o && o.d(e), (r = !1), s();
      },
    };
  }

  function oe(e, t, n) {
    let { $$slots: r = {}, $$scope: s } = t,
      { primary: i = !1 } = t,
      { secondary: o = !1 } = t;
    return (
      (e.$$set = (e) => {
        "primary" in e && n(0, (i = e.primary)),
          "secondary" in e && n(1, (o = e.secondary)),
          "$$scope" in e && n(2, (s = e.$$scope));
      }),
      [
        i,
        o,
        s,
        r,
        function (t) {
          L.call(this, e, t);
        },
      ]
    );
  }
  class ae extends se {
    constructor(e) {
      super(),
        re(this, e, oe, ie, i, {
          primary: 0,
          secondary: 1,
        });
    }
  }
  const le = [];

  function ue(t, n = e) {
    let r;
    const s = new Set();

    function o(e) {
      if (i(t, e) && ((t = e), r)) {
        const e = !le.length;
        for (const e of s) e[1](), le.push(e, t);
        if (e) {
          for (let e = 0; e < le.length; e += 2) le[e][0](le[e + 1]);
          le.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (e) {
        o(e(t));
      },
      subscribe: function (i, a = e) {
        const l = [i, a];
        return (
          s.add(l),
          1 === s.size && (r = n(o) || e),
          i(t),
          () => {
            s.delete(l), 0 === s.size && (r(), (r = null));
          }
        );
      },
    };
  }
  const ce = ue([]);

  function de() {
    return (
      Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer)
    );
  }

  function he() {
    window.dataLayer.push(arguments);
  }

  function fe(e, t, n) {
    let { properties: r } = t,
      { configurations: s = {} } = t,
      { enabled: i = !0 } = t;

    function o() {
      !(function (e, t, n) {
        let r = e.length;

        function s() {
          (r = --r), r < 1 && n();
        }
        t()
          ? n()
          : e.forEach(
              ({
                type: e,
                url: t,
                options: n = {
                  async: !0,
                  defer: !0,
                },
              }) => {
                const r = "script" === e,
                  i = document.createElement(r ? "script" : "link");
                r
                  ? ((i.src = t), (i.async = n.async), (i.defer = n.defer))
                  : ((i.rel = "stylesheet"), (i.href = t)),
                  (i.onload = s),
                  document.body.appendChild(i);
              }
            );
      })(
        [
          {
            type: "script",
            url: `//www.googletagmanager.com/gtag/js?id=${r[0]}`,
          },
        ],
        de,
        a
      );
    }

    function a() {
      return (
        (window.dataLayer = window.dataLayer || []),
        he("js", new Date()),
        r.forEach((e) => {
          he("config", e, s[e] || {});
        }),
        ce.subscribe((e) => {
          let t = e.length && e.shift();
          for (; t; ) {
            const { event: n, data: r } = t;
            he("event", n, r), (t = e.shift());
          }
        })
      );
    }
    return (
      P(() => {
        i && o();
      }),
      (e.$$set = (e) => {
        "properties" in e && n(0, (r = e.properties)),
          "configurations" in e && n(1, (s = e.configurations)),
          "enabled" in e && n(2, (i = e.enabled));
      }),
      [r, s, i, o]
    );
  }
  class me extends se {
    constructor(e) {
      super(),
        re(this, e, fe, null, i, {
          properties: 0,
          configurations: 1,
          enabled: 2,
          init: 3,
        });
    }
    get init() {
      return this.$$.ctx[3];
    }
  }

  function pe(e, t) {
    t.send_to || delete t.send_to,
      ce.update((n) => [
        ...n,
        {
          event: e,
          data: t,
        },
      ]);
  }

  function ge(e) {
    let t, n, r, s;
    return {
      c() {
        (t = k("svg")),
          (n = k("circle")),
          (r = k("line")),
          (s = k("line")),
          M(n, "cx", "12"),
          M(n, "cy", "12"),
          M(n, "r", "10"),
          M(r, "x1", "12"),
          M(r, "y1", "16"),
          M(r, "x2", "12"),
          M(r, "y2", "12"),
          M(s, "x1", "12"),
          M(s, "y1", "8"),
          M(s, "x2", "12.01"),
          M(s, "y2", "8"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(t, s);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ye(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(
            n,
            "d",
            "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ve(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(
            n,
            "d",
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function we(e) {
    let t, n, r, s;
    return {
      c() {
        (t = k("svg")),
          (n = k("circle")),
          (r = k("path")),
          (s = k("line")),
          M(n, "cx", "12"),
          M(n, "cy", "12"),
          M(n, "r", "10"),
          M(r, "d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"),
          M(s, "x1", "12"),
          M(s, "y1", "17"),
          M(s, "x2", "12.01"),
          M(s, "y2", "17"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(t, s);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function mListIco(e) {
    let t, r;
    return {
      c() {
        (t = k("svg")),
          (r = k("path")),
          M(
            r,
            "d",
            "M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "white");
      },
      m(e, i) {
        g(e, t, i), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ke(e) {
    let t, n, r, s, i, o, a, l, u, c, d, h, f, m, b, ml, v;
    return (
      (i = new ae({
        props: {
          $$slots: {
            default: [ge],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      i.$on("click", e[1]),
      (a = new ae({
        props: {
          $$slots: {
            default: [ye],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      a.$on("click", e[2]),
      (h = new ae({
        props: {
          $$slots: {
            default: [ve],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      h.$on("click", e[3]),
      (m = new ae({
        props: {
          $$slots: {
            default: [we],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      m.$on("click", e[4]),
      (ml = new ae({
        props: {
          $$slots: {
            default: [mListIco],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      ml.$on("click", e[5]),
      {
        c() {
          (t = w("header")),
            (n = w("div")),
            (r = w("div")),
            (s = w("div")),
            Q(i.$$.fragment),
            (o = x()),
            Q(a.$$.fragment),
            (l = x()),
            (u = w("h1")),
            (u.textContent = artist + " Heardle Infinite"),
            (c = x()),
            (d = w("div")),
            Q(h.$$.fragment),
            (f = x()),
            Q(m.$$.fragment),
            (b = x()),
            Q(ml.$$.fragment),
            M(s, "class", "flex flex-1"),
            M(
              u,
              "class",
              "font-serif text-3xl font-bold flex-grow text-center flex-1"
            ),
            M(d, "class", "flex flex-1 justify-end"),
            M(
              r,
              "class",
              "flex justify-evenly text-custom-fgcolor p-3 items-center"
            ),
            M(n, "class", "max-w-screen-md mx-auto "),
            M(t, "class", "border-b border-custom-line");
        },
        m(e, y) {
          g(e, t, y),
            p(t, n),
            p(n, r),
            p(r, s),
            ee(i, s, null),
            p(s, o),
            ee(a, s, null),
            p(r, l),
            p(r, u),
            p(r, c),
            p(r, d),
            ee(h, d, null),
            p(d, f),
            ee(m, d, null),
            p(d, b),
            ee(ml, d, null),
            (v = !0);
        },
        p(e, [t]) {
          const n = {};
          64 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            i.$set(n);
          const r = {};
          64 & t &&
            (r.$$scope = {
              dirty: t,
              ctx: e,
            }),
            a.$set(r);
          const s = {};
          64 & t &&
            (s.$$scope = {
              dirty: t,
              ctx: e,
            }),
            h.$set(s);
          const o = {};
          64 & t &&
            (o.$$scope = {
              dirty: t,
              ctx: e,
            }),
            m.$set(o);
          const z = {};
          64 & t &&
            (z.$$scope = {
              dirty: t,
              ctx: e,
            }),
            ml.$set(z);
        },
        i(e) {
          v ||
            (Z(i.$$.fragment, e),
            Z(a.$$.fragment, e),
            Z(h.$$.fragment, e),
            Z(m.$$.fragment, e),
            Z(ml.$$.fragment, e),
            (v = !0));
        },
        o(e) {
          q(i.$$.fragment, e),
            q(a.$$.fragment, e),
            q(h.$$.fragment, e),
            q(m.$$.fragment, e),
            q(ml.$$.fragment, e),
            (v = !1);
        },
        d(e) {
          e && y(t), te(i), te(a), te(h), te(m), te(ml);
        },
      }
    );
  }

  function _e(e) {
    const t = A();

    function n(e, n, r) {
      t("modal", {
        name: e,
        title: n,
        hasFrame: r,
      });
    }
    return [
      n,
      () => {
        n("info", "about"),
          pe("clickInfo", {
            name: "clickInfo",
          });
      },
      () => {
        n("donate", "support"),
          pe("clickDonate", {
            name: "clickDonate",
          });
      },
      () => {
        n("results", "stats"),
          pe("clickStats", {
            name: "clickStats",
          });
      },
      () => {
        n("help", "how to play"),
          pe("clickHelp", {
            name: "clickHelp",
          });
      },
      () => {
        n("music-list", "song list"),
          pe("clickMusicList", {
            name: "clickMusicList",
          });
      },
    ];
  }
  class xe extends se {
    constructor(e) {
      super(), re(this, e, _e, ke, i, {});
    }
  }

  function be(e, t, n) {
    const r = e.slice();
    return (r[5] = t[n]), (r[7] = n), r;
  }

  function Se(e) {
    let t,
      n = Array(e[3]),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = Pe(be(e, n, t));
    return {
      c() {
        t = w("div");
        for (let e = 0; e < r.length; e += 1) r[e].c();
        M(t, "class", "p-3 flex-col items-evenly");
      },
      m(e, n) {
        g(e, t, n);
        for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
      },
      p(e, s) {
        if (9 & s) {
          let i;
          for (n = Array(e[3]), i = 0; i < n.length; i += 1) {
            const o = be(e, n, i);
            r[i] ? r[i].p(o, s) : ((r[i] = Pe(o)), r[i].c(), r[i].m(t, null));
          }
          for (; i < r.length; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        e && y(t), v(r, e);
      },
    };
  }

  function Me(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h = e[1].img && Ae(e),
      f = e[1].artist && Le(e);
    return {
      c() {
        (t = w("div")),
          (n = w("a")),
          (r = w("div")),
          h && h.c(),
          (s = x()),
          (i = w("div")),
          f && f.c(),
          (o = x()),
          (a = w("div")),
          (a.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="14"><defs><linearGradient id="logo_hover_20" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad"><stop offset="0%" stop-color="#ff7700" stop-opacity="1"></stop><stop offset="100%" stop-color="#ff3300" stop-opacity="1"></stop></linearGradient></defs><path class="text-custom-fg" fill="currentColor" d="M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z"></path></svg>'),
          (l = x()),
          (u = w("div")),
          (u.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>'),
          M(i, "class", "flex-1 mx-3 text-white"),
          M(a, "class", "text-center flex justify-center"),
          M(r, "class", "p-2 flex items-center rounded-sm"),
          Y(r, "bg-custom-positive", e[2].gotCorrect),
          Y(r, "bg-custom-mg", !e[2].gotCorrect),
          M(n, "href", (c = e[1].url)),
          M(
            n,
            "title",
            (d =
              "Listen to " +
              e[1].artist +
              " - " +
              e[1].title +
              " on SoundCloud")
          ),
          M(n, "class", "no-underline"),
          M(t, "class", "p-3 pb-0 flex-col items-evenly");
      },
      m(e, c) {
        g(e, t, c),
          p(t, n),
          p(n, r),
          h && h.m(r, null),
          p(r, s),
          p(r, i),
          f && f.m(i, null),
          p(r, o),
          p(r, a),
          p(r, l),
          p(r, u);
      },
      p(e, t) {
        e[1].img
          ? h
            ? h.p(e, t)
            : ((h = Ae(e)), h.c(), h.m(r, s))
          : h && (h.d(1), (h = null)),
          e[1].artist
            ? f
              ? f.p(e, t)
              : ((f = Le(e)), f.c(), f.m(i, null))
            : f && (f.d(1), (f = null)),
          4 & t && Y(r, "bg-custom-positive", e[2].gotCorrect),
          4 & t && Y(r, "bg-custom-mg", !e[2].gotCorrect),
          2 & t && c !== (c = e[1].url) && M(n, "href", c),
          2 & t &&
            d !==
              (d =
                "Listen to " +
                e[1].artist +
                " - " +
                e[1].title +
                " on SoundCloud") &&
            M(n, "title", d);
      },
      d(e) {
        e && y(t), h && h.d(), f && f.d();
      },
    };
  }

  function $e(t) {
    let n;
    return {
      c() {
        (n = w("div")), M(n, "class", "w-5 h-5");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function De(e) {
    let t, n, r;

    function s(e, t) {
      return e[0][e[7]].isCorrect || e[0][e[7]].isSkipped
        ? e[0][e[7]].isSkipped
          ? Te
          : void 0
        : Ye;
    }
    let i = s(e),
      o = i && i(e);

    function a(e, t) {
      return e[0][e[7]].isSkipped ? Oe : Ce;
    }
    let l = a(e),
      u = l(e);
    return {
      c() {
        (t = w("div")),
          o && o.c(),
          (n = x()),
          (r = w("div")),
          u.c(),
          M(t, "class", "mr-2"),
          M(r, "class", "flex flex-1 justify-between items-center");
      },
      m(e, s) {
        g(e, t, s), o && o.m(t, null), g(e, n, s), g(e, r, s), u.m(r, null);
      },
      p(e, n) {
        i !== (i = s(e)) &&
          (o && o.d(1), (o = i && i(e)), o && (o.c(), o.m(t, null))),
          l === (l = a(e)) && u
            ? u.p(e, n)
            : (u.d(1), (u = l(e)), u && (u.c(), u.m(r, null)));
      },
      d(e) {
        e && y(t), o && o.d(), e && y(n), e && y(r), u.d();
      },
    };
  }

  function Te(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("rect")),
          M(n, "x", "3"),
          M(n, "y", "3"),
          M(n, "width", "18"),
          M(n, "height", "18"),
          M(n, "rx", "2"),
          M(n, "ry", "2"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "class", "text-custom-mg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Ye(e) {
    let t, n, r;
    return {
      c() {
        (t = k("svg")),
          (n = k("line")),
          (r = k("line")),
          M(n, "x1", "18"),
          M(n, "y1", "6"),
          M(n, "x2", "6"),
          M(n, "y2", "18"),
          M(r, "x1", "6"),
          M(r, "y1", "6"),
          M(r, "x2", "18"),
          M(r, "y2", "18"),
          M(t, "class", "text-custom-negative"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, s) {
        g(e, t, s), p(t, n), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Ce(e) {
    let t,
      n,
      r = e[0][e[7]].answer + "";
    return {
      c() {
        (t = w("div")), (n = _(r)), M(t, "class", "text-white text-sm");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      p(e, t) {
        1 & t && r !== (r = e[0][e[7]].answer + "") && $(n, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Oe(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.textContent = "SKIPPED"),
          M(n, "class", "text-custom-mg tracking-widest font-semibold");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Pe(e) {
    let t, n;

    function r(e, t) {
      return e[7] < e[0].length ? De : $e;
    }
    let s = r(e),
      i = s(e);
    return {
      c() {
        (t = w("div")),
          i.c(),
          (n = x()),
          M(
            t,
            "class",
            "p-2 mb-2 border border-custom-mg flex items-center last:mb-0"
          ),
          Y(t, "border-custom-line", e[7] == e[0].length);
      },
      m(e, r) {
        g(e, t, r), i.m(t, null), p(t, n);
      },
      p(e, o) {
        s === (s = r(e)) && i
          ? i.p(e, o)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(t, n))),
          1 & o && Y(t, "border-custom-line", e[7] == e[0].length);
      },
      d(e) {
        e && y(t), i.d();
      },
    };
  }

  function Ae(e) {
    let t, n, r;
    return {
      c() {
        (t = w("img")),
          l(t.src, (n = e[1].img)) || M(t, "src", n),
          M(t, "class", "h-14 w-14 "),
          M(t, "alt", (r = e[1].artist + " - " + e[1].title));
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, s) {
        2 & s && !l(t.src, (n = e[1].img)) && M(t, "src", n),
          2 & s &&
            r !== (r = e[1].artist + " - " + e[1].title) &&
            M(t, "alt", r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Le(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[1].artist + "",
      a = e[1].title + "";
    return {
      c() {
        (t = w("p")),
          (n = _(o)),
          (r = x()),
          (s = w("p")),
          (i = _(a)),
          M(t, "class", ""),
          M(s, "class", "text-sm ");
      },
      m(e, o) {
        g(e, t, o), p(t, n), g(e, r, o), g(e, s, o), p(s, i);
      },
      p(e, t) {
        2 & t && o !== (o = e[1].artist + "") && $(n, o),
          2 & t && a !== (a = e[1].title + "") && $(i, a);
      },
      d(e) {
        e && y(t), e && y(r), e && y(s);
      },
    };
  }

  function Ne(t) {
    let n;

    function r(e, t) {
      return e[2].hasFinished ? Me : Se;
    }
    let s = r(t),
      i = s(t);
    return {
      c() {
        i.c(), (n = b());
      },
      m(e, t) {
        i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = r(e)) && i
          ? i.p(e, t)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i.d(e), e && y(n);
      },
    };
  }

  function He(e, t, n) {
    let r,
      { userGuesses: s } = t,
      { maxAttempts: i } = t,
      { currentHeardle: o } = t,
      { todaysGame: a } = t;
    return (
      (e.$$set = (e) => {
        "userGuesses" in e && n(0, (s = e.userGuesses)),
          "maxAttempts" in e && n(4, (i = e.maxAttempts)),
          "currentHeardle" in e && n(1, (o = e.currentHeardle)),
          "todaysGame" in e && n(2, (a = e.todaysGame));
      }),
      (e.$$.update = () => {
        21 & e.$$.dirty &&
          n(3, (r = a.hasFinished && a.gotCorrect ? s.length : i));
      }),
      [s, o, a, r, i]
    );
  }
  class Ie extends se {
    constructor(e) {
      super(),
        re(this, e, He, Ne, i, {
          userGuesses: 0,
          maxAttempts: 4,
          currentHeardle: 1,
          todaysGame: 2,
        });
    }
  }

  function We(t) {
    let n, r;
    return {
      c() {
        (n = w("div")),
          (r = w("i")),
          M(r, "class", "gg-loadbar-sound svelte-15swa4o"),
          Y(r, "musicIsPlaying", t[0]),
          M(n, "class", "scale-150 transform relative");
      },
      m(e, t) {
        g(e, n, t), p(n, r);
      },
      p(e, [t]) {
        1 & t && Y(r, "musicIsPlaying", e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Re(e, t, n) {
    let { musicIsPlaying: r } = t;
    return (
      (e.$$set = (e) => {
        "musicIsPlaying" in e && n(0, (r = e.musicIsPlaying));
      }),
      [r]
    );
  }
  class Fe extends se {
    constructor(e) {
      super(),
        re(this, e, Re, We, i, {
          musicIsPlaying: 0,
        });
    }
  }

  function Ge(t) {
    let n;
    return {
      c() {
        n = w("div");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class Ee extends se {
    constructor(e) {
      super(), re(this, e, null, Ge, i, {});
    }
  }
  const { document: je } = X;

  function Be(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function ze(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function Ue(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function Ve(e) {
    let t, n, r, s;
    const i = [Ze, Ke],
      o = [];

    function a(e, t) {
      return e[13] ? 0 : 1;
    }
    return (
      (n = a(e)),
      (r = o[n] = i[n](e)),
      {
        c() {
          (t = w("div")),
            r.c(),
            M(t, "class", "text-sm text-center text-custom-line p-6");
        },
        m(e, r) {
          g(e, t, r), o[n].m(t, null), (s = !0);
        },
        p(e, s) {
          let l = n;
          (n = a(e)),
            n === l
              ? o[n].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (r = o[n]),
                r ? r.p(e, s) : ((r = o[n] = i[n](e)), r.c()),
                Z(r, 1),
                r.m(t, null));
        },
        i(e) {
          s || (Z(r), (s = !0));
        },
        o(e) {
          q(r), (s = !1);
        },
        d(e) {
          e && y(t), o[n].d();
        },
      }
    );
  }

  function Je(e) {
    let t, n, r, s;
    const i = [Qe, Xe],
      o = [];

    function a(e, t) {
      return e[9] ? 1 : 0;
    }
    return (
      (t = a(e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = b());
        },
        m(e, n) {
          o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, s) {
          let l = t;
          (t = a(e)),
            t === l
              ? o[t].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                Z(n, 1),
                n.m(r.parentNode, r));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          o[t].d(e), e && y(r);
        },
      }
    );
  }

  function Ke(t) {
    let n, r, s, i;
    return (
      (n = new Ee({})),
      {
        c() {
          Q(n.$$.fragment),
            (r = x()),
            (s = w("p")),
            (s.textContent = "loading player");
        },
        m(e, t) {
          ee(n, e, t), g(e, r, t), g(e, s, t), (i = !0);
        },
        p: e,
        i(e) {
          i || (Z(n.$$.fragment, e), (i = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (i = !1);
        },
        d(e) {
          te(n, e), e && y(r), e && y(s);
        },
      }
    );
  }

  function Ze(e) {
    let t, n, r, s, i;
    return (
      (s = new ae({
        props: {
          $$slots: {
            default: [qe],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      s.$on("click", e[22]),
      {
        c() {
          (t = w("p")),
            (t.textContent =
              "Mamma Mia! There was an error loading the player. Please reload and try again."),
            (n = x()),
            (r = w("div")),
            Q(s.$$.fragment),
            M(t, "class", "mb-3"),
            M(r, "class", "flex justify-center");
        },
        m(e, o) {
          g(e, t, o), g(e, n, o), g(e, r, o), ee(s, r, null), (i = !0);
        },
        p(e, t) {
          const n = {};
          128 & t[1] &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            s.$set(n);
        },
        i(e) {
          i || (Z(s.$$.fragment, e), (i = !0));
        },
        o(e) {
          q(s.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && y(t), e && y(n), e && y(r), te(s);
        },
      }
    );
  }

  function qe(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(n, "d", "M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Xe(t) {
    let n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c = t[4].gameIsActive && et(t);
    return {
      c() {
        (n = w("div")),
          (r = w("div")),
          (s = w("div")),
          (i = w("div")),
          (i.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"></path></svg>'),
          (o = x()),
          (a = w("div")),
          (l = w("p")),
          (l.textContent =
            "Oh no! Seems like today's track is unavailable on\n                            SoundCloud in your location"),
          (u = x()),
          c && c.c(),
          M(i, "class", "mr-3"),
          M(l, "class", "text-sm "),
          M(s, "class", "flex items-center"),
          M(r, "class", "p-3 mb-3 bg-custom-mg rounded-sm"),
          M(n, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col");
      },
      m(e, t) {
        g(e, n, t),
          p(n, r),
          p(r, s),
          p(s, i),
          p(s, o),
          p(s, a),
          p(a, l),
          p(a, u),
          c && c.m(a, null);
      },
      p(e, t) {
        e[4].gameIsActive
          ? c
            ? c.p(e, t)
            : ((c = et(e)), c.c(), c.m(a, null))
          : c && (c.d(1), (c = null));
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), c && c.d();
      },
    };
  }

  function Qe(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      v,
      k,
      b,
      volumeControl,
      S,
      D,
      Y,
      C,
      O,
      P,
      A = mt(e[11]) + "",
      L =
        mt(
          e[15]
            ? e[4].isPrime
              ? e[8].slice(-1)[0]
              : e[2].maxAttempts * e[2].attemptInterval
            : e[3]
        ) + "",
      N = !e[12] && 1 == e[0] && tt();
    function H(e, t) {
      return e[4].isPrime ? rt : nt;
    }
    let I = H(e),
      W = I(e);
    return (
      (D = new ae({
        props: {
          $$slots: {
            default: [ht],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      D.$on("click", function () {
        s(e[18] ? e[6] : e[5]) && (e[18] ? e[6] : e[5]).apply(this, arguments);
      }),
      {
        c() {
          N && N.c(),
            (t = x()),
            (n = w("div")),
            (r = w("div")),
            (i = w("div")),
            (o = w("div")),
            (a = w("div")),
            (l = x()),
            W.c(),
            (u = x()),
            (c = w("div")),
            (d = w("div")),
            (h = w("div")),
            (f = w("div")),
            (m = w("div")),
            (v = w("div")),
            (k = _(A)),
            (b = x()),
            (volumeDiv = w("div")),
            (volumeIcon = w("button")),
            M(volumeIcon, "style", "margin-right: 15px; border: none;"),
            (volumeSvg = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            )),
            M(volumeSvg, "viewBox", "0 0 24 24"),
            M(volumeSvg, "width", "24"),
            M(volumeSvg, "height", "24"),
            (volumeSvg.innerHTML =
              "<path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' style='fill: white;'></path>"),
            M(volumeSvg, "class", "volume-icon"),
            M(volumeDiv, "class", "item2"),
            M(volumeDiv, "style", "display: flex; align-items: center;"),
            (volumeControl = w("div")),
            M(volumeControl, "class", "volume-control"),
            (S = w("div")),
            Q(D.$$.fragment),
            (Y = x()),
            (C = w("div")),
            (O = _(L)),
            M(a, "class", "h-full absolute bg-custom-positive"),
            T(a, "width", e[10] + "%"),
            M(o, "class", "h-full absolute bg-custom-mg overflow-hidden"),
            T(o, "width", (e[15] ? e[16] : "100") + "%"),
            M(i, "class", "h-3 w-full relative overflow-hidden "),
            M(r, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col"),
            M(n, "class", "border-t border-custom-line"),
            M(m, "class", "flex items-center item1"),
            M(S, "class", "flex justify-center items-center p-1 item3"),
            M(f, "class", "container"),
            M(C, "class", "item4 "),
            M(h, "class", "px-3 "),
            M(d, "class", "max-w-screen-sm w-full mx-auto flex-col"),
            M(c, "class", "border-t border-custom-line");
        },
        m(e, s) {
          N && N.m(e, s),
            g(e, t, s),
            g(e, n, s),
            p(n, r),
            p(r, i),
            p(i, o),
            p(o, a),
            p(i, l),
            W.m(i, null),
            g(e, u, s),
            g(e, c, s),
            p(c, d),
            p(d, h),
            p(h, f),
            p(f, m),
            p(m, v);
          if (!/Mobi/i.test(window.navigator.userAgent)) {
            f.classList.add("with-volume");
            p(f, volumeDiv), p(volumeDiv, volumeIcon), p(volumeIcon, volumeSvg);

            // Create the slider container
            const sliderContainer = document.createElement("div");
            sliderContainer.className = "volume-control";
            p(volumeDiv, sliderContainer);

            // Create the slider
            const slider = document.createElement("div");
            slider.className = "slider";
            slider.setAttribute("role", "slider");
            slider.setAttribute("aria-label", "Volume");
            slider.setAttribute("aria-valuemin", "0");
            slider.setAttribute("aria-valuemax", "100");
            slider.setAttribute("aria-valuenow", "50");
            slider.setAttribute("tabindex", "0");
            p(sliderContainer, slider);

            // Create the slider fill
            const sliderFill = document.createElement("div");
            sliderFill.className = "slider-fill";
            p(slider, sliderFill);

            // Create the slider thumb
            const sliderThumb = document.createElement("div");
            sliderThumb.className = "slider-thumb";
            p(slider, sliderThumb);

            let isDragging = false;

            const startDragging = () => {
              isDragging = true;
              volumeIcon.style.pointerEvents = "none";
            };

            const stopDragging = () => {
              isDragging = false;
              volumeIcon.style.pointerEvents = "auto";
            };

            const updateSlider = (clientX) => {
              const rect = slider.getBoundingClientRect();
              let value = Math.max(
                0,
                Math.min(100, ((clientX - rect.left) / rect.width) * 100)
              );
              value = Math.round(value);
              sliderFill.style.width = `${value}%`;
              sliderThumb.style.left = `${value}%`;
              slider.setAttribute("aria-valuenow", value);

              // Update volume for SoundCloud widget
              if (window.SC && window.SC.Widget) {
                const widget = SC.Widget(document.querySelector("iframe"));
                widget.setVolume(value);
              }

              // Update mute icon
              updateMuteIcon(value);
            };

            const updateMuteIcon = (value) => {
              const path = volumeSvg.querySelector("path");
              let line = volumeSvg.querySelector("line");

              if (value === 0) {
                if (!line) {
                  line = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                  );
                  line.setAttribute("x1", "1");
                  line.setAttribute("y1", "1");
                  line.setAttribute("x2", "23");
                  line.setAttribute("y2", "23");
                  line.setAttribute("style", "stroke: white; stroke-width: 2");
                  volumeSvg.appendChild(line);
                }
              } else {
                if (line) {
                  volumeSvg.removeChild(line);
                }
              }

              // Update the path (if needed)
              path.setAttribute(
                "d",
                "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
              );
              path.setAttribute("style", "fill: white");
            };

            slider.addEventListener("mousedown", (e) => {
              if (isDragging) {
                e.preventDefault();
                e.stopPropagation();
              }
              isDragging = true;
              updateSlider(e.clientX);
              e.preventDefault(); // Prevent text selection
            });

            document.addEventListener("mousemove", (e) => {
              if (isDragging) {
                updateSlider(e.clientX);
                e.preventDefault(); // Prevent text selection
              }
            });

            document.addEventListener("mouseup", () => {
              isDragging = false;
            });

            slider.addEventListener("click", (e) => {
              updateSlider(e.clientX);
            });

            slider.addEventListener("keydown", (e) => {
              let value = parseInt(slider.getAttribute("aria-valuenow"));
              switch (e.key) {
                case "ArrowRight":
                case "ArrowUp":
                  value = Math.min(100, value + 5);
                  break;
                case "ArrowLeft":
                case "ArrowDown":
                  value = Math.max(0, value - 5);
                  break;
                case "Home":
                  value = 0;
                  break;
                case "End":
                  value = 100;
                  break;
                default:
                  return;
              }
              updateSlider(
                slider.getBoundingClientRect().left +
                  (value / 100) * slider.offsetWidth
              );
              e.preventDefault();
            });

            volumeIcon.addEventListener("click", () => {
              const currentValue = parseInt(
                slider.getAttribute("aria-valuenow")
              );
              updateSlider(
                slider.getBoundingClientRect().left +
                  ((currentValue === 0 ? 50 : 0) / 100) * slider.offsetWidth
              );
            });

            // Initialize slider
            updateSlider(
              slider.getBoundingClientRect().left +
                (50 / 100) * slider.offsetWidth
            );
          } else {
            f.classList.add("without-volume");
          }
          p(v, k),
            p(f, b),
            p(f, S),
            ee(D, S, null),
            p(f, Y),
            p(f, C),
            p(C, O),
            (P = !0);
        },
        p(n, r) {
          (e = n)[12] || 1 != e[0]
            ? N && (N.d(1), (N = null))
            : N || ((N = tt()), N.c(), N.m(t.parentNode, t)),
            (!P || 1024 & r[0]) && T(a, "width", e[10] + "%"),
            (!P || 98304 & r[0]) &&
              T(o, "width", (e[15] ? e[16] : "100") + "%"),
            I === (I = H(e)) && W
              ? W.p(e, r)
              : (W.d(1), (W = I(e)), W && (W.c(), W.m(i, null))),
            (!P || 2048 & r[0]) && A !== (A = mt(e[11]) + "") && $(k, A);
          const s = {};
          (262144 & r[0]) | (128 & r[1]) &&
            (s.$$scope = {
              dirty: r,
              ctx: e,
            }),
            D.$set(s),
            (!P || 33052 & r[0]) &&
              L !==
                (L =
                  mt(
                    e[15]
                      ? e[4].isPrime
                        ? e[8].slice(-1)[0]
                        : e[2].maxAttempts * e[2].attemptInterval
                      : e[3]
                  ) + "") &&
              $(O, L);
        },
        i(e) {
          P || (Z(D.$$.fragment, e), (P = !0));
        },
        o(e) {
          q(D.$$.fragment, e), (P = !1);
        },
        d(e) {
          N && N.d(e), e && y(t), e && y(n), W.d(), e && y(u), e && y(c), te(D);
        },
      }
    );
  }

  function et(e) {
    let t, n, r, s, i, o;
    return {
      c() {
        (t = w("p")),
          (n = _("We're really sorry. The answer is ")),
          (r = w("a")),
          (s = _("here")),
          (o = _(
            ", though, if you want to maintain your streak.\n                                We won't tell..."
          )),
          M(r, "href", (i = e[1].url)),
          M(t, "class", "text-xs text-custom-line pt-1");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(r, s), p(t, o);
      },
      p(e, t) {
        2 & t[0] && i !== (i = e[1].url) && M(r, "href", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function tt(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          (t.innerHTML =
            '<p><a href="https://docs.google.com/spreadsheets/d/12vCtRU4cKzgTZk60kVveHRxQvdC2u0yS5pEISWeDlZo/edit#gid=0">Click Here or on the top right for the full list of Mario Heardle songs.</p> \n\n <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>'),
          M(
            t,
            "class",
            "text-center p-3 flex flex-col items-center text-sm text-custom-line"
          );
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function nt(e) {
    let t;

    function n(e, t) {
      return e[15] ? st : it;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        (t = w("div")),
          s.c(),
          M(t, "class", "flex w-full h-full absolute justify-between");
      },
      m(e, n) {
        g(e, t, n), s.m(t, null);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t, null)));
      },
      d(e) {
        e && y(t), s.d();
      },
    };
  }

  function rt(e) {
    let t,
      n = e[15] && lt(e);
    return {
      c() {
        (t = w("div")), n && n.c(), M(t, "class", "w-full h-full absolute");
      },
      m(e, r) {
        g(e, t, r), n && n.m(t, null);
      },
      p(e, r) {
        e[15]
          ? n
            ? n.p(e, r)
            : ((n = lt(e)), n.c(), n.m(t, null))
          : n && (n.d(1), (n = null));
      },
      d(e) {
        e && y(t), n && n.d();
      },
    };
  }

  function st(e) {
    let t,
      n = Array(e[2].maxAttempts + 1),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = ot(Be(e, n, t));
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c();
        t = b();
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n);
        g(e, t, n);
      },
      p(e, s) {
        if (4 & s[0]) {
          const s = n.length;
          let i;
          for (n = Array(e[2].maxAttempts + 1), i = s; i < n.length; i += 1)
            Be(e, n, i),
              r[i] || ((r[i] = ot()), r[i].c(), r[i].m(t.parentNode, t));
          for (i = n.length; i < s; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        v(r, e), e && y(t);
      },
    };
  }

  function it(e) {
    let t,
      n = Array(Math.floor(e[3] / e[2].attemptInterval)),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = at(ze(e, n, t));
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c();
        t = b();
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n);
        g(e, t, n);
      },
      p(e, s) {
        if (12 & s[0]) {
          const s = n.length;
          let i;
          for (
            n = Array(Math.floor(e[3] / e[2].attemptInterval)), i = s;
            i < n.length;
            i += 1
          )
            ze(e, n, i),
              r[i] || ((r[i] = at()), r[i].c(), r[i].m(t.parentNode, t));
          for (i = n.length; i < s; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        v(r, e), e && y(t);
      },
    };
  }

  function ot(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "bg-custom-bg w-px h-full");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function at(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "bg-custom-bg w-px h-full");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function lt(e) {
    let t,
      n,
      r,
      s,
      i = e[8],
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = ut(Ue(e, i, t));
    return {
      c() {
        (t = w("div")), (n = x());
        for (let e = 0; e < o.length; e += 1) o[e].c();
        (r = x()),
          (s = w("div")),
          M(t, "class", "bg-custom-line w-px h-full absolute right-0"),
          M(s, "class", "bg-custom-mg w-px h-full absolute right-0");
      },
      m(e, i) {
        g(e, t, i), g(e, n, i);
        for (let t = 0; t < o.length; t += 1) o[t].m(e, i);
        g(e, r, i), g(e, s, i);
      },
      p(e, t) {
        if (384 & t[0]) {
          let n;
          for (i = e[8], n = 0; n < i.length; n += 1) {
            const s = Ue(e, i, n);
            o[n]
              ? o[n].p(s, t)
              : ((o[n] = ut(s)), o[n].c(), o[n].m(r.parentNode, r));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      d(e) {
        e && y(t), e && y(n), v(o, e), e && y(r), e && y(s);
      },
    };
  }

  function ut(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          M(t, "class", "w-px h-full absolute"),
          T(t, "left", (e[8][e[35]] / e[8].slice(-1)[0]) * 100 + "%"),
          Y(t, "bg-custom-bg", e[35] < e[7] - 1),
          Y(t, "bg-custom-mg", e[35] > e[7] - 1),
          Y(t, "bg-custom-line", e[35] == e[7] - 1);
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, n) {
        256 & n[0] &&
          T(t, "left", (e[8][e[35]] / e[8].slice(-1)[0]) * 100 + "%"),
          128 & n[0] && Y(t, "bg-custom-bg", e[35] < e[7] - 1),
          128 & n[0] && Y(t, "bg-custom-mg", e[35] > e[7] - 1),
          128 & n[0] && Y(t, "bg-custom-line", e[35] == e[7] - 1);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ct(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'),
          M(n, "class", "ml-1 relative z-10");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function dt(e) {
    let t, n, r;
    return (
      (n = new Fe({
        props: {
          musicIsPlaying: e[18],
        },
      })),
      {
        c() {
          (t = w("div")), Q(n.$$.fragment), M(t, "class", "relative z-10");
        },
        m(e, s) {
          g(e, t, s), ee(n, t, null), (r = !0);
        },
        p(e, t) {
          const r = {};
          262144 & t[0] && (r.musicIsPlaying = e[18]), n.$set(r);
        },
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          e && y(t), te(n);
        },
      }
    );
  }

  function ht(e) {
    let t, n, r, s;
    const i = [dt, ct],
      o = [];

    function a(e, t) {
      return e[18] ? 0 : 1;
    }
    return (
      (n = a(e)),
      (r = o[n] = i[n](e)),
      {
        c() {
          (t = w("div")),
            r.c(),
            M(
              t,
              "class",
              "flex justify-center items-center text-custom-fg h-14 w-14 border-2 rounded-full relative overflow-hidden"
            );
        },
        m(e, r) {
          g(e, t, r), o[n].m(t, null), (s = !0);
        },
        p(e, s) {
          let l = n;
          (n = a(e)),
            n === l
              ? o[n].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (r = o[n]),
                r ? r.p(e, s) : ((r = o[n] = i[n](e)), r.c()),
                Z(r, 1),
                r.m(t, null));
        },
        i(e) {
          s || (Z(r), (s = !0));
        },
        o(e) {
          q(r), (s = !1);
        },
        d(e) {
          e && y(t), o[n].d();
        },
      }
    );
  }

  function ft(e) {
    let t, n, r, s, i, o, a, u, c, d, h;
    const f = [Je, Ve],
      m = [];

    function v(e, t) {
      return e[17] ? 0 : 1;
    }
    return (
      (s = v(e)),
      (i = m[s] = f[s](e)),
      {
        c() {
          (t = w("script")),
            (r = x()),
            i.c(),
            (o = x()),
            (a = w("div")),
            (u = w("div")),
            l(t.src, (n = "https://w.soundcloud.com/player/api.js")) ||
              M(t, "src", "https://w.soundcloud.com/player/api.js"),
            M(a, "class", "hidden");
        },
        m(n, i) {
          p(je.head, t),
            g(n, r, i),
            m[s].m(n, i),
            g(n, o, i),
            g(n, a, i),
            p(a, u),
            e[23](u),
            (c = !0),
            d || ((h = S(t, "load", e[19])), (d = !0));
        },
        p(e, t) {
          let n = s;
          (s = v(e)),
            s === n
              ? m[s].p(e, t)
              : (J(),
                q(m[n], 1, 1, () => {
                  m[n] = null;
                }),
                K(),
                (i = m[s]),
                i ? i.p(e, t) : ((i = m[s] = f[s](e)), i.c()),
                Z(i, 1),
                i.m(o.parentNode, o));
        },
        i(e) {
          c || (Z(i), (c = !0));
        },
        o(e) {
          q(i), (c = !1);
        },
        d(n) {
          y(t),
            n && y(r),
            m[s].d(n),
            n && y(o),
            n && y(a),
            e[23](null),
            (d = !1),
            h();
        },
      }
    );
  }

  function mt(e) {
    var t = Math.floor(e / 6e4),
      n = ((e % 6e4) / 1e3).toFixed(0);
    return t + ":" + (n < 10 ? "0" : "") + n;
  }

  function pt(e, t, n) {
    let r, s, i, o, a, l, u;
    const c = A();
    let { currentAttempt: d } = t,
      { currentHeardle: h } = t,
      { config: f } = t,
      { trackDuration: m = 0 } = t,
      { gameState: p } = t,
      g = !1;
    var y;
    let v = 0,
      w = 0,
      k = !1,
      _ = !1,
      x = !1,
      b = !1,
      S = !1;
    const M = () => {
      y.seekTo(0), y.pause();
    };

    function $(e) {
      c("updatePlayerState", {
        musicIsPlaying: e,
      });
    }
    let D;

    function T() {
      (y = SC.Widget("soundcloud" + h.id)).bind(
        SC.Widget.Events.READY,
        function () {
          y.getCurrentSound(function (e) {
            "BLOCK" === e.policy && n(9, (g = !0)),
              c("updateSong", {
                currentSong: e,
              });
          }),
            y.bind(SC.Widget.Events.PAUSE, function () {
              $(!1);
            }),
            y.bind(SC.Widget.Events.PLAY, function () {
              b ||
                (pe("startGame", {
                  name: "startGame",
                }),
                pe("startGame#" + h.id, {
                  name: "startGame",
                }),
                (b = !0)),
                $(!0),
                n(12, (x = !0));
            }),
            y.bind(SC.Widget.Events.PLAY_PROGRESS, function (e) {
              n(11, (w = e.currentPosition)),
                1 == s
                  ? p.isPrime
                    ? (n(10, (v = (w / u) * 100)), w > u && M())
                    : (n(10, (v = (w / (d * f.attemptInterval)) * 100)),
                      w > d * f.attemptInterval && M())
                  : (n(10, (v = (w / m) * 100)), w > m && M());
            });
        }
      );
    }
    P(() => {
      const e = document.createElement("iframe");
      (e.name = h.id),
        (e.id = "soundcloud" + h.id),
        (e.allow = "autoplay"),
        (e.height = 0),
        (e.src =
          "https://w.soundcloud.com/player/?url=" + h.url + "&cache=" + h.id),
        D.appendChild(e),
        (_ = !0),
        k &&
          (setTimeout(() => {
            n(13, (S = !0));
          }, 6e3),
          T());
    });
    return (
      (e.$$set = (e) => {
        "currentAttempt" in e && n(0, (d = e.currentAttempt)),
          "currentHeardle" in e && n(1, (h = e.currentHeardle)),
          "config" in e && n(2, (f = e.config)),
          "trackDuration" in e && n(3, (m = e.trackDuration)),
          "gameState" in e && n(4, (p = e.gameState));
      }),
      (e.$$.update = () => {
        16 & e.$$.dirty[0] && n(18, (r = p.musicIsPlaying)),
          16 & e.$$.dirty[0] && n(15, (s = p.gameIsActive)),
          16 & e.$$.dirty[0] && n(17, (i = p.playerIsReady)),
          1 & e.$$.dirty[0] && n(7, (o = d)),
          4 & e.$$.dirty[0] && n(8, (a = f.attemptIntervalAlt)),
          405 & e.$$.dirty[0] &&
            n(
              16,
              (l = p.isPrime
                ? (a[o - 1] / a.slice(-1)[0]) * 100
                : (d / f.maxAttempts) * 100)
            ),
          384 & e.$$.dirty[0] && (u = a[o - 1]);
      }),
      [
        d,
        h,
        f,
        m,
        p,
        () => {
          y.seekTo(0), y.play();
        },
        M,
        o,
        a,
        g,
        v,
        w,
        x,
        S,
        D,
        s,
        l,
        i,
        r,
        function () {
          (k = !0),
            _ &&
              (setTimeout(() => {
                n(13, (S = !0));
              }, 6e3),
              T());
        },
        () => {
          y.toggle();
        },
        () => {
          y.seekTo(0), y.play();
        },
        () => {
          window.location.reload();
        },
        function (e) {
          H[e ? "unshift" : "push"](() => {
            (D = e), n(14, D);
          });
        },
      ]
    );
  }
  class gt extends se {
    constructor(e) {
      super(),
        re(
          this,
          e,
          pt,
          ft,
          i,
          {
            currentAttempt: 0,
            currentHeardle: 1,
            config: 2,
            trackDuration: 3,
            gameState: 4,
            togglePlayState: 20,
            scPlay: 5,
            scPause: 6,
            resetAndPlay: 21,
          },
          null,
          [-1, -1]
        );
    }
    get togglePlayState() {
      return this.$$.ctx[20];
    }
    get scPlay() {
      return this.$$.ctx[5];
    }
    get scPause() {
      return this.$$.ctx[6];
    }
    get resetAndPlay() {
      return this.$$.ctx[21];
    }
  }
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;

  function yt(e) {
    var t = {
      exports: {},
    };
    return e(t, t.exports), t.exports;
  }

  function vt(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.'
    );
  }
  var wt = yt(function (e, t) {
      var n;
      (n = function () {
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }

        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var s = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(s), !0).forEach(function (e) {
                  r(t, e, s[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
              : e(Object(s)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(s, e)
                  );
                });
          }
          return t;
        }

        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }

        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }

        function s(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            i(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }

        function i(e, t) {
          if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? o(e, t)
                : void 0
            );
          }
        }

        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var a = function (e) {
            return "string" == typeof e ? document.querySelector(e) : e();
          },
          l = function (e, t) {
            var n = "string" == typeof e ? document.createElement(e) : e;
            for (var r in t) {
              var s = t[r];
              if ("inside" === r) s.append(n);
              else if ("dest" === r) a(s[0]).insertAdjacentElement(s[1], n);
              else if ("around" === r) {
                var i = s;
                i.parentNode.insertBefore(n, i),
                  n.append(i),
                  null != i.getAttribute("autofocus") && i.focus();
              } else r in n ? (n[r] = s) : n.setAttribute(r, s);
            }
            return n;
          },
          u = function (e, t) {
            return (
              (e = e.toString().toLowerCase()),
              t
                ? e
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .normalize("NFC")
                : e
            );
          },
          c = function (e, n) {
            return l(
              "mark",
              t(
                {
                  innerHTML: e,
                },
                "string" == typeof n && {
                  class: n,
                }
              )
            ).outerHTML;
          },
          d = function (e, t) {
            t.input.dispatchEvent(
              new CustomEvent(e, {
                bubbles: !0,
                detail: t.feedback,
                cancelable: !0,
              })
            );
          },
          h = function (e, t, n) {
            var r = n || {},
              s = r.mode,
              i = r.diacritics,
              o = r.highlight,
              a = u(t, i);
            if (((t = t.toString()), (e = u(e, i)), "loose" === s)) {
              var l = (e = e.replace(/ /g, "")).length,
                d = 0,
                h = Array.from(t)
                  .map(function (t, n) {
                    return (
                      d < l && a[n] === e[d] && ((t = o ? c(t, o) : t), d++), t
                    );
                  })
                  .join("");
              if (d === l) return h;
            } else {
              var f = a.indexOf(e);
              if (~f)
                return (
                  (e = t.substring(f, f + e.length)),
                  o ? t.replace(e, c(e, o)) : t
                );
            }
          },
          f = function (e, t) {
            return new Promise(function (n, r) {
              var s;
              return (s = e.data).cache && s.store
                ? n()
                : new Promise(function (e, n) {
                    return "function" == typeof s.src
                      ? s.src(t).then(e, n)
                      : e(s.src);
                  }).then(function (t) {
                    try {
                      return (e.feedback = s.store = t), d("response", e), n();
                    } catch (e) {
                      return r(e);
                    }
                  }, r);
            });
          },
          m = function (e, t) {
            var n = t.data,
              r = t.searchEngine,
              s = [];
            n.store.forEach(function (o, a) {
              var l = function (n) {
                var i = n ? o[n] : o,
                  a =
                    "function" == typeof r
                      ? r(e, i)
                      : h(e, i, {
                          mode: r,
                          diacritics: t.diacritics,
                          highlight: t.resultItem.highlight,
                        });
                if (a) {
                  var l = {
                    match: a,
                    value: o,
                  };
                  n && (l.key = n), s.push(l);
                }
              };
              if (n.keys) {
                var u,
                  c = (function (e, t) {
                    var n =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!n) {
                      if (Array.isArray(e) || (n = i(e))) {
                        n && (e = n);
                        var r = 0,
                          s = function () {};
                        return {
                          s: s,
                          n: function () {
                            return r >= e.length
                              ? {
                                  done: !0,
                                }
                              : {
                                  done: !1,
                                  value: e[r++],
                                };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: s,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var o,
                      a = !0,
                      l = !1;
                    return {
                      s: function () {
                        n = n.call(e);
                      },
                      n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (l = !0), (o = e);
                      },
                      f: function () {
                        try {
                          a || null == n.return || n.return();
                        } finally {
                          if (l) throw o;
                        }
                      },
                    };
                  })(n.keys);
                try {
                  for (c.s(); !(u = c.n()).done; ) l(u.value);
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
              } else l();
            }),
              n.filter && (s = n.filter(s));
            var o = s.slice(0, t.resultsList.maxResults);
            (t.feedback = {
              query: e,
              matches: s,
              results: o,
            }),
              d("results", t);
          },
          p = "aria-expanded",
          g = "aria-activedescendant",
          y = "aria-selected",
          v = function (e, n) {
            e.feedback.selection = t(
              {
                index: n,
              },
              e.feedback.results[n]
            );
          },
          w = function (e) {
            e.isOpen ||
              ((e.wrapper || e.input).setAttribute(p, !0),
              e.list.removeAttribute("hidden"),
              (e.isOpen = !0),
              d("open", e));
          },
          k = function (e) {
            e.isOpen &&
              ((e.wrapper || e.input).setAttribute(p, !1),
              e.input.setAttribute(g, ""),
              e.list.setAttribute("hidden", ""),
              (e.isOpen = !1),
              d("close", e));
          },
          _ = function (e, t) {
            var n = t.resultItem,
              r = t.list.getElementsByTagName(n.tag),
              i = !!n.selected && n.selected.split(" ");
            if (t.isOpen && r.length) {
              var o,
                a,
                l = t.cursor;
              e >= r.length && (e = 0),
                e < 0 && (e = r.length - 1),
                (t.cursor = e),
                l > -1 &&
                  (r[l].removeAttribute(y),
                  i && (a = r[l].classList).remove.apply(a, s(i))),
                r[e].setAttribute(y, !0),
                i && (o = r[e].classList).add.apply(o, s(i)),
                t.input.setAttribute(g, r[t.cursor].id),
                (t.list.scrollTop =
                  r[e].offsetTop - t.list.clientHeight + r[e].clientHeight + 5),
                (t.feedback.cursor = t.cursor),
                v(t, e),
                d("navigate", t);
            }
          },
          x = function (e) {
            _(e.cursor + 1, e);
          },
          b = function (e) {
            _(e.cursor - 1, e);
          },
          S = function (e, t, n) {
            (n = n >= 0 ? n : e.cursor) < 0 ||
              ((e.feedback.event = t), v(e, n), d("selection", e), k(e));
          };

        function M(e, n) {
          var r = this;
          return new Promise(function (s, i) {
            var o, a;
            return (
              (o =
                n ||
                ((a = e.input) instanceof HTMLInputElement ||
                a instanceof HTMLTextAreaElement
                  ? a.value
                  : a.innerHTML)),
              (function (e, t, n) {
                return t ? t(e) : e.length >= n;
              })((o = e.query ? e.query(o) : o), e.trigger, e.threshold)
                ? f(e, o).then(function (n) {
                    try {
                      return e.feedback instanceof Error
                        ? s()
                        : (m(o, e),
                          e.resultsList &&
                            (function (e) {
                              var n = e.resultsList,
                                r = e.list,
                                s = e.resultItem,
                                i = e.feedback,
                                o = i.matches,
                                a = i.results;
                              if (
                                ((e.cursor = -1),
                                (r.innerHTML = ""),
                                o.length || n.noResults)
                              ) {
                                var u = new DocumentFragment();
                                a.forEach(function (e, n) {
                                  var r = l(
                                    s.tag,
                                    t(
                                      {
                                        id: "".concat(s.id, "_").concat(n),
                                        role: "option",
                                        innerHTML: e.match,
                                        inside: u,
                                      },
                                      s.class && {
                                        class: s.class,
                                      }
                                    )
                                  );
                                  s.element && s.element(r, e);
                                }),
                                  r.append(u),
                                  n.element && n.element(r, i),
                                  w(e);
                              } else k(e);
                            })(e),
                          u.call(r));
                    } catch (e) {
                      return i(e);
                    }
                  }, i)
                : (k(e), u.call(r))
            );

            function u() {
              return s();
            }
          });
        }
        var $ = function (e, t) {
          for (var n in e) for (var r in e[n]) t(n, r);
        };

        function D(e) {
          var n = this;
          return new Promise(function (r, s) {
            var i, o, a;
            if (
              ((i = e.placeHolder),
              (a = {
                role: "combobox",
                "aria-owns": (o = e.resultsList).id,
                "aria-haspopup": !0,
                "aria-expanded": !1,
              }),
              l(
                e.input,
                t(
                  t(
                    {
                      "aria-controls": o.id,
                      "aria-autocomplete": "both",
                    },
                    i && {
                      placeholder: i,
                    }
                  ),
                  !e.wrapper && t({}, a)
                )
              ),
              e.wrapper &&
                (e.wrapper = l(
                  "div",
                  t(
                    {
                      around: e.input,
                      class: e.name + "_wrapper",
                    },
                    a
                  )
                )),
              o &&
                (e.list = l(
                  o.tag,
                  t(
                    {
                      dest: [o.destination, o.position],
                      id: o.id,
                      role: "listbox",
                      hidden: "hidden",
                    },
                    o.class && {
                      class: o.class,
                    }
                  )
                )),
              (function (e) {
                var n,
                  r,
                  s,
                  i = e.events,
                  o =
                    ((n = function () {
                      return M(e);
                    }),
                    (r = e.debounce),
                    function () {
                      clearTimeout(s),
                        (s = setTimeout(function () {
                          return n();
                        }, r));
                    }),
                  a = (e.events = t(
                    {
                      input: t({}, i && i.input),
                    },
                    e.resultsList && {
                      list: i ? t({}, i.list) : {},
                    }
                  )),
                  l = {
                    input: {
                      input: function () {
                        o();
                      },
                      keydown: function (t) {
                        !(function (e, t) {
                          switch (e.keyCode) {
                            case 40:
                            case 38:
                              e.preventDefault(),
                                40 === e.keyCode ? x(t) : b(t);
                              break;
                            case 13:
                              t.submit || e.preventDefault(),
                                t.cursor >= 0 && S(t, e);
                              break;
                            case 9:
                              t.resultsList.tabSelect &&
                                t.cursor >= 0 &&
                                S(t, e);
                              break;
                            case 27:
                              (t.input.value = ""), k(t);
                          }
                        })(t, e);
                      },
                      blur: function () {
                        k(e);
                      },
                    },
                    list: {
                      mousedown: function (e) {
                        e.preventDefault();
                      },
                      click: function (t) {
                        !(function (e, t) {
                          var n = t.resultItem.tag.toUpperCase(),
                            r = Array.from(t.list.querySelectorAll(n)),
                            s = e.target.closest(n);
                          s && s.nodeName === n && S(t, e, r.indexOf(s));
                        })(t, e);
                      },
                    },
                  };
                $(l, function (t, n) {
                  (e.resultsList || "input" === n) &&
                    (a[t][n] || (a[t][n] = l[t][n]));
                }),
                  $(a, function (t, n) {
                    e[t].addEventListener(n, a[t][n]);
                  });
              })(e),
              e.data.cache)
            )
              return f(e).then(function (e) {
                try {
                  return u.call(n);
                } catch (e) {
                  return s(e);
                }
              }, s);

            function u() {
              return d("init", e), r();
            }
            return u.call(n);
          });
        }

        function T(e) {
          var t = e.prototype;
          (t.init = function () {
            D(this);
          }),
            (t.start = function (e) {
              M(this, e);
            }),
            (t.unInit = function () {
              if (this.wrapper) {
                var e = this.wrapper.parentNode;
                e.insertBefore(this.input, this.wrapper),
                  e.removeChild(this.wrapper);
              }
              var t;
              $((t = this).events, function (e, n) {
                t[e].removeEventListener(n, t.events[e][n]);
              });
            }),
            (t.open = function () {
              w(this);
            }),
            (t.close = function () {
              k(this);
            }),
            (t.goTo = function (e) {
              _(e, this);
            }),
            (t.next = function () {
              x(this);
            }),
            (t.previous = function () {
              b(this);
            }),
            (t.select = function (e) {
              S(this, null, e);
            }),
            (t.search = function (e, t, n) {
              return h(e, t, n);
            });
        }
        return function e(t) {
          (this.options = t),
            (this.id = e.instances = (e.instances || 0) + 1),
            (this.name = "autoComplete"),
            (this.wrapper = 1),
            (this.threshold = 1),
            (this.debounce = 0),
            (this.resultsList = {
              position: "afterend",
              tag: "ul",
              maxResults: 5,
            }),
            (this.resultItem = {
              tag: "li",
            }),
            (function (e) {
              var t = e.name,
                r = e.options,
                s = e.resultsList,
                i = e.resultItem;
              for (var o in r)
                if ("object" === n(r[o]))
                  for (var l in (e[o] || (e[o] = {}), r[o])) e[o][l] = r[o][l];
                else e[o] = r[o];
              (e.selector = e.selector || "#" + t),
                (s.destination = s.destination || e.selector),
                (s.id = s.id || t + "_list_" + e.id),
                (i.id = i.id || t + "_result"),
                (e.input = a(e.selector));
            })(this),
            T.call(this, e),
            D(this);
        };
      }),
        (e.exports = n());
    }),
    kt = _t(2);

  function _t(e) {
    if (
      "number" != typeof e ||
      Number.isNaN(e) ||
      e < 1 ||
      e === Number.POSITIVE_INFINITY
    )
      throw new Error("`" + e + "` is not a valid argument for `n-gram`");
    return function (t) {
      var n,
        r,
        s = [];
      if (null == t) return s;
      if (((r = t.slice ? t : String(t)), (n = r.length - e + 1) < 1)) return s;
      for (; n--; ) s[n] = r.slice(n, n + e);
      return s;
    };
  }

  function xt(e, t) {
    let n, r, s, i;
    Array.isArray(e)
      ? (s = e.map((e) => String(e).toLowerCase()))
      : ((n = String(e).toLowerCase()), (s = 1 === n.length ? [n] : kt(n))),
      Array.isArray(t)
        ? (i = t.map((e) => String(e).toLowerCase()))
        : ((r = String(t).toLowerCase()), (i = 1 === r.length ? [r] : kt(r)));
    let o,
      a,
      l,
      u = -1,
      c = 0;
    for (; ++u < s.length; )
      for (o = s[u], l = -1; ++l < i.length; )
        if (((a = i[l]), o === a)) {
          c++, (i[l] = "");
          break;
        }
    return (2 * c) / (s.length + i.length);
  }

  function bt(t) {
    let n, r;
    return {
      c() {
        (n = _("Skip ")), (r = w("span")), (r.textContent = "(+1.5s)");
      },
      m(e, t) {
        g(e, n, t), g(e, r, t);
      },
      p: e,
      d(e) {
        e && y(n), e && y(r);
      },
    };
  }

  function St(e) {
    let t, n, r, s, i;
    return {
      c() {
        (t = _("Skip ")),
          (n = w("span")),
          (r = _("(+")),
          (s = _(e[0])),
          (i = _("s)")),
          M(n, "class", "tracking-normal lowercase"),
          Y(n, "hidden", e[0] >= e[1].maxAttempts);
      },
      m(e, o) {
        g(e, t, o), g(e, n, o), p(n, r), p(n, s), p(n, i);
      },
      p(e, t) {
        1 & t && $(s, e[0]), 3 & t && Y(n, "hidden", e[0] >= e[1].maxAttempts);
      },
      d(e) {
        e && y(t), e && y(n);
      },
    };
  }

  function Mt(e) {
    let t;

    function n(e, t) {
      return e[2] ? St : bt;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = b());
      },
      m(e, n) {
        s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s.d(e), e && y(t);
      },
    };
  }

  function $t(e) {
    let t;
    return {
      c() {
        t = _("Submit");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Dt(e) {
    let t, n, s, i, o, a, l, u, c, d, h, f, m, v, _, b, $, T, Y;
    return (
      (v = new ae({
        props: {
          secondary: !0,
          $$slots: {
            default: [Mt],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      v.$on("click", e[10]),
      (b = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [$t],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      b.$on("click", (ev) => {
        _onSubmit();
        e[5]();
      }),
      b.$on("click", e[5]),
      {
        c() {
          (t = w("div")),
            (n = w("div")),
            (s = w("div")),
            (i = w("div")),
            (o = k("svg")),
            (a = k("circle")),
            (l = k("line")),
            (u = x()),
            (c = w("input")),
            (d = x()),
            (h = w("div")),
            (h.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
            (f = x()),
            (m = w("div")),
            Q(v.$$.fragment),
            (_ = x()),
            Q(b.$$.fragment),
            M(a, "cx", "11"),
            M(a, "cy", "11"),
            M(a, "r", "8"),
            M(l, "x1", "21"),
            M(l, "y1", "21"),
            M(l, "x2", "16.65"),
            M(l, "y2", "16.65"),
            M(o, "class", "absolute top-4 left-3"),
            M(o, "xmlns", "http://www.w3.org/2000/svg"),
            M(o, "width", "18"),
            M(o, "height", "18"),
            M(o, "viewBox", "0 0 24 24"),
            M(o, "fill", "none"),
            M(o, "stroke", "currentColor"),
            M(o, "stroke-width", "2"),
            M(o, "stroke-linecap", "round"),
            M(o, "stroke-linejoin", "round"),
            M(
              c,
              "class",
              "focus:outline-none focus:border-custom-positive w-full p-3 pl-9 placeholder:text-custom-line bg-custom-bg text-custom-fg border-custom-mg"
            ),
            M(c, "id", "autoComplete"),
            M(c, "type", "search"),
            M(c, "dir", "ltr"),
            M(c, "spellcheck", "false"),
            M(c, "autocorrect", "off"),
            M(c, "autocomplete", "off"),
            M(c, "autocapitalize", "off"),
            M(h, "class", "absolute right-3 top-4"),
            M(i, "class", "autoComplete_wrapper relative"),
            M(m, "class", "flex justify-between pt-3"),
            M(n, "class", "m-3 mt-0"),
            M(t, "class", "max-w-screen-sm w-full mx-auto flex-col");
        },
        m(r, y) {
          g(r, t, y),
            p(t, n),
            p(n, s),
            p(s, i),
            p(i, o),
            p(o, a),
            p(o, l),
            p(i, u),
            p(i, c),
            D(c, e[4]),
            p(i, d),
            p(i, h),
            p(s, f),
            p(s, m),
            ee(v, m, null),
            p(m, _),
            ee(b, m, null),
            ($ = !0),
            T || ((Y = [S(c, "input", e[8]), S(h, "click", e[9])]), (T = !0));
        },
        p(e, [t]) {
          16 & t && D(c, e[4]);
          const n = {};
          32775 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            v.$set(n);
          const r = {};
          32768 & t &&
            (r.$$scope = {
              dirty: t,
              ctx: e,
            }),
            b.$set(r);
        },
        i(e) {
          $ || (Z(v.$$.fragment, e), Z(b.$$.fragment, e), ($ = !0));
        },
        o(e) {
          q(v.$$.fragment, e), q(b.$$.fragment, e), ($ = !1);
        },
        d(e) {
          e && y(t), te(v), te(b), (T = !1), r(Y);
        },
      }
    );
  }

  function Tt(e, t, n) {
    let r,
      { allOptions: s } = t,
      { currentAttempt: i } = t,
      { config: o } = t,
      { isPrime: a } = t;
    const l = {
        focus() {
          document.getElementById("autoComplete").focus();
        },
        clear() {
          (document.getElementById("autoComplete").value = ""), n(4, (r = ""));
        },
      },
      u = A();

    function c(e) {
      "skipped" == e
        ? (u("guess", {
            guess: r,
            isSkipped: !0,
          }),
          n(4, (r = "")))
        : void 0 !== r && "" !== r.trim()
        ? (u("guess", {
            guess: r,
            isSkipped: !1,
          }),
          n(4, (r = "")))
        : l.focus();
    }
    P(() => {
      !(function () {
        const e = new wt({
          placeHolder: "Know it? Search for the game / title",
          threshold: 1,
          wrapper: !1,
          resultsList: {
            maxResults: 100,
          },
          diacritics: !0,
          noresults: !0,
          searchEngine: "loose",
          data: {
            src: s,
            cache: !1,
            filter: (e) => {
              if (e.length < 6) return e;
              const t = document
                .getElementById("autoComplete")
                .value.toLowerCase();
              return (e = e.sort((e, n) => {
                let r = xt(t, e.value.toLowerCase()),
                  s = xt(t, n.value.toLowerCase());
                return r === s ? (e.value > n.value ? -1 : 1) : s > r ? 1 : -1;
              }));
            },
          },
          resultItem: {
            highlight: !0,
          },
          events: {
            focus: {
              focus: (e) => {},
            },
            input: {
              selection: (t) => {
                let s = t.detail.selection.value;
                (e.input.value = s), n(4, (r = s));
              },
            },
          },
        });
      })();
    });
    return (
      (e.$$set = (e) => {
        s.pop();
        // console.log('all', s)
        "allOptions" in e && n(6, (s = e.allOptions)),
          "currentAttempt" in e && n(0, (i = e.currentAttempt)),
          "config" in e && n(1, (o = e.config)),
          "isPrime" in e && n(2, (a = e.isPrime));
      }),
      [
        i,
        o,
        a,
        l,
        r,
        c,
        s,
        () => {
          soundcloudWidget.toggle();
        },
        function () {
          (r = this.value), n(4, r);
        },
        () => l.clear(),
        () => c("skipped"),
      ]
    );
  }
  _t(3);
  class Yt extends se {
    constructor(e) {
      super(),
        re(this, e, Tt, Dt, i, {
          allOptions: 6,
          currentAttempt: 0,
          config: 1,
          isPrime: 2,
          guessInput: 3,
          togglePlayState: 7,
        });
    }
    get guessInput() {
      return this.$$.ctx[3];
    }
    get togglePlayState() {
      return this.$$.ctx[7];
    }
  }

  function Ct(e) {
    let t, n, r, s, i, o, a, l, u, d, v, k;
    const b = e[6].default,
      D = c(b, e, e[5], null);
    return {
      c() {
        (t = w("div")),
          (n = w("div")),
          (r = w("div")),
          (s = w("h2")),
          (i = _(e[0])),
          (o = x()),
          (a = w("div")),
          (l = w("button")),
          (l.innerHTML =
            '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
          (u = x()),
          D && D.c(),
          M(
            s,
            "class",
            "text-sm text-center uppercase text-custom-line font-semibold tracking-widest"
          ),
          M(r, "class", "flex-1 pl-7"),
          (l.autofocus = !0),
          M(l, "class", "border-none text-custom-mg"),
          M(a, "class", "justify-self-end flex"),
          M(n, "class", "flex items-center justify-center mb-6"),
          M(t, "class", "bg-custom-bg border border-custom-mg p-6");
      },
      m(c, h) {
        g(c, t, h),
          p(t, n),
          p(n, r),
          p(r, s),
          p(s, i),
          p(n, o),
          p(n, a),
          p(a, l),
          p(t, u),
          D && D.m(t, null),
          (d = !0),
          l.focus(),
          v || ((k = S(l, "click", e[3])), (v = !0));
      },
      p(e, t) {
        (!d || 1 & t) && $(i, e[0]),
          D &&
            D.p &&
            (!d || 32 & t) &&
            f(D, b, e, e[5], d ? h(b, e[5], t, null) : m(e[5]), null);
      },
      i(e) {
        d || (Z(D, e), (d = !0));
      },
      o(e) {
        q(D, e), (d = !1);
      },
      d(e) {
        e && y(t), D && D.d(e), (v = !1), k();
      },
    };
  }

  function Ot(e) {
    let t, n, r, s, i;
    const o = e[6].default,
      a = c(o, e, e[5], null);
    return {
      c() {
        (t = w("button")),
          (t.innerHTML =
            '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
          (n = x()),
          a && a.c(),
          (t.autofocus = !0),
          M(t, "class", "border-none text-custom-mg absolute right-3 top-3");
      },
      m(o, l) {
        g(o, t, l),
          g(o, n, l),
          a && a.m(o, l),
          (r = !0),
          t.focus(),
          s || ((i = S(t, "click", e[3])), (s = !0));
      },
      p(e, t) {
        a &&
          a.p &&
          (!r || 32 & t) &&
          f(a, o, e, e[5], r ? h(o, e[5], t, null) : m(e[5]), null);
      },
      i(e) {
        r || (Z(a, e), (r = !0));
      },
      o(e) {
        q(a, e), (r = !1);
      },
      d(e) {
        e && y(t), e && y(n), a && a.d(e), (s = !1), i();
      },
    };
  }

  function Pt(e) {
    let t, n, s, i, o, a, l, u, c;
    const d = [Ot, Ct],
      h = [];

    function f(e, t) {
      return 0 == e[1] ? 0 : 1;
    }
    return (
      (o = f(e)),
      (a = h[o] = d[o](e)),
      {
        c() {
          (t = w("div")),
            (n = x()),
            (s = w("div")),
            (i = w("div")),
            a.c(),
            M(
              t,
              "class",
              "modal-background p-3 flex justify-center svelte-1nyqrwd"
            ),
            M(
              i,
              "class",
              "pointer-events-auto modal w-full mx-auto top-20 relative rounded-sm "
            ),
            e[0] == "song list"
              ? M(
                  i,
                  "style",
                  "width: fit-content; height: calc(100% - 80px); overflow-y: scroll;"
                )
              : M(
                  i,
                  "class",
                  "pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm "
                ),
            M(i, "role", "dialog"),
            M(i, "aria-modal", "true"),
            M(
              s,
              "class",
              "modal-background p-3 pointer-events-none svelte-1nyqrwd"
            );
        },
        m(r, a) {
          g(r, t, a),
            g(r, n, a),
            g(r, s, a),
            p(s, i),
            h[o].m(i, null),
            e[7](i),
            (l = !0),
            u ||
              ((c = [S(window, "keydown", e[4]), S(t, "click", e[3])]),
              (u = !0));
        },
        p(e, [t]) {
          let n = o;
          (o = f(e)),
            o === n
              ? h[o].p(e, t)
              : (J(),
                q(h[n], 1, 1, () => {
                  h[n] = null;
                }),
                K(),
                (a = h[o]),
                a ? a.p(e, t) : ((a = h[o] = d[o](e)), a.c()),
                Z(a, 1),
                a.m(i, null));
        },
        i(e) {
          l || (Z(a), (l = !0));
        },
        o(e) {
          q(a), (l = !1);
        },
        d(i) {
          i && y(t), i && y(n), i && y(s), h[o].d(), e[7](null), (u = !1), r(c);
        },
      }
    );
  }

  function At(e, t, n) {
    let { $$slots: r = {}, $$scope: s } = t;
    const i = A(),
      o = () => i("close");
    let a,
      { title: l } = t,
      { hasFrame: u } = t;
    const c = "undefined" != typeof document && document.activeElement;
    var d;
    return (
      c &&
        ((d = () => {
          c.focus();
        }),
        O().$$.on_destroy.push(d)),
      (e.$$set = (e) => {
        "title" in e && n(0, (l = e.title)),
          "hasFrame" in e && n(1, (u = e.hasFrame)),
          "$$scope" in e && n(5, (s = e.$$scope));
      }),
      [
        l,
        u,
        a,
        o,
        (e) => {
          if ("Escape" !== e.key) {
            if ("Tab" === e.key) {
              const t = a.querySelectorAll("*"),
                n = Array.from(t).filter((e) => e.tabIndex >= 0);
              let r = n.indexOf(document.activeElement);
              -1 === r && e.shiftKey && (r = 0),
                (r += n.length + (e.shiftKey ? -1 : 1)),
                (r %= n.length),
                n[r].focus(),
                e.preventDefault();
            }
          } else o();
        },
        s,
        r,
        function (e) {
          H[e ? "unshift" : "push"](() => {
            (a = e), n(2, a);
          });
        },
      ]
    );
  }
  class Lt extends se {
    constructor(e) {
      super(),
        re(this, e, At, Pt, i, {
          title: 0,
          hasFrame: 1,
        });
    }
  }

  function Nt(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<p class="mb-3">Mario Heardle Infinite is a version of Mario Heardle that has no daily limit and selects songs randomly so you can play as long as you want.</p> <p class="mb-3">Volume Slider and Scroll Bar code by <a href="https://github.com/morgvanny">morgvanny</a>.</p> <p class="mb-3">Metadata code by <a href="https://www.fiverr.com/gema_designer">gema_designer</a>.</p>\n\n<p class="mb-3">The full list of songs is available <a href="https://docs.google.com/spreadsheets/d/12vCtRU4cKzgTZk60kVveHRxQvdC2u0yS5pEISWeDlZo/edit#gid=0">here.</a> </p> \n\n<p class="mb-3"> If you have any technical issues, you can contact me @NinjiGalaxy on Bluesky, or by commenting on the previously linked Google Sheet. </p>'),
          M(n, "class", "text");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class Ht extends se {
    constructor(e) {
      super(), re(this, e, null, Nt, i, {});
    }
  }

  function getGameOrArtistFromMusicName(musicNameList) {
    return musicNameList.map((a) => {
      const splited = a.split("-");
      return splited[splited.length - 1].trim();
    });
  }

  function MLt(t) {
    let n;
    const mapUrl = new Map();
    musicListWithLinks.forEach((m) => mapUrl.set(m.answer, m.url));
    const musicNameListFiltered = musicNameList.filter(
      (s) => s != "" && mapUrl.has(s)
    );
    const artistOrGame = getGameOrArtistFromMusicName(musicNameListFiltered);
    const diffArtist = artistOrGame.map((a, i) =>
      i > 0 ? !(artistOrGame[i - 1] === a) : false
    );
    const allDifferent = diffArtist.reduce((a, b) => a && b);
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<ul style="list-style-type: disc;margin-center: 20px;font-size: 24px;display: grid;justify-content: center;">' +
            musicNameListFiltered
              .map(
                (s, i) =>
                  "<li" +
                  (diffArtist[i] && !allDifferent
                    ? ' style="margin-top:15px"'
                    : "") +
                  '><a target="_blank" href="' +
                  mapUrl.get(s) +
                  '">' +
                  s +
                  "</a></li>"
              )
              .join("") +
            "</ul>"),
          M(n, "class", "text");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class MLCt extends se {
    constructor(e) {
      super(), re(this, e, null, MLt, i, {});
    }
  }

  function It(t) {
    let n, r, s, i;
    return {
      c() {
        (n = w("div")),
          (r = w("a")),
          // (r.innerHTML =
          //   '<span class="kofitext svelte-1d3p4dy"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg mr-2 mb-1 svelte-1d3p4dy"/>Support the Heardle devs on Ko-Fi</span><svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>'),
          // M(
          //   r,
          //   "class",
          //   "kofi-button py-2 px-3 rounded-lg items-center flex  svelte-1d3p4dy"
          // ),
          // M(r, "href", "https://ko-fi.com/heardle"),
          // M(r, "title", "Support the Heardle devs on Ko-Fi"),
          M(
            n,
            "class",
            "text-center flex justify-center items-center flex-col "
          );
      },
      m(e, o) {
        g(e, n, o), p(n, r), s || ((i = S(r, "click", t[0])), (s = !0));
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), i();
      },
    };
  }

  function Wt(e) {
    return [
      () => {
        pe("clickKofi", {
          name: "clickKofi",
        });
      },
    ];
  }
  class Rt extends se {
    constructor(e) {
      super(), re(this, e, Wt, It, i, {});
    }
  }

  function Ft(t) {
    let n, r;
    return (
      (n = new Ee({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Gt(t) {
    let n, r, s, i, o, a, l, u, c, d;
    return {
      c() {
        (n = w("div")),
          (r = w("div")),
          (s = x()),
          (i = w("div")),
          (o = w("p")),
          (a = w("span")),
          (l = x()),
          (u = _(t[0])),
          (c = x()),
          (d = w("div")),
          M(r, "class", "flex justify-center items-center mt-6 mb-1"),
          M(a, "class", "text-custom-negative"),
          M(o, "class", "pb-6"),
          M(i, "class", "text-custom-mg text-xs h-32 overflow-scroll relative"),
          M(d, "class", "absolute h-6 bottom-0 w-full border-custom-fg "),
          T(
            d,
            "background",
            "linear-gradient(to bottom, rgba(18,18,18,0), rgba(18,18,18,1)) no-repeat bottom"
          ),
          T(d, "background-size", "100% 100%"),
          M(n, "class", "relative");
      },
      m(e, t) {
        g(e, n, t),
          p(n, r),
          p(n, s),
          p(n, i),
          p(i, o),
          p(o, a),
          p(o, l),
          p(o, u),
          p(n, c),
          p(n, d);
      },
      p(e, t) {
        1 & t && $(u, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Et(e) {
    let t, n, r, s;
    const i = [Gt, Ft],
      o = [];

    function a(e, t) {
      return e[0] ? 0 : 1;
    }
    return (
      (t = a(e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = b());
        },
        m(e, n) {
          o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, [s]) {
          let l = t;
          (t = a(e)),
            t === l
              ? o[t].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                Z(n, 1),
                n.m(r.parentNode, r));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          o[t].d(e), e && y(r);
        },
      }
    );
  }

  function jt(e, t, n) {
    let r;
    return (
      P(async function () {
        (async function () {
          const e = await fetch(
            "https://wjsn-heardle.glitch.me/supporters.json"
          );
          return await e.json();
        })().then((e) => {
          n(0, (r = e.supporters));
        });
      }),
      [r]
    );
  }
  class Bt extends se {
    constructor(e) {
      super(), re(this, e, jt, Et, i, {});
    }
  }

  function zt(t) {
    let n, r, s, i, o, a, l, u, c;
    return (
      (a = new Rt({})),
      (u = new Bt({})),
      {
        c() {
          (n = w("p")),
            (s = w("p")),
            (n.innerHTML =
              "Have questions/run into bugs? Tweet/DM me @" +
              twitter +
              " on Discord or Bluesky."),
            (r = x()),
            (s = w("p")),
            (i = x()),
            (o = w("div")),
            Q(a.$$.fragment),
            (l = x()),
            Q(u.$$.fragment),
            M(n, "class", "mb-3"),
            M(s, "class", "mb-3"),
            M(o, "class", "pt-6");
        },
        m(e, t) {
          g(e, n, t),
            g(e, r, t),
            g(e, s, t),
            g(e, i, t),
            g(e, o, t),
            ee(a, o, null),
            g(e, l, t),
            ee(u, e, t),
            (c = !0);
        },
        p: e,
        i(e) {
          c || (Z(a.$$.fragment, e), Z(u.$$.fragment, e), (c = !0));
        },
        o(e) {
          q(a.$$.fragment, e), q(u.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && y(n),
            e && y(r),
            e && y(s),
            e && y(i),
            e && y(o),
            te(a),
            e && y(l),
            te(u, e);
        },
      }
    );
  }
  class Ut extends se {
    constructor(e) {
      super(), re(this, e, null, zt, i, {});
    }
  }
  const Vt = {
      attemptInterval: 2e3,
      attemptIntervalAlt: [2e3, 4e3, 7e3, 11e3, 16e3, 25e3, 40e3],
      maxAttempts: 7,
      //   date: date,
    },
    Jt = ["0", "1", "2", "3", "4", "5", "6"];

  function Kt(t) {
    let n, r;
    return {
      c() {
        (n = w("div")), (r = _(t[0])), M(n, "style", "display:none");
      },
      m(e, t) {
        g(e, n, t), p(n, r);
      },
      p(e, [t]) {
        1 & t && $(r, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Zt(e, t, n) {
    let r = "",
      s = new Date(),
      i =
        3600 * (23 - s.getHours()) +
        60 * (59 - s.getMinutes()) +
        (59 - s.getSeconds());

    function o() {
      let e = Math.floor(i / 3600),
        t = Math.floor((i - 3600 * e) / 60),
        s = Math.floor(i % 60);
      n(
        0,
        (r =
          ("00" + e).slice(-2) +
          ":" +
          ("00" + t).slice(-2) +
          ":" +
          ("00" + s).slice(-2))
      ),
        i--,
        0 == e && 0 == t && 0 == s; // && location.reload(!0) (Reload at midnight)
    }
    return o(), setInterval(o, 1e3), [r];
  }
  class qt extends se {
    constructor(e) {
      super(), re(this, e, Zt, Kt, i, {});
    }
  }

  function Xt(e, t, n) {
    const r = e.slice();
    return (r[10] = t[n]), (r[12] = n), r;
  }

  function Qt(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      k,
      b,
      S,
      D,
      T,
      Y,
      C,
      O,
      P,
      A = Jt[e[3]] + "",
      L = Array(e[1].maxAttempts),
      N = [];
    for (let t = 0; t < L.length; t += 1) N[t] = on(Xt(e, L, t));

    function H(e, t) {
      return 0 == e[3] ? un : e[4] ? ln : an;
    }
    let I = H(e),
      W = I(e),
      R = e[5] && cn();
    return (
      (d = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [dn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      d.$on("click", e[6]),
      (S = new qt({})),
      (O = new Rt({})),
      {
        c() {
          (t = w("div")), (n = w("p")), (r = _(A)), (s = x()), (i = w("div"));
          for (let e = 0; e < N.length; e += 1) N[e].c();
          (o = x()),
            (a = w("p")),
            W.c(),
            (l = x()),
            R && R.c(),
            (u = x()),
            (c = w("div")),
            Q(d.$$.fragment),
            (h = x()),
            (f = w("div")),
            (m = w("div")),
            (k = w("button")),
            (k.textContent = "Next"), // Bind on click ?
            (b = x()),
            Q(S.$$.fragment),
            (D = x()),
            (T = w("div")),
            (Y = w("div")),
            (C = x()),
            Q(O.$$.fragment),
            M(n, "class", "text-lg text-custom-line"),
            M(i, "class", "flex justify-center my-2"),
            M(a, "class", "py-1"),
            M(c, "style", "display:none"),
            M(t, "class", "text-center px-3"),
            M(
              k,
              "class",
              "px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk bg-custom-positive"
            ),
            k.addEventListener("click", function () {
              nextMusic();
            });
          M(m, "class", "flex flex-col justify-center items-center mb-6 mx-3"),
            M(Y, "class", "flex justify-center items-center mb-3"),
            M(T, "class", "bg-custom-highlight py-3 pb-5 mx-3 rounded-t-md");
        },
        m(e, y) {
          g(e, t, y), p(t, n), p(n, r), p(t, s), p(t, i);
          for (let e = 0; e < N.length; e += 1) N[e].m(i, null);
          p(t, o),
            p(t, a),
            W.m(a, null),
            p(t, l),
            R && R.m(t, null),
            p(t, u),
            p(t, c),
            ee(d, c, null),
            g(e, h, y),
            g(e, f, y),
            p(f, m),
            p(m, k),
            p(m, b),
            ee(S, m, null),
            p(f, D),
            p(f, T),
            p(T, Y),
            p(T, C),
            ee(O, T, null),
            (P = !0);
        },
        p(e, n) {
          if (((!P || 8 & n) && A !== (A = Jt[e[3]] + "") && $(r, A), 3 & n)) {
            let t;
            for (L = Array(e[1].maxAttempts), t = 0; t < L.length; t += 1) {
              const r = Xt(e, L, t);
              N[t] ? N[t].p(r, n) : ((N[t] = on(r)), N[t].c(), N[t].m(i, null));
            }
            for (; t < N.length; t += 1) N[t].d(1);
            N.length = L.length;
          }
          I === (I = H(e)) && W
            ? W.p(e, n)
            : (W.d(1), (W = I(e)), W && (W.c(), W.m(a, null))),
            e[5]
              ? R || ((R = cn()), R.c(), R.m(t, u))
              : R && (R.d(1), (R = null));
          const s = {};
          8192 & n &&
            (s.$$scope = {
              dirty: n,
              ctx: e,
            }),
            d.$set(s);
        },
        i(e) {
          P ||
            (Z(d.$$.fragment, e),
            Z(S.$$.fragment, e),
            Z(O.$$.fragment, e),
            (P = !0));
        },
        o(e) {
          q(d.$$.fragment, e),
            q(S.$$.fragment, e),
            q(O.$$.fragment, e),
            (P = !1);
        },
        d(e) {
          e && y(t),
            v(N, e),
            W.d(),
            R && R.d(),
            te(d),
            e && y(h),
            e && y(f),
            te(S),
            te(O);
        },
      }
    );
  }

  function en(t) {
    let n;
    return {
      c() {
        (n = w("div")), M(n, "class", "w-4 h-1 m-0.5 bg-custom-fg");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function tn(e) {
    let t;

    function n(e, t) {
      return e[0][e[12]].isSkipped
        ? sn
        : e[0][e[12]].isCorrect || e[0][e[12]].isSkipped
        ? e[0][e[12]].isCorrect
          ? nn
          : void 0
        : rn;
    }
    let r = n(e),
      s = r && r(e);
    return {
      c() {
        s && s.c(), (t = b());
      },
      m(e, n) {
        s && s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r !== (r = n(e)) &&
          (s && s.d(1), (s = r && r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s && s.d(e), e && y(t);
      },
    };
  }

  function nn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-positive");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function rn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-negative");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function sn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-mg");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function on(e) {
    let t;

    function n(e, t) {
      return e[12] <= e[0].length - 1 ? tn : en;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = b());
      },
      m(e, n) {
        s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s.d(e), e && y(t);
      },
    };
  }

  function an(e) {
    let t,
      n,
      r,
      s = (e[0].length * e[1].attemptInterval) / 1e3 + "";
    return {
      c() {
        (t = _("You got today's " + artist + " Heardle within the first ")),
          (n = _(s)),
          (r = _(" seconds."));
      },
      m(e, s) {
        g(e, t, s), g(e, n, s), g(e, r, s);
      },
      p(e, t) {
        3 & t &&
          s !== (s = (e[0].length * e[1].attemptInterval) / 1e3 + "") &&
          $(n, s);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r);
      },
    };
  }

  function ln(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 + "",
      a = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 > 1 ? "s" : "";
    return {
      c() {
        (t = _("Let's-a Go! You got the song right within ")),
          (n = _(o)),
          (r = _("\n                second")),
          (s = _(a)),
          (i = _("."));
      },
      m(e, o) {
        g(e, t, o), g(e, n, o), g(e, r, o), g(e, s, o), g(e, i, o);
      },
      p(e, t) {
        3 & t &&
          o !== (o = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 + "") &&
          $(n, o),
          3 & t &&
            a !==
              (a =
                e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 > 1
                  ? "s"
                  : "") &&
            $(s, a);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r), e && y(s), e && y(i);
      },
    };
  }

  function un(t) {
    let n;
    return {
      c() {
        n = _("Maybe you'll get it next time!");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function cn(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          (t.textContent = "Copied to clipboard!"),
          M(
            t,
            "class",
            "tracking-widest uppercase text-xs text-custom-line p-3 pb-0 text-center"
          );
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function dn(e) {
    let t, n, r, s, i, o, a;
    return {
      c() {
        (t = _("Share\n                ")),
          (n = k("svg")),
          (r = k("circle")),
          (s = k("circle")),
          (i = k("circle")),
          (o = k("line")),
          (a = k("line"));
      },
      m(e, l) {
        g(e, t, l), g(e, n, l), p(n, r), p(n, s), p(n, i), p(n, o), p(n, a);
      },
      d(e) {
        e && y(t), e && y(n);
      },
    };
  }

  function hn(e) {
    let t,
      n,
      r = e[2] && Qt(e);
    return {
      c() {
        r && r.c(), (t = b());
      },
      m(e, s) {
        r && r.m(e, s), g(e, t, s), (n = !0);
      },
      p(e, [n]) {
        e[2]
          ? r
            ? (r.p(e, n), 4 & n && Z(r, 1))
            : ((r = Qt(e)), r.c(), Z(r, 1), r.m(t.parentNode, t))
          : r &&
            (J(),
            q(r, 1, 1, () => {
              r = null;
            }),
            K());
      },
      i(e) {
        n || (Z(r), (n = !0));
      },
      o(e) {
        q(r), (n = !1);
      },
      d(e) {
        r && r.d(e), e && y(t);
      },
    };
  }

  function fn(e, t, n) {
    // console.log("current", t);
    let { userGuesses: r } = t,
      { currentHeardle: s } = t,
      { config: i } = t,
      { hasFinished: o } = t,
      { gotCorrect: a } = t,
      { guessRef: l } = t,
      { isPrime: u } = t,
      c = !1;
    return (
      A(),
      (e.$$set = (e) => {
        "userGuesses" in e && n(0, (r = e.userGuesses)),
          "currentHeardle" in e && n(7, (s = e.currentHeardle)),
          "config" in e && n(1, (i = e.config)),
          "hasFinished" in e && n(2, (o = e.hasFinished)),
          "gotCorrect" in e && n(8, (a = e.gotCorrect)),
          "guessRef" in e && n(3, (l = e.guessRef)),
          "isPrime" in e && n(4, (u = e.isPrime));
      }),
      [
        r,
        i,
        o,
        l,
        u,
        c,
        () => {
          let e = artist + " Heardle #" + (s.id + 1),
            t = "";
          a
            ? r.length < i.maxAttempts / 3
              ? (t += "🔊")
              : r.length < (i.maxAttempts / 3) * 2
              ? (t += "🔉")
              : r.length <= i.maxAttempts && (t += "🔈")
            : (t += "🔇");
          for (let e = 0; e < i.maxAttempts; e++)
            r.length > e
              ? 1 == r[e].isCorrect
                ? (t += "🟩")
                : 1 == r[e].isSkipped
                ? (t += "⬛️")
                : (t += "🟥")
              : (t += "⬜️");
          let seconds = i.attemptIntervalAlt[r.length - 1] / 1e3;
          let o =
            e +
            "\n\n" +
            (a
              ? "Got this " +
                artist +
                " Heardle within " +
                seconds +
                " second" +
                (seconds > 1 ? "s" : "")
              : "Failed this " + artist + " Heardle") +
            "\n\n" +
            t +
            "\n\n";
          // + "https://joywave-heardle.glitch.me/"
          if (
            !navigator.share ||
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) ||
            /Firefox/i.test(navigator.userAgent)
          )
            return navigator &&
              navigator.clipboard &&
              navigator.clipboard.writeText
              ? (pe("clickShareClipboard", {
                  name: "clickShareClipboard",
                }),
                n(5, (c = !0)),
                setTimeout(() => {
                  n(5, (c = !1));
                }, 2e3),
                navigator.clipboard.writeText(o))
              : Promise.reject(
                  "There was a problem copying your result to the clipboard"
                );
          navigator
            .share({
              text: o,
            })
            .then(() => {
              pe("clickSharePanel", {
                name: "clickSharePanel",
              });
            })
            .catch(console.error);
        },
        s,
        a,
      ]
    );
  }
  class mn extends se {
    constructor(e) {
      super(),
        re(this, e, fn, hn, i, {
          userGuesses: 0,
          currentHeardle: 0,
          config: 1,
          hasFinished: 2,
          gotCorrect: 8,
          guessRef: 3,
          isPrime: 4,
        });
    }
  }

  function pn(e) {
    let t;
    return {
      c() {
        t = _("Play");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function gn(e) {
    let t, n, r, s, i, o, a, l, u, c, z, v;
    return (
      (u = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [pn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      u.$on("click", e[0]),
      {
        c() {
          (t = w("div")),
            (n = w("div")),
            (n.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><circle cx="5.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="15.5" r="2.5"></circle><path d="M8 17V5l12-2v12"></path></svg></div> \n        <div><p>Listen to the intro, then find the correct ' +
              artist +
              " song in the list.</p></div>"),
            (r = x()),
            (s = w("div")),
            (s.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></div> \n        <div><p>Skipped or incorrect attempts unlock more of the intro</p></div>'),
            (i = x()),
            (o = w("div")),
            (o.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-7"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div> \n  <div><p>Answer in as few tries as possible.</p></div>'),
            (a = x()),
            (z = w("div")),
            (z.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "></path></svg></div> \n        <div><p>You can use the top right button to see the list of tracks</p></div>'),
            (v = x()),
            (l = w("div")),
            Q(u.$$.fragment),
            M(n, "class", "flex items-center mb-6"),
            M(s, "class", "flex items-center mb-6"),
            M(o, "class", "flex items-center mb-6"),
            M(z, "class", "flex items-center mb-6"),
            M(l, "class", "justify-center flex py-2 mt-2");
        },
        m(e, d) {
          g(e, t, d),
            p(t, n),
            p(t, r),
            p(t, s),
            p(t, i),
            p(t, o),
            p(t, a),
            p(t, z),
            p(t, v),
            p(t, l),
            ee(u, l, null),
            (c = !0);
        },
        p(e, [t]) {
          const n = {};
          4 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            u.$set(n);
        },
        i(e) {
          c || (Z(u.$$.fragment, e), (c = !0));
        },
        o(e) {
          q(u.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && y(t), te(u);
        },
      }
    );
  }

  function yn(e) {
    const t = A();
    return [() => t("close")];
  }
  class vn extends se {
    constructor(e) {
      super(), re(this, e, yn, gn, i, {});
    }
  }

  function wn(e, t, n) {
    const r = e.slice();
    return (r[15] = t[n]), (r[17] = n), r;
  }

  function kn(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.textContent = "Play daily to see your stats"),
          M(n, "class", "text-center py-3 text-custom-line font-semibold");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function _n(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      k,
      b,
      S,
      D,
      T,
      Y,
      C,
      O,
      P,
      A,
      L,
      N,
      H,
      I,
      W,
      R,
      F,
      G,
      E,
      j,
      B = (e[6] > 0 ? ((e[8] / e[6]) * 100).toFixed(1) : 0) + "",
      z =
        e[11].slice(-1)[0].hasFinished || e[7].length < 2
          ? e[7].slice(-1)[0] + ""
          : e[7].slice(-2)[0] + "",
      U = Math.max(...e[7]) + "",
      V = e[9],
      J = [];
    for (let t = 0; t < V.length; t += 1) J[t] = Mn(wn(e, V, t));
    return {
      c() {
        t = w("div");
        for (let e = 0; e < J.length; e += 1) J[e].c();
        (n = x()),
          (r = w("div")),
          (s = w("div")),
          (i = w("div")),
          (o = _(e[6])),
          (a = x()),
          (l = w("div")),
          (l.textContent = "Played"),
          (u = x()),
          (c = w("div")),
          (d = w("div")),
          (h = _(e[8])),
          (f = x()),
          (m = w("div")),
          (m.textContent = "Won"),
          (k = x()),
          (b = w("div")),
          (S = w("div")),
          (D = _(B)),
          (T = _("%")),
          (Y = x()),
          (C = w("div")),
          (C.textContent = "Win rate"),
          (O = x()),
          (P = w("div")),
          (A = w("div")),
          (L = w("div")),
          (N = _(z)),
          (H = x()),
          (I = w("div")),
          (I.textContent = "Current Streak"),
          (W = x()),
          (R = w("div")),
          (F = w("div")),
          (G = _(U)),
          (E = x()),
          (j = w("div")),
          (j.textContent = "Max Streak"),
          M(t, "class", "flex justify-between py-3"),
          M(i, "class", "text-xl font-semibold"),
          M(l, "class", "text-custom-line text-sm "),
          M(s, "class", "flex-1"),
          M(d, "class", "text-xl font-semibold"),
          M(m, "class", "text-custom-line text-sm "),
          M(c, "class", "flex-1"),
          M(S, "class", "text-xl font-semibold"),
          M(C, "class", "text-custom-line text-sm"),
          M(b, "class", "flex-1"),
          M(r, "class", "flex justify-between text-center w-full py-3"),
          M(L, "class", "text-xl font-semibold"),
          M(I, "class", "text-custom-line text-sm"),
          M(A, "class", "flex-1"),
          M(F, "class", "text-xl font-semibold"),
          M(j, "class", "text-custom-line text-sm"),
          M(R, "class", "flex-1"),
          M(P, "class", "flex justify-between text-center w-full py-3 pt-0");
      },
      m(e, y) {
        g(e, t, y);
        for (let e = 0; e < J.length; e += 1) J[e].m(t, null);
        g(e, n, y),
          g(e, r, y),
          p(r, s),
          p(s, i),
          p(i, o),
          p(s, a),
          p(s, l),
          p(r, u),
          p(r, c),
          p(c, d),
          p(d, h),
          p(c, f),
          p(c, m),
          p(r, k),
          p(r, b),
          p(b, S),
          p(S, D),
          p(S, T),
          p(b, Y),
          p(b, C),
          g(e, O, y),
          g(e, P, y),
          p(P, A),
          p(A, L),
          p(L, N),
          p(A, H),
          p(A, I),
          p(P, W),
          p(P, R),
          p(R, F),
          p(F, G),
          p(R, E),
          p(R, j);
      },
      p(e, n) {
        if (1567 & n) {
          let r;
          for (V = e[9], r = 0; r < V.length; r += 1) {
            const s = wn(e, V, r);
            J[r] ? J[r].p(s, n) : ((J[r] = Mn(s)), J[r].c(), J[r].m(t, null));
          }
          for (; r < J.length; r += 1) J[r].d(1);
          J.length = V.length;
        }
        64 & n && $(o, e[6]),
          256 & n && $(h, e[8]),
          320 & n &&
            B !==
              (B = (e[6] > 0 ? ((e[8] / e[6]) * 100).toFixed(1) : 0) + "") &&
            $(D, B),
          128 & n && z !== (z = e[7].slice(-1)[0] + "") && $(N, z),
          128 & n && U !== (U = Math.max(...e[7]) + "") && $(G, U);
      },
      d(e) {
        e && y(t), v(J, e), e && y(n), e && y(r), e && y(O), e && y(P);
      },
    };
  }

  function xn(e) {
    let t,
      n,
      r,
      s = ((e[17] + 1) * e[0].attemptInterval) / 1e3 + "";
    return {
      c() {
        (t = _("< ")), (n = _(s)), (r = _("s"));
      },
      m(e, s) {
        g(e, t, s), g(e, n, s), g(e, r, s);
      },
      p(e, t) {
        1 & t &&
          s !== (s = ((e[17] + 1) * e[0].attemptInterval) / 1e3 + "") &&
          $(n, s);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r);
      },
    };
  }

  function bn(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[17] + 1 + "";
    return {
      c() {
        (t = w("span")),
          (n = _(o)),
          (r = _("°")),
          (s = x()),
          (i = w("span")),
          Y(t, "font-semibold", e[17] == e[1] - 1 && e[2]),
          Y(t, "text-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          M(i, "class", "text-custom-positive");
      },
      m(e, o) {
        g(e, t, o), p(t, n), p(t, r), g(e, s, o), g(e, i, o);
      },
      p(e, n) {
        6 & n && Y(t, "font-semibold", e[17] == e[1] - 1 && e[2]),
          22 & n &&
            Y(
              t,
              "text-custom-positive",
              e[17] == e[1] - 1 && 0 != e[4] && e[2]
            ),
          22 & n &&
            Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      d(e) {
        e && y(t), e && y(s), e && y(i);
      },
    };
  }

  function Sn(e) {
    let t, n, r;
    return {
      c() {
        (t = k("svg")),
          (n = k("line")),
          (r = k("line")),
          M(n, "x1", "18"),
          M(n, "y1", "6"),
          M(n, "x2", "6"),
          M(n, "y2", "18"),
          M(r, "x1", "6"),
          M(r, "y1", "6"),
          M(r, "x2", "18"),
          M(r, "y2", "18"),
          M(t, "class", "mx-auto"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "16"),
          M(t, "height", "16"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round"),
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      m(e, s) {
        g(e, t, s), p(t, n), p(t, r);
      },
      p(e, n) {
        22 & n &&
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Mn(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u = (e[15] > 0 ? e[15] : " ") + "";

    function c(e, t) {
      return e[17] === e[9].length - 1 ? Sn : e[3] ? bn : xn;
    }
    let d = c(e),
      h = d(e);
    return {
      c() {
        (t = w("div")),
          (n = w("div")),
          (r = w("div")),
          (s = w("div")),
          (i = _(u)),
          (o = x()),
          (a = w("div")),
          h.c(),
          (l = x()),
          M(s, "class", "h-full absolute text-center w-full py-1 text-xs "),
          Y(s, "bg-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          Y(s, "bg-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          M(r, "class", "absolute bg-custom-mg w-6"),
          T(r, "height", (e[15] / e[10]) * 100 + "%"),
          M(n, "class", "h-32 relative w-9 flex justify-center items-end"),
          M(
            a,
            "class",
            "text-center border-right text-xs pt-1 text-custom-line"
          ),
          M(t, "class", "flex flex-col items-stretch ");
      },
      m(e, u) {
        g(e, t, u),
          p(t, n),
          p(n, r),
          p(r, s),
          p(s, i),
          p(t, o),
          p(t, a),
          h.m(a, null),
          p(t, l);
      },
      p(e, t) {
        512 & t && u !== (u = (e[15] > 0 ? e[15] : " ") + "") && $(i, u),
          22 & t &&
            Y(s, "bg-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          22 & t &&
            Y(s, "bg-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          1536 & t && T(r, "height", (e[15] / e[10]) * 100 + "%"),
          d === (d = c(e)) && h
            ? h.p(e, t)
            : (h.d(1), (h = d(e)), h && (h.c(), h.m(a, null)));
      },
      d(e) {
        e && y(t), h.d();
      },
    };
  }

  function $n(t) {
    let n;

    function r(e, t) {
      return e[5] ? _n : kn;
    }
    let s = r(t),
      i = s(t);
    return {
      c() {
        i.c(), (n = b());
      },
      m(e, t) {
        i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = r(e)) && i
          ? i.p(e, t)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i.d(e), e && y(n);
      },
    };
  }

  function Dn(e, t, n) {
    let { userStats: r } = t,
      { config: s } = t,
      { todaysScore: i } = t,
      { hasFinished: o } = t,
      { daysSince: a } = t,
      l = !1,
      u = 0,
      c = [],
      d = [],
      h = 0,
      { isPrime: f } = t,
      { guessRef: m } = t,
      p = [];
    for (let e = 0; e < s.maxAttempts + 1; e++) p[e] = 0;
    let g = 0;
    if (r.length > 0) {
      l = !0;
      for (let e = 0; e < a + 1; e++) d.push(0);
      for (let e in r)
        !0 === r[e].hasFinished &&
          (++u,
          !0 === r[e].gotCorrect
            ? ((d[r[e].id] = 1),
              ++h,
              ++p[r[e].score - 1],
              p[r[e].score - 1] > g && (g = p[r[e].score - 1]))
            : (++p[s.maxAttempts],
              p[s.maxAttempts] > g && (g = p[s.maxAttempts])));
      c = d.reduce((e, t) => (t ? e[e.length - 1]++ : e.push(0), e), [0]);
    }
    return (
      (e.$$set = (e) => {
        "userStats" in e && n(11, (r = e.userStats)),
          "config" in e && n(0, (s = e.config)),
          "todaysScore" in e && n(1, (i = e.todaysScore)),
          "hasFinished" in e && n(2, (o = e.hasFinished)),
          "daysSince" in e && n(12, (a = e.daysSince)),
          "isPrime" in e && n(3, (f = e.isPrime)),
          "guessRef" in e && n(4, (m = e.guessRef));
      }),
      [s, i, o, f, m, l, u, c, h, p, g, r, a]
    );
  }
  class Tn extends se {
    constructor(e) {
      super(),
        re(this, e, Dn, $n, i, {
          userStats: 11,
          config: 0,
          todaysScore: 1,
          hasFinished: 2,
          daysSince: 12,
          isPrime: 3,
          guessRef: 4,
        });
    }
  }
  var Yn = yt(function (e, t) {
    e.exports = (function () {
      var t, n;

      function r() {
        return t.apply(null, arguments);
      }

      function s(e) {
        t = e;
      }

      function i(e) {
        return (
          e instanceof Array ||
          "[object Array]" === Object.prototype.toString.call(e)
        );
      }

      function o(e) {
        return (
          null != e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }

      function a(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      function l(e) {
        if (Object.getOwnPropertyNames)
          return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e) if (a(e, t)) return !1;
        return !0;
      }

      function u(e) {
        return void 0 === e;
      }

      function c(e) {
        return (
          "number" == typeof e ||
          "[object Number]" === Object.prototype.toString.call(e)
        );
      }

      function d(e) {
        return (
          e instanceof Date ||
          "[object Date]" === Object.prototype.toString.call(e)
        );
      }

      function h(e, t) {
        var n,
          r = [];
        for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
        return r;
      }

      function f(e, t) {
        for (var n in t) a(t, n) && (e[n] = t[n]);
        return (
          a(t, "toString") && (e.toString = t.toString),
          a(t, "valueOf") && (e.valueOf = t.valueOf),
          e
        );
      }

      function m(e, t, n, r) {
        return Jn(e, t, n, r, !0).utc();
      }

      function p() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        };
      }

      function g(e) {
        return null == e._pf && (e._pf = p()), e._pf;
      }

      function y(e) {
        if (null == e._isValid) {
          var t = g(e),
            r = n.call(t.parsedDateParts, function (e) {
              return null != e;
            }),
            s =
              !isNaN(e._d.getTime()) &&
              t.overflow < 0 &&
              !t.empty &&
              !t.invalidEra &&
              !t.invalidMonth &&
              !t.invalidWeekday &&
              !t.weekdayMismatch &&
              !t.nullInput &&
              !t.invalidFormat &&
              !t.userInvalidated &&
              (!t.meridiem || (t.meridiem && r));
          if (
            (e._strict &&
              (s =
                s &&
                0 === t.charsLeftOver &&
                0 === t.unusedTokens.length &&
                void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
          )
            return s;
          e._isValid = s;
        }
        return e._isValid;
      }

      function v(e) {
        var t = m(NaN);
        return null != e ? f(g(t), e) : (g(t).userInvalidated = !0), t;
      }
      n = Array.prototype.some
        ? Array.prototype.some
        : function (e) {
            var t,
              n = Object(this),
              r = n.length >>> 0;
            for (t = 0; t < r; t++)
              if (t in n && e.call(this, n[t], t, n)) return !0;
            return !1;
          };
      var w = (r.momentProperties = []),
        k = !1;

      function _(e, t) {
        var n, r, s;
        if (
          (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
          u(t._i) || (e._i = t._i),
          u(t._f) || (e._f = t._f),
          u(t._l) || (e._l = t._l),
          u(t._strict) || (e._strict = t._strict),
          u(t._tzm) || (e._tzm = t._tzm),
          u(t._isUTC) || (e._isUTC = t._isUTC),
          u(t._offset) || (e._offset = t._offset),
          u(t._pf) || (e._pf = g(t)),
          u(t._locale) || (e._locale = t._locale),
          w.length > 0)
        )
          for (n = 0; n < w.length; n++) u((s = t[(r = w[n])])) || (e[r] = s);
        return e;
      }

      function x(e) {
        _(this, e),
          (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
          this.isValid() || (this._d = new Date(NaN)),
          !1 === k && ((k = !0), r.updateOffset(this), (k = !1));
      }

      function b(e) {
        return e instanceof x || (null != e && null != e._isAMomentObject);
      }

      function S(e) {
        !1 === r.suppressDeprecationWarnings &&
          "undefined" != typeof console &&
          console.warn &&
          console.warn("Deprecation warning: " + e);
      }

      function M(e, t) {
        var n = !0;
        return f(function () {
          if (
            (null != r.deprecationHandler && r.deprecationHandler(null, e), n)
          ) {
            var s,
              i,
              o,
              l = [];
            for (i = 0; i < arguments.length; i++) {
              if (((s = ""), "object" == typeof arguments[i])) {
                for (o in ((s += "\n[" + i + "] "), arguments[0]))
                  a(arguments[0], o) &&
                    (s += o + ": " + arguments[0][o] + ", ");
                s = s.slice(0, -2);
              } else s = arguments[i];
              l.push(s);
            }
            S(
              e +
                "\nArguments: " +
                Array.prototype.slice.call(l).join("") +
                "\n" +
                new Error().stack
            ),
              (n = !1);
          }
          return t.apply(this, arguments);
        }, t);
      }
      var $,
        D = {};

      function T(e, t) {
        null != r.deprecationHandler && r.deprecationHandler(e, t),
          D[e] || (S(t), (D[e] = !0));
      }

      function Y(e) {
        return (
          ("undefined" != typeof Function && e instanceof Function) ||
          "[object Function]" === Object.prototype.toString.call(e)
        );
      }

      function C(e) {
        var t, n;
        for (n in e)
          a(e, n) && (Y((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
        (this._config = e),
          (this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          ));
      }

      function O(e, t) {
        var n,
          r = f({}, e);
        for (n in t)
          a(t, n) &&
            (o(e[n]) && o(t[n])
              ? ((r[n] = {}), f(r[n], e[n]), f(r[n], t[n]))
              : null != t[n]
              ? (r[n] = t[n])
              : delete r[n]);
        for (n in e) a(e, n) && !a(t, n) && o(e[n]) && (r[n] = f({}, r[n]));
        return r;
      }

      function P(e) {
        null != e && this.set(e);
      }
      (r.suppressDeprecationWarnings = !1),
        (r.deprecationHandler = null),
        ($ = Object.keys
          ? Object.keys
          : function (e) {
              var t,
                n = [];
              for (t in e) a(e, t) && n.push(t);
              return n;
            });
      var A = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      };

      function L(e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return Y(r) ? r.call(t, n) : r;
      }

      function N(e, t, n) {
        var r = "" + Math.abs(e),
          s = t - r.length;
        return (
          (e >= 0 ? (n ? "+" : "") : "-") +
          Math.pow(10, Math.max(0, s)).toString().substr(1) +
          r
        );
      }
      var H =
          /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        W = {},
        R = {};

      function F(e, t, n, r) {
        var s = r;
        "string" == typeof r &&
          (s = function () {
            return this[r]();
          }),
          e && (R[e] = s),
          t &&
            (R[t[0]] = function () {
              return N(s.apply(this, arguments), t[1], t[2]);
            }),
          n &&
            (R[n] = function () {
              return this.localeData().ordinal(s.apply(this, arguments), e);
            });
      }

      function G(e) {
        return e.match(/\[[\s\S]/)
          ? e.replace(/^\[|\]$/g, "")
          : e.replace(/\\/g, "");
      }

      function E(e) {
        var t,
          n,
          r = e.match(H);
        for (t = 0, n = r.length; t < n; t++)
          R[r[t]] ? (r[t] = R[r[t]]) : (r[t] = G(r[t]));
        return function (t) {
          var s,
            i = "";
          for (s = 0; s < n; s++) i += Y(r[s]) ? r[s].call(t, e) : r[s];
          return i;
        };
      }

      function j(e, t) {
        return e.isValid()
          ? ((t = B(t, e.localeData())), (W[t] = W[t] || E(t)), W[t](e))
          : e.localeData().invalidDate();
      }

      function B(e, t) {
        var n = 5;

        function r(e) {
          return t.longDateFormat(e) || e;
        }
        for (I.lastIndex = 0; n >= 0 && I.test(e); )
          (e = e.replace(I, r)), (I.lastIndex = 0), (n -= 1);
        return e;
      }
      var z = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      };

      function U(e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n
          ? t
          : ((this._longDateFormat[e] = n
              .match(H)
              .map(function (e) {
                return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e
                  ? e.slice(1)
                  : e;
              })
              .join("")),
            this._longDateFormat[e]);
      }
      var V = "Invalid date";

      function J() {
        return this._invalidDate;
      }
      var K = "%d",
        Z = /\d{1,2}/;

      function q(e) {
        return this._ordinal.replace("%d", e);
      }
      var X = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      };

      function Q(e, t, n, r) {
        var s = this._relativeTime[n];
        return Y(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
      }

      function ee(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return Y(n) ? n(t) : n.replace(/%s/i, t);
      }
      var te = {};

      function ne(e, t) {
        var n = e.toLowerCase();
        te[n] = te[n + "s"] = te[t] = e;
      }

      function re(e) {
        return "string" == typeof e ? te[e] || te[e.toLowerCase()] : void 0;
      }

      function se(e) {
        var t,
          n,
          r = {};
        for (n in e) a(e, n) && (t = re(n)) && (r[t] = e[n]);
        return r;
      }
      var ie = {};

      function oe(e, t) {
        ie[e] = t;
      }

      function ae(e) {
        var t,
          n = [];
        for (t in e)
          a(e, t) &&
            n.push({
              unit: t,
              priority: ie[t],
            });
        return (
          n.sort(function (e, t) {
            return e.priority - t.priority;
          }),
          n
        );
      }

      function le(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
      }

      function ue(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      }

      function ce(e) {
        var t = +e,
          n = 0;
        return 0 !== t && isFinite(t) && (n = ue(t)), n;
      }

      function de(e, t) {
        return function (n) {
          return null != n
            ? (fe(this, e, n), r.updateOffset(this, t), this)
            : he(this, e);
        };
      }

      function he(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
      }

      function fe(e, t, n) {
        e.isValid() &&
          !isNaN(n) &&
          ("FullYear" === t &&
          le(e.year()) &&
          1 === e.month() &&
          29 === e.date()
            ? ((n = ce(n)),
              e._d["set" + (e._isUTC ? "UTC" : "") + t](
                n,
                e.month(),
                Qe(n, e.month())
              ))
            : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
      }

      function me(e) {
        return Y(this[(e = re(e))]) ? this[e]() : this;
      }

      function pe(e, t) {
        if ("object" == typeof e) {
          var n,
            r = ae((e = se(e)));
          for (n = 0; n < r.length; n++) this[r[n].unit](e[r[n].unit]);
        } else if (Y(this[(e = re(e))])) return this[e](t);
        return this;
      }
      var ge,
        ye = /\d/,
        ve = /\d\d/,
        we = /\d{3}/,
        ke = /\d{4}/,
        _e = /[+-]?\d{6}/,
        xe = /\d\d?/,
        be = /\d\d\d\d?/,
        Se = /\d\d\d\d\d\d?/,
        Me = /\d{1,3}/,
        $e = /\d{1,4}/,
        De = /[+-]?\d{1,6}/,
        Te = /\d+/,
        Ye = /[+-]?\d+/,
        Ce = /Z|[+-]\d\d:?\d\d/gi,
        Oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Pe = /[+-]?\d+(\.\d{1,3})?/,
        Ae =
          /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

      function Le(e, t, n) {
        ge[e] = Y(t)
          ? t
          : function (e, r) {
              return e && n ? n : t;
            };
      }

      function Ne(e, t) {
        return a(ge, e) ? ge[e](t._strict, t._locale) : new RegExp(He(e));
      }

      function He(e) {
        return Ie(
          e
            .replace("\\", "")
            .replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function (e, t, n, r, s) {
                return t || n || r || s;
              }
            )
        );
      }

      function Ie(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      ge = {};
      var We = {};

      function Re(e, t) {
        var n,
          r = t;
        for (
          "string" == typeof e && (e = [e]),
            c(t) &&
              (r = function (e, n) {
                n[t] = ce(e);
              }),
            n = 0;
          n < e.length;
          n++
        )
          We[e[n]] = r;
      }

      function Fe(e, t) {
        Re(e, function (e, n, r, s) {
          (r._w = r._w || {}), t(e, r._w, r, s);
        });
      }

      function Ge(e, t, n) {
        null != t && a(We, e) && We[e](t, n._a, n, e);
      }
      var Ee,
        je = 0,
        Be = 1,
        ze = 2,
        Ue = 3,
        Ve = 4,
        Je = 5,
        Ke = 6,
        Ze = 7,
        qe = 8;

      function Xe(e, t) {
        return ((e % t) + t) % t;
      }

      function Qe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = Xe(t, 12);
        return (
          (e += (t - n) / 12), 1 === n ? (le(e) ? 29 : 28) : 31 - ((n % 7) % 2)
        );
      }
      (Ee = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (e) {
            var t;
            for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
            return -1;
          }),
        F("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }),
        F("MMM", 0, 0, function (e) {
          return this.localeData().monthsShort(this, e);
        }),
        F("MMMM", 0, 0, function (e) {
          return this.localeData().months(this, e);
        }),
        ne("month", "M"),
        oe("month", 8),
        Le("M", xe),
        Le("MM", xe, ve),
        Le("MMM", function (e, t) {
          return t.monthsShortRegex(e);
        }),
        Le("MMMM", function (e, t) {
          return t.monthsRegex(e);
        }),
        Re(["M", "MM"], function (e, t) {
          t[Be] = ce(e) - 1;
        }),
        Re(["MMM", "MMMM"], function (e, t, n, r) {
          var s = n._locale.monthsParse(e, r, n._strict);
          null != s ? (t[Be] = s) : (g(n).invalidMonth = e);
        });
      var et =
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        tt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        rt = Ae,
        st = Ae;

      function it(e, t) {
        return e
          ? i(this._months)
            ? this._months[e.month()]
            : this._months[
                (this._months.isFormat || nt).test(t) ? "format" : "standalone"
              ][e.month()]
          : i(this._months)
          ? this._months
          : this._months.standalone;
      }

      function ot(e, t) {
        return e
          ? i(this._monthsShort)
            ? this._monthsShort[e.month()]
            : this._monthsShort[nt.test(t) ? "format" : "standalone"][e.month()]
          : i(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }

      function at(e, t, n) {
        var r,
          s,
          i,
          o = e.toLocaleLowerCase();
        if (!this._monthsParse)
          for (
            this._monthsParse = [],
              this._longMonthsParse = [],
              this._shortMonthsParse = [],
              r = 0;
            r < 12;
            ++r
          )
            (i = m([2e3, r])),
              (this._shortMonthsParse[r] = this.monthsShort(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._longMonthsParse[r] = this.months(
                i,
                ""
              ).toLocaleLowerCase());
        return n
          ? "MMM" === t
            ? -1 !== (s = Ee.call(this._shortMonthsParse, o))
              ? s
              : null
            : -1 !== (s = Ee.call(this._longMonthsParse, o))
            ? s
            : null
          : "MMM" === t
          ? -1 !== (s = Ee.call(this._shortMonthsParse, o)) ||
            -1 !== (s = Ee.call(this._longMonthsParse, o))
            ? s
            : null
          : -1 !== (s = Ee.call(this._longMonthsParse, o)) ||
            -1 !== (s = Ee.call(this._shortMonthsParse, o))
          ? s
          : null;
      }

      function lt(e, t, n) {
        var r, s, i;
        if (this._monthsParseExact) return at.call(this, e, t, n);
        for (
          this._monthsParse ||
            ((this._monthsParse = []),
            (this._longMonthsParse = []),
            (this._shortMonthsParse = [])),
            r = 0;
          r < 12;
          r++
        ) {
          if (
            ((s = m([2e3, r])),
            n &&
              !this._longMonthsParse[r] &&
              ((this._longMonthsParse[r] = new RegExp(
                "^" + this.months(s, "").replace(".", "") + "$",
                "i"
              )),
              (this._shortMonthsParse[r] = new RegExp(
                "^" + this.monthsShort(s, "").replace(".", "") + "$",
                "i"
              ))),
            n ||
              this._monthsParse[r] ||
              ((i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
              (this._monthsParse[r] = new RegExp(i.replace(".", ""), "i"))),
            n && "MMMM" === t && this._longMonthsParse[r].test(e))
          )
            return r;
          if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
          if (!n && this._monthsParse[r].test(e)) return r;
        }
      }

      function ut(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
          if (/^\d+$/.test(t)) t = ce(t);
          else if (!c((t = e.localeData().monthsParse(t)))) return e;
        return (
          (n = Math.min(e.date(), Qe(e.year(), t))),
          e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
          e
        );
      }

      function ct(e) {
        return null != e
          ? (ut(this, e), r.updateOffset(this, !0), this)
          : he(this, "Month");
      }

      function dt() {
        return Qe(this.year(), this.month());
      }

      function ht(e) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || mt.call(this),
            e ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = rt),
            this._monthsShortStrictRegex && e
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex);
      }

      function ft(e) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || mt.call(this),
            e ? this._monthsStrictRegex : this._monthsRegex)
          : (a(this, "_monthsRegex") || (this._monthsRegex = st),
            this._monthsStrictRegex && e
              ? this._monthsStrictRegex
              : this._monthsRegex);
      }

      function mt() {
        function e(e, t) {
          return t.length - e.length;
        }
        var t,
          n,
          r = [],
          s = [],
          i = [];
        for (t = 0; t < 12; t++)
          (n = m([2e3, t])),
            r.push(this.monthsShort(n, "")),
            s.push(this.months(n, "")),
            i.push(this.months(n, "")),
            i.push(this.monthsShort(n, ""));
        for (r.sort(e), s.sort(e), i.sort(e), t = 0; t < 12; t++)
          (r[t] = Ie(r[t])), (s[t] = Ie(s[t]));
        for (t = 0; t < 24; t++) i[t] = Ie(i[t]);
        (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._monthsShortRegex = this._monthsRegex),
          (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
          (this._monthsShortStrictRegex = new RegExp(
            "^(" + r.join("|") + ")",
            "i"
          ));
      }

      function pt(e) {
        return le(e) ? 366 : 365;
      }
      F("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? N(e, 4) : "+" + e;
      }),
        F(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }),
        F(0, ["YYYY", 4], 0, "year"),
        F(0, ["YYYYY", 5], 0, "year"),
        F(0, ["YYYYYY", 6, !0], 0, "year"),
        ne("year", "y"),
        oe("year", 1),
        Le("Y", Ye),
        Le("YY", xe, ve),
        Le("YYYY", $e, ke),
        Le("YYYYY", De, _e),
        Le("YYYYYY", De, _e),
        Re(["YYYYY", "YYYYYY"], je),
        Re("YYYY", function (e, t) {
          t[je] = 2 === e.length ? r.parseTwoDigitYear(e) : ce(e);
        }),
        Re("YY", function (e, t) {
          t[je] = r.parseTwoDigitYear(e);
        }),
        Re("Y", function (e, t) {
          t[je] = parseInt(e, 10);
        }),
        (r.parseTwoDigitYear = function (e) {
          return ce(e) + (ce(e) > 68 ? 1900 : 2e3);
        });
      var gt = de("FullYear", !0);

      function yt() {
        return le(this.year());
      }

      function wt(e, t, n, r, s, i, o) {
        var a;
        return (
          e < 100 && e >= 0
            ? ((a = new Date(e + 400, t, n, r, s, i, o)),
              isFinite(a.getFullYear()) && a.setFullYear(e))
            : (a = new Date(e, t, n, r, s, i, o)),
          a
        );
      }

      function kt(e) {
        var t, n;
        return (
          e < 100 && e >= 0
            ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
              (t = new Date(Date.UTC.apply(null, n))),
              isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
            : (t = new Date(Date.UTC.apply(null, arguments))),
          t
        );
      }

      function _t(e, t, n) {
        var r = 7 + t - n;
        return (-(7 + kt(e, 0, r).getUTCDay() - t) % 7) + r - 1;
      }

      function xt(e, t, n, r, s) {
        var i,
          o,
          a = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + _t(e, r, s);
        return (
          a <= 0
            ? (o = pt((i = e - 1)) + a)
            : a > pt(e)
            ? ((i = e + 1), (o = a - pt(e)))
            : ((i = e), (o = a)),
          {
            year: i,
            dayOfYear: o,
          }
        );
      }

      function bt(e, t, n) {
        var r,
          s,
          i = _t(e.year(), t, n),
          o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
        return (
          o < 1
            ? (r = o + St((s = e.year() - 1), t, n))
            : o > St(e.year(), t, n)
            ? ((r = o - St(e.year(), t, n)), (s = e.year() + 1))
            : ((s = e.year()), (r = o)),
          {
            week: r,
            year: s,
          }
        );
      }

      function St(e, t, n) {
        var r = _t(e, t, n),
          s = _t(e + 1, t, n);
        return (pt(e) - r + s) / 7;
      }

      function Mt(e) {
        return bt(e, this._week.dow, this._week.doy).week;
      }
      F("w", ["ww", 2], "wo", "week"),
        F("W", ["WW", 2], "Wo", "isoWeek"),
        ne("week", "w"),
        ne("isoWeek", "W"),
        oe("week", 5),
        oe("isoWeek", 5),
        Le("w", xe),
        Le("ww", xe, ve),
        Le("W", xe),
        Le("WW", xe, ve),
        Fe(["w", "ww", "W", "WW"], function (e, t, n, r) {
          t[r.substr(0, 1)] = ce(e);
        });
      var $t = {
        dow: 0,
        doy: 6,
      };

      function Dt() {
        return this._week.dow;
      }

      function Tt() {
        return this._week.doy;
      }

      function Yt(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
      }

      function Ct(e) {
        var t = bt(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
      }

      function Ot(e, t) {
        return "string" != typeof e
          ? e
          : isNaN(e)
          ? "number" == typeof (e = t.weekdaysParse(e))
            ? e
            : null
          : parseInt(e, 10);
      }

      function Pt(e, t) {
        return "string" == typeof e
          ? t.weekdaysParse(e) % 7 || 7
          : isNaN(e)
          ? null
          : e;
      }

      function At(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t));
      }
      F("d", 0, "do", "day"),
        F("dd", 0, 0, function (e) {
          return this.localeData().weekdaysMin(this, e);
        }),
        F("ddd", 0, 0, function (e) {
          return this.localeData().weekdaysShort(this, e);
        }),
        F("dddd", 0, 0, function (e) {
          return this.localeData().weekdays(this, e);
        }),
        F("e", 0, 0, "weekday"),
        F("E", 0, 0, "isoWeekday"),
        ne("day", "d"),
        ne("weekday", "e"),
        ne("isoWeekday", "E"),
        oe("day", 11),
        oe("weekday", 11),
        oe("isoWeekday", 11),
        Le("d", xe),
        Le("e", xe),
        Le("E", xe),
        Le("dd", function (e, t) {
          return t.weekdaysMinRegex(e);
        }),
        Le("ddd", function (e, t) {
          return t.weekdaysShortRegex(e);
        }),
        Le("dddd", function (e, t) {
          return t.weekdaysRegex(e);
        }),
        Fe(["dd", "ddd", "dddd"], function (e, t, n, r) {
          var s = n._locale.weekdaysParse(e, r, n._strict);
          null != s ? (t.d = s) : (g(n).invalidWeekday = e);
        }),
        Fe(["d", "e", "E"], function (e, t, n, r) {
          t[r] = ce(e);
        });
      var Lt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
          "_"
        ),
        Nt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ht = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        It = Ae,
        Wt = Ae,
        Rt = Ae;

      function Ft(e, t) {
        var n = i(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              e && !0 !== e && this._weekdays.isFormat.test(t)
                ? "format"
                : "standalone"
            ];
        return !0 === e ? At(n, this._week.dow) : e ? n[e.day()] : n;
      }

      function Gt(e) {
        return !0 === e
          ? At(this._weekdaysShort, this._week.dow)
          : e
          ? this._weekdaysShort[e.day()]
          : this._weekdaysShort;
      }

      function Et(e) {
        return !0 === e
          ? At(this._weekdaysMin, this._week.dow)
          : e
          ? this._weekdaysMin[e.day()]
          : this._weekdaysMin;
      }

      function jt(e, t, n) {
        var r,
          s,
          i,
          o = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (
            this._weekdaysParse = [],
              this._shortWeekdaysParse = [],
              this._minWeekdaysParse = [],
              r = 0;
            r < 7;
            ++r
          )
            (i = m([2e3, 1]).day(r)),
              (this._minWeekdaysParse[r] = this.weekdaysMin(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._shortWeekdaysParse[r] = this.weekdaysShort(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._weekdaysParse[r] = this.weekdays(
                i,
                ""
              ).toLocaleLowerCase());
        return n
          ? "dddd" === t
            ? -1 !== (s = Ee.call(this._weekdaysParse, o))
              ? s
              : null
            : "ddd" === t
            ? -1 !== (s = Ee.call(this._shortWeekdaysParse, o))
              ? s
              : null
            : -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : "dddd" === t
          ? -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._shortWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : "ddd" === t
          ? -1 !== (s = Ee.call(this._shortWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : -1 !== (s = Ee.call(this._minWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._shortWeekdaysParse, o))
          ? s
          : null;
      }

      function Bt(e, t, n) {
        var r, s, i;
        if (this._weekdaysParseExact) return jt.call(this, e, t, n);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            r = 0;
          r < 7;
          r++
        ) {
          if (
            ((s = m([2e3, 1]).day(r)),
            n &&
              !this._fullWeekdaysParse[r] &&
              ((this._fullWeekdaysParse[r] = new RegExp(
                "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._shortWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._minWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
                "i"
              ))),
            this._weekdaysParse[r] ||
              ((i =
                "^" +
                this.weekdays(s, "") +
                "|^" +
                this.weekdaysShort(s, "") +
                "|^" +
                this.weekdaysMin(s, "")),
              (this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i"))),
            n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
          )
            return r;
          if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
          if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
          if (!n && this._weekdaysParse[r].test(e)) return r;
        }
      }

      function zt(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e
          ? ((e = Ot(e, this.localeData())), this.add(e - t, "d"))
          : t;
      }

      function Ut(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d");
      }

      function Vt(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          var t = Pt(e, this.localeData());
          return this.day(this.day() % 7 ? t : t - 7);
        }
        return this.day() || 7;
      }

      function Jt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = It),
            this._weekdaysStrictRegex && e
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex);
      }

      function Kt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Wt),
            this._weekdaysShortStrictRegex && e
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex);
      }

      function Zt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Rt),
            this._weekdaysMinStrictRegex && e
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex);
      }

      function qt() {
        function e(e, t) {
          return t.length - e.length;
        }
        var t,
          n,
          r,
          s,
          i,
          o = [],
          a = [],
          l = [],
          u = [];
        for (t = 0; t < 7; t++)
          (n = m([2e3, 1]).day(t)),
            (r = Ie(this.weekdaysMin(n, ""))),
            (s = Ie(this.weekdaysShort(n, ""))),
            (i = Ie(this.weekdays(n, ""))),
            o.push(r),
            a.push(s),
            l.push(i),
            u.push(r),
            u.push(s),
            u.push(i);
        o.sort(e),
          a.sort(e),
          l.sort(e),
          u.sort(e),
          (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
          (this._weekdaysShortRegex = this._weekdaysRegex),
          (this._weekdaysMinRegex = this._weekdaysRegex),
          (this._weekdaysStrictRegex = new RegExp(
            "^(" + l.join("|") + ")",
            "i"
          )),
          (this._weekdaysShortStrictRegex = new RegExp(
            "^(" + a.join("|") + ")",
            "i"
          )),
          (this._weekdaysMinStrictRegex = new RegExp(
            "^(" + o.join("|") + ")",
            "i"
          ));
      }

      function Xt() {
        return this.hours() % 12 || 12;
      }

      function Qt() {
        return this.hours() || 24;
      }

      function en(e, t) {
        F(e, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
      }

      function tn(e, t) {
        return t._meridiemParse;
      }

      function nn(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
      }
      F("H", ["HH", 2], 0, "hour"),
        F("h", ["hh", 2], 0, Xt),
        F("k", ["kk", 2], 0, Qt),
        F("hmm", 0, 0, function () {
          return "" + Xt.apply(this) + N(this.minutes(), 2);
        }),
        F("hmmss", 0, 0, function () {
          return (
            "" + Xt.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
          );
        }),
        F("Hmm", 0, 0, function () {
          return "" + this.hours() + N(this.minutes(), 2);
        }),
        F("Hmmss", 0, 0, function () {
          return (
            "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
          );
        }),
        en("a", !0),
        en("A", !1),
        ne("hour", "h"),
        oe("hour", 13),
        Le("a", tn),
        Le("A", tn),
        Le("H", xe),
        Le("h", xe),
        Le("k", xe),
        Le("HH", xe, ve),
        Le("hh", xe, ve),
        Le("kk", xe, ve),
        Le("hmm", be),
        Le("hmmss", Se),
        Le("Hmm", be),
        Le("Hmmss", Se),
        Re(["H", "HH"], Ue),
        Re(["k", "kk"], function (e, t, n) {
          var r = ce(e);
          t[Ue] = 24 === r ? 0 : r;
        }),
        Re(["a", "A"], function (e, t, n) {
          (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
        }),
        Re(["h", "hh"], function (e, t, n) {
          (t[Ue] = ce(e)), (g(n).bigHour = !0);
        }),
        Re("hmm", function (e, t, n) {
          var r = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r))),
            (g(n).bigHour = !0);
        }),
        Re("hmmss", function (e, t, n) {
          var r = e.length - 4,
            s = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r, 2))),
            (t[Je] = ce(e.substr(s))),
            (g(n).bigHour = !0);
        }),
        Re("Hmm", function (e, t, n) {
          var r = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))), (t[Ve] = ce(e.substr(r)));
        }),
        Re("Hmmss", function (e, t, n) {
          var r = e.length - 4,
            s = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r, 2))),
            (t[Je] = ce(e.substr(s)));
        });
      var rn = /[ap]\.?m?\.?/i,
        sn = de("Hours", !0);

      function on(e, t, n) {
        return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
      }
      var an,
        ln = {
          calendar: A,
          longDateFormat: z,
          invalidDate: V,
          ordinal: K,
          dayOfMonthOrdinalParse: Z,
          relativeTime: X,
          months: et,
          monthsShort: tt,
          week: $t,
          weekdays: Lt,
          weekdaysMin: Ht,
          weekdaysShort: Nt,
          meridiemParse: rn,
        },
        un = {},
        cn = {};

      function dn(e, t) {
        var n,
          r = Math.min(e.length, t.length);
        for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
        return r;
      }

      function hn(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
      }

      function fn(e) {
        for (var t, n, r, s, i = 0; i < e.length; ) {
          for (
            t = (s = hn(e[i]).split("-")).length,
              n = (n = hn(e[i + 1])) ? n.split("-") : null;
            t > 0;

          ) {
            if ((r = mn(s.slice(0, t).join("-")))) return r;
            if (n && n.length >= t && dn(s, n) >= t - 1) break;
            t--;
          }
          i++;
        }
        return an;
      }

      function mn(t) {
        var n = null;
        if (void 0 === un[t] && e && e.exports)
          try {
            (n = an._abbr), vt("./locale/" + t), pn(n);
          } catch (e) {
            un[t] = null;
          }
        return un[t];
      }

      function pn(e, t) {
        var n;
        return (
          e &&
            ((n = u(t) ? vn(e) : gn(e, t))
              ? (an = n)
              : "undefined" != typeof console &&
                console.warn &&
                console.warn(
                  "Locale " + e + " not found. Did you forget to load it?"
                )),
          an._abbr
        );
      }

      function gn(e, t) {
        if (null !== t) {
          var n,
            r = ln;
          if (((t.abbr = e), null != un[e]))
            T(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ),
              (r = un[e]._config);
          else if (null != t.parentLocale)
            if (null != un[t.parentLocale]) r = un[t.parentLocale]._config;
            else {
              if (null == (n = mn(t.parentLocale)))
                return (
                  cn[t.parentLocale] || (cn[t.parentLocale] = []),
                  cn[t.parentLocale].push({
                    name: e,
                    config: t,
                  }),
                  null
                );
              r = n._config;
            }
          return (
            (un[e] = new P(O(r, t))),
            cn[e] &&
              cn[e].forEach(function (e) {
                gn(e.name, e.config);
              }),
            pn(e),
            un[e]
          );
        }
        return delete un[e], null;
      }

      function yn(e, t) {
        if (null != t) {
          var n,
            r,
            s = ln;
          null != un[e] && null != un[e].parentLocale
            ? un[e].set(O(un[e]._config, t))
            : (null != (r = mn(e)) && (s = r._config),
              (t = O(s, t)),
              null == r && (t.abbr = e),
              ((n = new P(t)).parentLocale = un[e]),
              (un[e] = n)),
            pn(e);
        } else
          null != un[e] &&
            (null != un[e].parentLocale
              ? ((un[e] = un[e].parentLocale), e === pn() && pn(e))
              : null != un[e] && delete un[e]);
        return un[e];
      }

      function vn(e) {
        var t;
        if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
          return an;
        if (!i(e)) {
          if ((t = mn(e))) return t;
          e = [e];
        }
        return fn(e);
      }

      function wn() {
        return $(un);
      }

      function kn(e) {
        var t,
          n = e._a;
        return (
          n &&
            -2 === g(e).overflow &&
            ((t =
              n[Be] < 0 || n[Be] > 11
                ? Be
                : n[ze] < 1 || n[ze] > Qe(n[je], n[Be])
                ? ze
                : n[Ue] < 0 ||
                  n[Ue] > 24 ||
                  (24 === n[Ue] && (0 !== n[Ve] || 0 !== n[Je] || 0 !== n[Ke]))
                ? Ue
                : n[Ve] < 0 || n[Ve] > 59
                ? Ve
                : n[Je] < 0 || n[Je] > 59
                ? Je
                : n[Ke] < 0 || n[Ke] > 999
                ? Ke
                : -1),
            g(e)._overflowDayOfYear && (t < je || t > ze) && (t = ze),
            g(e)._overflowWeeks && -1 === t && (t = Ze),
            g(e)._overflowWeekday && -1 === t && (t = qe),
            (g(e).overflow = t)),
          e
        );
      }
      var _n =
          /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        xn =
          /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        bn = /Z|[+-]\d\d(?::?\d\d)?/,
        Sn = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, !1],
          ["YYYY", /\d{4}/, !1],
        ],
        Mn = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/],
        ],
        $n = /^\/?Date\((-?\d+)/i,
        Dn =
          /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Tn = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480,
        };

      function Yn(e) {
        var t,
          n,
          r,
          s,
          i,
          o,
          a = e._i,
          l = _n.exec(a) || xn.exec(a);
        if (l) {
          for (g(e).iso = !0, t = 0, n = Sn.length; t < n; t++)
            if (Sn[t][1].exec(l[1])) {
              (s = Sn[t][0]), (r = !1 !== Sn[t][2]);
              break;
            }
          if (null == s) return void (e._isValid = !1);
          if (l[3]) {
            for (t = 0, n = Mn.length; t < n; t++)
              if (Mn[t][1].exec(l[3])) {
                i = (l[2] || " ") + Mn[t][0];
                break;
              }
            if (null == i) return void (e._isValid = !1);
          }
          if (!r && null != i) return void (e._isValid = !1);
          if (l[4]) {
            if (!bn.exec(l[4])) return void (e._isValid = !1);
            o = "Z";
          }
          (e._f = s + (i || "") + (o || "")), Gn(e);
        } else e._isValid = !1;
      }

      function Cn(e, t, n, r, s, i) {
        var o = [
          On(e),
          tt.indexOf(t),
          parseInt(n, 10),
          parseInt(r, 10),
          parseInt(s, 10),
        ];
        return i && o.push(parseInt(i, 10)), o;
      }

      function On(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
      }

      function Pn(e) {
        return e
          .replace(/\([^)]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      }

      function An(e, t, n) {
        return (
          !e ||
          Nt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
          ((g(n).weekdayMismatch = !0), (n._isValid = !1), !1)
        );
      }

      function Ln(e, t, n) {
        if (e) return Tn[e];
        if (t) return 0;
        var r = parseInt(n, 10),
          s = r % 100;
        return ((r - s) / 100) * 60 + s;
      }

      function Nn(e) {
        var t,
          n = Dn.exec(Pn(e._i));
        if (n) {
          if (((t = Cn(n[4], n[3], n[2], n[5], n[6], n[7])), !An(n[1], t, e)))
            return;
          (e._a = t),
            (e._tzm = Ln(n[8], n[9], n[10])),
            (e._d = kt.apply(null, e._a)),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            (g(e).rfc2822 = !0);
        } else e._isValid = !1;
      }

      function Hn(e) {
        var t = $n.exec(e._i);
        null === t
          ? (Yn(e),
            !1 === e._isValid &&
              (delete e._isValid,
              Nn(e),
              !1 === e._isValid &&
                (delete e._isValid,
                e._strict ? (e._isValid = !1) : r.createFromInputFallback(e))))
          : (e._d = new Date(+t[1]));
      }

      function In(e, t, n) {
        return null != e ? e : null != t ? t : n;
      }

      function Wn(e) {
        var t = new Date(r.now());
        return e._useUTC
          ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
          : [t.getFullYear(), t.getMonth(), t.getDate()];
      }

      function Rn(e) {
        var t,
          n,
          r,
          s,
          i,
          o = [];
        if (!e._d) {
          for (
            r = Wn(e),
              e._w && null == e._a[ze] && null == e._a[Be] && Fn(e),
              null != e._dayOfYear &&
                ((i = In(e._a[je], r[je])),
                (e._dayOfYear > pt(i) || 0 === e._dayOfYear) &&
                  (g(e)._overflowDayOfYear = !0),
                (n = kt(i, 0, e._dayOfYear)),
                (e._a[Be] = n.getUTCMonth()),
                (e._a[ze] = n.getUTCDate())),
              t = 0;
            t < 3 && null == e._a[t];
            ++t
          )
            e._a[t] = o[t] = r[t];
          for (; t < 7; t++)
            e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
          24 === e._a[Ue] &&
            0 === e._a[Ve] &&
            0 === e._a[Je] &&
            0 === e._a[Ke] &&
            ((e._nextDay = !0), (e._a[Ue] = 0)),
            (e._d = (e._useUTC ? kt : wt).apply(null, o)),
            (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[Ue] = 24),
            e._w &&
              void 0 !== e._w.d &&
              e._w.d !== s &&
              (g(e).weekdayMismatch = !0);
        }
      }

      function Fn(e) {
        var t, n, r, s, i, o, a, l, u;
        null != (t = e._w).GG || null != t.W || null != t.E
          ? ((i = 1),
            (o = 4),
            (n = In(t.GG, e._a[je], bt(Kn(), 1, 4).year)),
            (r = In(t.W, 1)),
            ((s = In(t.E, 1)) < 1 || s > 7) && (l = !0))
          : ((i = e._locale._week.dow),
            (o = e._locale._week.doy),
            (u = bt(Kn(), i, o)),
            (n = In(t.gg, e._a[je], u.year)),
            (r = In(t.w, u.week)),
            null != t.d
              ? ((s = t.d) < 0 || s > 6) && (l = !0)
              : null != t.e
              ? ((s = t.e + i), (t.e < 0 || t.e > 6) && (l = !0))
              : (s = i)),
          r < 1 || r > St(n, i, o)
            ? (g(e)._overflowWeeks = !0)
            : null != l
            ? (g(e)._overflowWeekday = !0)
            : ((a = xt(n, r, s, i, o)),
              (e._a[je] = a.year),
              (e._dayOfYear = a.dayOfYear));
      }

      function Gn(e) {
        if (e._f !== r.ISO_8601)
          if (e._f !== r.RFC_2822) {
            (e._a = []), (g(e).empty = !0);
            var t,
              n,
              s,
              i,
              o,
              a,
              l = "" + e._i,
              u = l.length,
              c = 0;
            for (
              s = B(e._f, e._locale).match(H) || [], t = 0;
              t < s.length;
              t++
            )
              (i = s[t]),
                (n = (l.match(Ne(i, e)) || [])[0]) &&
                  ((o = l.substr(0, l.indexOf(n))).length > 0 &&
                    g(e).unusedInput.push(o),
                  (l = l.slice(l.indexOf(n) + n.length)),
                  (c += n.length)),
                R[i]
                  ? (n ? (g(e).empty = !1) : g(e).unusedTokens.push(i),
                    Ge(i, n, e))
                  : e._strict && !n && g(e).unusedTokens.push(i);
            (g(e).charsLeftOver = u - c),
              l.length > 0 && g(e).unusedInput.push(l),
              e._a[Ue] <= 12 &&
                !0 === g(e).bigHour &&
                e._a[Ue] > 0 &&
                (g(e).bigHour = void 0),
              (g(e).parsedDateParts = e._a.slice(0)),
              (g(e).meridiem = e._meridiem),
              (e._a[Ue] = En(e._locale, e._a[Ue], e._meridiem)),
              null !== (a = g(e).era) &&
                (e._a[je] = e._locale.erasConvertYear(a, e._a[je])),
              Rn(e),
              kn(e);
          } else Nn(e);
        else Yn(e);
      }

      function En(e, t, n) {
        var r;
        return null == n
          ? t
          : null != e.meridiemHour
          ? e.meridiemHour(t, n)
          : null != e.isPM
          ? ((r = e.isPM(n)) && t < 12 && (t += 12),
            r || 12 !== t || (t = 0),
            t)
          : t;
      }

      function jn(e) {
        var t,
          n,
          r,
          s,
          i,
          o,
          a = !1;
        if (0 === e._f.length)
          return (g(e).invalidFormat = !0), void (e._d = new Date(NaN));
        for (s = 0; s < e._f.length; s++)
          (i = 0),
            (o = !1),
            (t = _({}, e)),
            null != e._useUTC && (t._useUTC = e._useUTC),
            (t._f = e._f[s]),
            Gn(t),
            y(t) && (o = !0),
            (i += g(t).charsLeftOver),
            (i += 10 * g(t).unusedTokens.length),
            (g(t).score = i),
            a
              ? i < r && ((r = i), (n = t))
              : (null == r || i < r || o) && ((r = i), (n = t), o && (a = !0));
        f(e, n || t);
      }

      function Bn(e) {
        if (!e._d) {
          var t = se(e._i),
            n = void 0 === t.day ? t.date : t.day;
          (e._a = h(
            [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
            function (e) {
              return e && parseInt(e, 10);
            }
          )),
            Rn(e);
        }
      }

      function zn(e) {
        var t = new x(kn(Un(e)));
        return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
      }

      function Un(e) {
        var t = e._i,
          n = e._f;
        return (
          (e._locale = e._locale || vn(e._l)),
          null === t || (void 0 === n && "" === t)
            ? v({
                nullInput: !0,
              })
            : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
              b(t)
                ? new x(kn(t))
                : (d(t) ? (e._d = t) : i(n) ? jn(e) : n ? Gn(e) : Vn(e),
                  y(e) || (e._d = null),
                  e))
        );
      }

      function Vn(e) {
        var t = e._i;
        u(t)
          ? (e._d = new Date(r.now()))
          : d(t)
          ? (e._d = new Date(t.valueOf()))
          : "string" == typeof t
          ? Hn(e)
          : i(t)
          ? ((e._a = h(t.slice(0), function (e) {
              return parseInt(e, 10);
            })),
            Rn(e))
          : o(t)
          ? Bn(e)
          : c(t)
          ? (e._d = new Date(t))
          : r.createFromInputFallback(e);
      }

      function Jn(e, t, n, r, s) {
        var a = {};
        return (
          (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
          (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
          ((o(e) && l(e)) || (i(e) && 0 === e.length)) && (e = void 0),
          (a._isAMomentObject = !0),
          (a._useUTC = a._isUTC = s),
          (a._l = n),
          (a._i = e),
          (a._f = t),
          (a._strict = r),
          zn(a)
        );
      }

      function Kn(e, t, n, r) {
        return Jn(e, t, n, r, !1);
      }
      (r.createFromInputFallback = M(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (e) {
          e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
        }
      )),
        (r.ISO_8601 = function () {}),
        (r.RFC_2822 = function () {});
      var Zn = M(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var e = Kn.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e < this ? this : e) : v();
          }
        ),
        qn = M(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var e = Kn.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e > this ? this : e) : v();
          }
        );

      function Xn(e, t) {
        var n, r;
        if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length)) return Kn();
        for (n = t[0], r = 1; r < t.length; ++r)
          (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
        return n;
      }

      function Qn() {
        return Xn("isBefore", [].slice.call(arguments, 0));
      }

      function er() {
        return Xn("isAfter", [].slice.call(arguments, 0));
      }
      var tr = function () {
          return Date.now ? Date.now() : +new Date();
        },
        nr = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];

      function rr(e) {
        var t,
          n,
          r = !1;
        for (t in e)
          if (
            a(e, t) &&
            (-1 === Ee.call(nr, t) || (null != e[t] && isNaN(e[t])))
          )
            return !1;
        for (n = 0; n < nr.length; ++n)
          if (e[nr[n]]) {
            if (r) return !1;
            parseFloat(e[nr[n]]) !== ce(e[nr[n]]) && (r = !0);
          }
        return !0;
      }

      function sr() {
        return this._isValid;
      }

      function ir() {
        return Tr(NaN);
      }

      function or(e) {
        var t = se(e),
          n = t.year || 0,
          r = t.quarter || 0,
          s = t.month || 0,
          i = t.week || t.isoWeek || 0,
          o = t.day || 0,
          a = t.hour || 0,
          l = t.minute || 0,
          u = t.second || 0,
          c = t.millisecond || 0;
        (this._isValid = rr(t)),
          (this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60),
          (this._days = +o + 7 * i),
          (this._months = +s + 3 * r + 12 * n),
          (this._data = {}),
          (this._locale = vn()),
          this._bubble();
      }

      function ar(e) {
        return e instanceof or;
      }

      function lr(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
      }

      function ur(e, t, n) {
        var r,
          s = Math.min(e.length, t.length),
          i = Math.abs(e.length - t.length),
          o = 0;
        for (r = 0; r < s; r++)
          ((n && e[r] !== t[r]) || (!n && ce(e[r]) !== ce(t[r]))) && o++;
        return o + i;
      }

      function cr(e, t) {
        F(e, 0, 0, function () {
          var e = this.utcOffset(),
            n = "+";
          return (
            e < 0 && ((e = -e), (n = "-")),
            n + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
          );
        });
      }
      cr("Z", ":"),
        cr("ZZ", ""),
        Le("Z", Oe),
        Le("ZZ", Oe),
        Re(["Z", "ZZ"], function (e, t, n) {
          (n._useUTC = !0), (n._tzm = hr(Oe, e));
        });
      var dr = /([\+\-]|\d\d)/gi;

      function hr(e, t) {
        var n,
          r,
          s = (t || "").match(e);
        return null === s
          ? null
          : 0 ===
            (r =
              60 *
                (n = ((s[s.length - 1] || []) + "").match(dr) || [
                  "-",
                  0,
                  0,
                ])[1] +
              ce(n[2]))
          ? 0
          : "+" === n[0]
          ? r
          : -r;
      }

      function fr(e, t) {
        var n, s;
        return t._isUTC
          ? ((n = t.clone()),
            (s = (b(e) || d(e) ? e.valueOf() : Kn(e).valueOf()) - n.valueOf()),
            n._d.setTime(n._d.valueOf() + s),
            r.updateOffset(n, !1),
            n)
          : Kn(e).local();
      }

      function mr(e) {
        return -Math.round(e._d.getTimezoneOffset());
      }

      function pr(e, t, n) {
        var s,
          i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = hr(Oe, e))) return this;
          } else Math.abs(e) < 16 && !n && (e *= 60);
          return (
            !this._isUTC && t && (s = mr(this)),
            (this._offset = e),
            (this._isUTC = !0),
            null != s && this.add(s, "m"),
            i !== e &&
              (!t || this._changeInProgress
                ? Ar(this, Tr(e - i, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  r.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this
          );
        }
        return this._isUTC ? i : mr(this);
      }

      function gr(e, t) {
        return null != e
          ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
          : -this.utcOffset();
      }

      function yr(e) {
        return this.utcOffset(0, e);
      }

      function vr(e) {
        return (
          this._isUTC &&
            (this.utcOffset(0, e),
            (this._isUTC = !1),
            e && this.subtract(mr(this), "m")),
          this
        );
      }

      function wr() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var e = hr(Ce, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }
        return this;
      }

      function kr(e) {
        return (
          !!this.isValid() &&
          ((e = e ? Kn(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
        );
      }

      function _r() {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
        );
      }

      function xr() {
        if (!u(this._isDSTShifted)) return this._isDSTShifted;
        var e,
          t = {};
        return (
          _(t, this),
          (t = Un(t))._a
            ? ((e = t._isUTC ? m(t._a) : Kn(t._a)),
              (this._isDSTShifted =
                this.isValid() && ur(t._a, e.toArray()) > 0))
            : (this._isDSTShifted = !1),
          this._isDSTShifted
        );
      }

      function br() {
        return !!this.isValid() && !this._isUTC;
      }

      function Sr() {
        return !!this.isValid() && this._isUTC;
      }

      function Mr() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
      }
      r.updateOffset = function () {};
      var $r = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Dr =
          /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function Tr(e, t) {
        var n,
          r,
          s,
          i = e,
          o = null;
        return (
          ar(e)
            ? (i = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months,
              })
            : c(e) || !isNaN(+e)
            ? ((i = {}), t ? (i[t] = +e) : (i.milliseconds = +e))
            : (o = $r.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (i = {
                y: 0,
                d: ce(o[ze]) * n,
                h: ce(o[Ue]) * n,
                m: ce(o[Ve]) * n,
                s: ce(o[Je]) * n,
                ms: ce(lr(1e3 * o[Ke])) * n,
              }))
            : (o = Dr.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (i = {
                y: Yr(o[2], n),
                M: Yr(o[3], n),
                w: Yr(o[4], n),
                d: Yr(o[5], n),
                h: Yr(o[6], n),
                m: Yr(o[7], n),
                s: Yr(o[8], n),
              }))
            : null == i
            ? (i = {})
            : "object" == typeof i &&
              ("from" in i || "to" in i) &&
              ((s = Or(Kn(i.from), Kn(i.to))),
              ((i = {}).ms = s.milliseconds),
              (i.M = s.months)),
          (r = new or(i)),
          ar(e) && a(e, "_locale") && (r._locale = e._locale),
          ar(e) && a(e, "_isValid") && (r._isValid = e._isValid),
          r
        );
      }

      function Yr(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
      }

      function Cr(e, t) {
        var n = {};
        return (
          (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
          e.clone().add(n.months, "M").isAfter(t) && --n.months,
          (n.milliseconds = +t - +e.clone().add(n.months, "M")),
          n
        );
      }

      function Or(e, t) {
        var n;
        return e.isValid() && t.isValid()
          ? ((t = fr(t, e)),
            e.isBefore(t)
              ? (n = Cr(e, t))
              : (((n = Cr(t, e)).milliseconds = -n.milliseconds),
                (n.months = -n.months)),
            n)
          : {
              milliseconds: 0,
              months: 0,
            };
      }

      function Pr(e, t) {
        return function (n, r) {
          var s;
          return (
            null === r ||
              isNaN(+r) ||
              (T(
                t,
                "moment()." +
                  t +
                  "(period, number) is deprecated. Please use moment()." +
                  t +
                  "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              ),
              (s = n),
              (n = r),
              (r = s)),
            Ar(this, Tr(n, r), e),
            this
          );
        };
      }

      function Ar(e, t, n, s) {
        var i = t._milliseconds,
          o = lr(t._days),
          a = lr(t._months);
        e.isValid() &&
          ((s = null == s || s),
          a && ut(e, he(e, "Month") + a * n),
          o && fe(e, "Date", he(e, "Date") + o * n),
          i && e._d.setTime(e._d.valueOf() + i * n),
          s && r.updateOffset(e, o || a));
      }
      (Tr.fn = or.prototype), (Tr.invalid = ir);
      var Lr = Pr(1, "add"),
        Nr = Pr(-1, "subtract");

      function Hr(e) {
        return "string" == typeof e || e instanceof String;
      }

      function Ir(e) {
        return b(e) || d(e) || Hr(e) || c(e) || Rr(e) || Wr(e) || null == e;
      }

      function Wr(e) {
        var t,
          n,
          r = o(e) && !l(e),
          s = !1,
          i = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms",
          ];
        for (t = 0; t < i.length; t += 1) (n = i[t]), (s = s || a(e, n));
        return r && s;
      }

      function Rr(e) {
        var t = i(e),
          n = !1;
        return (
          t &&
            (n =
              0 ===
              e.filter(function (t) {
                return !c(t) && Hr(e);
              }).length),
          t && n
        );
      }

      function Fr(e) {
        var t,
          n,
          r = o(e) && !l(e),
          s = !1,
          i = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse",
          ];
        for (t = 0; t < i.length; t += 1) (n = i[t]), (s = s || a(e, n));
        return r && s;
      }

      function Gr(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6
          ? "sameElse"
          : n < -1
          ? "lastWeek"
          : n < 0
          ? "lastDay"
          : n < 1
          ? "sameDay"
          : n < 2
          ? "nextDay"
          : n < 7
          ? "nextWeek"
          : "sameElse";
      }

      function Er(e, t) {
        1 === arguments.length &&
          (arguments[0]
            ? Ir(arguments[0])
              ? ((e = arguments[0]), (t = void 0))
              : Fr(arguments[0]) && ((t = arguments[0]), (e = void 0))
            : ((e = void 0), (t = void 0)));
        var n = e || Kn(),
          s = fr(n, this).startOf("day"),
          i = r.calendarFormat(this, s) || "sameElse",
          o = t && (Y(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(o || this.localeData().calendar(i, this, Kn(n)));
      }

      function jr() {
        return new x(this);
      }

      function Br(e, t) {
        var n = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() > n.valueOf()
            : n.valueOf() < this.clone().startOf(t).valueOf())
        );
      }

      function zr(e, t) {
        var n = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() < n.valueOf()
            : this.clone().endOf(t).valueOf() < n.valueOf())
        );
      }

      function Ur(e, t, n, r) {
        var s = b(e) ? e : Kn(e),
          i = b(t) ? t : Kn(t);
        return (
          !!(this.isValid() && s.isValid() && i.isValid()) &&
          ("(" === (r = r || "()")[0]
            ? this.isAfter(s, n)
            : !this.isBefore(s, n)) &&
          (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
        );
      }

      function Vr(e, t) {
        var n,
          r = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !r.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() === r.valueOf()
            : ((n = r.valueOf()),
              this.clone().startOf(t).valueOf() <= n &&
                n <= this.clone().endOf(t).valueOf()))
        );
      }

      function Jr(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
      }

      function Kr(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
      }

      function Zr(e, t, n) {
        var r, s, i;
        if (!this.isValid()) return NaN;
        if (!(r = fr(e, this)).isValid()) return NaN;
        switch (((s = 6e4 * (r.utcOffset() - this.utcOffset())), (t = re(t)))) {
          case "year":
            i = qr(this, r) / 12;
            break;
          case "month":
            i = qr(this, r);
            break;
          case "quarter":
            i = qr(this, r) / 3;
            break;
          case "second":
            i = (this - r) / 1e3;
            break;
          case "minute":
            i = (this - r) / 6e4;
            break;
          case "hour":
            i = (this - r) / 36e5;
            break;
          case "day":
            i = (this - r - s) / 864e5;
            break;
          case "week":
            i = (this - r - s) / 6048e5;
            break;
          default:
            i = this - r;
        }
        return n ? i : ue(i);
      }

      function qr(e, t) {
        if (e.date() < t.date()) return -qr(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          r = e.clone().add(n, "months");
        return (
          -(
            n +
            (t - r < 0
              ? (t - r) / (r - e.clone().add(n - 1, "months"))
              : (t - r) / (e.clone().add(n + 1, "months") - r))
          ) || 0
        );
      }

      function Xr() {
        return this.clone()
          .locale("en")
          .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }

      function Qr(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999
          ? j(
              n,
              t
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : Y(Date.prototype.toISOString)
          ? t
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", j(n, "Z"))
          : j(
              n,
              t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
      }

      function es() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e,
          t,
          n,
          r,
          s = "moment",
          i = "";
        return (
          this.isLocal() ||
            ((s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (i = "Z")),
          (e = "[" + s + '("]'),
          (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
          (n = "-MM-DD[T]HH:mm:ss.SSS"),
          (r = i + '[")]'),
          this.format(e + t + n + r)
        );
      }

      function ts(e) {
        e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
        var t = j(this, e);
        return this.localeData().postformat(t);
      }

      function ns(e, t) {
        return this.isValid() && ((b(e) && e.isValid()) || Kn(e).isValid())
          ? Tr({
              to: this,
              from: e,
            })
              .locale(this.locale())
              .humanize(!t)
          : this.localeData().invalidDate();
      }

      function rs(e) {
        return this.from(Kn(), e);
      }

      function ss(e, t) {
        return this.isValid() && ((b(e) && e.isValid()) || Kn(e).isValid())
          ? Tr({
              from: this,
              to: e,
            })
              .locale(this.locale())
              .humanize(!t)
          : this.localeData().invalidDate();
      }

      function is(e) {
        return this.to(Kn(), e);
      }

      function os(e) {
        var t;
        return void 0 === e
          ? this._locale._abbr
          : (null != (t = vn(e)) && (this._locale = t), this);
      }
      (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
        (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
      var as = M(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (e) {
          return void 0 === e ? this.localeData() : this.locale(e);
        }
      );

      function ls() {
        return this._locale;
      }
      var us = 1e3,
        cs = 60 * us,
        ds = 60 * cs,
        hs = 3506328 * ds;

      function fs(e, t) {
        return ((e % t) + t) % t;
      }

      function ms(e, t, n) {
        return e < 100 && e >= 0
          ? new Date(e + 400, t, n) - hs
          : new Date(e, t, n).valueOf();
      }

      function ps(e, t, n) {
        return e < 100 && e >= 0
          ? Date.UTC(e + 400, t, n) - hs
          : Date.UTC(e, t, n);
      }

      function gs(e) {
        var t, n;
        if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
          return this;
        switch (((n = this._isUTC ? ps : ms), e)) {
          case "year":
            t = n(this.year(), 0, 1);
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            t = n(this.year(), this.month(), 1);
            break;
          case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            t = n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date());
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t -= fs(t + (this._isUTC ? 0 : this.utcOffset() * cs), ds));
            break;
          case "minute":
            (t = this._d.valueOf()), (t -= fs(t, cs));
            break;
          case "second":
            (t = this._d.valueOf()), (t -= fs(t, us));
        }
        return this._d.setTime(t), r.updateOffset(this, !0), this;
      }

      function ys(e) {
        var t, n;
        if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
          return this;
        switch (((n = this._isUTC ? ps : ms), e)) {
          case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            t =
              n(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            t =
              n(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t +=
                ds - fs(t + (this._isUTC ? 0 : this.utcOffset() * cs), ds) - 1);
            break;
          case "minute":
            (t = this._d.valueOf()), (t += cs - fs(t, cs) - 1);
            break;
          case "second":
            (t = this._d.valueOf()), (t += us - fs(t, us) - 1);
        }
        return this._d.setTime(t), r.updateOffset(this, !0), this;
      }

      function vs() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }

      function ws() {
        return Math.floor(this.valueOf() / 1e3);
      }

      function ks() {
        return new Date(this.valueOf());
      }

      function _s() {
        var e = this;
        return [
          e.year(),
          e.month(),
          e.date(),
          e.hour(),
          e.minute(),
          e.second(),
          e.millisecond(),
        ];
      }

      function xs() {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds(),
        };
      }

      function bs() {
        return this.isValid() ? this.toISOString() : null;
      }

      function Ss() {
        return y(this);
      }

      function Ms() {
        return f({}, g(this));
      }

      function $s() {
        return g(this).overflow;
      }

      function Ds() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict,
        };
      }

      function Ts(e, t) {
        var n,
          s,
          i,
          o = this._eras || vn("en")._eras;
        for (n = 0, s = o.length; n < s; ++n)
          switch (
            ("string" == typeof o[n].since &&
              ((i = r(o[n].since).startOf("day")), (o[n].since = i.valueOf())),
            typeof o[n].until)
          ) {
            case "undefined":
              o[n].until = 1 / 0;
              break;
            case "string":
              (i = r(o[n].until).startOf("day").valueOf()),
                (o[n].until = i.valueOf());
          }
        return o;
      }

      function Ys(e, t, n) {
        var r,
          s,
          i,
          o,
          a,
          l = this.eras();
        for (e = e.toUpperCase(), r = 0, s = l.length; r < s; ++r)
          if (
            ((i = l[r].name.toUpperCase()),
            (o = l[r].abbr.toUpperCase()),
            (a = l[r].narrow.toUpperCase()),
            n)
          )
            switch (t) {
              case "N":
              case "NN":
              case "NNN":
                if (o === e) return l[r];
                break;
              case "NNNN":
                if (i === e) return l[r];
                break;
              case "NNNNN":
                if (a === e) return l[r];
            }
          else if ([i, o, a].indexOf(e) >= 0) return l[r];
      }

      function Cs(e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return void 0 === t
          ? r(e.since).year()
          : r(e.since).year() + (t - e.offset) * n;
      }

      function Os() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].name;
          if (r[e].until <= n && n <= r[e].since) return r[e].name;
        }
        return "";
      }

      function Ps() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].narrow;
          if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
        }
        return "";
      }

      function As() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].abbr;
          if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
        }
        return "";
      }

      function Ls() {
        var e,
          t,
          n,
          s,
          i = this.localeData().eras();
        for (e = 0, t = i.length; e < t; ++e)
          if (
            ((n = i[e].since <= i[e].until ? 1 : -1),
            (s = this.clone().startOf("day").valueOf()),
            (i[e].since <= s && s <= i[e].until) ||
              (i[e].until <= s && s <= i[e].since))
          )
            return (this.year() - r(i[e].since).year()) * n + i[e].offset;
        return this.year();
      }

      function Ns(e) {
        return (
          a(this, "_erasNameRegex") || Es.call(this),
          e ? this._erasNameRegex : this._erasRegex
        );
      }

      function Hs(e) {
        return (
          a(this, "_erasAbbrRegex") || Es.call(this),
          e ? this._erasAbbrRegex : this._erasRegex
        );
      }

      function Is(e) {
        return (
          a(this, "_erasNarrowRegex") || Es.call(this),
          e ? this._erasNarrowRegex : this._erasRegex
        );
      }

      function Ws(e, t) {
        return t.erasAbbrRegex(e);
      }

      function Rs(e, t) {
        return t.erasNameRegex(e);
      }

      function Fs(e, t) {
        return t.erasNarrowRegex(e);
      }

      function Gs(e, t) {
        return t._eraYearOrdinalRegex || Te;
      }

      function Es() {
        var e,
          t,
          n = [],
          r = [],
          s = [],
          i = [],
          o = this.eras();
        for (e = 0, t = o.length; e < t; ++e)
          r.push(Ie(o[e].name)),
            n.push(Ie(o[e].abbr)),
            s.push(Ie(o[e].narrow)),
            i.push(Ie(o[e].name)),
            i.push(Ie(o[e].abbr)),
            i.push(Ie(o[e].narrow));
        (this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
          (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
          (this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i"));
      }

      function js(e, t) {
        F(0, [e, e.length], 0, t);
      }

      function Bs(e) {
        return Zs.call(
          this,
          e,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }

      function zs(e) {
        return Zs.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function Us() {
        return St(this.year(), 1, 4);
      }

      function Vs() {
        return St(this.isoWeekYear(), 1, 4);
      }

      function Js() {
        var e = this.localeData()._week;
        return St(this.year(), e.dow, e.doy);
      }

      function Ks() {
        var e = this.localeData()._week;
        return St(this.weekYear(), e.dow, e.doy);
      }

      function Zs(e, t, n, r, s) {
        var i;
        return null == e
          ? bt(this, r, s).year
          : (t > (i = St(e, r, s)) && (t = i), qs.call(this, e, t, n, r, s));
      }

      function qs(e, t, n, r, s) {
        var i = xt(e, t, n, r, s),
          o = kt(i.year, 0, i.dayOfYear);
        return (
          this.year(o.getUTCFullYear()),
          this.month(o.getUTCMonth()),
          this.date(o.getUTCDate()),
          this
        );
      }

      function Xs(e) {
        return null == e
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }
      F("N", 0, 0, "eraAbbr"),
        F("NN", 0, 0, "eraAbbr"),
        F("NNN", 0, 0, "eraAbbr"),
        F("NNNN", 0, 0, "eraName"),
        F("NNNNN", 0, 0, "eraNarrow"),
        F("y", ["y", 1], "yo", "eraYear"),
        F("y", ["yy", 2], 0, "eraYear"),
        F("y", ["yyy", 3], 0, "eraYear"),
        F("y", ["yyyy", 4], 0, "eraYear"),
        Le("N", Ws),
        Le("NN", Ws),
        Le("NNN", Ws),
        Le("NNNN", Rs),
        Le("NNNNN", Fs),
        Re(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
          var s = n._locale.erasParse(e, r, n._strict);
          s ? (g(n).era = s) : (g(n).invalidEra = e);
        }),
        Le("y", Te),
        Le("yy", Te),
        Le("yyy", Te),
        Le("yyyy", Te),
        Le("yo", Gs),
        Re(["y", "yy", "yyy", "yyyy"], je),
        Re(["yo"], function (e, t, n, r) {
          var s;
          n._locale._eraYearOrdinalRegex &&
            (s = e.match(n._locale._eraYearOrdinalRegex)),
            n._locale.eraYearOrdinalParse
              ? (t[je] = n._locale.eraYearOrdinalParse(e, s))
              : (t[je] = parseInt(e, 10));
        }),
        F(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }),
        F(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }),
        js("gggg", "weekYear"),
        js("ggggg", "weekYear"),
        js("GGGG", "isoWeekYear"),
        js("GGGGG", "isoWeekYear"),
        ne("weekYear", "gg"),
        ne("isoWeekYear", "GG"),
        oe("weekYear", 1),
        oe("isoWeekYear", 1),
        Le("G", Ye),
        Le("g", Ye),
        Le("GG", xe, ve),
        Le("gg", xe, ve),
        Le("GGGG", $e, ke),
        Le("gggg", $e, ke),
        Le("GGGGG", De, _e),
        Le("ggggg", De, _e),
        Fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
          t[r.substr(0, 2)] = ce(e);
        }),
        Fe(["gg", "GG"], function (e, t, n, s) {
          t[s] = r.parseTwoDigitYear(e);
        }),
        F("Q", 0, "Qo", "quarter"),
        ne("quarter", "Q"),
        oe("quarter", 7),
        Le("Q", ye),
        Re("Q", function (e, t) {
          t[Be] = 3 * (ce(e) - 1);
        }),
        F("D", ["DD", 2], "Do", "date"),
        ne("date", "D"),
        oe("date", 9),
        Le("D", xe),
        Le("DD", xe, ve),
        Le("Do", function (e, t) {
          return e
            ? t._dayOfMonthOrdinalParse || t._ordinalParse
            : t._dayOfMonthOrdinalParseLenient;
        }),
        Re(["D", "DD"], ze),
        Re("Do", function (e, t) {
          t[ze] = ce(e.match(xe)[0]);
        });
      var Qs = de("Date", !0);

      function ei(e) {
        var t =
          Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
        return null == e ? t : this.add(e - t, "d");
      }
      F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        ne("dayOfYear", "DDD"),
        oe("dayOfYear", 4),
        Le("DDD", Me),
        Le("DDDD", we),
        Re(["DDD", "DDDD"], function (e, t, n) {
          n._dayOfYear = ce(e);
        }),
        F("m", ["mm", 2], 0, "minute"),
        ne("minute", "m"),
        oe("minute", 14),
        Le("m", xe),
        Le("mm", xe, ve),
        Re(["m", "mm"], Ve);
      var ti = de("Minutes", !1);
      F("s", ["ss", 2], 0, "second"),
        ne("second", "s"),
        oe("second", 15),
        Le("s", xe),
        Le("ss", xe, ve),
        Re(["s", "ss"], Je);
      var ni,
        ri,
        si = de("Seconds", !1);
      for (
        F("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          F(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          F(0, ["SSS", 3], 0, "millisecond"),
          F(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
          }),
          F(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
          }),
          F(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          F(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          F(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          F(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          ne("millisecond", "ms"),
          oe("millisecond", 16),
          Le("S", Me, ye),
          Le("SS", Me, ve),
          Le("SSS", Me, we),
          ni = "SSSS";
        ni.length <= 9;
        ni += "S"
      )
        Le(ni, Te);

      function ii(e, t) {
        t[Ke] = ce(1e3 * ("0." + e));
      }
      for (ni = "S"; ni.length <= 9; ni += "S") Re(ni, ii);

      function oi() {
        return this._isUTC ? "UTC" : "";
      }

      function ai() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      (ri = de("Milliseconds", !1)),
        F("z", 0, 0, "zoneAbbr"),
        F("zz", 0, 0, "zoneName");
      var li = x.prototype;

      function ui(e) {
        return Kn(1e3 * e);
      }

      function ci() {
        return Kn.apply(null, arguments).parseZone();
      }

      function di(e) {
        return e;
      }
      (li.add = Lr),
        (li.calendar = Er),
        (li.clone = jr),
        (li.diff = Zr),
        (li.endOf = ys),
        (li.format = ts),
        (li.from = ns),
        (li.fromNow = rs),
        (li.to = ss),
        (li.toNow = is),
        (li.get = me),
        (li.invalidAt = $s),
        (li.isAfter = Br),
        (li.isBefore = zr),
        (li.isBetween = Ur),
        (li.isSame = Vr),
        (li.isSameOrAfter = Jr),
        (li.isSameOrBefore = Kr),
        (li.isValid = Ss),
        (li.lang = as),
        (li.locale = os),
        (li.localeData = ls),
        (li.max = qn),
        (li.min = Zn),
        (li.parsingFlags = Ms),
        (li.set = pe),
        (li.startOf = gs),
        (li.subtract = Nr),
        (li.toArray = _s),
        (li.toObject = xs),
        (li.toDate = ks),
        (li.toISOString = Qr),
        (li.inspect = es),
        "undefined" != typeof Symbol &&
          null != Symbol.for &&
          (li[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return "Moment<" + this.format() + ">";
          }),
        (li.toJSON = bs),
        (li.toString = Xr),
        (li.unix = ws),
        (li.valueOf = vs),
        (li.creationData = Ds),
        (li.eraName = Os),
        (li.eraNarrow = Ps),
        (li.eraAbbr = As),
        (li.eraYear = Ls),
        (li.year = gt),
        (li.isLeapYear = yt),
        (li.weekYear = Bs),
        (li.isoWeekYear = zs),
        (li.quarter = li.quarters = Xs),
        (li.month = ct),
        (li.daysInMonth = dt),
        (li.week = li.weeks = Yt),
        (li.isoWeek = li.isoWeeks = Ct),
        (li.weeksInYear = Js),
        (li.weeksInWeekYear = Ks),
        (li.isoWeeksInYear = Us),
        (li.isoWeeksInISOWeekYear = Vs),
        (li.date = Qs),
        (li.day = li.days = zt),
        (li.weekday = Ut),
        (li.isoWeekday = Vt),
        (li.dayOfYear = ei),
        (li.hour = li.hours = sn),
        (li.minute = li.minutes = ti),
        (li.second = li.seconds = si),
        (li.millisecond = li.milliseconds = ri),
        (li.utcOffset = pr),
        (li.utc = yr),
        (li.local = vr),
        (li.parseZone = wr),
        (li.hasAlignedHourOffset = kr),
        (li.isDST = _r),
        (li.isLocal = br),
        (li.isUtcOffset = Sr),
        (li.isUtc = Mr),
        (li.isUTC = Mr),
        (li.zoneAbbr = oi),
        (li.zoneName = ai),
        (li.dates = M("dates accessor is deprecated. Use date instead.", Qs)),
        (li.months = M("months accessor is deprecated. Use month instead", ct)),
        (li.years = M("years accessor is deprecated. Use year instead", gt)),
        (li.zone = M(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          gr
        )),
        (li.isDSTShifted = M(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          xr
        ));
      var hi = P.prototype;

      function fi(e, t, n, r) {
        var s = vn(),
          i = m().set(r, t);
        return s[n](i, e);
      }

      function mi(e, t, n) {
        if ((c(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
          return fi(e, t, n, "month");
        var r,
          s = [];
        for (r = 0; r < 12; r++) s[r] = fi(e, r, n, "month");
        return s;
      }

      function pi(e, t, n, r) {
        "boolean" == typeof e
          ? (c(t) && ((n = t), (t = void 0)), (t = t || ""))
          : ((n = t = e),
            (e = !1),
            c(t) && ((n = t), (t = void 0)),
            (t = t || ""));
        var s,
          i = vn(),
          o = e ? i._week.dow : 0,
          a = [];
        if (null != n) return fi(t, (n + o) % 7, r, "day");
        for (s = 0; s < 7; s++) a[s] = fi(t, (s + o) % 7, r, "day");
        return a;
      }

      function gi(e, t) {
        return mi(e, t, "months");
      }

      function yi(e, t) {
        return mi(e, t, "monthsShort");
      }

      function vi(e, t, n) {
        return pi(e, t, n, "weekdays");
      }

      function wi(e, t, n) {
        return pi(e, t, n, "weekdaysShort");
      }

      function ki(e, t, n) {
        return pi(e, t, n, "weekdaysMin");
      }
      (hi.calendar = L),
        (hi.longDateFormat = U),
        (hi.invalidDate = J),
        (hi.ordinal = q),
        (hi.preparse = di),
        (hi.postformat = di),
        (hi.relativeTime = Q),
        (hi.pastFuture = ee),
        (hi.set = C),
        (hi.eras = Ts),
        (hi.erasParse = Ys),
        (hi.erasConvertYear = Cs),
        (hi.erasAbbrRegex = Hs),
        (hi.erasNameRegex = Ns),
        (hi.erasNarrowRegex = Is),
        (hi.months = it),
        (hi.monthsShort = ot),
        (hi.monthsParse = lt),
        (hi.monthsRegex = ft),
        (hi.monthsShortRegex = ht),
        (hi.week = Mt),
        (hi.firstDayOfYear = Tt),
        (hi.firstDayOfWeek = Dt),
        (hi.weekdays = Ft),
        (hi.weekdaysMin = Et),
        (hi.weekdaysShort = Gt),
        (hi.weekdaysParse = Bt),
        (hi.weekdaysRegex = Jt),
        (hi.weekdaysShortRegex = Kt),
        (hi.weekdaysMinRegex = Zt),
        (hi.isPM = nn),
        (hi.meridiem = on),
        pn("en", {
          eras: [
            {
              since: "0001-01-01",
              until: 1 / 0,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD",
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC",
            },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (e) {
            var t = e % 10;
            return (
              e +
              (1 === ce((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th")
            );
          },
        }),
        (r.lang = M(
          "moment.lang is deprecated. Use moment.locale instead.",
          pn
        )),
        (r.langData = M(
          "moment.langData is deprecated. Use moment.localeData instead.",
          vn
        ));
      var _i = Math.abs;

      function xi() {
        var e = this._data;
        return (
          (this._milliseconds = _i(this._milliseconds)),
          (this._days = _i(this._days)),
          (this._months = _i(this._months)),
          (e.milliseconds = _i(e.milliseconds)),
          (e.seconds = _i(e.seconds)),
          (e.minutes = _i(e.minutes)),
          (e.hours = _i(e.hours)),
          (e.months = _i(e.months)),
          (e.years = _i(e.years)),
          this
        );
      }

      function bi(e, t, n, r) {
        var s = Tr(t, n);
        return (
          (e._milliseconds += r * s._milliseconds),
          (e._days += r * s._days),
          (e._months += r * s._months),
          e._bubble()
        );
      }

      function Si(e, t) {
        return bi(this, e, t, 1);
      }

      function Mi(e, t) {
        return bi(this, e, t, -1);
      }

      function $i(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
      }

      function Di() {
        var e,
          t,
          n,
          r,
          s,
          i = this._milliseconds,
          o = this._days,
          a = this._months,
          l = this._data;
        return (
          (i >= 0 && o >= 0 && a >= 0) ||
            (i <= 0 && o <= 0 && a <= 0) ||
            ((i += 864e5 * $i(Yi(a) + o)), (o = 0), (a = 0)),
          (l.milliseconds = i % 1e3),
          (e = ue(i / 1e3)),
          (l.seconds = e % 60),
          (t = ue(e / 60)),
          (l.minutes = t % 60),
          (n = ue(t / 60)),
          (l.hours = n % 24),
          (o += ue(n / 24)),
          (a += s = ue(Ti(o))),
          (o -= $i(Yi(s))),
          (r = ue(a / 12)),
          (a %= 12),
          (l.days = o),
          (l.months = a),
          (l.years = r),
          this
        );
      }

      function Ti(e) {
        return (4800 * e) / 146097;
      }

      function Yi(e) {
        return (146097 * e) / 4800;
      }

      function Ci(e) {
        if (!this.isValid()) return NaN;
        var t,
          n,
          r = this._milliseconds;
        if ("month" === (e = re(e)) || "quarter" === e || "year" === e)
          switch (
            ((t = this._days + r / 864e5), (n = this._months + Ti(t)), e)
          ) {
            case "month":
              return n;
            case "quarter":
              return n / 3;
            case "year":
              return n / 12;
          }
        else
          switch (((t = this._days + Math.round(Yi(this._months))), e)) {
            case "week":
              return t / 7 + r / 6048e5;
            case "day":
              return t + r / 864e5;
            case "hour":
              return 24 * t + r / 36e5;
            case "minute":
              return 1440 * t + r / 6e4;
            case "second":
              return 86400 * t + r / 1e3;
            case "millisecond":
              return Math.floor(864e5 * t) + r;
            default:
              throw new Error("Unknown unit " + e);
          }
      }

      function Oi() {
        return this.isValid()
          ? this._milliseconds +
              864e5 * this._days +
              (this._months % 12) * 2592e6 +
              31536e6 * ce(this._months / 12)
          : NaN;
      }

      function Pi(e) {
        return function () {
          return this.as(e);
        };
      }
      var Ai = Pi("ms"),
        Li = Pi("s"),
        Ni = Pi("m"),
        Hi = Pi("h"),
        Ii = Pi("d"),
        Wi = Pi("w"),
        Ri = Pi("M"),
        Fi = Pi("Q"),
        Gi = Pi("y");

      function Ei() {
        return Tr(this);
      }

      function ji(e) {
        return (e = re(e)), this.isValid() ? this[e + "s"]() : NaN;
      }

      function Bi(e) {
        return function () {
          return this.isValid() ? this._data[e] : NaN;
        };
      }
      var zi = Bi("milliseconds"),
        Ui = Bi("seconds"),
        Vi = Bi("minutes"),
        Ji = Bi("hours"),
        Ki = Bi("days"),
        Zi = Bi("months"),
        qi = Bi("years");

      function Xi() {
        return ue(this.days() / 7);
      }
      var Qi = Math.round,
        eo = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11,
        };

      function to(e, t, n, r, s) {
        return s.relativeTime(t || 1, !!n, e, r);
      }

      function no(e, t, n, r) {
        var s = Tr(e).abs(),
          i = Qi(s.as("s")),
          o = Qi(s.as("m")),
          a = Qi(s.as("h")),
          l = Qi(s.as("d")),
          u = Qi(s.as("M")),
          c = Qi(s.as("w")),
          d = Qi(s.as("y")),
          h =
            (i <= n.ss && ["s", i]) ||
            (i < n.s && ["ss", i]) ||
            (o <= 1 && ["m"]) ||
            (o < n.m && ["mm", o]) ||
            (a <= 1 && ["h"]) ||
            (a < n.h && ["hh", a]) ||
            (l <= 1 && ["d"]) ||
            (l < n.d && ["dd", l]);
        return (
          null != n.w && (h = h || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
          ((h = h ||
            (u <= 1 && ["M"]) ||
            (u < n.M && ["MM", u]) ||
            (d <= 1 && ["y"]) || ["yy", d])[2] = t),
          (h[3] = +e > 0),
          (h[4] = r),
          to.apply(null, h)
        );
      }

      function ro(e) {
        return void 0 === e ? Qi : "function" == typeof e && ((Qi = e), !0);
      }

      function so(e, t) {
        return (
          void 0 !== eo[e] &&
          (void 0 === t
            ? eo[e]
            : ((eo[e] = t), "s" === e && (eo.ss = t - 1), !0))
        );
      }

      function io(e, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var n,
          r,
          s = !1,
          i = eo;
        return (
          "object" == typeof e && ((t = e), (e = !1)),
          "boolean" == typeof e && (s = e),
          "object" == typeof t &&
            ((i = Object.assign({}, eo, t)),
            null != t.s && null == t.ss && (i.ss = t.s - 1)),
          (r = no(this, !s, i, (n = this.localeData()))),
          s && (r = n.pastFuture(+this, r)),
          n.postformat(r)
        );
      }
      var oo = Math.abs;

      function ao(e) {
        return (e > 0) - (e < 0) || +e;
      }

      function lo() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
          t,
          n,
          r,
          s,
          i,
          o,
          a,
          l = oo(this._milliseconds) / 1e3,
          u = oo(this._days),
          c = oo(this._months),
          d = this.asSeconds();
        return d
          ? ((e = ue(l / 60)),
            (t = ue(e / 60)),
            (l %= 60),
            (e %= 60),
            (n = ue(c / 12)),
            (c %= 12),
            (r = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
            (s = d < 0 ? "-" : ""),
            (i = ao(this._months) !== ao(d) ? "-" : ""),
            (o = ao(this._days) !== ao(d) ? "-" : ""),
            (a = ao(this._milliseconds) !== ao(d) ? "-" : ""),
            s +
              "P" +
              (n ? i + n + "Y" : "") +
              (c ? i + c + "M" : "") +
              (u ? o + u + "D" : "") +
              (t || e || l ? "T" : "") +
              (t ? a + t + "H" : "") +
              (e ? a + e + "M" : "") +
              (l ? a + r + "S" : ""))
          : "P0D";
      }
      var uo = or.prototype;
      return (
        (uo.isValid = sr),
        (uo.abs = xi),
        (uo.add = Si),
        (uo.subtract = Mi),
        (uo.as = Ci),
        (uo.asMilliseconds = Ai),
        (uo.asSeconds = Li),
        (uo.asMinutes = Ni),
        (uo.asHours = Hi),
        (uo.asDays = Ii),
        (uo.asWeeks = Wi),
        (uo.asMonths = Ri),
        (uo.asQuarters = Fi),
        (uo.asYears = Gi),
        (uo.valueOf = Oi),
        (uo._bubble = Di),
        (uo.clone = Ei),
        (uo.get = ji),
        (uo.milliseconds = zi),
        (uo.seconds = Ui),
        (uo.minutes = Vi),
        (uo.hours = Ji),
        (uo.days = Ki),
        (uo.weeks = Xi),
        (uo.months = Zi),
        (uo.years = qi),
        (uo.humanize = io),
        (uo.toISOString = lo),
        (uo.toString = lo),
        (uo.toJSON = lo),
        (uo.locale = os),
        (uo.localeData = ls),
        (uo.toIsoString = M(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          lo
        )),
        (uo.lang = as),
        F("X", 0, 0, "unix"),
        F("x", 0, 0, "valueOf"),
        Le("x", Ye),
        Le("X", Pe),
        Re("X", function (e, t, n) {
          n._d = new Date(1e3 * parseFloat(e));
        }),
        Re("x", function (e, t, n) {
          n._d = new Date(ce(e));
        }),
        //! moment.js
        (r.version = "2.29.1"),
        s(Kn),
        (r.fn = li),
        (r.min = Qn),
        (r.max = er),
        (r.now = tr),
        (r.utc = m),
        (r.unix = ui),
        (r.months = gi),
        (r.isDate = d),
        (r.locale = pn),
        (r.invalid = v),
        (r.duration = Tr),
        (r.isMoment = b),
        (r.weekdays = vi),
        (r.parseZone = ci),
        (r.localeData = vn),
        (r.isDuration = ar),
        (r.monthsShort = yi),
        (r.weekdaysMin = ki),
        (r.defineLocale = gn),
        (r.updateLocale = yn),
        (r.locales = wn),
        (r.weekdaysShort = wi),
        (r.normalizeUnits = re),
        (r.relativeTimeRounding = ro),
        (r.relativeTimeThreshold = so),
        (r.calendarFormat = Gr),
        (r.prototype = li),
        (r.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM",
        }),
        r
      );
    })();
  });

  var Pn;
  const { document: An, window: Ln } = X;

  function Nn(e) {
    let t, n;
    return (
      (t = new Lt({
        props: {
          hasFrame: e[10].hasFrame,
          title: e[10].title,
          $$slots: {
            default: [Fn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      t.$on("close", e[20]),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, r) {
          ee(t, e, r), (n = !0);
        },
        p(e, n) {
          const r = {};
          1024 & n[0] && (r.hasFrame = e[10].hasFrame),
            1024 & n[0] && (r.title = e[10].title),
            (1392 & n[0]) | (8 & n[1]) &&
              (r.$$scope = {
                dirty: n,
                ctx: e,
              }),
            t.$set(r);
        },
        i(e) {
          n || (Z(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          te(t, e);
        },
      }
    );
  }

  function Hn(t) {
    let n, r;
    return (
      (n = new vn({})),
      n.$on("close", t[19]),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function In(e) {
    let t, n;
    return (
      (t = new Tn({
        props: {
          userStats: e[4],
          config: Vt,
          isPrime: e[8].isPrime,
          daysSince: e[11],
          todaysScore: e[6].length,
          guessRef: e[5].gotCorrect ? e[6].length + 1 : 0,
          hasFinished: e[5].hasFinished,
        },
      })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, r) {
          ee(t, e, r), (n = !0);
        },
        p(e, n) {
          const r = {};
          16 & n[0] && (r.userStats = e[4]),
            256 & n[0] && (r.isPrime = e[8].isPrime),
            64 & n[0] && (r.todaysScore = e[6].length),
            96 & n[0] && (r.guessRef = e[5].gotCorrect ? e[6].length + 1 : 0),
            32 & n[0] && (r.hasFinished = e[5].hasFinished),
            t.$set(r);
        },
        i(e) {
          n || (Z(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          te(t, e);
        },
      }
    );
  }

  function Wn(t) {
    let n, r;
    return (
      (n = new Ut({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Rn(t) {
    let n, r;
    return (
      (n = new Ht({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function MLn(t) {
    let n, r;
    return (
      (n = new MLCt({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Fn(e) {
    let t, n, r, s;
    const i = [Rn, Wn, In, Hn, MLn],
      o = [];

    function a(e, t) {
      return "info" == e[10].name
        ? 0
        : "donate" == e[10].name
        ? 1
        : "results" == e[10].name
        ? 2
        : "help" == e[10].name
        ? 3
        : "music-list" == e[10].name
        ? 4
        : -1;
    }
    return (
      ~(t = a(e)) && (n = o[t] = i[t](e)),
      {
        c() {
          n && n.c(), (r = b());
        },
        m(e, n) {
          ~t && o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, s) {
          let l = t;
          (t = a(e)),
            t === l
              ? ~t && o[t].p(e, s)
              : (n &&
                  (J(),
                  q(o[l], 1, 1, () => {
                    o[l] = null;
                  }),
                  K()),
                ~t
                  ? ((n = o[t]),
                    n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                    Z(n, 1),
                    n.m(r.parentNode, r))
                  : (n = null));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          ~t && o[t].d(e), e && y(r);
        },
      }
    );
  }

  function Gn(e) {
    let t, n, r;

    function s(t) {
      e[23](t);
    }
    let i = {
      isPrime: e[8].isPrime,
      config: Vt,
      allOptions: e[9],
      currentAttempt: e[6].length + 1,
    };
    return (
      void 0 !== e[7] && (i.guessInput = e[7]),
      (t = new Yt({
        props: i,
      })),
      e[22](t),
      H.push(() =>
        (function (e, t, n) {
          const r = e.$$.props[t];
          void 0 !== r && ((e.$$.bound[r] = n), n(e.$$.ctx[r]));
        })(t, "guessInput", s)
      ),
      t.$on("guess", e[15]),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, n) {
          ee(t, e, n), (r = !0);
        },
        p(e, r) {
          const s = {};
          var i;
          256 & r[0] && (s.isPrime = e[8].isPrime),
            512 & r[0] && (s.allOptions = e[9]),
            64 & r[0] && (s.currentAttempt = e[6].length + 1),
            !n &&
              128 & r[0] &&
              ((n = !0),
              (s.guessInput = e[7]),
              (i = () => (n = !1)),
              W.push(i)),
            t.$set(s);
        },
        i(e) {
          r || (Z(t.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (r = !1);
        },
        d(n) {
          e[22](null), te(t, n);
        },
      }
    );
  }

  function En(e) {
    let t, n, s, i, o, a, l, u, c, d, h, f, m, v, k, _, b, $, D, Y, C, O, P, A;
    G(e[18]),
      (l = new me({
        props: {
          properties: ["G-3QSG4MYSLD"],
        },
      }));
    let L = e[10].isActive && Nn(e);
    (f = new xe({})),
      f.$on("modal", e[16]),
      (_ = new Ie({
        props: {
          userGuesses: e[6],
          maxAttempts: Vt.maxAttempts,
          currentHeardle: e[2],
          todaysGame: e[5],
        },
      })),
      ($ = new mn({
        props: {
          config: Vt,
          userGuesses: e[6],
          currentHeardle: e[2],
          hasFinished: e[5].hasFinished,
          gotCorrect: e[5].gotCorrect,
          isPrime: e[8].isPrime,
          guessRef: e[5].gotCorrect ? e[6].length : 0,
        },
      }));
    let N = {
      config: Vt,
      gameState: e[8],
      currentHeardle: e[2],
      trackDuration: e[2].duration,
      currentAttempt: e[6].length + 1,
    };
    (Y = new gt({
      props: N,
    })),
      e[21](Y),
      Y.$on("updateSong", e[13]),
      Y.$on("updatePlayerState", e[14]);
    let H = !e[5].hasFinished && e[8].gameIsActive && Gn(e);
    return {
      c() {
        (t = w("meta")),
          (n = w("link")),
          (s = w("link")),
          (i = w("link")),
          (o = w("link")),
          (a = x()),
          Q(l.$$.fragment),
          (u = x()),
          (c = w("main")),
          L && L.c(),
          (d = x()),
          (h = w("div")),
          Q(f.$$.fragment),
          (m = x()),
          (v = w("div")),
          (k = w("div")),
          Q(_.$$.fragment),
          (b = x()),
          Q($.$$.fragment),
          (D = x()),
          Q(Y.$$.fragment),
          (C = x()),
          H && H.c(),
          (An.title = artist + " Heardle Infinite"),
          M(t, "name", "description"),
          M(
            t,
            "content",
            "Guess the " +
              artist +
              " song from the intro in as few tries as possible"
          ),
          M(o, "rel", "manifest"),
          M(o, "href", "/site.webmanifest"),
          M(h, "class", "flex-none"),
          M(
            k,
            "class",
            "max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto"
          ),
          M(v, "class", "w-full flex flex-col flex-grow relative"),
          M(
            c,
            "class",
            "bg-custom-bg text-custom-fg overflow-auto flex flex-col"
          ),
          T(c, "height", e[3] + "px");
      },
      m(r, y) {
        p(An.head, t),
          p(An.head, n),
          p(An.head, s),
          p(An.head, i),
          p(An.head, o),
          g(r, a, y),
          ee(l, r, y),
          g(r, u, y),
          g(r, c, y),
          L && L.m(c, null),
          p(c, d),
          p(c, h),
          ee(f, h, null),
          p(c, m),
          p(c, v),
          p(v, k),
          ee(_, k, null),
          p(k, b),
          ee($, k, null),
          p(c, D),
          ee(Y, c, null),
          p(c, C),
          H && H.m(c, null),
          (O = !0),
          P ||
            ((A = [S(Ln, "resize", e[17]), S(Ln, "resize", e[18])]), (P = !0));
      },
      p(e, t) {
        e[10].isActive
          ? L
            ? (L.p(e, t), 1024 & t[0] && Z(L, 1))
            : ((L = Nn(e)), L.c(), Z(L, 1), L.m(c, d))
          : L &&
            (J(),
            q(L, 1, 1, () => {
              L = null;
            }),
            K());
        const n = {};
        64 & t[0] && (n.userGuesses = e[6]),
          4 & t[0] && (n.currentHeardle = e[2]),
          32 & t[0] && (n.todaysGame = e[5]),
          _.$set(n);
        const r = {};
        64 & t[0] && (r.userGuesses = e[6]),
          4 & t[0] && (r.currentHeardle = e[2]),
          32 & t[0] && (r.hasFinished = e[5].hasFinished),
          32 & t[0] && (r.gotCorrect = e[5].gotCorrect),
          256 & t[0] && (r.isPrime = e[8].isPrime),
          96 & t[0] && (r.guessRef = e[5].gotCorrect ? e[6].length : 0),
          $.$set(r);
        const s = {};
        256 & t[0] && (s.gameState = e[8]),
          4 & t[0] && (s.currentHeardle = e[2]),
          4 & t[0] && (s.trackDuration = e[2].duration),
          64 & t[0] && (s.currentAttempt = e[6].length + 1),
          Y.$set(s),
          !e[5].hasFinished && e[8].gameIsActive
            ? H
              ? (H.p(e, t), 288 & t[0] && Z(H, 1))
              : ((H = Gn(e)), H.c(), Z(H, 1), H.m(c, null))
            : H &&
              (J(),
              q(H, 1, 1, () => {
                H = null;
              }),
              K()),
          (!O || 8 & t[0]) && T(c, "height", e[3] + "px");
      },
      i(e) {
        O ||
          (Z(l.$$.fragment, e),
          Z(L),
          Z(f.$$.fragment, e),
          Z(_.$$.fragment, e),
          Z($.$$.fragment, e),
          Z(Y.$$.fragment, e),
          Z(H),
          (O = !0));
      },
      o(e) {
        q(l.$$.fragment, e),
          q(L),
          q(f.$$.fragment, e),
          q(_.$$.fragment, e),
          q($.$$.fragment, e),
          q(Y.$$.fragment, e),
          q(H),
          (O = !1);
      },
      d(d) {
        y(t),
          y(n),
          y(s),
          y(i),
          y(o),
          d && y(a),
          te(l, d),
          d && y(u),
          d && y(c),
          L && L.d(),
          te(f),
          te(_),
          te($),
          e[21](null),
          te(Y),
          H && H.d(),
          (P = !1),
          r(A);
      },
    };
  }

  function jn(e, t, n) {
    let r, s, i, o;
    u(e, Cn, (e) => n(26, (r = [...musicNameList]))),
      u(e, On, (e) => n(27, (s = e)));
    let a = currentIndex,
      l = {
        url: s[a].url,
        correctAnswer: s[a].answer,
        id: a,
        guessList: [],
        hasFinished: !1,
        hasStarted: !1,
      };
    setCurrentHeardle(l);
    // console.log("a", l);
    var c, d;
    // EventListener, originnally here to reload the page if the day changed
    // void 0 !== document.hidden ?
    //     ((c = "hidden"), (d = "visibilitychange")) :
    //     void 0 !== document.msHidden ?
    //     ((c = "msHidden"), (d = "msvisibilitychange")) :
    //     void 0 !== document.webkitHidden &&
    //     ((c = "webkitHidden"), (d = "webkitvisibilitychange")),
    //     void 0 === document.addEventListener ||
    //     void 0 === c ||
    //     document.addEventListener(
    //         d,
    //         function() {
    //             document[c] || a === currentIndex || location.reload(!0);
    //         }, !1
    //     );
    let h,
      f,
      m = 0;

    function p() {
      n(3, (m = window.innerHeight));
    }
    P(() => {
      p();
    });
    if (null == localStorage.getItem("userStats")) {
      (h = []), localStorage.setItem("userStats", JSON.stringify(h));
    } else {
      if (firstLoad) {
        h = [];
        firstLoad = false;
      } else {
        h = JSON.parse(localStorage.getItem("userStats"));
      }
      f = h.find((e) => e.id === l.id);
    }
    void 0 === f &&
      ((f = l),
      h.push(f),
      localStorage.setItem("userStats", JSON.stringify(h)));
    let g,
      y,
      v = f.guessList,
      w = {
        gameIsActive: !1,
        musicIsPlaying: !1,
        playerIsReady: !1,
        // isPrime: a >= 7, // C'est le bug bizarre des 9 secondes ?
        isPrime: true,
      };
    let k = {
      isActive: !1,
      hasFrame: !0,
      title: "",
      name: "",
    };

    function _(e, t, r) {
      n(10, (k.isActive = !0), k),
        n(10, (k.name = e), k),
        n(10, (k.title = t), k),
        n(10, (k.hasFrame = r), k);
    }

    null == localStorage.getItem("firstTime") &&
      (_("help", "how to play"), localStorage.setItem("firstTime", "false"));
    return [
      i,
      o,
      l,
      m,
      h,
      f,
      v,
      g,
      w,
      y,
      k,
      a,
      p,
      function (e) {
        let t = e.detail.currentSong;
        // console.log("current song", l);
        n(2, (l.artist = l.correctAnswer.split(" - ")[1]), l),
          n(2, (l.title = l.correctAnswer.split(" - ")[0]), l),
          n(2, (l.img = t.artwork_url), l),
          n(2, (l.duration = t.duration), l),
          n(2, (l.genre = t.genre), l),
          n(2, (l.date = t.release_date), l),
          (function (e, t, n) {
            e.set(n);
          })(Cn, (r = [...r, l.correctAnswer]), r),
          n(9, (y = r)),
          n(8, (w.playerIsReady = !0), w),
          f.hasFinished || n(8, (w.gameIsActive = !0), w);
      },
      function (e) {
        l.hasStarted ||
          (pe("startGame#" + l.id, {
            name: "startGame",
          }),
          pe("startGame", {
            name: "startGame",
          }),
          n(2, (l.hasStarted = !0), l)),
          n(8, (w.musicIsPlaying = e.detail.musicIsPlaying), w);
      },
      function (e) {
        let t = e.detail.guess,
          r = e.detail.isSkipped,
          s = !1;
        var o;
        r ||
          t != l.correctAnswer ||
          ((s = !0),
          pe("correctGuess", {
            name: "correctGuess",
          }),
          pe("correctGuess#" + l.id, {
            name: "correctGuess",
          })),
          r
            ? (pe("skippedGuess", {
                name: "skippedGuess",
              }),
              pe("skippedGuess#" + l.id, {
                name: "skippedGuess",
              }))
            : s ||
              (pe("incorrectGuess", {
                name: "incorrectGuess",
              }),
              pe("incorrectGuess#" + l.id, {
                name: "incorrectGuess",
              })),
          n(
            6,
            (v = v.concat({
              answer: e.detail.guess,
              isCorrect: s,
              isSkipped: r,
            }))
          ),
          evaluateGuessMetadata(v);
        n(5, (f.guessList = v), f),
          localStorage.setItem("userStats", JSON.stringify(h)),
          (v.length != Vt.maxAttempts && 1 != s) ||
            ((o = s),
            n(8, (w.gameIsActive = !1), w),
            n(5, (f.hasFinished = !0), f),
            n(5, (f.gotCorrect = o), f),
            n(5, (f.score = v.length), f),
            localStorage.setItem("userStats", JSON.stringify(h)),
            i.resetAndPlay(),
            o
              ? (pe("wonGame", {
                  name: "won",
                }),
                pe("wonGame#" + l.id, {
                  name: "won",
                }))
              : (pe("lostGame", {
                  name: "lost",
                }),
                pe("lostGame#" + l.id, {
                  name: "lost",
                })),
            pe("endGame" + l.id + "in" + v.length, {
              name: "#" + v.length,
            }),
            pe("endGame", {
              name: "endGame",
            }),
            pe("endGame#" + l.id, {
              name: "endGame",
            }),
            pe("gameStats#" + l.id, {
              name: v,
            }));
      },
      function (e) {
        _(e.detail.name, e.detail.title, e.detail.hasFrame);
      },
      () => {},
      function () {
        n(3, (m = Ln.innerHeight));
      },
      () => n(10, (k.isActive = !1), k),
      () => n(10, (k.isActive = !1), k),
      function (e) {
        H[e ? "unshift" : "push"](() => {
          (i = e), n(0, i);
        });
      },
      function (e) {
        H[e ? "unshift" : "push"](() => {
          (o = e), n(1, o);
        });
      },
      function (e) {
        (g = e), n(7, g);
      },
    ];
  }
  return new (class extends se {
    constructor(e) {
      super(), re(this, e, jn, En, i, {}, null, [-1, -1]);
    }
  })({
    target: document.body,
    props: {},
  });
})();

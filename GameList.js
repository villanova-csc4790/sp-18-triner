var Portal = {title:"Portal", developer:"Valve", ReleaseDate: "October 10, 2007", Metascore: "90", MetacriticUserScore: "9.2", imagesrc: "https://steamcdn-a.akamaihd.net/steam/apps/400/header.jpg?t=1512752294", link: "https://store.steampowered.com/app/400/Portal/"};

var Portal2 = {title: "Portal 2", developer: "Valve", ReleaseDate: "April 19, 2011", Metascore: "95", MetacriticUserScore: "9.0", imagesrc: "https://steamcdn-a.akamaihd.net/steam/apps/620/header.jpg?t=1512411524", link: "https://store.steampowered.com/app/620/Portal_2/"};

var BeatSaber = {title: "Beat Saber", developer: "Beat Games", ReleaseDate: "May 1, 2018", TechRaptor: "8.0", imagesrc: "https://steamcdn-a.akamaihd.net/steam/apps/620980/header.jpg?t=1528748839", link: "https://store.steampowered.com/app/620980/Beat_Saber/"};

var RocketLeague = {title: "RocketLeague", developer: "Psyonix", ReleaseDate: "July 7, 2015", Metascore: "86", MetacriticUserScore: "8.3", imagesrc: "https://steamcdn-a.akamaihd.net/steam/apps/252950/header.jpg?t=1536094900", link: "https://store.steampowered.com/app/252950/Rocket_League/"};

var SlayTheSpire = {title: "Slay the Spire", developer: "Mega Crit Games", ReleaseDate: "November 15, 2017", SteamScore: "10/10", imagesrc: "https://steamcdn-a.akamaihd.net/steam/apps/646570/header.jpg?t=1530082099", link: "https://store.steampowered.com/app/646570/Slay_the_Spire/"};

var LeagueOfLegends = {title: "League of Legends", developer: "Riot Games", ReleaseDate: "October 27, 2009", Metascore: "78", MetacriticUserScore: "5.5", imagesrc: "https://pbs.twimg.com/media/DDkn4JCXYAASr1T.jpg", link: "https://na.leagueoflegends.com/en/"};

var gameList = [];

function addPortal()
{
	gameList.push(Portal);
	console.log(gameList);
};

function addPortal2()
{
	gameList.push(Portal2);
	console.log(gameList);
};

function addBeatSaber()
{
	gameList.push(BeatSaber);
	console.log(gameList);
};

function addRocketLeague()
{
	gameList.push(RocketLeague);
	console.log(gameList);
};

function addSlayTheSpire()
{
	gameList.push(SlayTheSpire);
	console.log(gameList);
};

function addLeagueOfLegends()
{
	gameList.push(LeagueOfLegends);
	console.log(gameList);
};

function removeTop()
{
	gameList.pop();
	console.log(gameList);
};

localStorage.setItem('gameList', JSON.stringify(gameList));
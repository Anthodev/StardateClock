function Init(){
	var intervalID = setInterval(refresh, 1000);
	imgBackground.addImageObject( "img/bg_stardate_clock_widget.png", 0, 0 );
}

function refresh(){
	calculStardate();
	calculStoStardate();
}

function calculToday(stardateToday){
	var d = new Date();
	var refToday=new Date("July 15, 1987 00:00:00");

	stardateToday = d.getTime() - refToday.getTime();

	return stardateToday;
}

function calculStardate(){
	var stardateToday = calculToday();

	stardateToday = stardateToday / (1000 * 60 * 60 * 24 * 0.036525);
	stardateToday = Math.floor(stardateToday + 410000);
	stardateToday = stardateToday / 10;

	var lStardateToday = ""+stardateToday;
	lStardateToday.replace(",",".");

	txtStardateToday.innerText = lStardateToday;
}

function calculStoStardate(){
	var refStoStardate = new Date("May 25, 2322 00:00:00");
	var stoStardate = new Date();
	var d = new Date();
	var STOYear = d.getFullYear() + 400;

	stoStardate.setFullYear(STOYear);
	stoStardate.setMonth(d.getMonth());
	stoStardate.setDate(d.getDate());
	stoStardate.setHours(d.getHours());
	stoStardate.setMinutes(d.getMinutes());
	stoStardate.setSeconds(0);
	stoStardate.toGMTString(0);

	var diffStoStardate = stoStardate.getTime() - refStoStardate.getTime();

	var resStoStardate = diffStoStardate / (60 * 60 * 24 * 365.2527);
	resStoStardate = Math.floor(resStoStardate * 100);
	resStoStardate = resStoStardate / 100;

	var lStoStardate = "" + resStoStardate;
	lStoStardate.replace(",",".");

	txtStoStardate.innerText = lStoStardate;
}
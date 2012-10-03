function validConvert(form){
	convertDate(form);
}

function calculDay(form, stardateDay){
	var d = new Date();
	var refToday=new Date("July 15, 1987 00:00:00");

	d.setFullYear(eval(form.yearInput.value));
	d.setMonth(eval(form.monthInput.value - 1));
	d.setDate(eval(form.dayInput.value));
	d.setHours(eval(form.hoursInput.value));
	d.setMinutes(eval(form.minuteInput.value));
	d.setSeconds(0);
	d.toGMTString(0);

	stardateDay = d.getTime() - refToday.getTime();

	return stardateDay;
}

function convertDate(form){
	if (f1.TimeChoice[1].checked){
		var refStoStardate = new Date("May 25, 2322 00:00:00");
		var StoStardate = new Date();
		var d = new Date();
		var STOYear = eval(form.yearInput.value) + 400;
		
		StoStardate.setFullYear(STOYear);
		StoStardate.setMonth(eval(form.monthInput.value - 1));
		StoStardate.setDate(eval(form.dayInput.value));
		StoStardate.setHours(eval(form.hoursInput.value));
		StoStardate.setMinutes(eval(form.minuteInput.value));
		StoStardate.setSeconds(0);
		StoStardate.toGMTString(0);
		
		var diffStoStardate = StoStardate.getTime() - refStoStardate.getTime();
		
		var resStoStardate = diffStoStardate / (60 * 60 * 24 * 365.2527);
		resStoStardate = Math.floor(resStoStardate * 100);
		resStoStardate = resStoStardate / 100;
		
		var lStoStardate = "" + resStoStardate;
		lStoStardate.replace(",",".");
		
		resStardate.innerText = lStoStardate;
	} else {
		var stardateDay = calculDay(form);
		
		stardateDay = stardateDay / (1000 * 60 * 60 * 24 * 0.036525);
		stardateDay = Math.floor(stardateDay + 410000);
		stardateDay = stardateDay / 10;
		
		var lStardateDay = "" + stardateDay;
		lStardateDay.replace(",",".");
		
		resStardate.innerText = lStardateDay;
	}
}
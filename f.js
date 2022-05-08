var correct = 0;
var attempts = 0;
var currState = 0;
var urls = ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/150px-Flag_of_Alabama.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/142px-Flag_of_Alaska.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/150px-Flag_of_Arizona.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/150px-Flag_of_Arkansas.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/150px-Flag_of_California.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg/150px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/130px-Flag_of_Connecticut.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/150px-Flag_of_Delaware.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/150px-Flag_of_Florida.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/160px-Flag_of_Georgia_%28U.S._state%29.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/180px-Flag_of_Hawaii.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/127px-Flag_of_Idaho.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/167px-Flag_of_Illinois.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/150px-Flag_of_Indiana.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/150px-Flag_of_Iowa.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/167px-Flag_of_Kansas.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/180px-Flag_of_Kentucky.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/157px-Flag_of_Louisiana.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/127px-Flag_of_Maine.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/150px-Flag_of_Maryland.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/167px-Flag_of_Massachusetts.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/150px-Flag_of_Michigan.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/158px-Flag_of_Minnesota.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/160px-Flag_of_Mississippi.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/172px-Flag_of_Missouri.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/150px-Flag_of_Montana.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/167px-Flag_of_Nebraska.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/150px-Flag_of_Nevada.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/150px-Flag_of_New_Hampshire.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/167px-Flag_of_New_Jersey.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/150px-Flag_of_New_Mexico.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/180px-Flag_of_New_York.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/150px-Flag_of_North_Carolina.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/128px-Flag_of_North_Dakota.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/163px-Flag_of_Ohio.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/150px-Flag_of_Oklahoma.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/167px-Flag_of_Oregon.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/150px-Flag_of_Pennsylvania.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/114px-Flag_of_Rhode_Island.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/150px-Flag_of_South_Carolina.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/160px-Flag_of_South_Dakota.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/167px-Flag_of_Tennessee.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/150px-Flag_of_Texas.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/160px-Flag_of_Utah.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/167px-Flag_of_Vermont.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/146px-Flag_of_Virginia.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/168px-Flag_of_Washington.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/180px-Flag_of_West_Virginia.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/150px-Flag_of_Wisconsin.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/143px-Flag_of_Wyoming.svg.png",];
var states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];


function bPressed(bu){
	//check if correct

	if(document.getElementById(bu).innerHTML == states[currState]){
		updateCounter(true);
	}else{
		updateCounter(false);
	}
	setOptions();
	
}


function setFlag(){
	document.getElementById("iflag").src = urls[currState];
}

function setOptions(){
	var arr = [];
	while(arr.length < 4){
		var r = Math.floor(Math.random()*50);
		if(arr.indexOf(r) === -1) arr.push(r);
	}
	document.getElementById("b1").innerHTML = states[arr[0]];
	document.getElementById("b2").innerHTML = states[arr[1]];
	document.getElementById("b3").innerHTML = states[arr[2]];
	document.getElementById("b4").innerHTML = states[arr[3]];

	var ind = Math.floor(Math.random()*4);
	currState = arr[ind];
	setFlag();
	
}

function updateCounter(tof){
	attempts++;
	if(tof){
		correct++;
	}
	document.getElementById("fir").innerHTML = correct;
	document.getElementById("sec").innerHTML = attempts;
	document.getElementById("perc").innerHTML = ((correct/attempts)*100).toPrecision(4);
}

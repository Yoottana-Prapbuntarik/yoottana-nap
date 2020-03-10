window.onload = pageLoad;

function pageLoad() {
	var btnStart = document.getElementById('start');
	btnStart.onclick = startGame;
}

function startGame() {
	alert("Ready");
	addBox();
	timeStart();
	
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	var btn = document.getElementById('start');
	timer = setInterval(timeCount,TIMER_TICK);
	function timeCount() {
		second = second - 1;
		x.innerHTML = second;
		var allbox = document.querySelectorAll("#squares-layer div");			
		if(second > 0){
			btn.style.display = "none"
		}else{
			btn.style.display = "inline-block";
		}
		if(allbox.length <= 0){
			alert('จบในเวลา '+ second + ' you win');
			clearScreen();
			clearInterval(timer);
			timer = null;
			btn.style.display = "inline-block";

		}
		else if(second === 0){
			alert('You Lose')
			clearInterval(timer);
			timer = null;
			clearScreen();
		}
		
	}
}

function addBox() {

	var numbox = document.getElementById('numbox').value; // จำนวนกล่อง
	var parseIntNumber = parseInt(numbox);
	var squaresLayer = document.getElementById('squares-layer') //
	var colorDrop = document.getElementById('color').value;
	for (var i = 0; i < parseIntNumber; i++) {
		var tempbox = document.createElement('div');
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box) {
	let currentBoxInContainer = document.getElementById('squares-layer');
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function () {
		currentBoxInContainer.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer div");
	var containerBox = document.getElementById('squares-layer');			

	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		containerBox.removeChild(allbox[i]);
	}
}





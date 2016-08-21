var panel = document.createElement('div');
var section1 = document.createElement('div');
var section2 = document.createElement('div');
var display = document.createElement('div');
var infoDisplay = document.createElement('div');
var subDisplay = document.createElement('div');
var startButton = document.createElement('button');
var clearButton = document.createElement('button');
var nameButtomStart = 'Start';
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var date = new Date(0, 0);
var msStart = null;
panel.style.cssText = 'width: 850px; margin: auto; overflow: hidden';
panel.className = 'panel panel-default';
section2.style.cssText = 'margin-top: 20px;overflow: hidden';
display.style.cssText = 'width:700px; margin: auto; padding: 20px 35px;background-color: #EDE8E8;';
display.className = 'panel-heading';
startButton.style.cssText = 'float: left; width: 250px; height: 70px; font-size: 30px';
startButton.className = 'btn btn-success';
startButton.innerHTML = nameButtomStart;
clearButton.style.cssText = 'float: right; width: 250px; height: 70px; font-size: 30px';
clearButton.className = 'btn btn-danger';
clearButton.innerHTML = 'Clear';
infoDisplay.style.cssText = 'text-align: center; font-size: 35px';
infoDisplay.insertAdjacentHTML('beforeEnd', '<span></span>');
infoDisplay.children[0].innerHTML = '00:00:00';
subDisplay.style.cssText = 'text-align: center; font-size: 16px';
subDisplay.insertAdjacentHTML('beforeEnd', '<span></span>');
subDisplay.children[0].innerHTML = '000';

function start () {
	if (nameButtomStart == 'Start') {
		nameButtomStart = 'Pause';
		startButton.innerHTML = nameButtomStart;
		startButton.className = 'btn btn-info';

		function go () {
			date.setMilliseconds(date.getMilliseconds() + 4);
			milliseconds = date.getMilliseconds();
			
			if (milliseconds < 10) {
			 	milliseconds = "0" + "0" + milliseconds;
			}
			
			if (milliseconds < 100) {
			 	milliseconds = "0" + milliseconds;
			} 
			
			if (milliseconds == 996) {
			 	seconds++;
			 	milliseconds = 0;
			 	milliseconds = milliseconds;
			} 

			if (seconds < 10) {
				seconds = "0" + Number(seconds);
			} else if (seconds == 60) {
				minutes++;
				seconds = 0;
			} 

			if (minutes < 10) {
				minutes = "0" + Number(minutes);
			} else if (minutes == 60) {
				hours++;
				minutes = 0;
			}

			if (hours < 10) {
				hours = "0" + Number(hours)
			}

			subDisplay.children[0].innerHTML = milliseconds;
			infoDisplay.children[0].innerHTML = hours + ':' + minutes + ':' +seconds;
		}

		msStart = setInterval(go, 1);
	} else {
		nameButtomStart = 'Start';
		startButton.innerHTML = nameButtomStart;
		startButton.className = 'btn btn-success';
		clearInterval(msStart);

	};
	
}

function makeClear () {
	hours = 0;
	minutes = 0;
	seconds = 0;
	milliseconds = 0;
	subDisplay.children[0].innerHTML = '000';
	infoDisplay.children[0].innerHTML = '00:00:00';
	nameButtomStart = 'Start';
	startButton.innerHTML = nameButtomStart;
	startButton.className = 'btn btn-success';
	clearInterval(msStart);
}
	
startButton.addEventListener('click', start);
clearButton.addEventListener('click', makeClear);

document.body.appendChild(panel);
panel.appendChild(section1);
panel.appendChild(section2);
section1.appendChild(display);
display.appendChild(infoDisplay);
display.appendChild(subDisplay);
section2.appendChild(startButton);
section2.appendChild(clearButton);
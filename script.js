
/*var editQuad = document.getElementById('quad');

function newColor(){
    if(editQuad.style.backgroundColor == "red"){
        editQuad.style.backgroundColor = "green";
    } else{
        editQuad.style.backgroundColor = "red";
    }
}

var allLinks = document.links; //all links
for(var i = 0; i < 88; i++){
    var textLink = document.createTextNode(allLinks[i].href);
    var newBreak = document.createElement("br");
    document.body.appendChild(textLink);
    document.body.appendChild(newBreak);

}


function outputNumbers(one, two){
    var a = one;
    var timer = setInterval(function(){
        console.log(a);
        if (a === two) clearInterval(timer);
        a++;
    }, 1000);
}
outputNumbers(7, 10); */






var startButton = document.getElementById('start'),
    clock = document.getElementById('clock'),
    body = document.getElementsByTagName('body')[0],
    startTime,
    requestId;
var ms,S,M;
startButton.addEventListener('click', start);
function start() {
    var savePointButton = document.createElement('button');
    savePointButton.textContent = 'Круг';
    savePointButton.id = 'savePointButton';
    clock.appendChild(savePointButton);

    var resetButton = document.createElement('button');
    resetButton.textContent = 'Сбросить';
    resetButton.id = 'resetButton';
    clock.appendChild(resetButton);
 
    switch (this.textContent) {
        case 'Старт':
            startTime = Date.now();
            this.textContent = 'Приостановить';
            clockRun();
            break;
        case 'Приостановить':
            this.textContent = 'Возобновить';
            clock.removeChild(savePointButton);
            clock.removeChild(resetButton);
            cancelAnimationFrame(requestId);
            break;
        case 'Возобновить':
            clockRun();
            this.textContent = 'Приостановить';
            clock.removeChild(savePointButton);
            clock.removeChild(resetButton);
            break;
    }
}
 
function clockRun() {
        ms = Date.now() - startTime;
        S = Math.floor(ms / 1000);
        ms = ms % 1000;
        M = Math.floor(S / 60);
        S = S % 60;
 
    document.getElementById('stopwatch').textContent = [showTime(M, 2), showTime(S, 2), showTime(ms, 3)].join(':');
    requestId = requestAnimationFrame(clockRun);
}
function showTime(x, y) {
    var s = '00' + x;
    return s.slice(-y)
}
body.onclick = function (event) {
    var target = event.target;
    if (target.id === 'resetButton') {
        cancelAnimationFrame(requestId);
        document.getElementById('stopwatch').textContent = '00:00:000';
        startButton.textContent = 'Старт';
        clock.removeChild(resetButton);
        clock.removeChild(savePointButton);
    }
};
body.addEventListener('click',showSavePoint);
function showSavePoint(evt) {
    var target = evt.target;
    if (target.id === 'savePointButton') {
        var showSavePoint = document.createElement('div');
        showSavePoint.innerHTML = 'Время круга: '+M+':'+S+':'+ms;
        body.appendChild(showSavePoint);
    }
};
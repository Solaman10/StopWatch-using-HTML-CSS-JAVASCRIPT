let num = 0;
let intervalId;

function start() {
    intervalId = setInterval(function() {
        num++;
        document.getElementById('runSecs').innerHTML = num.toString().padStart(4, '0');
    }, 100);
}

function stop() {
    clearInterval(intervalId);
}

function reset() {
    clearInterval(intervalId);
    num = 0;
    document.getElementById('runSecs').innerHTML = "0000";
}
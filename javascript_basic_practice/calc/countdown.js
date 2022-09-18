(function () {
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const pauseAndResume = document.getElementById('pauseAndResume');
    const counter = document.getElementById('counter');

    let counterInterVal;

    let milliSec = 0;
    let seconds = 0;
    let minutes = 0;
    let pause = false;
    let isStarted = false;

    const startMethod = (forceStart) => {
        if (!isStarted || forceStart) {
            isStarted = true
            counterInterVal = setInterval(() => {
                // if (milliSec >= 100) {
                //    // milliSec = 0;
                //     seconds += 1;
                // } else {
                //     milliSec += 1;
                // }
                if (seconds >= 60) {
                    seconds = 0;
                    minutes += 1;
                } else {
                    seconds += 1;
                }
                counter.innerHTML = `${String(minutes).length === 1 ? `0${minutes}` : minutes}:${String(seconds).length === 1 ? `0${seconds}` : seconds}:${String(milliSec).length === 1 ? `0${milliSec}` : milliSec}`;
            }, 1000);
        }
    };

    const stopMethod = () => {
        clearInterval(counterInterVal);
        milliSec = 0;
        seconds = 0;
        minutes = 0;
        pause = false;
        counterInterVal = null;
        counter.innerHTML = "00:00:00";
        isStarted = false;
    };

    pauseAndResumeMethod = () => {
        if (isStarted) {
            if (!pause) {
                clearInterval(counterInterVal);
                pause = true;
            } else {
                startMethod(true);
                pause = false;
            }
        }
    };

    start.addEventListener('click', startMethod);
    stop.addEventListener('click', stopMethod);
    pauseAndResume.addEventListener('click', pauseAndResumeMethod)
})();
import React, { useState, useRef } from "react";

const App = () => {
    const timerRef = useRef();
    const secondsRef = useRef();
    const minutesRef = useRef();

    // timer features
    const [timer, setTimer] = useState("00:00");
    const [pause, setPause] = useState(false);

    const onStart = () => {
        const min = minutesRef.current.value;
        const sec = secondsRef.current.value;
        let minutesValue = min || 0;
        let secondsValue = sec || 0;

        if (parseInt(secondsValue)) {
            secondsRef.current.value = "";
        }
        if (parseInt(minutesValue)) {
            minutesRef.current.value = "";
        }

        if (timer !== "00:00" && (minutesValue === "" || secondsValue === "")) {
            const timeArray = timer.split(":");
            minutesValue = timeArray[0].trim();
            secondsValue = timeArray[1].trim();
        }

        timerRef.current = setInterval(() => {
            if (secondsValue) {
                secondsValue = +secondsValue - 1;
            }
            if (minutesValue && !secondsValue) {
                minutesValue = +minutesValue - 1;
                secondsValue = 60;
            }
            const countdown = `${String(minutesValue).length === 1
                ? `0${minutesValue}`
                : minutesValue || "00"
                }:${String(secondsValue).length === 1
                    ? `0${secondsValue}`
                    : secondsValue || "00"
                }`;
            if (countdown === "00:00") {
                onStop();
            }
            setTimer(countdown);
        }, 1000);
    };

    const onStop = () => {
        setTimer("00:00");
        clearInterval(timerRef.current);
    };

    const onPauseAndResume = () => {
        !pause ? clearInterval(timerRef.current) : onStart();
        setPause(!pause);
    };
    return (
        <div className="App">
            <h2>{timer}</h2>
            <input type="number" placeholder="Elapsed Minutes" ref={minutesRef} />
            <input type="number" placeholder="Elapsed Seconds" ref={secondsRef} />
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onPauseAndResume}>Pause/Resume</button>
        </div>
    );
};

export default App;

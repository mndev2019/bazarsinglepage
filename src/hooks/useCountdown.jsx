import { useEffect, useMemo, useState } from "react";

const useCountdown = (targetDate = new Date()) => {
    const countDownDate = useMemo(() => {
        if (typeof targetDate == "number") {
            return targetDate;
        }
    }, []);

    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        let interval;

        const difference = countDownDate - new Date().getTime();
        if (difference >= 0) {
            interval = setInterval(() => {
                const remainingTime = countDownDate - new Date().getTime();
                if (remainingTime >= 0) {
                    setCountDown(remainingTime);
                } else {
                    setCountDown(null);
                    clearInterval(interval);
                }
            }, 1000);
        } else {
            setCountDown(null);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    if (!countDown) {
        return [0, 0, 0, 0, false];
    }
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    const format = (num) => num.toString().padStart(2, "0");

    return [
        ...format(days).split("").map(Number),
        ...format(hours).split("").map(Number),
        ...format(minutes).split("").map(Number),
        ...format(seconds).split("").map(Number),
        true,
    ];
};

export default useCountdown;
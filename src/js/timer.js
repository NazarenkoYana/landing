(function () {
    let timerElements = document.querySelectorAll('[data-timer]');

    for (let timerElement of timerElements) {
        initializeClock(timerElement);
    }

    function getTimeRemaining(endTime) {

        let totalTime = Date.parse(endTime) - Date.now();
        let seconds = Math.floor((totalTime / 1000) % 60);
        let minutes = Math.floor((totalTime / 1000 / 60) % 60);
        let hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
        let days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

        return {
            total: totalTime,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function initializeClock(timerElement) {
        const endTimeStr = timerElement.dataset.timer;

        let daysSpan = timerElement.querySelector('.days');
        let hoursSpan = timerElement.querySelector('.hours');
        let minutesSpan = timerElement.querySelector('.minutes');
        let secondsSpan = timerElement.querySelector('.seconds');

        function updateClock() {
            let timeRemaining = getTimeRemaining(endTimeStr);

            if (daysSpan)
                daysSpan.innerHTML = timeRemaining.days;

            if (hoursSpan)
                hoursSpan.innerHTML = ('0' + timeRemaining.hours).slice(-2);

            if (minutesSpan)
                minutesSpan.innerHTML = ('0' + timeRemaining.minutes).slice(-2);

            if (secondsSpan)
                secondsSpan.innerHTML = ('0' + timeRemaining.seconds).slice(-2);

            if (timeRemaining.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    }
})();

// if (document.querySelectorAll('.counter')) {
//     document.querySelectorAll('.counter').forEach(function(counter) {
//         const days = counter.querySelector('[data-unit="days"]');
//         const hours = counter.querySelector('[data-unit="hours"]');
//         const minutes = counter.querySelector('[data-unit="minutes"]');
//         const seconds = counter.querySelector('[data-unit="seconds"]');
//         const countEnd = new Date("2022/09/14 13:01");
        
//         function updateCountdown() {
//             const currentTime = new Date();
//             const diff = countEnd - currentTime;

//             // Translate in Days || Hours || Minutes
//             const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
//             const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
//             const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
//             const secondsLeft = Math.floor(diff / 1000) % 60;

//             if (countEnd < currentTime) {
//                 days.innerText = '00';
//                 hours.innerText = '00';
//                 minutes.innerText = '00';
//                 seconds.innerText = '00';
//             } else {
//                 days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
//                 hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
//                 minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
//                 seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
//             }
//         }

//         updateCountdown();
//         setInterval(updateCountdown, 1000);
//     });
// }

function initCounter(counter, counterEndTime) {
    if (counter) {
        const days = counter.querySelector('[data-unit="days"]');
        const hours = counter.querySelector('[data-unit="hours"]');
        const minutes = counter.querySelector('[data-unit="minutes"]');
        const seconds = counter.querySelector('[data-unit="seconds"]');
        const countEnd = new Date(counterEndTime);
        
        function updateCountdown() {
            const currentTime = new Date();
            const diff = countEnd - currentTime;

            // Translate in Days || Hours || Minutes
            const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
            const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
            const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
            const secondsLeft = Math.floor(diff / 1000) % 60;

            if (countEnd < currentTime) {
                days.innerText = '00';
                hours.innerText = '00';
                minutes.innerText = '00';
                seconds.innerText = '00';
            } else {
                days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
                hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
                minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
                seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

initCounter(document.querySelector('.timer .counter'), "2022/09/14 13:01")
if (document.querySelectorAll('.calendar')) {
    document.querySelectorAll('.calendar--consultation').forEach(function(calendar) {
        let useCalendar = flatpickr(calendar, {
            disableMobile: "true",
            "locale": "ru",
            minDate: "today",
        });
    })
    document.querySelectorAll('.calendar--cabinet').forEach(function(calendar) {
        let useCalendar = flatpickr(calendar, {
            disableMobile: "true",
            dateFormat: "d F Y",
            "locale": "ru",
            maxDate: "today",
        });
    })
    document.querySelectorAll('.calendar--timer').forEach(function(calendar) {
        let useCalendar = flatpickr(calendar, {
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
            dateFormat: "H:i",
            disableMobile: "true",
            weekNumbers: true,
        });
    })
}

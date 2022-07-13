if (document.querySelectorAll("input[type=\"tel\"]")) {
    const tels = document.querySelectorAll("input[type=\"tel\"]");
    tels.forEach(el => {
        IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
    });
}

if (document.querySelectorAll("input[data-validate-field='credit-card-num']")) {
    const creditCardNumb = document.querySelectorAll("input[data-validate-field='credit-card-num']");
    creditCardNumb.forEach(el => {
        IMask(el, { mask: "0000 0000 0000 0000" });
    });
}

if (document.querySelectorAll("input[data-validate-field='credit-card-data']")) {
    const creditCardNumb = document.querySelectorAll("input[data-validate-field='credit-card-data']");
    creditCardNumb.forEach(el => {
        IMask(el, { mask: "00/00" });
    });
}

if (document.querySelectorAll("input[data-validate-field='credit-card-cvv']")) {
    const creditCardNumb = document.querySelectorAll("input[data-validate-field='credit-card-cvv']");
    creditCardNumb.forEach(el => {
        IMask(el, { mask: "000" });
    });
}

if (document.querySelectorAll("input[data-validate-field='sms-code']")) {
    const creditCardNumb = document.querySelectorAll("input[data-validate-field='sms-code']");
    creditCardNumb.forEach(el => {
        IMask(el, { mask: "0" });
    });
}
if (document.querySelector('.cabinet-save-changes')) {
    document.querySelector('.cabinet-save-changes').addEventListener('click', function() {
        let cabinetBirthdayValue = document.querySelector('.cabinet-input-birthday input');
        let cabinetPhoneValue = document.querySelector('.cabinet-input-phone input');
        let cabinetEmailValue = document.querySelector('.cabinet-input-email input');

        let cabinetBirthdayField = document.querySelector('.cabinet__account-birthday');
        let cabinetPhoneField = document.querySelector('.cabinet__account-phone');
        let cabinetEmailField = document.querySelector('.cabinet__account-email');

        let regx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

        if (cabinetBirthdayValue.value) {
            cabinetBirthdayField.innerHTML = cabinetBirthdayValue.value;
        }
        
        if (cabinetPhoneValue.value.length > 15) {
            cabinetPhoneField.innerHTML = cabinetPhoneValue.value;
        }

        if (regx.test(cabinetEmailValue.value)) {
            cabinetEmailField.innerHTML = cabinetEmailValue.value;
        }
    });
}
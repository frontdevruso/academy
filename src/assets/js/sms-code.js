function initAutoFocus (input, index, list) {
    const next = list[index + 1]
    if (!next) { return }

    input.addEventListener('input', () => {
        if (input.value.length === input.maxLength) { next.focus() }
    })
}

document.querySelectorAll('.modal--register-sms .g-input input').forEach(initAutoFocus);
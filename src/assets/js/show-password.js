function showPassword() {
    if (document.querySelectorAll('.password-input')) {
        document.querySelectorAll('.password-input').forEach(function(password) {
            const toggleBtn = password.querySelector('.password-input__icon');

            toggleBtn.addEventListener('click', function() {
                password.classList.toggle('active');
                let input = password.querySelector('input');

                if (password.classList.contains('active')) {
                    input.setAttribute('type', 'text');
                } else {
                    input.setAttribute('type', 'password');
                }
            })
        });
    }
}

showPassword();
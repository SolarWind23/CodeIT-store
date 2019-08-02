$('.subs input[type=email]').on('blur', function () {
    let email = $(this).val();
    
    if (email.length > 0
    && (email.match(/.+?\@.+/g) || []).length !== 1) {
        console.log(2);
        
    } else {
        console.log('valid');
        $('#subs').toggleClass('alert-danger')
    }
});
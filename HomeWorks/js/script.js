$('.dino-sidebar').on('mouseenter', '>div', function() {
    $(this).find('>div').fadeIn(500);
})

$('.dino-sidebar').on('mouseleave', '>div', function() {
    $('.active-sidebar').fadeOut(300);
})

let flag = false;

$('.active-sidebar').on('click', '>div', function() {
    setImg($(this), $('.dino-body-sidebar'), 'choosen-body');

    if ($('.choosen-body').length == 0) {
        $('.dino-panel').html('<h1>Firstly, choose your dinosaur!</h1>');
        $('.dino-panel').css({display: 'flex', justifyContent: 'center', alignItems: 'center'});
        return;
    } else {
        $('.dino-panel h1').html('')
    }
    
    setImg($(this), $('.dino-eyes-sidebar'), 'choosen-eye');
    setImg($(this), $('.dino-hats-sidebar'), 'choosen-hat');
    setImg($(this), $('.dino-mouth-sidebar'), 'choosen-mouth');
    setImg($(this), $('.dino-spots-sidebar'), 'choosen-spot');
    setImg($(this), $('.dino-mane-sidebar'), 'choosen-mane');
    console.log($('.dino-body-sidebar').has('img.choosen-body'))
})

function setImg(eventTarget, parentName, addedClass) {
    if (eventTarget.parent().is(parentName)) {
        eventTarget.parent().find('img').removeClass(addedClass);
        eventTarget.find('img').addClass(addedClass);
        $('.dino-panel').html($('.dino-panel').html() + eventTarget.html());
        $('.' + addedClass).replaceWith(eventTarget.html())
    }
}
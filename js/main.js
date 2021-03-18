function hideClose(){

    $('.hamburger-menu').hide();
}

function showMenu(){
    
    $('.hamburger-menu').show();
}

$('.close').click(hideClose);

$('.header-right a').click(showMenu);
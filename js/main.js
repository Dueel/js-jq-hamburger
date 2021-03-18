function hideClose(){

    $('.hamburger-menu').hide();
}

function showMenu(){
    
    $('.hamburger-menu').show();
}

$('.close').click(hideClose);

$('.fas.fa-bars').click(showMenu);
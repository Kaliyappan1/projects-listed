$(document).ready(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>20){
            $('.navbar').addClass('custom-nav');
        }
        else{
            $('.navbar').removeClass('custom-nav');
        }
    });

$('.navbar-toggler').click(function(){
    $('.mid-toggle').toggle('fast');
    $('.navbar-toggler div:first-child').toggleClass('top-toggle');
    $('.navbar-toggler div:last-child').toggleClass('bottom-toggle');
    $('.collapse').toggleClass('custom-collapse');
    
});

});
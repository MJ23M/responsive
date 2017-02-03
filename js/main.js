$(document).ready(function(){
    $(function() {
    var speed = 300
    var sametarget = 'true';
    
    $('.burger').click(function() {
            
        if(sametarget == 'true'){
          $('.naviDrop').slideDown(speed);;
            sametarget = 'false';
        }
        else {
            $('.naviDrop').slideUp(speed);
            sametarget = 'true';
        }
          
    });
    $('.arrow').height(function(){
            var photosHeight = $('.photo').height();
            console.log(photosHeight);
            return (photosHeight);
        });
    $('#robinHood .arrow').height(function(){
            var hoodHeight = $('.textContent').height();
            console.log(hoodHeight);
            return (hoodHeight);
        });
    $(window).resize(function(){
        $('.arrow').height(function(){
            var photosHeight = $('.photo').height();
            console.log(photosHeight);
            return (photosHeight)
        });
    });
    $(window).resize(function(){
        $('#robinHood .arrow').height(function(){
            var hoodHeight = $('.textContent').height();
            console.log(hoodHeight);
            return (hoodHeight);
        })
    });
    
});


});
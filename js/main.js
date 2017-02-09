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
    $('#photos .arrow').height(function(){
            var photosHeight = $('#photos .photo img').height();
            console.log(photosHeight);
            return (photosHeight);
        });
    $(window).resize(function(){
        $('#photos .arrow').height(function(){
            var photosHeight = $('#photos .photo img').height();
            console.log(photosHeight);
            return (photosHeight)
        });
    });
    
});


});
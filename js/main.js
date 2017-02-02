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
});


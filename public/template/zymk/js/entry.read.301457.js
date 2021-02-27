$(function() {
    var content = document.getElementById('content');
    var menu = document.getElementById('right-menu');

    FastClick.attach(content);
    FastClick.attach(menu);
    
    content.addEventListener('click', function(event) {
       $('.header').toggle();
       $('#tools').toggle();
    }, false);

    menu.addEventListener('click', function(event) {
        $('.bd').toggle();
     }, false);
 
});
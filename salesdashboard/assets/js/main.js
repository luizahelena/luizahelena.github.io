$(document).ready(function() {
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
    
    $.ajax({
        url: 'https://api.stackexchange.com/2.2/users/9719278?order=desc&sort=reputation&site=stackoverflow',
        success: function (response) {
            $(".reputation").html(response.items[0].reputation);
        },
        error: function () {
            $(".reputation").html("Stack overflow fora do ar");
        },
    });

});

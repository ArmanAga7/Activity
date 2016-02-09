  $(document).ready(function()
  {
    $('#rightArrow').click(function()
    {
        var item_width = $('.wrapper').width();
        var left_indent = parseInt($('.accordion').css('left')) - item_width;
        $('.accordion').animate({'left' : left_indent},250,function()
        {    
            $('.accordion .wrapper:last').after($('.accordion .wrapper:first')); 
            $('.accordion').css({'left' : 0});
        }); 
    });
        
     $('#leftArrow').click(function()
    {
        var item_width = $('.accordion .wrapper').width();
        var left_indent = parseInt($('.accordion').css('left')) + item_width;
        $('.accordion').css({'left' : -item_width});
        $('.accordion .wrapper:first').before($('.accordion .wrapper:last')); 
        $('.accordion').animate({'left' : 0},250,function()
        {
            $('.accordion').css({'left' : 0});  
        });
    });

    $(".secondary").hide();
    $(".primary").click(function()
    {
        $(".open").hide('slide', {direction: 'right'}, 100);
        $(".secondary").animate({'width': 'toggle'}, 200);
    }),

    $(".wrapper").on("click", function()
    {
        var index = $(this).index();
        var wrapper = $('wrapper').width();
        var countLeft = (wrapper*index);
        $('.accordion .wrapper:last').after($('.accordion .wrapper:lt('+index+')')); 
        $('.accordion').animate({'left' : -countLeft},250);
        $('.accordion').css({'left' : 0});
        /*$("button").click(function()
        {
            var index_01 = $(this).index();
            var wrapper = $('wrapper').width();
            var item_width = $('.accordion .wrapper').width();
            var left_indent = parseInt($('.accordion').css('left')) + item_width;
            $('.accordion').css({'left' : -item_width});
            $('.accordion .wrapper:first').before($('.accordion .wrapper:gt('+index_01+')')); 
            $('.accordion').animate({'left' : 0},250,function()
            {
                $('.accordion').css({'left' : '0px'});  
            });
        });*/
    });

    $("button").click(function()
    {   
        $(".open").animate('slide', {direction: 'right'}, 500);
        $(".open").show('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
    });    
});
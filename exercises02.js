  $(document).ready(function() {
            $('#rightArrow').click(function(){
            var item_width = $('.primedary').outerWidth();
            var left_indent = parseInt($('.accordion').css('left')) - item_width;
            $('.accordion').animate({'left' : left_indent},500,function(){    
            $('.accordion .primedary:last').after($('.accordion .primedary:first')); 
            $('.accordion').css({'left' : '0'});
            }); 
        });
        
        $('#leftArrow').click(function(){
            var item_width = $('.accordion .primedary').outerWidth() + 10;
            var left_indent = parseInt($('.accordion').css('left')) + item_width;
            $('.accordion').css({'left' : -item_width});
            $('.accordion .primedary:first').before($('.accordion .primedary:last')); 
            $('.accordion:not(:animated)').animate({'left' : 0},500,
            function(){
            $('.accordion').css({'left' : '0px'});  
            });
        });
    $(".secondary").hide();
    $("#divimg_01, #divimg_02, #divimg_03, #divimg_04, #divimg_05").click(function(){
        $(".open").hide('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
        

    }),

    $(".primedary").on("click", function()
    {
        var index = $(this).index();
        var primedary = $('primedary').width();
        var countLeft = (primedary*index);
        $('.accordion .primedary:last').after($('.accordion .primedary:lt('+index+')')); 
        $('.accordion').animate({'left' : -countLeft},250);
        $('.accordion').css({'left' : '0'});
       $("button").click(function()
        {
            var index_01 = $(this).index();
            var wrapper = $('wrapper').width();
            var item_width = $('.accordion .wrapper').width();
            var left_indent = parseInt($('.accordion').css('left')) + item_width;
            $('.accordion').css({'left' : -item_width});
            $('.accordion .wrapper:first').before($('.accordion .wrapper:lt('+index_01+')')); 
            $('.accordion').animate({'left' : 0},250,function()
            {
                $('.accordion').css({'left' : '0px'});  
            });
        });
    });

        $(".button_01, .button_02, .button_03, .button_04, .button_05").click(function()
        {   
            $(".open").animate('slide', {direction: 'right'}, 500);
            $(".open").show('slide', {direction: 'right'}, 500);
            $(".secondary").animate({'width': 'toggle'}, 300);
            $('.primedary').css({'left' : '-320px'});
            $('.accordion').animate({'left' : '0px'},50);  
            $('.accordion').css({'margin-left' : '0px'});
        });    
});
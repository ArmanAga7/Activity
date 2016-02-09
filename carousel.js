$(document).ready(function(){
    $(".secondary_01").hide();
    $(".primary_01").click(function(){
        $(".secondary_01").animate({'width': 'toggle'}, 1000);
    });
        $("button").click(function(){
        $(".secondary_01").animate({'width': 'toggle'}, 1000);
    });
        $(".secondary_02").hide();
    $(".primary_02").click(function(){
        $(".secondary_02").animate({'width': 'toggle'}, 1000);
    });
        $(".secondary_03").hide();
    $(".primary_03").click(function(){
        $(".secondary_03").animate({'width': 'toggle'}, 1000);
    });

});


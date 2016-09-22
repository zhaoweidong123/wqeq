/**
 * Created by Z on 2016-6-28.
 */


$(document).ready(function(){
    $("#box").fullpage({
        verticalCentered: false,
        anchors:["page1","page2","page3","page4"],
        navigation:true,
        navigationTooltips:["该买表了","比万国有品味","智能腕表","抢购吧"],
        navigationPosition:"left",
        navigationColor:"blue",
        afterLoad:function(Link,index){
            switch(index){
                case 1:
                    move(".section1 h1").scale(1.5).end(function(){
                        move(".section1 p").set("margin-top","5%").end(function(){
                            move(".section1 a").set("margin-left","45%").end();
                        });
                    });
                    break;
                case 2:
                    move(".section2").set("opacity","1").end(function(){
                        move(".section2 h1").scale(0.7).end(function(){
                            move(".section2 a").set("opacity","0.8").end();
                        });
                    });
                    break;
                case 3:
                    move(".section3 h1").set("margin-left","20%").end(function(){
                        move(".section3 p").set("margin-left","0%").end(function(){
                            move(".section3 p").set("margin-left","40%").end(function(){
                                move(".section3 p").set("margin-left","20%").end(function(){
                                    move(".section3 a").set("opacity","1").end();
                                });
                            });
                        });
                    });
                    break;
                case 4:
                    move(".section4 img.primary").rotate(720).end(function(){
                        move(".section4 img.sport").rotate(720).end(function(){
                            move(".section4 img.edition").rotate(720).end(function(){
                                move(".section4 h4.primary").scale(1.2).end();
                                move(".section4 .move1").set("opacity","1").end(function(){
                                    move(".section4 h4.sport").scale(1.2).end();
                                    move(".section4 .move2").set("opacity","1").end(function(){
                                        move(".section4 h4.edition").scale(1.2).end();
                                        move(".section4 .move3").set("opacity","1").end();
                                    });
                                });
                            });
                        });
                    });
                    break;
                default:
                    break;


            }
        },
        //离开某一界面时
        onLeave:function(link, index){
            switch(index){
                case 1:
                    move(".section1 h1").scale(1).end();
                    move(".section1 a").set("margin-left","-1000px").end();
                    move(".section1 p").set("margin-top","1000px").end();
                    break;
                case 2:
                    move(".section2 a").set("opacity","0").end();
                    move(".section2").set("opacity","0").end();
                    move(".section2 h1").scale(1).end();
                    break;
                case 3:
                    move(".section3 h1").set("margin-left","-1500px").end();
                    move(".section3 p").set("margin-left","1500px").end();
                    move(".section3 a").set("opacity","0").end();
                    break;
                case 4:
                    move(".section4 h4.primary").scale(1).end();
                    move(".section4 .move1").set("opacity","0").end();
                    move(".section4 h4.sport").scale(1).end();
                    move(".section4 .move2").set("opacity","0").end();
                    move(".section4 h4.edition").scale(1).end();
                    move(".section4 .move3").set("opacity","0").end();
                    break;
                default:
                    break;


            }
        }


    });

});



$(function(){
    
    /** NAV HOVER STATUS ID BEFORE & AFTER LI  - STUCK ON FIRST CHILD **/
    $('header>nav li a').mouseover(
        function() {
    $( this ).after( "<div id='dotmenu'></div>" );
    $( this ).before( "<div id='linemenu'></div>" );        
        }
    );
    
     $('header>nav li a').mouseout(
        function() {
    $( this ).remove( "div#dotmenu,div#linemenu" );       
        }
    );
    
    /** SMOOTH SCROLL ( ANCHORS + NAV ) **/
    
     $('#menu1,nav>ul>li:first-child').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#logo').offset().top-80},1000);
        return false;
    });
    $('#menu2,nav>ul>li:nth-child(2)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#daypack').offset().top-80},1500);
        return false;
    });
    $('#menu3,nav>ul>li:nth-child(3)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#Drifter').offset().top-80},2000);
        return false;
    });
    $('#menu4,nav>ul>li:nth-child(4)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#TannerCollections').offset().top-80},2500);
        return false;
    });
     $('#menu5,nav>ul>li:nth-child(5)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#allthefootnavs').offset().top-80},3500);
        return false;
    });
    
    /** ANCHOR MENU **/
    
    
      $("#anchors a").click(function() {
      $("#anchors a.activeanchor").removeClass("activeanchor");
      $(this).addClass('activeanchor');
});    
    
    
    
    /** BACKPACK ARROW CLICKS **/
    $('#arrow1').on('click', function(){
     window.open("#logo");         
});
    $('#arrow2').on('click', function(){
     window.open("http://www.google.fr");
});
  
    
    
    
    
});
$(function(){
    
     $(window).scroll(function(){
         valeurDuScroll=$(window).scrollTop();
              
     
    if(valeurDuScroll>50){
    
       $('#daypack_img').css({'opacity':'1','left':'0px'});
        $('#goldbox1').css({'opacity':'1','right':'78px'}); 
        
        
        /*$('#daypack_img').animate({'left':'0px'},300,function(){
           $('#goldbox1').animate({'right':'78px'},300); 
        });*/
        
            
    }
    
         
     if(valeurDuScroll>1000){
        
        $('#drifter_img').css({'opacity':'1','right':'0px'});
        $('#goldbox2').css({'opacity':'1','left':'78px'}); 
    }    
         
         
        if(valeurDuScroll>1800){
        
        $('#TannerCollections').css({'opacity':'1'}); 
    }  
         
     });
    
    
    
    
});
$(document).ready(function(){
    //완료버튼 관련
    $(".land-info-input .btn-complete").on("click",function(){
        $("body").addClass("overflow-hidden");
        $(".modal-complete-request").show(); 
    });
    
    $(".modal-complete-request .btn-close-complete").on("click",function(){
        $("body").removeClass("overflow-hidden");
        $(".modal-complete-request").hide(); 
    });



});
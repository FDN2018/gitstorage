
$(document).ready(function(){
$('.lcodetails').hide();
})
$('.lcosel').click(function(){
  $('.lcodetails').toggle();
})

    $("#opname").select2({
    theme: "bootstrap-5",
});
$("#lconame").select2({
    theme: "bootstrap-5",
});

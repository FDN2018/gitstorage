
$('#check-all').click(function(event) {   
    if(this.checked) {
        $(':checkbox').each(function() {
            this.checked = true;                       
        });
    } else {
        $(':checkbox').each(function() {
            this.checked = false;                       
        });
    }
});




    
$(document).ready(function() {
    var inpcheck = $("#rbtn").hide(),
        inpchecktrue = $('input[type="checkbox"]').click(function() {
            inpcheck.toggle( inpchecktrue.is(":checked") );
        });
});





$(document).ready(function () {
$('#myTable').DataTable()
});





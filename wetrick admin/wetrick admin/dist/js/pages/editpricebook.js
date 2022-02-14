
    $('#myTableNew').DataTable({
        dom:'ftrip'
    });




$('#myTableNew').on('click', '.remove', function () {
$('#myTableNew').DataTable().row($(this).parents('tr')).remove().draw();
});




$(document).ready( function () {
$('.edit').on('click',function(){
$('#editplan').modal('show');
$row=$(this).closest('tr');
var data = $row.children("td").map(function(){
return $(this).text();
  }).get();
  $('#plan').val(data[0]);
  $('#basemrp').val(data[1]);
  $('#mrp').val(data[2]);
  $('#retprice').val(data[3]);
  $('#offprice').val(data[4]);
  })
});



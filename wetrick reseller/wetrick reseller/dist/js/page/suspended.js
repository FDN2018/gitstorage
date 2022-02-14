$(document).ready(function () {
    $('#myTable').DataTable();
});

$(document).ready( function () {
    $('.datafetch').on('click',function(){
    $('#accstatus').modal('show');
    $row=$(this).closest('tr');
    var data = $row.children("td").map(function(){
    return $(this).text();
      }).get();
      $('#fname').val(data[1]);
      $('#username').val(data[0]);
      $('#phone').val(data[2]);
      $('#curstate').val(data[5]);
      })
    });
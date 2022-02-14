
        $(document).ready(function () {
            $('#myTable').DataTable();
        });
    
        




        


$(document).ready( function () {
$('.datafetch').on('click',function(){
$('#recharge').modal('show');
$row=$(this).closest('tr');
var data = $row.children("td").map(function(){
return $(this).text();
  }).get();
  $('#fname').val(data[1]);
  $('#username').val(data[0]);
  $('#phone').val(data[2]);
  $('#cplan').val(data[3]);
  })
});








function inputDataRec(val){
 var element=document.getElementById('docmodecheque');
 if(val=='Cheque'){
   element.style.display='block';
   document.getElementById('doc').innerHTML='Cheque No.';
   document.getElementById('chequeno').placeholder="Enter Cheque No.";
   }
   else if(val=='NEFT'){
   element.style.display='block';
   document.getElementById('doc').innerHTML='NEFT';
   document.getElementById('chequeno').placeholder="Enter NEFT Transaction No.";
   }
 else{  
   element.style.display='none';
}
}







    

        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })

        




        

    function popUpDis()
    {
    Swal.fire({
  title: 'Do you want to disconnect this user?',
  showCancelButton: true,
  confirmButtonText: 'Disconnect',
  confirmButtonColor: '#DC3741'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('User Disconnected!', '', 'success')
  }
})
    }

    




    

function popUp(){
Swal.fire({
  title: 'Reset MAC',
  text: "Do You Want To Reset MAC Address",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Reset MAC!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Reset!',
      'MAC Address reset successfully.',
      'success'
    )
  }
});
}







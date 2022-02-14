
    validateForm=()=>{
                let prname = document.forms["crprice"]["pricename"].value;
                let seluser = document.forms["crprice"]["seluser"].value;
                let prstatus = document.forms["crprice"]["pricestatus"].value;
                 if (prname == "") {
                 Toastify({
                    text: "Pricebook Name must be filled out",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                 else if (seluser == "") {
                 Toastify({
                    text: "Please Assign Pricebook",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                 else if (prstatus=="") {
                 Toastify({
                    text: "Please Select Pricebook Status",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
        }













    $(document).ready(function(){
    

  document.getElementById('fdate').valueAsDate = new Date();
    });
     













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













    function bookFor(){
        var selVal=document.getElementById('seluser').value;
        var resblock=document.getElementById('resblock');
        var asresblock=document.getElementById('asresblock');
        var lcoblock=document.getElementById('lcoblock');
        if (selVal=="reseller"){
            resblock.style.display="block";
            asresblock.style.display="none";
            lcoblock.style.display="none";
        }
        else if (selVal=="lco"){
            resblock.style.display="none";
            asresblock.style.display="block";
            lcoblock.style.display="block";
        }
    }













  var table = $('#myTable').DataTable();
  var myTableNew = $('#myTableNew').DataTable();
        
   $('#addbtn').on('click', function(e){
    
    var newTable=document.getElementById('plantabfinal');
    if (myTableNew.rows().count()===0){
        newTable.style.display="none";
    }
    var subBtn=document.getElementById('submitTable');
if(newTable.style.display=="block"){
    subBtn.style.display="block";
}
else{
    subBtn.style.display="none";
}
      var rows = $('input[type="checkbox"][name="check"]:checked').map(function () {
      var checkedRow =this.value;
      $tr =$(this).closest('tr');
      var data = $tr.children("td").map(function(){
      return $(this).text();
      }).get();

      $('#plantable').modal('hide')
       var tabNew = $('#myTableNew').DataTable();
        var arr=[];
    $("#myTableNew tr").each(function(){
    arr.push($(this).find("td:first").text());
});
       if(arr.includes(data[1])){
        Toastify({
        text: "Cannot add "+data[1]+"<br> Plan Already Exists",
        duration: 3000,
        close:true,
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
    }).showToast();
       }
       else{
        $("input[type=checkbox]").prop('checked', false);
        var plan = data[1];
        var baseMRP = data[2];
        var MRP = data[3];
        var retailerPrice = data[4];
        var OfferPrice =data[5];
        const planname = JSON.stringify(plan);
    tabNew.row.add([plan,baseMRP,MRP,retailerPrice,OfferPrice,'<a href="#" class="btn btn-primary text-decoration-none edit"><i class="bi bi-pencil"></i></a> <a href="#" class="btn btn-danger text-decoration-none remove"><i class="bi bi-trash"></i></a>']).draw();
    newTable.style.display="block";
    subBtn.style.display="block";
       }
      });
   });













$('#myTableNew').on('click', '.remove', function () {
$('#myTableNew').DataTable().row($(this).parents('tr')).remove().draw();
var newTable=document.getElementById('plantabfinal');
    if ($('#myTableNew').DataTable().rows().count()===0){
        newTable.style.display="none";
    }
var subBtn=document.getElementById('submitTable');
if(newTable.style.display=="block"){
    subBtn.style.display="block";
}
else{
    subBtn.style.display="none";
}
});













$('#myTableNew').on('click', '.edit', function (e) {    
    fnResetControls();    
    var dataTable = $('#myTableNew').DataTable();    
    var clickedRow = $($(this).closest('td')).closest('tr');    
    $(clickedRow).find('td:nth-child(-2n+5):not(:first-child)').each(function () {    
        console.log(this)
                var html1 = fnCreateTextBox($(this).html());  
                var html2 = fnCreateTextBox($(this).html());  
                $(this).html($(html1,html2))     
    });
    $('#myTableNew tbody tr td .update').removeClass('update').addClass('edit').html('<i class="bi bi-pencil"></i>'); 
    $(clickedRow).find('td .edit').removeClass('edit').addClass('update').html('Update');     
});    
    
function fnCreateTextBox(value) {    
    return '<input type="number" value="' + value + '" ></input>';    
} 













    function fnResetControls() {    
        var openedTextBox = $('#myTableNew').find('input');    
        $.each(openedTextBox, function (k, $cell) {    
            $(openedTextBox[k]).closest('td').html($cell.value);    
        })    
    } 













$('#myTableNew').on('click', 'tbody td .update', function (e) {    
       var openedTextBox = $('#myTableNew').find('input');    
       $.each(openedTextBox, function (k, $cell) {    
           fnUpdateDataTableValue($cell, $cell.value);    
           $(openedTextBox[k]).closest('td').html($cell.value);    
       })    
       $('#myTableNew tbody tr td .update').removeClass('update').addClass('edit').html('<i class="bi bi-pencil"></i>');    
   });    
    
function fnUpdateDataTableValue($inputCell, value) {    
       var dataTable = $('#myTableNew').DataTable();    
       var rowIndex = dataTable.row($($inputCell).closest('tr')).index();     
       dataTable.rows().data()[rowIndex]= value;    
   }    












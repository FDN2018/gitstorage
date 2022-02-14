
function inputData(val){
 var element=document.getElementById('docid');
 if(val=='Aadhar Card'){
   element.style.display='block';
   document.getElementById('doc1').innerHTML='Aadhar Card';
   document.getElementById('idnumber').placeholder="Enter Aadhar Card No.";
   }
   else if(val=='Pan Card'){
   element.style.display='block';
   document.getElementById('doc1').innerHTML='PAN Card';
   document.getElementById('idnumber').placeholder="Enter PAN Card No.";
   }
   else if(val=='Insurance Paper'){
   element.style.display='block';
   document.getElementById('doc1').innerHTML='Insurance No.';
   document.getElementById('idnumber').placeholder="Enter Insurance No.";
   }
   else if(val=='Authorised Signatory Aadhar Card'){
   element.style.display='block';
   document.getElementById('doc1').innerHTML='Authorised Signatory Aadhar Card';
   document.getElementById('idnumber').placeholder="Enter Authorised Signatory Aadhar Card No.";
   }
   else if(val=='Authorised Signatory Pan Card'){
   element.style.display='block';
   document.getElementById('doc1').innerHTML='Authorised Signatory Pan Card';
   document.getElementById('idnumber').placeholder="Enter Authorised Signatory Pan Card No.";
   }
   else if(val=='other'){
   element.style.display='block';
   document.getElementById('doc1').innerHTML='Document Detail';
   document.getElementById('idnumber').placeholder="Enter Document No.";
   }

 else{  
   element.style.display='none';
}
}







function chPlanData(val){
 var element1=document.getElementById('chprice');
 var element2=document.getElementById('chprice1');
 var element3=document.getElementById('chvalidity');
 var element4=document.getElementById('chvalidity1');
 if(val=='16MB'){
   element1.style.display='block';
   element2.style.display='block';
   element3.style.display='block';
   element4.style.display='block';
   document.getElementById('chprice1').value="30";
   document.getElementById('chvalidity1').value="60";
   }
   else if(val=='20MB'){
   element1.style.display='block';
   element2.style.display='block';
   element3.style.display='block';
   element4.style.display='block';
   document.getElementById('chprice1').value="30";
   document.getElementById('chvalidity1').value="60";
   }
   else if(val=='25MB'){
   element1.style.display='block';
   element2.style.display='block';
   element3.style.display='block';
   element4.style.display='block';
   document.getElementById('chprice1').value="30";
   document.getElementById('chvalidity1').value="60";
   }
 else{  
   element1.style.display='none';
   element2.style.display='none';
   element3.style.display='none';
   element4.style.display='none';
}
}






function upPlanData(val){
 var element1=document.getElementById('nprice');
 var element2=document.getElementById('newprice');
 var element3=document.getElementById('validity');
 var element4=document.getElementById('validity1');
 if(val=='16MB'){
   element1.style.display='block';
   element2.style.display='block';
   element3.style.display='block';
   element4.style.display='block';
   document.getElementById('newprice').value="30";
   document.getElementById('validity1').value="60";
   }
   else if(val=='20MB'){
   element1.style.display='block';
   element2.style.display='block';
   element3.style.display='block';
   element4.style.display='block';
   document.getElementById('newprice').value="30";
   document.getElementById('validity1').value="60";
   }
   else if(val=='25MB'){
   element1.style.display='block';
   element2.style.display='block';
   element3.style.display='block';
   element4.style.display='block';
   document.getElementById('newprice').value="30";
   document.getElementById('validity1').value="60";
   }
 else{  
   element1.style.display='none';
   element2.style.display='none';
   element3.style.display='none';
   element4.style.display='none';
}
}






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






var _validFileExtensions = [".jpg", ".jpeg", ".png", ".pdf"];    
function ValidateSingleInput(oInput) {
    if (oInput.type == "file"){
        var sFileName = oInput.value;
         if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }
             
            if (!blnValid) {
                alert("Sorry, allowed extensions are: " + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
        }
    }
    return true;
}


$(document).ready(function () {
  $('#plan').DataTable({
    pageLength: 3,
    recordsTotal: 50
  });

  $('#plan-his').DataTable({
    pageLength: 3,
    recordsTotal: 50
  });

  $('#session').DataTable({
    pageLength: 5,
    recordsTotal: 50
  });

  $('#purchase').DataTable({
    pageLength: 3,
    recordsTotal: 50
  });

  $('#reldoc').DataTable({
    pageLength: 3,
    recordsTotal: 50
  });


  $('#update').DataTable({
    pageLength: 3,
    recordsTotal: 50
  });
});

var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var d = new Date();
var optionText,optionValue;
d.setDate(1);
for (i=0; i<=11; i++) {
    optionText=monthName[d.getMonth()] + '-' + d.getFullYear();
    optionValue=d.getFullYear() + '-' + [('0' + (d.getMonth()+1)).slice(-2)];
    d.setMonth(d.getMonth() - 1);
    $('#Month_list').append(`<option value="${optionValue}">${optionText}</option>`);
}

    function colVal(val){
    var colname = document.getElementById("Month_list").value; 
    return [colname];
    }

$('#seardata').on('click', function () {
            $('#session').DataTable().column(0).every(function () {
                var column1 = this;
                colVal();
                var selCol=colVal()[0];
                if (column1.search() !== (selCol)) {
                    column1.search(selCol).draw();
                }
            });
        });

$(document).ready(function(){
    document.getElementById('paymentdate').valueAsDate = new Date();
    document.getElementById('reversedate').valueAsDate=new Date();
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
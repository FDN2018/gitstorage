$(document).ready(function () {
    $('#myTable').DataTable();
});

function chPlanData(val){
    var element1=document.getElementById('chprice');
    var element2=document.getElementById('chprice1');
    var element3=document.getElementById('chvalidity');
    var element4=document.getElementById('chvalidity1');
    if(val=='10MB'){
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
      else if(val=='50MB'){
      element1.style.display='block';
      element2.style.display='block';
      element3.style.display='block';
      element4.style.display='block';
      document.getElementById('chprice1').value="30";
      document.getElementById('chvalidity1').value="60";
      }
      else if(val=='100MB'){
      element1.style.display='block';
      element2.style.display='block';
      element3.style.display='block';
      element4.style.display='block';
      document.getElementById('chprice1').value="30";
      document.getElementById('chvalidity1').value="60";
      }
      else if(val=='200MB'){
      element1.style.display='block';
      element2.style.display='block';
      element3.style.display='block';
      element4.style.display='block';
      document.getElementById('chprice1').value="30";
      document.getElementById('chvalidity1').value="60";
      }
      else if(val=='300MB'){
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
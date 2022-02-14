
$(document).ready(function(){
    $("select#cols").change(function(){
        var colName = $(this).children("option:selected").val();
        var cond=document.getElementById("cond");
        var seardata=document.getElementById("seardata");
        var searfildata=document.getElementById("searfildata");
        var searnofildata=document.getElementById("searnofildata");
        var seardate=document.getElementById("seardate");
        var condDate=document.getElementById("condDate");
        var ip1= document.getElementById("ip1");
        var ip2= document.getElementById("ip2");
        var ip3= document.getElementById("ip3");
        var inpFi1= document.getElementById("testinp");
        var inpFi2= document.getElementById("testdateinp1");
        var inpFi3= document.getElementById("testdateinp2");
    if (colName=="username"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        condDate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        inpFi2.style.display="none";
        inpFi3.style.display="none";
        cond.value="any";
    }
    else if (colName=="auth"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        condDate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        inpFi2.style.display="none";
        inpFi3.style.display="none";
        cond.value="any";
    }
    else if (colName=="password"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        condDate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        inpFi2.style.display="none";
        inpFi3.style.display="none";
        cond.value="any";
    }
    else if (colName=="date"){
        condDate.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        cond.style.display="none";
        ip1.style.display="none";
        ip2.style.display="block";
        ip3.style.display="none";
        inpFi1.style.display="none";
        inpFi2.style.display="block";
        inpFi3.style.display="none";
        document.getElementById('date1').innerHTML="Select Date";
    }
    });
});

$(document).ready(function(){
    $("select#cond").change(function(){
        var condName = $(this).children("option:selected").val();
        var cond=document.getElementById("cond");
        var condDate=document.getElementById("condDate");
        var seardata=document.getElementById("seardata");
        var searfildata=document.getElementById("searfildata");
        var searnofildata=document.getElementById("searnofildata");
        var seardate=document.getElementById("seardate");
        var ip1= document.getElementById("ip1");
        var ip2= document.getElementById("ip2");
        var ip3= document.getElementById("ip3");
        var plabel=document.getElementById("date1");
        var inpFi1= document.getElementById("testinp");
        var inpFi2= document.getElementById("testdateinp1");
        var inpFi3= document.getElementById("testdateinp2");
    if (condName==="any"){
        cond.style.display="block";
        seardata.style.display="block";
        seardate.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        condDate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        plabel.innerHTML="Select Date";
        inpFi1.style.display="block";
        inpFi2.style.display="none";
        inpFi3.style.display="none";
    }
    else if (condName=="startwith"){
        cond.style.display="block";
        seardata.style.display="none";
        searfildata.style.display="block";
        searnofildata.style.display="none";
        seardate.style.display="none";
        condDate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        inpFi2.style.display="none";
        inpFi3.style.display="none";
    }
    else if (condName=="endwith"){
        cond.style.display="block";
        seardata.style.display="none";
        searfildata.style.display="block";
        searnofildata.style.display="none";
        seardate.style.display="none";
        condDate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        inpFi2.style.display="none";
        inpFi3.style.display="none";
    }
    else if (condName=="exactly"){
        cond.style.display="block";
        seardata.style.display="none";
        searfildata.style.display="block";
        searnofildata.style.display="none";
        seardate.style.display="none";
        condDate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        inpFi2.style.display="none";
        inpFi3.style.display="none";
    }
    else if (condName=="notlike"){
        condDate.style.display="none";
        seardata.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="block";
        seardate.style.display="none";
        cond.style.display="block";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        inpFi2.style.display="none";
        inpFi3.style.display="none";
    }
    });
});

$(document).ready(function(){
    $("select#condDate").change(function(){
        var condDateName = $(this).children("option:selected").val();
        var cond=document.getElementById("cond");
        var condDate=document.getElementById("condDate");
        var seardata=document.getElementById("seardata");
        var searfildata=document.getElementById("searfildata");
        var searnofildata=document.getElementById("searnofildata");
        var seardate=document.getElementById("seardate");
        var inpFi1= document.getElementById("testinp");
        var inpFi2= document.getElementById("testdateinp1");
        var inpFi3= document.getElementById("testdateinp2");
    if (condDateName==="equal"){
        cond.style.display="none";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        condDate.style.display="block";
        ip1.style.display="none";
        ip2.style.display="block";
        ip3.style.display="none";
        inpFi1.style.display="none";
        inpFi2.style.display="block";
        inpFi3.style.display="none";
        document.getElementById('date1').innerHTML="Select Date";
        inpFi2.value='';
        inpFi3.value='';
    }
    else if (condDateName=="lessequal"){
        cond.style.display="none";
        seardata.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="block";
        condDate.style.display="block";
        ip1.style.display="none";
        ip2.style.display="none";
        ip3.style.display="block";
        inpFi1.style.display="none";
        inpFi2.style.display="none";
        inpFi3.style.display="block";
        document.getElementById('date2').innerHTML="Select Date";
        inpFi2.value='';
        inpFi3.value='';
    }
    else if (condDateName=="gtequal"){
        cond.style.display="none";
        seardata.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="block";
        condDate.style.display="block";
        ip1.style.display="none";
        ip2.style.display="block";
        ip3.style.display="none";
        inpFi1.style.display="none";
        inpFi2.style.display="block";
        inpFi3.style.display="none";
        document.getElementById('date1').innerHTML="Select Date";
        inpFi2.value='';
        inpFi3.value='';
    }
    else if (condDateName=="notequal"){
        cond.style.display="none";
        seardata.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="block";
        condDate.style.display="block";
        ip1.style.display="none";
        ip2.style.display="block";
        ip3.style.display="none";
        inpFi1.style.display="none";
        inpFi2.style.display="block";
        inpFi3.style.display="none";
        document.getElementById('date1').innerHTML="Select Date";
        inpFi2.value='';
        inpFi3.value='';
    }
    else if (condDateName=="between"){
        condDate.style.display="block";
        seardata.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="block";
        cond.style.display="none";
        ip1.style.display="none";
        ip2.style.display="block";
        ip3.style.display="block";
        inpFi1.style.display="none";
        inpFi2.style.display="block";
        inpFi3.style.display="block";
        document.getElementById('date1').innerHTML="Start Date";
        document.getElementById('date2').innerHTML="End Date";
        inpFi2.value='';
        inpFi3.value='';
    }
    else if (condDateName=="thisweek"){
        cond.style.display="none";
        seardata.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="block";
        condDate.style.display="block";
        ip1.style.display="none";
        ip2.style.display="block";
        ip3.style.display="block";
        document.getElementById('date1').innerHTML="Start Date";
        document.getElementById('date2').innerHTML="End Date";
        inpFi1.style.display="none";
        inpFi2.style.display="block";
        inpFi3.style.display="block";
 var currentDate = new Date();
    var firstday = new Date(currentDate.setDate(currentDate.getDate()+1 - currentDate.getDay())).toUTCString();
    var lastday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 7)).toUTCString();
    var firstdate = new Date(firstday).toLocaleDateString('en-IN',{undefined,year: "numeric",month: "2-digit",day: "2-digit",}).split( '/' ).reverse( ).join( '-' );
    var lastdate = new Date(lastday).toLocaleDateString('en-IN',{undefined,year: "numeric",month: "2-digit",day: "2-digit",}).split( '/' ).reverse( ).join( '-' );
                    inpFi2.value=firstdate;
                    inpFi3.value=lastdate;
    }
    });
});






    function colVal(val){
    var colname = document.getElementById("cols").value; 
    return colname;
    }
    function condVal(val){
    var condition = document.getElementById("cond").value; 
    return condition;
    }
    function condDateVal(val){
    var conditionDate = document.getElementById("condDate").value; 
    return conditionDate;
    }
    function dataFetch(){
    var colval=colVal();
    var condval=condVal();
    var condDval=condDateVal();
    var i;
                    if(colval=="username" && condval=="any"){
                       var i=0;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="username" && condval=="startwith"){
                       var i=0;
                       var regex='^';
                    var getData=document.getElementById("testinp").value;          
                    }
                    else if(colval=="username" && condval=="endwith"){
                       var i=0;
                       var regex='$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="username" && condval=="exactly"){
                       var i=0;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="username" && condval=="notlike"){
                    var i=0;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="auth" && condval=="any"){
                       var i=1;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="auth" && condval=="startwith"){
                       var i=1;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="auth" && condval=="endwith"){
                       var i=1;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="auth" && condval=="exactly"){
                       var i=1;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="auth" && condval=="notlike"){
                    var i=1;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="password" && condval=="any"){
                       var i=2;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="password" && condval=="startwith"){
                       var i=2;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="password" && condval=="endwith"){
                       var i=2;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="password" && condval=="exactly"){
                       var i=2;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="password" && condval=="notlike"){
                    var i=2;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="date" && condDval=="equal"){
                       var getData=document.getElementById("testdateinp1").value;
                       var i=3;
                    }
                    else if(colval=="date" && condDval=="lessequal"){
                       var getData=document.getElementById("testdateinp1").value;
                       var i=3;
                    }
                    else if(colval=="date" && condDval=="gtequal"){
                       var getData=document.getElementById("testdateinp2").value;
                       var i=3;
                    }
                    else if(colval=="date" && condDval=="notequal"){
                       var getData=document.getElementById("testdateinp2").value;
                       var i=3;
                    }
                    else if(colval=="date" && condDval=="between"){
                       var getData=document.getElementById("testinp").value;
                       var i=3;
                    }
                    else if(colval=="date" && condDval=="thisweek"){
                     var currentDate = new Date();
    var firstday = new Date(currentDate.setDate(currentDate.getDate()+1 - currentDate.getDay())).toUTCString();
    var lastday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 7)).toUTCString();
    var firstdate = new Date(firstday).toLocaleDateString('en-IN',{undefined,year: "numeric",month: "2-digit",day: "2-digit",}).split( '/' ).reverse( ).join( '-' );
    var lastdate = new Date(lastday).toLocaleDateString('en-IN',{undefined,year: "numeric",month: "2-digit",day: "2-digit",}).split( '/' ).reverse( ).join( '-' );
    document.getElementById("testdateinp1").value=firstdate;
    document.getElementById("testdateinp2").value=lastdate;
    var i=3;
    }
                    return [getData, condval, colval,i,condDval];
        }





        
var min_Date, max_Date;
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        dataFetch()
        var dVal = dataFetch()[3];
            var condD = dataFetch()[4];
    if(condD=="thisweek"){
    var currentDate = new Date();
    var firstday = new Date(currentDate.setDate(currentDate.getDate()+1 - currentDate.getDay())).toUTCString();
    var lastday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 7)).toUTCString();
    var firstdate = new Date(firstday).toLocaleDateString('en-IN',{undefined,year: "numeric",month: "2-digit",day: "2-digit",}).split( '/' ).reverse( ).join( '-' );
    var lastdate = new Date(lastday).toLocaleDateString('en-IN',{undefined,year: "numeric",month: "2-digit",day: "2-digit",}).split( '/' ).reverse( ).join( '-' );
    document.getElementById("testdateinp1").value=firstdate;
    document.getElementById("testdateinp2").value=lastdate;
    }
    var min_date = document.getElementById("testdateinp1").value;
      var min = new Date(min_date);
      var max_date = document.getElementById("testdateinp2").value;
      var max = new Date(max_date);

      var startDate = new Date(data[dVal]);
      if (!min_date && !max_date) {
        return true;
      }
      if (!min_date && startDate <= max) {
        return true;
      }
      else if (!max_date && startDate >= min) {
        return true;
      }
      else if (startDate <= max && startDate >= min) {
        return true;
      }
      return false;
    }
  );
    $('#seardate').on('click', function () {
        $('#myTable').DataTable().draw();
    });






    
    function noFilter(){
        $.fn.dataTable.ext.search.push(
    function (settings, data, dataIndex) {
        dataFetch()
        var getnData=dataFetch()[0];
        var coli= dataFetch()[3];
            var notLike = getnData;
            if (notLike == undefined || notLike == '') {
                return true;
            } else {
                var result = !(data[coli].toString().toLowerCase().includes(notLike.toLowerCase()));
            }
            return result;
        }
); 
var table = $('#myTable').DataTable();
        table.draw();
    }





    
    $(document).ready(function () {
        $('#myTable').DataTable({
      "dom": 'Bfrtip',
      "paging": true,
      "searching": true,
      "ordering": true,
      "info": true,
       buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "language": {
    "info": "Total _TOTAL_ records found",
    "infoEmpty": "No records found"
  }
    });
        $('#seardata').on('click', function () {
            dataFetch();
            var getD = dataFetch()[0];
            var cond = dataFetch()[1];
            var col = dataFetch()[2];
            var i = dataFetch()[3];
            $('#myTable').DataTable().column(i).every(function () {
                var column1 = this;
                if (column1.search() !== (dataFetch()[0])) {
                    column1.search(dataFetch()[0]).draw();
                }
            });
        });
        $('#searfildata').on('click', function () {
            dataFetch();
            var getD = dataFetch()[0];
            var cond = dataFetch()[1];
            var col = dataFetch()[2];
            var i = dataFetch()[3];
                $('#myTable').DataTable().column(i).search(getD,true,true,true).draw();
            });
    });





    
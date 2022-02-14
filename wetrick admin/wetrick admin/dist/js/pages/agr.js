






$(document).ready(function(){
    $("select#cols").change(function(){
        var colName = $(this).children("option:selected").val();
        var cond=document.getElementById("cond");
        var seardata=document.getElementById("seardata");
        var searfildata=document.getElementById("searfildata");
        var searnofildata=document.getElementById("searnofildata");
        var seardate=document.getElementById("seardate");
        var ip1= document.getElementById("ip1");
        var ip2= document.getElementById("ip2");
        var ip3= document.getElementById("ip3");
        var inpFi1= document.getElementById("testinp");
    if (colName=="fullname"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="username"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="plan"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="plancost"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="cgst"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="sgst"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="phone"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="igst"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="agr"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="tottax"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="totamt"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    else if (colName=="address"){
        cond.style.display="block";
        seardata.style.display="block";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
        cond.value="any";
    }
    });
});

$(document).ready(function(){
    $("select#cond").change(function(){
        var condName = $(this).children("option:selected").val();
        var cond=document.getElementById("cond");
        var seardata=document.getElementById("seardata");
        var searfildata=document.getElementById("searfildata");
        var searnofildata=document.getElementById("searnofildata");
        var seardate=document.getElementById("seardate");
        var ip1= document.getElementById("ip1");
        var ip2= document.getElementById("ip2");
        var ip3= document.getElementById("ip3");
        var plabel=document.getElementById("date1");
        var inpFi1= document.getElementById("testinp");
    if (condName==="any"){
        cond.style.display="block";
        seardata.style.display="block";
        seardate.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        plabel.innerHTML="Select Date";
        inpFi1.style.display="block";
    }
    else if (condName=="startwith"){
        cond.style.display="block";
        seardata.style.display="none";
        searfildata.style.display="block";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
    }
    else if (condName=="endwith"){
        cond.style.display="block";
        seardata.style.display="none";
        searfildata.style.display="block";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
    }
    else if (condName=="exactly"){
        cond.style.display="block";
        seardata.style.display="none";
        searfildata.style.display="block";
        searnofildata.style.display="none";
        seardate.style.display="none";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
    }
    else if (condName=="notlike"){
        seardata.style.display="none";
        searfildata.style.display="none";
        searnofildata.style.display="block";
        seardate.style.display="none";
        cond.style.display="block";
        ip1.style.display="block";
        ip2.style.display="none";
        ip3.style.display="none";
        inpFi1.style.display="block";
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
    function dataFetch(){
    var colval=colVal();
    var condval=condVal();
    var i;
                    if(colval=="fullname" && condval=="any"){
                       var i=1;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="fullname" && condval=="startwith"){
                       var i=1;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="fullname" && condval=="endwith"){
                       var i=1;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="fullname" && condval=="exactly"){
                       var i=1;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="fullname" && condval=="notlike"){
                    var i=1;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="username" && condval=="any"){
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
                    
                    else if(colval=="plan" && condval=="any"){
                       var i=3;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="plan" && condval=="startwith"){
                       var i=3;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="plan" && condval=="endwith"){
                       var i=3;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="plan" && condval=="exactly"){
                       var i=3;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="plan" && condval=="notlike"){
                    var i=3;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="plancost" && condval=="any"){
                       var i=4;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="plancost" && condval=="startwith"){
                       var i=4;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="plancost" && condval=="endwith"){
                       var i=4;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="plancost" && condval=="exactly"){
                       var i=4;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="plancost" && condval=="notlike"){
                    var i=4;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="igst" && condval=="any"){
                       var i=5;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="igst" && condval=="startwith"){
                       var i=5;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="igst" && condval=="endwith"){
                       var i=5;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="igst" && condval=="exactly"){
                       var i=5;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="igst" && condval=="notlike"){
                    var i=5;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="phone" && condval=="any"){
                       var i=2;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="phone" && condval=="startwith"){
                       var i=2;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="phone" && condval=="endwith"){
                       var i=2;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="phone" && condval=="exactly"){
                       var i=2;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="phone" && condval=="notlike"){
                    var i=2;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="cgst" && condval=="any"){
                       var i=6;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="cgst" && condval=="startwith"){
                       var i=6;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="cgst" && condval=="endwith"){
                       var i=6;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="cgst" && condval=="exactly"){
                       var i=6;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="cgst" && condval=="notlike"){
                    var i=6;
                    var getData=document.getElementById("testinp").value;          
                    }

                    else if(colval=="sgst" && condval=="any"){
                       var i=7;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="sgst" && condval=="startwith"){
                       var i=7;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="sgst" && condval=="endwith"){
                       var i=7;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="sgst" && condval=="exactly"){
                       var i=7;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="sgst" && condval=="notlike"){
                    var i=7;
                    var getData=document.getElementById("testinp").value;          
                    }

                    else if(colval=="agr" && condval=="any"){
                       var i=9;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="agr" && condval=="startwith"){
                       var i=9;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="agr" && condval=="endwith"){
                       var i=9;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="agr" && condval=="exactly"){
                       var i=9;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="agr" && condval=="notlike"){
                    var i=9;
                    var getData=document.getElementById("testinp").value;          
                    }

                    else if(colval=="totamt" && condval=="any"){
                       var i=8;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="totamt" && condval=="startwith"){
                       var i=8;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="totamt" && condval=="endwith"){
                       var i=8;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="totamt" && condval=="exactly"){
                       var i=8;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="totamt" && condval=="notlike"){
                    var i=8;
                    var getData=document.getElementById("testinp").value;          
                    }

                    else if(colval=="tottax" && condval=="any"){
                       var i=10;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="tottax" && condval=="startwith"){
                       var i=10;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="tottax" && condval=="endwith"){
                       var i=10;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="tottax" && condval=="exactly"){
                       var i=10;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="tottax" && condval=="notlike"){
                    var i=10;
                    var getData=document.getElementById("testinp").value;          
                    }

                    else if(colval=="address" && condval=="any"){
                       var i=11;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="address" && condval=="startwith"){
                       var i=11;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="address" && condval=="endwith"){
                       var i=11;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="address" && condval=="exactly"){
                       var i=11;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="address" && condval=="notlike"){
                    var i=11;
                    var getData=document.getElementById("testinp").value;          
                    }

                    return [getData, condval, colval,i];
        }


        







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
        $('#myTable').DataTable().draw();
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


    







    function reload(){
        window.location.reload();
    }


    
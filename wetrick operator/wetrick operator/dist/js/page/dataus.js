
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
    if (colName=="custname"){
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
    
    else if (colName=="username"){
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
    else if (colName=="plan"){
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
    else if (colName=="location"){
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
    else if (colName=="mac"){
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
    else if (colName=="time"){
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
    else if (colName=="portid"){
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
    else if (colName=="upload"){
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
    else if (colName=="download"){
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
                    if(colval=="custname" && condval=="any"){
                       var i=1;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="custname" && condval=="startwith"){
                       var i=1;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="custname" && condval=="endwith"){
                       var i=1;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="custname" && condval=="exactly"){
                       var i=1;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="custname" && condval=="notlike"){
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
                       var i=2;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="plan" && condval=="startwith"){
                       var i=2;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="plan" && condval=="endwith"){
                       var i=2;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="plan" && condval=="exactly"){
                       var i=2;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="plan" && condval=="notlike"){
                    var i=2;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="location" && condval=="any"){
                       var i=3;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="location" && condval=="startwith"){
                       var i=3;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="location" && condval=="endwith"){
                       var i=3;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="location" && condval=="exactly"){
                       var i=3;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="location" && condval=="notlike"){
                    var i=3;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="mac" && condval=="any"){
                       var i=5;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="mac" && condval=="startwith"){
                       var i=5;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="mac" && condval=="endwith"){
                       var i=5;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="mac" && condval=="exactly"){
                       var i=5;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="mac" && condval=="notlike"){
                    var i=5;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="time" && condval=="any"){
                       var i=8;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="time" && condval=="startwith"){
                       var i=8;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="time" && condval=="endwith"){
                       var i=8;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="time" && condval=="exactly"){
                       var i=8;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="time" && condval=="notlike"){
                    var i=8;
                    var getData=document.getElementById("testinp").value;          
                    }
                    
                    else if(colval=="portid" && condval=="any"){
                       var i=4;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="portid" && condval=="startwith"){
                       var i=4;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="portid" && condval=="endwith"){
                       var i=4;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="portid" && condval=="exactly"){
                       var i=4;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="portid" && condval=="notlike"){
                    var i=4;
                    var getData=document.getElementById("testinp").value;          
                    }

                    else if(colval=="upload" && condval=="any"){
                       var i=6;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="upload" && condval=="startwith"){
                       var i=6;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="upload" && condval=="endwith"){
                       var i=6;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="upload" && condval=="exactly"){
                       var i=6;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="upload" && condval=="notlike"){
                    var i=6;
                    var getData=document.getElementById("testinp").value;          
                    }

                    else if(colval=="download" && condval=="any"){
                       var i=7;
                       var getData=document.getElementById("testinp").value;
                    }
                    else if(colval=="download" && condval=="startwith"){
                       var i=7;
                       var regex='^';
                    var getData=regex+(document.getElementById("testinp").value);          
                    }
                    else if(colval=="download" && condval=="endwith"){
                       var i=7;
                       var regex='*$';
                    var getData=(document.getElementById("testinp").value)+regex;          
                    }
                    else if(colval=="download" && condval=="exactly"){
                       var i=7;
                       var sregex='^';
                       var eregex='*$';
                    var getData=sregex+(document.getElementById("testinp").value)+eregex;          
                    }
                    else if(colval=="download" && condval=="notlike"){
                    var i=7;
                    var getData=document.getElementById("testinp").value;          
                    }

                    return [getData, condval, colval,i,condDval];
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
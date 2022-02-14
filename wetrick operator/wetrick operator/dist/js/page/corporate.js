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
                Toastify({
                    text: "Sorry, allowed extensions are: " + _validFileExtensions.join(", "),
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                oInput.value = "";
                return false;
            }
        }
    }
    return true;
}



function copyAll() {
    var cb1 = document.getElementById('copyall');
    var add = document.getElementById('paddress');
    var iadd = document.getElementById('iaddress');
    var ppin = document.getElementById('ppincode');
    var ipin = document.getElementById('ipincode');
    var dis = document.getElementById('district');
    var idis = document.getElementById('idistrict');
    var sta = document.getElementById('state');
    var ista = document.getElementById('istate');
    var coun = document.getElementById('country');
    var icoun = document.getElementById('icountry');
  
    var badd = document.getElementById('baddress');
    var bpin = document.getElementById('bpincode');
    var bdis = document.getElementById('bdistrict');
    var bsta = document.getElementById('bstate');
    var bcoun = document.getElementById('bcountry');
  
    var apadd = document.getElementById('apaddress');
    var appin = document.getElementById('appincode');
    var apdis = document.getElementById('apdistrict');
    var apsta = document.getElementById('apstate');
    var apcoun = document.getElementById('apcountry');
    if (cb1.checked) {
      iadd.value = add.value;
      ipin.value = ppin.value;
      idis.value = dis.value;
      ista.value = sta.value;
      icoun.value = coun.value;
  
      badd.value = add.value;
      bpin.value = ppin.value;
      bdis.value = dis.value;
      bsta.value = sta.value;
      bcoun.value = coun.value;
  
      apadd.value = add.value;
      appin.value = ppin.value;
      apdis.value = dis.value;
      apsta.value = sta.value;
      apcoun.value = coun.value;
  
    } else {
      iadd.value = '';
      ipin.value = '';
      idis.value = '';
      ista.value = '';
      icoun.value = '';
  
      badd.value = '';
      bpin.value = '';
      bdis.value = '';
      bsta.value = '';
      bcoun.value = '';
  
      apadd.value = '';
      appin.value = '';
      apdis.value = '';
      apsta.value = '';
      apcoun.value = '';
  
    }
  }


  function copyCb() {
    var cb2 = document.getElementById('copycb');
    var add = document.getElementById('paddress');
    var badd = document.getElementById('baddress');
    var ppin = document.getElementById('ppincode');
    var bpin = document.getElementById('bpincode');
    var dis = document.getElementById('district');
    var bdis = document.getElementById('bdistrict');
    var sta = document.getElementById('state');
    var bsta = document.getElementById('bstate');
    var coun = document.getElementById('country');
    var bcoun = document.getElementById('bcountry');
    if (cb2.checked) {
      badd.value = add.value;
      bpin.value = ppin.value;
      bdis.value = dis.value;
      bsta.value = sta.value;
      bcoun.value = coun.value;
  
    } else {
      badd.value = '';
      bpin.value = '';
      bdis.value = '';
      bsta.value = '';
      bcoun.value = '';
  
    }
  }

  function copyI() {
    var cb3 = document.getElementById('copyi');
    var badd = document.getElementById('baddress');
    var iadd = document.getElementById('iaddress');
    var bpin = document.getElementById('bpincode');
    var ipin = document.getElementById('ipincode');
    var bdis = document.getElementById('bdistrict');
    var idis = document.getElementById('idistrict');
    var bsta = document.getElementById('bstate');
    var ista = document.getElementById('istate');
    var bcoun = document.getElementById('bcountry');
    var icoun = document.getElementById('icountry');
    if (cb3.checked) {
      iadd.value = badd.value;
      ipin.value = bpin.value;
      idis.value = bdis.value;
      ista.value = bsta.value;
      icoun.value = bcoun.value;
  
    } else {
      iadd.value = '';
      ipin.value = '';
      idis.value = '';
      ista.value = '';
      icoun.value = '';
  
    }
  }


  function copyAp() {
    var cb4 = document.getElementById('copyap');
    var apadd = document.getElementById('apaddress');
    var iadd = document.getElementById('iaddress');
    var appin = document.getElementById('appincode');
    var ipin = document.getElementById('ipincode');
    var apdis = document.getElementById('apdistrict');
    var idis = document.getElementById('idistrict');
    var apsta = document.getElementById('apstate');
    var ista = document.getElementById('istate');
    var apcoun = document.getElementById('apcountry');
    var icoun = document.getElementById('icountry');
    if (cb4.checked) {
      apadd.value = iadd.value;
      appin.value= ipin.value;
      apdis.value = idis.value;
      apsta.value = ista.value;
      apcoun.value = icoun.value;
  
    } else {
      apadd.value = '';
      appin.value = '';
      apdis.value = '';
      apsta.value = '';
      apcoun.value = '';
  
    }
  }

  function inputData(val){
    var element=document.getElementById('docno1');
    if(val=='GSTIN'){
      element.style.display='block';
      document.getElementById('docno2').innerHTML='GSTIN No.';
      document.getElementById('docno').placeholder="Enter GSTIN No.";
      }
      else if(val=='TIN No'){
      element.style.display='block';
      document.getElementById('docno2').innerHTML='TIN No.';
      document.getElementById('docno').placeholder="Enter TIN No.";
      }
      else if(val=='CIN No'){
      element.style.display='block';
      document.getElementById('docno2').innerHTML='CIN No.';
      document.getElementById('docno').placeholder="Enter CIN No.";
      }
      else if(val=='Registration No'){
      element.style.display='block';
      document.getElementById('docno2').innerHTML='Registration No.';
      document.getElementById('docno').placeholder="Enter Registration No.";
      }
   
    else{  
      element.style.display='none';
   }
   }

   function Tab1(){
    let noa = document.forms["corpcust"]["noa"].value;
    let comptype = document.forms["corpcust"]["comptype"].value;
    let orgid = document.forms["corpcust"]["orgid"].value;
    let docno = document.forms["corpcust"]["docno"].value;
    let cemail = document.forms["corpcust"]["cemail"].value;
    let email = document.forms["corpcust"]["email"].value;
    let fname = document.forms["corpcust"]["fullname"].value;
    let dob = document.forms["corpcust"]["dob"].value;
    let mob = document.forms["corpcust"]["mobileno"].value;
    let cphoto = document.forms["corpcust"]["cuploads"].value;

    if (noa == "") {
        Toastify({
        text: "Name of Organisation must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }

    else if (comptype == "") {
     Toastify({
        text: "Please Select Company Type",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    
    else if (orgid == "") {
     Toastify({
        text: "Please Select Organization Id",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (docno == "") {
    Toastify({
        text: "Document No. must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }

     else if (cemail == "") {
    Toastify({
        text: "Company Email must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    
    else if (fname == "") {
     Toastify({
        text: "Name must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (email == "") {
    Toastify({
        text: "Authorized Email must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (dob == "") {
        Toastify({
        text: "Date of Birth must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (mob.length != 10 || mob=="") {
    Toastify({
        text: "Enter Correct Mobile No",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (cphoto == "") {
    Toastify({
        text: "Please Attach Customer Photo",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else{
    var cur = $('.tab-pane').index($('.tab-pane.active'));
    var curt = $('.list-group-item').index($('.list-group-item-action.active'));
    if (cur != $('.tab-pane').length - 1 && curt != $('.list-group-item').length - 1) {
    $('.tab-pane').removeClass('show active');
    $('.list-group-item-action').removeClass('active');
    $('.tab-pane').eq(cur + 1).addClass('fade show active');
    $('.list-group-item-action').eq(curt + 1).addClass('active');
    $("#address-list").addClass('active');
    $("#account1-list").removeClass('active');
    $("#address1-list").addClass('active');
    $("#plan1-list").removeClass('active');
    $("#network1-list").removeClass('active');
    $("#upload1-list").removeClass('active');
    window.scrollTo(0,0);
    }
    }
}

function Tab2(){
    let padd = document.forms["corpcust"]["paddress"].value;
    let ppin = document.forms["corpcust"]["ppincode"].value;
    let badd = document.forms["corpcust"]["baddress"].value;
    let bpin = document.forms["corpcust"]["bpincode"].value;
    let iadd = document.forms["corpcust"]["iaddress"].value;
    let ipin = document.forms["corpcust"]["ipincode"].value;
    let apadd = document.forms["corpcust"]["apaddress"].value;
    let appin = document.forms["corpcust"]["appincode"].value;
    let bpname = document.forms["corpcust"]["bpname"].value;
    let bpemail = document.forms["corpcust"]["bpemail"].value;
    let bpcont = document.forms["corpcust"]["bpcontact"].value;

    if (padd == "") {
    Toastify({
        text: "Please Enter Permanent Customer Address",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (ppin == "" || ppin.length!=6) {
    Toastify({
        text: "Enter Correct Permanent Address Pincode",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (badd == "") {
    Toastify({
        text: "Please Enter Customer Company Billing Address",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (bpin == "" || bpin.length!=6) {
    Toastify({
        text: "Enter Correct Compnay Billing Pincode",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (iadd == "") {
    Toastify({
        text: "Please Enter Customer Installation Address",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (ipin == "" || ipin.length!=6) {
    Toastify({
        text: "Enter Correct Installation Pincode",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (apadd == "") {
    Toastify({
        text: "Please Enter Authorized Person Address",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (appin == "" || appin.length!=6) {
    Toastify({
        text: "Enter Correct Authorized Person Pincode",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (bpname == "") {
    Toastify({
        text: "Please Enter Billing Person Name",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (bpemail == "") {
    Toastify({
        text: "Enter Correct Billing Person Email",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (bpcont == "" || bpcont.length!=10) {
    Toastify({
        text: "Enter Correct Billing Person Mobile No.",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else{
    var cur = $('.tab-pane').index($('.tab-pane.active'));
    var curt = $('.list-group-item').index($('.list-group-item-action.active'));
    if (cur != $('.tab-pane').length - 1 && curt != $('.list-group-item').length - 1) {
    $('.tab-pane').removeClass('show active');
    $('.list-group-item-action').removeClass('active');
    $('.tab-pane').eq(cur + 1).addClass('fade show active');
    $('.list-group-item-action').eq(curt + 1).addClass('active');
    $("#network-list").addClass('active');
    $("#account1-list").removeClass('active');
    $("#address1-list").removeClass('active');
    $("#plan1-list").removeClass('active');
    $("#network1-list").addClass('active');
    $("#upload1-list").removeClass('active');
    }
    }
}

function Tab3(){
    let user = document.forms["corpcust"]["username"].value;

    if (user == "") {
    Toastify({
    text: "Enter Username",
    close:true,
    gravity:"top",
    position: "center",
    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
    }).showToast();
    return false;
    }
    else{
                var cur = $('.tab-pane').index($('.tab-pane.active'));
                var curt = $('.list-group-item').index($('.list-group-item-action.active'));
                if (cur != $('.tab-pane').length - 1 && curt != $('.list-group-item').length - 1) {
                $('.tab-pane').removeClass('show active');
                $('.list-group-item-action').removeClass('active');
                $('.tab-pane').eq(cur + 1).addClass('fade show active');
                $('.list-group-item-action').eq(curt + 1).addClass('active');
                $("#plan-list").addClass('active');
                $("#account1-list").removeClass('active');
                $("#address1-list").removeClass('active');
                $("#plan1-list").addClass('active');
                $("#network1-list").removeClass('active');
                $("#upload1-list").removeClass('active');
                 }
    }
    }

    function Tab4(){
        var cur = $('.tab-pane').index($('.tab-pane.active'));
        var curt = $('.list-group-item').index($('.list-group-item-action.active'));
        if (cur != $('.tab-pane').length - 1 && curt != $('.list-group-item').length - 1) {
        $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(cur + 1).addClass('fade show active');
        $('.list-group-item-action').eq(curt + 1).addClass('active');
        $("#upload-list").addClass('active');
        $("#account1-list").removeClass('active');
        $("#address1-list").removeClass('active');
        $("#plan1-list").removeClass('active');
        $("#network1-list").removeClass('active');
        $("#upload1-list").addClass('active');
         }
}

function Tab2Prev(){
    var cur = $('.tab-pane').index($('.tab-pane.active'));
    var curt= $('.list-group-item').index($('.list-group-item.active'));
    console.log(cur,curt);
    if (cur!=0 && curt!=0) {
        $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(cur-1).addClass('fade show active');
        $('.list-group-item').eq(curt-1).addClass('active');
        $("#address-list").removeClass('active');
        $("#account1-list").addClass('active');
        $("#address1-list").removeClass('active');
        $("#plan1-list").removeClass('active');
        $("#network1-list").removeClass('active');
        $("#upload1-list").removeClass('active');
       
    }
    }


    function Tab3Prev(){
        var cur = $('.tab-pane').index($('.tab-pane.active'));
        var curt= $('.list-group-item').index($('.list-group-item.active'));
        if (cur!=0 && curt!=0) {
            $('.tab-pane').removeClass('show active');
            $('.list-group-item-action').removeClass('active');
            $('.tab-pane').eq(cur-1).addClass('fade show active');
            $('.list-group-item').eq(curt-1).addClass('active');
            $("#account1-list").removeClass('active');
            $("#address1-list").addClass('active');
            $("#plan1-list").removeClass('active');
            $("#network1-list").removeClass('active');
            $("#upload1-list").removeClass('active');
           
        }
        }


        function Tab4Prev(){
            var cur = $('.tab-pane').index($('.tab-pane.active'));
            var curt= $('.list-group-item').index($('.list-group-item.active'));
            if (cur!=0 && curt!=0) {
                $('.tab-pane').removeClass('show active');
                $('.list-group-item-action').removeClass('active');
                $('.tab-pane').eq(cur-1).addClass('fade show active');
                $('.list-group-item').eq(curt-1).addClass('active');
                $("#account1-list").removeClass('active');
                $("#address1-list").removeClass('active');
                $("#plan1-list").removeClass('active');
                $("#network1-list").addClass('active');
                $("#upload1-list").removeClass('active');
               
            }
            }


            function Tab5Prev(){
                var cur = $('.tab-pane').index($('.tab-pane.active'));
                var curt= $('.list-group-item').index($('.list-group-item.active'));
                if (cur!=0 && curt!=0) {
                    $('.tab-pane').removeClass('show active');
                    $('.list-group-item-action').removeClass('active');
                    $('.tab-pane').eq(cur-1).addClass('fade show active');
                    $('.list-group-item').eq(curt-1).addClass('active');
                    $("#account1-list").removeClass('active');
                    $("#address1-list").removeClass('active');
                    $("#plan1-list").addClass('active');
                    $("#network1-list").removeClass('active');
                    $("#upload1-list").removeClass('active');
                   
                }
                }


                validateForm=()=>{
                    let noa = document.forms["corpcust"]["noa"].value;
                    let comptype = document.forms["corpcust"]["comptype"].value;
                    let orgid = document.forms["corpcust"]["orgid"].value;
                    let docno = document.forms["corpcust"]["docno"].value;
                    let cemail = document.forms["corpcust"]["cemail"].value;
                    let email = document.forms["corpcust"]["email"].value;
                    let fname = document.forms["corpcust"]["fullname"].value;
                    let dob = document.forms["corpcust"]["dob"].value;
                    let mob = document.forms["corpcust"]["mobileno"].value;
                    let cphoto = document.forms["corpcust"]["cuploads"].value;
    
                    let padd = document.forms["corpcust"]["paddress"].value;
                    let ppin = document.forms["corpcust"]["ppincode"].value;
                    let badd = document.forms["corpcust"]["baddress"].value;
                    let bpin = document.forms["corpcust"]["bpincode"].value;
                    let iadd = document.forms["corpcust"]["iaddress"].value;
                    let ipin = document.forms["corpcust"]["ipincode"].value;
                    let apadd = document.forms["corpcust"]["apaddress"].value;
                    let appin = document.forms["corpcust"]["appincode"].value;
                    let bpname = document.forms["corpcust"]["bpname"].value;
                    let bpemail = document.forms["corpcust"]["bpemail"].value;
                    let bpcont = document.forms["corpcust"]["bpcontact"].value;
    
                    let user = document.forms["corpcust"]["username"].value;
                    
                     if (noa == "") {
                        Toastify({
                        text: "Name of Organisation must be filled out",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
    
                    else if (comptype == "") {
                     Toastify({
                        text: "Please Select Company Type",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
                    
                    else if (orgid == "") {
                     Toastify({
                        text: "Please Select Organization Id",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
                    else if (docno == "") {
                    Toastify({
                        text: "Document No. must be filled out",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
    
                     else if (cemail == "") {
                    Toastify({
                        text: "Company Email must be filled out",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
                    
                    else if (fname == "") {
                     Toastify({
                        text: "Name must be filled out",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
                    else if (email == "") {
                    Toastify({
                        text: "Authorized Email must be filled out",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
                    else if (dob == "") {
                        Toastify({
                        text: "Date of Birth must be filled out",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
                    else if (mob.length != 10 || mob=="") {
                    Toastify({
                        text: "Enter Correct Mobile No",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
                    else if (cphoto == "") {
                    Toastify({
                        text: "Please Attach Customer Photo",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(0).addClass('fade show active');
                        $('.list-group-item').eq(0).addClass('active');
                        $("#account1-list").addClass('active');
                     return false;
                     }
    
                    else if (padd == "") {
                    Toastify({
                        text: "Please Enter Permanent Customer Address",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (ppin == "" || ppin.length!=6) {
                    Toastify({
                        text: "Enter Correct Permanent Address Pincode",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (badd == "") {
                    Toastify({
                        text: "Please Enter Customer Company Billing Address",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (bpin == "" || bpin.length!=6) {
                    Toastify({
                        text: "Enter Correct Compnay Billing Pincode",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (iadd == "") {
                    Toastify({
                        text: "Please Enter Customer Installation Address",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (ipin == "" || ipin.length!=6) {
                    Toastify({
                        text: "Enter Correct Installation Pincode",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (apadd == "") {
                    Toastify({
                        text: "Please Enter Authorized Person Address",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (appin == "" || appin.length!=6) {
                    Toastify({
                        text: "Enter Correct Authorized Person Pincode",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (bpname == "") {
                    Toastify({
                        text: "Please Enter Billing Person Name",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (bpemail == "") {
                    Toastify({
                        text: "Enter Correct Billing Person Email",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (bpcont == "" || bpcont.length!=10) {
                    Toastify({
                        text: "Enter Correct Billing Person Mobile No.",
                        close:true,
                        gravity:"top",
                        position: "center",
                        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                        }).showToast();
                        $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(1).addClass('fade show active');
                        $('.list-group-item').eq(1).addClass('active');
                        $("#address1-list").addClass('active');
                     return false;
                     }
                    else if (user == "") {
                    Toastify({
                    text: "Please Enter Username",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                    $('.tab-pane').removeClass('show active');
                        $('.list-group-item-action').removeClass('active');
                        $('.tab-pane').eq(2).addClass('fade show active');
                        $('.list-group-item').eq(2).addClass('active');
                        $("#network1-list").addClass('active');
                     return false;
                     }
            }


            $(document).ready(function () {
                if ($("#account-list").hasClass('active')) {
                    $("#account1-list").addClass('active');
                }
                $("#account-list").click(function () {
                    $("#account1-list").addClass('active');
                    $("#address1-list").removeClass('active');
                    $("#plan1-list").removeClass('active');
                    $("#network1-list").removeClass('active');
                    $("#upload1-list").removeClass('active');
                });
    
                $("#account1-list").click(function () {
                    $("#account-list").addClass('active');
                    $("#address-list").removeClass('active');
                    $("#plan-list").removeClass('active');
                    $("#network-list").removeClass('active');
                    $("#upload-list").removeClass('active');
                    window.scrollTo(0, 0);
                });
    
                $("#address-list").click(function () {
                    $("#address1-list").addClass('active');
                    $("#plan1-list").removeClass('active');
                    $("#network1-list").removeClass('active');
                    $("#upload1-list").removeClass('active');
                    $("#account1-list").removeClass('active');
                });
    
                $("#address1-list").click(function () {
                    $("#address-list").addClass('active');
                    $("#plan-list").removeClass('active');
                    $("#network-list").removeClass('active');
                    $("#upload-list").removeClass('active');
                    $("#account-list").removeClass('active');
                    window.scrollTo(0, 0);
                });
    
                $("#plan-list").click(function () {
                    $("#plan1-list").addClass('active');
                    $("#network1-list").removeClass('active');
                    $("#upload1-list").removeClass('active');
                    $("#account1-list").removeClass('active');
                    $("#address1-list").removeClass('active');
                });
    
                $("#plan1-list").click(function () {
                    $("#plan-list").addClass('active');
                    $("#network-list").removeClass('active');
                    $("#upload-list").removeClass('active');
                    $("#account-list").removeClass('active');
                    $("#address-list").removeClass('active');
                    window.scrollTo(0, 0);
                });
    
                $("#network-list").click(function () {
                    $("#network1-list").addClass('active');
                    $("#upload1-list").removeClass('active');
                    $("#account1-list").removeClass('active');
                    $("#address1-list").removeClass('active');
                    $("#plan1-list").removeClass('active');
                });
    
                $("#network1-list").click(function () {
                    $("#network-list").addClass('active');
                    $("#upload-list").removeClass('active');
                    $("#account-list").removeClass('active');
                    $("#address-list").removeClass('active');
                    $("#plan-list").removeClass('active');
                    window.scrollTo(0, 0);
                });
    
                $("#upload-list").click(function () {
                    $("#upload1-list").addClass('active');
                    $("#account1-list").removeClass('active');
                    $("#address1-list").removeClass('active');
                    $("#plan1-list").removeClass('active');
                    $("#network1-list").removeClass('active');
                });
    
                $("#upload1-list").click(function () {
                    $("#upload-list").addClass('active');
                    $("#account-list").removeClass('active');
                    $("#address-list").removeClass('active');
                    $("#plan-list").removeClass('active');
                    $("#network-list").removeClass('active');
                    window.scrollTo(0, 0);
                });
            });
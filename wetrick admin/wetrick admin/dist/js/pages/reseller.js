function inputData(val){
    var element=document.getElementById('docno1');
    if(val=='Aadhar Card'){
      element.style.display='block';
      document.getElementById('docno2').innerHTML='Aadhar Card No.';
      document.getElementById('docno').placeholder="Enter Aadhar Card No.";
      }
      else if(val=='PAN Card'){
      element.style.display='block';
      document.getElementById('docno2').innerHTML='PAN Card No.';
      document.getElementById('docno').placeholder="Enter PAN Card.";
      }
      else if(val=='Bank Passbook'){
      element.style.display='block';
      document.getElementById('docno2').innerHTML='Bank Passbook';
      document.getElementById('docno').placeholder="Enter Bank Passbook.";
      }
      else if(val=='Cancel Cheque'){
      element.style.display='block';
      document.getElementById('docno2').innerHTML='Cancel Cheque';
      document.getElementById('docno').placeholder="Enter Cancel Cheque.";
      }
      else if(val=='Other'){
        element.style.display='block';
        document.getElementById('docno2').innerHTML='Other';
        document.getElementById('docno').placeholder="Enter Document ID No.";
        }
   
    else{  
      element.style.display='none';
   }
   }



    function Tab1(){
                let fname = document.forms["reseller"]["fullname"].value;
                let dob = document.forms["reseller"]["dob"].value;
                let mob = document.forms["reseller"]["mobileno"].value;
                let cphoto = document.forms["reseller"]["cuploads"].value;
                if (fname == "") {
                    Toastify({
                    text: "Reseller Name must be filled out",
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
                    text: "Enter Correct Mobile No.",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                 else if (cphoto == "") {
                 Toastify({
                    text: "Please Attach Reseller Photo",
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
                $("#network1-list").removeClass('active');
                $("#upload1-list").removeClass('active');
            }
                 }
    }








function Tab2(){
                let add = document.forms["reseller"]["paddress"].value;
                let pin = document.forms["reseller"]["pincode"].value;
                let iadd = document.forms["reseller"]["iaddress"].value;
                let ipin = document.forms["reseller"]["ipincode"].value;
                if (add == "") {
                 Toastify({
                    text: "Please Enter Reseller Address",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                else if (pin == "" || pin.length!=6) {
                 Toastify({
                    text: "Enter Correct Pincode",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                else if (iadd == "") {
                 Toastify({
                    text: "Please Enter Reseller Office Address",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                else if (ipin == "" || ipin.length!=6) {
                 Toastify({
                    text: "Please Enter Reseller Office Pincode",
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
                $("#network1-list").addClass('active');
                $("#upload1-list").removeClass('active');
                 }
}
}








    function Tab3(){
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
        $("#network1-list").removeClass('active');
        $("#upload1-list").removeClass('active');
       
    }
    }








    function Tab3Prev(){
    var cur = $('.tab-pane').index($('.tab-pane.active'));
    var curt= $('.list-group-item').index($('.list-group-item.active'));
    console.log(cur,curt);
    if (cur!=0 && curt!=0) {
        $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(cur-1).addClass('fade show active');
        $('.list-group-item').eq(curt-1).addClass('active');
        $("#account1-list").removeClass('active');
        $("#address1-list").addClass('active');
        $("#network1-list").removeClass('active');
        $("#upload1-list").removeClass('active');
       
    }
    }








    function Tab4Prev(){
    var cur = $('.tab-pane').index($('.tab-pane.active'));
    var curt= $('.list-group-item').index($('.list-group-item.active'));
    console.log(cur,curt);
    if (cur!=0 && curt!=0) {
        $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(cur-1).addClass('fade show active');
        $('.list-group-item').eq(curt-1).addClass('active');
        $("#account1-list").removeClass('active');
        $("#address1-list").removeClass('active');
        $("#network1-list").addClass('active');
        $("#upload1-list").removeClass('active');
       
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







            validateForm=()=>{
                let fname = document.forms["reseller"]["fullname"].value;
                let dob = document.forms["reseller"]["dob"].value;
                let mob = document.forms["reseller"]["mobileno"].value;
                let cphoto = document.forms["reseller"]["cuploads"].value;
                let add = document.forms["reseller"]["paddress"].value;
                let pin = document.forms["reseller"]["pincode"].value;
                let iadd = document.forms["reseller"]["iaddress"].value;
                let ipin = document.forms["reseller"]["ipincode"].value;
                let dtype = document.forms["reseller"]["dtype"].value;
                let docno = document.forms["reseller"]["docno"].value;
                let docphoto = document.forms["reseller"]["docph"].value;
                 if (fname == "") {
                 Toastify({
                    text: "Reseller Name must be filled out",
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
                    text: "Enter Correct Mobile No.",
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
                    text: "Please Attach Reseller Photo",
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
                 else if (add == "") {
                 Toastify({
                    text: "Please Enter Reseller Address",
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
                else if (pin == "" || pin.length!=6) {
                 Toastify({
                    text: "Enter Correct Pincode",
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
                    text: "Please Enter Reseller Office Address",
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
                    text: "Please Enter Reseller Office Pincode",
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
                  else if (dtype == "") {
            Toastify({
            text: "Please Select Document Type",
            close:true,
            gravity:"top",
            position: "center",
            backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
            }).showToast();
            $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(3).addClass('fade show active');
        $('.list-group-item').eq(3).addClass('active');
        $("#upload1-list").addClass('active');
            return false;
            }
            else if (docno == "") {
                Toastify({
                text: "Please Enter Document No.",
                close:true,
                gravity:"top",
                position: "center",
                backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                }).showToast();
                $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(3).addClass('fade show active');
        $('.list-group-item').eq(3).addClass('active');
        $("#upload1-list").addClass('active');
                return false;
                }
                else if (docphoto == "") {
                    Toastify({
                    text: "Please Attach Document Photo",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                    $('.tab-pane').removeClass('show active');
        $('.list-group-item-action').removeClass('active');
        $('.tab-pane').eq(3).addClass('fade show active');
        $('.list-group-item').eq(3).addClass('active');
        $("#upload1-list").addClass('active');
                    return false;
                    }
        }








function copyAdd() {
  var cb1 = document.getElementById('copyadd');
  var add = document.getElementById('paddress');
  var iadd = document.getElementById('iaddress');
  var pin = document.getElementById('pincode');
  var ipin = document.getElementById('ipincode');
  var dis = document.getElementById('district');
  var idis = document.getElementById('idistrict');
  var sta = document.getElementById('state');
  var ista = document.getElementById('istate');
  var coun = document.getElementById('country');
  var icoun = document.getElementById('icountry');
  if (cb1.checked) {
    iadd.value = add.value;
    ipin.value = pin.value;
    idis.value = dis.value;
    ista.value = sta.value;
    icoun.value = coun.value;

  } else {
    iadd.value = '';
    ipin.value = '';
    idis.value = '';
    ista.value = '';
    icoun.value = '';

  }
}







    
        $(document).ready(function () {
            if ($("#account-list").hasClass('active')) {
                $("#account1-list").addClass('active');
            }
            $("#account-list").click(function () {
                $("#account1-list").addClass('active');
                $("#address1-list").removeClass('active');
                $("#network1-list").removeClass('active');
                $("#upload1-list").removeClass('active');
            });

            $("#account1-list").click(function () {
                $("#account-list").addClass('active');
                $("#address-list").removeClass('active');
                $("#network-list").removeClass('active');
                $("#upload-list").removeClass('active');
                window.scrollTo(0,0);
            });

            $("#address-list").click(function () {
                $("#address1-list").addClass('active');
                $("#network1-list").removeClass('active');
                $("#upload1-list").removeClass('active');
                $("#account1-list").removeClass('active');
            });

            $("#address1-list").click(function () {
                $("#address-list").addClass('active');
                $("#network-list").removeClass('active');
                $("#upload-list").removeClass('active');
                $("#account-list").removeClass('active');
                window.scrollTo(0,0);
            });

            $("#network-list").click(function () {
                $("#network1-list").addClass('active');
                $("#upload1-list").removeClass('active');
                $("#account1-list").removeClass('active');
                $("#address1-list").removeClass('active');
            });

            $("#network1-list").click(function () {
                $("#network-list").addClass('active');
                $("#upload-list").removeClass('active');
                $("#account-list").removeClass('active');
                $("#address-list").removeClass('active');
                window.scrollTo(0,0);
            });

            $("#upload-list").click(function () {
                $("#upload1-list").addClass('active');
                $("#account1-list").removeClass('active');
                $("#address1-list").removeClass('active');
                $("#network1-list").removeClass('active');
            });

            $("#upload1-list").click(function () {
                $("#upload-list").addClass('active');
                $("#account-list").removeClass('active');
                $("#address-list").removeClass('active');
                $("#network-list").removeClass('active');
                window.scrollTo(0,0);
            });
        });







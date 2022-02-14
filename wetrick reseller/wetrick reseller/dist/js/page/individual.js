








    function Tab1(){
                let fname = document.forms["indcust"]["fullname"].value;
                let dob = document.forms["indcust"]["dob"].value;
                let mob = document.forms["indcust"]["mobileno"].value;
                let gender = document.forms["indcust"]["gender"].value;
                let cphoto = document.forms["indcust"]["cuploads"].value;
                if (fname == "") {
                    Toastify({
                    text: "Name must be filled out",
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
                 else if (gender == "") {
                 alert("Gender must be filled out");
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
                $("#lco1-list").removeClass('active')
            }
                 }
    }










function Tab2(){
                let add = document.forms["indcust"]["paddress"].value;
                let pin = document.forms["indcust"]["pincode"].value;
                let iadd = document.forms["indcust"]["iaddress"].value;
                let ipin = document.forms["indcust"]["ipincode"].value;
                if (add == "") {
                 Toastify({
                    text: "Please Enter Customer Address",
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
                    text: "Please Enter Customer Installation Pincode",
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
                $("#lco-list").addClass('active')
                $("#network1-list").removeClass('active');
                $("#account1-list").removeClass('active');
                $("#address1-list").removeClass('active');
                $("#plan1-list").removeClass('active');
                $("#lco1-list").addClass('active');
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
                $("#network-list").addClass('active');
                $("#account1-list").removeClass('active');
                $("#address1-list").removeClass('active');
                $("#plan1-list").removeClass('active');
                $("#network1-list").addClass('active');
                $("#upload1-list").removeClass('active');
                 }
    }









    function Tab4(){
    let user = document.forms["indcust"]["username"].value;
    if (user == "") {
    Toastify({
                    text: "Please Enter Username",
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










    function Tab5(){
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
        $("#lco1-list").removeClass('active');
       
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
        $("#plan1-list").removeClass('active');
        $("#network1-list").removeClass('active');
        $("#upload1-list").removeClass('active');
        $("#lco1-list").removeClass('active');
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
        $("#upload1-list").removeClass('active');
        $("#account1-list").removeClass('active');
        $("#address1-list").removeClass('active');
        $("#plan1-list").removeClass('active');
        $("#network1-list").removeClass('active');
        $("#lco1-list").addClass('active');
       
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
        $("#plan1-list").removeClass('active');
        $("#network1-list").addClass('active');
        $("#upload1-list").removeClass('active');
        $("#lco1-list").removeClass('active');
    }
    }









    function Tab6Prev(){
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
        $("#lco1-list").removeClass('active');
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











$(document).ready(function() {
if($("#account-list").hasClass('active')){
$("#account1-list").addClass('active');
}
$("#account-list").click(function() {
$("#account1-list").addClass('active');
$("#address1-list").removeClass('active');
$("#plan1-list").removeClass('active');
$("#lco1-list").removeClass('active');
$("#network1-list").removeClass('active');
$("#upload1-list").removeClass('active');
});

$("#account1-list").click(function() {
$("#account-list").addClass('active');
$("#address-list").removeClass('active'); 
$("#plan-list").removeClass('active');
$("#lco-list").removeClass('active');
$("#network-list").removeClass('active');
$("#upload-list").removeClass('active');
window.scrollTo(0,0);
});

$("#address-list").click(function() {
$("#address1-list").addClass('active');
$("#plan1-list").removeClass('active');
$("#lco1-list").removeClass('active');
$("#network1-list").removeClass('active');
$("#upload1-list").removeClass('active');
$("#account1-list").removeClass('active');
});

$("#address1-list").click(function() {
$("#address-list").addClass('active');
$("#plan-list").removeClass('active');
$("#lco-list").removeClass('active');
$("#network-list").removeClass('active');
$("#upload-list").removeClass('active');
$("#account-list").removeClass('active'); 
window.scrollTo(0,0);
});

$("#plan-list").click(function() {
$("#plan1-list").addClass('active');
$("#lco1-list").removeClass('active');
$("#network1-list").removeClass('active');
$("#upload1-list").removeClass('active');
$("#account1-list").removeClass('active');
$("#address1-list").removeClass('active');
});

$("#plan1-list").click(function() {
$("#plan-list").addClass('active');
$("#lco-list").removeClass('active');
$("#network-list").removeClass('active');
$("#upload-list").removeClass('active');
$("#account-list").removeClass('active'); 
$("#address-list").removeClass('active');
window.scrollTo(0,0);
});
$("#lco-list").click(function() {
$("#lco1-list").addClass('active');
$("#plan1-list").removeClass('active');
$("#network1-list").removeClass('active');
$("#upload1-list").removeClass('active');
$("#account1-list").removeClass('active'); 
$("#address1-list").removeClass('active');
});
$("#lco1-list").click(function() {
$("#lco-list").addClass('active');
$("#plan-list").removeClass('active');
$("#network-list").removeClass('active');
$("#upload-list").removeClass('active');
$("#account-list").removeClass('active'); 
$("#address-list").removeClass('active');
window.scrollTo(0,0);
});

$("#network-list").click(function() {
$("#network1-list").addClass('active');
$("#upload1-list").removeClass('active');
$("#account1-list").removeClass('active');
$("#address1-list").removeClass('active');
$("#plan1-list").removeClass('active');
$("#lco1-list").removeClass('active');
});

$("#network1-list").click(function() {
$("#network-list").addClass('active');
$("#upload-list").removeClass('active');
$("#account-list").removeClass('active'); 
$("#address-list").removeClass('active');
$("#plan-list").removeClass('active');
$("#lco-list").removeClass('active');
window.scrollTo(0,0);
});

$("#upload-list").click(function() {
$("#upload1-list").addClass('active');
$("#account1-list").removeClass('active');
$("#address1-list").removeClass('active');
$("#plan1-list").removeClass('active');
$("#lco1-list").removeClass('active');
$("#network1-list").removeClass('active');
});

$("#upload1-list").click(function() {
$("#upload-list").addClass('active');
$("#account-list").removeClass('active'); 
$("#address-list").removeClass('active');
$("#plan-list").removeClass('active');
$("#lco-list").removeClass('active');
$("#network-list").removeClass('active');
window.scrollTo(0,0);
});
});










            validateForm=()=>{
                let fname = document.forms["indcust"]["fullname"].value;
                let dob = document.forms["indcust"]["dob"].value;
                let mob = document.forms["indcust"]["mobileno"].value;
                let gender = document.forms["indcust"]["gender"].value;
                let cmail = document.forms["indcust"]["email"].value;
                let cphoto = document.forms["indcust"]["cuploads"].value;
                let add = document.forms["indcust"]["paddress"].value;
                let pin = document.forms["indcust"]["pincode"].value;
                let iadd = document.forms["indcust"]["iaddress"].value;
                let ipin = document.forms["indcust"]["ipincode"].value;
                let user = document.forms["indcust"]["username"].value;
                 if (fname == "") {
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
                 else if (cmail=="") {
                 Toastify({
                    text: "Enter Customer Email",
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
                 else if (gender == "") {
                 alert("Gender must be filled out");
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
                 else if (add == "") {
                 Toastify({
                    text: "Please Enter Customer Address",
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
                    text: "Please Enter Customer Installation Pincode",
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
                    $('.tab-pane').eq(3).addClass('fade show active');
                    $('.list-group-item').eq(3).addClass('active');
                    $("#network1-list").addClass('active');
                 return false;
                 }
        }
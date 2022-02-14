       $("#resname").select2({
    theme: "bootstrap-5",
});






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


   function copyCb() {
    var cb2 = document.getElementById('copycb');
    var add = document.getElementById('paddress');
    var badd = document.getElementById('oaddress');
    var ppin = document.getElementById('ipincode');
    var bpin = document.getElementById('opincode');
    var dis = document.getElementById('district');
    var bdis = document.getElementById('odistrict');
    var sta = document.getElementById('state');
    var bsta = document.getElementById('ostate');
    var coun = document.getElementById('country');
    var bcoun = document.getElementById('ocountry');
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


  


  function Tab1(){
    let fname = document.forms["newlco"]["fullname"].value;
    let dob = document.forms["newlco"]["dob"].value;
    let mob = document.forms["newlco"]["mobileno"].value;
    let email = document.forms["newlco"]["email"].value;
    let cphoto = document.forms["newlco"]["cuploads"].value;

    if (fname == "") {
     Toastify({
        text: "LCO Name must be filled out",
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
    else if (email == "") {
    Toastify({
        text: "LCO Email must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    
    
    else if (cphoto == "") {
    Toastify({
        text: "Please Attach LCO Photo",
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
    window.scrollTo(0,0);
    }
    }
}






function Tab2(){
    let padd = document.forms["newlco"]["paddress"].value;
    let ppin = document.forms["newlco"]["ipincode"].value;
    let badd = document.forms["newlco"]["oaddress"].value;
    let bpin = document.forms["newlco"]["opincode"].value;

    if (padd == "") {
    Toastify({
        text: "Please Enter LCO Permanent Address",
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
        text: "Please Enter LCO Working Area (Office) Address",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
    else if (bpin == "" || bpin.length!=6) {
    Toastify({
        text: "Enter Correct LCO Working Area (Office) Pincode",
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
    $("#upload-list").addClass('active');
    $("#account1-list").removeClass('active');
    $("#address1-list").removeClass('active');
    $("#network1-list").removeClass('active');
    $("#upload1-list").addClass('active');
    }
    }
}



function Tab3(){

    let dtype = document.forms["newlco"]["dtype"].value;
    let docno = document.forms["newlco"]["docno"].value;
    let docphoto = document.forms["newlco"]["docph"].value;
    if (dtype == "") {
    Toastify({
    text: "Please Select Document Type",
    close:true,
    gravity:"top",
    position: "center",
    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
    }).showToast();
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
            $("#network1-list").removeClass('active');
            $("#upload1-list").addClass('active');
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
                $("#network1-list").removeClass('active');
                $("#upload1-list").removeClass('active');
            }
            }

            function Tab2Prev(){
                var cur = $('.tab-pane').index($('.tab-pane.active'));
                var curt= $('.list-group-item').index($('.list-group-item.active'));
                if (cur!=0 && curt!=0) {
                    $('.tab-pane').removeClass('show active');
                    $('.list-group-item-action').removeClass('active');
                    $('.tab-pane').eq(cur-1).addClass('fade show active');
                    $('.list-group-item').eq(curt-1).addClass('active');
                    $("#account1-list").addClass('active');
                    $("#address1-list").removeClass('active');
                    $("#network1-list").removeClass('active');
                    $("#upload1-list").removeClass('active');
                }
                }



    validateForm=()=>{
        let fname = document.forms["newlco"]["fullname"].value;
        let dob = document.forms["newlco"]["dob"].value;
        let mob = document.forms["newlco"]["mobileno"].value;
        let email = document.forms["newlco"]["email"].value;
        let cphoto = document.forms["newlco"]["cuploads"].value;

        let padd = document.forms["newlco"]["paddress"].value;
    let ppin = document.forms["newlco"]["ipincode"].value;
    let badd = document.forms["newlco"]["oaddress"].value;
    let bpin = document.forms["newlco"]["opincode"].value;


    let dtype = document.forms["newlco"]["dtype"].value;
    let docno = document.forms["newlco"]["docno"].value;
    let docphoto = document.forms["newlco"]["docph"].value;

    let resname = document.forms["newlco"]["resname"].value;
    let location = document.forms["newlco"]["location"].value;
        
        if (fname == "") {
     Toastify({
        text: "LCO Name must be filled out",
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
    else if (email == "") {
    Toastify({
        text: "LCO Email must be filled out",
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
        text: "Please Attach LCO Photo",
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

     if (padd == "") {
        Toastify({
            text: "Please Enter LCO Permanent Address",
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
            text: "Please Enter LCO Working Area (Office) Address",
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
            text: "Enter Correct LCO Working Area (Office) Pincode",
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
        $('.tab-pane').eq(2).addClass('fade show active');
        $('.list-group-item').eq(2).addClass('active');
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
        $('.tab-pane').eq(2).addClass('fade show active');
        $('.list-group-item').eq(2).addClass('active');
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
        $('.tab-pane').eq(2).addClass('fade show active');
        $('.list-group-item').eq(2).addClass('active');
        $("#upload1-list").addClass('active');
                    return false;
                    }
                    else if (resname == "") {
                        Toastify({
                        text: "Please Select Reseller Name",
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

                    else if (location == "") {
                        Toastify({
                        text: "Please Select Location",
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

        $('.previous').click(function () {
            if ($("#account-list").hasClass('active')) {
                $("#account1-list").addClass('active');
            }
            if ($("#address-list").hasClass('active')) {
                $("#address1-list").addClass('active');
            }
            if ($("#network-list").hasClass('active')) {
                $("#network1-list").addClass('active');
            }
            if ($("#upload-list").hasClass('active')) {
                $("#upload1-list").addClass('active');
            }
        });

        $('.next').click(function () {
            if ($("#account-list").hasClass('active')) {
                $("#account1-list").addClass('active');
            }
            if ($("#address-list").hasClass('active')) {
                $("#address1-list").addClass('active');
            }        
        if ($("#network-list").hasClass('active')) {
            $("#network1-list").addClass('active');
        }
        if ($("#upload-list").hasClass('active')) {
            $("#upload1-list").addClass('active');
        }
    });







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
            });
        });









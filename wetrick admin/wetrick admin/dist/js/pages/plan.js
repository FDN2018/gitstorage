var offPrice = document.getElementById('oprice')
var taxCheck = document.getElementById('checktax')
var totPrice    = document.getElementById('tprice');

function calculate() {  
    if (taxCheck.checked){
        var offerVal = offPrice.value / 1.18;
        var tax =  offerVal;
    }
    else{
        var offerVal = offPrice.value * 0.18;
        var tax1 =  offerVal;
        var tax = Number(tax1)+Number(offPrice.value);
    }
  
  // round with 2 decimal places
  totPrice.value = Math.round(tax * 100) / 100;
}

offPrice.addEventListener('input', calculate);
taxCheck.addEventListener('input', calculate);





    validateForm=()=>{
                let pname = document.forms["crplan"]["planname"].value;
                let oprice = document.forms["crplan"]["oprice"].value;
                let tprice = document.forms["crplan"]["tprice"].value;
                let validity = document.forms["crplan"]["validity"].value;
                let time = document.forms["crplan"]["time"].value;
                let rate = document.forms["crplan"]["rate"].value;
                let quota = document.forms["crplan"]["quota"].value;
                let volume = document.forms["crplan"]["volume"].value;
                 if (pname == "") {
                 Toastify({
                    text: "Plan Name must be filled out",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                 else if (oprice == "") {
                 Toastify({
                    text: "Offer Price must be filled out",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                 else if (tprice=="") {
                 Toastify({
                    text: "Total Price must be filled out",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                 else if (validity == "") {
                 Toastify({
                    text: "Validity must be filled out",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                  else if (time == "") {
                 Toastify({
                    text: "Please Select Time",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                 else if (rate == "") {
                 Toastify({
                    text: "Please Enter Rate Limit",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                else if (quota == "") {
                 Toastify({
                    text: "Quota Limit must be filled out",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
                else if (volume == "") {
                 Toastify({
                    text: "Please Select Volume",
                    close:true,
                    gravity:"top",
                    position: "center",
                    backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
                    }).showToast();
                 return false;
                 }
        }
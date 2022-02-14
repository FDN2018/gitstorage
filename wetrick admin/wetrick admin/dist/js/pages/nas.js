validateForm=()=>{
    let nasip = document.forms["nasadd"]["nasip"].value;
    let loc = document.forms["nasadd"]["location"].value;
    let secret = document.forms["nasadd"]["secret"].value;
    let user = document.forms["nasadd"]["username"].value;
    let pass = document.forms["nasadd"]["apipass"].value;
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (!nasip.match(ipformat)) {
    Toastify({
        
        text: "Please Enter Correct NAS IP",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
    
     }
     else if (loc == "") {
     Toastify({
        text: "Location must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (secret=="") {
     Toastify({
        text: "Secret must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (user=="") {
     Toastify({
        text: "API Username must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (pass=="") {
     Toastify({
        text: "API Password must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }


else
{
Toastify({
text: "You have entered an invalid IP address!",
close:true,
gravity:"top",
position: "center",
backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
}).showToast();
}
}
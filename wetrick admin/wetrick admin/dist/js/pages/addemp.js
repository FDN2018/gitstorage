validateForm=()=>{
    let empname = document.forms["addemp"]["empname"].value;
    let empmail = document.forms["addemp"]["empmail"].value;
    let empuser = document.forms["addemp"]["empusername"].value;
    let emppass = document.forms["addemp"]["emppass"].value;
    let empmob = document.forms["addemp"]["empphone"].value;
    let empstatus = document.forms["addemp"]["empstatus"].value;
    let emprole = document.forms["addemp"]["emprole"].value;
     if (empname== "") {
     Toastify({
        text: "Employee Name must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (empmail == "") {
     Toastify({
        text: "Employee Email must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (empuser=="") {
     Toastify({
        text: "Employee Username must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (emppass=="") {
     Toastify({
        text: "Employee Password must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (empmob=="") {
     Toastify({
        text: "Employee Phone No must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (empstatus=="") {
     Toastify({
        text: "Employee Status must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
     else if (emprole=="") {
     Toastify({
        text: "Employee Role must be filled out",
        close:true,
        gravity:"top",
        position: "center",
        backgroundColor:"linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        }).showToast();
     return false;
     }
}
$(document).ready(function() {
var home=$("#home");
var cust=$("#customer");
var custul=$("#customerul");
var custon=$("#customeronline");
var indcust=$("#indcustonline");
var corcust=$("#corcustonline");
var crcust=$("#crcust");
var crcustul=$("#crcustul");
var crindcust=$("#crindcust");
var crcorcust=$("#crcorcust");
var quickop=$("#quickop");
var opul=$("#quickopul");
var chpass=$("#chpass");
var chplan=$("#chplan");
var chstatic=$("#chstatic");
var graph=$("#viewgraph");
var opzone=$("#opzone");
var opzoneul=$("#opzoneul");
var newres=$("#newres");
var newlco=$("#newlco");
var vres=$("#vres");
var vlco=$("#vlco");
var recharge=$("#recharge");
var rechargeul=$("#rechargeul");
var uprenewal=$("#uprenewal");
var pendexp=$("#pendexp");
var plan=$("#plans");
var planul=$("#planul");
var crplan=$("#crplan");
var vplan=$("#vplan");
var pricebookside=$("#pricebookside");
var pricebookul=$("#pricebookul");
var crpricebook=$("#crpricebook");
var manpricebook=$("#manpricebook");
var consession=$("#consession");
var complaint=$("#complaints");
var systemside=$("#systemside");
var systemul=$("#systemul");
var addnasside=$("#addnasside");
var vnasside=$("#vnasside");
var empside=$("#empside");
var empsideul=$("#empsideul");
var empaddside=$("#empaddside");
var empviewside=$("#empviewside");
var orgside=$("#orgside");
var report=$("#reports");
var bill=$("#bill");
var broad=$("#broad");

var pagename=window.location.pathname.substring(1);
if(pagename==="home" || pagename===""){
    home.addClass("active");
}
else if(pagename==="allcustomer"){
    cust.addClass("active");
    custul.addClass("active");
    custon.addClass("active");
}
else if(pagename==="suspended"){
    cust.addClass("active");
    custul.addClass("active");
    custon.addClass("active");
}
else if(pagename==="offline"){
    cust.addClass("active");
    custul.addClass("active");
    custon.addClass("active");
}
else if(pagename==="active"){
    cust.addClass("active");
    custul.addClass("active");
    custon.addClass("active");
}
else if(pagename==="online"){
    cust.addClass("active");
    custul.addClass("active");
    custon.addClass("active");
}
else if(pagename==="renewal"){
    recharge.addClass("active");
    rechargeul.addClass("active");
    uprenewal.addClass("active");
}
else if(pagename==="expired"){
    recharge.addClass("active");
    rechargeul.addClass("active");
    pendexp.addClass("active");
}
else if(pagename==="indcustomer"){
    cust.addClass("active");
    custul.addClass("active");
    indcust.addClass("active");
}
else if(pagename==="onlindcust"){
    cust.addClass("active");
    custul.addClass("active");
    indcust.addClass("active");
}
else if(pagename==="susindcust"){
    cust.addClass("active");
    custul.addClass("active");
    indcust.addClass("active");
}
else if(pagename==="exindcust"){
    cust.addClass("active");
    custul.addClass("active");
    indcust.addClass("active");
}
else if(pagename==="actindcust"){
    cust.addClass("active");
    custul.addClass("active");
    indcust.addClass("active");
}
else if(pagename==="ofindcust"){
    cust.addClass("active");
    custul.addClass("active");
    indcust.addClass("active");
}
else if(pagename==="corcustomer"){
    cust.addClass("active");
    custul.addClass("active");
    corcust.addClass("active");
}
else if(pagename==="onlcorcust"){
    cust.addClass("active");
    custul.addClass("active");
    corcust.addClass("active");
}
else if(pagename==="ofcorcust"){
    cust.addClass("active");
    custul.addClass("active");
    corcust.addClass("active");
}
else if(pagename==="suscorcust"){
    cust.addClass("active");
    custul.addClass("active");
    corcust.addClass("active");
}
else if(pagename==="upcorcust"){
    cust.addClass("active");
    custul.addClass("active");
    corcust.addClass("active");
}
else if(pagename==="excorcust"){
    cust.addClass("active");
    custul.addClass("active");
    corcust.addClass("active");
}
else if(pagename==="actcorcust"){
    cust.addClass("active");
    custul.addClass("active");
    corcust.addClass("active");
}

else if(pagename==="broadcast"){
    broad.addClass("active");
}
else if(pagename==="individual"){
    crcust.addClass("active");
    crcustul.addClass("active");
    crindcust.addClass("active");
}
else if(pagename==="corporate"){
    crcust.addClass("active");
    crcustul.addClass("active");
    crcorcust.addClass("active");
}
else if(pagename==="operator"){
    crcust.addClass("active");

}
else if(pagename==="changepassword"){
    quickop.addClass("active");
    opul.addClass("active");
    chpass.addClass("active");
}
else if(pagename==="changeplan"){
    quickop.addClass("active");
    opul.addClass("active");
    chplan.addClass("active");
}
else if(pagename==="changestatic"){
    quickop.addClass("active");
    opul.addClass("active");
    chstatic.addClass("active");
}
else if(pagename==="changestatic1"){
    quickop.addClass("active");
    opul.addClass("active");
    chstatic.addClass("active");
}
else if(pagename==="graph"){
    quickop.addClass("active");
    opul.addClass("active");
    graph.addClass("active");
}
else if(pagename==="reseller"){
    opzone.addClass("active");
    opzoneul.addClass("active");
    newres.addClass("active");
}
else if(pagename==="lco"){
    opzone.addClass("active");
    opzoneul.addClass("active");
    newlco.addClass("active");
}
else if(pagename==="viewoperator"){
    opzone.addClass("active");
    opzoneul.addClass("active");
    vres.addClass("active");
}
else if(pagename==="viewlco"){
    opzone.addClass("active");
    opzoneul.addClass("active");
    vlco.addClass("active");
}
else if(pagename==="plan"){
    plan.addClass("active");
    planul.addClass("active");
    crplan.addClass("active");
}
else if(pagename==="viewplan"){
    plan.addClass("active");
    planul.addClass("active");
    vplan.addClass("active");
}
else if(pagename==="price"){
    pricebookside.addClass("active");
    pricebookul.addClass("active");
    crpricebook.addClass("active");
}
else if(pagename==="managepricebook"){
    pricebookside.addClass("active");
    pricebookul.addClass("active");
    manpricebook.addClass("active");
}
else if(pagename==="nas"){
    systemside.addClass("active");
    systemul.addClass("active");
    addnasside.addClass("active");
}
else if(pagename==="viewnas"){
    systemside.addClass("active");
    systemul.addClass("active");
    vnasside.addClass("active");
}
else if(pagename==="addemp"){
    empside.addClass("active");
    empsideul.addClass("active");
    empaddside.addClass("active");
}
else if(pagename==="viewemp"){
    empside.addClass("active");
    empsideul.addClass("active");
    empviewside.addClass("active");
}
else if(pagename==="org"){
    orgside.addClass("active");
}
else if(pagename==="session"){
    consession.addClass("active");
}
else if(pagename==="viewc"){
    complaint.addClass("active");
}
else if(pagename==="reports"){
    report.addClass("active");
}
else if(pagename==="newbroadcast"){
    broad.addClass("active");
}
});

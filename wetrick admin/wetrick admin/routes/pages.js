const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('login');
});


//for defining routes for home page
router.get('/home',(req, res) => {
        res.render('home');
});


//for defining routes for home page
router.get('/customer1',(req, res) => {
   
    res.render('customer1');
});

router.get('/profile',(req, res) => {
   
    res.render('profile');
});


router.get('/profile2',(req, res) => {
   
    res.render('profile2');
});

router.get('/wallet',(req, res) => {
   
    res.render('wallet');
});

router.get('/allcustomer',(req, res)=>{
    res.render('allcustomer');
});

router.get('/indcustomer',(req, res)=>{
    res.render('indcustomer');
});

router.get('/corcustomer',(req, res)=>{
    res.render('corcustomer');
});

router.get('/individual',(req, res) => {
   
    res.render('individual');
});


router.get('/corporate1',(req, res) => {
   
    res.render('corporate1');
});

router.get('/corporate',(req, res) => {
   
    res.render('corporate');
});
router.get('/operator',(req, res) => {
   
    res.render('operator');
});
router.get('/reseller',(req, res) => {
    res.render('reseller')
});
router.get('/lco',(req, res) => {
    res.render('lco')
});
router.get('/plan',(req,res)=> {
    res.render('plan');
});
router.get('/viewcustomer',(req,res)=> {
    res.render('viewcustomer');
});
router.get('/renewal',(req,res)=> {
    res.render('renewal');
});
router.get('/expired',(req,res)=> {
    res.render('expired');
});
router.get('/offline',(req,res)=> {
    res.render('offline');
});
router.get('/suspended',(req,res)=> {
    res.render('suspended');
});
router.get('/online',(req,res)=> {
    res.render('online');
});
router.get('/active',(req,res)=> {
    res.render('active');
});
router.get('/usersession',(req,res)=> {
    res.render('usersession');
});
router.get('/usergraph',(req,res)=>{
    res.render('usergraph');
});
router.get('/rechargehistory',(req,res)=>{
    res.render('rechargehistory');
});
router.get('/assignip',(req,res)=>{
    res.render('assignip');
});
router.get('/docstatus',(req,res)=>{
    res.render('docstatus');
});
router.get('/accesslog',(req,res)=>{
    res.render('accesslog');
});
router.get('/selectop',(req,res)=>{
    res.render('selectop');
});
router.get('/viewoperator',(req,res)=>{
    res.render('viewoperator');
});
router.get('/viewopdet',(req,res)=>{
    res.render('viewopdet');
});
router.get('/transfer',(req,res)=>{
    res.render('transfer');
});
router.get('/viewpricebook',(req,res)=>{
    res.render('viewpricebook');
});
router.get('/nasassoc',(req,res)=>{
    res.render('nasassoc');
});
router.get('/viewc',(req,res)=>{
    res.render('viewc');
});
router.get('/session',(req,res)=>{
    res.render('session');
});
router.get('/viewplan',(req,res)=>{
    res.render('viewplan');
});
router.get('/viewplandet',(req,res)=>{
    res.render('viewplandet');
});
router.get('/nas',(req,res)=>{
    res.render('nas');
});
router.get('/viewnas',(req,res)=>{
    res.render('viewnas');
});
router.get('/viewnasdet',(req,res)=>{
    res.render('viewnasdet');
});
router.get('/addemp',(req,res)=>{
    res.render('addemp');
});
router.get('/viewemp',(req,res)=>{
    res.render('viewemp');
});
router.get('/org',(req,res)=>{
    res.render('org');
});
router.get('/reports',(req,res)=>{
    res.render('reports');
});
router.get('/suscusrep',(req,res)=>{
    res.render('suscusrep');
});
router.get('/lcobaltra',(req,res)=>{
    res.render('lcobaltra');
});
router.get('/inacusrep',(req,res)=>{
    res.render('inacusrep');
});
router.get('/lcotrahis',(req,res)=>{
    res.render('lcotrahis');
});
router.get('/restrabal',(req,res)=>{
    res.render('restrabal');
});
router.get('/upremon',(req,res)=>{
    res.render('upremon');
});
router.get('/cusosbal',(req,res)=>{
    res.render('cusosbal');
});
router.get('/dataus',(req,res)=>{
    res.render('dataus');
});
router.get('/cusuphis',(req,res)=>{
    res.render('cusuphis');
});
router.get('/agr',(req,res)=>{
    res.render('agr');
});
router.get('/renplan',(req,res)=>{
    res.render('renplan');
});
router.get('/regplan',(req,res)=>{
    res.render('regplan');
});
router.get('/purnew',(req,res)=>{
    res.render('purnew');
});
router.get('/tranrep',(req,res)=>{
    res.render('tranrep');
});
router.get('/userlog',(req,res)=>{
    res.render('userlog');
});
router.get('/upreday',(req,res)=>{
    res.render('upreday');
});
router.get('/payrep',(req,res)=>{
    res.render('payrep');
});
router.get('/casedet',(req,res)=>{
    res.render('casedet');
});
router.get('/otfran',(req,res)=>{
    res.render('otfran');
});
router.get('/otsubs',(req,res)=>{
    res.render('otsubs');
});
router.get('/test',(req, res)=> {
    res.render('test');
});
router.get('/tabletest',(req, res)=> {
    res.render('tabletest');
});
router.get('/broadcast',(req, res)=> {
    res.render('broadcast');
});
router.get('/newbroadcast',(req, res)=> {
    res.render('newbroadcast');
});
router.get('/changepassword',(req, res)=> {
    res.render('changepassword');
});
router.get('/changeplan',(req, res)=> {
    res.render('changeplan');
});
router.get('/graph',(req, res)=> {
    res.render('graph');
});
router.get('/actindcust',(req, res)=> {
    res.render('actindcust');
});
router.get('/onlindcust',(req, res)=> {
    res.render('onlindcust');
});
router.get('/ofindcust',(req, res)=> {
    res.render('ofindcust');
});
router.get('/susindcust',(req, res)=> {
    res.render('susindcust');
});
router.get('/upindcust',(req, res)=> {
    res.render('upindcust');
});
router.get('/exindcust',(req, res)=> {
    res.render('exindcust');
});
router.get('/actcorcust',(req, res)=> {
    res.render('actcorcust');
});
router.get('/onlcorcust',(req, res)=> {
    res.render('onlcorcust');
});
router.get('/ofcorcust',(req, res)=> {
    res.render('ofcorcust');
});
router.get('/suscorcust',(req, res)=> {
    res.render('suscorcust');
});
router.get('/upcorcust',(req, res)=> {
    res.render('upcorcust');
});
router.get('/excorcust',(req, res)=> {
    res.render('excorcust');
});
router.get('/planapp',(req, res)=> {
    res.render('planapp');
});
router.get('/price',(req, res)=> {
    res.render('price');
});

router.get('/managepricebook',(req, res)=> {
    res.render('managepricebook');
});
router.get('/pricebookinfo',(req, res)=> {
    res.render('pricebookinfo');
});
router.get('/editpricebook',(req, res)=> {
    res.render('editpricebook');
});
router.get('/accrep',(req, res)=> {
    res.render('accrep');
});
router.get('/acuserrep',(req, res)=> {
    res.render('acuserrep');
});
router.get('/viewstatic',(req, res)=> {
    res.render('viewstatic');
});
router.get('/changestatic',(req, res)=> {
    res.render('changestatic');
});
router.get('/changestatic1',(req, res)=> {
    res.render('changestatic1');
});
router.get('/managelco',(req, res)=> {
    res.render('managelco');
});
router.get('/viewlcopricebook',(req, res)=> {
    res.render('viewlcopricebook');
});
router.get('/selupop',(req, res)=> {
    res.render('selupop');
});
router.get('/selpenop',(req, res)=> {
    res.render('selpenop');
});
router.get('/viewlco',(req, res)=> {
    res.render('viewlco');
});
module.exports = router;
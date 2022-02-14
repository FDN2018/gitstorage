const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

//this will tell about our css and bootstrap directory
const publicDirectory =path.join(__dirname, './public');
const uploads = path.join(__dirname,'./uploads');
const vendors = path.join(__dirname,'./vendors');
const plugins = path.join(__dirname,'./plugins');
const dist = path.join(__dirname,'./dist');

//use publicdirectory to our framework express//
app.use(express.static(publicDirectory));
app.use(express.static(uploads));
app.use(express.static(vendors));
app.use(express.static(plugins));
app.use(express.static(dist));
 
//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));


//Parse JSON bodies (as sent by Api Clients)
app.use(express.json());


//to tell nodejs what kind of view engine are you using for html pages//
hbs.registerPartials(__dirname + '/views/partials');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//Define Routes Path

app.use('/',require('./routes/pages'));




app.listen(7000,()=>{
console.log("Server running on Port 7000....");
});
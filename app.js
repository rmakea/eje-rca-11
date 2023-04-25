//Definir variables
const express = require("express"); //HTTP
const hbs = require("hbs") //HTML - Dinamicos
const bodyParser = require("body-parser") // Procesar solicitudes POST 
const port = process.env.PORT || 3000; //Puerto

const app = express();

//Motor de vistas - HTML Dinamicos
app.set('view engine','hbs')
hbs.registerPartials(__dirname+'/views/partials',()=>{});

//Middleware - use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definir las Rutas
app.post('/dashboard',(req,res)=>{
    res.render('dashboard',{
        nombre :"Raul Cardoso",
        email : "cardosoraul153@gmail.com"
    })//Vista dinamica - HTML Dinamico
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('*',(req,res)=>{
    res.render('404')
})

//Esta parte es para el desarrollador
app.listen(port,()=>{
    console.log('El servidor express esta corriendo en el puerto: ',port)
})
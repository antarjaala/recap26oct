// Imports
const express = require("express");
const app = express();
const port = 3000;


// Static Files
app.use(express.static('public'))
// app.use('/css',express.static(__dirname + 'public/css'))
// app.use('/img',express.static(__dirname + 'public/img'))
// app.use('/js',express.static(__dirname + 'public/js'))

// Set views
app.set('views','./views')
app.set('view engine','ejs')

// Render webpages
app.get('',(req,res)=>{res.render('index',{text:'This is EJS'})})
app.get('/about',(req,res)=>{res.render('about',{text: 'About Page'})})

// Listen on port 3000
app.listen(port, () =>
  console.info(`Listening on port ${port}`))











  // Render html
  // app.get('',function(req,res){res.sendFile(__dirname + "/views/index.html")})

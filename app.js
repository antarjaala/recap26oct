// Imports
const express = require("express");
const app = express();
const port = 3000;

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))


// Set 'views' directory for any views
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('', (req, res)=>
// {res.sendFile(__dirname + '/views/index.html')}
{res.render('index',{text:'This is EJS'} )}
)


// Listen on port 3000
app.listen(port, () =>
  console.info(`Listening on port ${port}`))

const express = require('express');
const profileController = require('./controllers/profileController');

const app = express();

// setupbtemplate engine
app.set('view engine', 'pug');

// static files
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('index');
});

// fire up controller
profileController(app);
  
app.listen(3000, () => {
  console.log('Student Profile App is listening on port 3000!\nhttp://localhost:3000/');
});

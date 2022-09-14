var express = require('express');
var router = express.Router();



const messages = [
  {
    text: "Hello there",
    user: "willy",
    added: new Date()
  },
  {
    text: "Message go Brrrrr",
    user: "chad",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Ding',
    message: messages
  });
});

router.get('/new', (req, res) => {
  res.render('index', {title: 'Ding-Sender', message: ''})

})

router.post('/new', (req, res) => {
  res.redirect('/')
    messages.push({text: req.body.text, user: req.body.author, added: new Date()});
})

module.exports = router;

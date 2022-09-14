var express = require('express');
var router = express.Router();

const moment = require('moment');

const messages = [
  {
    text: "Hello there",
    user: "willy",
    date: moment()
      .startOf('hour' - 1)
      .fromNow()
  },
  {
    text: "Message go Brrrrr",
    user: "chad",
    date: moment()
      .startOf('hour' - 1)
      .fromNow()
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
  res.render('form', {
    title: 'Ding-Sender',
  })

})

router.post('/new', (req, res) => {
  
  const newPost = {
    text: req.body.text, 
    user: req.body.author, 
    date: moment()
        .startOf('second' - 1)
        .fromNow()
  }

  messages.unshift(newPost);
  res.redirect('/')
})

module.exports = router;

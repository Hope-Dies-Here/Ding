var express = require('express');
var router = express.Router();

const moment = require('moment');

const messages = [
  {
    id: 1,
    text: "Hello there",
    user: "willy",
    date: moment()
      .startOf('hour')
      .fromNow()
  },
  {
    id: 0,
    text: "Message go Brrrrr",
    user: "chad",
    date: moment()
      .startOf('day')
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

let id = 2
router.post('/new', (req, res) => {
  const newPost = {
    id: id, 
    text: req.body.text, 
    user: req.body.author, 
    date: moment()
        .startOf('hour' - 1)
        .fromNow()
  }

  messages.unshift(newPost);
  id++;
  res.redirect('/')
})

router.get('/:id', (req, res)=>{
  const f = messages.filter(mes => mes.id == req.params.id);
  res.send(f)
})

module.exports = router;

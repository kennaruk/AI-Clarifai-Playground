var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload');
const clarifai = require('../clarifai/api');

router.use(fileUpload());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

router.post('/upload', function(req, res, next) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  let fileUploaded = req.files;
  console.log(fileUploaded['image']);
  // console.log(fileUploaded['image'].data.toString('base64'))

  // console.log('predict: ', fileUploaded['images[]'][0].data);
  clarifai.predict(fileUploaded['image'].data.toString('base64'), (response) => {
    res.render('color_list.ejs', {colors: response.outputs[0].data.colors});
    console.log('response: ', response.outputs[0].data.colors);
  });

  

});

module.exports = router;

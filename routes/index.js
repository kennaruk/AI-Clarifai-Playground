var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload');
router.use(fileUpload());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

router.post('/upload', function(req, res, next) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
  console.log('files found.');

  let fileUploaded = req.files;
  console.log(fileUploaded['images[]']);

  res.status(200).send('file found.');

});

module.exports = router;

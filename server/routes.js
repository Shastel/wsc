const express = require('express');
const router = express.Router();

router.get('/rules', function(req, res) {

});

router.get('*', function(req, res){
    res.sendFile('../client/dist/index.html');
});

module.exports = router;

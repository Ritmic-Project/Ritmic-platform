const express = require('express');
const Datastory = require('../models/datastory');
const router =  express.Router();
 

router.get('/', (req, res) => { 
    Datastory.find(req.query).sort({'notation': -1}).limit(10).then(data => res.json(data)).then(data => res.json(data));
});

// trends/


module.exports = router;
const express = require('express');
const router = express.Router();
const {InfoController} = require('../../controllers');
const EmailRoutes = require('./email-routes')

router.get('/info',InfoController.info);
router.use('/emails',EmailRoutes);


module.exports = router;
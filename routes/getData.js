const {Router} = require('express');
const Personnel = require('../models/Employee');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const employees = await Personnel.find();
    res.send({status: 200, employees});
  } catch (e) {
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
});

module.exports = router;

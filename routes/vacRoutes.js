// const requireLogin = require('../middlewares/requireLogin');
const express = require('express');
const router = express.Router();
const VaccineModel = require('../models/Vaccine')

router.get('/api/vac/:id', async (req, res) => {
  const vac = await VaccineModel.findOne({
    _id: req.params.id
  });
  res.send(vac);
});

router.get('/api/vacs', async (req, res) => {
  const hi = await VaccineModel.find();
  console.log({ hi })
  res.send(hi);
});

router.post('/api/vacs', async (req, res) => {
  console.log(req.body);
  const { title, company, price, imageUrl, description, name } = req.body;

  const newVac = new VaccineModel({
    title, company, price, imageUrl, description, name
  });

  try {
    await newVac.save()
    res.send(newVac);
  } catch (err) {
    res.send(400, err);
  }
});


module.exports = router;
const express = require('express');
const router = express.Router();
const item = require('../models/Menu')

router.post('/', async (req, res) => {
    try {
      const data = req.body;
      //create new item
      const newItem = new item(data);
      const response = await newItem.save();
      console.log('data saved');
      res.status(200).json(response)
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' })
    }
  })
  router.get('/', async (req, res) => {
    try {
      const data = await item.find();
      console.log('data sent');
      res.status(200).json(data)
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' })
    }
  })


  router.get('/:taste',async (req, res) => {
    try {
      const taste = req.params.taste
      if (taste == 'Sweet' || taste == 'Spicy' || taste == 'Sour') {
        const response = await item.find({taste: taste});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error: 'Invalid taste'});
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({error: 'internal server error' });
    }
  })

  module.exports = router
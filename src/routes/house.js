const express = require('express');
const House = require('../models/house.js');
const router = express.Router();

router.get('/', get);
router.get('/:id', getId);
router.post('/', post);
router.put('/:id', putId);
router.delete('/:id', deleteId);

function get(req, res) {
  return House
    .find({})
    .then(doc => res.json(doc))
    .catch(err => res.send(err));
}

function getId(req, res) {
  return House
    .find({ _id: req.params.id })
    .then(doc => res.json(doc))
    .catch(err => res.send(err));
}

function post(req, res) {
  return House
    .create(req.body)
    .then(doc => res.json(doc))
    .catch(err => res.send(err));;
}

function putId(req, res) {
  return House
    .updateOne({ _id: req.params.id }, req.body)
    .then(doc => res.json(doc))
    .catch(err => res.send(err));;
}

function deleteId(req, res) {
  return House
    .deleteOne({ _id: req.params.id })
    .then(doc => res.json(doc))
    .catch(err => res.send(err));;
}

module.exports = router;
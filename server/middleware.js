const express = require('express');
const app = express();
const cardDataModel = require('./cardModel');


const Middleware = (req, res, next) => {
  const cardId = req.params.id;
  if (!cardId) {
    return res.status(400).send({ message: 'Missing ID parameter' });
  }
  req.cardId = cardId; 
  next();
};

module.exports = Middleware;

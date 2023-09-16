"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const fs = require('fs');
router.get('/', (req, res) => {
    try {
        const script = fs.readFileSync(`${__dirname}/script.js`, 'utf-8');
        res.header('Content-Type', 'text/javascript');
        res.status(200).send(script);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});
module.exports = router;

const express = require('express');
const router = express.Router();
const Website = require('./../models/website');

router.get('/', async (req, res) => {
  try {
    // const websites = await Website.find();
    // res.status(200).json(websites);

    const website = new Website({
      id: "sDFr3fFer3dfs",
      name: "My website",
      browsers: [
        {
          name: "Chrome",
          count: 0
        },
        {
          name: "Safari",
          count: 0
        },
        {
          name: "FireFox",
          count: 0
        },
        {
          name: "Opera",
          count: 0
        },
        {
          name: "Brave",
          count: 0
        },
        {
          name: "Edge",
          count: 0
        }
      ]
    });

    const newWebsite = await website.save();
    res.status(201).json(newWebsite);
  } catch(err) {
    res.status(500).json(err.message);
  }
})

module.exports = router;

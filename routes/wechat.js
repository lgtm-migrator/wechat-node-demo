var express = require('express');
var wechat = require('wechat');
var router = express.Router();

router.all('/wechat', wechat("token", (req, res, next) => {
  res.json({wechat: "hello"});
}));

module.exports = router;
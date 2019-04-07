export { }
const express = require('express');
const router = express.Router();
const { surveyModel } = require('../model/surveyModel');

router.get('/', (req: any, res: any) => {
  surveyModel.find((data: any, err: any) => {
    if (!err)
      res.send(data);
    res.send(err);
  })
})
module.exports = router;


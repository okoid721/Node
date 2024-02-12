const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
});
router.route('/').post((req, res) => {
  res.status(200).json({ message: 'Create contact' });
});
router.route('/:id').get((req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
});
router.route('/:id').put((req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
});
router.route('/:id').delete((req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
});

module.exports = router;

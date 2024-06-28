const express = require('express');
const tourController = require('../controllers/tourController');
const { chackBody } = require('../middlewares/checkBody');
const { aliasTopTours } = require('../middlewares/topFiveCheap');
const authController = require('../controllers/authController');

const router = express.Router();

//router.param('id', tourController.checkID);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(chackBody, tourController.createTour);

router.route('/top-5-cheap').get(aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

module.exports = router;

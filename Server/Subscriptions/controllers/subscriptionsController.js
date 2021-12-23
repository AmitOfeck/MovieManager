const express = require('express');
const subscriptionsBL = require('../models/subscriptionsBL');

const router = express.Router();


//GetAll
router.route('/').get(async (req, resp) => {
    var data = await subscriptionsBL.getAllSubscriptions();
    return resp.json(data);
})

//GetById
router.route('/:id').get(async (req, resp) => {
    var id = req.params.id;
    var data = await subscriptionsBL.getSubscriptionById(id);
    return resp.json(data);
})


//Post
router.route('/').post(async (req, resp) => {
    var newSubscription = req.body;
    var answer = await subscriptionsBL.createSubscription(newSubscription);
    return resp.json(answer);
})

//Put
router.route('/:id').put(async (req, resp) => {
    var updatedSubscription = req.body;
    var id = req.params.id;
    var answer = await subscriptionsBL.updateSubscription(id , updatedSubscription);
    return resp.json(answer);
})

//Delete 
router.route('/:id').delete(async (req , resp)=> {
    var id = req.params.id;
    var answer = await subscriptionsBL.deleteSubscription(id);
    return resp.json(answer);
})

module.exports = router;


const express = require('express');
const membersBL = require('../models/membersBL');
const subscriptionsBL = require('../models/subscriptionsBL');

const router = express.Router();


//GetAll
router.route('/').get(async (req, resp) => {
    var data = await membersBL.getAllMembers();
    return resp.json(data);
})

//GetById
router.route('/:id').get(async (req, resp) => {
    var id = req.params.id;
    var data = await membersBL.getMemberById(id);
    return resp.json(data);
})


//Post
router.route('/').post(async (req, resp) => {
    var newMember = req.body;
    var answer = await membersBL.createMember(newMember);
    var newSubscription = {
        MemberId: answer ,
        Movies : []
    }
    var answer2 = await subscriptionsBL.createSubscription(newSubscription);
    return resp.json(answer +" , "+answer2);
})

//Put
router.route('/:id').put(async (req, resp) => {
    var updatedMember = req.body;
    var id = req.params.id;
    var answer = await membersBL.updateMember(id , updatedMember);
    return resp.json(answer);
})

//Delete 
router.route('/:id').delete(async (req , resp)=> {
    var id = req.params.id;
    var allSub = await subscriptionsBL.getAllSubscriptions()
    var filter = allSub.filter((sub) => sub.MemberId.toString() == id)
    var answer2 = await subscriptionsBL.deleteSubscription(filter[0]._id);
    var answer = await membersBL.deleteMember(id);
    return resp.json(answer + " , " + answer2);
})

module.exports = router;


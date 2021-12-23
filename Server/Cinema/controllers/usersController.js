const express = require('express');
const usersBL = require('../models/usersBL');
const Utilt = require('../jsonFile/JsonUtilt')

const router = express.Router();


//GetAll
router.route('/').get(async (req, resp) => {
    var data = await usersBL.getAllUsers();
    return resp.json(data);
})

//GetById
router.route('/:id').get(async (req, resp) => {
    var id = req.params.id;
    var data = {login : {} , user : {} , premmission : {}}
    data.login = await usersBL.getUserById(id);
    var premmissions = await Utilt.getJsonPremmissions();
    //maybe move to some (read about it)
    var premmission = premmissions.filter(user => user.Id == id)
    data.premmission = premmission[0];
    var users = await Utilt.getJsonUser();
    //maybe move to some
    var user = users.filter(user => user.Id == id)
    data.user = user[0];
    return resp.json(data);
})


//Post
router.route('/').post(async (req, resp) => {
    var newUser = req.body;
    var id = await usersBL.createUser2(newUser.login);
    var answerUser = await Utilt.addUser(newUser.user , id)
    var answerPremmission = await Utilt.addPremmission(newUser.premmission , id)

    return resp.json(answerUser +" "+answerPremmission);
})

//Put
router.route('/:id').put(async (req, resp) => {
    var updateUser = req.body.login;
    var id = req.params.id;
    var answer = await usersBL.updateUser(id , updateUser);
    var answer2 = await Utilt.editUser(req.body.user)
    var answer3 = await Utilt.editPremmission(req.body.premmission)
    return resp.json(answer +" "+answer2+" "+ answer3);
})

//Delete 
router.route('/:id').delete(async (req , resp)=> {
    var id = req.params.id;
    var deleteFromDB = await usersBL.deleteUser(id);
    var deleteFromJson = await Utilt.deleteUser(id);
    var deleteFromPremmission = await Utilt.deletePremmission(id);
    return resp.json(deleteFromDB +" "+deleteFromJson+" "+ deleteFromPremmission);
})

module.exports = router;


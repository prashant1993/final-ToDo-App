var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var todo = require('../../model/Tododb.js');

/* DELETE todo with given id */
router.delete('/:id', function(req, res) {
    try {
        console.log(req.decoded);
        var user_id = req.decoded;
        todo.find({
            _id: req.params.id,
            user_id: user_id
        }).remove(function(err, todos) {
            if (err) throw err;
            if (todos.result.n === 0) {
                res.send({
                    "status": false,
                    "message": "not deleted"
                });
            } else {
                res.send({
                    "status": true,
                    "message": "suucess deleted"
                });
            }
        });
    } catch (e) {
        res.send({
            "status": false,
            "message": "not deleted"
        });
    }
});
module.exports = router;

const {Comment} = require('../models/models')
class commentsController {
    create(req, res, next) {
        let {UserId, PublicationId, message} = req.body;
        Comment.create({UserId, PublicationId, message}).then(task => {
            res.json(task);
        });
    }
    update(req, res) {

    }
    delete(req, res) {

    }
    select(req, res){
        Comment.findAll().then(task =>{
            res.json(task);
        })
    }
}

module.exports = new commentsController();
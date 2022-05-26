const ApiError = require('../error/ApiError')

class chatsController {
    create(req, res) {

    }
    update(req, res) {

    }
    delete(req, res) {

    }
    select(req, res){
        res.json('Hi');
    }
    selectOne(req, res, next) {
        let {id} = req.query;
        if(!id) {
            return next(ApiError.badRequest('Не передан id'));
        }
        res.json(id);
    }
}

module.exports = new chatsController();
const uuid = require("uuid");
const path = require("path");
const {Publication} = require("../models/models");
const ApiError = require("../error/ApiError");

class publicationsController {
    create(req, res, next) {
        try {
            let {CarId, UserId, price, description} = req.body;
            let {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..','static', fileName));
            Publication.create({CarId, UserId, price, description, img: fileName}).then(task => {
                res.json(task);
            });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    update(req, res) {
    }
    delete(req, res) {

    }
    select(req, res){
        Publication.findAll().then(task =>{
           res.json(task);
        });
    }
    selectOne(req,res){
        let param = req.params.id;
        console.log(param);
        Publication.findOne({where: {id: param}}).then(
            user=>{
                res.json(user);
            }
        )
    }
    deleteOne(req, res){
        try{
            let param = req.params.id;
            console.log(param);
            Publication.destroy({where: {id: param}}).then(
                    res.json('Deleted!')
            )
        }
        catch (e) {
            res.json('Fail')
        }
    }
}

module.exports = new publicationsController();
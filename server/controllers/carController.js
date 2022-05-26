const {Car, Publication} = require('../models/models');
const ApiError = require('../error/ApiError');

class carController {
    create(req, res) {
        let {country, brand, model} = req.body;
        Car.create({country,brand,model}).then(task =>{
            res.json(task);
        })
    }
    update(req, res) {

    }
    delete(req, res) {

    }
    select(req, res){
        Car.findAll().then(task =>{
            res.json(task);
        })
    }
    selectOne(req, res){
        let param = req.params.id;
        console.log(param);
        Car.findOne({where: {id: param}}).then(
            user=>{
                res.json(user);
            }
        )
    }
    deleteOne(req, res){
        try{
            let param = req.params.id;
            console.log(param);
            Car.destroy({where: {id: param}}).then(
                res.json('Deleted!')
            )
        }
        catch (e) {
            res.json('Fail')
        }
    }
}

module.exports = new carController();
export { };
const data = require('./data')
const { surveyModel } = require('../model/surveyModel');
const db_init = (data: any) => {
    surveyModel.find((err: any, docs: any) => {
        if (docs.length === 0) {
            surveyModel.create(data, function (err: any) {
                if (err) return (err);
                // saved!
            })
        }

    })
}
db_init(data);
module.exports = db_init;
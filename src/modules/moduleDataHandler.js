// IMPORTANT IMPORTS
const Pracitce = require('./Practice.js')

/**
 * Loads already existing birthdayData into a new instance
 *
 * @since 1.0.0
 * @param {Object} data The module data of a user
 * @returns {Object} The module data with all module class instances
 */
module.exports.loadData = function (data){
    let res;
    if (!data){
        res = {practiceData: new Pracitce()}
    }else{
        res = {practiceData: Pracitce.load(data.practiceData)}
    }
    return res
}
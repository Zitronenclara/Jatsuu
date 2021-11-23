const config = {
    version: 1
}

/**
* All practice information of a user
* 
* @version 1.0.0
* @class
* @constructor
* @public
*/
module.exports = class practiceData {
    /**
     * Creates an instace of practiceData
     *
     * @since 1.0.0
     */
    constructor(){
        this.version = config.version
    }

    /**
     * Loads already existing practiceData into a new instance
     *
     * @since 1.0.0
     * @param {Object} data The practiceData
     * @returns {ThisParameterType} practiceData instance
     */
    static load(data){
        const pd = new this()
        bd.version = data.version
        return pd
    }
}

/**
 * Controller for getting all posts from the database
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
exports.getAll = (req, res, next) => {
    res.status(200).json({
        "get all": "Successfully gotten all posts from the database"
    });
};

/**
 * Controller for filtering posts from the database
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
exports.filter = (req, res, next) => {
    return res.status(200).json({
        "filtered": "Successfully filtered"
    });
};


exports.create = (req, res, next) => {
    res.status(201).json({
        "created": "Successfully created post in the database"
    });
};

exports.show = (req, res, next) => {
    res.status(201).json({
        "show": "Successfully showed post in the database"
    });
};

exports.update = (req, res, next) => {
    res.status(201).json({
        "updated": "Successfully updated post in the database"
    });
};

exports.delete = (req, res, next) => {
    res.status(201).json({
        "deleted": "Successfully deleted post in the database"
    });
};


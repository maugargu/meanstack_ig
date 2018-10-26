const BooksModel = require('../models/book');

function test(request, response) {
    response.status(200).send({
        code: 200,
        message: 'OK Test'
    });
}

function getAll(request, response) {
    BooksModel.find({}, (errorMongo, books) => {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(200).send({
            code: 200,
            message: 'OK',
            data: books
        });
    });
}

function getById(request, response) {
    BooksModel.find({ _id: request.query.Id }, (errorMongo, books) => {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(200).send({
            code: 200,
            message: 'OK',
            data: books
        });
    });
}

function insert(request, response) {
    let BookSchema = new BooksModel();

    if (!request.body.name) {
        return response.status(400).send({
            code: 400,
            message: 'Verifique los valores a registrar'
        });
    }

    BookSchema.name = request.body.name;
    BookSchema.author = request.body.author;
    BookSchema.editorial = request.body.editorial;

    BookSchema.save((errorMongo, book) => {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(201).send({
            code: 201,
            message: 'OK',
            data: book
        });
    });
}


function update(request, response) {
    BooksModel.updateOne({ _id: request.body.id }, {
        name: request.body.name,
        author: request.body.author,
        editorial: request.body.editorial
    }, function(errorMongo) {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(200).send({
            code: 200,
            message: 'OK'
        });
    });

}

function remove(request, response) {
    BooksModel.deleteOne({ _id: request.query.Id }, function(errorMongo) {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(200).send({
            code: 200,
            message: 'OK'
        });
    });
}

module.exports = {
    test,
    getAll,
    getById,
    insert,
    update,
    remove
}

/*

function test(request, response) {
    response.status(200).send({
        code: 200,
        message: "OK Test"
    });
}

function getAll(request, response) {
    response.status(200).send({
        code: 200,
        message: "OK GetAll"
    });
}

function getById(request, response) {
    response.status(200).send({
        code: 200,
        message: "OK GetById"
    });
}

function insert(request, response) {
    response.status(200).send({
        code: 200,
        message: "OK Insert"
    });
}

function update(request, response) {
    response.status(200).send({
        code: 200,
        message: "OK Update"
    });
}

function remove(request, response) {
    response.status(200).send({
        code: 200,
        message: "OK Remove"
    });
}


/////////////////////////////////////////////////////////////////////////////////////////////


const BooksModel = require('../models/book');

function test(request, response) {
    response.status(200).send({
        code: 200,
        message: 'OK Test'
    });
}

function getAll(request, response) {
    BooksModel.find({}, (errorMongo, books) => {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(200).send({
            code: 200,
            message: 'OK',
            data: books
        });
    });
}

function getById(request, response) {
    BooksModel.find({ _id: request.query.Id }, (errorMongo, books) => {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(200).send({
            code: 200,
            message: 'OK',
            data: books
        });
    });
}

function insert(request, response) {
    let BookSchema = new BooksModel();

    if (!request.body.name) {
        return response.status(400).send({
            code: 400,
            message: 'Verifique los valores a registrar'
        });
    }

    BookSchema.name = request.body.name;
    BookSchema.author = request.body.author;
    BookSchema.editorial = request.body.editorial;

    BookSchema.save((errorMongo, book) => {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(201).send({
            code: 201,
            message: 'OK',
            data: book
        });
    });
}


function update(request, response) {
    BooksModel.updateOne({ _id: request.body.id }, {
        name: request.body.name,
        author: request.body.author,
        editorial: request.body.editorial
    }, function(errorMongo) {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(200).send({
            code: 200,
            message: 'OK'
        });
    });

}

function remove(request, response) {
    BooksModel.deleteOne({ _id: request.query.Id }, function(errorMongo) {
        if (errorMongo) {
            return response.status(500).send({
                code: 500,
                message: errorMongo
            });
        }
        response.status(200).send({
            code: 200,
            message: 'OK'
        });
    });
}

**********************************************************************************************




*/
module.exports = {
    create: (req, res) => {

    },
    read: (req, res) => {
        if (req.query.rent) {
            req.app.get('db').filterProperties([req.session.user.id, req.query.rent]).then(properties => {
                console.log(properties)
                res.status(200).send(properties);
            })
        }
        else {
            req.app.get('db').getProperties([req.session.user.id]).then(properties => {
                res.status(200).send(properties);
            })
        }
    },
    delete: (req, res) => {

    }
}
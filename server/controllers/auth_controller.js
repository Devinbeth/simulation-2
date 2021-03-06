module.exports = {
    register: (req, res) => {
        const db = req.app.get('db');
        db.create_user([req.body.username, req.body.password]).then(user => {
            req.session.user.id = user[0].id;
            req.session.user.username = user[0].username;
            req.session.user.password = user[0].password;
            res.status(200).send(user)
        }).catch(() => res.status(500).send());
    },
    login: (req, res) => {
        const db = req.app.get('db');
        db.read_user([req.body.username, req.body.password]).then(user => {
            if (user[0].username === req.body.username && user[0].password === req.body.password) {
                req.session.user.id = user[0].id;
                req.session.user.username = user[0].username;
                req.session.user.password = user[0].password;
                res.status(200).send(user);
            }
            else {
                res.status(500).send();
            }
        }).catch(() => res.status(500).send());
    },
    logout: (req, res) => {

    }
}
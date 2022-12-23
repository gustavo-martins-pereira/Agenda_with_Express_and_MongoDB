exports.main = (req, res, next) => {
    res.render("index");

    return;
};

exports.post = (req, res, next) => {
    res.send();

    return;
};
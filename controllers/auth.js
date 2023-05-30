module.exports.login = function(req, res) {
    res.status(200).json({
        login: 'from console',
    })
}

module.exports.register = function(req, res) {
    res.status(200).json({
        register: 'from console',
    })
}
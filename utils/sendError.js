module.exports = sendError = (message, res, port) => res.status(port ? port : 401).json({ status: port ? port : 401, message })
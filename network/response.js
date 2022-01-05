exports.success = (req, res, message, status)=>{

    let statusCode = status || 200;
    let statusMesaage = message || ""
    res.status(status).send({
        error: false,
        status:status,
        body:message
    })
};


exports.error = (req, res, message, status)=>{

    let statusCode = status || 500
    let statusMesaage = message || "internal server Error"
    res.status(statusCode).send({
        error: false,
        status:status,
        body:message
    })
};
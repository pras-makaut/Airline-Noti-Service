const {StatusCodes} = require('http-status-codes')
const {EmailService} = require('../services');
const {ErrorResponse ,SuccessResponse} = require('../utils/common');

/**
 * 
 * POST : /cities
 * req-body : {Name:'Kolkata'}
 *  
 */
async function create(req,res){
    try {
        const response = await EmailService.createTicket({
            subject:req.body.subject,
            content:req.body.content,
            recepientEmail:req.body.recepientEmail
        })
        SuccessResponse.data = response;
        SuccessResponse.message ="Successfully crated a Ticket";
        return res.
                status(StatusCodes.CREATED).
                json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


module.exports = {
    create,
}
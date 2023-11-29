const {TicketRepositry} = require('../repositories');
const {Mailer} = require('../config');
const ticketRepository = new TicketRepositry();
async function sendMail(mailFrom,mailTo,subject,text){
    try {
        const response = await Mailer.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:subject,
            text:text
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function createTicket(data){
    try {
        const response = await ticketRepository.createData(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPendingEmails(){
    try {
        const response = await ticketRepository.getPendingEmails();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    sendMail,
    createTicket,
    getPendingEmails
}
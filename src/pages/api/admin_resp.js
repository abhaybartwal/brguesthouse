// https://www.bartwalguesthouse/api/agent_response?approve=approve&cutomer=9690346654

export default async function handler(req, res) {
    const { approve, cutomer } = req.query;

    if (approve == "approve" && cutomer != "") {
        await notifyCustomer(true, cutomer);
        res.status(200).json("Approved");

    }
    else if (approve == "declined" && cutomer != "") {
        await notifyCustomer(false, cutomer);
        res.status(200).json("Declined");

    }
    else {
        res.status(200).json("Invalid parametes")
    }

}

async function notifyCustomer(isConfirmed, number) {

    if (isConfirmed == true) {
        await sendMessageToCustomerConfirmedBooking("approved", number);
    }
    else if (isConfirmed == false) {
        await sendMessageToCustomerConfirmedBooking("declined", number);
    }

}


async function sendMessageToCustomerConfirmedBooking(status, number) {

    var raw = {};

    if (status == "approved") {
        raw = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "template",
            "template": {
                "name": "notify_confirmedbooking_customer",
                "language": {
                    "code": "en"
                }
            }
        });
    } else if (status == "declined") {
        raw = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "template",
            "template": {
                "name": "notify_customer_decline_booking",
                "language": {
                    "code": "en"
                }
            }
        });
    }

    var requestOptions = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_WHATSAPP_KEY}`,
            "Content-Type": "application/json"
        },
        body: raw,
        redirect: 'follow'
    };

    fetch(`https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/messages`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


}
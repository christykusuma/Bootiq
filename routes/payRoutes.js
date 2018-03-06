
module.exports = (app) => {

    // PAYPAL:
      app.post('/pay', (req, res) => {
        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:5000/success",
                "cancel_url": "http://localhost:5000/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };
        
        
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                for( let i = 0; i < payment.links.length; i++){
                    if(payment.links[i].href);
                }
            }
        });
      });

      app.get('/success', (req, res) => {
        const payId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": "payId",
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                } 
            }]
        }

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(JSON.stringify(payment));
                res.send("Success")
            }
      });
    });
    app.get('/cancel', (res, req) => {res.send('CANCELLED')})
}

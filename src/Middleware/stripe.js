require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);

const payment = async (req, res,next) => {
    let { bill } = req.body;
    // Ensure bill is a positive integer and convert to cents
    if (bill <= 0) {
        return res.status(400).send({ error: 'Amount must be greater than zero' });
    }

    // Convert to cents (if bill is in dollars)
    bill = Math.round(bill * 100);

    console.log(`Processing payment of $${bill / 100}...`);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: bill,
            currency: 'usd',
            payment_method_types: ['card'],
        });

        req.clientSecret = paymentIntent.client_secret;
        console.log(req.clientSecret)
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};

module.exports = { payment };

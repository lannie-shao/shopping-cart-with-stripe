// This is your test secret API key.
const express = require('express');
const cors=require('cors')
const dotenv=require('dotenv');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

app.post('/checkout', async (req, res) => {
    const items=req.body.items
    let lineItems=[]
    items.forEach(item=>{
        lineItems.push(
            {
                price:item.id,
                quantity:item.quantity,
            }
        )
    })

    //session is an obj created by stripe checkout
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/cancel`,
    });

   res.send(JSON.stringify({url:session.url}));
});

app.listen(4000, () => console.log('Running on port 4000'));
